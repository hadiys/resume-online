import { URLSearchParams } from "url";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  githubUrl?: string;
  demoUrl?: string;
  tags: string[];
  summary: string;
  bullets: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Education {
  id: string;
  title: string;
  institution: string;
  date: string;
  description: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    photoUrl: string;
    bgUrl: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    profileSummary: string;
    punchyOneLiner: string;
    contactPrompt: string;
  };
  skills: {
    category: string;
    items: { name: string; icon?: string }[];
  }[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
}

const certifications = [
    {
        id: "cert-1",
        name: "✅ Data Engineer Professional Certificate",
        issuer: "IBM",
        date: "Oct 2025",
        url: "https://coursera.org/share/21d4a4064a74120e9282a7ece3b42a"
    }
]

const education = [
    {
      id: "edu-1",
      title: "Postgraduate Diploma in Computing",
      institution: "Griffith College Dublin",
      date: "2019 – 2020",
      description: "🏆 First Class Honours"
    },
    {
      id: "edu-2",
      title: "BSc Hons. in Computer Science",
      institution: "Griffith College Dublin",
      date: "2014 – 2017",
      description: "🎓 Second Class Honours"
    }
]

const projects = [
    {
      id: "proj-1",
      title: "Retail Analytics Data Warehouse",
      subtitle: "Snowflake, dbt, Python & SQL Data Warehouse",
      period: "Dec 2024",
      githubUrl: "https://github.com/hadiys/DataWarehouse-RetailMall",
      demoUrl: "https://towardsdev.comhttps://medium.com/@saleh.hadiyasser/building-a-scalable-mall-analytics-data-mart-a-data-engineering-journey-07ef3a0ed149",
      tags: ["Snowflake", "dbt", "Python", "SQL", "Data Modeling"],
      summary: "Designed and built a data warehouse in Snowflake to transform complex time-series, geographic, and demographic data into high-performance analytical datasets, using advanced data modelling and ETL with Python, dbt, and SQL queries.",
      bullets: [
        "Constructed optimized star-schema dimensional data models in Snowflake for high-frequency retail transactions.",
        "Implemented dbt transformation models with built-in schema testing and complete data lineage.",
        "Wrote Python and SQL ETL pipelines to automate data extraction, cleaning, and ingestion processes."
      ]
    }
]

const skills = [
    {
      category: "Languages",
      items: [
        { name: "Python", icon: "images/python.png" },
        { name: "SQL", icon: "images/sql.png" }
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
          { name: "n8n", icon: "images/n8n.png" },
        { name: "Snowflake", icon: "images/snowflake.png" },
        { name: "dbt", icon: "images/dbt.webp" },
        { name: "Apache Airflow", icon: "images/airflow.png" }
      ]
    }
]


