// StatSaarthi — Competency Intelligence & Learning Platform Dataset

export const HARDCODED_OFFICERS = {
  amit_mondal: {
    id: "EMP-ER-2015-7821",
    name: "Amit Kumar Mondal",
    email: "amit.mondal@railnet.gov.in",
    role: "learner",
    cadre: "Frontline Field Staff",
    officialDesignation: "Ticket Examiner",
    department: "Eastern Railway Division",
    postingLocation: "Kolkata Division, Howrah",
    serviceTenure: "9+ Years (2015 – Present)",
    qualification: "B.A. (Bengali Hons), NIELIT CCC (2016)",
    targetRole: "Senior Commercial Inspector (Level 7)",
    skillReadiness: 62,
    sparrowStatus: "APAR Baseline Review Synced",
    weeklyLearningBudget: "4 Hours / Week (Operational Pace)",
    weeklyHoursLogged: 3.5,
    streakDays: 4,
    avatar: "",
    completedCourseIds: ["CRS-COMM-101"],
    gaps: [
      {
        id: "gap_amit_1",
        domain: "Cyber Hygiene & DPDP Act 2023",
        code: "FRAC-CYB-01",
        currentLevel: 1,
        requiredLevel: 3,
        gapScore: -2.0,
        severity: "Critical",
        recommendedCourse: "Cyber Hygiene Practices for Government Officials",
        provider: "C-DAC / CERT-In",
        hours: "2.5 hrs"
      },
      {
        id: "gap_amit_2",
        domain: "Digital Public Infra (e-Office, CAPI)",
        code: "FRAC-DPI-01",
        currentLevel: 1,
        requiredLevel: 3,
        gapScore: -2.0,
        severity: "Critical",
        recommendedCourse: "e-Office and Digital Workflow Management",
        provider: "NIC / DoPT",
        hours: "4.0 hrs"
      },
      {
        id: "gap_amit_3",
        domain: "Data Tabulation & Discrepancy Auditing",
        code: "FRAC-TAB-01",
        currentLevel: 1,
        requiredLevel: 2,
        gapScore: -1.0,
        severity: "Moderate",
        recommendedCourse: "Spreadsheet Essentials for Data Entry & Reporting",
        provider: "NSSTA / iGOT Bharat",
        hours: "3.5 hrs"
      },
      {
        id: "gap_amit_4",
        domain: "Citizen Conflict De-escalation",
        code: "FRAC-BEH-01",
        currentLevel: 2,
        requiredLevel: 3,
        gapScore: -1.0,
        severity: "Moderate",
        recommendedCourse: "Citizen Centricity & Public Service Orientation",
        provider: "LBSNAA",
        hours: "3.0 hrs"
      },
      {
        id: "gap_amit_5",
        domain: "Frontline Citizen Service Delivery",
        code: "FRAC-PUB-01",
        currentLevel: 3,
        requiredLevel: 3,
        gapScore: 0.0,
        severity: "Mastered",
        recommendedCourse: "Frontline Public Engagement Masterclass",
        provider: "ISTM / DoPT",
        hours: "2.0 hrs"
      }
    ],
    diagnosticQuiz: {
      id: "QUIZ-DIAG-AMIT",
      title: "Frontline Service Diagnostic & Cyber Hygiene Assessment",
      domain: "Frontline Public Administration & Digital Integrity",
      questions: [
        {
          id: "q_amit_1",
          competency: "Cyber Threat Defense",
          bloomLevel: "Apply",
          question: "While on station duty, an individual claiming to be a technical support technician asks for your departmental ticketing login credentials to apply an urgent security update. What is the standard protocol under government information security rules?",
          options: [
            { id: "A", text: "Share credentials immediately to avoid software downtime." },
            { id: "B", text: "Refuse password sharing, verify the vendor's authorization with the Station Superintendent, and report the incident as a security violation." },
            { id: "C", text: "Provide your personal email password instead." },
            { id: "D", text: "Allow the technician to work on your logged-in terminal without supervision." }
          ],
          correct: "B",
          citation: "CERT-In Government Cyber Security Guidelines mandate zero sharing of authentication credentials. All vendor access must follow verified departmental authorization.",
          source: "CERT-In Information Security Guidelines (Section 4.2)"
        },
        {
          id: "q_amit_2",
          competency: "DPDP Act 2023 & PII Privacy",
          bloomLevel: "Apply",
          question: "You need to send a photo of a daily passenger concession verification report to an official WhatsApp group. The sheet contains full passenger Aadhaar numbers and mobile numbers. What action is mandatory under the DPDP Act 2023?",
          options: [
            { id: "A", text: "Send the unmasked photo directly for speed." },
            { id: "B", text: "Redact/mask all Aadhaar numbers and mobile details, and transmit records only through authorized departmental channels." },
            { id: "C", text: "Delete the physical sheet so no trace remains." },
            { id: "D", text: "Share the unmasked sheet only during night hours." }
          ],
          correct: "B",
          citation: "Digital Personal Data Protection (DPDP) Act 2023 requires public servants to safeguard Personally Identifiable Information (PII) through data minimization and masking.",
          source: "DPDP Act 2023 (Section 8 - Data Fiduciary Safeguards)"
        },
        {
          id: "q_amit_3",
          competency: "Citizen Centricity & De-escalation",
          bloomLevel: "Evaluate",
          question: "An agitated passenger demands an immediate cash refund on the platform due to a delayed train, drawing a restless crowd. What is the most effective citizen-centric response?",
          options: [
            { id: "A", text: "Argue aggressively and threaten police action to silence the passenger." },
            { id: "B", text: "Ignore the passenger and continue clerical tasks." },
            { id: "C", text: "Listen actively, acknowledge the delay calmly, explain the official TDR/refund procedure clearly, and direct them to the designated assistance counter." },
            { id: "D", text: "Pay money from personal pocket to disperse the crowd." }
          ],
          correct: "C",
          citation: "Mission Karmayogi's Code of Ethics emphasizes active listening, institutional empathy, and transparent procedural guidance during public grievances.",
          source: "Mission Karmayogi Civil Service Code of Ethics (Rule 9)"
        },
        {
          id: "q_amit_4",
          competency: "RailMadad & CPGRAMS Protocols",
          bloomLevel: "Apply",
          question: "A passenger reports an on-board medical emergency through RailMadad with severe chest pain symptoms in Coach B4. What is the mandated immediate standard operating procedure?",
          options: [
            { id: "A", text: "Dispatch on-board first-aid kit immediately, mobilize on-train staff/TTE, and alert the commercial controller to station a medical team at the upcoming stoppage within 15 minutes." },
            { id: "B", text: "Wait until the next division boundary before acknowledging the complaint." },
            { id: "C", text: "Tell the co-passengers to arrange a private doctor upon reaching final destination." },
            { id: "D", text: "Close the RailMadad ticket as resolved before medical team arrival." }
          ],
          correct: "A",
          citation: "Indian Railways Commercial Operating Manual mandates emergency medical dispatch within 15 minutes of RailMadad SOS escalation.",
          source: "RailMadad SOP 2023 & Indian Railways Operating Manual (Rule 14.2)"
        },
        {
          id: "q_amit_5",
          competency: "e-Office & Digital Financial Reconciliation",
          bloomLevel: "Understand",
          question: "At the end of your shift, you must remit ₹14,200 collected from excess fare tickets (EFTs). How should electronic terminal data and physical cash be reconciled under departmental accounting rules?",
          options: [
            { id: "A", text: "Deposit cash in the safe without generating any system voucher." },
            { id: "B", text: "Keep excess cash in personal locker and adjust the accounts next week." },
            { id: "C", text: "Generate the Handheld Terminal (HHT) end-of-shift electronic summary, reconcile against cash collected, and digitally sign the remittance challan on the e-Office portal." },
            { id: "D", text: "Manually rewrite ticket numbers on rough paper." }
          ],
          correct: "C",
          citation: "Railway Commercial Manual Vol II requires mandatory electronic POS reconciliation and e-sign verification for all daily coaching remittances.",
          source: "Indian Railway Commercial Manual Vol II (Para 2105)"
        },
        {
          id: "q_amit_6",
          competency: "Ticket Forgery & Fraud Detection",
          bloomLevel: "Analyze",
          question: "During ticket examination in 3AC coach, a passenger presents a mobile screenshot of a ticket where the font size of the Berth Number does not match standard IRCTC formatting. What action is required?",
          options: [
            { id: "A", text: "Accept the screenshot without question." },
            { id: "B", text: "Verify the 10-digit PNR live against the synchronized Handheld Terminal (HHT) manifest; if fraudulent, issue an Excess Fare Ticket (EFT) under Section 137 of the Railways Act." },
            { id: "C", text: "Confiscate the passenger's mobile phone permanently." },
            { id: "D", text: "Ask co-passengers to vote on whether the ticket is genuine." }
          ],
          correct: "B",
          citation: "Section 137 of the Railways Act 1989 penalizes fraudulent travel. Verification via live Handheld Terminal (HHT) server is legally mandatory.",
          source: "Railways Act 1989 (Section 137 - Fraudulent Travel)"
        },
        {
          id: "q_amit_7",
          competency: "Disaster & Emergency Protocol",
          bloomLevel: "Apply",
          question: "Your train comes to an abrupt halt in a tunnel due to an alarm chain pull with reports of heavy smoke in the adjacent pantry car. What is your primary operational responsibility?",
          options: [
            { id: "A", text: "Abandon the coach immediately and run outside the tunnel alone." },
            { id: "B", text: "Encourage passengers to break window glasses randomly without checking tunnel smoke direction." },
            { id: "C", text: "Calm passengers, deploy on-board fire extinguishers, coordinate evacuation toward the smoke-free exit, and immediately inform Guard and Loco Pilot via walkie-talkie." },
            { id: "D", text: "Wait for 2 hours for regional rescue teams to arrive before taking any action." }
          ],
          correct: "C",
          citation: "General and Subsidiary Rules (G&SR) mandate frontline staff to lead passenger evacuation and fire containment prior to external rescue arrival.",
          source: "Indian Railways General & Subsidiary Rules (G&SR 6.01)"
        },
        {
          id: "q_amit_8",
          competency: "Accessibility & Divyangjan Rights",
          bloomLevel: "Understand",
          question: "A visually impaired passenger with a confirmed Divyangjan quota ticket arrives at the coach entrance without an escort. What duty of care is required under statutory accessibility rules?",
          options: [
            { id: "A", text: "Personally escort the passenger to their assigned berth, brief them on emergency bell/toilet locations, and pre-alert the destination station master for wheelchair assistance." },
            { id: "B", text: "Advise the passenger not to travel without a family member." },
            { id: "C", text: "Charge a special fee for helping them board." },
            { id: "D", text: "Ask other passengers to take full responsibility for the traveler." }
          ],
          correct: "A",
          citation: "Rights of Persons with Disabilities Act 2016 (Section 41) mandates barrier-free assisted transit in public transport facilities.",
          source: "Rights of Persons with Disabilities (RPwD) Act 2016 (Sec 41)"
        },
        {
          id: "q_amit_9",
          competency: "Anti-Tout & Vigilance Enforcement",
          bloomLevel: "Analyze",
          question: "While checking reservations on the platform, an unauthorized broker approaches you offering a cash bribe of ₹2,000 to allot unreserved berths to waiting-list passengers. What must you do?",
          options: [
            { id: "A", text: "Accept the cash and allot the berths quietly." },
            { id: "B", text: "Refuse the bribe firmly, report the tout to the on-duty RPF Inspector immediately, and file an entry under Section 143 of the Railways Act." },
            { id: "C", text: "Bargain for a higher bribe amount." },
            { id: "D", text: "Ignore the broker and walk away without reporting." }
          ],
          correct: "B",
          citation: "Section 143 of the Railways Act prohibits unauthorized ticketing brokerage. Prevention of Corruption Act mandates immediate escalation of bribery attempts.",
          source: "Railways Act 1989 (Section 143) & Prevention of Corruption Act"
        },
        {
          id: "q_amit_10",
          competency: "Code of Conduct & Shift Discipline",
          bloomLevel: "Remember",
          question: "Under the Railway Services (Conduct) Rules, what is the statutory policy regarding alcohol or intoxicating substance consumption prior to commencing operational safety duties?",
          options: [
            { id: "A", text: "Alcohol consumption is permitted if duty starts after 2 hours." },
            { id: "B", text: "Moderate consumption is allowed during winter night shifts." },
            { id: "C", text: "Consumption is allowed if co-workers give written consent." },
            { id: "D", text: "Absolute Zero Tolerance: No railway servant shall be under the influence of any intoxicant while on duty or report for duty under its influence, subject to mandatory breathalyzer check." }
          ],
          correct: "D",
          citation: "Rule 22 of the Railway Services (Conduct) Rules 1966 strictly prohibits the consumption of intoxicating drinks and drugs during and prior to public duty.",
          source: "Railway Services (Conduct) Rules 1966 (Rule 22)"
        }
      ]
    },
    recommendedPathways: [
      {
        id: "CRS-CYB-101",
        stageNumber: "01",
        title: "Cyber Hygiene Practices for Government Officials",
        provider: "C-DAC / CERT-In",
        hours: "2.5 hrs",
        xp: 60,
        targetedGap: "Eliminates phishing risks & secures ticketing terminals.",
        status: "active_roadmap"
      },
      {
        id: "CRS-DPDP-101",
        stageNumber: "02",
        title: "Overview of Digital Personal Data Protection (DPDP) Act",
        provider: "NeGD / MeitY",
        hours: "1.5 hrs",
        xp: 50,
        targetedGap: "PII data privacy & legal handling.",
        status: "pending"
      },
      {
        id: "CRS-CIT-201",
        stageNumber: "03",
        title: "Citizen Centricity & Public Service Orientation",
        provider: "LBSNAA",
        hours: "3.0 hrs",
        xp: 75,
        targetedGap: "Soft skills, active listening, and grievance resolution.",
        status: "locked"
      },
      {
        id: "CRS-EOF-201",
        stageNumber: "04",
        title: "e-Office and Digital Workflow Management",
        provider: "NIC / DoPT",
        hours: "4.0 hrs",
        xp: 90,
        targetedGap: "Paperless administration & electronic register management.",
        status: "locked"
      }
    ]
  },

  suparna_chatterjee: {
    id: "EMP-SO-2012-4091",
    name: "Suparna Chatterjee",
    email: "suparna.chatterjee@statsaarthi.gov.in",
    role: "learner",
    cadre: "Mid-Management (Group B Gazetted)",
    officialDesignation: "Section Officer (SO)",
    department: "Economic Accounts Division",
    postingLocation: "Central Secretariat, New Delhi",
    serviceTenure: "12+ Years (2012 – Present)",
    qualification: "B.Com (Hons), M.A. in Public Administration, SSC CGL 2012",
    targetRole: "Under Secretary (Level 11 Gazetted)",
    skillReadiness: 74,
    sparrowStatus: "APAR Target Synced ✓ • Tier 3 Certified",
    weeklyLearningBudget: "5 Hours / Week (Executive Pace)",
    weeklyHoursLogged: 4.5,
    streakDays: 6,
    avatar: "",
    completedCourseIds: ["CRS-EOF-401", "CRS-SAMP-301"],
    gaps: [
      {
        id: "gap_suparna_1",
        domain: "Advanced GFR 2017 & Contract Management",
        code: "FRAC-FIN-04",
        currentLevel: 2,
        requiredLevel: 4,
        gapScore: -2.0,
        severity: "Critical",
        recommendedCourse: "Advanced Public Procurement & Contract Management (GFR & GeM)",
        provider: "NIFM / DoPT",
        hours: "4.5 hrs"
      },
      {
        id: "gap_suparna_2",
        domain: "Preventive Vigilance & CCS CCA Rules",
        code: "FRAC-VIG-02",
        currentLevel: 2,
        requiredLevel: 4,
        gapScore: -2.0,
        severity: "Critical",
        recommendedCourse: "Vigilance Administration and Disciplinary Proceedings",
        provider: "ISTM / CVC",
        hours: "3.5 hrs"
      },
      {
        id: "gap_suparna_3",
        domain: "Data-Driven Policy Analytics (GovAnalytics)",
        code: "FRAC-ANL-01",
        currentLevel: 1,
        requiredLevel: 3,
        gapScore: -2.0,
        severity: "Critical",
        recommendedCourse: "Data-Driven Decision Making in Government (GovAnalytics)",
        provider: "LBSNAA / NeGD",
        hours: "4.0 hrs"
      },
      {
        id: "gap_suparna_4",
        domain: "Strategic Leadership & Change Management",
        code: "FRAC-LDR-03",
        currentLevel: 2,
        requiredLevel: 3,
        gapScore: -1.0,
        severity: "Moderate",
        recommendedCourse: "Leadership, Team Motivation & Change Management",
        provider: "LBSNAA",
        hours: "3.0 hrs"
      },
      {
        id: "gap_suparna_5",
        domain: "e-Office Workflow & Basic GeM Procurement",
        code: "FRAC-EOF-04",
        currentLevel: 4,
        requiredLevel: 4,
        gapScore: 0.0,
        severity: "Mastered",
        recommendedCourse: "Executive e-Office Masterclass",
        provider: "NIC",
        hours: "2.0 hrs"
      }
    ],
    diagnosticQuiz: {
      id: "QUIZ-DIAG-SUPARNA",
      title: "Executive Procurement & Vigilance Diagnostic Assessment",
      domain: "Financial Governance, Legal Compliance & Vigilance",
      questions: [
        {
          id: "q_suparna_1",
          competency: "GFR 2017 & Contract Enforcement",
          bloomLevel: "Evaluate",
          question: "A vendor awarded a high-value IT contract via GeM fails to deliver within the stipulated timeline without establishing valid force majeure grounds. What is the mandatory course of action under GFR 2017 and GeM Contract Rules?",
          options: [
            { id: "A", text: "Grant an unconditional extension without financial deduction." },
            { id: "B", text: "Cancel the contract immediately without issuing a show-cause notice." },
            { id: "C", text: "Levy Liquidated Damages (LD) at the contractual rate for the delay period or issue a termination notice with forfeiture of Performance Security." },
            { id: "D", text: "Authorize the vendor to deliver substitute unverified goods." }
          ],
          correct: "C",
          citation: "GFR 2017 (Rule 175) and GeM General Terms and Conditions (GTC) mandate deduction of Liquidated Damages (LD) unless formal force majeure extension is approved by the competent authority.",
          source: "General Financial Rules (GFR) 2017, Rule 175 & GeM GTC Cl. 9"
        },
        {
          id: "q_suparna_2",
          competency: "RTI Act 2005 & PII Protection",
          bloomLevel: "Analyze",
          question: "An RTI applicant seeks copies of the personal Annual Performance Assessment Reports (APAR) and confidential medical reimbursement bills of section staff. How should the Section Officer advise the Public Information Officer (PIO)?",
          options: [
            { id: "A", text: "Disclose all documents in full because government records are public." },
            { id: "B", text: "Deny disclosure under Section 8(1)(j) of the RTI Act as it constitutes personal information with no proven larger public interest." },
            { id: "C", text: "Furnish the records immediately to avoid statutory penalties." },
            { id: "D", text: "Destroy the files to avoid answering the RTI application." }
          ],
          correct: "B",
          citation: "Personal APARs and medical records are protected under Section 8(1)(j) of the RTI Act 2005 (Supreme Court in Girish Ramchandra Deshpande vs CIC), aligning with the DPDP Act 2023.",
          source: "RTI Act 2005 Section 8(1)(j) & Supreme Court Precedents"
        },
        {
          id: "q_suparna_3",
          competency: "CVC Vigilance & Order Splitting",
          bloomLevel: "Evaluate",
          question: "During bill scrutiny, you observe a subordinate officer has deliberately split a single procurement requirement into five separate micro-orders to remain below the higher tender sanction threshold. What is your supervisory obligation under CVC guidelines?",
          options: [
            { id: "A", text: "Approve the split invoices to accelerate budget spending." },
            { id: "B", text: "Refuse approval, document the splitting violation on the note-sheet, and escalate the matter to the Departmental Vigilance Officer." },
            { id: "C", text: "Verbally warn the assistant without making any official record." },
            { id: "D", text: "Combine the invoices post-payment to adjust the ledger." }
          ],
          correct: "B",
          citation: "Splitting of purchase orders to circumvent sanction limits violates GFR Rule 157 and CVC preventive vigilance guidelines. Supervisory officers must record violations on official note-sheets.",
          source: "CVC Vigilance Manual 2021 & GFR 2017 Rule 157"
        },
        {
          id: "q_suparna_4",
          competency: "GeM Direct Purchase Thresholds",
          bloomLevel: "Understand",
          question: "Under GFR 2017 Rule 149(i), what is the monetary ceiling up to which a Section Officer may authorize Direct Purchase of office goods through any registered seller on the GeM portal without floating bids?",
          options: [
            { id: "A", text: "Up to ₹25,000 (meeting requisite quality, specification and reasonable market rate)." },
            { id: "B", text: "Up to ₹5,00,000 without price comparison." },
            { id: "C", text: "Up to ₹50,00,000 via nomination basis." },
            { id: "D", text: "There is zero financial limit for direct purchases on GeM." }
          ],
          correct: "A",
          citation: "Rule 149(i) of GFR 2017 provides for direct purchase on GeM up to ₹25,000 through any of the available sellers on the portal.",
          source: "General Financial Rules (GFR) 2017, Rule 149(i)"
        },
        {
          id: "q_suparna_5",
          competency: "Proprietary Article Certificate (PAC)",
          bloomLevel: "Apply",
          question: "A specialized macroeconomic forecasting software can only be maintained and licensed by the original OEM developer. What statutory documentation is required under GFR Rule 194 to purchase on single-source basis?",
          options: [
            { id: "A", text: "A handwritten verbal sanction from the Section Head." },
            { id: "B", text: "Publish a nationwide tender in newspapers and cancel all bids." },
            { id: "C", text: "A formal Proprietary Article Certificate (PAC) approved by the competent authority explicitly justifying technical lock-in." },
            { id: "D", text: "No documentation is required for software renewals." }
          ],
          correct: "C",
          citation: "GFR 2017 Rule 194 mandates the execution of a Proprietary Article Certificate (PAC) containing unambiguous justification for single-source procurement.",
          source: "General Financial Rules (GFR) 2017, Rule 194 (PAC Procurement)"
        },
        {
          id: "q_suparna_6",
          competency: "CCS (CCA) Rules & Disciplinary Inquiries",
          bloomLevel: "Apply",
          question: "Under Rule 14 of the Central Civil Services (Classification, Control and Appeal) Rules 1965, what document must be delivered to a charged officer when instituting Major Penalty Proceedings?",
          options: [
            { id: "A", text: "An informal email without annexures." },
            { id: "B", text: "A formal Charge Sheet comprising Articles of Charge (Annexure-I), Statement of Imputations of Misconduct (Annexure-II), List of Documents (Annexure-III), and List of Witnesses (Annexure-IV)." },
            { id: "C", text: "An instant termination letter with immediate salary freeze." },
            { id: "D", text: "A transfer order to an overseas embassy." }
          ],
          correct: "B",
          citation: "Rule 14(3) of CCS (CCA) Rules 1965 mandates framing definite charges with statements of imputation, document lists, and witness lists approved by the Disciplinary Authority.",
          source: "CCS (CCA) Rules 1965 (Rule 14 - Major Penalty Inquiries)"
        },
        {
          id: "q_suparna_7",
          competency: "UN SNA 2008 & National Accounts",
          bloomLevel: "Understand",
          question: "In the estimation of Gross Value Added (GVA) at basic prices as per the UN System of National Accounts (SNA 2008), which formula is officially utilized by MoSPI?",
          options: [
            { id: "A", text: "GVA at Basic Prices = Gross Output at Basic Prices minus Intermediate Consumption at Purchasers' Prices." },
            { id: "B", text: "GVA = Gross Output plus Direct Income Taxes minus Subsidies." },
            { id: "C", text: "GVA = Net Domestic Product divided by Wholesale Price Index." },
            { id: "D", text: "GVA = Total Government Revenue plus Export Remittances." }
          ],
          correct: "A",
          citation: "MoSPI National Accounts Methodology aligns with SNA 2008 where GVA at basic prices is derived by subtracting intermediate consumption at purchasers' prices from gross output at basic prices.",
          source: "UN System of National Accounts (SNA 2008) & MoSPI NAS Manual 2020"
        },
        {
          id: "q_suparna_8",
          competency: "Supply-Use Tables & Double Deflation",
          bloomLevel: "Analyze",
          question: "Why does MoSPI emphasize the transition to Double Deflation in Supply-Use Tables (SUT) for calculating real growth in manufacturing and industrial sectors?",
          options: [
            { id: "A", text: "It reduces the calculation time by 50%." },
            { id: "B", text: "It removes the need for collecting wholesale price data." },
            { id: "C", text: "It separately deflates gross output and intermediate inputs by their specific deflators, eliminating input price distortion during periods of high commodity inflation." },
            { id: "D", text: "It doubles the final GDP figure automatically." }
          ],
          correct: "C",
          citation: "SNA 2008 Para 15.111 and MoSPI Advisory Committee recommend Double Deflation to prevent single indicator bias when input and output price indices diverge.",
          source: "MoSPI Advisory Committee on National Accounts (2021) & SNA 2008"
        },
        {
          id: "q_suparna_9",
          competency: "Parliamentary Procedures & Assurance SLAs",
          bloomLevel: "Apply",
          question: "Your section receives a Starred Lok Sabha Parliamentary Question regarding annual GDP revisions with a strict 48-hour deadline. What is the mandatory administrative workflow?",
          options: [
            { id: "A", text: "File the paper away until the Parliament session concludes." },
            { id: "B", text: "Treat file with 'Immediate / Parliament Question' priority banner, compile authenticated data tables, draft the Note for Minister with Joint Secretary approval, and transmit via e-Parliament portal." },
            { id: "C", text: "Forward the request to an external private research agency." },
            { id: "D", text: "Advise the Ministry of Parliamentary Affairs that statistical data is confidential." }
          ],
          correct: "B",
          citation: "Manual of Parliamentary Procedures Chapter 8 mandates top-priority tracking, authenticated annexures, and ministerial briefing notes for all admitted legislative questions.",
          source: "Manual of Parliamentary Procedures in Government of India (Chapter 8)"
        },
        {
          id: "q_suparna_10",
          competency: "SPARROW APAR Timelines & KPI Integrity",
          bloomLevel: "Remember",
          question: "Under DoPT OM guidelines on SPARROW electronic appraisal, what is the statutory deadline for a Group B Gazetted Officer to submit their online self-appraisal to the Reporting Officer for the financial year ending 31st March?",
          options: [
            { id: "A", text: "30th April of the reporting year (with quantifiable KPI achievements)." },
            { id: "B", text: "31st December of the following year." },
            { id: "C", text: "There is no fixed deadline for SPARROW submissions." },
            { id: "D", text: "Within 24 hours of joining government service." }
          ],
          correct: "A",
          citation: "DoPT OM No. 21011/1/2005-Estt(A) prescribes 30th April as the strict deadline for submission of self-appraisal by officers on SPARROW.",
          source: "DoPT Guidelines on APAR Calendar (OM No. 21011/1/2005-Estt)"
        }
      ]
    },
    recommendedPathways: [
      {
        id: "CRS-GFR-401",
        stageNumber: "01",
        title: "Advanced Public Procurement & Contract Management (GFR 2017 & GeM)",
        provider: "NIFM / DoPT",
        hours: "4.5 hrs",
        xp: 90,
        targetedGap: "Tenders, dispute resolution, PBG forfeitures, and GFR rules.",
        status: "active_roadmap"
      },
      {
        id: "CRS-VIG-401",
        stageNumber: "02",
        title: "Vigilance Administration and Disciplinary Proceedings for Supervisory Officers",
        provider: "ISTM / CVC",
        hours: "3.5 hrs",
        xp: 80,
        targetedGap: "Charge sheets (Rule 14/16), inquiry procedures, and vigilance.",
        status: "pending"
      },
      {
        id: "CRS-ANL-301",
        stageNumber: "03",
        title: "Data-Driven Decision Making in Government (GovAnalytics)",
        provider: "LBSNAA / NeGD",
        hours: "4.0 hrs",
        xp: 85,
        targetedGap: "Translating raw data into executive policy briefs & KPI dashboards.",
        status: "locked"
      },
      {
        id: "CRS-LDR-301",
        stageNumber: "04",
        title: "Leadership, Team Motivation & Change Management in Public Sector",
        provider: "LBSNAA",
        hours: "3.0 hrs",
        xp: 70,
        targetedGap: "Preparation for Under Secretary administrative leadership.",
        status: "locked"
      }
    ]
  }
};

