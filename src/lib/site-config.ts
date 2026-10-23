export const site = {
  name: "KODEBLINK",
  tagline: "CUSTOM DESIGN COMPANY",
  positioning: "CUSTOM DESIGN & TECHNOLOGY COMPANY",
  specialization: "SOFTWARE, WEB & MOBILE SOLUTIONS",
  description:
    "KODEBLINK is a Custom Design & Technology Company that develops websites, web applications, mobile applications, custom business software, and digital solutions built around the way your business works.",
  email: "contact@kodeblink.com",
  phone: "+1 (800) 555-0199",
  phoneHref: "tel:+18005550199",
  linkedin: "https://www.linkedin.com/company/kodeblink",
  instagram: "https://www.instagram.com/kodeblink",
  navigation: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/solutions", label: "Solutions" },
    { to: "/smart-receipt", label: "SmartReceipt" },
    { to: "/portfolio", label: "Products & Work" },
    { to: "/contact", label: "Contact" },
  ],
};

export const products = [
  {
    id: "smart-receipt",
    name: "SmartReceipt",
    tagline: "Digital Receipt Management Solution",
    description:
      "A digital receipt management solution designed to organize, categorize, and access receipt information, purchase records, and supplier documentation without paper clutter.",
    highlights: [
      "Digital receipt capture & structured storage",
      "Categorization by project, department, or vendor",
      "Instant search, filtering, and retrieval",
      "Export-ready documentation for bookkeeping",
    ],
    status: "Product Direction",
    to: "/smart-receipt",
  },
  {
    id: "payroll-management",
    name: "Payroll Management Application",
    tagline: "Salary & Attendance Workflows",
    description:
      "A dedicated business application focused on payroll-related workflows, salary calculations, employee deductions, attendance verification, and payout documentation.",
    highlights: [
      "Employee wage & salary structure management",
      "Automated attendance & leave reconciliation",
      "Configurable deduction & bonus rules",
      "Clear monthly salary slip generation",
    ],
    status: "Verified Application",
    to: "/portfolio",
  },
  {
    id: "daily-task-tracker",
    name: "Daily Task Tracker",
    tagline: "Operational Task & Work Visibility",
    description:
      "An intuitive business application designed to organize daily tasks, monitor their status, prioritize critical work, and provide clear visibility into ongoing operations.",
    highlights: [
      "Daily task assignment and priority boards",
      "Real-time status tracking (To Do, In Progress, Complete)",
      "Team activity timelines and progress visibility",
      "Lightweight, distraction-free workflow interface",
    ],
    status: "Verified Application",
    to: "/portfolio",
  },
];

export const buildCapabilities = [
  {
    number: "01",
    title: "Website Design & Development",
    text: "Modern, high-converting corporate websites and landing pages engineered for speed, search visibility, and professional credibility.",
  },
  {
    number: "02",
    title: "Web Application Development",
    text: "Custom cloud portals, client dashboards, and interactive web platforms designed with responsive, accessible user interfaces.",
  },
  {
    number: "03",
    title: "Mobile App Development (Android)",
    text: "Intuitive, performant cross-platform mobile apps with specialized expertise in Android solutions for field and business operations.",
  },
  {
    number: "04",
    title: "Custom Business Software",
    text: "Purpose-built business tools, ERP, CRM, inventory, and workflow applications engineered around your exact operational rules.",
  },
];

export const services: [string, string, string, string, string][] = [
  [
    "Website Design & Development",
    "What We Deliver",
    "High-performance corporate websites, product landing pages, and digital showcases engineered for speed, search visibility, and client conversion.",
    "Business Use Cases",
    "Company launch websites, B2B service showcases, interactive product catalogs, and conversion-focused campaign landing pages.",
  ],
  [
    "Web Application Development",
    "What We Deliver",
    "Custom web portals, client dashboards, cloud platforms, and internal business tools designed with responsive, accessible user interfaces.",
    "Business Use Cases",
    "Customer account portals, partner extranets, internal management tools, and browser-based operational software.",
  ],
  [
    "Mobile Application Development (Android)",
    "What We Deliver",
    "Intuitive, responsive mobile solutions with specialized expertise in Android-focused applications, tablet interfaces, and cross-platform tools.",
    "Business Use Cases",
    "Field worker tools, shop floor mobile scanners, on-site task logging, and executive approval apps.",
  ],
  [
    "Custom Business Software",
    "What We Deliver",
    "Purpose-built software architected around your exact operational rules, custom calculations, and unique business workflows.",
    "Business Use Cases",
    "Automating complex pricing logic, proprietary production calculations, custom dispatching, and legacy spreadsheet replacement.",
  ],
  [
    "ERP, CRM & Workflow Applications",
    "What We Deliver",
    "Integrated systems for inventory tracking, customer relationships, order management, production dispatching, and process automation.",
    "Business Use Cases",
    "End-to-end order fulfillment, customer lifecycle tracking, warehouse inventory balance, and cross-team approval chains.",
  ],
  [
    "UI/UX Design & Digital Experiences",
    "What We Deliver",
    "User research, wireframing, interactive prototypes, design systems, and modern visual designs crafted for usability.",
    "Business Use Cases",
    "Redesigning clunky internal interfaces, designing new digital products from scratch, and user experience audits.",
  ],
  [
    "Existing Application Enhancement & Support",
    "What We Deliver",
    "Modernization of legacy systems, feature additions, speed optimization, technical audits, and ongoing software maintenance.",
    "Business Use Cases",
    "Refactoring slow codebases, adding modern API connections, upgrading security, and providing reliable bug resolution.",
  ],
];

