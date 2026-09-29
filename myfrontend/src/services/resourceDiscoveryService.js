// =========================================================================
// RESOURCE DISCOVERY & VERIFICATION SERVICE (DAKSH LEARNING HUB)
// Manages intelligent query expansion, source-trust verification, and client caching.
// =========================================================================

import { VERIFIED_COURSES_CATALOG, SOURCE_TRUST_TIERS } from "../data/verifiedLearningResources";

const CACHE_PREFIX = "daksh_learning_resource_v1_";
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export class ResourceDiscoveryService {
  /**
   * Retrieves verified learning bundle for a given course and active unit
   */
  static async getCourseLearningBundle(courseId, activeUnitId = 1) {
    const cacheKey = `${CACHE_PREFIX}${courseId}_unit_${activeUnitId}`;
    
    // 1. Check local cache
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          return parsed.data;
        }
      }
    } catch (e) {
      console.warn("DAKSH Cache read error:", e);
    }

    // 2. Discover from curated verified catalog
    const courseData = VERIFIED_COURSES_CATALOG[courseId] || VERIFIED_COURSES_CATALOG["CRS-PY-201"];
    
    // Intelligent Query Expansion simulation
    const expandedQuery = this.generateExpandedQuery(courseData, activeUnitId);

    const bundle = {
      courseId: courseData.id,
      code: courseData.code,
      title: courseData.title,
      category: courseData.category,
      provider: courseData.provider,
      faculty: courseData.faculty,
      duration: courseData.duration,
      acbpCredits: courseData.acbpCredits,
      difficulty: courseData.difficulty,
      description: courseData.description,
      expandedQuery,
      activeUnit: courseData.units.find((u) => u.id === activeUnitId) || courseData.units[0],
      units: courseData.units,
      videos: courseData.videos || [],
      featuredVideo: courseData.videos?.[0] || null,
      studyMaterials: courseData.studyMaterials || [],
      pythonSandbox: courseData.pythonSandbox || null,
      keyTheorems: courseData.keyTheorems || [],
      discoveredAt: new Date().toISOString()
    };

    // 3. Save to local cache
    try {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ timestamp: Date.now(), data: bundle })
      );
    } catch (e) {
      console.warn("DAKSH Cache write error:", e);
    }

    return bundle;
  }

  /**
   * Generates intelligent search query vector for academic discovery
   */
  static generateExpandedQuery(course, unitId) {
    const unit = course.units?.find((u) => u.id === unitId) || course.units?.[0];
    const unitTitle = unit ? unit.title.replace(/^\d+\.\s*/, "") : "Methodology";
    return `${course.title} "${unitTitle}" ${course.providerType === "igot" ? "iGOT NPTEL" : "MoSPI NSSTA"} lecture tutorial`;
  }

  /**
   * Source Trust Classification
   */
  static getTrustBadge(sourceType) {
    return SOURCE_TRUST_TIERS[sourceType] || SOURCE_TRUST_TIERS.GOVERNMENT;
  }
}

export default ResourceDiscoveryService;