export const USER_PROFILES = [
  {
    id: "EMP-ER-2015-7821",
    name: "Amit Kumar Mondal",
    designation: "Ticket Examiner",
    cadre: "Frontline Field Staff",
    department: "Eastern Railway Division",
    postingLocation: "Kolkata Division, Howrah",
    joinedYear: 2015,
    email: "amit.mondal@railnet.gov.in",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 62,
    totalCompetencies: 14,
    masteredCount: 3,
    inProgressCount: 5,
    gapCount: 6,
    status: "gap",
    coursesCompleted: 1,
    learningHours: 36,
  },
  {
    id: "EMP-SO-2012-4091",
    name: "Suparna Chatterjee",
    designation: "Section Officer (SO)",
    cadre: "Mid-Management (Group B Gazetted)",
    department: "Economic Accounts Division",
    postingLocation: "Central Secretariat, New Delhi",
    joinedYear: 2012,
    email: "suparna.chatterjee@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 74,
    totalCompetencies: 14,
    masteredCount: 6,
    inProgressCount: 5,
    gapCount: 3,
    status: "in_progress",
    coursesCompleted: 4,
    learningHours: 78,
  },
  {
    id: "EMP-2019-0118",
    name: "Anand Verma",
    designation: "Lead Data Scientist",
    cadre: "Senior Specialist",
    department: "Data Analytics Division",
    postingLocation: "Headquarters, New Delhi",
    joinedYear: 2019,
    email: "anand.verma@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 92,
    totalCompetencies: 14,
    masteredCount: 11,
    inProgressCount: 2,
    gapCount: 1,
    status: "certified",
    coursesCompleted: 8,
    learningHours: 145,
  },
  {
    id: "EMP-2022-0491",
    name: "Sunita Banerjee",
    designation: "Technical Officer (R&D)",
    cadre: "Research Cadre",
    department: "Research & Design Wing",
    postingLocation: "Zonal Center, Mumbai",
    joinedYear: 2022,
    email: "sunita.banerjee@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 84,
    totalCompetencies: 14,
    masteredCount: 8,
    inProgressCount: 4,
    gapCount: 2,
    status: "certified",
    coursesCompleted: 6,
    learningHours: 110,
  },
  {
    id: "EMP-2023-0802",
    name: "Vikram Mehta",
    designation: "Field Analyst",
    cadre: "Junior Staff",
    department: "Field Operations Division",
    postingLocation: "District Office, Jaipur",
    joinedYear: 2023,
    email: "vikram.mehta@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 58,
    totalCompetencies: 14,
    masteredCount: 2,
    inProgressCount: 6,
    gapCount: 6,
    status: "gap",
    coursesCompleted: 2,
    learningHours: 38,
  },
  {
    id: "EMP-2020-0255",
    name: "Meenakshi Sundaram",
    designation: "Statistical Officer",
    cadre: "Executive Cadre",
    department: "Economic Accounts Division",
    postingLocation: "Chennai Regional Office",
    joinedYear: 2020,
    email: "meenakshi.s@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 79,
    totalCompetencies: 14,
    masteredCount: 6,
    inProgressCount: 5,
    gapCount: 3,
    status: "in_progress",
    coursesCompleted: 5,
    learningHours: 85,
  },
  {
    id: "EMP-2018-0094",
    name: "Rajeshwar Rao",
    designation: "Joint Director (Price Indices)",
    cadre: "Directorate",
    department: "Price Statistics Division",
    postingLocation: "Headquarters, New Delhi",
    joinedYear: 2018,
    email: "rajeshwar.rao@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 94,
    totalCompetencies: 14,
    masteredCount: 12,
    inProgressCount: 2,
    gapCount: 0,
    status: "certified",
    coursesCompleted: 9,
    learningHours: 180,
  },
  {
    id: "EMP-2024-0912",
    name: "Kavita Deshmukh",
    designation: "Junior Statistical Inspector",
    cadre: "Survey Field Cadre",
    department: "Field Operations Division",
    postingLocation: "Nagpur Sub-division",
    joinedYear: 2024,
    email: "kavita.d@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 52,
    totalCompetencies: 14,
    masteredCount: 1,
    inProgressCount: 5,
    gapCount: 8,
    status: "gap",
    coursesCompleted: 1,
    learningHours: 24,
  },
  {
    id: "EMP-2021-0533",
    name: "Mohammad Tariq",
    designation: "Spatial Data Architect",
    cadre: "Specialist Staff",
    department: "Research & Design Wing",
    postingLocation: "Hyderabad Tech Cell",
    joinedYear: 2021,
    email: "m.tariq@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 88,
    totalCompetencies: 14,
    masteredCount: 9,
    inProgressCount: 3,
    gapCount: 2,
    status: "certified",
    coursesCompleted: 7,
    learningHours: 128,
  },
  {
    id: "EMP-2022-0641",
    name: "Aarti Nambiar",
    designation: "Econometrician",
    cadre: "Analytics Cadre",
    department: "Economic Accounts Division",
    postingLocation: "Bangalore Branch",
    joinedYear: 2022,
    email: "aarti.n@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 81,
    totalCompetencies: 14,
    masteredCount: 7,
    inProgressCount: 4,
    gapCount: 3,
    status: "in_progress",
    coursesCompleted: 5,
    learningHours: 94,
  },
  {
    id: "EMP-2020-0419",
    name: "Harish Chandra Joshi",
    designation: "Superintendent (Surveys)",
    cadre: "Field Supervisory",
    department: "Field Operations Division",
    postingLocation: "Dehradun Regional Hub",
    joinedYear: 2020,
    email: "hc.joshi@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 74,
    totalCompetencies: 14,
    masteredCount: 5,
    inProgressCount: 6,
    gapCount: 3,
    status: "in_progress",
    coursesCompleted: 4,
    learningHours: 68,
  },
  {
    id: "EMP-2023-0785",
    name: "Sneha Patel",
    designation: "Quality Assurance Analyst",
    cadre: "Quality Cadre",
    department: "Data Analytics Division",
    postingLocation: "Ahmedabad Operations",
    joinedYear: 2023,
    email: "sneha.patel@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 68,
    totalCompetencies: 14,
    masteredCount: 3,
    inProgressCount: 7,
    gapCount: 4,
    status: "in_progress",
    coursesCompleted: 3,
    learningHours: 54,
  },
  {
    id: "EMP-2017-0042",
    name: "Devendra Kulkarni",
    designation: "Deputy Director General",
    cadre: "Senior Leadership",
    department: "Price Statistics Division",
    postingLocation: "Headquarters, New Delhi",
    joinedYear: 2017,
    email: "d.kulkarni@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 96,
    totalCompetencies: 14,
    masteredCount: 13,
    inProgressCount: 1,
    gapCount: 0,
    status: "certified",
    coursesCompleted: 10,
    learningHours: 210,
  },
  {
    id: "EMP-2024-0991",
    name: "Rohan Bhattacharya",
    designation: "Trainee Analyst",
    cadre: "Probationary Cadre",
    department: "Economic Accounts Division",
    postingLocation: "Kolkata Centre",
    joinedYear: 2024,
    email: "rohan.b@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 46,
    totalCompetencies: 14,
    masteredCount: 1,
    inProgressCount: 4,
    gapCount: 9,
    status: "gap",
    coursesCompleted: 1,
    learningHours: 18,
  },
  {
    id: "EMP-2021-0388",
    name: "Geeta Ranganathan",
    designation: "Senior Microdata Curator",
    cadre: "Specialist Staff",
    department: "Data Analytics Division",
    postingLocation: "Chennai Regional Office",
    joinedYear: 2021,
    email: "geeta.r@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 83,
    totalCompetencies: 14,
    masteredCount: 7,
    inProgressCount: 5,
    gapCount: 2,
    status: "certified",
    coursesCompleted: 6,
    learningHours: 102,
  },
  {
    id: "EMP-2022-0517",
    name: "Gurpreet Singh Gill",
    designation: "Field Enforcement Officer",
    cadre: "Operations Cadre",
    department: "Field Operations Division",
    postingLocation: "Chandigarh Directorate",
    joinedYear: 2022,
    email: "gurpreet.singh@statsaarthi.gov.in",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80",
    skillReadiness: 71,
    totalCompetencies: 14,
    masteredCount: 4,
    inProgressCount: 6,
    gapCount: 4,
    status: "in_progress",
    coursesCompleted: 3,
    learningHours: 62,
  },
];

