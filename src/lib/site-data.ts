export const COMPANY = "PredictivIQ LTD";
export const PRODUCT_NAME = "PredictivIQ";
export const TAGLINE = "See More. Lose Less.";
export const SECONDARY_TAGLINE =
  "AI-Powered Operational Intelligence for a More Profitable Food Future";
export const CONTACT_EMAIL = "info@predictiviq.co.uk";
export const WEBSITE_URL = "www.predictiviq.co.uk";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Platform", href: "/platform" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
] as const;

export const FOUNDERS = [
  {
    name: "Upendra Dariveri",
    role: "Director, PredictivIQ",
    phone: "+44 7301 504241",
    email: "info@predictiviq.co.uk",
    summary:
      "Hospitality operations and data science background combining hands-on venue leadership with analytics.",
    skills: [
      "Café operations",
      "Restaurant operations",
      "Team leadership",
      "POS systems",
      "Inventory management",
      "Waste control",
      "Scheduling",
      "Health & safety",
      "Reporting & analytics",
    ],
  },
  {
    name: "Sai Tharun Rallabandi",
    role: "Director, PredictivIQ",
    phone: "+44 7586 410877",
    email: "info@predictiviq.co.uk",
    summary:
      "Data science and technical operations background with expertise in process analytics and root-cause modelling.",
    skills: [
      "Data science",
      "Python & SQL",
      "SAP MM",
      "SCADA analytics",
      "Process analytics",
      "Data analysis",
      "Root-cause identification",
      "Operational improvement",
    ],
  },
] as const;

export const PROBLEM_COMPARISON = {
  traditional: [
    {
      label: "Disconnected Reports",
      desc: "POS, inventory, waste logs, and supplier delivery dockets sit in separate silos.",
    },
    {
      label: "Unexplained Variance",
      desc: "Managers see a stock shortfall but cannot tell if it was theft, over-portioning, or waste.",
    },
    {
      label: "Delayed Investigations",
      desc: "Weeks of manual spreadsheet reconciliation mean problems repeat before they are caught.",
    },
    {
      label: "Blind Spots Across Sites",
      desc: "Inconsistent logging across locations makes multi-site benchmarking impossible.",
    },
  ],
  predictiviq: [
    {
      label: "Connected Intelligence",
      desc: "Automated daily reconciliation across POS, inventory, suppliers, and kitchen waste logs.",
    },
    {
      label: "Attributed Root Causes",
      desc: "Discrepancies classified into likely causes with transparent confidence scores.",
    },
    {
      label: "Cost-Ranked Action",
      desc: "Managers receive prioritized daily alerts ranked by immediate financial impact.",
    },
    {
      label: "Multi-Site Governance",
      desc: "Standardized performance league tables, automated trend tracking, and audit-ready records.",
    },
  ],
};

export const CORE_FEATURES = [
  {
    step: "01",
    title: "Daily Automated Stock Reconciliation",
    summary:
      "Automatically matches theoretical stock consumption from POS recipe specs against actual physical counts by SKU and site.",
    badge: "Automated Daily",
  },
  {
    step: "02",
    title: "Shrinkage Cause Classification",
    summary:
      "Intelligently classifies material discrepancies into actionable categories: spoilage, preparation waste, portioning drift, till variance, supplier shortfall, or theft risk.",
    badge: "Root-Cause AI",
  },
  {
    step: "03",
    title: "Confidence-Scored Root Cause",
    summary:
      "Assigns a statistical confidence percentage to every identified variance so managers know exactly where the evidence points before investigating.",
    badge: "Scored Evidence",
  },
  {
    step: "04",
    title: "Cost-Ranked Variance Alerts",
    summary:
      "Presents the highest financial impact issues first, ensuring managers spend time on high-value operational losses rather than trivial variances.",
    badge: "Financial Impact",
  },
  {
    step: "05",
    title: "Multi-Site Benchmarking",
    summary:
      "Compares shrinkage performance, waste metrics, and variance trends across locations, operational regions, and trading dayparts.",
    badge: "Portfolio View",
  },
  {
    step: "06",
    title: "Supplier Shortfall Detection",
    summary:
      "Cross-references supplier delivery notes and invoices against purchase orders and received counts to catch short deliveries before invoices are paid.",
    badge: "Procurement Guard",
  },
  {
    step: "07",
    title: "Portion Drift & Till Variance",
    summary:
      "Compares ingredient depletion rates against recipe yields while scanning POS activity for suspicious patterns in voids, comps, refunds, and discounts.",
    badge: "POS & Yield",
  },
  {
    step: "08",
    title: "Corrective Action Tracking",
    summary:
      "Logs manager interventions (retraining, supplier query, till audit) and measures the resulting financial and yield improvement over subsequent cycles.",
    badge: "Closed-Loop ROI",
  },
] as const;

