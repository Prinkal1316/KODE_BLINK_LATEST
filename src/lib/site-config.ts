import { MessageSquare, Compass, Layout, Code2, Rocket, Network, Palette, Workflow } from "lucide-react";

export const site = {
  name: "KODEBLINK",
  tagline: "CUSTOM DESIGN COMPANY",
  positioning: "CUSTOM DESIGN COMPANY",
  specialization: "SOFTWARE, WEB & MOBILE SOLUTIONS",
  description:
    "KODEBLINK is a Custom Design Company that develops websites, web applications, mobile applications, custom business software, and digital solutions built around the way your business works.",
  email: "kodeblinksales@gmail.com",
  phone: "+91 9552848466",
  phoneHref: "tel:+919552848466",
  linkedin: "https://www.linkedin.com/in/kodeblink-b537b4435/",
  instagram: "https://www.instagram.com/kodeblink_/",
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
    "Fast, responsive, SEO-friendly websites designed to showcase your business and generate leads.",
    "Business Use Cases",
    "Corporate websites, B2B service pages, product catalogs, and landing pages.",
  ],
  [
    "Web Application Development",
    "What We Deliver",
    "Secure, scalable web applications with custom dashboards, portals, and business workflows.",
    "Business Use Cases",
    "Client portals, employee dashboards, partner platforms, and management systems.",
  ],
  [
    "Android App Development",
    "What We Deliver",
    "User-friendly Android applications that connect your teams, customers, and business operations.",
    "Business Use Cases",
    "Field service apps, mobile scanners, task tracking, and approval workflows.",
  ],
  [
    "Custom Business Software",
    "What We Deliver",
    "Tailored software built around your business rules, calculations, and operational needs.",
    "Business Use Cases",
    "Automating manual work, replacing spreadsheets, and simplifying complex processes.",
  ],
  [
    "ERP, CRM & Workflow Solutions",
    "What We Deliver",
    "Connected systems for inventory, sales, customer management, and business operations.",
    "Business Use Cases",
    "Order management, warehouse tracking, sales pipelines, and approval processes.",
  ],
  [
    "UI/UX Design",
    "What We Deliver",
    "Intuitive interfaces and interactive prototypes focused on usability and user experience.",
    "Business Use Cases",
    "Website redesigns, application interfaces, design systems, and usability improvements.",
  ],
  [
    "Application Enhancement & Support",
    "What We Deliver",
    "Improve existing software with new features, better performance, security updates, and maintenance.",
    "Business Use Cases",
    "Legacy modernization, bug fixes, API integration, and performance optimization.",
  ],
];


export const solutions: [string, string, string, string][] = [
  [
    "Operations & Workflow",
    "Disconnected teams and manual tracking slow down daily operations.",
    "One dashboard for tasks, teams, machines, and live work status.",
    "Faster workflows. Clearer decisions.",
  ],
  [
    "Inventory & Traceability",
    "Stock mismatches cause delays, shortages, and unnecessary costs.",
    "Track materials, stock movement, batches, and reorder levels.",
    "Accurate stock. Fewer disruptions.",
  ],
  [
    "Client & Vendor Portals",
    "Emails and phone calls make order updates difficult to manage.",
    "Give clients and vendors one place for orders, files, and requests.",
    "Less follow-up. Better service.",
  ],
  [
    "Business Automation",
    "Repeated data entry wastes time and creates avoidable errors.",
    "Connect business processes and automate repetitive tasks.",
    "Less manual work. More productivity.",
  ],
];

export const developmentSteps = [
  {
    number: "STEP 01",
    title: "We talk",
    text: "Tell us about your business on a free call or WhatsApp. Just plain language.",
    icon: MessageSquare,
    state: "completed",
  },
  {
    number: "STEP 02",
    title: "We plan",
    text: "We map out your pages, features and the look and feel. You approve it.",
    icon: Workflow,
    state: "completed",
  },
  {
    number: "STEP 03",
    title: "We design",
    text: "You see exactly how your site will look before we write any code.",
    icon: Palette,
    state: "upcoming",
  },
  {
    number: "STEP 04",
    title: "We build",
    text: "We code it and test it on phones, tablets and laptops so it works everywhere.",
    icon: Code2,
    state: "upcoming",
  },
  {
    number: "STEP 05",
    title: "You go live 🎉",
    text: "Your website launches. We stay with you for updates and continuous support.",
    icon: Rocket,
    state: "upcoming",
  },
];

export const portfolio: [string, string, string, string, string][] = [
  [
    "Software Product",
    "Receipt Management",
    "SmartReceipt Solution",
    "A digital receipt management application to organize, categorize, and search receipts and supplier records.",
    "src/assets/images/smartreceipt-new-bill.png",
  ],
  [
    "Business Application",
    "HR & Payroll",
    "Payroll Management Application",
    "Manage salary calculations, attendance, deductions, and salary slips in one application.",
    "src/assets/images/Payroll_Management.png",
  ],
  [
    "Productivity & Operations",
    "Task Management",
    "Daily Task Tracker",
    "Organize daily tasks, prioritize work, and track team progress with clear status visibility.",
    "src/assets/images/Daily_Task.png",
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