export const OFFICER_PROFILE = USER_PROFILES[0];

export const ADMIN_PROFILE = {
  name: "Dr. R. K. Srivastava",
  designation: "Director General (Training & Capacity Building)",
  department: "National Statistical Systems Training Academy (NSSTA), MoSPI",
  email: "admin@statsaarthi.gov.in",
  id: "ADM-9021"
};

export const COMPETENCIES = [
  {
    id: "C01",
    code: "STAT-SAMP-01",
    name: "Survey Design & Sampling Estimation",
    category: "Domain",
    pillar: "Statistical",
    currentLevel: 3,
    requiredLevel: 5,
    status: "gap",
    priority: "High",
    description: "Design and implement stratified multi-stage sampling frames, standard errors, and probability estimation.",
  },
  {
    id: "C02",
    code: "STAT-NATL-02",
    name: "National Accounts & Economic Aggregates (NAS)",
    category: "Domain",
    pillar: "Statistical",
    currentLevel: 2,
    requiredLevel: 4,
    status: "gap",
    priority: "High",
    description: "Gross Value Added (GVA), Supply-Use Tables, Gross Fixed Capital Formation, and System of National Accounts (SNA).",
  },
  {
    id: "C03",
    code: "TECH-PY-01",
    name: "Python for Advanced Data Analytics",
    category: "Functional",
    pillar: "Technical",
    currentLevel: 2,
    requiredLevel: 4,
    status: "in_progress",
    priority: "Medium",
    description: "Data wrangling, automated validation pipelines, and machine learning models using pandas, numpy, and scikit-learn.",
  },
  {
    id: "C04",
    code: "TECH-GIS-01",
    name: "Geographic Information Systems (GIS) & Mapping",
    category: "Functional",
    pillar: "Technical",
    currentLevel: 1,
    requiredLevel: 3,
    status: "gap",
    priority: "High",
    description: "Spatial boundary geocoding, thematic raster choropleths, and satellite remote sensing data integration.",
  },
  {
    id: "C05",
    code: "STAT-PRIC-01",
    name: "Price Statistics & Inflation Indices (CPI / WPI)",
    category: "Domain",
    pillar: "Statistical",
    currentLevel: 3,
    requiredLevel: 4,
    status: "in_progress",
    priority: "Medium",
    description: "Laspeyres index compilation, item basket weighting, geometric mean aggregation, and price imputation.",
  },
  {
    id: "C06",
    code: "STAT-LABR-01",
    name: "Labour Statistics & Household Surveys (PLFS)",
    category: "Domain",
    pillar: "Statistical",
    currentLevel: 2,
    requiredLevel: 4,
    status: "gap",
    priority: "High",
    description: "Workforce Participation Rate (WPR), Labour Force Participation (LFPR), activity status, and panel rotations.",
  },
  {
    id: "C07",
    code: "TECH-R-01",
    name: "R Programming & Econometric Modeling",
    category: "Functional",
    pillar: "Technical",
    currentLevel: 4,
    requiredLevel: 4,
    status: "mastered",
    priority: "Low",
    description: "Survey-weighted regression, variance estimation (survey package), and reproducible analytical markdown pipelines.",
  },
  {
    id: "C08",
    code: "TECH-STATA-01",
    name: "Stata, SPSS & SAS Analytics",
    category: "Functional",
    pillar: "Technical",
    currentLevel: 3,
    requiredLevel: 4,
    status: "in_progress",
    priority: "Medium",
    description: "Micro-data manipulation, cross-tabulation, multi-level modeling, and hypothesis testing on micro-datasets.",
  },
  {
    id: "C09",
    code: "GOVN-DPDP-01",
    name: "Data Privacy (DPDP), Cybersecurity & DPI",
    category: "Functional",
    pillar: "Digital Governance",
    currentLevel: 3,
    requiredLevel: 5,
    status: "gap",
    priority: "High",
    description: "Digital Personal Data Protection (DPDP) Act compliance, anonymization, differential privacy, and secure data exchange.",
  },
  {
    id: "C10",
    code: "BEHV-LEAD-01",
    name: "Field Operations Leadership & Ethics",
    category: "Behavioural",
    pillar: "Managerial",
    currentLevel: 4,
    requiredLevel: 5,
    status: "in_progress",
    priority: "Medium",
    description: "Enumerator supervision, public communication, field ethics, and conflict resolution during large-scale operations.",
  },
  {
    id: "C11",
    code: "STAT-SDG-01",
    name: "SDG Indicator Frameworks & Meta-Data",
    category: "Domain",
    pillar: "Statistical",
    currentLevel: 4,
    requiredLevel: 4,
    status: "mastered",
    priority: "Low",
    description: "National Indicator Framework (NIF), baseline tracking, meta-data standardization, and voluntary national reviews.",
  },
  {
    id: "C12",
    code: "STAT-INDU-01",
    name: "Industrial Statistics & Business Registers (ASI)",
    category: "Domain",
    pillar: "Statistical",
    currentLevel: 4,
    requiredLevel: 4,
    status: "mastered",
    priority: "Low",
    description: "Annual Survey of Industries methodology, NIC classification codes, invested capital, and net value added calculations.",
  },
  {
    id: "C13",
    code: "BEHV-COMM-01",
    name: "Stakeholder Presentation & Data Dissemination",
    category: "Behavioural",
    pillar: "Managerial",
    currentLevel: 5,
    requiredLevel: 5,
    status: "mastered",
    priority: "Low",
    description: "Translating statistical findings into actionable policy briefs, visual storytelling, and open data releases.",
  },
  {
    id: "C14",
    code: "TECH-SQL-01",
    name: "SQL & Relational Database Architecture",
    category: "Functional",
    pillar: "Technical",
    currentLevel: 5,
    requiredLevel: 5,
    status: "mastered",
    priority: "Low",
    description: "Query optimization, relational schema design, window functions, and indexing large analytical databases.",
  },
];

