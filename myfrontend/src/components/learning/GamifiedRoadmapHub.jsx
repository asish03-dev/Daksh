import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play, Lock, Award, Clock, ArrowRight,
  ShieldCheck, Download, Check,
  Flame, X, RefreshCw, Zap, Trophy,
  Video, BookOpen, FileText, CheckCircle2, Shield, AlertCircle
} from "lucide-react";
import { useUser } from "../../context/UserContext";
import OfficialCertificate from "../OfficialCertificate";

// =========================================================================
// 1. FRONTLINE ROADMAP STAGES (AMIT KUMAR MONDAL - TICKET EXAMINER)
// =========================================================================
export const AMIT_ROADMAP_STAGES = [
  // ROW 1: STAGES 01 - 04
  {
    nodeId: "node_amit_crs_1",
    type: "course",
    courseId: "CRS-CYBER-101",
    codeNumber: "01",
    title: "CYBER HYGIENE & PHISHING DEFENSE (CERT-IN MANDATES)",
    shortTitle: "Cyber Hygiene & CERT-In",
    category: "Course 01",
    estTime: "2.5h",
    xp: 50,
    bullets: [
      "Phishing triage & malicious domain isolation",
      "Mandatory 6-hour CERT-In incident reporting protocol"
    ],
    provider: "CERT-In & Ministry of Railways IT Security Directorate",
    summary: "Zero-trust cyber hygiene, phishing email triage, USB media restrictions, and statutory 6-hour incident escalation rules under CERT-In Directions 2022."
  },
  {
    nodeId: "node_amit_quiz_1",
    type: "assessment",
    quizId: "QUIZ-CYBER-101",
    codeNumber: "02",
    title: "CYBER DEFENSE & INCIDENT ESCALATION ASSESSMENT",
    shortTitle: "Cyber Threat Check",
    category: "Assessment 01",
    estTime: "10m",
    xp: 40,
    bullets: [
      "3 Scenario MCQs on CERT-In directions",
      "Real-time evaluation (≥66% pass threshold)"
    ],
    questions: [
      {
        id: "q1_amit_cyb",
        text: "Under CERT-In Cyber Security Directions 2022, what is the mandatory time window for reporting a ransomware or data compromise incident?",
        options: {
          A: "Within 24 hours of confirmation",
          B: "Within 6 hours of noticing the incident",
          C: "At the end of the monthly reporting cycle",
          D: "Within 72 hours via postal gazette"
        },
        correct: "B",
        explanation: "CERT-In Directions 2022 mandate reporting of cyber security incidents within 6 hours of notice."
      },
      {
        id: "q2_amit_cyb",
        text: "You receive an urgent email from 'support@cris-railnet-secure.top' asking to update your e-Office token password. What is the correct protocol?",
        options: {
          A: "Immediately click the link and enter current credentials",
          B: "Forward the email to all colleagues as a warning",
          C: "Do not click; flag as suspicious and report to CISO / RailTel IT Helpdesk",
          D: "Reply asking for proof of authority"
        },
        correct: "C",
        explanation: "Never interact with unverified external domain links; report directly to authorized departmental CISO."
      },
      {
        id: "q3_amit_cyb",
        text: "What is the official railway policy regarding personal USB pen drives on PRS terminal systems?",
        options: {
          A: "Allowed if scanned with free antivirus",
          B: "Strictly prohibited by Ministry IT Policy to prevent unauthorized data exfiltration",
          C: "Allowed only during night shifts",
          D: "Permitted for charging personal mobile devices"
        },
        correct: "B",
        explanation: "Government IT security policies enforce strict endpoint blocking on personal external storage devices."
      }
    ]
  },
  {
    nodeId: "node_amit_crs_2",
    type: "course",
    courseId: "CRS-DPDP-102",
    codeNumber: "03",
    title: "DPDP ACT 2023: PASSENGER DATA PRIVACY & AADHAAR REDACTION",
    shortTitle: "DPDP 2023 & Passenger Privacy",
    category: "Course 02",
    estTime: "3.0h",
    xp: 60,
    bullets: [
      "Digital Personal Data Protection Act 2023 Section 8 duties",
      "Aadhaar masking & passenger chart data minimization"
    ],
    provider: "Data Protection Board of India & Railway Board",
    summary: "Statutory mandates for frontline data fiduciaries, PII handling, masking Aadhaar numbers, and penalties under DPDP Act 2023."
  },
  {
    nodeId: "node_amit_quiz_2",
    type: "assessment",
    quizId: "QUIZ-DPDP-102",
    codeNumber: "04",
    title: "PASSENGER PII & AADHAAR REDACTION ASSESSMENT",
    shortTitle: "DPDP Compliance Check",
    category: "Assessment 02",
    estTime: "10m",
    xp: 45,
    bullets: [
      "3 Statutory privacy scenarios",
      "Real-time evaluation (≥66% pass threshold)"
    ],
    questions: [
      {
        id: "q1_amit_dpdp",
        text: "Under DPDP Act 2023, what constitutes lawful processing of passenger reservation PII by on-duty examiners?",
        options: {
          A: "Sharing reservation charts on public messaging groups for convenience",
          B: "Processing only for ticket verification purpose and preventing unauthorized disclosure",
          C: "Retaining passenger phone numbers in personal notebooks",
          D: "Selling passenger travel trends to local tour agencies"
        },
        correct: "B",
        explanation: "Data minimization and purpose limitation under DPDP Act 2023 Section 6 & 8 mandate strict confidential handling."
      },
      {
        id: "q2_amit_dpdp",
        text: "When verifying Aadhaar during ticket checking, how should the passenger identity document be handled?",
        options: {
          A: "Photograph both sides with personal smartphone camera",
          B: "Verify name/age visually or via official HHT device without recording unmasked 12 digits",
          C: "Retain physical photocopy for station records",
          D: "Ask passenger to write their full Aadhaar on the chart"
        },
        correct: "B",
        explanation: "UIDAI circulars and DPDP 2023 prohibit unauthorized photographing or recording full unmasked Aadhaar numbers."
      },
      {
        id: "q3_amit_dpdp",
        text: "What is the statutory penalty for severe data breaches caused by failure to observe reasonable security safeguards under DPDP Act 2023?",
        options: {
          A: "Up to ₹250 Crore penalty adjudicated by Data Protection Board",
          B: "Maximum ₹500 fine",
          C: "Verbal warning with no financial liability",
          D: "3-day leave deduction"
        },
        correct: "A",
        explanation: "Section 33 & Schedule of DPDP Act 2023 prescribes penalties up to ₹250 Crore for significant security lapses."
      }
    ]
  },
  // ROW 2: STAGES 05 - 08
  {
    nodeId: "node_amit_crs_3",
    type: "course",
    courseId: "CRS-GRIEV-103",
    codeNumber: "05",
    title: "PUBLIC GRIEVANCE REDRESSAL: CPGRAMS & RAILMADAD PROTOCOLS",
    shortTitle: "CPGRAMS & RailMadad Redressal",
    category: "Course 03",
    estTime: "3.0h",
    xp: 55,
    bullets: [
      "SOP for resolving RailMadad complaints within 30-minute benchmark",
      "Citizen centricity, empathy & de-escalation of passenger disputes"
    ],
    provider: "DARPG & Commercial Directorate (Railway Board)",
    summary: "Operational mastery of CPGRAMS 7.0 and RailMadad CRM portals, TAT escalation matrices, and passenger de-escalation communication."
  },
  {
    nodeId: "node_amit_quiz_3",
    type: "assessment",
    quizId: "QUIZ-GRIEV-103",
    codeNumber: "06",
    title: "CITIZEN CENTRICITY & DE-ESCALATION AUDIT",
    shortTitle: "Grievance Redressal Check",
    category: "Assessment 03",
    estTime: "10m",
    xp: 50,
    bullets: [
      "3 Passenger dispute resolution scenarios",
      "Real-time evaluation (≥66% pass threshold)"
    ],
    questions: [
      {
        id: "q1_amit_grv",
        text: "A passenger logs a RailMadad complaint regarding unauthorized berth occupation. What is the standard operating turnaround time (TAT)?",
        options: {
          A: "Within 24 hours after train reaches destination",
          B: "Within 30 minutes on running trains via onboard staff coordination",
          C: "At next division weekly review meeting",
          D: "No fixed time limit"
        },
        correct: "B",
        explanation: "RailMadad benchmarks mandate real-time onboard grievance resolution within 30 minutes."
      },
      {
        id: "q2_amit_grv",
        text: "When handling an agitated passenger due to a train delay, what is the approved citizen-centric de-escalation technique?",
        options: {
          A: "Argue and blame higher management",
          B: "Listen actively without interruption, acknowledge concern with calm demeanor, and provide verified NTES facts",
          C: "Refuse to speak without written application",
          D: "Threaten to issue an EFT penalty ticket"
        },
        correct: "B",
        explanation: "Civil services citizen-centricity guidelines emphasize active listening, emotional calm, and factual transparency."
      },
      {
        id: "q3_amit_grv",
        text: "On the CPGRAMS portal, what is the maximum permissible timeline for final disposal of public grievances under DARPG guidelines?",
        options: {
          A: "21 days (reduced from previous 30-day ceiling)",
          B: "90 days",
          C: "6 months",
          D: "1 year"
        },
        correct: "A",
        explanation: "DARPG revised guidelines stipulate a strict maximum 21-day timeline for CPGRAMS grievance closure."
      }
    ]
  },
  {
    nodeId: "node_amit_crs_4",
    type: "course",
    courseId: "CRS-EOFFICE-104",
    codeNumber: "07",
    title: "E-OFFICE WORKFLOW, DSC SIGNATURES & E-HRMS LEAVE MANAGEMENT",
    shortTitle: "e-Office & Digital Signatures",
    category: "Course 04",
    estTime: "2.5h",
    xp: 55,
    bullets: [
      "e-File creation, noting, and cryptographic DSC token signing",
      "e-HRMS digital service book and leave ledger reconciliation"
    ],
    provider: "NIC & DoPT (Department of Personnel & Training)",
    summary: "NIC e-Office 7.0 protocols, DSC digital certificates, e-HRMS 2.0 biometric attendance, and leave management compliance."
  },
  {
    nodeId: "node_amit_quiz_4",
    type: "assessment",
    quizId: "QUIZ-CAP-AMIT",
    codeNumber: "08",
    title: "FINAL CAPSTONE: FRONTLINE OPERATIONAL INTEGRITY & READINESS",
    shortTitle: "Frontline Capstone Exam",
    category: "Capstone 08",
    estTime: "15m",
    xp: 80,
    bullets: [
      "Comprehensive 4 MCQ official audit",
      "Qualifies for Sovereign Frontline Certification"
    ],
    questions: [
      {
        id: "q1_cap_amit",
        text: "Which digital credential is legally recognized under the IT Act 2000 for approving official electronic files in e-Office?",
        options: {
          A: "Scanned image of handwritten signature pasted in Word",
          B: "Class 3 Cryptographic Digital Signature Certificate (DSC) / e-Sign Aadhaar token",
          C: "Plain text typing of officer name",
          D: "WhatsApp confirmation message"
        },
        correct: "B",
        explanation: "Section 3 of IT Act 2000 recognizes Class 3 DSC and Aadhaar e-Sign for official electronic authentications."
      },
      {
        id: "q2_cap_amit",
        text: "Under CERT-In 2022 guidelines, what is the immediate action when a frontline handheld terminal displays malware warnings?",
        options: {
          A: "Ignore until the end of the shift",
          B: "Disconnect network immediately and inform IT Incident Response Team within 6 hours",
          C: "Restart 5 times and proceed with offline transactions",
          D: "Hand over device to unauthorized local technician"
        },
        correct: "B",
        explanation: "Device isolation stops lateral malware spread, fulfilling CERT-In 6-hour reporting mandate."
      },
      {
        id: "q3_cap_amit",
        text: "How does proper e-HRMS leave management protect an officer's service book integrity?",
        options: {
          A: "It eliminates physical paperwork loss and establishes audit-proof leave credits for APAR",
          B: "It permits taking unapproved leave automatically",
          C: "It replaces the need for performance appraisal",
          D: "It gives extra holiday credits randomly"
        },
        correct: "A",
        explanation: "Digital service books in e-HRMS ensure accurate transparent reconciliation of leave encashment and pension benefits."
      },
      {
        id: "q4_cap_amit",
        text: "In public frontline interaction, how does adherence to DPDP Act 2023 and CPGRAMS standards impact Railway APAR grading?",
        options: {
          A: "Directly contributes to 'Public Dealing & Integrity' competency scores in SPARROW",
          B: "Has zero relevance to annual performance evaluations",
          C: "Only affects commercial contractors, not railway officers",
          D: "Replaces railway ticket revenue targets"
        },
        correct: "A",
        explanation: "Competency-based SPARROW APAR systems evaluate public service delivery, compliance, and citizen satisfaction directly."
      }
    ]
  }
];

