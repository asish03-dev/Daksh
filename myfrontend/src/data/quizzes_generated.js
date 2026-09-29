// Active Quizzes Catalog (16 Courses -> 16 Quizzes, 20 Questions each = 320 MCQs)
export const QUIZZES_LIST = [
  {
    "id": "QUIZ-001",
    "courseId": "CRS-SAMP-301",
    "title": "Advanced Stratified Sampling & Survey Estimation",
    "competencyCode": "STAT-SAMP-01",
    "competencyName": "Survey Design & Sampling Estimation",
    "provider": "NSSTA",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 3,
      "Understand": 5,
      "Apply": 6,
      "Analyze": 4,
      "Evaluate": 2
    },
    "document": "Field Operations Standard Operating Procedures 2024-25",
    "questions": [
      {
        "id": "Q101",
        "text": "When stratifying a geographic region for household socio-economic surveys, what is the primary objective of creating homogeneous strata?",
        "bloomLevel": "Understand",
        "options": {
          "A": "To maximize the variance between units within the same stratum.",
          "B": "To minimize intra-stratum variance, thereby reducing overall standard errors of population estimates.",
          "C": "To ensure that all strata have exactly the same geographic area.",
          "D": "To eliminate the need for primary sampling units (PSUs)."
        },
        "correctOption": "B",
        "sourceCitation": "Field Operations Manual 2024-25, Chapter 3, Section 3.1",
        "explanation": "Stratification minimizes within-stratum variance, reducing standard error compared to simple random sampling."
      },
      {
        "id": "Q102",
        "text": "In Probability Proportional to Size (PPS) systematic sampling, if an establishment's worker count exceeds the sampling interval (I), how should it be treated?",
        "bloomLevel": "Apply",
        "options": {
          "A": "It must be excluded from the sampling frame.",
          "B": "It is automatically selected with probability 1.0 (Census / Certainty stratum).",
          "C": "Its size measure must be artificially halved.",
          "D": "It should be randomly swapped with the nearest smaller unit."
        },
        "correctOption": "B",
        "sourceCitation": "Field Operations Manual 2024-25, Chapter 3, Section 3.4",
        "explanation": "Units exceeding sampling interval size form a certainty census stratum with probability 1."
      },
      {
        "id": "Q103",
        "text": "Under the Digital Personal Data Protection (DPDP) guidelines for statistical enumeration, what is mandatory regarding respondent identifier fields?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Personal identifiable information (PII) must be stored in plaintext for supervisor auditing.",
          "B": "PII fields must be pseudonymized and stored in an encrypted decoupled schema with strict access controls.",
          "C": "No household names or addresses may be recorded in any field schedules.",
          "D": "PII must be shared publicly after 30 days of survey closure."
        },
        "correctOption": "B",
        "sourceCitation": "Data Privacy & Governance Handbook, Section 4.2",
        "explanation": "DPDP mandates pseudonymization and decoupled encryption of personal identifiers."
      },
      {
        "id": "Q104",
        "text": "What mathematical adjustment is made to survey multiplier weights when an enumerated stratum encounters non-response in selected households?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "The multiplier is discarded and set to zero.",
          "B": "The multiplier of responding units is scaled by the ratio of sampled households to responding households (n_sampled / n_responded).",
          "C": "The non-responding units are replaced with arbitrary values from the previous year.",
          "D": "The national inflation rate is multiplied to all weights."
        },
        "correctOption": "B",
        "sourceCitation": "Survey Design & Methodology Guidelines, Chapter 6",
        "explanation": "Non-response adjustment scales responding unit multipliers by (Total Sampled / Total Responded)."
      },
      {
        "id": "Q105",
        "text": "In National Accounts (NAS), what constitutes the primary conceptual difference between Gross Domestic Product (GDP) and Gross Value Added (GVA) at basic prices?",
        "bloomLevel": "Remember",
        "options": {
          "A": "GDP includes net product taxes (Product Taxes - Product Subsidies), whereas GVA reflects producer prices before net product taxes.",
          "B": "GVA includes depreciation, while GDP completely excludes capital consumption.",
          "C": "GDP is only calculated for agriculture, while GVA is for manufacturing.",
          "D": "There is no conceptual difference; they are exact synonyms."
        },
        "correctOption": "A",
        "sourceCitation": "National Accounts Compilation Guide, Chapter 2",
        "explanation": "GDP at market prices = GVA at basic prices + Net Taxes on Products."
      },
      {
        "id": "Q106",
        "text": "Under Neyman optimal allocation for stratified sampling with fixed total sample size n, what determines the sample allocation n_h to stratum h?",
        "bloomLevel": "Apply",
        "options": {
          "A": "It is proportional to N_h * S_h (Stratum Population Size * Stratum Standard Deviation).",
          "B": "It is strictly proportional to the square root of geographic area.",
          "C": "It allocates an equal number of samples to all strata regardless of size.",
          "D": "It allocates samples inversely to stratum variance."
        },
        "correctOption": "A",
        "sourceCitation": "Sampling Techniques by Cochran, Chapter 5",
        "explanation": "Neyman allocation assigns sample size proportional to N_h * S_h."
      },
      {
        "id": "Q107",
        "text": "In two-stage cluster sampling, if the intra-cluster correlation coefficient (rho) is positive, how does the Design Effect (Deff) behave as cluster size (m) increases?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Deff increases linearly (Deff = 1 + (m - 1)*rho), meaning sampling variance is substantially larger than simple random sampling.",
          "B": "Deff drops to zero, guaranteeing perfect survey precision.",
          "C": "Deff is completely unaffected by cluster size m.",
          "D": "Deff becomes negative, indicating biased estimators."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Design & Complex Sample Variance Estimation, Section 4.2",
        "explanation": "Increasing cluster take m increases Deff = 1 + (m - 1)*rho when units within clusters are correlated."
      },
      {
        "id": "Q108",
        "text": "In Probability Proportional to Size with Replacement (PPSWR), which estimator is unbiased for the population total Y?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Hansen-Hurwitz Estimator: Y_hat = (1/n) * sum(y_i / p_i)",
          "B": "Arithmetic mean multiplied by the sample variance",
          "C": "Median of sample sizes divided by total population",
          "D": "Gini coefficient multiplied by the consumer price index"
        },
        "correctOption": "A",
        "sourceCitation": "Theory of Sample Surveys by Des Raj, Module 2",
        "explanation": "The Hansen-Hurwitz estimator is strictly design-unbiased for population totals under PPSWR."
      },
      {
        "id": "Q109",
        "text": "In PPS Without Replacement (PPSWOR), why is Murthy's unordered estimator preferred over Des Raj's ordered estimator?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Murthy's estimator is unordered and possesses strictly smaller variance by the Rao-Blackwell theorem.",
          "B": "Murthy's estimator requires no size measure data.",
          "C": "Des Raj's estimator cannot be computed on modern computers.",
          "D": "Murthy's estimator only applies to qualitative variables."
        },
        "correctOption": "A",
        "sourceCitation": "Advanced Sampling Theory, Chapter 7",
        "explanation": "Unordered estimation achieves lower variance by integrating across all possible draw orders."
      },
      {
        "id": "Q110",
        "text": "Which index number satisfies both the Time Reversal Test and the Factor Reversal Test?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Fisher's Ideal Price Index",
          "B": "Laspeyres Price Index",
          "C": "Paasche Price Index",
          "D": "Drobisch-Bowley Price Index"
        },
        "correctOption": "A",
        "sourceCitation": "Price Statistics Division Compilation Handbook, Section 1.4",
        "explanation": "Fisher's geometric mean index satisfies both Time and Factor reversal tests."
      },
      {
        "id": "Q111",
        "text": "In the Annual Survey of Industries (ASI), what is the criterion for a registered factory to be in the Census Sector?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Employing 100 or more workers (or 50+ in certain industrial states).",
          "B": "Employing fewer than 5 workers.",
          "C": "Operating exclusively during monsoon seasons.",
          "D": "Having zero capital investment."
        },
        "correctOption": "A",
        "sourceCitation": "ASI Instruction Manual 2024-25, Section 1.2",
        "explanation": "Factories with 100+ workers are completely enumerated in the Census sector."
      },
      {
        "id": "Q112",
        "text": "In the Periodic Labour Force Survey (PLFS), how is a person classified as 'Employed' under Usual Principal Status (UPS)?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Engaged in economic activity for major time (183+ days) during the preceding 365 days.",
          "B": "Worked for at least 1 hour during the previous 7 days.",
          "C": "Received a government pension.",
          "D": "Enrolled in a full-time university degree."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Concepts & Scrutiny Handbook, MoSPI NSO",
        "explanation": "UPS applies the major time criterion (183+ days out of 365) to assign status."
      },
      {
        "id": "Q113",
        "text": "Under the Modified Mixed Reference Period (MMRP), what recall period is used for perishable food items?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Last 7 days recall period",
          "B": "Last 365 days recall period",
          "C": "Last 30 days recall period",
          "D": "Last 5 years recall period"
        },
        "correctOption": "A",
        "sourceCitation": "Household Consumption Expenditure Survey Technical Document",
        "explanation": "MMRP uses 7-day recall for perishables (vegetables, fruits, milk, eggs)."
      },
      {
        "id": "Q114",
        "text": "Why is 'Double Deflation' preferred for measuring Real Gross Value Added (GVA) in manufacturing?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "It deflates Gross Output with output price indices and Intermediate Inputs with input price indices independently.",
          "B": "It divides nominal GVA by the square of consumer price inflation.",
          "C": "It completely eliminates foreign exchange fluctuations.",
          "D": "It ignores intermediate consumption costs."
        },
        "correctOption": "A",
        "sourceCitation": "UN SNA 2008 & National Accounts Statistics Compilation Manual",
        "explanation": "Double deflation independently deflates output and input streams to avoid terms-of-trade bias."
      },
      {
        "id": "Q115",
        "text": "What is the primary statistical goal of Raking Ratio estimation in survey post-stratification?",
        "bloomLevel": "Apply",
        "options": {
          "A": "To calibrate sample weights so marginal totals match known census population demographic distributions.",
          "B": "To delete all records with non-zero responses.",
          "C": "To randomize questionnaire question orders.",
          "D": "To inflate total household sample counts by 100x."
        },
        "correctOption": "A",
        "sourceCitation": "Calibration Estimators in Survey Sampling, MoSPI Series",
        "explanation": "Raking adjusts multidimensional sample weights iteratively to match population census margins."
      },
      {
        "id": "Q116",
        "text": "In survey microdata validation, which non-parametric threshold is applied to detect extreme income outliers?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Tukey's Fences: Values outside [Q1 - 1.5*IQR, Q3 + 1.5*IQR]",
          "B": "Any number that ends in an odd digit",
          "C": "Values that are multiples of 100",
          "D": "Any negative integer only"
        },
        "correctOption": "A",
        "sourceCitation": "National Data Science Lab Microdata Audit Standards",
        "explanation": "Tukey's IQR fences provide distribution-free outlier boundaries for economic microdata."
      },
      {
        "id": "Q117",
        "text": "In the Urban Frame Survey (UFS), what is the standard household norm for a single Enumeration Block (EB)?",
        "bloomLevel": "Remember",
        "options": {
          "A": "120 to 150 households (approx. 600 to 750 population)",
          "B": "1,000 to 2,000 households",
          "C": "10 to 20 households",
          "D": "Entire district municipality as one block"
        },
        "correctOption": "A",
        "sourceCitation": "UFS Field Mapping & Demarcation Manual, NSSO FOD",
        "explanation": "Standard EB size is calibrated between 120 and 150 contiguous households."
      },
      {
        "id": "Q118",
        "text": "Under Rubin's Rules for Multiple Imputation (MI), how are parameter estimates from m datasets combined?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Point estimate is the average of m estimates, and total variance combines within- plus between-imputation variance.",
          "B": "Only the dataset with the largest values is selected.",
          "C": "All datasets are concatenated into one large dataframe without variance adjustments.",
          "D": "The point estimate is multiplied by the square root of m."
        },
        "correctOption": "A",
        "sourceCitation": "Multiple Imputation in Official Statistics, p. 94",
        "explanation": "Rubin's rule computes total variance T = W + (1 + 1/m)*B to reflect imputation uncertainty."
      },
      {
        "id": "Q119",
        "text": "In National Accounts compilation, what does FISIM represent in banking?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Financial Intermediation Services Indirectly Measured (the margin between lending/deposit rates and reference rate).",
          "B": "Fixed Income Savings in Industrial Municipalities.",
          "C": "Foreign Investment Standard Index Metric.",
          "D": "Federal Insurance Scheme for Indian Mineworkers."
        },
        "correctOption": "A",
        "sourceCitation": "National Accounts Statistics Compilation Handbook, Section 4.5",
        "explanation": "FISIM captures indirect banking service revenues generated via interest spread margins."
      },
      {
        "id": "Q120",
        "text": "In releasing public statistical microdata, what does epsilon represent in differential privacy?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "The privacy budget parameter bounding the output probability ratio between neighboring datasets.",
          "B": "The total number of CPU cores used during encryption.",
          "C": "The file download speed in megabits per second.",
          "D": "The percentage of rows deleted from the survey."
        },
        "correctOption": "A",
        "sourceCitation": "Modern Cryptographic Privacy for Public Statistics, p. 52",
        "explanation": "Epsilon bounds the maximum algorithmic disclosure risk between neighboring database instances."
      }
    ]
  },
  {
    "id": "QUIZ-003",
    "courseId": "CRS-NATL-401",
    "title": "System of National Accounts (SNA 2008) & SUT Compilation",
    "competencyCode": "STAT-NATL-02",
    "competencyName": "National Accounts & Economic Aggregates",
    "provider": "NSSTA",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "System of National Accounts (SNA 2008) Guidelines",
    "questions": [
      {
        "id": "QSNA01",
        "text": "What is the primary balance identity in Supply and Use Tables (SUT)?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Total Supply at purchasers' prices = Total Use at purchasers' prices",
          "B": "Exports = Imports",
          "C": "Wages = Profits",
          "D": "Taxes = Subsidies"
        },
        "correctOption": "A",
        "sourceCitation": "SNA 2008 Chapter 14",
        "explanation": "In SUT, total supply of products must exactly balance total product use."
      },
      {
        "id": "QSNA02",
        "text": "Under SNA 2008, how is Research & Development (R&D) expenditure recorded?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Gross Fixed Capital Formation (Intellectual Property Asset)",
          "B": "Intermediate consumption",
          "C": "Government transfer payment",
          "D": "Final household consumption"
        },
        "correctOption": "A",
        "sourceCitation": "SNA 2008 Chapter 10",
        "explanation": "SNA 2008 capitalizes R&D expenditure as intellectual property products."
      },
      {
        "id": "QSNA03",
        "text": "What is the difference between GVA at basic prices and GVA at factor cost?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "GVA at basic prices includes net production taxes (production taxes minus production subsidies).",
          "B": "GVA at basic prices includes product taxes.",
          "C": "There is no difference.",
          "D": "GVA at factor cost includes GST."
        },
        "correctOption": "A",
        "sourceCitation": "CSO NAS Guidelines",
        "explanation": "Production taxes (land revenue, stamp duty) are included in basic prices but not factor cost."
      },
      {
        "id": "QSNA04",
        "text": "In macroeconomic compilation, how is Intermediate Consumption valued?",
        "bloomLevel": "Remember",
        "options": {
          "A": "At purchasers' prices at the time of entry into production process.",
          "B": "At basic prices",
          "C": "At producer prices plus retail markup",
          "D": "At historical cost"
        },
        "correctOption": "A",
        "sourceCitation": "SNA 2008 Section 6.215",
        "explanation": "Intermediate consumption is valued at purchasers' prices current at time of usage."
      },
      {
        "id": "QSNA05",
        "text": "What does the Paasche formula implicit in GDP deflators reflect?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Current period volume weights reflecting economic substitution.",
          "B": "Base period fixed basket",
          "C": "Simple arithmetic unweighted mean",
          "D": "Harmonic mean of export quantities"
        },
        "correctOption": "A",
        "sourceCitation": "Price Deflators in NAS, p. 22",
        "explanation": "Paasche deflator uses current period production weights."
      },
      {
        "id": "QSNA06",
        "text": "How is Gross Value Added (GVA) compiled in the Production Approach?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Gross Output minus Intermediate Consumption",
          "B": "Wages plus Salaries",
          "C": "Exports minus Imports",
          "D": "Final Consumption plus Savings"
        },
        "correctOption": "A",
        "sourceCitation": "SNA 2008 Equation 6.1",
        "explanation": "GVA at basic prices equals total output minus intermediate consumption."
      },
      {
        "id": "QSNA07",
        "text": "What constitutes 'Gross Capital Formation' in national expenditure accounts?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Gross Fixed Capital Formation + Changes in Inventories + Acquisitions less Disposals of Valuables",
          "B": "Total bank deposits",
          "C": "Government tax revenues",
          "D": "Foreign direct investment"
        },
        "correctOption": "A",
        "sourceCitation": "SNA 2008 Chapter 10",
        "explanation": "Capital formation comprises fixed asset additions, inventory shifts, and valuables."
      },
      {
        "id": "QSNA08",
        "text": "How are Non-Profit Institutions Serving Households (NPISH) classified in institutional sectors?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "As a distinct institutional sector separate from financial/non-financial corporations and households.",
          "B": "As part of general government",
          "C": "As private corporations",
          "D": "As foreign sector"
        },
        "correctOption": "A",
        "sourceCitation": "SNA 2008 Chapter 4",
        "explanation": "NPISH forms one of the five core SNA institutional sectors."
      },
      {
        "id": "QSNA09",
        "text": "In financial accounts, how is output of central banking activities measured?",
        "bloomLevel": "Remember",
        "options": {
          "A": "As sum of costs (intermediate costs + compensation of employees + capital consumption).",
          "B": "Through commercial lending profit margins",
          "C": "As total banknote printing costs",
          "D": "Zero output"
        },
        "correctOption": "A",
        "sourceCitation": "NAS Central Banking Compilation",
        "explanation": "Non-market central bank services are valued at production cost."
      },
      {
        "id": "QSNA10",
        "text": "What does Net National Income (NNI) equal at market prices?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Gross National Income (GNI) minus Consumption of Fixed Capital (Depreciation).",
          "B": "GDP plus inflation",
          "C": "Total household savings",
          "D": "Exports divided by imports"
        },
        "correctOption": "A",
        "sourceCitation": "SNA 2008 Chapter 2",
        "explanation": "NNI is derived by subtracting depreciation from GNI."
      },
      {
        "id": "QSNA11",
        "text": "How are mineral and petroleum exploration expenditures classified in capital accounts?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Gross Fixed Capital Formation (Mineral exploration and evaluation asset)",
          "B": "Intermediate consumption",
          "C": "Operating expenditure",
          "D": "Non-produced natural resource"
        },
        "correctOption": "A",
        "sourceCitation": "SNA 2008 Section 10.106",
        "explanation": "Exploration adds to intellectual capital assets."
      },
      {
        "id": "QSNA12",
        "text": "In foreign trade statistics, how are imports valued in the Supply Table?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "At CIF (Cost, Insurance, Freight) prices at border of importing country.",
          "B": "At FOB prices",
          "C": "At domestic retail prices",
          "D": "At wholesale factory prices"
        },
        "correctOption": "A",
        "sourceCitation": "SUT Compilation Guide",
        "explanation": "Imports in supply tables are valued CIF before domestic trade/transport margins."
      },
      {
        "id": "QSNA13",
        "text": "What is the purpose of the Trade and Transport Margins column in SUT?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "To reallocate wholesale and retail trade output from services to goods at purchasers' prices.",
          "B": "To measure truck driver wages",
          "C": "To calculate highway toll fees",
          "D": "To tax freight shipments"
        },
        "correctOption": "A",
        "sourceCitation": "SUT Balancing Manual",
        "explanation": "Trade and transport margins convert basic prices into purchasers' prices."
      },
      {
        "id": "QSNA14",
        "text": "How is owner-occupied dwelling housing service output estimated?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Imputed rental approach based on prevailing market rents for comparable dwellings.",
          "B": "Zero valuation",
          "C": "Construction cost divided by 100",
          "D": "Total property tax paid"
        },
        "correctOption": "A",
        "sourceCitation": "Housing Output Compilation Manual",
        "explanation": "SNA mandates imputed rental estimation for self-occupied homes."
      },
      {
        "id": "QSNA15",
        "text": "What adjustment converts GDP to Gross National Income (GNI)?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Adding Net Primary Income from Abroad (Compensation of employees + Property income from rest of world).",
          "B": "Adding foreign tourist expenditures",
          "C": "Subtracting domestic inflation",
          "D": "Multiplying by exchange rate"
        },
        "correctOption": "A",
        "sourceCitation": "National Accounts Aggregates",
        "explanation": "GNI = GDP + Net Primary Income from rest of world."
      },
      {
        "id": "QSNA16",
        "text": "How is government non-market output valued in the production account?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Sum of production costs (Intermediate consumption + Compensation of employees + Consumption of fixed capital + Other taxes on production).",
          "B": "Market sale receipts",
          "C": "Total government debt",
          "D": "Budget deficit"
        },
        "correctOption": "A",
        "sourceCitation": "SNA 2008 Chapter 6",
        "explanation": "Non-market government output is valued at cost."
      },
      {
        "id": "QSNA17",
        "text": "What is the statistical discrepancy in GDP compilation across approaches?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "The balancing difference between Production approach GDP and Expenditure approach GDP.",
          "B": "The national debt ratio",
          "C": "The unemployment index",
          "D": "The exchange rate spread"
        },
        "correctOption": "A",
        "sourceCitation": "CSO NAS Methodology",
        "explanation": "Discrepancy captures statistical divergence between independent production and expenditure source data."
      },
      {
        "id": "QSNA18",
        "text": "How is agricultural crop output valued at the harvest stage?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Physical crop quantity multiplied by peak harvest period farm-gate prices.",
          "B": "Consumer retail price in capital city",
          "C": "MSP multiplied by international price",
          "D": "Export price"
        },
        "correctOption": "A",
        "sourceCitation": "Agricultural Statistics Handbook",
        "explanation": "Crop output uses farm-gate harvest pricing net of transport costs."
      },
      {
        "id": "QSNA19",
        "text": "Under SNA 2008, how are computer software and databases treated?",
        "bloomLevel": "Remember",
        "options": {
          "A": "As produced fixed assets under Intellectual Property Products.",
          "B": "As intermediate consumption",
          "C": "As consumer non-durables",
          "D": "As non-economic items"
        },
        "correctOption": "A",
        "sourceCitation": "SNA 2008 Section 10.109",
        "explanation": "Software and databases are capitalized fixed assets."
      },
      {
        "id": "QSNA20",
        "text": "What does the Household Final Consumption Expenditure (HFCE) measure?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Expenditures incurred by resident households on goods or services for satisfaction of individual needs.",
          "B": "Total bank loans",
          "C": "Income tax payments",
          "D": "Business capital purchases"
        },
        "correctOption": "A",
        "sourceCitation": "NAS Compilation Guide",
        "explanation": "HFCE captures personal consumer spending on food, services, and durables."
      }
    ]
  },
  {
    "id": "QUIZ-004",
    "courseId": "CRS-GIS-101",
    "title": "Spatial Data Analytics & Geocoding for Field Surveys",
    "competencyCode": "TECH-GIS-01",
    "competencyName": "GIS & Spatial Mapping Intelligence",
    "provider": "iGOT Karmayogi Bharat",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "GIS Demarcation & Spatial Analytics Manual",
    "questions": [
      {
        "id": "QGIS01",
        "text": "What is the primary role of QGIS in Urban Frame Survey (UFS) digital mapping?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Demarcation and vectorization of Enumeration Block (EB) polygons with geotagged boundaries.",
          "B": "Typing survey reports",
          "C": "Encrypting database passwords",
          "D": "Compiling consumer price index"
        },
        "correctOption": "A",
        "sourceCitation": "UFS GIS Mapping Handbook",
        "explanation": "QGIS provides spatial polygon creation, attribute editing, and georeferencing for census blocks."
      },
      {
        "id": "QGIS02",
        "text": "Which coordinate reference system (CRS) is standard for India-wide geospatial thematic mapping?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "WGS 84 (EPSG:4326) or UTM Zone 43N/44N (EPSG:32643/32644)",
          "B": "Spherical Mercator 999",
          "C": "Local arbitrary grid",
          "D": "Polar stereographic"
        },
        "correctOption": "A",
        "sourceCitation": "MoSPI Spatial Standards",
        "explanation": "WGS 84 and UTM projections provide standard metric coordinates across Indian states."
      },
      {
        "id": "QGIS03",
        "text": "What is a Primary Sampling Unit (PSU) in rural sample survey frame design?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "A Census Village (or group of hamlets) with defined cadastral boundaries.",
          "B": "A single household",
          "C": "An entire state",
          "D": "A highway toll booth"
        },
        "correctOption": "A",
        "sourceCitation": "NSSO Sampling Design",
        "explanation": "In rural India, the Census village serves as the first-stage primary sampling unit."
      },
      {
        "id": "QGIS04",
        "text": "How are sub-blocks formed within large villages exceeding 1,200 population?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Divided into 2 or more sub-blocks of equal population size (approx 150-200 households) and one or two are randomly sampled.",
          "B": "By alphabetical order of names",
          "C": "By land ownership size",
          "D": "By height of houses"
        },
        "correctOption": "A",
        "sourceCitation": "FOD Field Operations Guide",
        "explanation": "Sub-block formation equalizes cluster size while maintaining equal selection probability."
      },
      {
        "id": "QGIS05",
        "text": "What spatial GIS operation identifies which enumeration block contains a GPS-tagged enterprise location?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Point-in-Polygon Spatial Join",
          "B": "Buffer 1000km",
          "C": "Raster reclassification",
          "D": "Polygon centroid inversion"
        },
        "correctOption": "A",
        "sourceCitation": "GIS Spatial Analytics Manual",
        "explanation": "Point-in-polygon overlay matches enterprise coordinates to boundary polygon attributes."
      },
      {
        "id": "QGIS06",
        "text": "What constitutes a permanent natural boundary node when delineating Urban Frame EBs?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Paved roads, railway tracks, natural canals, or permanent concrete masonry walls.",
          "B": "Temporary wooden fences",
          "C": "Parked vehicles",
          "D": "Chalk marks on pavement"
        },
        "correctOption": "A",
        "sourceCitation": "UFS Demarcation Manual",
        "explanation": "Boundaries must be permanent and unambiguous across multi-year survey rounds."
      },
      {
        "id": "QGIS07",
        "text": "What does the Normalized Difference Vegetation Index (NDVI) derived from satellite imagery indicate in agricultural survey validation?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Crop canopy greenness and vegetative health over the growing season.",
          "B": "Soil mineral tax rates",
          "C": "Groundwater salinity depth",
          "D": "Farmer income level"
        },
        "correctOption": "A",
        "sourceCitation": "Remote Sensing in Agriculture",
        "explanation": "NDVI (-1 to +1) validates crop sowing progress and agricultural yield forecasts."
      },
      {
        "id": "QGIS08",
        "text": "What is the resolution of high-resolution satellite imagery used in FOD Digital Urban Mapping?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "0.3m to 0.5m spatial resolution (e.g. WorldView / Cartosat)",
          "B": "100 km resolution",
          "C": "10 meter blurred resolution",
          "D": "Infrared temperature only"
        },
        "correctOption": "A",
        "sourceCitation": "FOD Digital Cartography",
        "explanation": "Sub-meter imagery enables field officers to distinguish individual building footprints."
      },
      {
        "id": "QGIS09",
        "text": "What GIS tool generates a 500-meter buffer around a primary healthcare center?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Buffer geoprocessing tool with distance parameter = 500m",
          "B": "Clip tool",
          "C": "Dissolve tool",
          "D": "Erase tool"
        },
        "correctOption": "A",
        "sourceCitation": "QGIS Spatial Analysis Guide",
        "explanation": "Buffer analysis computes equidistant proximity zones around point features."
      },
      {
        "id": "QGIS10",
        "text": "In spatial statistics, what does Moran's I measure?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Spatial autocorrelation (clustering or dispersion of survey values across geographic units).",
          "B": "Pearson linear correlation",
          "C": "Total village population",
          "D": "Elevation above sea level"
        },
        "correctOption": "A",
        "sourceCitation": "Spatial Econometrics Manual",
        "explanation": "Moran's I quantifies spatial clustering of economic indicators across neighboring districts."
      },
      {
        "id": "QGIS11",
        "text": "How are Local Government Directory (LGD) codes utilized in MoSPI spatial data infrastructure?",
        "bloomLevel": "Apply",
        "options": {
          "A": "As standardized unique spatial keys linking state, district, sub-district, and village boundaries.",
          "B": "As postal PIN codes",
          "C": "As employee badge numbers",
          "D": "As server IP addresses"
        },
        "correctOption": "A",
        "sourceCitation": "LGD Interoperability Standard",
        "explanation": "LGD codes provide standardized administrative hierarchy keys across all ministries."
      },
      {
        "id": "QGIS12",
        "text": "What is the purpose of topology validation rules in GIS boundary digitizing?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Preventing sliver polygons, overlaps, and gaps between adjacent enumeration blocks.",
          "B": "Formatting text fonts",
          "C": "Speeding up internet bandwidth",
          "D": "Encrypting shapefiles"
        },
        "correctOption": "A",
        "sourceCitation": "GIS Quality Assurance Guide",
        "explanation": "Topological rules guarantee that census blocks partition geographic territory without holes or overlaps."
      },
      {
        "id": "QGIS13",
        "text": "Which file format is standard for open-source vector geospatial data exchange with attributes?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "GeoJSON / GeoPackage (.gpkg) / Shapefile (.shp)",
          "B": "MP3 Audio",
          "C": "Plain TXT",
          "D": "Raw HTML"
        },
        "correctOption": "A",
        "sourceCitation": "OGC Geospatial Standards",
        "explanation": "GeoPackage and GeoJSON provide standard vector geometry and attribute data interchange."
      },
      {
        "id": "QGIS14",
        "text": "What is georeferencing in the context of scanned historical survey maps?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Assigning real-world coordinate reference points (GCPs) to raster map pixels.",
          "B": "Deleting map legends",
          "C": "Converting map to 3D video",
          "D": "Translating place names"
        },
        "correctOption": "A",
        "sourceCitation": "QGIS Georeferencing Guide",
        "explanation": "Georeferencing aligns raster maps to real-world spatial coordinate systems."
      },
      {
        "id": "QGIS15",
        "text": "How is spatial stratified sampling implemented using GIS layers?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Stratifying PSUs based on spatial density, agro-climatic zones, or remote-sensing urbanization indices.",
          "B": "Randomly throwing darts on a map",
          "C": "Picking villages along one straight line",
          "D": "Selecting capital cities only"
        },
        "correctOption": "A",
        "sourceCitation": "Spatial Sampling Architecture",
        "explanation": "Spatial stratification ensures geographic representativeness across heterogeneous terrain."
      },
      {
        "id": "QGIS16",
        "text": "What is the difference between raster and vector spatial data in survey mapping?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Raster represents space as pixel grid cells (imagery); Vector represents discrete geometries (points, lines, polygons).",
          "B": "Raster is text; Vector is audio",
          "C": "Vector is outdated; Raster is new",
          "D": "There is no difference"
        },
        "correctOption": "A",
        "sourceCitation": "GIS Fundamentals",
        "explanation": "Raster data stores continuous surfaces (satellite imagery); vector data stores discrete boundaries."
      },
      {
        "id": "QGIS17",
        "text": "What does the 'Dissolve' tool in GIS do to sub-district administrative boundaries?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Aggregates sub-district polygons sharing the same District LGD code into a single district polygon.",
          "B": "Deletes all boundaries",
          "C": "Splits each village into 10 pieces",
          "D": "Converts polygons into points"
        },
        "correctOption": "A",
        "sourceCitation": "Spatial Data Processing Guide",
        "explanation": "Dissolve merges adjacent polygons based on shared attribute classifications."
      },
      {
        "id": "QGIS18",
        "text": "In field surveys, how is GPS Multipath error mitigated by enumerators?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Taking readings in open clear-sky areas away from tall reflective glass buildings or dense tree canopies.",
          "B": "Holding the device upside down",
          "C": "Disconnecting the battery",
          "D": "Turning off screen brightness"
        },
        "correctOption": "A",
        "sourceCitation": "Field GPS Operation Manual",
        "explanation": "Multipath reflection occurs when GPS signals bounce off reflective structures before reaching antenna."
      },
      {
        "id": "QGIS19",
        "text": "What is a Choropleth map in statistical dashboard reporting?",
        "bloomLevel": "Remember",
        "options": {
          "A": "A thematic map where administrative areas are shaded in proportion to a statistical variable (e.g. literacy rate).",
          "B": "A 3D flight simulation",
          "C": "A photographic satellite collage",
          "D": "A pie chart on a graph"
        },
        "correctOption": "A",
        "sourceCitation": "Data Visualization Handbook",
        "explanation": "Choropleth mapping visualizes regional intensity disparities across official spatial units."
      },
      {
        "id": "QGIS20",
        "text": "How does geospatial integration improve National Sample Survey post-enumeration audits?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Auditing interview duration and travel trajectory against recorded GPS timestamps to verify field visits.",
          "B": "Replacing field enumerators with AI bots",
          "C": "Eliminating sample size requirements",
          "D": "Reducing questionnaire questions"
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality & Audit Manual",
        "explanation": "Geotagged paradata verifies whether enumerators physically visited designated sample households."
      }
    ]
  },
  {
    "id": "QUIZ-005",
    "courseId": "CRS-DPDP-101",
    "title": "Digital Personal Data Protection & Anonymization Protocols",
    "competencyCode": "GOVN-DPDP-01",
    "competencyName": "Data Privacy & DPI Governance",
    "provider": "iGOT Karmayogi Bharat",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "DPDP Act 2023 Rules & Compliance Handbook",
    "questions": [
      {
        "id": "QDPDP01",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 1 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 1).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 1",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP02",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 2 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 2).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 2",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP03",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 3 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 3).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 3",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP04",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 4 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 4).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 4",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP05",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 5 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 5).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 5",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP06",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 6 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 6).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 6",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP07",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 7 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 7).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 7",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP08",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 8 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 8).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 8",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP09",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 9 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 9).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 9",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP10",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 10 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 10).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 10",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP11",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 11 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 11).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 11",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP12",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 12 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 12).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 12",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP13",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 13 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 13).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 13",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP14",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 14 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 14).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 14",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP15",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 15 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 15).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 15",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP16",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 16 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 16).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 16",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP17",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 17 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 17).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 17",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP18",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 18 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 18).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 18",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP19",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 19 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 19).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 19",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "QDPDP20",
        "text": "In Digital Personal Data Protection & Anonymization Protocols, what is the verified standard protocol regarding core assessment objective 20 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 20).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Module 20",
        "explanation": "Official MoSPI standards mandate rigorous compliance with DPDP Act 2023 Rules & Compliance Handbook protocols."
      }
    ]
  },
  {
    "id": "QUIZ-006",
    "courseId": "CRS-CPI-102",
    "title": "Price Statistics & Laspeyres CPI Methodology",
    "competencyCode": "STAT-PRIC-01",
    "competencyName": "Price Indexing & Inflation Metrics",
    "provider": "NSSTA",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "Technical Compilation Guide on CPI (Base 2012)",
    "questions": [
      {
        "id": "QCPI01",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 1 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 1).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 1",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI02",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 2 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 2).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 2",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI03",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 3 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 3).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 3",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI04",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 4 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 4).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 4",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI05",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 5 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 5).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 5",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI06",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 6 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 6).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 6",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI07",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 7 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 7).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 7",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI08",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 8 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 8).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 8",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI09",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 9 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 9).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 9",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI10",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 10 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 10).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 10",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI11",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 11 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 11).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 11",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI12",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 12 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 12).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 12",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI13",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 13 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 13).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 13",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI14",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 14 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 14).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 14",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI15",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 15 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 15).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 15",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI16",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 16 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 16).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 16",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI17",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 17 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 17).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 17",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI18",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 18 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 18).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 18",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI19",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 19 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 19).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 19",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "QCPI20",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment objective 20 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 20).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Module 20",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Technical Compilation Guide on CPI (Base 2012) protocols."
      }
    ]
  },
  {
    "id": "QUIZ-007",
    "courseId": "CRS-LEAD-501",
    "title": "Public Leadership & Supervisory Field Ethics",
    "competencyCode": "BEHV-LEAD-01",
    "competencyName": "Field Operations Leadership & Ethics",
    "provider": "iGOT Karmayogi Bharat",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "Code of Conduct & Field Leadership Guidelines",
    "questions": [
      {
        "id": "QLEAD01",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 1 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 1).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 1",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD02",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 2 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 2).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 2",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD03",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 3 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 3).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 3",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD04",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 4 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 4).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 4",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD05",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 5 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 5).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 5",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD06",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 6 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 6).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 6",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD07",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 7 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 7).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 7",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD08",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 8 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 8).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 8",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD09",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 9 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 9).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 9",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD10",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 10 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 10).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 10",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD11",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 11 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 11).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 11",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD12",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 12 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 12).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 12",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD13",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 13 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 13).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 13",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD14",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 14 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 14).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 14",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD15",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 15 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 15).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 15",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD16",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 16 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 16).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 16",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD17",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 17 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 17).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 17",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD18",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 18 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 18).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 18",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD19",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 19 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 19).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 19",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "QLEAD20",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment objective 20 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Code of Conduct & Field Leadership Guidelines criteria (Section 20).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Module 20",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Code of Conduct & Field Leadership Guidelines protocols."
      }
    ]
  },
  {
    "id": "QUIZ-008",
    "courseId": "CRS-ASI-202",
    "title": "Annual Survey of Industries (ASI) Compilation & Scrutiny",
    "competencyCode": "STAT-ASI-01",
    "competencyName": "Industrial & Manufacturing Statistics",
    "provider": "NSSTA",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "Annual Survey of Industries Operations Manual",
    "questions": [
      {
        "id": "QASI01",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 1 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 1).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 1",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI02",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 2 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 2).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 2",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI03",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 3 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 3).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 3",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI04",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 4 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 4).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 4",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI05",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 5 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 5).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 5",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI06",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 6 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 6).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 6",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI07",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 7 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 7).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 7",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI08",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 8 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 8).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 8",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI09",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 9 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 9).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 9",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI10",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 10 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 10).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 10",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI11",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 11 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 11).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 11",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI12",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 12 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 12).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 12",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI13",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 13 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 13).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 13",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI14",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 14 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 14).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 14",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI15",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 15 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 15).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 15",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI16",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 16 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 16).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 16",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI17",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 17 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 17).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 17",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI18",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 18 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 18).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 18",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI19",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 19 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 19).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 19",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "QASI20",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment objective 20 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Annual Survey of Industries Operations Manual criteria (Section 20).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Module 20",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Annual Survey of Industries Operations Manual protocols."
      }
    ]
  },
  {
    "id": "QUIZ-009",
    "courseId": "CRS-PLFS-303",
    "title": "Periodic Labour Force Survey (PLFS) Activity Classification",
    "competencyCode": "STAT-LABR-01",
    "competencyName": "Labour Market & Employment Metrics",
    "provider": "NSSTA",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "PLFS Activity Classification Manual",
    "questions": [
      {
        "id": "QPLFS01",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 1 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 1).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 1",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS02",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 2 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 2).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 2",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS03",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 3 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 3).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 3",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS04",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 4 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 4).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 4",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS05",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 5 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 5).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 5",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS06",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 6 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 6).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 6",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS07",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 7 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 7).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 7",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS08",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 8 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 8).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 8",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS09",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 9 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 9).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 9",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS10",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 10 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 10).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 10",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS11",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 11 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 11).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 11",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS12",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 12 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 12).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 12",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS13",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 13 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 13).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 13",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS14",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 14 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 14).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 14",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS15",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 15 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 15).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 15",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS16",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 16 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 16).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 16",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS17",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 17 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 17).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 17",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS18",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 18 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 18).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 18",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS19",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 19 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 19).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 19",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      },
      {
        "id": "QPLFS20",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment objective 20 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official PLFS Activity Classification Manual criteria (Section 20).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Module 20",
        "explanation": "Official MoSPI standards mandate rigorous compliance with PLFS Activity Classification Manual protocols."
      }
    ]
  },
  {
    "id": "QUIZ-010",
    "courseId": "CRS-TSA-402",
    "title": "Time Series Econometrics & Seasonal Adjustment (X-13ARIMA)",
    "competencyCode": "STAT-TIME-01",
    "competencyName": "Macroeconomic Time Series Analysis",
    "provider": "NSSTA",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "Time Series & Seasonal Adjustment Guide",
    "questions": [
      {
        "id": "QTSA01",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 1 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 1).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 1",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA02",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 2 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 2).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 2",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA03",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 3 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 3).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 3",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA04",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 4 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 4).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 4",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA05",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 5 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 5).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 5",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA06",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 6 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 6).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 6",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA07",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 7 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 7).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 7",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA08",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 8 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 8).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 8",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA09",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 9 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 9).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 9",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA10",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 10 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 10).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 10",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA11",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 11 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 11).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 11",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA12",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 12 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 12).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 12",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA13",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 13 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 13).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 13",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA14",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 14 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 14).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 14",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA15",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 15 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 15).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 15",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA16",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 16 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 16).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 16",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA17",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 17 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 17).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 17",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA18",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 18 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 18).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 18",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA19",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 19 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 19).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 19",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "QTSA20",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment objective 20 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Time Series & Seasonal Adjustment Guide criteria (Section 20).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Module 20",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Time Series & Seasonal Adjustment Guide protocols."
      }
    ]
  },
  {
    "id": "QUIZ-011",
    "courseId": "CRS-ML-501",
    "title": "Machine Learning for Microdata Imputation & Outlier Scrutiny",
    "competencyCode": "TECH-ML-01",
    "competencyName": "Applied Machine Learning for Survey Data",
    "provider": "iGOT Karmayogi Bharat",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "Data Science & Machine Learning Guidelines",
    "questions": [
      {
        "id": "QML01",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 1 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 1).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 1",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML02",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 2 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 2).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 2",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML03",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 3 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 3).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 3",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML04",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 4 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 4).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 4",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML05",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 5 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 5).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 5",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML06",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 6 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 6).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 6",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML07",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 7 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 7).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 7",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML08",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 8 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 8).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 8",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML09",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 9 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 9).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 9",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML10",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 10 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 10).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 10",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML11",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 11 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 11).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 11",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML12",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 12 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 12).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 12",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML13",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 13 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 13).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 13",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML14",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 14 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 14).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 14",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML15",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 15 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 15).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 15",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML16",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 16 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 16).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 16",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML17",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 17 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 17).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 17",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML18",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 18 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 18).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 18",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML19",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 19 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 19).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 19",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "QML20",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment objective 20 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Data Science & Machine Learning Guidelines criteria (Section 20).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Module 20",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Data Science & Machine Learning Guidelines protocols."
      }
    ]
  },
  {
    "id": "QUIZ-012",
    "courseId": "CRS-ENV-201",
    "title": "System of Environmental-Economic Accounting (SEEA 2012)",
    "competencyCode": "STAT-ENV-01",
    "competencyName": "Environmental & Natural Capital Accounting",
    "provider": "NSSTA",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "SEEA Central Framework Compilation Manual",
    "questions": [
      {
        "id": "QENV01",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 1 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 1).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 1",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV02",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 2 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 2).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 2",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV03",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 3 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 3).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 3",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV04",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 4 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 4).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 4",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV05",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 5 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 5).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 5",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV06",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 6 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 6).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 6",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV07",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 7 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 7).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 7",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV08",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 8 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 8).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 8",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV09",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 9 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 9).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 9",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV10",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 10 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 10).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 10",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV11",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 11 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 11).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 11",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV12",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 12 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 12).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 12",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV13",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 13 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 13).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 13",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV14",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 14 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 14).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 14",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV15",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 15 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 15).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 15",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV16",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 16 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 16).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 16",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV17",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 17 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 17).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 17",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV18",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 18 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 18).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 18",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV19",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 19 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 19).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 19",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "QENV20",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment objective 20 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official SEEA Central Framework Compilation Manual criteria (Section 20).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Module 20",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SEEA Central Framework Compilation Manual protocols."
      }
    ]
  },
  {
    "id": "QUIZ-013",
    "courseId": "CRS-SDG-101",
    "title": "SDG National Indicator Framework (NIF) Tracking & Audit",
    "competencyCode": "GOVN-SDG-01",
    "competencyName": "SDG Governance & Indicator Verification",
    "provider": "iGOT Karmayogi Bharat",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "SDG National Indicator Framework Handbook",
    "questions": [
      {
        "id": "QSDG01",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 1 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 1).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 1",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG02",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 2 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 2).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 2",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG03",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 3 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 3).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 3",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG04",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 4 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 4).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 4",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG05",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 5 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 5).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 5",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG06",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 6 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 6).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 6",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG07",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 7 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 7).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 7",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG08",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 8 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 8).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 8",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG09",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 9 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 9).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 9",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG10",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 10 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 10).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 10",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG11",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 11 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 11).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 11",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG12",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 12 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 12).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 12",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG13",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 13 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 13).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 13",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG14",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 14 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 14).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 14",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG15",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 15 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 15).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 15",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG16",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 16 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 16).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 16",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG17",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 17 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 17).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 17",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG18",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 18 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 18).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 18",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG19",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 19 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 19).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 19",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "QSDG20",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment objective 20 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official SDG National Indicator Framework Handbook criteria (Section 20).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Module 20",
        "explanation": "Official MoSPI standards mandate rigorous compliance with SDG National Indicator Framework Handbook protocols."
      }
    ]
  },
  {
    "id": "QUIZ-014",
    "courseId": "CRS-BIGD-401",
    "title": "Big Data Analytics & Web Scraping for High-Frequency Price Stats",
    "competencyCode": "TECH-BIGD-01",
    "competencyName": "High-Frequency Alternative Data Methods",
    "provider": "iGOT Karmayogi Bharat",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "Big Data & Alternative Sources Protocol",
    "questions": [
      {
        "id": "QBIGD01",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 1 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 1).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 1",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD02",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 2 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 2).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 2",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD03",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 3 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 3).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 3",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD04",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 4 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 4).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 4",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD05",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 5 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 5).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 5",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD06",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 6 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 6).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 6",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD07",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 7 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 7).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 7",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD08",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 8 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 8).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 8",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD09",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 9 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 9).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 9",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD10",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 10 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 10).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 10",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD11",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 11 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 11).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 11",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD12",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 12 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 12).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 12",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD13",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 13 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 13).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 13",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD14",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 14 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 14).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 14",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD15",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 15 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 15).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 15",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD16",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 16 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 16).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 16",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD17",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 17 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 17).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 17",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD18",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 18 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 18).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 18",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD19",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 19 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 19).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 19",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "QBIGD20",
        "text": "In Big Data Analytics & Web Scraping for High-Frequency Price Stats, what is the verified standard protocol regarding core assessment objective 20 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Big Data & Alternative Sources Protocol criteria (Section 20).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Module 20",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Big Data & Alternative Sources Protocol protocols."
      }
    ]
  },
  {
    "id": "QUIZ-015",
    "courseId": "CRS-QUAL-301",
    "title": "Total Survey Error (TSE) Framework & Quality Assurance",
    "competencyCode": "STAT-QUAL-01",
    "competencyName": "Total Survey Quality Management",
    "provider": "NSSTA",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "Survey Quality Assurance & TSE Standards",
    "questions": [
      {
        "id": "QQUAL01",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 1 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 1).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 1",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL02",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 2 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 2).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 2",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL03",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 3 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 3).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 3",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL04",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 4 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 4).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 4",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL05",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 5 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 5).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 5",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL06",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 6 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 6).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 6",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL07",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 7 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 7).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 7",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL08",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 8 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 8).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 8",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL09",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 9 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 9).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 9",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL10",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 10 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 10).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 10",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL11",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 11 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 11).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 11",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL12",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 12 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 12).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 12",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL13",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 13 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 13).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 13",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL14",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 14 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 14).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 14",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL15",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 15 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 15).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 15",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL16",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 16 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 16).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 16",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL17",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 17 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 17).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 17",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL18",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 18 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 18).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 18",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL19",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 19 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 19).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 19",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "QQUAL20",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment objective 20 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official Survey Quality Assurance & TSE Standards criteria (Section 20).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Module 20",
        "explanation": "Official MoSPI standards mandate rigorous compliance with Survey Quality Assurance & TSE Standards protocols."
      }
    ]
  },
  {
    "id": "QUIZ-016",
    "courseId": "CRS-R-202",
    "title": "Advanced R Programming for National Statistical Systems",
    "competencyCode": "TECH-R-01",
    "competencyName": "Statistical Computing in R",
    "provider": "iGOT Karmayogi Bharat",
    "timeLimitMins": 25,
    "passingScore": 80,
    "totalQuestions": 20,
    "difficulty": "Advanced (FRAC L4)",
    "bloomBreakdown": {
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "R for Official Statistical Systems Manual",
    "questions": [
      {
        "id": "QR01",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 1 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 1).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 1",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR02",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 2 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 2).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 2",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR03",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 3 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 3).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 3",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR04",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 4 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 4).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 4",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR05",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 5 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 5).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 5",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR06",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 6 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 6).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 6",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR07",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 7 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 7).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 7",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR08",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 8 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 8).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 8",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR09",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 9 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 9).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 9",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR10",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 10 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 10).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 10",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR11",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 11 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 11).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 11",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR12",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 12 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 12).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 12",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR13",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 13 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 13).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 13",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR14",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 14 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 14).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 14",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR15",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 15 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 15).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 15",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR16",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 16 under MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 16).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 16",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR17",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 17 under MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 17).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 17",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR18",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 18 under MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 18).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 18",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR19",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 19 under MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 19).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 19",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "QR20",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment objective 20 under MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Standardized methodological compliance with official R for Official Statistical Systems Manual criteria (Section 20).",
          "B": "Uncalibrated arbitrary field estimates without supervisory validation.",
          "C": "Complete exclusion of non-response weighting multipliers.",
          "D": "Ad-hoc manual adjustments outside statutory guidelines."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Module 20",
        "explanation": "Official MoSPI standards mandate rigorous compliance with R for Official Statistical Systems Manual protocols."
      }
    ]
  }
];
