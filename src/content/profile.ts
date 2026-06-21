export type ContactLink = {
  label: "Email" | "LinkedIn" | "GitHub";
  value: string;
  href: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  availability: string;
};

export type ImpactMetric = {
  label: string;
  value: string;
  context: string;
};

export type CapabilityGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type TechnologyGroup = {
  label: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  product?: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
};

export type CaseStudy = {
  title: string;
  format: string;
  theme: string;
  summary: string;
  image?: string;
  metrics: string[];
  outcomes: string[];
  links: Array<{
    label: string;
    href: string;
  }>;
};

export type ResumeVariant = {
  id: "data-full-stack" | "product-data-systems";
  fileName: string;
  headline: string;
  summary: string;
  focusAreas: string[];
  capabilityTitles: string[];
  experienceHighlights: string[];
  technologyLine: string;
};

export const profile: Profile = {
  name: "Ashutosh Patel",
  title: "Data Full Stack Ownership for Data Products",
  location: "Gurugram, India",
  email: "ashutosh.pateljiit@gmail.com",
  phone: "+91 98975 18909",
  linkedin: "linkedin.com/in/ashutosh-patel124579",
  github: "github.com/ashu1717",
  availability: "Data products, analytics engineering, and AI/ML/DS-enabled decision systems",
  summary:
    "Data full-stack professional owning the lifecycle from schema design and service workflows to feature systems, analytics, and deterministic AI/ML/DS enablement across credit risk, marketplace intelligence, wealth workflows, and product-led decision support."
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`
  },
  {
    label: "LinkedIn",
    value: profile.linkedin,
    href: `https://${profile.linkedin}`
  },
  {
    label: "GitHub",
    value: profile.github,
    href: `https://${profile.github}`
  }
];

export const impactMetrics: ImpactMetric[] = [
  {
    label: "Bank & NBFC clients enabled",
    value: "6",
    context: "Supported lender-facing features, analytics reviews, and production decision workflows."
  },
  {
    label: "Approval lift at flat default rate",
    value: "+15%",
    context: "Improved outcomes through governed features, risk evaluation, and stable metrics."
  },
  {
    label: "Signals evaluated into stable features",
    value: "5K -> 800",
    context: "Reduced noisy candidate signals into usable underwriting and monitoring indicators."
  },
  {
    label: "SMS processed daily",
    value: "10M+",
    context: "Supported device intelligence, service reliability, and real-time scoring workloads."
  }
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Data Lifecycle Ownership",
    summary:
      "Connects schemas, transformations, services, feature tables, validation, and analytics into one accountable delivery path.",
    items: ["schema design", "service workflows", "feature stores", "analytics handoff"]
  },
  {
    title: "Financial Intelligence",
    summary:
      "Maps risk, lending, wealth, and marketplace signals into explainable metrics for portfolio and product decisions.",
    items: ["30/60/90-DPD", "IV/WoE", "deciles", "FOIR", "PSI", "SHAP reason codes"]
  },
  {
    title: "AI/ML/DS Enablement",
    summary:
      "Builds deterministic model-adjacent workflows where features, reason codes, monitoring, and dashboards stay production-readable.",
    items: ["feature selection", "model monitoring", "reason codes", "drift review"]
  },
  {
    title: "Product Experience Curation",
    summary:
      "Frames data work as persona-led experiences across advisor, operator, and lender workflows.",
    items: ["B2B APIs", "marketplace crawlers", "Figma references", "client reviews"]
  }
];

export const technologyGroups: TechnologyGroup[] = [
  {
    label: "Schema & Services",
    items: ["PostgreSQL", "MySQL", "MongoDB interactions", "FastAPI", "ONNX"]
  },
  {
    label: "Features & ML",
    items: ["Python", "Pandas", "NumPy", "scikit-learn", "XGBoost", "SHAP"]
  },
  {
    label: "Analytics & BI",
    items: ["SQL", "Power BI", "Grafana", "IV/WoE", "decile analysis", "PSI"]
  },
  {
    label: "Product Systems",
    items: ["ETL workflows", "Scrapy", "Docker", "MLflow", "validation checks"]
  }
];