export const COURSES = [
  {
    id: "CRS-SAMP-301",
    title: "Advanced Stratified Sampling & Survey Estimation",
    category: "Domain",
    competencyCode: "STAT-SAMP-01",
    duration: "18 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    format: "Self-Paced with Sandbox Labs",
    rating: 4.8,
    enrolled: 4210,
    tags: ["Sampling", "Variance", "PPS", "Probability"],
    provider: "NSSTA (National Statistical Systems Training Academy)",
    providerType: "nssta",
    status: "recommended",
    progress: 0,
    modulesCount: 6,
    credits: 4,
    syllabus: [
      "1. Frame Construction & Multi-Stage Clusters",
      "2. Probability Proportional to Size (PPS) Systematics",
      "3. Variance Estimation & Jackknife Methods",
      "4. Non-Sampling Error Adjustments & Weight Multipliers"
    ],
    description: "Comprehensive study of multi-stage stratified sampling, probability proportional to size (PPS), and variance estimation formulas.",
  },
  {
    id: "CRS-PY-201",
    title: "Python for Data Processing, Scrutiny & Validation",
    category: "Functional",
    competencyCode: "TECH-PY-01",
    duration: "24 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    format: "Interactive Jupyter Notebooks",
    rating: 4.9,
    enrolled: 8930,
    tags: ["Python", "Pandas", "Automation", "Validation"],
    provider: "iGOT Karmayogi Bharat",
    providerType: "igot",
    status: "in_progress",
    progress: 45,
    modulesCount: 8,
    credits: 5,
    syllabus: [
      "1. Vectorized Wrangling with Pandas 2.0",
      "2. Anomaly Detection & Cross-Field Logic Rules",
      "3. Automated Validation Pipelines for PLFS Returns",
      "4. Synthetic Microdata Generation"
    ],
    description: "Master automated data cleaning pipelines, cross-field logical validation rules, and statistical plotting.",
  },
  {
    id: "CRS-NATL-401",
    title: "System of National Accounts & SUT Compilation",
    category: "Domain",
    competencyCode: "STAT-NATL-02",
    duration: "30 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
    format: "Case Study & Exercises",
    rating: 4.7,
    enrolled: 1840,
    tags: ["NAS", "GVA", "Supply-Use", "SNA 2008"],
    provider: "NSSTA (National Statistical Systems Training Academy)",
    providerType: "nssta",
    status: "recommended",
    progress: 0,
    modulesCount: 10,
    credits: 6,
    syllabus: [
      "1. SNA 2008 Conceptual Architecture",
      "2. Gross Value Added (GVA) by Industry Sector",
      "3. Supply and Use Tables (SUT) Balancing",
      "4. Deflator Construction & Volume Measures"
    ],
    description: "In-depth training on compiling GVA, commodity flows, deflators, and input-output matrices.",
  },
  {
    id: "CRS-GIS-101",
    title: "Spatial Data Analytics & Geocoding for Field Surveys",
    category: "Functional",
    competencyCode: "TECH-GIS-01",
    duration: "14 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&auto=format&fit=crop&q=80",
    format: "Hands-on GIS Sandbox",
    rating: 4.6,
    enrolled: 3120,
    tags: ["GIS", "Spatial", "Geocoding", "Remote Sensing"],
    provider: "iGOT Karmayogi Bharat",
    providerType: "igot",
    status: "recommended",
    progress: 0,
    modulesCount: 5,
    credits: 3,
    syllabus: [
      "1. Delineation of Enumeration Blocks (EBs)",
      "2. Village Geo-Coordinates Verification via QGIS",
      "3. Thematic Choropleths & Density Heatmaps",
      "4. Satellite Remote Sensing Integration"
    ],
    description: "Learn to delineate enumeration blocks (EBs), verify village coordinates, and build thematic boundary layers.",
  },
  {
    id: "CRS-DPDP-101",
    title: "Digital Personal Data Protection & Governance",
    category: "Functional",
    competencyCode: "GOVN-DPDP-01",
    duration: "10 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    format: "Self-Paced with Case Laws",
    rating: 4.9,
    enrolled: 6200,
    tags: ["DPDP", "Privacy", "Security", "Compliance"],
    provider: "iGOT Karmayogi Bharat",
    providerType: "igot",
    status: "in_progress",
    progress: 80,
    modulesCount: 4,
    credits: 3,
    syllabus: [
      "1. DPDP Act 2023 Statutory Requirements",
      "2. Respondent Consent & Micro-data Anonymization",
      "3. Differential Privacy and k-Anonymity Models",
      "4. Decoupled Cryptographic Storage Architecture"
    ],
    description: "Legal obligations under the DPDP Act, data anonymization techniques, and secure cryptographic storage for public datasets.",
  },
  {
    id: "CRS-CPI-102",
    title: "Price Statistics & Laspeyres CPI Methodology",
    category: "Domain",
    competencyCode: "STAT-PRIC-01",
    duration: "16 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80",
    format: "Interactive Workbook",
    rating: 4.8,
    enrolled: 2940,
    tags: ["CPI", "Laspeyres", "Inflation", "Indices"],
    provider: "NSSTA (National Statistical Systems Training Academy)",
    providerType: "nssta",
    status: "completed",
    progress: 100,
    modulesCount: 5,
    credits: 4,
    syllabus: [
      "1. Base Year Basket Formulation & Weights",
      "2. Geometric Mean of Price Relatives",
      "3. Imputation of Missing Price Quotes",
      "4. Core vs Headline Inflation Aggregation"
    ],
    description: "Methodology of consumer price indexing, rural-urban aggregation, item imputation, and inflation metrics.",
  },
  {
    id: "CRS-LEAD-501",
    title: "Public Leadership & Supervisory Field Ethics",
    category: "Behavioural",
    competencyCode: "BEHV-LEAD-01",
    duration: "12 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
    format: "Video Simulations & Role Play",
    rating: 4.9,
    enrolled: 5400,
    tags: ["Leadership", "Ethics", "Supervision", "Governance"],
    provider: "iGOT Karmayogi Bharat",
    providerType: "igot",
    status: "completed",
    progress: 100,
    modulesCount: 4,
    credits: 3,
    syllabus: [
      "1. Large-scale Survey Cadre Management",
      "2. Conflict De-escalation & Field Protocol",
      "3. Transparency & Public Communication",
      "4. Ethical Decision-making under Pressure"
    ],
    description: "Core behavioural and leadership competency development for supervisory statistical officers.",
  },
  {
    id: "CRS-ASI-202",
    title: "Annual Survey of Industries (ASI) Compilation & Scrutiny",
    category: "Domain",
    competencyCode: "STAT-ASI-01",
    duration: "20 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
    format: "Interactive Workbook & Case Studies",
    rating: 4.8,
    enrolled: 3420,
    tags: ["ASI", "Manufacturing", "NIC-2008", "Balance Sheet"],
    provider: "NSSTA (National Statistical Systems Training Academy)",
    providerType: "nssta",
    status: "recommended",
    progress: 0,
    modulesCount: 6,
    credits: 5,
    syllabus: [
      "1. Census vs Sample Sector Boundary Rules",
      "2. Block-wise Schedule Scrutiny (Blocks A through K)",
      "3. Gross Output, Input & Depreciation Reconciliation",
      "4. Multiplier Estimation for Joint Stock & Private Factories"
    ],
    description: "Master factory sector survey design, capital structure verification, gross value added computations, and industrial microdata scrutiny.",
  },
  {
    id: "CRS-PLFS-303",
    title: "Periodic Labour Force Survey (PLFS) Activity Classification",
    category: "Domain",
    competencyCode: "STAT-LABR-01",
    duration: "22 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=80",
    format: "Self-Paced with Real Survey Returns",
    rating: 4.9,
    enrolled: 4180,
    tags: ["PLFS", "Labour Force", "UPSS", "CWS", "NCO-2015"],
    provider: "NSSTA (National Statistical Systems Training Academy)",
    providerType: "nssta",
    status: "recommended",
    progress: 0,
    modulesCount: 7,
    credits: 5,
    syllabus: [
      "1. Usual Principal vs Subsidiary Status (UPSS) Delineation",
      "2. Current Weekly Status (CWS) Activity Matrix",
      "3. Industry-Occupation Coding (NIC 2008 & NCO 2015)",
      "4. Worker Population Ratio (WPR) & Unemployment Rate Aggregation"
    ],
    description: "In-depth guide to national employment-unemployment measurement, labour market indicators, and multi-stage activity scrutiny.",
  },
  {
    id: "CRS-TSA-402",
    title: "Time Series Econometrics & Seasonal Adjustment (X-13ARIMA)",
    category: "Domain",
    competencyCode: "STAT-TIME-01",
    duration: "26 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    format: "Hands-on Python & R Sandbox",
    rating: 4.7,
    enrolled: 1950,
    tags: ["Time Series", "X-13ARIMA", "Seasonality", "Forecasting"],
    provider: "NSSTA (National Statistical Systems Training Academy)",
    providerType: "nssta",
    status: "recommended",
    progress: 0,
    modulesCount: 8,
    credits: 6,
    syllabus: [
      "1. Stationarity, Unit Root Tests & Cointegration",
      "2. ARIMA Modelling & Diagnostics",
      "3. X-13ARIMA-SEATS Seasonal Decomposition",
      "4. High-Frequency Economic Forecasting Models"
    ],
    description: "Practical time-series methods for official macroeconomic indicators, seasonal adjustments, and trend-cycle extraction.",
  },
  {
    id: "CRS-ML-501",
    title: "Machine Learning for Microdata Imputation & Outlier Scrutiny",
    category: "Functional",
    competencyCode: "TECH-ML-01",
    duration: "28 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop&q=80",
    format: "Interactive Jupyter Notebooks",
    rating: 4.9,
    enrolled: 5200,
    tags: ["Machine Learning", "Imputation", "Outlier", "Scikit-Learn"],
    provider: "iGOT Karmayogi Bharat",
    providerType: "igot",
    status: "recommended",
    progress: 0,
    modulesCount: 8,
    credits: 6,
    syllabus: [
      "1. Automated Outlier Detection (Isolation Forests, Hampel)",
      "2. k-NN & Random Forest Imputation for Missing Records",
      "3. Supervised Classification of Ambiguous Survey Text",
      "4. Model Validation & Non-Bias Benchmarking"
    ],
    description: "Apply machine learning algorithms to automate survey anomaly detection, item imputation, and text categorization.",
  },
  {
    id: "CRS-ENV-201",
    title: "System of Environmental-Economic Accounting (SEEA 2012)",
    category: "Domain",
    competencyCode: "STAT-ENV-01",
    duration: "16 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&auto=format&fit=crop&q=80",
    format: "Case Study & Exercises",
    rating: 4.8,
    enrolled: 1420,
    tags: ["SEEA", "Green GDP", "Natural Capital", "Environment"],
    provider: "NSSTA (National Statistical Systems Training Academy)",
    providerType: "nssta",
    status: "recommended",
    progress: 0,
    modulesCount: 5,
    credits: 4,
    syllabus: [
      "1. SEEA Central Framework Architecture",
      "2. Physical Flow Accounts for Energy & Water",
      "3. Environmental Asset Accounts & Depletion Costs",
      "4. Green GDP & Ecosystem Service Valuation"
    ],
    description: "International standard for environmental-economic statistics, ecosystem accounting, and natural capital depletion metrics.",
  },
  {
    id: "CRS-SDG-101",
    title: "SDG National Indicator Framework (NIF) Tracking & Audit",
    category: "Functional",
    competencyCode: "GOVN-SDG-01",
    duration: "14 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    format: "Self-Paced with Data Dashboards",
    rating: 4.8,
    enrolled: 3890,
    tags: ["SDG", "NIF", "Indicators", "Data Flow"],
    provider: "iGOT Karmayogi Bharat",
    providerType: "igot",
    status: "recommended",
    progress: 0,
    modulesCount: 4,
    credits: 3,
    syllabus: [
      "1. MoSPI National Indicator Framework Structure (300+ Indicators)",
      "2. Inter-Ministry Data Harmonization Protocols",
      "3. Metadata Standardization & Tier Classification",
      "4. District-Level SDG Disaggregation & Progress Indices"
    ],
    description: "Comprehensive guide to tracking India's Sustainable Development Goals (SDG) National Indicator Framework.",
  },
  {
    id: "CRS-BIGD-401",
    title: "Big Data & Web Scraping for High-Frequency Price Statistics",
    category: "Functional",
    competencyCode: "TECH-BIGD-01",
    duration: "20 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80",
    format: "Hands-on Python Sandbox",
    rating: 4.9,
    enrolled: 2750,
    tags: ["Big Data", "Web Scraping", "E-Commerce", "Real-Time CPI"],
    provider: "iGOT Karmayogi Bharat",
    providerType: "igot",
    status: "recommended",
    progress: 0,
    modulesCount: 6,
    credits: 5,
    syllabus: [
      "1. Automated Web Scraping Pipelines for Retail E-Commerce",
      "2. Product Matching & Supervised Text Clustering",
      "3. High-Frequency Daily Inflation Nowcasting",
      "4. Ethics, Robots.txt Compliance & Rate Limiting"
    ],
    description: "Harness web-scraped price observations and transactional scanner data for nowcasting Consumer Price Indices.",
  },
  {
    id: "CRS-QUAL-301",
    title: "Total Survey Error (TSE) Framework & Quality Assurance",
    category: "Domain",
    competencyCode: "STAT-QUAL-01",
    duration: "15 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    format: "Interactive Guidelines & Checklists",
    rating: 4.8,
    enrolled: 2310,
    tags: ["TSE", "Quality", "Measurement Error", "Audit"],
    provider: "NSSTA (National Statistical Systems Training Academy)",
    providerType: "nssta",
    status: "recommended",
    progress: 0,
    modulesCount: 5,
    credits: 4,
    syllabus: [
      "1. Total Survey Error Taxonomy (Specification, Frame, Non-Response)",
      "2. Measurement Error & Cognitive Interviewing",
      "3. Paradata Analytics for Field Enumerator Monitoring",
      "4. Quality Control Checklists & Supervisory Re-Interviews"
    ],
    description: "Systematic minimization of sampling and non-sampling errors across all survey lifecycles.",
  },
  {
    id: "CRS-R-202",
    title: "Advanced R Programming for National Statistical Systems",
    category: "Functional",
    competencyCode: "TECH-R-01",
    duration: "24 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&auto=format&fit=crop&q=80",
    format: "Interactive RStudio Notebooks",
    rating: 4.9,
    enrolled: 4620,
    tags: ["R", "Tidyverse", "Survey", "Sampling"],
    provider: "iGOT Karmayogi Bharat",
    providerType: "igot",
    status: "recommended",
    progress: 0,
    modulesCount: 7,
    credits: 5,
    syllabus: [
      "1. Data Wrangling with Tidyverse & data.table",
      "2. Complex Survey Analysis with R 'survey' Package",
      "3. Stratified Multiplier Weighting & Replicate Variances",
      "4. Automated HTML & PDF Report Generation with Quarto"
    ],
    description: "Master R programming tailored for official statistical agencies, complex survey designs, and automated publishing."
  }
];

// Multi-format training content (PDF, PPTX, Video)
export const TRAINING_DOCUMENTS = [
  {
    id: "DOC-001",
    title: "Field Operations Standard Operating Procedures 2024-25",
    type: "pdf",
    formatBadge: "PDF Document",
    pages: 148,
    size: "8.4 MB",
    uploadedAt: "2026-07-15",
    extractedMCQs: 42,
    status: "Indexed",
    summary: "Standard operational manual governing household sampling frames, enumeration blocks, and non-response adjustment.",
  },
  {
    id: "PPT-002",
    title: "National Accounts & Supply-Use Tables Framework (Executive Slides)",
    type: "presentation",
    formatBadge: "PPTX Presentation",
    pages: 45,
    size: "14.2 MB",
    uploadedAt: "2026-08-02",
    extractedMCQs: 24,
    status: "Indexed",
    summary: "Visual presentation breaking down GVA calculation methodologies, sectoral deflators, and institutional sector classifications.",
  },
  {
    id: "VID-003",
    title: "Video Lecture: Practical Sampling & Variance Estimation in Python",
    type: "video",
    formatBadge: "MP4 Video (45 mins)",
    pages: "45m 20s",
    size: "128 MB",
    uploadedAt: "2026-08-18",
    extractedMCQs: 18,
    status: "Transcribed & Indexed",
    summary: "Hands-on video walkthrough explaining stratified sampling code, standard error calculations, and bootstrap simulations.",
  },
];

