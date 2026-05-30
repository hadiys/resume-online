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
  };
  skills: {
    category: string;
    items: { name: string; icon?: string }[];
  }[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Hadi Yaser",
    title: "Risk & Integrity Analyst",
    photoUrl: "/images/profile_photo.jpeg",
    bgUrl: "/images/dubai.webp",
    email: "saleh.hadiyasser@hotmail.com",
    phone: "+353 879 565 424",
    location: "Dublin, IE (Currently searching for UAE-based roles)",
    linkedin: "https://linkedin.com",
    profileSummary: "Results-driven Risk & Integrity Analyst with 5 years' experience in Platform Safety & Integrity Operations at Meta and TikTok. Proven track record in designing AI-powered automation pipelines that reduce manual effort by up to 85%, leading cross-regional fraud investigations uncovering systemic enforcement gaps, and delivering data-driven solutions at scale. Combines postgraduate computing education with IBM-certified data engineering expertise to translate complex integrity challenges into automated, scalable enforcement systems. Strong command of Python, SQL, and agentic AI workflows.",
    punchyOneLiner: "Translating complex integrity challenges into automated, scalable enforcement systems."
  },
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python", icon: "/images/python.png" },
        { name: "SQL", icon: "/images/sql.png" }
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Snowflake", icon: "/images/snowflake.png" },
        { name: "dbt", icon: "/images/dbt.webp" },
        { name: "Apache Airflow", icon: "/images/airflow.png" }
      ]
    }
  ],
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
  projects: [
    {
      id: "proj-1",
      title: "Retail Analytics Data Warehouse",
      subtitle: "Snowflake, dbt, Python & SQL Data Warehouse",
      period: "Oct 2024",
      githubUrl: "https://github.com",
      demoUrl: "https://towardsdev.com",
      tags: ["Snowflake", "dbt", "Python", "SQL", "Data Modeling"],
      summary: "Designed and built a data warehouse in Snowflake to transform complex time-series, geographic, and demographic data into high-performance analytical datasets, using advanced data modelling and ETL with Python, dbt, and SQL queries.",
      bullets: [
        "Constructed optimized star-schema dimensional data models in Snowflake for high-frequency retail transactions.",
        "Implemented dbt transformation models with built-in schema testing and complete data lineage.",
        "Wrote Python and SQL ETL pipelines to automate data extraction, cleaning, and ingestion processes."
      ]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Data Engineer Professional Certificate",
      issuer: "IBM",
      date: "May – Oct 2025",
      url: "https://coursera.org/share/21d4a4064a74120e9282a7ece3b42a"
    }
  ]
};