export const experience: ExperienceItem[] = [
  {
    company: "Credeau Solutions Pvt. Ltd.",
    product: "MobileForge - Device Intelligence API",
    role: "Data Scientist - Lending Analytics & Feature Platform",
    dates: "Apr 2025 - Present",
    location: "Noida, India",
    bullets: [
      "Own data product workflows for a B2B device-intelligence platform used by 6 banks and NBFCs; combine SQL, Python, and MongoDB interactions to move behavioral, transaction, and device data into underwriting features and portfolio signals.",
      "Evaluated 5,000+ candidate signals against 30/60/90-DPD outcomes and distilled about 800 stable indicators using IV/WoE, VIF, and decile analysis; contributed to a +15% approval-rate lift at a flat default rate.",
      "Built a 3-level transaction taxonomy spanning 12 categories, 48 subcategories, and 200+ labels at 94% accuracy, enabling income, EMI/FOIR, expense-to-income, and discretionary-spend analytics.",
      "Designed 5 Grafana dashboards and automated metric packs for decision throughput, approve/decline mix, API usage, extraction quality, model performance, and drift.",
      "Operationalized lender-specific feature selection, custom WoE binning, and SHAP reason codes with real-time scoring via FastAPI/ONNX processing 10M+ SMS/day at sub-200ms latency."
    ]
  },
  {
    company: "DealerSoftPro",
    role: "Associate Functional Consultant",
    dates: "Dec 2024 - Mar 2025",
    location: "Remote, India",
    bullets: [
      "Built automated ETL workflows and KPI dashboards across SAP modules, surfacing process bottlenecks and reducing operational delays 20% within the first 8 weeks."
    ]
  },
  {
    company: "GlobalLogic",
    product: "Client: Google",
    role: "Data Analyst",
    dates: "Jun 2021 - Apr 2022",
    location: "Gurugram, India",
    bullets: [
      "Analyzed 1M+ eCommerce records with SQL and Python and built Power BI dashboards that replaced 12 manual reports, saving 10+ hours weekly.",
      "Automated recurring reporting, cutting manual effort 30%, improving data accuracy, and training 2 analysts to independent delivery."
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    title: "MobileForge Lending Intelligence",
    format: "Built data product",
    theme: "Credit risk, governed features, scoring services, and lender-facing decision metrics",
    summary:
      "A B2B lending intelligence workflow that connects raw device, transaction, and behavioral signals to schema-backed features, real-time services, lender reviews, and monitored decision metrics.",
    metrics: ["6 lender clients", "5K -> 800 stable indicators", "+15% approval lift", "10M+ SMS/day"],
    outcomes: [
      "Converted noisy alternative-data signals into explainable underwriting and portfolio-monitoring views.",
      "Connected service reliability, risk analytics, deterministic model outputs, and stakeholder reporting into one product narrative."
    ],
    links: [
      {
        label: "Open evidence artifact",
        href: "/case-studies/b2b-marketplace-crawler-evidence.json"
      }
    ]
  },
  {
    title: "B2B Marketplace Crawler",
    format: "Data product workflow",
    theme: "Crawler design, product extraction, supplier intelligence, and EDA-ready datasets",
    summary:
      "A production-minded IndiaMART collection workflow that starts with source discovery, normalizes supplier and pricing fields, exports category-level datasets, and turns raw marketplace pages into product intelligence.",
    metrics: ["1,329 IndiaMART products", "821 suppliers", "120 cities", "4 marketplace categories"],
    outcomes: [
      "Established a category-driven spider with sub-category discovery, pagination, throttling, retries, and cached responses for controlled crawling.",
      "Designed cleaning and CSV pipelines for product name, supplier, location, price, MOQ, URL, timestamp, and category-level outputs.",
      "Converted marketplace collection into product-development insight across price transparency, supplier geography, and category coverage."
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ashu1717"
      }
    ]
  },
  {
    title: "Wealth Management Experience",
    format: "Curated product-design reference",
    theme: "Advisor workflows, financial intelligence, and client-ready decision support",
    summary:
      "Reference experience for premium financial-product storytelling: clean portfolio states, advisor command flows, grounded AI assistance, and confirmation-led review moments.",
    image: "/case-studies/wealth-management-experience.png",
    metrics: ["Advisor dashboard", "Portfolio drift", "Client-ready proposals", "Trust-first AI"],
    outcomes: [
      "Informs the portfolio's restrained financial palette, product hierarchy, and human-readable analytics copy.",
      "Curated as a design reference for persona-driven financial data products."
    ],
    links: [
      {
        label: "Open Figma site",
        href: "https://static-base-27037824.figma.site"
      }
    ]
  },
  {
    title: "Infrastructure Self Serve Experience",
    format: "Curated product-design reference",
    theme: "AI-native operations, workflow approvals, and infrastructure command centers",
    summary:
      "Reference experience for dense technical products: command input, operational metrics, approvals, audit logs, and deployment-state visibility.",
    image: "/case-studies/infrastructure-self-serve-experience.png",
    metrics: ["Command center", "Execution plans", "Approvals", "Auditability"],
    outcomes: [
      "Informs the portfolio's lifecycle language, metric density, and operational interaction model.",
      "Curated as a design reference for domain-agnostic product development."
    ],
    links: [
      {
        label: "Open Figma site",
        href: "https://drag-bats-99244166.figma.site"
      }
    ]
  }
];