// =========================================================================
// 2. GAZETTED ROADMAP STAGES (SUPARNA CHATTERJEE - SECTION OFFICER)
// =========================================================================
export const SUPARNA_ROADMAP_STAGES = [
  // ROW 1: STAGES 01 - 04
  {
    nodeId: "node_sup_crs_1",
    type: "course",
    courseId: "CRS-GFR-401",
    codeNumber: "01",
    title: "GFR 2017 & GEM PUBLIC PROCUREMENT MASTERCLASS",
    shortTitle: "GFR 2017 & GeM Masterclass",
    category: "Course 01",
    estTime: "4.0h",
    xp: 60,
    bullets: [
      "GFR Rules 144, 149, 154, and 155 procurement thresholds",
      "Single-source proprietary certificates under GFR Rule 166/194"
    ],
    provider: "Department of Expenditure (Ministry of Finance) & GeM Academy",
    summary: "Comprehensive public financial management, GeM 4.0 purchase order life cycle, reverse auctions, PAC certificates, and GFR 2017 audit adherence."
  },
  {
    nodeId: "node_sup_quiz_1",
    type: "assessment",
    quizId: "QUIZ-GFR-401",
    codeNumber: "02",
    title: "GFR 2017 & GEM PUBLIC PROCUREMENT ASSESSMENT",
    shortTitle: "GFR & GeM Audit Check",
    category: "Assessment 01",
    estTime: "10m",
    xp: 50,
    bullets: [
      "3 Statutory procurement case scenarios",
      "Real-time evaluation (≥66% pass threshold)"
    ],
    questions: [
      {
        id: "q1_sup_gfr",
        text: "Under GFR 2017 Rule 149, when is procurement through Government e-Marketplace (GeM) mandatory for Central Government Ministries?",
        options: {
          A: "Only for goods exceeding ₹1 Crore",
          B: "Mandatory for all common use Goods and Services available on GeM platform",
          C: "Optional at the discretion of the Section Officer",
          D: "Only during the last quarter of the financial year"
        },
        correct: "B",
        explanation: "GFR Rule 149 explicitly mandates procurement of all common use goods/services through GeM whenever available."
      },
      {
        id: "q2_sup_gfr",
        text: "What is the maximum financial ceiling for direct procurement without quotation under GFR 2017 Rule 154 (as amended)?",
        options: {
          A: "₹25,000 per occasion (up to ₹50,000 for specialized cases)",
          B: "₹5,00,000 per occasion",
          C: "₹10,00,000 per occasion",
          D: "No limit if approved by SO"
        },
        correct: "A",
        explanation: "Rule 154 permits direct procurement without committee up to ₹25,000 (subject to certificate of suitability and quality)."
      },
      {
        id: "q3_sup_gfr",
        text: "Under GFR 2017 Rule 194, when engaging a Single Source consultant, which document is strictly required before issuing the contract?",
        options: {
          A: "Informal quotation via email",
          B: "Detailed justification and Proprietary Article Certificate (PAC) approved by Competent Authority",
          C: "Newspaper advertisement",
          D: "No justification is needed"
        },
        correct: "B",
        explanation: "Single-source selection requires strict PAC certificate and recorded justification approved by competent financial authority."
      }
    ]
  },
  {
    nodeId: "node_sup_crs_2",
    type: "course",
    courseId: "CRS-VIG-402",
    codeNumber: "03",
    title: "PREVENTIVE VIGILANCE & CVC STATUTORY DISCIPLINARY GUIDELINES",
    shortTitle: "Preventive Vigilance & CVC Rules",
    category: "Course 02",
    estTime: "3.5h",
    xp: 60,
    bullets: [
      "CVC Manual 2021 & CCS (CCA) Rules 1965 Rule 14/16 inquiries",
      "Whistleblower protection & conflict of interest disclosures"
    ],
    provider: "Central Vigilance Commission (CVC) & DoPT",
    summary: "Preventive vigilance administration, IO/PO procedures in departmental proceedings, CVC circular compliance, and tender scrutiny red flags."
  },
  {
    nodeId: "node_sup_quiz_2",
    type: "assessment",
    quizId: "QUIZ-VIG-402",
    codeNumber: "04",
    title: "VIGILANCE ADMINISTRATION & DISCIPLINARY PROCEEDINGS CHECK",
    shortTitle: "Vigilance Audit Check",
    category: "Assessment 02",
    estTime: "10m",
    xp: 50,
    bullets: [
      "3 Departmental inquiry scenarios",
      "Real-time evaluation (≥66% pass threshold)"
    ],
    questions: [
      {
        id: "q1_sup_vig",
        text: "Under CCS (CCA) Rules 1965, what is the primary procedural difference between Rule 14 and Rule 16 proceedings?",
        options: {
          A: "Rule 14 is for Major Penalties requiring oral inquiry; Rule 16 is for Minor Penalties",
          B: "Rule 14 applies only to contractual staff",
          C: "Rule 16 requires judicial prosecution in High Court",
          D: "Both rules have identical procedures"
        },
        correct: "A",
        explanation: "Rule 14 governs detailed major penalty inquiries with Inquiry Officer; Rule 16 provides summary procedure for minor penalties."
      },
      {
        id: "q2_sup_vig",
        text: "According to CVC guidelines, what constitutes a major red flag during tender bid evaluation in public procurement?",
        options: {
          A: "Multiple bidders sharing identical IP addresses or bank guarantee sources (Bid Rigging)",
          B: "Bids submitted 10 minutes before the deadline",
          C: "Vendor asking technical queries in pre-bid meeting",
          D: "Vendor having ISO certification"
        },
        correct: "A",
        explanation: "Identical IP addresses or same BG issuers indicate cartel formation and collusive bid rigging under CVC guidelines."
      },
      {
        id: "q3_sup_vig",
        text: "Under the Public Interest Disclosure and Protection of Informers (PIDPI) resolution, who is the designated authority to receive complaints?",
        options: {
          A: "Central Vigilance Commission (CVC)",
          B: "Local Police Station",
          C: "Private Arbitration Council",
          D: "Ministry Reception Desk"
        },
        correct: "A",
        explanation: "CVC is designated as the apex agency under PIDPI Resolution to receive whistleblowing disclosures while protecting identity."
      }
    ]
  },
  // ROW 2: STAGES 05 - 08
  {
    nodeId: "node_sup_crs_3",
    type: "course",
    courseId: "CRS-SNA-403",
    codeNumber: "05",
    title: "ADVANCED MACROECONOMIC AGGREGATES & SNA 2008 SUT COMPILATION",
    shortTitle: "National Accounts (SNA 2008)",
    category: "Course 03",
    estTime: "4.5h",
    xp: 65,
    bullets: [
      "Supply and Use Tables (SUT) double-deflation methodology",
      "Gross Fixed Capital Formation (GFCF) & FISIM calculations"
    ],
    provider: "National Accounts Division (NAD, MoSPI) & NSSTA",
    summary: "United Nations System of National Accounts (SNA 2008) guidelines, Supply and Use Tables balancing, double deflation of service sector GVA, and quarterly GDP compilation."
  },
  {
    nodeId: "node_sup_quiz_3",
    type: "assessment",
    quizId: "QUIZ-SNA-403",
    codeNumber: "06",
    title: "NATIONAL INCOME & SUT DEFLATION EVALUATION",
    shortTitle: "Macro Aggregates Check",
    category: "Assessment 03",
    estTime: "12m",
    xp: 55,
    bullets: [
      "3 National Accounts compilation scenarios",
      "Real-time evaluation (≥66% pass threshold)"
    ],
    questions: [
      {
        id: "q1_sup_sna",
        text: "Under UN SNA 2008 methodology, why is Double Deflation considered superior to Single Indicator Extrapolation for Real GVA?",
        options: {
          A: "It deflates gross output and intermediate consumption separately, preventing distortion from input price divergence",
          B: "It requires half the data inputs",
          C: "It ignores price indices completely",
          D: "It always produces higher GDP growth rates"
        },
        correct: "A",
        explanation: "Double deflation accounts for differing price dynamics between outputs and intermediate inputs, providing accurate real value added."
      },
      {
        id: "q2_sup_sna",
        text: "How is Financial Intermediation Services Indirectly Measured (FISIM) allocated in National Accounts?",
        options: {
          A: "Treated solely as household final consumption",
          B: "Allocated between intermediate consumption of industries and final consumption of households/government based on loan/deposit balances",
          C: "Deducted completely from GDP as a tax",
          D: "Recorded as foreign direct investment"
        },
        correct: "B",
        explanation: "SNA 2008 allocates FISIM across borrowing and depositing user sectors based on interest rate reference spreads."
      },
      {
        id: "q3_sup_sna",
        text: "In the compilation of Gross Fixed Capital Formation (GFCF), how is Research & Development (R&D) expenditure classified under SNA 2008?",
        options: {
          A: "Treated as capital asset creation (Intellectual Property Products) rather than intermediate consumption",
          B: "Treated as government waste",
          C: "Excluded from GDP calculations",
          D: "Classified as raw material import"
        },
        correct: "A",
        explanation: "SNA 2008 treats R&D as capital formation creating intellectual property assets yielding future economic benefits."
      }
    ]
  },
  {
    nodeId: "node_sup_crs_4",
    type: "course",
    courseId: "CRS-LEAD-404",
    codeNumber: "07",
    title: "EXECUTIVE LEADERSHIP, ADMINISTRATIVE ETHICS & APAR SPARROW",
    shortTitle: "Gazetted Leadership & SPARROW",
    category: "Course 04",
    estTime: "3.5h",
    xp: 60,
    bullets: [
      "SPARROW APAR numeric grading & pen picture drafting guidelines",
      "Inter-ministerial coordination & e-Cabinet note preparation"
    ],
    provider: "LBSNAA & Cabinet Secretariat",
    summary: "Gazetted administrative leadership, Cabinet Note drafting rules, SPARROW objective scoring guidelines, and institutional integrity in policy execution."
  },
  {
    nodeId: "node_sup_quiz_4",
    type: "assessment",
    quizId: "QUIZ-CAP-SUP",
    codeNumber: "08",
    title: "FINAL CAPSTONE: MOSPI EXECUTIVE COMPETENCY & CADRE GOVERNANCE",
    shortTitle: "Executive Capstone Exam",
    category: "Capstone 08",
    estTime: "15m",
    xp: 80,
    bullets: [
      "Comprehensive 4 MCQ official audit",
      "Qualifies for Sovereign Executive Certification"
    ],
    questions: [
      {
        id: "q1_cap_sup",
        text: "When drafting a Cabinet Note for policy revision under Central Secretariat Manual of Office Procedure (CSMOP), what is mandatory?",
        options: {
          A: "Inter-ministerial consultation comments matrix and concurrence of Ministry of Law and Expenditure",
          B: "Only approval of the Section Officer",
          C: "No financial memorandum is required",
          D: "Informal verbal agreement"
        },
        correct: "A",
        explanation: "Cabinet Secretariat rules require formal appraisal, inter-ministerial comments, and legal/financial vetting."
      },
      {
        id: "q2_cap_sup",
        text: "Under SPARROW APAR grading norms, if a Reporting Officer awards an outstanding numeric score (>8.5), what is mandatory?",
        options: {
          A: "Justification with specific exceptional accomplishments documented in the Pen Picture",
          B: "No explanation needed",
          C: "Automatic cash incentive payment",
          D: "Immediate promotion without DPC"
        },
        correct: "A",
        explanation: "DoPT guidelines mandate detailed narrative justification for both outstanding (>8.5) and adverse (<5.0) ratings."
      },
      {
        id: "q3_cap_sup",
        text: "In National Accounts compilation, what is the statistical relationship between GVA at basic prices and GDP at market prices?",
        options: {
          A: "GDP at Market Prices = GVA at Basic Prices + Product Taxes - Product Subsidies",
          B: "GDP at Market Prices = GVA at Basic Prices - Income Tax",
          C: "Both terms are always mathematically identical",
          D: "GDP = GVA divided by Population"
        },
        correct: "A",
        explanation: "GDP at Market Prices equals GVA at basic prices plus net taxes on products (taxes on products minus subsidies on products)."
      },
      {
        id: "q4_cap_sup",
        text: "Under GFR 2017 and CVC guidelines, what is the primary duty of an officer serving as Chairman of a Tender Evaluation Committee?",
        options: {
          A: "Ensure strict non-discriminatory technical evaluation aligned strictly with published tender criteria without post-bid modifications",
          B: "Select the most well-known vendor regardless of bid terms",
          C: "Change specifications after opening technical bids",
          D: "Award contract to highest cost bidder"
        },
        correct: "A",
        explanation: "Transparency, non-discrimination, and strict adherence to published evaluation criteria are core to public procurement integrity."
      }
    ]
  }
];