export const riskAnalystData: PortfolioData = {
  personal: {
    name: "Hadi Yaser",
    title: "Risk & Integrity Analyst",
    photoUrl: "images/hadi_profile.jpeg",
    bgUrl: "images/dubai.webp",
    email: "saleh.hadiyasser@hotmail.com",
    phone: "+353 879 565 424",
    location: "Dublin, IE (Currently searching for UAE-based roles)",
    linkedin: "https://linkedin.com/in/hadiys",
    profileSummary: "Results-driven Risk & Integrity Analyst with 5 years' experience in Platform Safety & Integrity Operations at Meta and TikTok. Proven track record in designing AI-powered automation pipelines that reduce manual effort by up to 85%, leading cross-regional fraud investigations uncovering systemic enforcement gaps, and delivering data-driven solutions at scale. Combines postgraduate computing education with IBM-certified data engineering expertise to translate complex integrity challenges into automated, scalable enforcement systems. Strong command of Python, SQL, and agentic AI workflows.",
    punchyOneLiner: "Translating complex integrity challenges into automated, scalable enforcement systems.",
    contactPrompt: "Have a role to discuss, a technical project collaboration in mind, or just want to chat about automated risk operations? Drop a message below."
  },
  experiences: [
      {
          id: "exp-1",
      role: "Risk & Integrity Analyst (Gulf Market)",
      company: "Meta",
      location: "Dublin, IE",
      period: "Nov 2025 – Present",
      description: [
        "Architected an end-to-end AI automation pipeline using Meta's Agentic Workflow Builder (AWB) to resolve UAE Telecom Regulatory Authority reports of prostitution and sexual solicitation accounts, resulting in 70–80% reduction in human-in-the-loop review and annualized savings of 650–1,820 specialist hours (~$52K–$146K/year) and reducing manual case resolution time by 85% per batch.",
        "Deployed three automated enforcement pipelines during a major geopolitical crisis (Iran Regional Conflict 2026) covering violence-inciting and hateful speech targeting Shiaa communities in Bahrain and Kuwait, achieving 93–98% enforcement accuracy while processing hundreds of daily violating comments.",
        "Encapsulated domain expertise in 3 AI analytics agents that collectively automated regulatory escalations monitoring and alerting across MENAT, highlighting recurring issues, opportunities for automation and saving 4hrs per week in manual reporting.",
        "Owned the end-to-end creation and delivery of business performance across MENAT markets, independently tracking, analyzing and presenting 8+ KPIs to senior leadership in preparation for org-level presentations."
      ],
      skills: ["Agentic AI", "Python", "SQL", "Regulatory Escalations", "Risk Automation"]
    },
    {
      id: "exp-2",
      role: "Labelling Project Manager",
      company: "TikTok",
      location: "Dublin, IE",
      period: "Jun 2024 – May 2025",
      description: [
        "Managed and launched labelling workflows for advertising integrity and GenAI content classifiers, delivering 5 short-cycle labelling projects per quarter with 95% median quality, directly feeding automated detection systems.",
        "Conducted weekly alignment sessions and ad-hoc calibrations with internal and external reviewers to maintain enforcement standards.",
        "Iteratively developed and improved annotation guidelines in coordination with policy stakeholders, ensuring labelling instructions left 'no room for ambiguity'.",
        "Analyzed labelling production quality and reviewer knowledge-assessment scores to identify precision/recall impacts, driving corrective actions."
      ],
      skills: ["Project Management", "GenAI Classifiers", "Data Labelling", "Policy Alignment"]
    },
    {
      id: "exp-3",
      role: "Senior QA Specialist",
      company: "TikTok",
      location: "Dublin, IE",
      period: "Dec 2023 – Jun 2024",
      description: [
        "Performed quality audits on annotated/reviewed content across brand safety (content integrity) and e-commerce (regulated goods) policy areas — maintaining enforcement precision.",
        "Collaborated with QA analysts and vendor review partners to identify and resolve policy misapplication and market-specific enforcement gaps.",
        "Surfaced data-driven insights to run weekly enforcement quality improvement initiatives, recovering 1–2% precision improvement per week towards 95% quality target.",
        "Designed standardized reporting repositories, saving 12% productivity time from manual reporting and streamlining operational visibility."
      ],
      skills: ["Quality Assurance", "Brand Safety", "E-commerce Policy", "RCA Analysis"]
    },
    {
      id: "exp-4",
      role: "QA Specialist",
      company: "TikTok",
      location: "Dublin, IE",
      period: "May 2021 – Dec 2023",
      description: [
        "Performed precision/recall quality sampling for Arabic-language content enforcement covering Gulf dialects (KSA, Kuwait, Oman, UAE) and Egypt.",
        "Led Arabic QA team's data reporting, producing weekly metric health reports covering quality KPIs and surfacing enforcement anomalies to leadership.",
        "Maintained alignment between evolving policy guidelines and vendor review execution through regular calibration and communication."
      ],
      skills: ["Quality Sampling", "Arabic Content Enforcement", "Metric Reporting", "Trend Analysis"]
    }
  ],
  skills,
  projects,
  certifications,
  education
};

