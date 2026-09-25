export const COMPANY = "PredictivIQ LTD";

export const PLATFORMS = [
  {
    name: "ShrinkTrace",
    subtitle: "AI-powered shrinkage diagnostics for hospitality businesses.",
    description:
      "ShrinkTrace helps multi-site hospitality operators understand where and why losses occur. It connects POS data, inventory information, supplier delivery data and waste logs, then identifies causes such as spoilage, preparation waste, portion drift, supplier shortages and till variance.",
    features: [
      "Daily stock reconciliation",
      "Shrinkage cause classification",
      "Root-cause attribution",
      "Cost-ranked variance alerts",
      "Waste capture",
      "Multi-site benchmarking",
      "Supplier shortfall detection",
      "Portion control analysis",
      "Till variance monitoring",
      "Corrective action tracking",
      "Manager dashboard",
      "Board reporting",
    ],
    customers: ["Café groups", "QSR operators", "Hospitality chains", "Franchise businesses"],
  },
  {
    name: "VendorScore",
    subtitle: "Supplier reliability intelligence for SME manufacturers and hospitality procurement.",
    description:
      "VendorScore transforms supplier performance data into measurable reliability scores, analysing delivery performance, quality performance, price variation and lead-time consistency.",
    features: [
      "Weighted Reliability Index",
      "Supplier benchmarking",
      "Single-source risk detection",
      "Supplier risk alerts",
      "ERP/SAP MM integration",
      "Delivery document scanning",
      "Alternative supplier recommendations",
      "Evidence packs",
      "Supplier portal",
      "Procurement dashboard",
      "Audit-ready records",
    ],
    customers: ["SME manufacturers", "Procurement teams", "Hospitality purchasing teams"],
  },
  {
    name: "TrainTrace",
    subtitle: "Compliance evidence management for multi-site operators.",
    description:
      "TrainTrace helps organisations maintain always-ready training and compliance records, managing staff training, certificates, expiry dates and compliance evidence.",
    features: [
      "Role-based training mapping",
      "Mobile sign-off capture",
      "Certificate storage",
      "Automated expiry tracking",
      "Evidence pack generation",
      "Auditor access portal",
      "Compliance heatmaps",
      "Refresher scheduling",
      "HR/rota integration",
      "Training gap analysis",
    ],
    customers: ["Hospitality operators", "Franchise businesses", "Regulated service organisations"],
  },
  {
    name: "ComplaintLens",
    subtitle: "Customer complaint root-cause analytics platform.",
    description:
      "ComplaintLens helps businesses understand not only what customers complain about, but why problems occur, analysing reviews, customer feedback, complaints and operational patterns.",
    features: [
      "Complaint categorisation",
      "Root-cause identification",
      "Sentiment analysis",
      "Site-level analysis",
      "Shift-level analysis",
      "Trend detection",
      "Corrective action tracking",
      "Performance reporting",
    ],
    customers: ["Retail brands", "Hospitality groups", "Multi-location businesses"],
  },
  {
    name: "TrendGuard",
    subtitle: "Predictive maintenance intelligence for SME manufacturers.",
    description:
      "TrendGuard helps manufacturers identify equipment problems before failures happen, analysing machine sensor data, SCADA information and equipment behaviour patterns.",
    features: [
      "Asset monitoring",
      "Condition tracking",
      "Predictive fault detection",
      "Maintenance alerts",
      "Failure pattern analysis",
      "Maintenance prioritisation",
      "Cost impact estimation",
      "Technician workflow support",
      "CMMS integration",
    ],
    customers: ["SME manufacturers", "Industrial operators", "Production facilities"],
  },
] as const;

export const WORKFLOW = [
  {
    step: "01",
    title: "Connect Existing Business Data",
    detail:
      "The platform connects with existing operational systems, reports, sensors or business records.",
  },
  {
    step: "02",
    title: "Analyse Operational Information",
    detail: "Data is processed to identify patterns, risks, inefficiencies and opportunities.",
  },
  {
    step: "03",
    title: "Generate Intelligent Insights",
    detail:
      "The system converts complex information into clear dashboards, alerts and recommendations.",
  },
  {
    step: "04",
    title: "Take Corrective Action",
    detail: "Managers use insights to reduce costs, improve compliance and optimise performance.",
  },
  {
    step: "05",
    title: "Monitor Continuous Improvement",
    detail: "Performance trends are tracked over time to create measurable improvement.",
  },
] as const;

export const PRICING = [
  {
    name: "ShrinkTrace",
    headline: "£149–£249",
    unit: "/site/month",
    lines: [
      ["Onboarding", "£500–£1,500 per estate"],
      ["Advisory", "Included above 15 sites"],
      ["Franchisor licence", "Custom annual licence"],
    ],
  },
  {
    name: "VendorScore",
    headline: "£199–£399",
    unit: "/category/month",
    lines: [
      ["Onboarding", "£750–£2,000"],
      ["Evidence pack", "£75 per pack"],
      ["Consulting partner licence", "Custom annual licence"],
    ],
  },
  {
    name: "TrainTrace",
    headline: "£89–£149",
    unit: "/site/month",
    lines: [
      ["Onboarding", "£400–£1,200 per estate"],
      ["Toolbox-talk content pack", "£25/site/month add-on"],
      ["Franchisor template licence", "Custom annual licence"],
    ],
  },
  {
    name: "ComplaintLens",
    headline: "£69–£129",
    unit: "/site/month",
    lines: [
      ["Onboarding", "£500–£1,500 per estate"],
      ["Brand analytics add-on", "£300–£800/month"],
      ["Brand licence", "Custom annual licence"],
    ],
  },
  {
    name: "TrendGuard",
    headline: "£45–£85",
    unit: "/asset/month",
    lines: [
      ["Installation and baseline setup", "£1,500–£4,500 per production line"],
      ["Managed service", "Included above 30 assets"],
      ["Signature-library licence", "Custom annual licence"],
    ],
  },
] as const;

export const FAQS = [
  {
    q: "What industries do these platforms support?",
    a: "The solutions support hospitality, manufacturing, procurement, compliance and operational teams.",
  },
  {
    q: "Are these replacements for existing systems?",
    a: "No. They are designed to work alongside existing operational systems and convert existing data into actionable insights.",
  },
  {
    q: "Do all platforms use the same technology?",
    a: "Each platform is designed specifically for its industry problem, but all use data analytics, automation and intelligence-driven workflows.",
  },
  {
    q: "Can businesses start with one platform?",
    a: "Yes. Each solution operates independently based on the organisation's specific requirements.",
  },
  {
    q: "How does implementation work?",
    a: "Implementation begins by understanding existing systems, connecting relevant data sources and configuring the platform around operational requirements.",
  },
  {
    q: "Is there a pilot option?",
    a: "Yes. Businesses can request a pilot to evaluate the platform before wider adoption.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#platform" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;
