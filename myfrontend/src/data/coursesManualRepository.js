// =========================================================================
// DAKSH MANUAL RESOURCE LINKING REPOSITORY
// Clean Architecture: Predefined Course, Module, Video & Doc Titles with EMPTY URLs
// Philosophy: "You provide the real learning links. The system organizes & presents them beautifully."
// =========================================================================

const STORAGE_KEY = "daksh_manual_course_links_v1";

// Helper: Safely extract 11-char YouTube ID
export function extractYouTubeId(url) {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  const match = trimmed.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/i
  );
  return match ? match[1] : null;
}

// Helper: Validate HTTP/HTTPS URLs
export function isValidUrl(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const parsed = new URL(url.trim());
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

// INITIAL PRE-NAMED ACCREDITED COURSE SHELLS (URLs initially EMPTY)
export const INITIAL_MANUAL_COURSES = [
  {
    id: "CRS-PY-201",
    code: "TECH-PY-01",
    title: "Python for Data Processing, Scrutiny & Validation",
    category: "Informatics & Computing",
    provider: "iGOT Karmayogi Bharat & NPTEL (IIT Madras)",
    providerType: "igot",
    faculty: "Prof. Ragunathan Rengasamy (IIT Madras) & MoSPI Informatics Directorate",
    duration: "24 Hours",
    acbpCredits: 5,
    difficulty: "Intermediate",
    description: "Master automated survey data cleaning pipelines, cross-field logical validation rules, and statistical plotting using Python 3.12, Pandas 2.0, and NumPy.",
    modules: [
      {
        id: 1,
        title: "1. Python 3.12 & Pandas 2.0 PyArrow Memory Architecture",
        duration: "45 Mins",
        completed: true,
        video: {
          title: "Lecture 1: Python 3.12 Setup & PyArrow Memory Engine",
          source: "YouTube",
          url: "", // EMPTY - Ready for user's URL
          duration: "28:40"
        },
        document: {
          title: "MoSPI Standard Operating Procedure: Python for Microdata Scrutiny",
          source: "MoSPI Informatics Directorate",
          type: "Official Gazette SOP",
          url: "", // EMPTY - Ready for user's URL
          pages: 84,
          readingTime: "40 Mins",
          ref: "MoSPI/Informatics/2026/SOP-01"
        }
      },
      {
        id: 2,
        title: "2. Vectorized Cross-Field Logical Scrutiny Rule Engines",
        duration: "60 Mins",
        completed: true,
        video: {
          title: "Lecture 2: Writing Vectorized Household Scrutiny Logic Rules in Pandas",
          source: "YouTube",
          url: "", // EMPTY - Ready for user's URL
          duration: "32:15"
        },
        document: {
          title: "Technical Guidelines on Boolean Masking & Anomaly Detection",
          source: "PyData / MoSPI Survey Design Cell",
          type: "Technical Guidebook",
          url: "", // EMPTY - Ready for user's URL
          pages: 42,
          readingTime: "25 Mins",
          ref: "MoSPI/Informatics/2026/SCRUTINY"
        }
      },
      {
        id: 3,
        title: "3. Multiplier-Weighted Domain Tabulations & Aggregations",
        duration: "75 Mins",
        completed: false,
        active: true,
        video: {
          title: "Lecture 3: Survey Inflation Multipliers & Weighted Tabulations in Python",
          source: "YouTube",
          url: "", // EMPTY - Ready for user's URL
          duration: "30:00"
        },
        document: {
          title: "NSS Multiplier Weight Calibration & Sub-Sample Balancing SOP",
          source: "National Statistical Systems Training Academy (NSSTA)",
          type: "Statutory Manual",
          url: "", // EMPTY - Ready for user's URL
          pages: 58,
          readingTime: "35 Mins",
          ref: "NSSTA/TECH/2026/WEIGHTS"
        }
      },
      {
        id: 4,
        title: "4. Outlier Detection with Interquartile Bounds (IQR & Z-Score)",
        duration: "60 Mins",
        completed: false,
        video: {
          title: "Lecture 4: Robust Non-Parametric Outlier Thresholding on Microdata",
          source: "YouTube",
          url: "", // EMPTY
          duration: "25:00"
        },
        document: {
          title: "Statistical Scrutiny Bounds & Imputation Standards",
          source: "MoSPI Data Quality Division",
          type: "Quality Standard",
          url: "", // EMPTY
          pages: 36,
          readingTime: "20 Mins",
          ref: "MoSPI/DQD/2026/OUTLIER"
        }
      },
      {
        id: 5,
        title: "5. Production Deployment of Scrutiny Scripts & Capstone Exam",
        duration: "90 Mins",
        completed: false,
        video: {
          title: "Lecture 5: Deploying Automated Data Pipelines for Regional Field Offices",
          source: "YouTube",
          url: "", // EMPTY
          duration: "35:00"
        },
        document: {
          title: "Civil Services ACBP Examination Blueprint & Evaluation Rubric",
          source: "DoPT / MoSPI Capacity Building Commission",
          type: "Official Curriculum Manual",
          url: "", // EMPTY
          pages: 28,
          readingTime: "15 Mins",
          ref: "CBC/ACBP/2026/EVAL"
        }
      }
    ],
    pythonSandbox: {
      defaultScript: `# =========================================================================
# MoSPI Official Python Scrutiny Pipeline (Pandas 2.0 / NumPy)
# =========================================================================
import pandas as pd
import numpy as np

def run_scrutiny_audit(records):
    df = pd.DataFrame(records)
    print(">> Initializing MoSPI Automated Scrutiny Engine (Pandas 2.0)...")
    print(f">> Total Ingested Household Records: {len(df)}")
    
    # Validation Rule 1: Age vs Employment Category
    mask_child_work = (df["age"] < 14) & (df["activity_status"] == "Regular Salaried")
    df.loc[mask_child_work, "flag"] = "ERR_STAT_14: Underage Salaried Worker"
    
    # Validation Rule 2: Outlier Expenditure Ratio
    mask_exp = (df["monthly_exp"] > (df["monthly_income"] * 3.0))
    df.loc[mask_exp, "flag"] = "WARN_EXP_300: High Outlier Expenditure"
    
    return df

# Sample Survey Microdata
data = [
    {"id": "HH-001", "sector": "Rural", "age": 42, "monthly_income": 32000, "monthly_exp": 18500, "activity_status": "Self-Employed"},
    {"id": "HH-002", "sector": "Urban", "age": 12, "monthly_income": 0, "monthly_exp": 12000, "activity_status": "Regular Salaried"},
    {"id": "HH-003", "sector": "Rural", "age": 35, "monthly_income": 15000, "monthly_exp": 54000, "activity_status": "Casual Labour"}
]

result = run_scrutiny_audit(data)
print("\\n>> Scrutiny Audit Completed:")
print(result[["id", "sector", "age", "flag"]])`
    },
    keyTheorems: [
      { theorem: "Vectorized Boolean Indexing", formula: "df.loc[(df['age'] < 14) & (df['status'] == 'Work'), 'flag'] = 'ERR'", note: "High-performance zero-copy filter" },
      { theorem: "Weighted Domain Mean", formula: "\\bar{X}_w = \\frac{\\sum_{i=1}^n (w_i * x_i)}{\\sum_{i=1}^n w_i}", note: "Survey multiplier inflation formula" },
      { theorem: "IQR Outlier Range", formula: "[Q_1 - 1.5 * IQR,\\; Q_3 + 1.5 * IQR]", note: "Non-parametric threshold" }
    ]
  },

  {
    id: "CRS-SAMP-301",
    code: "STAT-SAMP-01",
    title: "Advanced Stratified Sampling & Survey Estimation",
    category: "Domain / Sampling Theory",
    provider: "NSSTA (National Statistical Systems Training Academy, Greater Noida)",
    providerType: "nssta",
    faculty: "Prof. A. K. Srivastava (Former Joint Director, IASRI / MoSPI Advisor)",
    duration: "18 Hours",
    acbpCredits: 4,
    difficulty: "Advanced",
    description: "In-depth training on multi-stage cluster sampling, Probability Proportional to Size (PPSWR/PPSWOR), Horvitz-Thompson unbiased estimation, and Jackknife variance formulations.",
    modules: [
      {
        id: 1,
        title: "1. Sampling Frame Construction & Urban Frame Survey (UFS)",
        duration: "45 Mins",
        completed: true,
        video: {
          title: "Lecture 1: Delineating First Stage Units (FSUs) & Census Frames",
          source: "YouTube",
          url: "", // EMPTY
          duration: "26:15"
        },
        document: {
          title: "National Sample Survey Sampling Methodology & Estimation Standard",
          source: "NSSTA Greater Noida",
          type: "Statutory Manual",
          url: "", // EMPTY
          pages: 68,
          readingTime: "40 Mins",
          ref: "MoSPI/NSSTA/2026/04"
        }
      },
      {
        id: 2,
        title: "2. PPS Selection Rules & Inclusion Probabilities",
        duration: "60 Mins",
        completed: true,
        video: {
          title: "Lecture 2: Probability Proportional to Size (PPSWR vs PPSWOR)",
          source: "YouTube",
          url: "", // EMPTY
          duration: "30:00"
        },
        document: {
          title: "Guidelines on PPS Selection in Socio-Economic Rounds",
          source: "MoSPI Survey Design Cell",
          type: "Technical Guide",
          url: "", // EMPTY
          pages: 45,
          readingTime: "30 Mins",
          ref: "MoSPI/SDC/2026/PPS"
        }
      },
      {
        id: 3,
        title: "3. Horvitz-Thompson Estimators & Multiplier Multipliers",
        duration: "75 Mins",
        completed: false,
        active: true,
        video: {
          title: "Lecture 3: Unbiased Population Total Estimation using Horvitz-Thompson",
          source: "YouTube",
          url: "", // EMPTY
          duration: "34:00"
        },
        document: {
          title: "Horvitz-Thompson Estimation & Sub-Sample Variance Protocols",
          source: "NSSTA Academy",
          type: "Curriculum Handbook",
          url: "", // EMPTY
          pages: 52,
          readingTime: "35 Mins",
          ref: "NSSTA/EST/2026/HT"
        }
      }
    ],
    keyTheorems: [
      { theorem: "Inclusion Probability", formula: "\\pi_i = n * \\frac{M_i}{\\sum M_k}", note: "First-order inclusion probability" },
      { theorem: "Horvitz-Thompson Estimator", formula: "\\hat{Y}_{HT} = \\sum_{i=1}^n \\frac{y_i}{\\pi_i}", note: "Unbiased population total" },
      { theorem: "Jackknife Variance", formula: "Var(\\hat{\\theta}) = \\frac{K-1}{K} \\sum_{k=1}^K (\\hat{\\theta}_{(k)} - \\hat{\\theta})^2", note: "Non-linear domain variance" }
    ]
  },

  {
    id: "CRS-NATL-401",
    code: "STAT-NATL-02",
    title: "System of National Accounts & SUT Compilation",
    category: "Domain / Macroeconomics",
    provider: "National Accounts Division (NAD), Central Statistics Office, MoSPI & IMF",
    providerType: "nssta",
    faculty: "Dr. Ramesh Kolli, Former Additional Director General (NAD, MoSPI)",
    duration: "30 Hours",
    acbpCredits: 6,
    difficulty: "Advanced",
    description: "System of National Accounts (SNA 2008 compliance), Gross Value Added (GVA) by economic sectors, Supply-Use Tables (SUT) matrix balancing, and FISIM estimation.",
    modules: [
      {
        id: 1,
        title: "1. SNA 2008 Conceptual Architecture & Institutional Sectors",
        duration: "60 Mins",
        completed: true,
        video: {
          title: "Lecture 1: Production Boundary, GVA at Basic Prices & Market Prices",
          source: "YouTube",
          url: "", // EMPTY
          duration: "31:40"
        },
        document: {
          title: "National Accounts Statistics: Sources and Methods Manual (SNA 2008)",
          source: "CSO National Accounts Division",
          type: "Statutory Manual",
          url: "", // EMPTY
          pages: 92,
          readingTime: "50 Mins",
          ref: "MoSPI/CSO/NAD/2026"
        }
      },
      {
        id: 2,
        title: "2. Supply-Use Matrix (SUT) Commodity Flow Balancing",
        duration: "120 Mins",
        completed: false,
        active: true,
        video: {
          title: "Lecture 2: Balancing Domestic Output, Imports & Product Taxes in SUT",
          source: "YouTube",
          url: "", // EMPTY
          duration: "40:00"
        },
        document: {
          title: "Methodological Manual on SUT Compilation & RAS Matrix Balancing",
          source: "NAD MoSPI & IMF Statistics",
          type: "Technical Manual",
          url: "", // EMPTY
          pages: 74,
          readingTime: "45 Mins",
          ref: "NAD/SUT/2026/BAL"
        }
      }
    ],
    keyTheorems: [
      { theorem: "GDP at Market Prices", formula: "GDP = \\sum GVA_{basic} + \\text{Product Taxes} - \\text{Product Subsidies}", note: "National accounting identity" },
      { theorem: "SUT Commodity Balance", formula: "\\text{Total Supply at Purchasers' Prices} = \\text{Total Uses}", note: "Input-Output identity" }
    ]
  },

  {
    id: "CRS-CPI-301",
    code: "STAT-CPI-01",
    title: "Consumer Price Index (CPI) Methodology & Basket Weighting",
    category: "Domain / Price Statistics",
    provider: "Price Statistics Division (PSD), MoSPI, Government of India",
    providerType: "nssta",
    faculty: "Shri D. Saibaba, Senior Statistical Officer & Index Compiler, PSD MoSPI",
    duration: "20 Hours",
    acbpCredits: 4,
    difficulty: "Intermediate",
    description: "Methodological compilation of Consumer Price Index (Rural, Urban, Combined), Jevons Geometric Mean elementary aggregation, HCES weighting, and base year chain-linking.",
    modules: [
      {
        id: 1,
        title: "1. Market Selection & Price Quotation Protocols",
        duration: "45 Mins",
        completed: true,
        video: {
          title: "Lecture 1: Consumer Price Index Survey Protocols & Market Selection",
          source: "YouTube",
          url: "", // EMPTY
          duration: "25:30"
        },
        document: {
          title: "Consumer Price Index Technical Compilation Manual (Base: 2026=100)",
          source: "Price Statistics Division, MoSPI",
          type: "Methodological Manual",
          url: "", // EMPTY
          pages: 56,
          readingTime: "35 Mins",
          ref: "MoSPI/PSD/2026/CPI-TAC"
        }
      },
      {
        id: 2,
        title: "2. Jevons Geometric Mean Elementary Aggregation",
        duration: "60 Mins",
        completed: false,
        active: true,
        video: {
          title: "Lecture 2: Calculating Elementary Price Relatives with Jevons Geometric Index",
          source: "YouTube",
          url: "", // EMPTY
          duration: "28:15"
        },
        document: {
          title: "Technical Standard on Elementary Aggregation & Outlier Quotation Treatment",
          source: "MoSPI Price Statistics Wing",
          type: "Standard Operating Procedure",
          url: "", // EMPTY
          pages: 40,
          readingTime: "25 Mins",
          ref: "PSD/SOP/2026/JEVONS"
        }
      }
    ],
    keyTheorems: [
      { theorem: "Jevons Geometric Index", formula: "I_J = \\exp\\left( \\frac{1}{n} \\sum_{i=1}^n \\ln(p_{i,t} / p_{i,0}) \\right)", note: "Elementary market price relative" },
      { theorem: "Modified Laspeyres", formula: "I_t = \\sum_{j=1}^m w_j * I_{j,t}", note: "Weighted higher-level index" }
    ]
  },

  {
    id: "CRS-GIS-101",
    code: "TECH-GIS-01",
    title: "Spatial Data Analytics & Geocoding for Field Surveys",
    category: "Informatics / Spatial Analysis",
    provider: "Indian Institute of Remote Sensing (IIRS/ISRO) & MoSPI",
    providerType: "igot",
    faculty: "Dr. Harish Chandra Karnatak (Head, IIRS Geoinformatics)",
    duration: "16 Hours",
    acbpCredits: 3,
    difficulty: "Beginner to Intermediate",
    description: "GIS shapefile delineation, coordinate systems (WGS84 EPSG:4326), Urban Frame Survey (UFS) digital block mapping, and ISRO Bhuvan geo-tagging.",
    modules: [
      {
        id: 1,
        title: "1. Fundamentals of GIS & Coordinate Systems (EPSG:4326)",
        duration: "45 Mins",
        completed: true,
        video: {
          title: "Lecture 1: Geographic Coordinate Systems & QGIS Setup",
          source: "YouTube",
          url: "", // EMPTY
          duration: "27:10"
        },
        document: {
          title: "Manual on Digital Urban Frame Survey & Spatial Mapping in MoSPI",
          source: "Indian Institute of Remote Sensing (ISRO)",
          type: "Technical SOP",
          url: "", // EMPTY
          pages: 68,
          readingTime: "35 Mins",
          ref: "IIRS/ISRO/2026/GIS-01"
        }
      }
    ],
    keyTheorems: [
      { theorem: "Haversine Distance", formula: "d = 2R * \\arcsin(\\sqrt{\\dots})", note: "GPS distance calculation" }
    ]
  },

  {
    id: "CRS-DPDP-201",
    code: "GOV-PRIV-01",
    title: "DPDP Act 2023 Compliance & Statistical Microdata Privacy",
    category: "Governance / Privacy Law",
    provider: "Ministry of Electronics & IT (MeitY) & MoSPI Digital Wing",
    providerType: "igot",
    faculty: "Adv. R. K. Grover, Data Governance Counsel, Government of India",
    duration: "12 Hours",
    acbpCredits: 3,
    difficulty: "Intermediate",
    description: "Statutory compliance under Digital Personal Data Protection Act 2023, Section 17 statistical research exemptions, k-anonymity, and Secure Research Data Centers (SRDC).",
    modules: [
      {
        id: 1,
        title: "1. Overview of DPDP Act 2023 & Civil Services Obligations",
        duration: "45 Mins",
        completed: true,
        video: {
          title: "Lecture 1: Statutory Obligations under DPDP Act 2023 for Official Surveys",
          source: "YouTube",
          url: "", // EMPTY
          duration: "22:15"
        },
        document: {
          title: "Data Governance & Anonymization Standard Operating Procedure (DPDP 2023)",
          source: "MeitY & MoSPI Data Governance Cell",
          type: "Gazette Notification",
          url: "", // EMPTY
          pages: 48,
          readingTime: "30 Mins",
          ref: "MeitY/DPDP/2026/SOP"
        }
      }
    ],
    keyTheorems: [
      { theorem: "k-Anonymity Bound", formula: "|\\text{Equivalence Class}(QID)| \\ge 5", note: "Cluster anonymity condition" }
    ]
  },

  {
    id: "CRS-AI-501",
    code: "TECH-AI-01",
    title: "Applied AI / ML for Official Statistical Pipelines",
    category: "Informatics / Advanced AI",
    provider: "National Informatics Centre (NIC) & Digital India AI Cell",
    providerType: "igot",
    faculty: "Dr. Arindam Bose, Lead AI Scientist (National AI Portal of India)",
    duration: "22 Hours",
    acbpCredits: 5,
    difficulty: "Advanced",
    description: "Machine learning for tabular survey microdata, BERT NLP for automated National Industrial Classification (NIC-2008/2026), and Isolation Forests for survey anomaly detection.",
    modules: [
      {
        id: 1,
        title: "1. Automated Text Classification for NIC/NCO Codes",
        duration: "60 Mins",
        completed: true,
        video: {
          title: "Lecture 1: NLP Classification Pipelines for Industry Descriptions",
          source: "YouTube",
          url: "", // EMPTY
          duration: "29:30"
        },
        document: {
          title: "AI & Automated Analytics Guidelines for the Indian Statistical System",
          source: "National Informatics Centre (NIC)",
          type: "Technical Blueprint",
          url: "", // EMPTY
          pages: 72,
          readingTime: "45 Mins",
          ref: "NIC/AI-Cell/2026/STD"
        }
      }
    ],
    keyTheorems: [
      { theorem: "TF-IDF Representation", formula: "\\text{tfidf}(t, d, D) = \\text{tf}(t, d) * \\log(|D| / |\\{d : t \\in d\\}|)", note: "Survey job description feature extractor" }
    ]
  },

  {
    id: "CRS-LEAD-101",
    code: "LEAD-STAT-01",
    title: "Statistical Leadership, APAR Standards & Project Governance",
    category: "Governance / Public Leadership",
    provider: "NSSTA Academy & Department of Personnel and Training (DoPT)",
    providerType: "nssta",
    faculty: "Smt. Anuradha Mukherjee, Director General (Training & Cadre Administration)",
    duration: "14 Hours",
    acbpCredits: 3,
    difficulty: "Executive",
    description: "Public statistical administration, National Statistical Commission (NSC) standards, SPARROW e-APAR KPI benchmarks, and GFR 2017 field survey logistics.",
    modules: [
      {
        id: 1,
        title: "1. SPARROW e-APAR Key Performance Indicators & Metrics",
        duration: "45 Mins",
        completed: true,
        video: {
          title: "Lecture 1: Public Governance & SPARROW e-APAR Benchmark Standards",
          source: "YouTube",
          url: "", // EMPTY
          duration: "24:10"
        },
        document: {
          title: "Handbook on Public Statistical Governance & SPARROW Standards (Rev. 2026)",
          source: "NSSTA Greater Noida & DoPT",
          type: "Executive Handbook",
          url: "", // EMPTY
          pages: 52,
          readingTime: "30 Mins",
          ref: "NSSTA/DoPT/2026/LEAD"
        }
      }
    ],
    keyTheorems: [
      { theorem: "ACBP Compliance Target", formula: "\\frac{\\text{Verified ACBP Credits}}{30\\text{ Hours}} \\ge 1.0", note: "Annual benchmark" }
    ]
  },
  {
    id: "CRS-ASI-202",
    code: "STAT-ASI-01",
    title: "Annual Survey of Industries (ASI) Compilation & Scrutiny",
    category: "Domain / Industrial Statistics",
    provider: "NSSTA (National Statistical Systems Training Academy)",
    providerType: "nssta",
    faculty: "Industrial Statistics Wing (ISW), Central Statistics Office, Kolkata",
    duration: "20 Hours",
    acbpCredits: 5,
    difficulty: "Advanced",
    description: "Master factory sector survey design, capital structure verification, gross value added computations, and industrial microdata scrutiny.",
    modules: [
      {
        id: 1,
        title: "1. Census vs Sample Sector Boundary Rules & NIC Classification",
        duration: "45 Mins",
        completed: true,
        video: {
          title: "Lecture 1: Annual Survey of Industries Frame & Sector Selection",
          source: "YouTube",
          url: "", // EMPTY
          duration: "28:00"
        },
        document: {
          title: "Instructions to Field Staff for ASI Schedule Scrutiny (Volume I)",
          source: "CSO Industrial Statistics Wing, Kolkata",
          type: "Statutory Manual",
          url: "", // EMPTY
          pages: 96,
          readingTime: "50 Mins",
          ref: "CSO/ISW/ASI/2026/01"
        }
      },
      {
        id: 2,
        title: "2. Block-wise Schedule Scrutiny (Blocks A through K)",
        duration: "60 Mins",
        completed: false,
        active: true,
        video: {
          title: "Lecture 2: Verification of Fixed Assets, Working Capital & Value of Output",
          source: "YouTube",
          url: "", // EMPTY
          duration: "35:00"
        },
        document: {
          title: "Technical SOP on Depreciation Reconciliation & Industrial Gross Value Added",
          source: "National Statistical Systems Training Academy (NSSTA)",
          type: "Standard Operating Procedure",
          url: "", // EMPTY
          pages: 64,
          readingTime: "35 Mins",
          ref: "NSSTA/ASI/2026/SCRUTINY"
        }
      }
    ],
    keyTheorems: [
      { theorem: "Industrial GVA Formulation", formula: "\\text{GVA} = \\text{Gross Output} - \\text{Total Input} - \\text{Depreciation}", note: "ASI factory accounting identity" }
    ]
  }
];

// ID Aliases for 100% interoperability across Officer and Admin portals
const COURSE_ID_ALIASES = {
  "CRS-CPI-102": "CRS-CPI-301",
  "CRS-DPDP-101": "CRS-DPDP-201",
  "CRS-LEAD-501": "CRS-LEAD-101"
};

// =========================================================================
// REPOSITORY SERVICE WITH LOCAL STORAGE PERSISTENCE
// =========================================================================
export class ManualCoursesRepository {
  static getCourses() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Error reading manual courses from localStorage:", e);
    }
    return INITIAL_MANUAL_COURSES;
  }

  static getCourseById(courseId) {
    if (!courseId) return this.getCourses()[0];
    const targetId = COURSE_ID_ALIASES[courseId] || courseId;
    const courses = this.getCourses();
    return courses.find((c) => c.id === targetId || c.id === courseId) || courses[0];
  }

  static updateResourceLink(courseId, moduleId, resourceType, newUrl) {
    const courses = this.getCourses();
    const courseIndex = courses.findIndex((c) => c.id === courseId);
    if (courseIndex === -1) return false;

    const course = { ...courses[courseIndex] };
    const moduleIndex = course.modules.findIndex((m) => m.id === moduleId);
    if (moduleIndex === -1) return false;

    const mod = { ...course.modules[moduleIndex] };
    if (resourceType === "video") {
      mod.video = { ...mod.video, url: newUrl.trim() };
    } else if (resourceType === "document") {
      mod.document = { ...mod.document, url: newUrl.trim() };
    }

    course.modules[moduleIndex] = mod;
    courses[courseIndex] = course;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
      return true;
    } catch (e) {
      console.error("Error saving manual courses to localStorage:", e);
      return false;
    }
  }

  static resetToDefault() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch {
      return false;
    }
  }
}