export const ADDITIONAL_CAPABILITIES = [
  "Photo-based waste capture",
  "Mobile manager alerts",
  "Weekly advisory call",
  "Board-ready monthly reporting",
  "Seasonal adjustment",
  "Waste-to-landfill diversion tracking",
  "Finance/franchise API export",
  "Configurable materiality thresholds",
  "EPOS and inventory connectors",
] as const;

export const WORKFLOW_STEPS = [
  {
    step: "01",
    phase: "Connect",
    title: "Connect Operational Data",
    description:
      "Securely slots into your existing EPOS, inventory databases, supplier delivery files, and kitchen waste logs with zero disruption to trading.",
    accent: "POS + Stock + Invoices + Waste",
  },
  {
    step: "02",
    phase: "Reconcile",
    title: "Daily Automated Reconciliation",
    description:
      "PredictivIQ calculates expected ingredient usage from menu sales and cross-references actual inventory balances across all sites.",
    accent: "Theoretical vs Actual by SKU",
  },
  {
    step: "03",
    phase: "Diagnose",
    title: "Diagnose Root Causes",
    description:
      "The diagnostic engine categorises anomalies into spoilage, prep waste, portion drift, supplier shortfall, till error, or theft risk with confidence scores.",
    accent: "Attribution & Confidence Score",
  },
  {
    step: "04",
    phase: "Prioritise",
    title: "Rank by Financial Impact",
    description:
      "Managers bypass noisy spreadsheets and see only the highest-value, actionable discrepancies ranked in pounds (£).",
    accent: "Cost-Ranked Priority Feed",
  },
  {
    step: "05",
    phase: "Act & Improve",
    title: "Take Targeted Action",
    description:
      "Site teams log corrective actions directly. Track the measurable recovery in margins and waste reduction across trading periods.",
    accent: "Continuous Measurable ROI",
  },
] as const;

export const DAILY_WORKFLOW = [
  {
    time: "Morning",
    actor: "Site Manager",
    headline: "Overnight Variance Alert Review",
    points: [
      "Review high-priority overnight alerts flagged above materiality thresholds",
      "See financial (£) impact, likely cause category, and confidence score at a glance",
      "Clear, actionable guidance ready before the morning shift briefing",
    ],
  },
  {
    time: "Midday Review",
    actor: "Manager Verification",
    headline: "Validate or Adjust Root Cause",
    points: [
      "Confirm suggested cause or record operational context with a single tap",
      "Upload photo evidence if kitchen spoilage or delivery discrepancy occurred",
      "Algorithm learns site-specific nuances and improves attribution accuracy",
    ],
  },
  {
    time: "Action Taken",
    actor: "Operations Team",
    headline: "Execute & Record Corrective Action",
    points: [
      "Issue instant credit query to supplier for short-delivered produce",
      "Schedule targeted portion-control retraining for specific kitchen station",
      "Initiate till audit where abnormal void or refund patterns were identified",
    ],
  },
  {
    time: "Weekly Cadence",
    actor: "Area Manager",
    headline: "Multi-Site League Table & Trends",
    points: [
      "Review estate-wide shrinkage league table across stores and regions",
      "Identify systemic supplier shortfalls and recurring recipe yield drift",
      "Prep for the weekly PredictivIQ advisory analyst call",
    ],
  },
  {
    time: "Monthly Cadence",
    actor: "Head Office & Board",
    headline: "Consolidated Executive Reporting",
    points: [
      "CFO and leadership receive board-ready summaries of saved margins",
      "Quantify waste diversion, gross margin gain, and corrective action closure rates",
      "Set quarterly operational shrinkage benchmarks across the estate",
    ],
  },
] as const;

