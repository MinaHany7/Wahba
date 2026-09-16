/* ==========================================================================
   PROJECT DATA
   --------------------------------------------------------------------------
   Edit this file to add, remove, or update projects.

   HOW TO ADD A LOCAL MP4 VIDEO:
     videoType: "mp4"
     videoUrl:  "videos/your-file.mp4"   (relative path, file lives in /videos)
     videoPoster: "images/your-poster.jpg"

   HOW TO ADD A YOUTUBE VIDEO INSTEAD:
     videoType: "youtube"
     videoUrl:  "https://www.youtube.com/embed/YOUR_VIDEO_ID"

   HOW TO ADD A VIMEO VIDEO INSTEAD:
     videoType: "vimeo"
     videoUrl:  "https://player.vimeo.com/video/YOUR_VIDEO_ID"

   IF NO VIDEO EXISTS YET:
     videoType: "none"
     videoUrl:  ""
     The site will automatically show the dashboard image plus a
     "Project video coming soon" label instead of a broken player.

   GITHUB / LIVE LINKS:
     Leave githubLink / projectLink empty ("") to hide those buttons.
     Fill them in later and the buttons will appear automatically.
   ========================================================================== */

const PROJECTS = [
  {
    id: 1,
    title: "Airline Booking Behavior Analysis",
    category: "Sales & Customer Behavior Analytics",
    description: "Analyzed more than 50,000 airline bookings to understand customer behavior, booking channels, and trip types.",
    businessQuestion: "Which booking channels and trip types are associated with stronger customer conversion?",
    keyInsight: "The Internet booking channel achieved the highest conversion rate at 15.48%.",
    videoType: "none",
    videoUrl: "",
    videoPoster: "",
    videoDescription: "This dashboard walks through booking channels, trip types, customer behavior, and conversion performance.",
    tools: ["Excel", "Power Query", "Pivot Tables"],
    metrics: ["50,000+ bookings analyzed", "15.48% highest conversion rate"],
    dashboardImage: "images/01-airline-dashboard.jpg",
    projectLink: "",
    githubLink: ""
  },
  {
    id: 2,
    title: "AdventureWorks Revenue & Operations Analytics",
    category: "Revenue & Operations Analytics",
    description: "Built a structured data model to analyze revenue, profit margin, orders, customer retention, and regional performance.",
    businessQuestion: "How are revenue, profitability, retention, and operations performing across regions?",
    keyInsight: "A clean fact/dimension model made it possible to slice revenue and retention by region in seconds instead of minutes.",
    videoType: "mp4",
    videoUrl: "videos/02-adventureworks-analytics.mp4",
    videoPoster: "images/02-adventureworks-poster.jpg",
    videoDescription: "This video explains the data model and demonstrates how revenue, profitability, orders, customer retention, and regional performance are analyzed.",
    tools: ["Excel", "Data Modeling", "Pivot Tables"],
    metrics: ["Multi-region revenue model", "Fact + dimension tables"],
    dashboardImage: "images/02-adventureworks-poster.jpg",
    projectLink: "",
    githubLink: ""
  },
  {
    id: 3,
    title: "Over Glowed Data — Cosmetics Analytics",
    category: "E-commerce & Sales Analytics",
    description: "Analyzed $3.85M in sales across 30,000 orders to understand product and sales-channel performance.",
    businessQuestion: "Which sales channels and products are contributing most to revenue growth?",
    keyInsight: "Online sales generated 65% of total revenue, with 26.6% year-over-year growth.",
    videoType: "mp4",
    videoUrl: "videos/03-cosmetics-analytics.mp4",
    videoPoster: "images/03-cosmetics-poster.jpg",
    videoDescription: "This video demonstrates the sales dashboard and explains revenue channels, order trends, product performance, and year-over-year growth.",
    tools: ["Excel", "Power Query", "Pivot Charts"],
    metrics: ["$3.85M in sales", "30,000 orders", "65% revenue online", "26.6% YoY growth"],
    dashboardImage: "images/03-cosmetics-poster.jpg",
    projectLink: "",
    githubLink: ""
  },
  {
    id: 4,
    title: "HR Analytics: Headcount, Retention & Turnover",
    category: "HR Analytics",
    description: "Built an HR analytics dashboard to track headcount, retention, turnover, and employee exit patterns.",
    businessQuestion: "What factors are influencing employee retention and turnover?",
    keyInsight: "Retention held at 89.47%, while voluntary exits were the primary driver behind turnover.",
    videoType: "mp4",
    videoUrl: "videos/04-hr-analytics.mp4",
    videoPoster: "images/04-hr-poster.jpg",
    videoDescription: "This video presents the HR dashboard and explains employee headcount, retention, turnover, and the main drivers behind voluntary exits.",
    tools: ["Power BI", "DAX", "Data Modeling"],
    metrics: ["1,102 employees analyzed", "89.47% retention rate", "32.48% turnover rate"],
    dashboardImage: "images/04-hr-poster.jpg",
    projectLink: "",
    githubLink: ""
  },
  {
    id: 5,
    title: "Soly Vie — Real Estate Sales Intelligence",
    category: "Real Estate Analytics",
    description: "Designed a real estate sales intelligence dashboard to monitor project value, units, leads, and buyer conversion.",
    businessQuestion: "How can real estate sales performance and lead conversion be monitored more effectively?",
    keyInsight: "A custom HTML/CSS report interface made a 56.4% lead-to-buyer conversion rate easy to track at a glance.",
    videoType: "mp4",
    videoUrl: "videos/05-soly-vie-real-estate.mp4",
    videoPoster: "images/05-soly-vie-poster.jpg",
    videoDescription: "This video explains how the dashboard tracks real estate projects, units, project value, lead generation, and lead-to-buyer conversion.",
    tools: ["Power BI", "DAX", "HTML", "CSS"],
    metrics: ["EGP 3,874M project value", "533 units", "56.4% lead-to-buyer conversion"],
    dashboardImage: "images/05-soly-vie-poster.jpg",
    projectLink: "",
    githubLink: ""
  },
  {
    id: 6,
    title: "Customer Churn Analysis Dashboard",
    category: "Customer Analytics",
    description: "Analyzed customer churn behavior to identify segments with the highest churn risk.",
    businessQuestion: "Which customer groups are most likely to churn and may require retention attention?",
    keyInsight: "Electronic-check payers and fiber-optic users were among the highest-churn segments.",
    videoType: "none",
    videoUrl: "",
    videoPoster: "",
    videoDescription: "This dashboard covers churn analysis, customer segmentation, churn drivers, and the groups that require retention attention.",
    tools: ["Power BI", "DAX", "Power Query"],
    metrics: ["7,000 customers analyzed", "2,000 churned"],
    dashboardImage: "images/06-churn-dashboard.jpg",
    projectLink: "",
    githubLink: ""
  },
  {
    id: 7,
    title: "Morshedy Group — Collection & Sales Dashboards",
    category: "Real Estate Collection & Sales Analytics",
    description: "Built collection reconciliation and sales dashboards for real estate projects across two compounds.",
    businessQuestion: "How can collection performance, bank reconciliation, and sales activity be monitored in one place?",
    keyInsight: "Tracked more than EGP 1.1B in combined project value, fully reconciled across 9 partner banks.",
    videoType: "mp4",
    videoUrl: "videos/07-morshedy-group-dashboards.mp4",
    videoPoster: "images/07-morshedy-poster.jpg",
    videoDescription: "This video demonstrates collection tracking, bank reconciliation, sales performance, and project-level analytics.",
    tools: ["Power BI", "DAX", "HTML", "CSS"],
    metrics: ["EGP 1.1B+ combined project value", "9 partner banks reconciled"],
    dashboardImage: "images/07-morshedy-poster.jpg",
    projectLink: "",
    githubLink: ""
  },
  {
    id: 8,
    title: "University Management System — ERD",
    category: "Database Design",
    description: "Designed a normalized university database schema with relationships, weak entities, and derived attributes.",
    businessQuestion: "How can a university management system be structured using a clear and normalized relational database design?",
    keyInsight: "Modeling a ternary relationship between Student, Professor and Department was the key to keeping the schema correct.",
    videoType: "none",
    videoUrl: "",
    videoPoster: "",
    videoDescription: "This diagram explains the entity relationship structure, normalization process, and the logic behind the system.",
    tools: ["SQL", "ERD", "Database Normalization"],
    metrics: ["8 core entities modeled", "Fully normalized schema"],
    dashboardImage: "images/08-erd-dashboard.jpg",
    projectLink: "",
    githubLink: ""
  },
  {
    id: 9,
    title: "Salary Sleuth — Where Does My Salary Actually Go?",
    category: "Personal Finance Analytics",
    description: "A self-directed dashboard analyzing household spending — overview, category breakdown, demographics, and geography — to explain why income disappears by month's end.",
    businessQuestion: "Where does monthly spending actually go, and which categories and regions drive the biggest gaps?",
    keyInsight: "Food was the top spending category, and North vs South Egypt showed clearly different spending patterns.",
    videoType: "mp4",
    videoUrl: "videos/salary-sleuth.mp4",
    videoPoster: "images/09-salary-sleuth-poster.jpg",
    videoDescription: "This video walks through all four report pages — Overview, Category Analysis, Demographics, and Geographic — and how they connect to explain household spending.",
    tools: ["Power BI", "DAX", "Power Query", "Data Modeling", "SQL", "HTML", "CSS"],
    metrics: ["4 report pages", "Category + demographic + geographic breakdowns"],
    dashboardImage: "images/09-salary-sleuth-poster.jpg",
    projectLink: "",
    githubLink: ""
  }
];