// Virtual Lab Datasets and Code Templates
export const VIRTUAL_LAB_EXPERIMENTS = [
  {
    id: "exp-python-sampling",
    title: "Stratified Sampling vs Simple Random Sampling Simulation",
    language: "python",
    badge: "Python 3.11",
    dataset: "Household Income Survey (N = 10,000 units)",
    description: "Simulate stratified random sampling versus simple random sampling. Calculate and compare estimated population mean and standard errors.",
    code: `import numpy as np
import pandas as pd

# 1. Generate Synthetic Survey Population (3 Strata)
np.random.seed(42)
pop_size = 10000
strata = np.random.choice(['Urban', 'Semi-Urban', 'Rural'], size=pop_size, p=[0.3, 0.3, 0.4])
income = np.where(strata == 'Urban', np.random.normal(55000, 12000, pop_size),
         np.where(strata == 'Semi-Urban', np.random.normal(35000, 8000, pop_size),
         np.random.normal(22000, 5000, pop_size)))

df = pd.DataFrame({'Stratum': strata, 'MonthlyIncome': income})

# 2. Perform Stratified Random Sampling (Sample n = 500)
n_sample = 500
stratum_alloc = {'Urban': 150, 'Semi-Urban': 150, 'Rural': 200}

samples = []
for st, n_h in stratum_alloc.items():
    st_sample = df[df['Stratum'] == st].sample(n=n_h, random_state=42)
    samples.append(st_sample)

sample_df = pd.concat(samples)

# 3. Compute Stratified Mean and Standard Error
strata_stats = sample_df.groupby('Stratum')['MonthlyIncome'].agg(['mean', 'var', 'count'])
weights = {'Urban': 0.3, 'Semi-Urban': 0.3, 'Rural': 0.4}

strat_mean = sum(strata_stats.loc[s, 'mean'] * weights[s] for s in weights)
strat_se = np.sqrt(sum((weights[s]**2) * (strata_stats.loc[s, 'var'] / stratum_alloc[s]) for s in weights))

print(f"=== STRATIFIED ESTIMATION RESULTS ===")
print(f"True Population Mean:    ₹{df['MonthlyIncome'].mean():.2f}")
print(f"Stratified Sample Mean: ₹{strat_mean:.2f}")
print(f"Standard Error (SE):    ₹{strat_se:.2f}")
print(f"Variance Reduction vs SRS: 38.4% Efficiency Gain")`,
    sampleOutput: `=== STRATIFIED ESTIMATION RESULTS ===
True Population Mean:    ₹35,842.10
Stratified Sample Mean: ₹35,810.45
Standard Error (SE):    ₹384.20
Variance Reduction vs SRS: 38.4% Efficiency Gain`,
  },
  {
    id: "exp-r-cpi",
    title: "Consumer Price Index (CPI) Laspeyres Aggregation",
    language: "r",
    badge: "R 4.3 (stats)",
    dataset: "Item Price Quotes (Commodity Basket 2024 vs 2026)",
    description: "Compute item-level price relatives and aggregate them using the Laspeyres index formula with expenditure weights.",
    code: `# 1. Define Commodity Basket and Weights (Base Year 2024 = 100)
basket <- data.frame(
  Group = c("Food & Beverages", "Fuel & Light", "Clothing", "Housing", "Miscellaneous"),
  BasePrice = c(120, 85, 450, 8500, 320),
  CurrentPrice = c(138, 92, 485, 9100, 345),
  ExpenditureWeight = c(0.4586, 0.0684, 0.0653, 0.1007, 0.3070)
)

# 2. Compute Price Relatives (I_i = P_t / P_0 * 100)
basket$PriceRelative <- (basket$CurrentPrice / basket$BasePrice) * 100

# 3. Laspeyres Composite Index Formula: Sum(W_i * (P_t / P_0))
cpi_composite <- sum(basket$PriceRelative * basket$ExpenditureWeight)
inflation_rate <- ((cpi_composite - 100) / 100) * 100

cat("=== CPI LASPEYRES CALCULATION ===\\n")
cat(sprintf("Composite Price Index: %.2f\\n", cpi_composite))
cat(sprintf("Point-to-Point Inflation Rate: %.2f%%\\n", inflation_rate))
print(basket[, c("Group", "PriceRelative", "ExpenditureWeight")])`,
    sampleOutput: `=== CPI LASPEYRES CALCULATION ===
Composite Price Index: 111.45
Point-to-Point Inflation Rate: 11.45%

              Group PriceRelative ExpenditureWeight
1  Food & Beverages        115.00            0.4586
2      Fuel & Light        108.24            0.0684
3          Clothing        107.78            0.0653
4           Housing        107.06            0.1007
5     Miscellaneous        107.81            0.3070`,
  },
  {
    id: "exp-sql-scrutiny",
    title: "SQL Validation: Outlier & Non-Sampling Error Scrutiny",
    language: "sql",
    badge: "PostgreSQL 16",
    dataset: "Establishment Annual Returns (50,000 Records)",
    description: "Write analytical SQL window functions to detect multi-fold discrepancies in declared wages vs total operational expenditure.",
    code: `-- Scrutiny Query: Flag establishments where Wage-to-Turnover ratio deviates > 3 Std Deviations from Industry Median
WITH SectorStats AS (
    SELECT 
        industry_code,
        PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY wages / turnover) AS median_ratio,
        STDDEV(wages / turnover) AS std_ratio
    FROM establishment_returns
    WHERE turnover > 0
    GROUP BY industry_code
)
SELECT 
    e.est_id,
    e.est_name,
    e.industry_code,
    ROUND((e.wages / e.turnover)::numeric, 4) AS reported_ratio,
    ROUND(s.median_ratio::numeric, 4) AS industry_median,
    CASE 
        WHEN (e.wages / e.turnover) > (s.median_ratio + 3 * s.std_ratio) THEN 'CRITICAL_HIGH_WAGE_OUTLIER'
        WHEN (e.wages / e.turnover) < (s.median_ratio - 3 * s.std_ratio) THEN 'CRITICAL_UNDERREPORTED_WAGE'
        ELSE 'VALID'
    END AS scrutiny_status
FROM establishment_returns e
JOIN SectorStats s ON e.industry_code = s.industry_code
WHERE ABS(e.wages / e.turnover - s.median_ratio) > 3 * s.std_ratio
LIMIT 10;`,
    sampleOutput: `est_id   | est_name             | industry_code | reported_ratio | industry_median | scrutiny_status
---------+----------------------+---------------+----------------+-----------------+---------------------------
EST-8921 | Apex Agro Mills      | 1040          | 0.8420         | 0.1850          | CRITICAL_HIGH_WAGE_OUTLIER
EST-4512 | Deccan Textiles Ltd  | 1311          | 0.0120         | 0.2240          | CRITICAL_UNDERREPORTED_WAGE
EST-7731 | Precision Metalworks | 2511          | 0.7910         | 0.1980          | CRITICAL_HIGH_WAGE_OUTLIER
(3 anomaly records flagged for supervisory field inspection)`,
  },
];


// Interactive Training & Workshop Calendar Events (NSSTA + iGOT)
export const CALENDAR_EVENTS = [
  {
    id: "EVT-001",
    title: "NSSTA Live Masterclass: Multi-Stage PPS Sampling & Standard Error Workshop",
    provider: "NSSTA",
    providerType: "nssta",
    type: "workshop",
    date: "2026-09-04",
    time: "10:30 AM – 1:00 PM IST",
    instructor: "Dr. K. S. Murthy (Sr. Director, NSSTA Greater Noida)",
    mode: "Live Virtual Lab (Interactive Q&A)",
    registered: 142,
    capacity: 200,
    acbpCredits: 3.5,
    rsvpStatus: "registered",
    description: "Hands-on walkthrough of stratified allocation algorithms, cluster variance calculations, and non-response adjustment in household survey datasets.",
    link: "https://nssta.gov.in/live/session-401"
  },
  {
    id: "EVT-002",
    title: "iGOT Karmayogi: DPDP Act 2023 Compliance & Anonymization Cohort Deadline",
    provider: "iGOT Karmayogi",
    providerType: "igot",
    type: "deadline",
    date: "2026-09-08",
    time: "11:59 PM IST",
    instructor: "Digital Governance Cadre Cell",
    mode: "Self-Paced Module Submission",
    registered: 420,
    capacity: 500,
    acbpCredits: 4.0,
    rsvpStatus: "pending",
    description: "Mandatory module completion deadline for all ISS officers on microdata decoupling, cryptographic hashing, and consent management.",
    link: "https://igotkarmayogi.gov.in/learn/dpdp-cert"
  },
  {
    id: "EVT-003",
    title: "NSSTA Executive Seminar: Supply-Use Tables (SUT) & GVA Rebasing 2026",
    provider: "NSSTA",
    providerType: "nssta",
    type: "seminar",
    date: "2026-09-12",
    time: "2:00 PM – 5:30 PM IST",
    instructor: "Prof. Anirban Sengupta (Advisor, National Accounts)",
    mode: "Hybrid (NSSTA Auditorium / Live Stream)",
    registered: 95,
    capacity: 150,
    acbpCredits: 4.0,
    rsvpStatus: "registered",
    description: "Executive policy seminar explaining commodity flow methods, deflator compilation, and GVA sectoral revisions.",
    link: "https://nssta.gov.in/events/sut-seminar"
  },
  {
    id: "EVT-004",
    title: "iGOT Live Webinar: Python Automation for Annual Survey of Industries (ASI)",
    provider: "iGOT Karmayogi",
    providerType: "igot",
    type: "webinar",
    date: "2026-09-18",
    time: "3:00 PM – 4:30 PM IST",
    instructor: "S. Rao (Lead Data Architect, MoSPI)",
    mode: "Online Webinar",
    registered: 310,
    capacity: 500,
    acbpCredits: 2.0,
    rsvpStatus: "pending",
    description: "Live demonstration of pandas scrutiny scripts, anomaly detection thresholds, and automated return processing.",
    link: "https://igotkarmayogi.gov.in/webinar/py-asi"
  },
  {
    id: "EVT-005",
    title: "Quarterly Diagnostic Assessment: Survey Quality & Microdata Scrutiny",
    provider: "StatSaarthi Evaluation Wing",
    providerType: "nssta",
    type: "assessment",
    date: "2026-09-24",
    time: "10:00 AM – 11:30 AM IST",
    instructor: "MoSPI Assessment Board",
    mode: "Online Proctored Evaluation",
    registered: 520,
    capacity: 1000,
    acbpCredits: 5.0,
    rsvpStatus: "registered",
    description: "Nationwide competency benchmark test mapping Bloom's Taxonomy Level 3 & 4 skills across sampling, NAS, and Python scrutiny.",
    link: "/quiz/QUIZ-001"
  }
];

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
      "Remember": 4,
      "Understand": 6,
      "Apply": 5,
      "Analyze": 3,
      "Evaluate": 2
    },
    "document": "Field Operations Standard Operating Procedures 2024-25",
    "questions": [
      {
        "id": "Q001_01",
        "text": "When stratifying a geographic region for household socio-economic surveys, what is the primary objective of creating homogeneous strata?",
        "bloomLevel": "Apply",
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
        "id": "Q001_02",
        "text": "In Probability Proportional to Size (PPS) systematic sampling, if an establishment's worker count exceeds the sampling interval (I), how should it be treated?",
        "bloomLevel": "Analyze",
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
        "id": "Q001_03",
        "text": "Under the Digital Personal Data Protection (DPDP) guidelines for statistical enumeration, what is mandatory regarding respondent identifier fields?",
        "bloomLevel": "Evaluate",
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
        "id": "Q001_04",
        "text": "What mathematical adjustment is made to survey multiplier weights when an enumerated stratum encounters non-response in selected households?",
        "bloomLevel": "Remember",
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
        "id": "Q001_05",
        "text": "In National Accounts (NAS), what constitutes the primary conceptual difference between Gross Domestic Product (GDP) and Gross Value Added (GVA) at basic prices?",
        "bloomLevel": "Understand",
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
        "id": "Q001_06",
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
        "id": "Q001_07",
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
        "id": "Q001_08",
        "text": "In Probability Proportional to Size with Replacement (PPSWR), which estimator is unbiased for the population total Y?",
        "bloomLevel": "Evaluate",
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
        "id": "Q001_09",
        "text": "In PPS Without Replacement (PPSWOR), why is Murthy's unordered estimator preferred over Des Raj's ordered estimator?",
        "bloomLevel": "Remember",
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
        "id": "Q001_10",
        "text": "Which index number satisfies both the Time Reversal Test and the Factor Reversal Test?",
        "bloomLevel": "Understand",
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
        "id": "Q001_11",
        "text": "In the Annual Survey of Industries (ASI), what is the criterion for a registered factory to be in the Census Sector?",
        "bloomLevel": "Apply",
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
        "id": "Q001_12",
        "text": "In the Periodic Labour Force Survey (PLFS), how is a person classified as 'Employed' under Usual Principal Status (UPS)?",
        "bloomLevel": "Analyze",
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
        "id": "Q001_13",
        "text": "Under the Modified Mixed Reference Period (MMRP), what recall period is used for perishable food items?",
        "bloomLevel": "Evaluate",
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
        "id": "Q001_14",
        "text": "Why is 'Double Deflation' preferred for measuring Real Gross Value Added (GVA) in manufacturing?",
        "bloomLevel": "Remember",
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
        "id": "Q001_15",
        "text": "What is the primary statistical goal of Raking Ratio estimation in survey post-stratification?",
        "bloomLevel": "Understand",
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
        "id": "Q001_16",
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
        "id": "Q001_17",
        "text": "In the Urban Frame Survey (UFS), what is the standard household norm for a single Enumeration Block (EB)?",
        "bloomLevel": "Analyze",
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
        "id": "Q001_18",
        "text": "Under Rubin's Rules for Multiple Imputation (MI), how are parameter estimates from m datasets combined?",
        "bloomLevel": "Evaluate",
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
        "id": "Q001_19",
        "text": "In National Accounts compilation, what does FISIM represent in banking?",
        "bloomLevel": "Remember",
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
        "id": "Q001_20",
        "text": "In releasing public statistical microdata, what does epsilon represent in differential privacy?",
        "bloomLevel": "Understand",
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
    "id": "QUIZ-002",
    "courseId": "CRS-PY-201",
    "title": "Python for Data Processing, Scrutiny & Validation",
    "competencyCode": "TECH-PY-01",
    "competencyName": "Python for Advanced Data Analytics",
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
    "document": "Automated Data Scrutiny Protocols for PLFS & ASI",
    "questions": [
      {
        "id": "Q002_01",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_02",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_03",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_04",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_05",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_06",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_07",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_08",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_09",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_10",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_11",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_12",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_13",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_14",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_15",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_16",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_17",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_18",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_19",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      },
      {
        "id": "Q002_20",
        "text": "In Python for Data Processing, Scrutiny & Validation, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Automated Data Scrutiny Protocols for PLFS & ASI criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Automated Data Scrutiny Protocols for PLFS & ASI, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Automated Data Scrutiny Protocols for PLFS & ASI protocols."
      }
    ]
  },
  {
    "id": "QUIZ-003",
    "courseId": "CRS-NATL-401",
    "title": "System of National Accounts & SUT Compilation",
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
        "id": "Q003_01",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_02",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_03",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_04",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_05",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_06",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_07",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_08",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_09",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_10",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_11",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_12",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_13",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_14",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_15",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_16",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_17",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_18",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_19",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
      },
      {
        "id": "Q003_20",
        "text": "In System of National Accounts & SUT Compilation, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official System of National Accounts (SNA 2008) Guidelines criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "System of National Accounts (SNA 2008) Guidelines, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official System of National Accounts (SNA 2008) Guidelines protocols."
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
        "id": "Q004_01",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_02",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_03",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_04",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_05",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_06",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_07",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_08",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_09",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_10",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_11",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_12",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_13",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_14",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_15",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_16",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_17",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_18",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_19",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      },
      {
        "id": "Q004_20",
        "text": "In Spatial Data Analytics & Geocoding for Field Surveys, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official GIS Demarcation & Spatial Analytics Manual criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "GIS Demarcation & Spatial Analytics Manual, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official GIS Demarcation & Spatial Analytics Manual protocols."
      }
    ]
  },
  {
    "id": "QUIZ-005",
    "courseId": "CRS-DPDP-101",
    "title": "Digital Personal Data Protection & Governance",
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
        "id": "Q005_01",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_02",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_03",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_04",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_05",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_06",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_07",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_08",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_09",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_10",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_11",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_12",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_13",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_14",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_15",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_16",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_17",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_18",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_19",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
      },
      {
        "id": "Q005_20",
        "text": "In Digital Personal Data Protection & Governance, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official DPDP Act 2023 Rules & Compliance Handbook criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "DPDP Act 2023 Rules & Compliance Handbook, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official DPDP Act 2023 Rules & Compliance Handbook protocols."
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
        "id": "Q006_01",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_02",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_03",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_04",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_05",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_06",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_07",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_08",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_09",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_10",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_11",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_12",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_13",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_14",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_15",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_16",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_17",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_18",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_19",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
      },
      {
        "id": "Q006_20",
        "text": "In Price Statistics & Laspeyres CPI Methodology, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Technical Compilation Guide on CPI (Base 2012) criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Technical Compilation Guide on CPI (Base 2012), Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Technical Compilation Guide on CPI (Base 2012) protocols."
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
        "id": "Q007_01",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_02",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_03",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_04",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_05",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_06",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_07",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_08",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_09",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_10",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_11",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_12",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_13",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_14",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_15",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_16",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_17",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_18",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_19",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
      },
      {
        "id": "Q007_20",
        "text": "In Public Leadership & Supervisory Field Ethics, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Code of Conduct & Field Leadership Guidelines criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Code of Conduct & Field Leadership Guidelines, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Code of Conduct & Field Leadership Guidelines protocols."
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
        "id": "Q008_01",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_02",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_03",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_04",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_05",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_06",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_07",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_08",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_09",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_10",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_11",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_12",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_13",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_14",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_15",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_16",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_17",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_18",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_19",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
      },
      {
        "id": "Q008_20",
        "text": "In Annual Survey of Industries (ASI) Compilation & Scrutiny, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Annual Survey of Industries Operations Manual criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Annual Survey of Industries Operations Manual, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Annual Survey of Industries Operations Manual protocols."
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
        "id": "Q009_01",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_02",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_03",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_04",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_05",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_06",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_07",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_08",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_09",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_10",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_11",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_12",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_13",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_14",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_15",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_16",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_17",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_18",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_19",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
      },
      {
        "id": "Q009_20",
        "text": "In Periodic Labour Force Survey (PLFS) Activity Classification, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official PLFS Activity Classification Manual criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "PLFS Activity Classification Manual, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official PLFS Activity Classification Manual protocols."
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
        "id": "Q010_01",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_02",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_03",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_04",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_05",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_06",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_07",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_08",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_09",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_10",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_11",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_12",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_13",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_14",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_15",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_16",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_17",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_18",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_19",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
      },
      {
        "id": "Q010_20",
        "text": "In Time Series Econometrics & Seasonal Adjustment (X-13ARIMA), what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Time Series & Seasonal Adjustment Guide criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Time Series & Seasonal Adjustment Guide, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Time Series & Seasonal Adjustment Guide protocols."
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
        "id": "Q011_01",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_02",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_03",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_04",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_05",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_06",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_07",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_08",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_09",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_10",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_11",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_12",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_13",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_14",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_15",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_16",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_17",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_18",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_19",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
      },
      {
        "id": "Q011_20",
        "text": "In Machine Learning for Microdata Imputation & Outlier Scrutiny, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Data Science & Machine Learning Guidelines criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Data Science & Machine Learning Guidelines, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Data Science & Machine Learning Guidelines protocols."
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
        "id": "Q012_01",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_02",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_03",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_04",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_05",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_06",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_07",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_08",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_09",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_10",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_11",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_12",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_13",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_14",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_15",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_16",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_17",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_18",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_19",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
      },
      {
        "id": "Q012_20",
        "text": "In System of Environmental-Economic Accounting (SEEA 2012), what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official SEEA Central Framework Compilation Manual criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SEEA Central Framework Compilation Manual, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SEEA Central Framework Compilation Manual protocols."
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
        "id": "Q013_01",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_02",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_03",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_04",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_05",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_06",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_07",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_08",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_09",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_10",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_11",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_12",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_13",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_14",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_15",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_16",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_17",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_18",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_19",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      },
      {
        "id": "Q013_20",
        "text": "In SDG National Indicator Framework (NIF) Tracking & Audit, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official SDG National Indicator Framework Handbook criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "SDG National Indicator Framework Handbook, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official SDG National Indicator Framework Handbook protocols."
      }
    ]
  },
  {
    "id": "QUIZ-014",
    "courseId": "CRS-BIGD-401",
    "title": "Big Data & Web Scraping for High-Frequency Price Statistics",
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
        "id": "Q014_01",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_02",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_03",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_04",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_05",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_06",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_07",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_08",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_09",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_10",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_11",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_12",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_13",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_14",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_15",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_16",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_17",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_18",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_19",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
      },
      {
        "id": "Q014_20",
        "text": "In Big Data & Web Scraping for High-Frequency Price Statistics, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Big Data & Alternative Sources Protocol criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Big Data & Alternative Sources Protocol, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Big Data & Alternative Sources Protocol protocols."
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
        "id": "Q015_01",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_02",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_03",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_04",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_05",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_06",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_07",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_08",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_09",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_10",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_11",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_12",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_13",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_14",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_15",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_16",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_17",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_18",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_19",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
      },
      {
        "id": "Q015_20",
        "text": "In Total Survey Error (TSE) Framework & Quality Assurance, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official Survey Quality Assurance & TSE Standards criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "Survey Quality Assurance & TSE Standards, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official Survey Quality Assurance & TSE Standards protocols."
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
        "id": "Q016_01",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #1 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 1.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 1",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_02",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #2 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 2.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 2",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_03",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #3 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 3.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 3",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_04",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #4 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 4.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 4",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_05",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #5 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 5.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 5",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_06",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #6 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 6.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 6",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_07",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #7 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 7.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 7",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_08",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #8 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 8.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 8",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_09",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #9 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 9.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 9",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_10",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #10 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 10.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 10",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_11",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #11 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 11.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 11",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_12",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #12 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 12.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 12",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_13",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #13 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 13.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 13",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_14",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #14 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 14.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 14",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_15",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #15 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 15.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 15",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_16",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #16 under official MoSPI guidelines?",
        "bloomLevel": "Apply",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 16.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 16",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_17",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #17 under official MoSPI guidelines?",
        "bloomLevel": "Analyze",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 17.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 17",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_18",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #18 under official MoSPI guidelines?",
        "bloomLevel": "Evaluate",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 18.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 18",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_19",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #19 under official MoSPI guidelines?",
        "bloomLevel": "Remember",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 19.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 19",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      },
      {
        "id": "Q016_20",
        "text": "In Advanced R Programming for National Statistical Systems, what is the verified standard protocol regarding core assessment competency item #20 under official MoSPI guidelines?",
        "bloomLevel": "Understand",
        "options": {
          "A": "Strict methodological alignment with official R for Official Statistical Systems Manual criteria (Section 20.1).",
          "B": "Ad-hoc uncalibrated field estimates without supervisory validation.",
          "C": "Complete exclusion of sampling multiplier weights from aggregate tables.",
          "D": "Arbitrary manual imputation outside statutory standards."
        },
        "correctOption": "A",
        "sourceCitation": "R for Official Statistical Systems Manual, Section 20",
        "explanation": "MoSPI and NSSTA statutory guidelines mandate verified adherence to official R for Official Statistical Systems Manual protocols."
      }
    ]
  }
];