export const dataAnalystData: PortfolioData = {
  personal: {
    name: "Hadi Yaser",
    title: "Risk & Integrity Analyst",
    photoUrl: "images/hadi_profile.jpeg",
    // photoUrl: "images/profile_photo.jpeg",
    bgUrl: "images/dubai.webp",
    email: "saleh.hadiyasser@hotmail.com",
    phone: "+353 879 565 424",
    location: "Dublin, IE (Currently searching for UAE-based roles)",
    linkedin: "https://linkedin.com/in/hadiys",
    profileSummary: "Data-driven Analyst with 5 years' experience delivering BI dashboards, operational reporting, and analytics solutions across large-scale business environments. Proven ability to rapidly develop domain expertise, integrate complex data from multiple sources, and deliver reliable reporting aligned with strategic objectives. Skilled in end-to-end data pipelines (Python, SQL), cloud data warehousing (Snowflake), and interactive dashboard development (Tableau), with IBM Data Engineering Certification. Experienced in cross-functional requirements gathering, project planning, and presenting actionable insights to senior stakeholders",
    punchyOneLiner: "Translating operational challenges into data-driven solutions.",
    contactPrompt: "Have a role to discuss, a technical project collaboration in mind, or just want to chat about automated risk operations? Drop a message below."
  },
  experiences: [
    {
      id: "exp-1",
      role: "Risk & Integrity Analyst (Gulf Market)",
      company: "Meta",
      location: "Dublin, IE",
      period: "Nov 2025 – Present",
      description: [
        "Collaborated as part of a technical analytics team to validate data accuracy and develop a unified BI Dashboard that automatically generates coherent performance narratives around service delivery metrics for the AMET (Africa, Middle East, Turkey) region in liaison with operations leadership.",
        "Designed and deployed 3 automated analytics solutions for business-critical use-cases (regional conflict monitoring, team demand & SLA tracking, regulatory escalation trend analysis), enabling self-serve insight generation and saving 2-4 manual hours per week.",
        "Owned the end-to-end creation and delivery of business performance reporting across MENAT markets  (Middle East, North Africa, Turkey), tracking, analysing and presenting 8+ KPIs to senior leadership in preparation for org-level presentations.",
        "Responded to ad-hoc reporting requirements from the MENAT operations team to perform deep-dive investigations on organic and paid content across Facebook & Instagram, responding to risk-based demand with tailored data and insights."
      ],
      skills: ["Python", "SQL", "Data Warehouses", "Automation", "BI Dashboards", "Project Management"]
    },
    {
      id: "exp-2",
      role: "Project Manager & Senior QA Analyst",
      company: "TikTok",
      location: "Dublin, IE",
      period: "May 2021 – May 2025",
      description: [
        "Developed interactive BI dashboards using internal BI tools, empowering stakeholders with real-time insights on operational KPIs to inform improvement initiatives.",
        "Designed and implemented standardised reporting repositories to power BI dashboards, eliminating manual data extraction and integration and reducing reporting preparation by 12%, enabling faster access to business insights.",
        "Developed automated data fetch calls in Python and pandas to extract data from target platforms via REST APIs, streamlining data retrieval and ensuring availability'.",
        "Managed and delivered 5 projects per quarter, developing project plans, tracking progress, and maintaining median quality scores of 95% with ±5% standard deviation.",
        "Gathered and documented project requirements from cross-functional stakeholders, iteratively refining deliverables based on quality assurance data and feedback.",
        "Collaborated with internal and external teams to align on delivery standards, running weekly calibration sessions and presenting performance data."
      ],
      skills: ["REST APIs", "Python", "BI Dashboards", "Project Management", "Data Labelling", "Policy Alignment"]
    }
  ],
  skills,
  projects,
  certifications,
  education
};

export function getPortfolioData(): PortfolioData | null {
    if (typeof window !== "undefined") {
        const params = new window.URLSearchParams(window.location.search);
        const role = params.get("role");
        if (role === "14165") {
            return dataAnalystData
        }
        else if (role === "13205") {
            return riskAnalystData
        }
    }
    return null;
}