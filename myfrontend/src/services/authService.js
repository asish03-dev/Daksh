/**
 * DAKSH Authentication Service
 * Connects React Frontend with Django REST Backend & PostgreSQL database
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/auth";

export const authService = {
  /**
   * Register a new user in PostgreSQL
   * @param {Object} data { email, password, confirm_password, role, name, department, designation }
   */
  async register({ email, password, confirm_password, role = "learner", name = "", department = "", designation = "" }) {
    try {
      const response = await fetch(`${API_BASE_URL}/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password,
          confirm_password: confirm_password || password,
          role,
          name: name.trim(),
          department,
          designation,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        let errorMessage = "Registration failed. Please check your details.";
        if (result.email) {
          errorMessage = Array.isArray(result.email) ? result.email[0] : result.email;
        } else if (result.password) {
          errorMessage = Array.isArray(result.password) ? result.password[0] : result.password;
        } else if (result.error) {
          errorMessage = result.error;
        } else if (result.message) {
          errorMessage = result.message;
        }
        throw new Error(errorMessage);
      }

      // Store tokens
      if (result.tokens) {
        localStorage.setItem("daksh_access_token", result.tokens.access);
        localStorage.setItem("daksh_refresh_token", result.tokens.refresh);
      }

      return {
        success: true,
        user: result.user,
        tokens: result.tokens,
        message: result.message || "Account created successfully.",
      };
    } catch (err) {
      return {
        success: false,
        error: err.message || "Could not connect to authentication server.",
      };
    }
  },

  /**
   * Log in an existing user from PostgreSQL
   * @param {string} email
   * @param {string} password
   */
  async login(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        let errorMessage = "Invalid email or password credentials.";
        if (result.non_field_errors) {
          errorMessage = Array.isArray(result.non_field_errors) ? result.non_field_errors[0] : result.non_field_errors;
        } else if (result.error) {
          errorMessage = result.error;
        } else if (result.detail) {
          errorMessage = result.detail;
        }
        throw new Error(errorMessage);
      }

      // Store tokens
      if (result.tokens) {
        localStorage.setItem("daksh_access_token", result.tokens.access);
        localStorage.setItem("daksh_refresh_token", result.tokens.refresh);
      }

      return {
        success: true,
        user: result.user,
        tokens: result.tokens,
        message: result.message || "Login successful.",
      };
    } catch (err) {
      return {
        success: false,
        error: err.message || "Authentication server error.",
      };
    }
  },

  /**
   * Get current authenticated user profile
   */
  async getCurrentUser() {
    const token = localStorage.getItem("daksh_access_token");
    if (!token) return null;

    try {
      const response = await fetch(`${API_BASE_URL}/user/`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) return null;
      const data = await response.json();
      return data.user || data;
    } catch (e) {
      return null;
    }
  },

  /**
   * Get officer onboarding profile from Django backend
   */
  async getOnboardingProfile() {
    const token = localStorage.getItem("daksh_access_token");
    if (!token) return { success: false, error: "Not authenticated" };

    try {
      const response = await fetch(`${API_BASE_URL}/onboarding/`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || result.detail || "Failed to load profile");
      }

      return {
        success: true,
        is_onboarded: result.is_onboarded,
        profile: result.profile,
        user: result.user
      };
    } catch (err) {
      return {
        success: false,
        error: err.message || "Could not retrieve onboarding profile.",
      };
    }
  },

  /**
   * Submit / update officer deployment profile in Django backend
   * @param {Object} data { name, employeeId, cadre, officialDesignation, ministry, organisation, postingLocation, avatar, weeklyLearningBudget }
   */
  async submitOnboarding(data) {
    const token = localStorage.getItem("daksh_access_token");
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}/onboarding/`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          name: data.name || data.full_name || "",
          employeeId: data.employeeId || data.employee_id || "",
          cadre: data.cadre || data.statistical_cadre || "",
          officialDesignation: data.officialDesignation || data.designation || "",
          ministry: data.ministry || data.department || "",
          organisation: data.organisation || "",
          postingLocation: data.postingLocation || data.current_posting_location || "",
          avatar: data.avatar || "",
          weeklyLearningBudget: data.weeklyLearningBudget || "4 Hours / Week",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        let errorMessage = "Failed to save officer deployment profile.";
        if (result.detail) errorMessage = result.detail;
        else if (result.error) errorMessage = result.error;
        else if (result.message) errorMessage = result.message;
        throw new Error(errorMessage);
      }

      return {
        success: true,
        profile: result.profile,
        user: result.user,
        message: result.message || "Officer deployment profile saved successfully.",
      };
    } catch (err) {
      return {
        success: false,
        error: err.message || "Could not connect to backend server.",
      };
    }
  },

  /**
   * Log out and clear tokens
   */
  logout() {
    localStorage.removeItem("daksh_access_token");
    localStorage.removeItem("daksh_refresh_token");
    localStorage.removeItem("daksh_user");
  }
};

export default authService;