export const QUIZ_DATA = QUIZZES_LIST[0];

// Admin Assessment Submissions Log (A-to-Z Detailed Records for Auditing)
export const ASSESSMENT_SUBMISSIONS = [
  {
    submissionId: "SUB-2026-8812",
    officerId: "EMP-ER-2015-7821",
    officerName: "Amit Kumar Mondal",
    officerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    designation: "Ticket Examiner",
    department: "Eastern Railway Division",
    cadre: "Frontline Field Staff",
    quizId: "QUIZ-DIAG-AMIT",
    quizTitle: "Frontline Service Diagnostic & Cyber Hygiene Assessment",
    submittedAt: "2026-09-01 11:15 IST",
    timeTakenSeconds: 195,
    scorePercent: 67,
    passed: true,
    totalQuestions: 3,
    correctCount: 2,
    wrongCount: 1,
    bloomScore: { Understand: "100%", Apply: "50%", Analyze: "50%" },
    answers: [
      {
        questionId: "Q1",
        questionText: "While on station duty, an individual claiming to be a technical support technician asks for your departmental ticketing login credentials to apply an urgent security update. What is the standard protocol under government information security rules?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Apply",
        timeSpentSec: 52,
        citation: "CERT-In Government Cyber Security Guidelines (Section 4.2)",
        remark: "Correctly refused credential sharing and followed departmental verification protocol."
      },
      {
        questionId: "Q2",
        questionText: "You need to send a photo of a daily passenger concession verification report to an official WhatsApp group. The sheet contains full passenger Aadhaar numbers and mobile numbers. What action is mandatory under the DPDP Act 2023?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Understand",
        timeSpentSec: 68,
        citation: "Digital Personal Data Protection (DPDP) Act 2023, Section 8",
        remark: "Mandatory masking of Aadhaar and PII data identified correctly."
      },
      {
        questionId: "Q3",
        questionText: "An agitated passenger demands an immediate cash refund on the platform due to a delayed train, drawing a restless crowd. What is the most effective citizen-centric response?",
        selectedOption: "A",
        correctOption: "C",
        isCorrect: false,
        bloomLevel: "Analyze",
        timeSpentSec: 75,
        citation: "Mission Karmayogi Civil Service Code of Ethics (Rule 9)",
        remark: "Citizen de-escalation gap detected. Flagged for LBSNAA Citizen Centricity module."
      }
    ]
  },
  {
    submissionId: "SUB-2026-7734",
    officerId: "EMP-SO-2012-4091",
    officerName: "Suparna Chatterjee",
    officerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    designation: "Section Officer (SO)",
    department: "Economic Accounts Division",
    cadre: "Mid-Management (Group B Gazetted)",
    quizId: "QUIZ-DIAG-SUPARNA",
    quizTitle: "Executive Procurement & Vigilance Diagnostic Assessment",
    submittedAt: "2026-09-01 16:40 IST",
    timeTakenSeconds: 230,
    scorePercent: 100,
    passed: true,
    totalQuestions: 3,
    correctCount: 3,
    wrongCount: 0,
    bloomScore: { Apply: "100%", Analyze: "100%", Evaluate: "100%" },
    answers: [
      {
        questionId: "Q1",
        questionText: "A vendor awarded a high-value IT contract via GeM fails to deliver within the stipulated timeline without establishing valid force majeure grounds. What is the mandatory course of action under GFR 2017 and GeM Contract Rules?",
        selectedOption: "C",
        correctOption: "C",
        isCorrect: true,
        bloomLevel: "Apply",
        timeSpentSec: 72,
        citation: "GFR 2017 Rule 175 & GeM GTC Clause 9",
        remark: "Liquidated damages deduction protocol verified accurately."
      },
      {
        questionId: "Q2",
        questionText: "An RTI applicant seeks copies of the personal Annual Performance Assessment Reports (APAR) and confidential medical reimbursement bills of section staff. How should the Section Officer advise the Public Information Officer (PIO)?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Analyze",
        timeSpentSec: 78,
        citation: "RTI Act 2005 Section 8(1)(j) & Supreme Court Girish Deshpande vs CIC",
        remark: "Protected statutory privacy exemption applied accurately."
      },
      {
        questionId: "Q3",
        questionText: "During bill scrutiny, you observe a subordinate officer has deliberately split a single procurement requirement into five separate micro-orders to remain below the higher tender sanction threshold. What is your supervisory obligation under CVC guidelines?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Evaluate",
        timeSpentSec: 80,
        citation: "CVC Vigilance Manual 2021 & GFR 2017 Rule 157",
        remark: "Supervisory vigilance note-sheet escalation verified."
      }
    ]
  },
  {
    submissionId: "SUB-2026-9041",
    officerId: "EMP-2021-0342",
    officerName: "Priya Sharma",
    officerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    designation: "Senior Manager (Operations)",
    department: "Field Operations Division",
    cadre: "Professional Staff",
    quizId: "QUIZ-001",
    quizTitle: "Multi-Stage Sampling & Field Quality Assessment",
    submittedAt: "2026-08-28 14:22 IST",
    timeTakenSeconds: 440,
    scorePercent: 100,
    passed: true,
    totalQuestions: 5,
    correctCount: 5,
    wrongCount: 0,
    bloomScore: { Understand: "100%", Apply: "100%", Analyze: "100%", Evaluate: "100%", Remember: "100%" },
    answers: [
      {
        questionId: "Q1",
        questionText: "When stratifying a geographic region for household socio-economic surveys, what is the primary objective of creating homogeneous strata?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Understand",
        timeSpentSec: 62,
        citation: "Field Operations Manual 2024-25, Chapter 3, Section 3.1",
        remark: "Correct theoretical application."
      },
      {
        questionId: "Q2",
        questionText: "In Probability Proportional to Size (PPS) systematic sampling, if an establishment's worker count exceeds the sampling interval (I), how should it be treated?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Apply",
        timeSpentSec: 88,
        citation: "Field Operations Manual 2024-25, Chapter 3, Section 3.4",
        remark: "Identified certainty census stratum criterion perfectly."
      },
      {
        questionId: "Q3",
        questionText: "Under the Digital Personal Data Protection (DPDP) guidelines for statistical enumeration, what is mandatory regarding respondent identifier fields?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Analyze",
        timeSpentSec: 95,
        citation: "Data Privacy & Governance Handbook, Section 4.2",
        remark: "Correct understanding of decoupled encryption."
      },
      {
        questionId: "Q4",
        questionText: "What mathematical adjustment is made to survey multiplier weights when an enumerated stratum encounters non-response in selected households?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Evaluate",
        timeSpentSec: 110,
        citation: "Survey Design & Methodology Guidelines, Chapter 6",
        remark: "Evaluated non-response multiplier formula precisely."
      },
      {
        questionId: "Q5",
        questionText: "In National Accounts (NAS), what constitutes the primary conceptual difference between Gross Domestic Product (GDP) and Gross Value Added (GVA) at basic prices?",
        selectedOption: "A",
        correctOption: "A",
        isCorrect: true,
        bloomLevel: "Remember",
        timeSpentSec: 85,
        citation: "National Accounts Compilation Guide, Chapter 2",
        remark: "Demonstrated accurate recall of GDP vs GVA tax identities."
      }
    ]
  },
  {
    submissionId: "SUB-2026-9042",
    officerId: "EMP-2020-0255",
    officerName: "Meenakshi Sundaram",
    officerAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    designation: "Statistical Officer",
    department: "Economic Accounts Division",
    cadre: "Executive Cadre",
    quizId: "QUIZ-001",
    quizTitle: "Multi-Stage Sampling & Field Quality Assessment",
    submittedAt: "2026-08-29 11:15 IST",
    timeTakenSeconds: 512,
    scorePercent: 80,
    passed: true,
    totalQuestions: 5,
    correctCount: 4,
    wrongCount: 1,
    bloomScore: { Understand: "100%", Apply: "100%", Analyze: "0%", Evaluate: "100%", Remember: "100%" },
    answers: [
      {
        questionId: "Q1",
        questionText: "When stratifying a geographic region for household socio-economic surveys, what is the primary objective of creating homogeneous strata?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Understand",
        timeSpentSec: 75,
        citation: "Field Operations Manual 2024-25, Chapter 3",
        remark: "Correct."
      },
      {
        questionId: "Q2",
        questionText: "In Probability Proportional to Size (PPS) systematic sampling, if an establishment's worker count exceeds the sampling interval (I), how should it be treated?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Apply",
        timeSpentSec: 94,
        citation: "Field Operations Manual 2024-25, Chapter 3",
        remark: "Correct."
      },
      {
        questionId: "Q3",
        questionText: "Under the Digital Personal Data Protection (DPDP) guidelines for statistical enumeration, what is mandatory regarding respondent identifier fields?",
        selectedOption: "A",
        correctOption: "B",
        isCorrect: false,
        bloomLevel: "Analyze",
        timeSpentSec: 130,
        citation: "Data Privacy & Governance Handbook, Section 4.2",
        remark: "Mistook plaintext logging for supervisor auditing. Needs DPDP upskilling."
      },
      {
        questionId: "Q4",
        questionText: "What mathematical adjustment is made to survey multiplier weights when an enumerated stratum encounters non-response in selected households?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Evaluate",
        timeSpentSec: 120,
        citation: "Survey Design & Methodology Guidelines, Chapter 6",
        remark: "Correct."
      },
      {
        questionId: "Q5",
        questionText: "In National Accounts (NAS), what constitutes the primary conceptual difference between Gross Domestic Product (GDP) and Gross Value Added (GVA) at basic prices?",
        selectedOption: "A",
        correctOption: "A",
        isCorrect: true,
        bloomLevel: "Remember",
        timeSpentSec: 93,
        citation: "National Accounts Compilation Guide, Chapter 2",
        remark: "Correct."
      }
    ]
  },
  {
    submissionId: "SUB-2026-9043",
    officerId: "EMP-2023-0802",
    officerName: "Vikram Mehta",
    officerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    designation: "Field Analyst",
    department: "Field Operations Division",
    cadre: "Junior Staff",
    quizId: "QUIZ-001",
    quizTitle: "Multi-Stage Sampling & Field Quality Assessment",
    submittedAt: "2026-08-30 16:45 IST",
    timeTakenSeconds: 580,
    scorePercent: 60,
    passed: false,
    totalQuestions: 5,
    correctCount: 3,
    wrongCount: 2,
    bloomScore: { Understand: "100%", Apply: "0%", Analyze: "0%", Evaluate: "100%", Remember: "100%" },
    answers: [
      {
        questionId: "Q1",
        questionText: "When stratifying a geographic region for household socio-economic surveys, what is the primary objective of creating homogeneous strata?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Understand",
        timeSpentSec: 90,
        citation: "Field Operations Manual 2024-25, Chapter 3",
        remark: "Correct."
      },
      {
        questionId: "Q2",
        questionText: "In Probability Proportional to Size (PPS) systematic sampling, if an establishment's worker count exceeds the sampling interval (I), how should it be treated?",
        selectedOption: "A",
        correctOption: "B",
        isCorrect: false,
        bloomLevel: "Apply",
        timeSpentSec: 140,
        citation: "Field Operations Manual 2024-25, Chapter 3",
        remark: "Incorrectly excluded unit instead of assigning certainty."
      },
      {
        questionId: "Q3",
        questionText: "Under the Digital Personal Data Protection (DPDP) guidelines for statistical enumeration, what is mandatory regarding respondent identifier fields?",
        selectedOption: "C",
        correctOption: "B",
        isCorrect: false,
        bloomLevel: "Analyze",
        timeSpentSec: 160,
        citation: "Data Privacy & Governance Handbook, Section 4.2",
        remark: "Confused DPDP with total respondent omission."
      },
      {
        questionId: "Q4",
        questionText: "What mathematical adjustment is made to survey multiplier weights when an enumerated stratum encounters non-response in selected households?",
        selectedOption: "B",
        correctOption: "B",
        isCorrect: true,
        bloomLevel: "Evaluate",
        timeSpentSec: 110,
        citation: "Survey Design & Methodology Guidelines, Chapter 6",
        remark: "Correct."
      },
      {
        questionId: "Q5",
        questionText: "In National Accounts (NAS), what constitutes the primary conceptual difference between Gross Domestic Product (GDP) and Gross Value Added (GVA) at basic prices?",
        selectedOption: "A",
        correctOption: "A",
        isCorrect: true,
        bloomLevel: "Remember",
        timeSpentSec: 80,
        citation: "National Accounts Compilation Guide, Chapter 2",
        remark: "Correct."
      }
    ]
  },
  {
    submissionId: "SUB-2026-9044",
    officerId: "EMP-2019-0118",
    officerName: "Anand Verma",
    officerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    designation: "Lead Data Scientist",
    department: "Data Analytics Division",
    cadre: "Senior Specialist",
    quizId: "QUIZ-003",
    quizTitle: "Python Microdata Scrutiny & Logical Validation",
    submittedAt: "2026-08-30 09:30 IST",
    timeTakenSeconds: 380,
    scorePercent: 100,
    passed: true,
    totalQuestions: 4,
    correctCount: 4,
    wrongCount: 0,
    bloomScore: { Apply: "100%", Analyze: "100%", Evaluate: "100%" },
    answers: [
      {
        questionId: "Q301",
        questionText: "In pandas, which vectorized method is most computationally efficient to flag rows where wage exceeds 3 standard deviations of industry median?",
        selectedOption: "A",
        correctOption: "A",
        isCorrect: true,
        bloomLevel: "Apply",
        timeSpentSec: 70,
        citation: "Python for Statistical Operations, Chapter 5",
        remark: "Optimal vectorization knowledge."
      },
      {
        questionId: "Q302",
        questionText: "When merging household roster data (Level 1) with employment activities (Level 2), which merge type prevents accidental orphan record loss?",
        selectedOption: "A",
        correctOption: "A",
        isCorrect: true,
        bloomLevel: "Apply",
        timeSpentSec: 85,
        citation: "Microdata Engineering Handbook, Section 3.2",
        remark: "Identified outer merge with indicator flag."
      },
      {
        questionId: "Q303",
        questionText: "What is the primary risk of using simple mean imputation on survey income data with high skewness and non-ignorable non-response?",
        selectedOption: "A",
        correctOption: "A",
        isCorrect: true,
        bloomLevel: "Analyze",
        timeSpentSec: 110,
        citation: "Survey Quality Guidelines, Chapter 4",
        remark: "Recognized variance shrinkage."
      },
      {
        questionId: "Q304",
        questionText: "Which Python testing framework is standard for writing automated schema constraint assertions for MoSPI data pipelines?",
        selectedOption: "A",
        correctOption: "A",
        isCorrect: true,
        bloomLevel: "Evaluate",
        timeSpentSec: 115,
        citation: "Data Engineering Best Practices 2026",
        remark: "Pandera / Great Expectations validation expert."
      }
    ]
  },
  {
    submissionId: "SUB-2026-9045",
    officerId: "EMP-2022-0491",
    officerName: "Sunita Banerjee",
    officerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    designation: "Technical Officer (R&D)",
    department: "Research & Design Wing",
    cadre: "Research Cadre",
    quizId: "QUIZ-002",
    quizTitle: "National Accounts (SNA 2008) & SUT Matrix Compilation",
    submittedAt: "2026-08-31 10:15 IST",
    timeTakenSeconds: 490,
    scorePercent: 100,
    passed: true,
    totalQuestions: 4,
    correctCount: 4,
    wrongCount: 0,
    bloomScore: { Understand: "100%", Apply: "100%", Analyze: "100%", Evaluate: "100%" },
    answers: [
      {
        questionId: "Q201",
        questionText: "How is Gross Fixed Capital Formation (GFCF) calculated in the expenditure approach of GDP?",
        selectedOption: "A",
        correctOption: "A",
        isCorrect: true,
        bloomLevel: "Understand",
        timeSpentSec: 95,
        citation: "National Accounts Guidelines 2024, Chapter 4",
        remark: "GFCF definition correct."
      },
      {
        questionId: "Q202",
        questionText: "In Supply and Use Tables (SUT), what identity must balance for every commodity group?",
        selectedOption: "A",
        correctOption: "A",
        isCorrect: true,
        bloomLevel: "Apply",
        timeSpentSec: 120,
        citation: "SUT Compilation Manual, MoSPI NAD Wing",
        remark: "SUT Supply = Use balance identity verified."
      },
      {
        questionId: "Q203",
        questionText: "When constructing sectoral deflators, why is the Paasche price index formula generally preferred for implicit GDP deflators?",
        selectedOption: "A",
        correctOption: "A",
        isCorrect: true,
        bloomLevel: "Analyze",
        timeSpentSec: 140,
        citation: "Price Deflators in Macroeconomic Statistics, Sec 2.3",
        remark: "Correct analysis of current volume weighting."
      },
      {
        questionId: "Q204",
        questionText: "Under SNA 2008, how is Research and Development (R&D) expenditure treated?",
        selectedOption: "A",
        correctOption: "A",
        isCorrect: true,
        bloomLevel: "Evaluate",
        timeSpentSec: 135,
        citation: "SNA 2008 Manual, Chapter 10",
        remark: "Capital asset recognition correct."
      }
    ]
  }
];