export const resumeVariants: ResumeVariant[] = [
  {
    id: "data-full-stack",
    fileName: "ashutosh-patel-data-full-stack.pdf",
    headline: "Data Full Stack Ownership | Data Products | Analytics Engineering",
    summary:
      "Data full-stack professional building lending and marketplace data products that convert behavioral, transaction, product, and device signals into schemas, services, features, governed metrics, portfolio insights, and client-ready decision support. Supports 6 bank and NBFC clients, evaluates 5,000+ candidate signals, and operationalizes about 800 stable indicators across underwriting, monitoring, and product analytics.",
    focusAreas: [
      "Schema design, service workflows, feature systems, and analytics handoff",
      "Credit risk analytics across approval/default, 30/60/90-DPD, FOIR, IV/WoE, deciles, and PSI",
      "Business-enabled flows for lender reviews, anomaly diagnosis, and product adoption"
    ],
    capabilityTitles: ["Data Lifecycle Ownership", "Financial Intelligence", "AI/ML/DS Enablement", "Product Experience Curation"],
    experienceHighlights: [
      "Designed Grafana dashboards and metric packs for decision throughput, approve/decline mix, API usage, extraction quality, model performance, and drift.",
      "Ran feature evaluation across 5,000+ candidate signals and distilled about 800 stable indicators, contributing to a +15% approval-rate lift at a flat default rate.",
      "Delivered weekly internal and monthly client performance reviews, explaining approval-rate movement, data quality shifts, and portfolio trends.",
      "Built a B2B marketplace crawler workflow over 1,329 product records, 821 suppliers, and 120 cities to connect extraction quality, supplier coverage, and category-level EDA.",
      "Built taxonomy-led income, EMI/FOIR, expense-to-income, and discretionary-spend analytics at 94% transaction classification accuracy."
    ],
    technologyLine:
      "Python, SQL, Pandas, NumPy, Power BI, Grafana, PostgreSQL, MySQL, MongoDB interactions, FastAPI, Git"
  },
  {
    id: "product-data-systems",
    fileName: "ashutosh-patel-product-data-systems.pdf",
    headline: "Product Data Systems | Credit Risk Pipelines | AI/ML/DS Enablement",
    summary:
      "Product data systems professional building end-to-end credit risk pipelines, B2B marketplace crawler workflows, validation layers, feature workflows, and real-time scoring support for data products. Combines Python, SQL, Scrapy, MongoDB interactions, FastAPI, ONNX, dashboards, and monitoring to move raw streams into production-grade business outcomes.",
    focusAreas: [
      "Schema-backed ETL workflows, feature pipelines, and validation checks",
      "B2B marketplace crawler design across extraction, cleaning, CSV exports, and EDA readiness",
      "Production data services for underwriting, monitoring, and analytics consumers",
      "Model-adjacent data delivery across feature selection, reason codes, drift, and API reliability"
    ],
    capabilityTitles: ["Data Lifecycle Ownership", "Financial Intelligence", "AI/ML/DS Enablement", "Product Experience Curation"],
    experienceHighlights: [
      "Built and maintained transformation workflows for behavioral, transaction, and device data used in underwriting and portfolio monitoring.",
      "Built a B2B marketplace crawler workflow over 1,329 product records across Industrial Machinery, Raw Materials, Packaging, and Electrical Components.",
      "Operationalized lender-specific feature selection, custom WoE binning, SHAP reason codes, and feature documentation for repeatable rollout.",
      "Partnered with engineering on extraction-failure diagnosis, validation checks, monitored recovery, and reporting reliability.",
      "Supported real-time scoring via FastAPI/ONNX processing 10M+ SMS/day at sub-200ms latency."
    ],
    technologyLine:
      "Python, SQL, Scrapy, Pandas, scikit-learn, XGBoost, PostgreSQL, MySQL, MongoDB interactions, FastAPI, ONNX, Docker, MLflow, Git"
  }
];

export const education = {
  degree: "B.Tech, Electronics & Communication Engineering",
  institution: "JIIT, Noida",
  dates: "2016 - 2020"
};

export const certification = {
  name: "Data Science Certification",
  issuer: "Internshala Trainings",
  focus: "Python, Statistics, Machine Learning, SQL"
};
