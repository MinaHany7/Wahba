/* ==========================================================================
   SKILLS DATA
   No fake proficiency percentages — level is one of:
   "Hands-on Experience" | "Applied in Projects" | "Working Knowledge"
   ========================================================================== */

const SKILL_GROUPS = [
  {
    group: "Data Analysis",
    items: [
      { name: "Microsoft Excel", level: "Hands-on Experience" },
      { name: "Pivot Tables", level: "Hands-on Experience" },
      { name: "Pivot Charts", level: "Hands-on Experience" },
      { name: "Power Query", level: "Hands-on Experience" },
      { name: "Advanced Formulas", level: "Hands-on Experience" },
      { name: "Data Cleaning", level: "Hands-on Experience" },
      { name: "Data Modeling", level: "Hands-on Experience" },
      { name: "Conditional Formatting", level: "Applied in Projects" },
      { name: "Slicers & Timelines", level: "Applied in Projects" },
      { name: "Dynamic Dashboards", level: "Applied in Projects" },
      { name: "Statistical Analysis", level: "Working Knowledge" },
      { name: "Report Automation", level: "Working Knowledge" }
    ]
  },
  {
    group: "Business Intelligence",
    items: [
      { name: "Power BI", level: "Hands-on Experience" },
      { name: "DAX", level: "Hands-on Experience" },
      { name: "Interactive Report Design", level: "Applied in Projects" },
      { name: "Data Visualization", level: "Applied in Projects" },
      { name: "Dashboard Development", level: "Applied in Projects" }
    ]
  },
  {
    group: "Databases",
    items: [
      { name: "SQL", level: "Applied in Projects" },
      { name: "ERD", level: "Applied in Projects" },
      { name: "Database Normalization", level: "Applied in Projects" },
      { name: "Relational Database Modeling", level: "Applied in Projects" }
    ]
  },
  {
    group: "Programming & Web",
    items: [
      { name: "Python", level: "Working Knowledge" },
      { name: "HTML", level: "Applied in Projects" },
      { name: "CSS", level: "Applied in Projects" }
    ]
  },
  {
    group: "Soft Skills",
    items: [
      { name: "Analytical Thinking", level: "Hands-on Experience" },
      { name: "Problem Solving", level: "Hands-on Experience" },
      { name: "Attention to Detail", level: "Hands-on Experience" },
      { name: "Business Communication", level: "Applied in Projects" },
      { name: "Time Management", level: "Applied in Projects" }
    ]
  }
];

const CERTIFICATIONS = [
  { title: "Data Analysis Diploma", org: "Route", meta: "140 hours" },
  { title: "Data Analytics & BI (Power BI & Tableau)", org: "ITI Summer Code Camp 2026", meta: "144 hours" },
  { title: "Data Analysis Course", org: "Creativa (ITIDA)", meta: "120 hours" },
  { title: "Generative AI — Summer Internship", org: "CIB", meta: "2026" },
  { title: "\u201cThe Green Leap\u201d — Summer Program", org: "CIB", meta: "2025" },
  { title: "Learning Data Analytics: Foundations", org: "LinkedIn Learning", meta: "2024" },
  { title: "Business Analytics: Marketing Data", org: "LinkedIn Learning (IIBA)", meta: "2024" },
  { title: "Entrepreneurship Foundations", org: "LinkedIn Learning", meta: "2024" },
  { title: "Sustainability Foundations: Core Concepts", org: "LinkedIn Learning", meta: "2025" },
  { title: "Fundamentals of Digital Marketing", org: "Maharat min Google", meta: "2024" },
  { title: "Freelancing Basics", org: "Mahara-Tech (ITI)", meta: "2026" }
];

const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Very Good" }
];