// Course-Specific Leaderboard Completions Mapping
export const COURSE_LEADERBOARD_MAP = {
  "all": USER_PROFILES.map((u, i) => ({
    rank: i + 1,
    id: u.id,
    name: u.name,
    designation: u.designation,
    dept: u.department,
    cadre: u.cadre,
    score: u.skillReadiness,
    courses: u.coursesCompleted,
    hours: u.learningHours,
    avatar: u.avatar,
    badge: i === 0 ? "Gold Scholar" : i === 1 ? "Silver Scholar" : i === 2 ? "Bronze Scholar" : "Active Learner"
  })),
  "CRS-SAMP-301": [
    { rank: 1, id: "EMP-2018-0094", name: "Rajeshwar Rao", designation: "Joint Director (Price)", dept: "Price Statistics Division", cadre: "Directorate", score: 98, progress: "100% Completed", completionDate: "2026-08-14", assessmentScore: "98%", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80" },
    { rank: 2, id: "EMP-2019-0118", name: "Anand Verma", designation: "Lead Data Scientist", dept: "Data Analytics Division", cadre: "Senior Specialist", score: 96, progress: "100% Completed", completionDate: "2026-08-18", assessmentScore: "96%", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
    { rank: 3, id: "EMP-2021-0342", name: "Priya Sharma", designation: "Senior Manager (Operations)", dept: "Field Operations Division", cadre: "Professional Staff", score: 92, progress: "100% Completed", completionDate: "2026-08-28", assessmentScore: "92%", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
    { rank: 4, id: "EMP-2022-0491", name: "Sunita Banerjee", designation: "Technical Officer (R&D)", dept: "Research & Design Wing", cadre: "Research Cadre", score: 88, progress: "90% In Progress", completionDate: "2026-08-30", assessmentScore: "88%", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" },
    { rank: 5, id: "EMP-2020-0255", name: "Meenakshi Sundaram", designation: "Statistical Officer", dept: "Economic Accounts Division", cadre: "Executive Cadre", score: 84, progress: "85% In Progress", completionDate: "2026-08-29", assessmentScore: "84%", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80" },
    { rank: 6, id: "EMP-2023-0802", name: "Vikram Mehta", designation: "Field Analyst", dept: "Field Operations Division", cadre: "Junior Staff", score: 62, progress: "60% In Progress", completionDate: "2026-08-30", assessmentScore: "60%", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" }
  ],
  "CRS-PY-201": [
    { rank: 1, id: "EMP-2019-0118", name: "Anand Verma", designation: "Lead Data Scientist", dept: "Data Analytics Division", cadre: "Senior Specialist", score: 100, progress: "100% Completed", completionDate: "2026-08-20", assessmentScore: "100%", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
    { rank: 2, id: "EMP-2021-0533", name: "Mohammad Tariq", designation: "Spatial Data Architect", dept: "Research & Design Wing", cadre: "Specialist Staff", score: 94, progress: "100% Completed", completionDate: "2026-08-22", assessmentScore: "94%", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80" },
    { rank: 3, id: "EMP-2021-0388", name: "Geeta Ranganathan", designation: "Senior Microdata Curator", dept: "Data Analytics Division", cadre: "Specialist Staff", score: 90, progress: "100% Completed", completionDate: "2026-08-25", assessmentScore: "90%", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80" },
    { rank: 4, id: "EMP-2021-0342", name: "Priya Sharma", designation: "Senior Manager (Operations)", dept: "Field Operations Division", cadre: "Professional Staff", score: 82, progress: "45% In Progress", completionDate: "2026-08-28", assessmentScore: "82%", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" }
  ],
  "CRS-NATL-401": [
    { rank: 1, id: "EMP-2018-0094", name: "Rajeshwar Rao", designation: "Joint Director (Price)", dept: "Price Statistics Division", cadre: "Directorate", score: 96, progress: "100% Completed", completionDate: "2026-08-10", assessmentScore: "96%", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80" },
    { rank: 2, id: "EMP-2022-0491", name: "Sunita Banerjee", designation: "Technical Officer (R&D)", dept: "Research & Design Wing", cadre: "Research Cadre", score: 94, progress: "100% Completed", completionDate: "2026-08-31", assessmentScore: "100%", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" },
    { rank: 3, id: "EMP-2020-0255", name: "Meenakshi Sundaram", designation: "Statistical Officer", dept: "Economic Accounts Division", cadre: "Executive Cadre", score: 90, progress: "100% Completed", completionDate: "2026-08-26", assessmentScore: "90%", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80" }
  ],
  "CRS-DPDP-101": [
    { rank: 1, id: "EMP-2019-0118", name: "Anand Verma", designation: "Lead Data Scientist", dept: "Data Analytics Division", cadre: "Senior Specialist", score: 98, progress: "100% Completed", completionDate: "2026-08-15", assessmentScore: "98%", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
    { rank: 2, id: "EMP-2021-0342", name: "Priya Sharma", designation: "Senior Manager (Operations)", dept: "Field Operations Division", cadre: "Professional Staff", score: 92, progress: "80% In Progress", completionDate: "2026-08-28", assessmentScore: "92%", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
    { rank: 3, id: "EMP-2022-0517", name: "Gurpreet Singh Gill", designation: "Field Enforcement Officer", dept: "Field Operations Division", cadre: "Operations Cadre", score: 86, progress: "100% Completed", completionDate: "2026-08-21", assessmentScore: "86%", avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80" }
  ]
};

// Skill Gap Deficit Analysis Data for Learner Graph
export const SKILL_GAP_BAR_DATA = [
  { domain: "Survey Sampling", current: 82, target: 95, deficit: 13, status: "Moderate Gap" },
  { domain: "National Accounts (SNA)", current: 65, target: 85, deficit: 20, status: "High Priority Gap" },
  { domain: "Python Analytics", current: 78, target: 90, deficit: 12, status: "Moderate Gap" },
  { domain: "GIS & Spatial", current: 58, target: 80, deficit: 22, status: "Critical Gap" },
  { domain: "Price Indices (CPI)", current: 88, target: 85, deficit: 0, status: "Mastered" },
  { domain: "DPDP Data Privacy", current: 74, target: 90, deficit: 16, status: "Moderate Gap" },
];

// Bloom's Taxonomy Proficiency Distribution for Learner
export const BLOOM_PERFORMANCE_DATA = [
  { level: "Remember (L1)", score: 92, benchmark: 80, questionsAnswered: 28 },
  { level: "Understand (L2)", score: 88, benchmark: 75, questionsAnswered: 34 },
  { level: "Apply (L3)", score: 82, benchmark: 70, questionsAnswered: 45 },
  { level: "Analyze (L4)", score: 74, benchmark: 65, questionsAnswered: 30 },
  { level: "Evaluate (L5)", score: 70, benchmark: 60, questionsAnswered: 18 },
];

// Official MoSPI Competency Digital Transcript Record
export const OFFICER_TRANSCRIPT = {
  serialNo: "MOSPI-ISS-TR-2026-0892",
  verificationHash: "SHA256: 7f8a92b1e4c909a318f77d34190c",
  issuedDate: "2026-08-30",
  issuingAuthority: "National Statistical Systems Training Academy (NSSTA) & Capacity Building Commission (CBC)",
  officerName: "Priya Sharma",
  designation: "Senior Manager (Operations)",
  cadre: "Professional Staff (ISS Cadre)",
  department: "Field Operations Division",
  postingLocation: "Regional Office, Kolkata",
  totalCreditsEarned: 38,
  totalLearningHours: 72,
  overallReadinessScore: 76,
  acbpTargetCompliance: "72% Completed (36h / 50h Target)",
  accreditedCompetencies: [
    { code: "STAT-SAMP-01", name: "Survey Design & Multi-Stage Sampling", fracLevel: "Level 4 (Applied)", hours: "18.5 hrs", grade: "A+ (92%)", status: "Verified" },
    { code: "STAT-NATL-02", name: "National Accounts & SUT Compilation", fracLevel: "Level 3 (Working)", hours: "14.0 hrs", grade: "A (88%)", status: "Verified" },
    { code: "TECH-PY-01", name: "Python for Data Processing & Scrutiny", fracLevel: "Level 3 (Working)", hours: "16.5 hrs", grade: "A (85%)", status: "In Progress" },
    { code: "STAT-PRIC-01", name: "Price Statistics & Inflation Indices (CPI)", fracLevel: "Level 4 (Applied)", hours: "12.0 hrs", grade: "O (96%)", status: "Verified" },
    { code: "BEHV-LEAD-01", name: "Field Operations Leadership & Ethics", fracLevel: "Level 5 (Expert)", hours: "11.0 hrs", grade: "O (98%)", status: "Verified" }
  ]
};

export const CHAT_SUGGESTIONS = [
  "Explain stratified sampling techniques and variance formula",
  "How is Gross Value Added (GVA) derived from survey data?",
  "What are the DPDP guidelines for micro-data anonymization?",
  "Calculate Laspeyres Consumer Price Index step-by-step",
  "How to handle non-response multiplier weighting in PLFS surveys?",
];

export const DEPARTMENT_HEATMAP = [
  { dept: "Field Operations", shortName: "FOD", sampling: 82, nas: 58, python: 64, gis: 45, leadership: 88, sdg: 72, reporting: 78 },
  { dept: "Data Analytics", shortName: "DA", sampling: 91, nas: 74, python: 88, gis: 72, leadership: 70, sdg: 85, reporting: 89 },
  { dept: "Price Statistics", shortName: "PRC", sampling: 85, nas: 82, python: 76, gis: 52, leadership: 75, sdg: 80, reporting: 84 },
  { dept: "Economic Accounts", shortName: "NAD", sampling: 74, nas: 92, python: 70, gis: 48, leadership: 78, sdg: 88, reporting: 86 },
  { dept: "Research & Design", shortName: "SDRD", sampling: 94, nas: 80, python: 85, gis: 79, leadership: 82, sdg: 90, reporting: 91 },
];

export const CAPACITY_ALERTS = [
  {
    id: "ALT-001",
    title: "Household Survey Launch — Sampling & GIS Shortfall",
    severity: "critical",
    affectedDept: "Field Operations Division",
    employeesNeeded: 28,
    deadline: "October 2026",
    detail: "Upcoming national survey requires 28 additional certified personnel in GIS geocoding and PPS sampling allocation.",
  },
  {
    id: "ALT-002",
    title: "New Consumer Basket Rebase — Price Indexing Gap",
    severity: "warning",
    affectedDept: "Price Statistics Division",
    employeesNeeded: 15,
    deadline: "December 2026",
    detail: "15 analysts require upskilling in geometric mean aggregation and digital data collection tools for the new base year rebase.",
  },
];

export const OFFICER_DIRECTORY = USER_PROFILES.map((u) => ({
  id: u.id,
  name: u.name,
  designation: u.designation,
  dept: u.department,
  fracScore: u.skillReadiness,
  status: u.status,
  avatar: u.avatar,
  coursesCompleted: u.coursesCompleted,
}));

export const COMPETENCY_TREND = [
  { month: "Mar 2026", index: 68.2, target: 85, activeAudits: 3820, delta: "+1.8%", certifiedPct: 68 },
  { month: "Apr 2026", index: 70.5, target: 85, activeAudits: 4100, delta: "+2.3%", certifiedPct: 71 },
  { month: "May 2026", index: 72.8, target: 85, activeAudits: 4350, delta: "+2.3%", certifiedPct: 73 },
  { month: "Jun 2026", index: 74.4, target: 85, activeAudits: 4520, delta: "+1.6%", certifiedPct: 75 },
  { month: "Jul 2026", index: 76.1, target: 85, activeAudits: 4710, delta: "+1.7%", certifiedPct: 76 },
  { month: "Aug 2026", index: 78.4, target: 85, activeAudits: 4850, delta: "+2.3%", certifiedPct: 78 },
];

// Officer Radar Chart Data: 6 Core Competency Domains with National Average Benchmarks
export const COMPETENCY_RADAR_DATA = [
  { subject: "Survey Sampling", current: 82, required: 95, nationalAvg: 68, fullMark: 100 },
  { subject: "National Accounts (SNA)", current: 65, required: 85, nationalAvg: 58, fullMark: 100 },
  { subject: "Python Data Science", current: 78, required: 90, nationalAvg: 62, fullMark: 100 },
  { subject: "GIS Boundary Mapping", current: 58, required: 80, nationalAvg: 52, fullMark: 100 },
  { subject: "Price Indices (CPI)", current: 88, required: 85, nationalAvg: 74, fullMark: 100 },
  { subject: "DPDP Data Privacy", current: 74, required: 90, nationalAvg: 70, fullMark: 100 },
];

// Officer Progress Timeline Data: 6 Months Trajectory with Confidence Bounds
export const PROGRESS_TIMELINE = [
  { month: "Mar", score: 62, target: 68, benchmark: 58, schedulesAudited: 420 },
  { month: "Apr", score: 67, target: 72, benchmark: 60, schedulesAudited: 850 },
  { month: "May", score: 71, target: 75, benchmark: 63, schedulesAudited: 1420 },
  { month: "Jun", score: 74, target: 78, benchmark: 66, schedulesAudited: 2100 },
  { month: "Jul", score: 78, target: 82, benchmark: 70, schedulesAudited: 2890 },
  { month: "Aug", score: 84, target: 86, benchmark: 74, schedulesAudited: 3650 },
];

// Survey Scrutiny Accuracy Metrics: Field Return Verification before vs after AI Scrutiny
export const SURVEY_SCRUTINY_DATA = [
  { division: "PLFS Labour", manualErrors: 14.2, aiResolvedErrors: 1.8, schedules: 12400 },
  { division: "CPI Rural", manualErrors: 9.8, aiResolvedErrors: 0.9, schedules: 8600 },
  { division: "ASI Industry", manualErrors: 18.5, aiResolvedErrors: 2.4, schedules: 6200 },
  { division: "CES Consumption", manualErrors: 16.1, aiResolvedErrors: 1.5, schedules: 14500 },
  { division: "SUT Input-Output", manualErrors: 11.4, aiResolvedErrors: 1.1, schedules: 5100 },
];

// Officer Course Completion Slices (Donut Chart)
export const COURSE_COMPLETION_DIST = [
  { name: "Mastered (L4-L5)", value: 6, color: "#059669" },      // Emerald
  { name: "In Progress (L2-L3)", value: 5, color: "#D2540A" },   // Warm Orange
  { name: "Priority Gap (L1)", value: 3, color: "#64748B" },     // Slate
];

// Ranked Leaderboard derived from the 15 seed profiles
export const LEADERBOARD = [...USER_PROFILES]
  .sort((a, b) => b.skillReadiness - a.skillReadiness)
  .map((p, idx) => ({
    rank: idx + 1,
    id: p.id,
    name: p.name,
    designation: p.designation,
    dept: p.department,
    score: p.skillReadiness,
    courses: p.coursesCompleted,
    avatar: p.avatar,
  }));

export const ADMIN_STATS = {
  totalEmployees: 4850,
  orgCompetencyIndex: 78,
  indexChange: 3.2,
  activeGapsClosed: 428,
  learningHoursLogged: 46200,
  coursesCompleted: 3140,
};

// -------------------------------------------------------------------------
// 1. AI GENERATED LEARNING PATHS (Mapped to Learning_Paths & Course_Competency_Mapping)
// -------------------------------------------------------------------------
export const LEARNING_PATHS = [
  {
    id: "PATH-SSO-01",
    name: "Senior Statistical Officer (SSO) FastTrack Path",
    targetRole: "Senior Statistical Officer (Level 10)",
    status: "active",
    progressPercent: 45,
    totalCourses: 3,
    completedCourses: 1,
    estimatedWeeks: "6 Weeks",
    acbpCredits: 15,
    aiRationale: "Synthesized by AI Diagnostic Engine to resolve 20-point deficit in National Accounts (SNA 2008) and 14% gap in Sampling Design required for Level 3+ verification under MoSPI SPARROW guidelines.",
    courses: [
      {
        id: "CRS-PY-201",
        step: 1,
        title: "Python for Data Processing, Scrutiny & Validation",
        provider: "iGOT Karmayogi Bharat",
        duration: "24 Hours",
        hoursSpent: 12,
        status: "in_progress",
        progress: 50,
        competencyGain: "+1 FRAC Level in Python Data Science (Level 2 ➔ Level 3)",
        priorityWeight: "Critical",
      },
      {
        id: "CRS-NATL-401",
        step: 2,
        title: "System of National Accounts & SUT Compilation",
        provider: "NSSTA Academy",
        duration: "30 Hours",
        hoursSpent: 0,
        status: "ready",
        progress: 0,
        competencyGain: "+2 FRAC Levels in National Accounts (Level 1 ➔ Level 3)",
        priorityWeight: "Critical",
      },
      {
        id: "CRS-SAMP-301",
        step: 3,
        title: "Advanced Stratified Sampling & Survey Estimation",
        provider: "NSSTA Academy",
        duration: "18 Hours",
        hoursSpent: 0,
        status: "locked",
        progress: 0,
        competencyGain: "+1 FRAC Level in Survey Sampling (Level 3 ➔ Level 4 Mastery)",
        priorityWeight: "High",
      },
    ],
  },
  {
    id: "PATH-FOD-02",
    name: "Field Operations Division (FOD) Digital Scrutiny Track",
    targetRole: "Field Inspector / Supervisor (FOD)",
    status: "recommended",
    progressPercent: 15,
    totalCourses: 2,
    completedCourses: 0,
    estimatedWeeks: "4 Weeks",
    acbpCredits: 10,
    aiRationale: "Recommended to eliminate high outlier rates in rural PLFS schedules and enhance digital CAPI field verification competence.",
    courses: [
      {
        id: "CRS-CAPI-101",
        step: 1,
        title: "CAPI Digital Survey Instrument Design & Validation",
        provider: "iGOT Karmayogi Bharat",
        duration: "16 Hours",
        hoursSpent: 2,
        status: "in_progress",
        progress: 15,
        competencyGain: "+1 FRAC Level in Survey Execution (Level 2 ➔ Level 3)",
        priorityWeight: "High",
      },
      {
        id: "CRS-DPDP-101",
        step: 2,
        title: "DPDP Act 2023: Microdata Privacy & Anonymization",
        provider: "MoSPI Legal Cell",
        duration: "12 Hours",
        hoursSpent: 0,
        status: "locked",
        progress: 0,
        competencyGain: "+1 FRAC Level in Data Governance (Level 2 ➔ Level 3)",
        priorityWeight: "Critical",
      },
    ],
  },
  {
    id: "PATH-PSD-03",
    name: "Price Statistics (CPI/WPI) Rebase & Aggregation Specialization",
    targetRole: "Assistant Director (Price Statistics Division)",
    status: "completed",
    progressPercent: 100,
    totalCourses: 2,
    completedCourses: 2,
    estimatedWeeks: "4 Weeks",
    acbpCredits: 12,
    aiRationale: "Successfully completed. Accredited for base year revision protocols, Jevons geometric mean aggregation, and digital quotation collection.",
    courses: [
      {
        id: "CRS-CPI-201",
        step: 1,
        title: "Consumer Price Index (CPI) Rebase Methodology",
        provider: "NSSTA Academy",
        duration: "20 Hours",
        hoursSpent: 20,
        status: "completed",
        progress: 100,
        competencyGain: "+1 FRAC Level in Price Statistics (Level 3 ➔ Level 4)",
        priorityWeight: "High",
      },
      {
        id: "CRS-WPI-101",
        step: 2,
        title: "WPI Item Weighting & Wholesale Trade Aggregation",
        provider: "iGOT Karmayogi Bharat",
        duration: "14 Hours",
        hoursSpent: 14,
        status: "completed",
        progress: 100,
        competencyGain: "+1 FRAC Level in Economic Indices (Level 3 ➔ Level 4)",
        priorityWeight: "High",
      },
    ],
  },
];

// -------------------------------------------------------------------------
// 2. LEARNER QUIZ ATTEMPTS & AI DIAGNOSTIC FEEDBACK (Mapped to Learner_Quiz_Attempts)
// -------------------------------------------------------------------------
export const OFFICER_QUIZ_ATTEMPTS = [
  {
    id: "ATT-2024-8841",
    quizId: "quiz-plfs-scrutiny",
    quizTitle: "PLFS Multi-Stage Sampling & Scrutiny Diagnostics",
    domain: "Survey Sampling",
    scoreObtained: 85,
    totalQuestions: 10,
    correctAnswers: 8,
    passed: true,
    passingScorePct: 75,
    attemptedAt: "28 Aug 2024, 03:45 PM",
    aiFeedback: "Excellent conceptual grasp of Stratified PPS sampling. Review Para 4.2 of NSS 78th Round Manual regarding secondary sample unit substitution to achieve 100% accuracy.",
    competencyGain: "+5 Competency Points",
  },
  {
    id: "ATT-2024-7620",
    quizId: "quiz-sna-2008",
    quizTitle: "SNA 2008 GVA & Supply-Use Matrix Certification",
    domain: "National Accounts (SNA)",
    scoreObtained: 60,
    totalQuestions: 10,
    correctAnswers: 6,
    passed: false,
    passingScorePct: 70,
    attemptedAt: "24 Aug 2024, 11:20 AM",
    aiFeedback: "Score below 70% threshold. Deficits detected in FISIM (Financial Intermediation Services) allocation and intermediate consumption deflators. Enrolling in NSSTA Module 3 recommended.",
    competencyGain: "+0 Points (Retake Recommended)",
  },
  {
    id: "ATT-2024-6311",
    quizId: "quiz-cpi-rebase",
    quizTitle: "CPI Index Revision & Jevons Geometric Mean Protocols",
    domain: "Price Statistics (CPI)",
    scoreObtained: 90,
    totalQuestions: 10,
    correctAnswers: 9,
    passed: true,
    passingScorePct: 75,
    attemptedAt: "19 Aug 2024, 05:10 PM",
    aiFeedback: "Outstanding performance! You qualify for Level 4 Mastery accreditation in Price Statistics under the FRAC framework.",
    competencyGain: "+10 Competency Points",
  },
];

// -------------------------------------------------------------------------
// 3. CADRE HISTORICAL SNAPSHOTS BY PERIOD (Mapped to Org_Skill_Analytics_Snapshots)
// Directorate-Level Readiness vs Benchmark Comparison for Admin Graph
export const DIVISION_COMPARATIVE_DATA = [
  { division: "Field Operations (FOD)", certified: 82, inProgress: 14, deficit: 4, target: 85, personnel: 1420 },
  { division: "Data Analytics (DAD)", certified: 88, inProgress: 9, deficit: 3, target: 85, personnel: 860 },
  { division: "Price Statistics (PSD)", certified: 84, inProgress: 11, deficit: 5, target: 85, personnel: 740 },
  { division: "Economic Accounts (NAD)", certified: 79, inProgress: 15, deficit: 6, target: 85, personnel: 920 },
  { division: "Research & Design (R&D)", certified: 91, inProgress: 7, deficit: 2, target: 85, personnel: 910 },
];

// -------------------------------------------------------------------------
// 2026 CADRE AUDIT SNAPSHOT ARCHIVES (Org_Skill_Analytics_Snapshots)
// -------------------------------------------------------------------------
export const CADRE_SNAPSHOTS_BY_PERIOD = {
  "Q3-2026": {
    periodName: "Q3 2026 (Current Snapshot)",
    avgCompetencyScore: 78.4,
    criticalDeficits: 142,
    totalTrainingHours: 46200,
    readinessIndex: 82.1,
    activePersonnel: 4850,
    gapReduction: "+14.8% vs Q2 2026",
    topDeficitDivision: "National Accounts (NAD)",
    certifiedPersonnel: 3920,
    inProgressPersonnel: 788,
    completionRate: 80.8
  },
  "Q2-2026": {
    periodName: "Q2 2026 (Mid-Year Review)",
    avgCompetencyScore: 74.2,
    criticalDeficits: 210,
    totalTrainingHours: 32400,
    readinessIndex: 76.5,
    activePersonnel: 4720,
    gapReduction: "+8.2% vs Q1 2026",
    topDeficitDivision: "Field Operations (FOD)",
    certifiedPersonnel: 3350,
    inProgressPersonnel: 1160,
    completionRate: 71.0
  },
  "Q1-2026": {
    periodName: "Q1 2026 (Annual Baseline)",
    avgCompetencyScore: 69.8,
    criticalDeficits: 328,
    totalTrainingHours: 19800,
    readinessIndex: 71.0,
    activePersonnel: 4600,
    gapReduction: "Baseline Audit",
    topDeficitDivision: "Research & Design (R&D)",
    certifiedPersonnel: 2840,
    inProgressPersonnel: 1432,
    completionRate: 61.7
  },
};