export const COMPETITIVE_DIFFERENTIATION = [
  {
    solution: "Traditional EPOS",
    focus: "Sales & basic stock reporting",
    limitation:
      "Shows what was rung up, but blind to why physical stock diverges or where waste occurred.",
    predictiviqEdge: "Connects sales to supplier deliveries, recipes, and daily waste logs.",
  },
  {
    solution: "Food Waste Logging Tools",
    focus: "Kitchen bin waste monitoring",
    limitation:
      "Tracks what is thrown away at the bin, but misses supplier shortages, portion drift, and till shrink.",
    predictiviqEdge:
      "Comprehensive 360° shrinkage diagnosis across the entire stock-to-sale chain.",
  },
  {
    solution: "Manual Spreadsheets",
    focus: "End-of-month stocktakes",
    limitation:
      "Lagging, labour-intensive, error-prone, and delivered weeks after losses have compounded.",
    predictiviqEdge: "Automated daily reconciliation with instant cost-ranked alerts.",
  },
  {
    solution: "PredictivIQ",
    focus: "Operational intelligence & root-cause diagnosis",
    limitation:
      "Dedicated intelligence layer designed specifically for multi-site hospitality operators.",
    predictiviqEdge: "Daily reconciliation + AI cause attribution + cost-ranked action.",
    highlight: true,
  },
] as const;

export const MARKET_DATA = {
  totalBusinesses: "176,685",
  totalLabel: "Hospitality businesses in the United Kingdom",
  smePercentage: "99.6%",
  smeLabel: "Are SMEs seeking accessible, high-ROI operational intelligence",
  annualFoodWasteCost: "£3 Billion+",
  costLabel: "Lost annually across the UK food-service and hospitality sector",
  targetProfile: "Independent café and QSR groups operating 4–20 trading sites",
};

export const PRICING_PLANS = [
  {
    name: "Core Site Subscription",
    price: "£149–£249",
    cadence: "per site / month",
    description: "Monthly fee per trading site, tiered by total estate site count.",
    highlights: [
      "Daily automated stock reconciliation",
      "Shrinkage cause classification & confidence scoring",
      "Cost-ranked daily variance alerts (£)",
      "Multi-site benchmarking & league tables",
      "Portion drift & till pattern monitoring",
      "Supplier shortfall & credit-request tracking",
      "Mobile manager review workflow",
    ],
    cta: "Request a Pilot",
    featured: true,
  },
  {
    name: "Onboarding & Calibration",
    price: "£500–£1,500",
    cadence: "per estate (one-off)",
    description: "Data connection audit, system mapping, and taxonomy calibration.",
    highlights: [
      "EPOS & inventory data connector audit",
      "Recipe & SKU yield taxonomy calibration",
      "Two-week shadow period verification",
      "Site manager & area manager onboarding",
      "Configurable materiality threshold setup",
    ],
    cta: "Request a Pilot",
    featured: false,
  },
  {
    name: "Operational Advisory",
    price: "Included",
    cadence: "above 15 trading sites",
    description: "Dedicated operational analyst support to maximize yield recovery.",
    highlights: [
      "Weekly analyst review call",
      "Quarterly business review (QBR)",
      "Custom cross-site shrinkage diagnostic audits",
      "Executive board-pack preparation",
    ],
    cta: "Request a Pilot",
    featured: false,
  },
  {
    name: "Franchisor Licence",
    price: "Custom",
    cadence: "annual licence",
    description: "Enterprise head-office oversight across franchisee networks.",
    highlights: [
      "Multi-franchisee consolidated reporting",
      "Brand compliance & recipe yield monitoring",
      "Franchise benchmark league tables",
      "Dedicated account management & API access",
    ],
    cta: "Request a Pilot",
    featured: false,
  },
] as const;