export const getActiveRoadmapStages = (userEmail) => {
  if (userEmail && userEmail.toLowerCase().includes("suparna")) {
    return SUPARNA_ROADMAP_STAGES;
  }
  return AMIT_ROADMAP_STAGES;
};

export const ROADMAP_NODES = AMIT_ROADMAP_STAGES;

export default function GamifiedRoadmapHub({ onLaunchCourse }) {
  const { user, updateProfile, showToast } = useUser();
  const activeStages = getActiveRoadmapStages(user?.email);

  // Load completed node IDs
  const [completedNodeIds, setCompletedNodeIds] = useState(() => {
    try {
      const saved = localStorage.getItem("daksh_gamified_node_progress");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return user?.gamifiedRoadmapNodes || [];
  });

  // Track Video Watch Progress per course
  const [videoProgressMap, setVideoProgressMap] = useState(() => {
    try {
      const saved = localStorage.getItem("daksh_course_video_progress");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      "CRS-CYBER-101": 60,
      "CRS-DPDP-102": 0,
      "CRS-GRIEV-103": 0,
      "CRS-EOFFICE-104": 0,
      "CRS-GFR-401": 60,
      "CRS-VIG-402": 0,
      "CRS-SNA-403": 0,
      "CRS-LEAD-404": 0
    };
  });

  // Active Modals State
  const [selectedCourseModal, setSelectedCourseModal] = useState(null);
  const [activeQuizModal, setActiveQuizModal] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("daksh_gamified_node_progress", JSON.stringify(completedNodeIds));
    } catch (e) {}
  }, [completedNodeIds]);

  useEffect(() => {
    try {
      localStorage.setItem("daksh_course_video_progress", JSON.stringify(videoProgressMap));
    } catch (e) {}
  }, [videoProgressMap]);

  // Determine unlock state
  const isNodeUnlocked = (index) => {
    if (index === 0) return true;
    const prevNodeId = activeStages[index - 1].nodeId;
    return completedNodeIds.includes(prevNodeId);
  };

  const isNodeCompleted = (nodeId) => {
    return completedNodeIds.includes(nodeId);
  };

  const isAllStagesCompleted = activeStages.every((stg) => completedNodeIds.includes(stg.nodeId));

  // Total XP Earned
  const totalEarnedXP = activeStages.reduce((acc, node) => {
    return completedNodeIds.includes(node.nodeId) ? acc + (node.xp || 50) : acc;
  }, 0) + (isAllStagesCompleted ? 150 : 0);

  // Get live video progress for a course node
  const getCourseVideoProgress = (node, index) => {
    const unlocked = isNodeUnlocked(index);
    if (!unlocked) return 0;
    if (completedNodeIds.includes(node.nodeId)) return 100;
    return videoProgressMap[node.courseId] || (node.codeNumber === "01" ? 60 : 0);
  };

  // Handle Complete Course Button
  const handleMarkCourseCompleted = (node) => {
    if (!completedNodeIds.includes(node.nodeId)) {
      const updated = [...completedNodeIds, node.nodeId];
      setCompletedNodeIds(updated);
      setVideoProgressMap((prev) => ({ ...prev, [node.courseId]: 100 }));
      updateProfile({ gamifiedRoadmapNodes: updated });
      showToast(`${node.shortTitle} Finished (100% Video Completed +${node.xp} XP)! Next Stage Unlocked.`, "success");
    }
    setSelectedCourseModal(null);
  };

  // Handle Assessment Submit
  const handleQuizSubmit = () => {
    if (!activeQuizModal) return;
    const questions = activeQuizModal.questions;
    let correct = 0;

    questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) correct++;
    });

    const scorePct = Math.round((correct / questions.length) * 100);
    const passed = scorePct >= 66;

    setQuizScore({
      score: scorePct,
      correctCount: correct,
      total: questions.length,
      passed
    });

    if (passed) {
      if (!completedNodeIds.includes(activeQuizModal.nodeId)) {
        const updated = [...completedNodeIds, activeQuizModal.nodeId];
        setCompletedNodeIds(updated);
        updateProfile({ gamifiedRoadmapNodes: updated });
        showToast(`${activeQuizModal.shortTitle} Cleared (+${activeQuizModal.xp} XP)! Next Stage Unlocked.`, "success");
      }
    } else {
      showToast(`Score: ${scorePct}%. Minimum 66% required to pass and unlock the next level.`, "error");
    }
  };

  const handleResetProgress = () => {
    if (window.confirm("Reset all workflow stages back to Stage 01?")) {
      setCompletedNodeIds([]);
      setVideoProgressMap({
        "CRS-CYBER-101": 0,
        "CRS-DPDP-102": 0,
        "CRS-GRIEV-103": 0,
        "CRS-EOFFICE-104": 0,
        "CRS-GFR-401": 0,
        "CRS-VIG-402": 0,
        "CRS-SNA-403": 0,
        "CRS-LEAD-404": 0
      });
      updateProfile({ gamifiedRoadmapNodes: [] });
      showToast("Workflow reset to Stage 01.", "info");
    }
  };

  const isCourse = (type) => type === "course";

  // Render Process Card (Clean, modern, professional enterprise aesthetics)
  const renderWorkflowProcessCard = (node, index) => {
    const unlocked = isNodeUnlocked(index);
    const completed = isNodeCompleted(node.nodeId);
    const isCurrentActive = unlocked && !completed;
    const videoProgress = getCourseVideoProgress(node, index);
    const isCrs = isCourse(node.type);

    return (
      <div
        key={node.nodeId}
        className={`relative rounded-2xl bg-white dark:bg-[#0E1726] border-2 shadow-sm transition-all flex flex-col justify-between flex-1 min-w-[210px] max-w-[260px] ${
          completed
            ? "border-emerald-500/70"
            : isCurrentActive
            ? isCrs
              ? "border-blue-500 ring-2 ring-blue-500/30 shadow-md"
              : "border-amber-500 ring-2 ring-amber-500/30 shadow-md"
            : "border-slate-300 dark:border-slate-700"
        }`}
      >
        {/* TOP UNIFIED COLOR CAP WITH CENTER FLOATING NUMBER PILL */}
        <div
          className={`h-3.5 w-full rounded-t-xl relative flex items-center justify-center ${
            isCrs ? "bg-blue-600" : "bg-amber-500"
          }`}
        >
          <div
            className={`absolute -top-3.5 w-8 h-8 rounded-full text-white font-mono font-bold text-xs flex items-center justify-center shadow-md border-2 border-white dark:border-[#0E1726] ${
              completed
                ? "bg-emerald-600"
                : isCrs
                ? "bg-blue-600"
                : "bg-amber-500"
            }`}
          >
            {completed ? <Check size={14} strokeWidth={3} /> : node.codeNumber}
          </div>
        </div>

        {/* CARD BODY */}
        <div className="p-3 pt-3.5 space-y-2 flex-1 flex flex-col justify-between text-left">
          {/* Header Row: Stage Number + Type Badge + Icon + Title */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span
                className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border shadow-2xs ${
                  isCrs
                    ? "bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                    : "bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                }`}
              >
                {node.codeNumber}. {isCrs ? "COURSE" : "ASSESSMENT"}
              </span>
              <span className="text-[9px] font-mono text-slate-400 font-bold">
                {node.estTime} • {node.xp} XP
              </span>
            </div>

            <div className="flex items-start gap-2 pt-0.5">
              <div
                className={`w-7 h-7 rounded-lg text-white flex items-center justify-center text-xs shrink-0 shadow-xs ${
                  isCrs ? "bg-blue-600" : "bg-amber-500"
                }`}
              >
                {isCrs ? <BookOpen size={14} /> : <Award size={14} />}
              </div>
              <h4
                className={`text-[11px] font-black uppercase tracking-tight leading-snug line-clamp-2 ${
                  isCrs
                    ? "text-blue-700 dark:text-blue-400"
                    : "text-amber-700 dark:text-amber-400"
                }`}
              >
                {node.title}
              </h4>
            </div>
          </div>

          {/* DOTTED SEPARATOR */}
          <div
            className={`border-b-2 border-dotted w-full ${
              isCrs
                ? "border-blue-200 dark:border-blue-900/60"
                : "border-amber-200 dark:border-amber-900/60"
            }`}
          />

          {/* BULLET POINTS */}
          <div className="space-y-1 text-[10px] text-slate-700 dark:text-slate-200 font-medium">
            {node.bullets.map((bullet, bIdx) => (
              <div key={bIdx} className="flex items-start gap-1.5 leading-tight">
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1 ${
                    isCrs ? "bg-blue-600" : "bg-amber-500"
                  }`}
                />
                <span className="line-clamp-2">{bullet}</span>
              </div>
            ))}
          </div>

          {/* COURSE VIDEO PROGRESS BAR */}
          {node.type === "course" && (
            <div className="pt-0.5 space-y-0.5">
              <div className="flex items-center justify-between text-[9px] font-bold">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Video size={9} /> {videoProgress >= 100 ? "Watched" : videoProgress > 0 ? `${videoProgress}% Watched` : "0% (Locked)"}
                </span>
                <span className={videoProgress >= 100 ? "text-emerald-500 font-mono" : videoProgress > 0 ? "text-blue-500 font-mono" : "text-slate-400 font-mono"}>
                  {videoProgress}%
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    videoProgress >= 100 ? "bg-emerald-500" : videoProgress > 0 ? "bg-blue-600" : "w-0"
                  }`}
                  style={{ width: `${videoProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* ACTION BUTTON */}
          <div className="pt-1">
            {unlocked ? (
              node.type === "course" ? (
                <button
                  type="button"
                  onClick={() => setSelectedCourseModal(node)}
                  className={`w-full py-1.5 px-2 rounded-lg font-bold text-[10px] flex items-center justify-center gap-1 cursor-pointer transition-all ${
                    completed
                      ? "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200"
                      : "btn-primary text-white"
                  }`}
                >
                  <Play size={10} className="fill-current" />
                  <span>{completed ? "Review Course" : "Resume Video"}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setActiveQuizModal(node);
                    setQuizAnswers({});
                    setQuizScore(null);
                  }}
                  className={`w-full py-1.5 px-2 rounded-lg font-bold text-[10px] flex items-center justify-center gap-1 cursor-pointer transition-all ${
                    completed
                      ? "bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
                      : "bg-amber-500 hover:bg-amber-600 text-slate-950 font-black shadow-xs"
                  }`}
                >
                  <Award size={10} />
                  <span>{completed ? "Retake Test" : "Start Test"}</span>
                </button>
              )
            ) : (
              <div className="w-full py-1.5 px-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 font-bold text-[10px] flex items-center justify-center gap-1 cursor-not-allowed border border-slate-200 dark:border-slate-700">
                <Lock size={10} />
                <span>Locked Stage</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Helper for Thick Solid Arrow Flush Against Card Boxes
  const renderThickConnectedArrow = () => (
    <div className="flex items-center justify-center shrink-0 w-7 sm:w-9 px-0">
      <svg viewBox="0 0 36 20" className="w-full h-5 overflow-visible">
        <line x1="0" y1="10" x2="22" y2="10" stroke="#475569" strokeWidth="4" strokeLinecap="square" />
        <polygon points="20,3 34,10 20,17" fill="#475569" />
      </svg>
    </div>
  );

  return (
    <div className="space-y-4 text-left max-w-6xl mx-auto pb-8 select-none">
      {/* 1. TOP CAPACITY HEADER */}
      <div className="rounded-2xl bg-slate-900 text-white p-3 sm:p-4 border border-slate-800 shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-blue-600 text-white flex items-center gap-1">
                <ShieldCheck size={10} />
                {user?.email?.includes("suparna") ? "Gazetted Executive Track" : "Frontline Operational Track"}
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                Stage {completedNodeIds.length + 1} of 8 Active
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-black tracking-tight text-white">
              Official Accredited Capacity Building Roadmap Pipeline
            </h2>
          </div>

          {/* Quick Stats Strip */}
          <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 shrink-0">
            <div className="text-center">
              <span className="text-[9px] text-slate-400 block font-bold uppercase">XP</span>
              <strong className="text-xs sm:text-sm font-black text-amber-400 font-mono flex items-center justify-center gap-0.5">
                <Zap size={11} className="fill-amber-400 text-amber-400" />
                {totalEarnedXP}
              </strong>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div className="text-center">
              <span className="text-[9px] text-slate-400 block font-bold uppercase">Stages</span>
              <strong className="text-xs sm:text-sm font-black text-emerald-400 font-mono">
                {completedNodeIds.length} / 8
              </strong>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div className="text-center">
              <span className="text-[9px] text-slate-400 block font-bold uppercase">Streak</span>
              <strong className="text-xs sm:text-sm font-black text-orange-400 font-mono flex items-center justify-center gap-0.5">
                <Flame size={11} className="fill-orange-400 text-orange-400" />
                7D
              </strong>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <button
              onClick={handleResetProgress}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
              title="Reset Progress"
            >
              <RefreshCw size={11} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. EXACT WORKFLOW WITH THICK CONNECTED ARROWS */}
      <div className="p-4 sm:p-6 rounded-3xl bg-slate-50/60 dark:bg-canvas-card-dark/40 border border-slate-200 dark:border-slate-800 space-y-4 relative overflow-x-auto">
        {/* ROW 1: [ 01: Course ] ═══▶ [ 02: Quiz ] ═══▶ [ 03: Course ] ═══▶ [ 04: Quiz ] */}
        <div className="flex items-center justify-between gap-0 relative min-w-[920px]">
          {renderWorkflowProcessCard(activeStages[0], 0)}
          {renderThickConnectedArrow()}
          {renderWorkflowProcessCard(activeStages[1], 1)}
          {renderThickConnectedArrow()}
          {renderWorkflowProcessCard(activeStages[2], 2)}
          {renderThickConnectedArrow()}
          {renderWorkflowProcessCard(activeStages[3], 3)}
        </div>

        {/* THICK CONTINUOUS S-BEND DIRECTLY CONNECTING CARD 04 TO CARD 05 */}
        <div className="relative py-2 px-4 min-w-[920px] my-1">
          <div className="relative flex items-center justify-between border-t-2 border-b-2 border-dashed border-slate-300 dark:border-slate-700 py-2.5 px-6 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 shadow-inner">
            {/* Left anchor pointing to Card 05 */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-primary text-white flex items-center justify-center font-black text-xs shadow-sm">
                05
              </div>
              <div className="flex items-center gap-1.5 text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                  <polyline points="7 13 12 18 17 13" />
                  <polyline points="7 6 12 11 17 6" />
                </svg>
                <span className="text-2xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-100">
                  Begin Phase 2: Public Governance & Capstone
                </span>
              </div>
            </div>

            {/* Connecting directional progress pill */}
            <div className="flex items-center gap-2 text-2xs font-mono font-bold text-slate-500 dark:text-slate-400">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">Stage 04 Validated</span>
              <span className="text-primary font-black">══════════════▶</span>
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-bold border border-primary/20">Stage 05 Unlocked</span>
            </div>

            {/* Right anchor from Card 04 */}
            <div className="flex items-center gap-2">
              <span className="text-2xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">Phase 1 Complete</span>
              <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-xs shadow-sm">
                04
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: [ 05: Course ] ═══▶ [ 06: Quiz ] ═══▶ [ 07: Course ] ═══▶ [ 08: Capstone ] */}
        <div className="flex items-center justify-between gap-0 relative min-w-[920px]">
          {renderWorkflowProcessCard(activeStages[4], 4)}
          {renderThickConnectedArrow()}
          {renderWorkflowProcessCard(activeStages[5], 5)}
          {renderThickConnectedArrow()}
          {renderWorkflowProcessCard(activeStages[6], 6)}
          {renderThickConnectedArrow()}
          {renderWorkflowProcessCard(activeStages[7], 7)}
        </div>
      </div>

      {/* FINAL SOVEREIGN CERTIFICATE BANNER AT BOTTOM */}
      <div className="rounded-2xl p-4 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center text-lg shrink-0">
            <Trophy size={20} />
          </div>
          <div className="text-left">
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase">
              Official Sovereign Competency Accreditation
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Complete all 8 stages to unlock and download your government-verified competency credential.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsCertificateOpen(true)}
          className={`px-5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm shrink-0 ${
            isAllStagesCompleted
              ? "btn-primary"
              : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300"
          }`}
        >
          <Trophy size={14} />
          <span>{isAllStagesCompleted ? "Claim Sovereign Certificate" : "Preview Certificate"}</span>
        </button>
      </div>

      {/* MODAL 1: COURSE WORKSPACE LAUNCHER */}
      {selectedCourseModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl space-y-4 text-left relative my-8">
            <button
              onClick={() => setSelectedCourseModal(null)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer absolute top-5 right-5"
            >
              <X size={16} />
            </button>

            <div className="space-y-1 border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md bg-blue-600 text-white inline-block mb-1">
                {selectedCourseModal.category} • {selectedCourseModal.courseId}
              </span>
              <h3 className="text-base font-black text-slate-900 dark:text-white leading-snug">
                {selectedCourseModal.title}
              </h3>
              <p className="text-2xs text-slate-500 dark:text-slate-400">
                {selectedCourseModal.provider} • Est. Time: {selectedCourseModal.estTime}
              </p>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedCourseModal.summary}
            </p>

            {/* Video Lecture Progress Details */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-200">
                  <Video size={14} className="text-blue-500" />
                  Video Lecture Watch Progress:
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-mono font-black">
                  {isNodeCompleted(selectedCourseModal.nodeId) ? 100 : (videoProgressMap[selectedCourseModal.courseId] || (selectedCourseModal.codeNumber === "01" ? 60 : 0))}%
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${isNodeCompleted(selectedCourseModal.nodeId) ? 100 : (videoProgressMap[selectedCourseModal.courseId] || (selectedCourseModal.codeNumber === "01" ? 60 : 0))}%`
                  }}
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => {
                  if (onLaunchCourse) onLaunchCourse(selectedCourseModal.courseId);
                  setSelectedCourseModal(null);
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 flex items-center gap-1.5 cursor-pointer"
              >
                <Play size={13} className="fill-current text-blue-600" />
                <span>Open Player</span>
              </button>

              <button
                type="button"
                onClick={() => handleMarkCourseCompleted(selectedCourseModal)}
                className="btn-primary px-5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <Check size={14} strokeWidth={3} />
                <span>Mark Finished</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: ASSESSMENT TEST POPUP */}
      {activeQuizModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl space-y-4 text-left relative my-8">
            <button
              onClick={() => setActiveQuizModal(null)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer absolute top-5 right-5"
            >
              <X size={16} />
            </button>

            <div className="border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md bg-amber-500 text-slate-950 inline-block mb-1">
                {activeQuizModal.category} • +{activeQuizModal.xp} XP
              </span>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                {activeQuizModal.title}
              </h3>
              <p className="text-2xs text-slate-500 dark:text-slate-400 mt-0.5">
                Pass score: 66% (≥2 correct answers) to unlock next stage.
              </p>
            </div>

            {/* Quiz Score Result or Questions List */}
            {quizScore ? (
              <div className="space-y-3 text-center py-2">
                <div className={`w-12 h-12 rounded-2xl mx-auto flex items-center justify-center text-xl shadow-lg ${
                  quizScore.passed ? "bg-emerald-500 text-white" : "bg-amber-500 text-white"
                }`}>
                  {quizScore.passed ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-black text-slate-900 dark:text-white">
                    {quizScore.passed ? "Competency Target Achieved!" : "Diagnostic Incomplete"}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    You scored <strong>{quizScore.score}%</strong> ({quizScore.correctCount}/{quizScore.total} correct).
                  </p>
                </div>

                <div className="flex justify-center gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setQuizScore(null)}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 cursor-pointer"
                  >
                    Re-attempt
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveQuizModal(null)}
                    className="btn-primary px-5 py-1.5 rounded-xl font-bold text-xs cursor-pointer"
                  >
                    Continue
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {activeQuizModal.questions.map((q, qIdx) => (
                  <div key={q.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
                    <span className="text-[10px] font-bold text-slate-400">Question {qIdx + 1} of {activeQuizModal.questions.length}</span>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-relaxed">
                      {q.text}
                    </p>

                    <div className="space-y-1 pt-0.5">
                      {Object.entries(q.options).map(([optKey, optVal]) => {
                        const isSelected = quizAnswers[q.id] === optKey;
                        return (
                          <button
                            type="button"
                            key={optKey}
                            onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: optKey })}
                            className={`w-full p-2 rounded-xl border text-left transition-all flex items-start gap-2 cursor-pointer ${
                              isSelected
                                ? "bg-amber-50 dark:bg-amber-950/50 border-amber-500 text-slate-900 dark:text-white font-bold"
                                : "bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            <span className={`w-4 h-4 rounded flex items-center justify-center text-[9px] font-black shrink-0 ${
                              isSelected ? "bg-amber-500 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                            }`}>
                              {optKey}
                            </span>
                            <span className="text-2xs leading-relaxed">{optVal}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveQuizModal(null)}
                    className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    disabled={Object.keys(quizAnswers).length < activeQuizModal.questions.length}
                    onClick={handleQuizSubmit}
                    className="btn-primary px-6 py-2 rounded-xl font-bold text-xs cursor-pointer disabled:opacity-40"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* OFFICIAL SOVEREIGN CERTIFICATE VIEWER MODAL */}
      {isCertificateOpen && (
        <OfficialCertificate
          certificate={{
            id: `CERT-MoSPI-${user?.id?.slice(-4) || "2026"}`,
            title: "ACBP Directorate Competency Mastery Accreditation",
            competency: user?.cadre?.includes("Frontline") || user?.officialDesignation?.includes("Ticket")
              ? "Frontline Operations, Passenger Privacy & Statutory Compliance"
              : "Advanced National Accounts, GFR 2017 & Survey Methodology",
            score: 96,
            issuedDate: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" }),
            verificationCode: `GOV-IN-${Date.now().toString().slice(-6)}`
          }}
          user={user}
          onClose={() => setIsCertificateOpen(false)}
          showToast={showToast}
        />
      )}
    </div>
  );
}