export const solutions: [string, string, string, string][] = [
  [
    "Operations & Workflow Management Systems",
    "Fragmented communication, manual logbooks, and disconnected software create operational blind spots and delayed handoffs.",
    "Custom operational dashboards and dispatch consoles that track work-in-progress, machine readiness, and team assignments in real time.",
    "Eliminates manual status follow-ups, shortens turnaround times, and provides management with verified operational visibility.",
  ],
  [
    "Inventory & Material Traceability",
    "Mismatches between physical stock and spreadsheets cause assembly stoppages, over-ordering, and stockout delays.",
    "Barcode and lot-level inventory tracking software that records raw material intake, bay storage, and consumption on assembly lines.",
    "Maintains accurate inventory counts, automated low-stock reorder triggers, and complete audit trails for every component.",
  ],
  [
    "Custom Client & Vendor Portals",
    "High volume of repetitive emails and phone calls for order status, quotes, documentation, and invoice reconciliation.",
    "Secure digital web portals where clients and suppliers can view live order status, download documentation, and submit requests.",
    "Enhances customer satisfaction, reduces administrative overhead, and speeds up approvals and payment cycles.",
  ],
  [
    "Business Process & Data Automation",
    "Valuable staff spend hours every week re-entering data across separate systems, causing typos and reporting delays.",
    "Automated data pipelines and software bridges that connect sales inquiries, production orders, and accounting ledgers.",
    "Eliminates duplicate manual data entry, cuts processing errors to near-zero, and accelerates decision-making.",
  ],
];

export const processSteps = [
  {
    number: "01",
    title: "Discover Business Requirements",
    text: "We study your operational workflows, talk to your key team members, and define exact project goals without technical jargon.",
  },
  {
    number: "02",
    title: "Plan Architecture & Scope",
    text: "We architect the software structure, data models, technology stack, and clear delivery milestones with transparent estimates.",
  },
  {
    number: "03",
    title: "Design Intuitive Experiences",
    text: "We craft clean, high-contrast, distraction-free interfaces that your team and clients can adopt quickly with minimal training.",
  },
  {
    number: "04",
    title: "Develop & Rigorously Validate",
    text: "We write clean, high-performance, maintainable code with strict type safety, testing thoroughly against real-world use cases.",
  },
  {
    number: "05",
    title: "Deploy, Onboard & Support",
    text: "We roll out your solution smoothly, guide your team through onboarding, and provide reliable ongoing technical support.",
  },
];

export const portfolio: [string, string, string, string][] = [
  [
    "Software Product",
    "Receipt Management",
    "SmartReceipt Solution",
    "A digital receipt management application designed to organize, categorize, and search receipt information, purchase records, and supplier documentation without paper clutter.",
  ],
  [
    "Business Application",
    "HR & Payroll",
    "Payroll Management Application",
    "A specialized business application focused on payroll workflows, employee salary calculations, deductions, attendance verification, and salary slip generation.",
  ],
  [
    "Productivity & Operations",
    "Task Management",
    "Daily Task Tracker",
    "An intuitive task tracking application designed to organize daily tasks, monitor their real-time status, prioritize critical work, and provide clear team visibility.",
  ],
  [
    "Custom Business System",
    "Operations Portal",
    "Operations & Telemetry Hub",
    "A custom operations dashboard concept displaying real-time workflow status, inventory availability, and order progress across multiple business departments.",
  ],
];

export const faqs = [
  {
    question: "What types of software projects does KODEBLINK build?",
    answer:
      "We design and develop custom corporate websites, web applications, mobile applications (including Android-focused solutions), custom business software, and operational applications like ERP, CRM, inventory, and task tracking systems.",
  },
  {
    question: "Can you build software tailored to our specific business workflows?",
    answer:
      "Yes, that is our primary specialty. Rather than forcing you to adapt to rigid off-the-shelf software, we engineer digital tools that fit your exact processes, business logic, and team routines.",
  },
  {
    question: "Do you build mobile applications as well as web solutions?",
    answer:
      "Yes. We develop responsive web applications that work on any browser as well as dedicated mobile applications, including specialized Android solutions for shop floor, warehouse, and field operations.",
  },
  {
    question: "Can you help improve or extend our existing software?",
    answer:
      "Absolutely. We frequently help businesses modernize legacy applications, add new capabilities, improve speed and user experience, and provide ongoing software maintenance.",
  },
  {
    question: "How do we start a project with KODEBLINK?",
    answer:
      "You can submit a brief message through our contact form describing your project idea or current challenge. We will schedule a direct consultation to discuss technical possibilities and project scope.",
  },
];

export const industries = [
  {
    title: "Manufacturing & Fabrication",
    description: "Shop floor telemetry, machine scheduling, batch inventory, and quality inspection consoles.",
  },
  {
    title: "Wholesale & Distribution",
    description: "Multi-warehouse stock tracking, supplier order validation, and automated logistics handoffs.",
  },
  {
    title: "Professional & Corporate Services",
    description: "Client portals, workflow automation, custom reporting tools, and secure document management.",
  },
  {
    title: "Contractors & Field Operations",
    description: "Mobile task tracking, job site dispatching, material logs, and worker status reporting.",
  },
];