export const ARCHITECTURE_LAYERS = [
  {
    layer: "01",
    name: "Data Ingestion",
    description:
      "Secure, automated ingestion from EPOS, inventory, supplier delivery notes, and waste logs via API/CSV.",
    components: [
      "EPOS Connectors",
      "Inventory Feeds",
      "Supplier Delivery Notes",
      "Kitchen Waste Logs",
    ],
  },
  {
    layer: "02",
    name: "Processing & Analytics",
    description:
      "Theoretical consumption calculations, variance isolation, and machine-learning cause attribution.",
    components: [
      "Daily Reconciliation Engine",
      "Confidence-Scored Attribution",
      "Yield & Portion Drift Models",
    ],
  },
  {
    layer: "03",
    name: "Application & Workflows",
    description:
      "Intuitive interfaces for store managers, area supervisors, and executive decision-makers.",
    components: [
      "Manager Daily Workbench",
      "Cost-Ranked Priority Feed",
      "Corrective Action Tracker",
    ],
  },
  {
    layer: "04",
    name: "Reporting & Governance",
    description:
      "Audit-ready records, multi-site league tables, and board-ready financial intelligence.",
    components: ["Board-Ready PDF Packs", "Multi-Site League Tables", "Audit-Ready Historical Log"],
  },
] as const;

export const TRUST_SECURITY = [
  {
    title: "UK-Region Hosting",
    desc: "All application infrastructure and customer data resides securely within certified UK data centres.",
  },
  {
    title: "Role-Based Access Control",
    desc: "Granular permissions ensure store staff, area managers, and executives only see relevant data.",
  },
  {
    title: "Encrypted In Transit & At Rest",
    desc: "Industry-standard TLS 1.3 encryption in transit and AES-256 encryption at rest.",
  },
  {
    title: "Zero Payment-Card Data",
    desc: "No customer credit card or PCI-DSS sensitive transaction data is ever ingested or stored.",
  },
  {
    title: "Full Audit Logging & Daily Backups",
    desc: "Immutable change logs for every user action, paired with automated geo-replicated daily backups.",
  },
  {
    title: "GDPR Compliant DPA",
    desc: "Fully compliant with UK GDPR regulations, backed by transparent Data Processing Agreements.",
  },
] as const;

export const FAQS = [
  {
    q: "What is PredictivIQ?",
    a: "PredictivIQ is an operational intelligence platform that helps multi-site hospitality operators identify and understand the causes behind stock loss, waste and operational variance.",
  },
  {
    q: "Who is PredictivIQ designed for?",
    a: "It is primarily designed for multi-site café, QSR, and hospitality operators, franchise networks, and hospitality groups running multiple trading sites.",
  },
  {
    q: "Does PredictivIQ replace our existing EPOS or inventory system?",
    a: "No. PredictivIQ is designed to sit above existing operational systems with zero hardware or contract disruption, using their sales and inventory feeds as inputs.",
  },
  {
    q: "What data does PredictivIQ use?",
    a: "The platform connects and reconciles EPOS transaction sales, inventory counts, supplier delivery notes and invoices, and kitchen waste logs.",
  },
  {
    q: "What types of shrinkage can PredictivIQ identify?",
    a: "The platform can identify likely causes such as kitchen spoilage, prep discard, portion drift, supplier short-deliveries, till variance, and theft risk.",
  },
  {
    q: "How does PredictivIQ identify likely causes?",
    a: "PredictivIQ cross-references theoretical ingredient depletion against physical stock counts, delivery receipts, and waste logs, assigning transparent statistical confidence scores to attributed causes.",
  },
  {
    q: "How does the pilot work?",
    a: "Businesses begin with a scoped, non-intrusive two-week assessment on their operational data to evaluate reconciliation matches and quantify identified margin recovery.",
  },
  {
    q: "How is PredictivIQ priced?",
    a: "Pricing is transparent and scales with estate size: £149–£249/site/month subscription, £500–£1,500 estate onboarding, advisory included above 15 sites, and custom franchisor options.",
  },
  {
    q: "How quickly can implementation take place?",
    a: "Deployment follows a structured rollout of approximately two to four weeks per estate, beginning with a data-connection audit and shadow verification period.",
  },
  {
    q: "Is PredictivIQ suitable for multi-site operators?",
    a: "Yes. PredictivIQ was purpose-built for multi-site operators, offering consolidated estate oversight, regional benchmarking league tables, and executive board reporting.",
  },
] as const;
