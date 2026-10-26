import { Activity, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Menu,
  X,
  Cpu,
  Boxes,
  Workflow,
  ShieldCheck,
  Gauge,
  Layers,
  FileSpreadsheet,
  Settings2,
  Globe,
  CheckCircle2,
  Smartphone,
  Users2,
  CalendarCheck,
  Receipt,
  HelpCircle,
  Building2,
  ChevronDown,
  Monitor,
  BarChart3,
  HardHat,
  TrendingUp,
  Code2,
  MessageSquare,
  Palette,
  Rocket,
  Calendar,
  Clock,
  Compass,
  CreditCard,
  Flame,
  FolderKanban,
  Globe2,
  MessageCircle,
  Puzzle,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  Wrench,
  Zap,
  Coins,
  Headphones,
  Lightbulb
} from "lucide-react";
import { z } from "zod";
import { ArrowUpRight, FileText, LayoutDashboard, ReceiptText, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@/components/router";
import { Logo } from "@/components/logo";
import smartReceiptDashboard from "../assets/images/smartreceipt-dashboard.png";
import smartReceiptBills from "../assets/images/smartreceipt-bills.png";
import smartReceiptNewBill from "../assets/images/smartreceipt-new-bill.png";
import {
  buildCapabilities,
  portfolio,
  services,
  site,
  solutions,
  products,
  faqs,
  industries,
  developmentSteps,
} from "@/lib/site-config";
import React from "react";

// Image assets
const HERO_IMAGE = "/src/assets/images/hero_manufacturing_tech_1792770007215.jpg";
const DIGITAL_TWIN_IMAGE = "/src/assets/images/manufacturing_digital_twin_1792770006741.jpg";
const SHOP_FLOOR_IMAGE = "/src/assets/images/industrial_automation_floor_1792770007264.jpg";
const SMART_RECEIPT_IMAGE = "/src/assets/images/smart_receipt_interface_1792770008001.jpg";

export { Logo };

export function Header() {
  const [open, setOpen] = useState(false);
  const { currentPath } = useRouter();
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCE7F5] bg-white/95 backdrop-blur-md transition-all">
      <div className="section-shell flex min-h-20 items-center justify-between gap-6">
        {/* Left: Official Logo */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Center: Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {site.navigation.map((item) => {
            const isActive = currentPath === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`focus-ring text-sm font-medium whitespace-nowrap transition-colors ${isActive
                  ? "text-[#0878F9] font-semibold"
                  : "text-[#5A6D82] hover:text-[#0B132B]"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Blue-to-Cyan 'Start a Project' CTA Button */}
        <div className="flex shrink-0 items-center gap-3">
          <Button asChild variant="gradient" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">
              Start a Project <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="text-[#0B132B] hover:bg-[#F5F9FF] hover:text-[#0878F9] md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#DCE7F5] bg-white px-6 py-5 shadow-lg md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="mx-auto flex max-w-xl flex-col gap-2">
            {site.navigation.map((item) => {
              const isActive = currentPath === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={close}
                  className={`focus-ring border-b border-[#EDF3FA] py-3 text-base font-medium transition-colors ${isActive ? "text-[#0878F9] font-semibold" : "text-[#5A6D82] hover:text-[#0B132B]"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild variant="gradient" size="lg" className="mt-4 w-full">
              <Link to="/contact" onClick={close}>
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#DCE7F5] bg-[#07132C] text-white">
      {/* Subtle background effects */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(#60A5FA 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#0878F9]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#11C5E8]/10 blur-3xl" />

      <div className="section-shell relative z-10">
        {/* Main footer */}
        <div className="grid gap-12 py-14 md:grid-cols-2 md:py-16 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr] lg:gap-10">
          {/* Company information */}
          <div className="max-w-sm">
            <div className="inline-flex rounded-xl bg-white px-3 py-2">
              <Logo compact />
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              {site.description}
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              From business websites to web applications, Android apps, and
              custom business software, we turn your ideas into practical
              digital solutions.
            </p>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit KODEBLINK on LinkedIn"
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 transition-all hover:border-[#0878F9]/60 hover:bg-[#0878F9]/15 hover:text-white"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>

              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit KODEBLINK on Instagram"
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 transition-all hover:border-[#11C5E8]/60 hover:bg-[#11C5E8]/10 hover:text-white"
              >
                Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#40C8FF]">
              Explore
            </h3>

            <div className="mt-6 grid gap-4 text-sm">
              {site.navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex w-fit items-center gap-2 text-slate-300 transition-colors hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-[#0878F9] transition-all group-hover:w-3 group-hover:bg-[#11C5E8]" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services and products */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#40C8FF]">
              What We Build
            </h3>

            <div className="mt-6 grid gap-4 text-sm">
              <Link
                to="/services"
                className="w-fit text-slate-300 transition-colors hover:text-white"
              >
                Website Design & Development
              </Link>

              <Link
                to="/services"
                className="w-fit text-slate-300 transition-colors hover:text-white"
              >
                Web Applications
              </Link>

              <Link
                to="/services"
                className="w-fit text-slate-300 transition-colors hover:text-white"
              >
                Android Applications
              </Link>

              <Link
                to="/solutions"
                className="w-fit text-slate-300 transition-colors hover:text-white"
              >
                Custom Business Software
              </Link>

              <Link
                to="/smart-receipt"
                className="w-fit text-slate-300 transition-colors hover:text-white"
              >
                SmartReceipt
              </Link>

              <Link
                to="/portfolio"
                className="w-fit text-slate-300 transition-colors hover:text-white"
              >
                Payroll & Task Tracker
              </Link>
            </div>
          </div>

          {/* Contact and CTA */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#40C8FF]">
              Let's Connect
            </h3>

            <p className="mt-6 text-sm leading-6 text-slate-300">
              Have an idea, business challenge, or application to build?
              Let's discuss your requirements.
            </p>

            <div className="mt-5 grid gap-4 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="break-all text-slate-200 transition-colors hover:text-[#40C8FF]"
              >
                {site.email}
              </a>

              <a
                href={site.phoneHref}
                className="text-slate-200 transition-colors hover:text-[#40C8FF]"
              >
                {site.phone}
              </a>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0878F9] to-[#11C5E8] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#0878F9]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="flex flex-col gap-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} KODEBLINK. All rights reserved.
            </p>

            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
              {site.tagline}
            </p>

            <Link
              to="/contact"
              className="w-fit font-semibold text-slate-300 transition-colors hover:text-[#40C8FF]"
            >
              Have a project? Let's talk <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#0B132B]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export function PageIntro({
  eyebrow = "About KODEBLINK",
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text: string;
}) {
  return (
    <section className="hero-grid-pattern relative overflow-hidden border-b border-[#DCE7F5] py-16 md:py-24">
      {/* Dynamic Keyframes for Continuous Scrolling Logo Gradient */}
      <style>{`
        @keyframes scrollKodeblinkGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-kodeblink-scroll {
          background-size: 200% auto;
          animation: scrollKodeblinkGradient 5.5s linear infinite;
        }
      `}</style>

      {/* Ambient Multi-Color Glows behind the text */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0878F9]/15 via-[#11C5E8]/15 to-[#20B85A]/10 blur-3xl" />

      <div className="section-shell relative z-10">
        <div className="max-w-4xl">
          {/* Company Positioning Label / Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE7F5] bg-white px-3.5 py-1 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-[#0878F9] animate-pulse" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#0878F9]">
              {eyebrow}
            </span>
            <span className="text-[#DCE7F5]">·</span>
            <span className="font-mono text-xs text-[#5A6D82]">
              WEB · MOBILE · SOFTWARE
            </span>
          </div>

          {/* Large Headline with Scrolling Gradient Accent */}
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B132B] sm:text-5xl md:text-6xl">
            <span className="animate-kodeblink-scroll bg-gradient-to-r from-[#0878F9] via-[#11C5E8] via-[#20B85A] via-[#F9B208] via-[#EA3323] to-[#0878F9] bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5A6D82] sm:text-lg">
            {text}
          </p>

          {/* Capability Highlights */}
          <div className="mt-10 grid grid-cols-1 gap-3 pt-6 border-t border-[#DCE7F5] sm:grid-cols-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-medium text-[#0B132B]">
              <CheckCircle2 className="h-4 w-4 text-[#0878F9] shrink-0" />
              <span>Websites & Web Apps</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#0B132B]">
              <CheckCircle2 className="h-4 w-4 text-[#11C5E8] shrink-0" />
              <span>Mobile Applications</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#0B132B]">
              <CheckCircle2 className="h-4 w-4 text-[#20B85A] shrink-0" />
              <span>Custom Business Software</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B132B] md:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-[#5A6D82]">{text}</p>}
    </div>
  );
}

export function CtaSection({
  title = "Have a Project in Mind? Let's Discuss How We Can Help.",
  text = "Tell us what you are looking to build or improve, and our engineering team will provide practical guidance on scope, technology, and execution.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[#DCE7F5] bg-gradient-to-b from-[#F5F9FF] via-white to-[#F5F9FF] py-20 md:py-28">
      {/* Background Subtle Tech Pattern & Ambient Glows */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_15%,#000_60%,transparent_100%)]"
        style={{
          backgroundImage: `radial-gradient(#CBD5E1 1.2px, transparent 1.2px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-80 w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0878F9]/10 via-[#11C5E8]/10 to-[#20B85A]/10 blur-3xl" />

      {/* Dynamic Keyframes for Continuous Scrolling Logo Gradient */}
      <style>{`
        @keyframes scrollKodeblinkGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-kodeblink-scroll {
          background-size: 200% auto;
          animation: scrollKodeblinkGradient 5.5s linear infinite;
        }
      `}</style>

      <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0878F9]/20 bg-[#0878F9]/5 px-3 py-1 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0878F9] animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
              Start Building
            </p>
          </div>

          {/* Heading with Continuous Logo Gradient */}
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-[#0B132B] md:text-5xl lg:leading-[1.15]">
            <span className="animate-kodeblink-scroll bg-gradient-to-r from-[#0878F9] via-[#11C5E8] via-[#20B85A] via-[#F9B208] via-[#EA3323] to-[#0878F9] bg-clip-text text-transparent">
              {title}
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5A6D82] md:text-lg">
            {text}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5">
          <Button asChild variant="gradient" size="lg" className="group shadow-md shadow-[#0878F9]/20 transition-all hover:shadow-lg hover:shadow-[#0878F9]/30 hover:-translate-y-0.5">
            <Link to="/contact">
              Discuss Your Project{" "}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="border-[#DCE7F5] bg-white text-[#0B132B] hover:bg-[#F5F9FF] hover:border-[#0878F9]/40 hover:-translate-y-0.5 transition-all">
            <Link to="/portfolio">Explore Our Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// export function HeroVisual() {
//   return (
//     <div className="relative mx-auto flex w-full max-w-lg items-center justify-center p-4 lg:max-w-none">
//       <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#0878F9]/10 via-[#11C5E8]/10 to-[#20B85A]/10 blur-2xl" />

//       <div className="tech-grid relative aspect-square w-full max-w-[460px] overflow-hidden rounded-2xl border border-[#DCE7F5] bg-white p-7 shadow-xl shadow-[#0878F9]/5">
//         <svg
//           viewBox="0 0 400 400"
//           className="pointer-events-none absolute inset-0 h-full w-full"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle cx="200" cy="200" r="175" stroke="#DCE7F5" strokeWidth="1" strokeDasharray="4 4" />
//           <circle cx="200" cy="200" r="135" stroke="#DCE7F5" strokeWidth="1" />
//           <circle cx="200" cy="200" r="95" stroke="#0878F9" strokeWidth="1" strokeOpacity="0.15" />

//           <line x1="200" y1="20" x2="200" y2="380" stroke="#DCE7F5" strokeWidth="1" strokeDasharray="2 4" />
//           <line x1="20" y1="200" x2="380" y2="200" stroke="#DCE7F5" strokeWidth="1" strokeDasharray="2 4" />

//           <circle cx="200" cy="25" r="2.5" fill="#0878F9" />
//           <circle cx="375" cy="200" r="2.5" fill="#11C5E8" />
//           <circle cx="200" cy="375" r="2.5" fill="#20B85A" />
//           <circle cx="25" cy="200" r="2.5" fill="#FFC928" />

//           <path
//             d="M 120 70 A 135 135 0 0 1 330 180"
//             stroke="url(#hero-arc-gradient)"
//             strokeWidth="2"
//             strokeLinecap="round"
//           />

//           <defs>
//             <linearGradient id="hero-arc-gradient" x1="120" y1="70" x2="330" y2="180" gradientUnits="userSpaceOnUse">
//               <stop offset="0%" stopColor="#0878F9" />
//               <stop offset="100%" stopColor="#11C5E8" />
//             </linearGradient>
//             <linearGradient id="k-stem-grad" x1="120" y1="100" x2="120" y2="300" gradientUnits="userSpaceOnUse">
//               <stop offset="0%" stopColor="#0878F9" />
//               <stop offset="100%" stopColor="#11C5E8" />
//             </linearGradient>
//             <linearGradient id="k-wing-top" x1="180" y1="100" x2="290" y2="200" gradientUnits="userSpaceOnUse">
//               <stop offset="0%" stopColor="#FFC928" />
//               <stop offset="100%" stopColor="#F04438" />
//             </linearGradient>
//             <linearGradient id="k-wing-bot" x1="180" y1="200" x2="290" y2="300" gradientUnits="userSpaceOnUse">
//               <stop offset="0%" stopColor="#12DCC0" />
//               <stop offset="100%" stopColor="#20B85A" />
//             </linearGradient>
//           </defs>

//           <rect x="120" y="105" width="34" height="190" rx="17" fill="url(#k-stem-grad)" />

//           <path
//             d="M 166 182 L 254 94 C 262 86 278 92 278 104 V 108 C 278 116 274 124 266 130 L 192 196 Z"
//             fill="url(#k-wing-top)"
//           />

//           <path
//             d="M 166 218 L 266 270 C 274 276 278 284 278 292 V 296 C 278 308 262 314 254 306 L 166 218 Z"
//             fill="url(#k-wing-bot)"
//           />

//           <circle cx="170" cy="200" r="16" fill="#0878F9" />
//           <circle cx="170" cy="200" r="7" fill="#FFFFFF" />
//         </svg>

//         <div className="absolute top-4 left-5 rounded-md border border-[#DCE7F5] bg-white/90 px-2.5 py-1 text-[10px] font-mono font-medium text-[#5A6D82] shadow-xs backdrop-blur-xs">
//           CUSTOM DESIGN
//         </div>

//         <div className="absolute top-4 right-5 flex items-center gap-1.5 rounded-md border border-[#DCE7F5] bg-white/90 px-2.5 py-1 text-[10px] font-mono text-[#0878F9] shadow-xs backdrop-blur-xs">
//           <span className="h-2 w-2 rounded-full bg-[#20B85A]" />
//           ACTIVE READY
//         </div>

//         <div className="absolute bottom-4 left-5 rounded-md border border-[#DCE7F5] bg-white/90 px-3 py-1.5 text-[10px] font-mono text-[#0B132B] shadow-xs backdrop-blur-xs">
//           <span className="block text-[#5A6D82]">FULL STACK:</span>
//           <span className="font-semibold text-[#0878F9]">WEB · MOBILE · SOFTWARE</span>
//         </div>

//         <div className="absolute bottom-4 right-5 rounded-md border border-[#DCE7F5] bg-white/90 px-3 py-1.5 text-[10px] font-mono text-[#0B132B] shadow-xs backdrop-blur-xs text-right">
//           <span className="block text-[#5A6D82]">BUSINESS:</span>
//           <span className="font-semibold text-[#20B85A]">SCALABLE SYSTEMS</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function HeroVisual() {
//   return (
//     <div className="relative mx-auto w-full max-w-[590px] py-8 sm:py-12">
//       {/* Soft white and blue background */}
//       <div className="absolute inset-8 rounded-full bg-[#EAF4FF] blur-3xl" />

//       {/* Floating web application */}
//       <div className="relative z-10 w-[88%] overflow-hidden rounded-xl border border-[#DCE7F5] bg-white shadow-2xl shadow-[#0878F9]/10 sm:w-[84%]">
//         {/* Browser header */}
//         <div className="flex h-10 items-center gap-1.5 border-b border-[#E8EEF6] px-3">
//           <span className="h-2 w-2 rounded-full bg-[#F04438]" />
//           <span className="h-2 w-2 rounded-full bg-[#FFC928]" />
//           <span className="h-2 w-2 rounded-full bg-[#20B85A]" />
//           <div className="ml-3 flex-1 rounded-md bg-[#F5F8FC] px-3 py-1 text-[9px] text-slate-400">
//             app.yourbusiness.com
//           </div>
//         </div>

//         {/* Dashboard mockup */}
//         <div className="grid min-h-[280px] grid-cols-[42px_1fr] sm:min-h-[315px] sm:grid-cols-[54px_1fr]">
//           <aside className="flex flex-col items-center gap-5 border-r border-[#E8EEF6] bg-[#FAFCFF] py-5 text-[#0878F9]">
//             <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#0878F9] to-[#11C5E8] text-xs font-bold text-white">
//               K
//             </div>
//             <LayoutDashboard size={16} />
//             <ReceiptText size={16} />
//             <Users size={16} />
//             <Wallet size={16} />
//           </aside>

//           <div className="min-w-0 p-3 sm:p-5">
//             <div className="flex items-center justify-between gap-2">
//               <div>
//                 <p className="text-[9px] text-slate-400 sm:text-[10px]">
//                   BUSINESS WORKSPACE
//                 </p>
//                 <h3 className="mt-1 text-sm font-bold text-[#0B132B] sm:text-base">
//                   Your Business, Organized.
//                 </h3>
//               </div>
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF4FF] text-[#0878F9]">
//                 <Users size={15} />
//               </div>
//             </div>

//             {/* Summary cards */}
//             <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
//               <div className="rounded-lg border border-[#E5EDF7] p-2.5 sm:p-3">
//                 <div className="flex items-center gap-1.5 text-slate-500">
//                   <ReceiptText size={13} />
//                   <span className="text-[9px] sm:text-[10px]">Receipts</span>
//                 </div>
//                 <p className="mt-2 text-sm font-bold text-[#0B132B] sm:text-lg">
//                   SmartReceipt
//                 </p>
//                 <p className="mt-1 text-[9px] text-[#0878F9]">
//                   Digital receipt management
//                 </p>
//               </div>

//               <div className="rounded-lg border border-[#E5EDF7] p-2.5 sm:p-3">
//                 <div className="flex items-center gap-1.5 text-slate-500">
//                   <Wallet size={13} />
//                   <span className="text-[9px] sm:text-[10px]">Payroll</span>
//                 </div>
//                 <p className="mt-2 text-sm font-bold text-[#0B132B] sm:text-lg">
//                   Payroll
//                 </p>
//                 <p className="mt-1 text-[9px] text-[#16834D]">
//                   Employee workflows
//                 </p>
//               </div>
//             </div>

//             {/* Workflow preview */}
//             <div className="mt-4 rounded-lg border border-[#E5EDF7] p-3">
//               <div className="flex items-center justify-between">
//                 <p className="text-[10px] font-semibold text-[#0B132B] sm:text-xs">
//                   Application Workflow
//                 </p>
//                 <ArrowUpRight size={14} className="text-[#0878F9]" />
//               </div>

//               <div className="mt-3 space-y-3">
//                 {[
//                   { label: "Plan", width: "w-full", color: "bg-[#0878F9]" },
//                   { label: "Design", width: "w-[78%]", color: "bg-[#11C5E8]" },
//                   { label: "Develop", width: "w-[60%]", color: "bg-[#20B85A]" },
//                 ].map((item) => (
//                   <div key={item.label} className="flex items-center gap-3">
//                     <span className="w-12 text-[9px] text-slate-500">
//                       {item.label}
//                     </span>
//                     <div className="h-1.5 flex-1 rounded-full bg-[#EEF3F9]">
//                       <div
//                         className={`h-full rounded-full ${item.width} ${item.color}`}
//                       />
//                     </div>
//                     <Check size={12} className="text-[#20B85A]" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Laptop base */}
//         <div className="h-2 bg-gradient-to-b from-[#DCE7F5] to-[#F5F8FC]" />
//       </div>

//       {/* Floating Android phone */}
//       <div className="absolute -right-1 bottom-2 z-20 w-[34%] max-w-[175px] rounded-[25px] border-[4px] border-[#17233A] bg-white p-1.5 shadow-2xl shadow-[#0B132B]/20 sm:-right-0 sm:bottom-4">
//         <div className="overflow-hidden rounded-[18px] bg-[#F5F9FF]">
//           <div className="flex justify-center py-1">
//             <div className="h-1 w-10 rounded-full bg-[#17233A]" />
//           </div>

//           <div className="px-2.5 pb-3 pt-2 sm:px-3">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-[8px] text-slate-500 sm:text-[9px]">
//                   WELCOME TO
//                 </p>
//                 <p className="mt-0.5 text-[11px] font-bold text-[#0B132B] sm:text-sm">
//                   SmartReceipt
//                 </p>
//               </div>
//               <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E1F5FF] text-[#0878F9]">
//                 <ReceiptText size={14} />
//               </div>
//             </div>

//             <div className="mt-3 rounded-xl bg-gradient-to-br from-[#0878F9] to-[#11C5E8] p-2.5 text-white">
//               <p className="text-[8px] text-white/80">YOUR RECEIPTS</p>
//               <p className="mt-1 text-xs font-bold sm:text-sm">
//                 All in one place
//               </p>
//               <div className="mt-3 flex h-7 w-7 items-center justify-center rounded-lg bg-white/20">
//                 <FileText size={14} />
//               </div>
//             </div>

//             <p className="mt-3 text-[9px] font-bold text-[#0B132B] sm:text-[10px]">
//               Recent activity
//             </p>

//             {[
//               { name: "Store receipt", date: "Recent", color: "#0878F9" },
//               { name: "Purchase", date: "Recent", color: "#20B85A" },
//               { name: "Transaction", date: "Recent", color: "#F5AE22" },
//             ].map((item) => (
//               <div
//                 key={item.name}
//                 className="mt-2 flex items-center gap-2 rounded-lg border border-[#E5EDF7] bg-white p-2"
//               >
//                 <div
//                   className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
//                   style={{
//                     backgroundColor: `${item.color}15`,
//                     color: item.color,
//                   }}
//                 >
//                   <ReceiptText size={12} />
//                 </div>
//                 <div className="min-w-0">
//                   <p className="truncate text-[8px] font-semibold text-[#0B132B] sm:text-[9px]">
//                     {item.name}
//                   </p>
//                   <p className="text-[7px] text-slate-400">{item.date}</p>
//                 </div>
//               </div>
//             ))}

//             <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-[#0878F9] py-2 text-[9px] font-semibold text-white">
//               <Smartphone size={12} />
//               Mobile experience
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating project callout */}
//       <div className="absolute -left-1 bottom-10 z-30 hidden items-center gap-2 rounded-xl border border-[#DCE7F5] bg-white px-3 py-2.5 shadow-lg shadow-[#0878F9]/10 sm:flex">
//         <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9FBF2] text-[#16834D]">
//           <Check size={17} />
//         </div>
//         <div>
//           <p className="text-[10px] font-bold text-[#0B132B]">
//             Custom-built solutions
//           </p>
//           <p className="mt-0.5 text-[9px] text-slate-500">
//             Designed around your needs
//           </p>
//         </div>
//       </div>

//       {/* Brand accent dots */}
//       <div className="absolute right-[16%] top-4 h-3 w-3 rounded-full bg-[#11C5E8] ring-4 ring-white" />
//       <div className="absolute bottom-0 left-[25%] h-2.5 w-2.5 rounded-full bg-[#20B85A] ring-4 ring-white" />
//     </div>
//   );
// }

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[760px] px-2 pb-20 pt-5 sm:px-4 sm:pb-24 sm:pt-8 lg:py-10">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-gradient-to-br from-[#0878F9]/15 via-[#11C5E8]/20 to-[#20B85A]/10 blur-3xl" />

      {/* Decorative rings */}
      <div className="pointer-events-none absolute left-[12%] top-[7%] h-[82%] w-[82%] rounded-full border border-[#C9E3FF]/60" />
      <div className="pointer-events-none absolute left-[17%] top-[12%] h-[72%] w-[72%] rounded-full border border-dashed border-[#D6E9FC]" />

      {/* Main dashboard — large and positioned at the top */}
      <div className="relative z-10 ml-[10%] -translate-y-5 w-[86%] overflow-hidden rounded-xl border border-[#D5E5F8] bg-white shadow-2xl shadow-[#0878F9]/15 sm:ml-[13%] sm:-translate-y-8 sm:w-[84%]">

        {/* Browser header */}
        <div className="flex h-8 items-center gap-1.5 border-b border-[#E5EDF7] bg-white px-2.5 sm:h-11 sm:gap-2 sm:px-4">
          <span className="h-2 w-2 rounded-full bg-[#F04438] sm:h-3 sm:w-3" />
          <span className="h-2 w-2 rounded-full bg-[#FFC928] sm:h-3 sm:w-3" />
          <span className="h-2 w-2 rounded-full bg-[#20B85A] sm:h-3 sm:w-3" />

          <div className="ml-2 flex h-5 min-w-0 flex-1 items-center rounded-md bg-[#F3F7FD] px-2 sm:ml-4 sm:h-7 sm:px-3">
            <span className="truncate text-[8px] text-slate-500 sm:text-[10px]">
              SmartReceipt / Dashboard
            </span>
          </div>

          <Monitor className="h-3.5 w-3.5 shrink-0 text-[#0878F9] sm:h-4 sm:w-4" />
        </div>

        <img
          src={smartReceiptDashboard}
          alt="SmartReceipt dashboard showing sales, billing and business overview"
          className="block h-auto w-full"
          loading="eager"
          draggable={false}
        />
      </div>

      {/* Laptop base */}
      <div className="relative z-10 ml-[14%] h-1.5 w-[80%] rounded-b-lg bg-gradient-to-b from-[#C9D8E8] to-[#EDF3FA] shadow-sm sm:ml-[16%] sm:h-2 sm:w-[79%]" />

      {/* Bills & Transactions — foreground, on the left */}
      <div className="absolute left-[-2%] top-[90%] z-30 w-[58%] overflow-hidden rounded-2xl border border-[#CFE2FA] bg-white p-2 shadow-2xl shadow-[#0878F9]/15 transition-transform duration-300 hover:-translate-y-1 sm:left-[-1%] sm:top-[39%] sm:w-[59%] sm:p-3">

        <div className="flex items-center justify-between gap-2 px-1 py-1.5 sm:px-2 sm:py-2">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E7F3FF] text-[#0878F9] sm:h-10 sm:w-10 sm:rounded-xl">
              <ReceiptText className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[10px] font-bold text-[#0B132B] sm:text-sm">
                Bills & Transactions
              </p>
              <p className="text-[9px] text-slate-500 sm:text-[11px]">
                Payment history
              </p>
            </div>
          </div>

          <ArrowUpRight className="h-4 w-4 shrink-0 text-[#0878F9] sm:h-5 sm:w-5" />
        </div>

        <img
          src={smartReceiptBills}
          alt="SmartReceipt bills list showing payment methods, amounts and statuses"
          className="block h-auto w-full rounded-lg border border-[#E5EDF7]"
          loading="eager"
          draggable={false}
        />
      </div>

      {/* New Bill — foreground, on the right and lower */}
      <div className="absolute right-[-1%] top-[59%] z-20 w-[53%] overflow-hidden rounded-2xl border border-[#CFE2FA] bg-white p-2 shadow-2xl shadow-[#0878F9]/15 transition-transform duration-300 hover:-translate-y-1 sm:right-[-1%] sm:top-[57%] sm:w-[54%] sm:p-3">

        <div className="flex items-center gap-2 px-1 py-1.5 sm:gap-3 sm:px-2 sm:py-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E7F3FF] text-[#0878F9] sm:h-10 sm:w-10 sm:rounded-xl">
            <ReceiptText className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[10px] font-bold text-[#0B132B] sm:text-sm">
              New Bill
            </p>
            <p className="text-[9px] text-slate-500 sm:text-[11px]">
              Billing workflow
            </p>
          </div>
        </div>

        <img
          src={smartReceiptNewBill}
          alt="SmartReceipt billing screen showing menu items and current bill"
          className="block h-auto w-full rounded-lg border border-[#E5EDF7]"
          loading="eager"
          draggable={false}
        />
      </div>

      {/* Business-ready badge */}
      {/* <div className="absolute bottom-[-3%] left-[2%] z-40 flex items-center gap-2 rounded-xl border border-[#DCE7F5] bg-white px-3 py-2 shadow-lg sm:bottom-[-2%] sm:left-[3%] sm:px-4 sm:py-1">

        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E9FBF2] text-[#16834D] sm:h-10 sm:w-10 sm:rounded-xl">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>

        <div>
          <p className="text-[9px] font-bold text-[#0B132B] sm:text-xs">
            Business-ready software
          </p>
          <p className="mt-0.5 text-[8px] text-slate-500 sm:text-[10px]">
            Designed around your needs
          </p>
        </div>
      </div> */}

      {/* Decorative brand accents */}
      <div className="absolute right-[9%] top-[5%] z-20 h-3 w-3 rounded-full bg-[#11C5E8] ring-4 ring-white shadow-sm sm:h-4 sm:w-4" />
      <div className="absolute bottom-[9%] right-[9%] z-20 h-2.5 w-2.5 rounded-full bg-[#20B85A] ring-4 ring-white shadow-sm" />

    </div>
  );
}

export function ManufacturingVisual() {
  const [activeTab, setActiveTab] = useState<"floor" | "twin">("floor");

  return (
    <div className="rounded-xl border border-[#DCE7F5] bg-white p-5 shadow-lg shadow-[#0878F9]/5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EDF3FA] pb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0878F9]">
            Production Operations
          </span>
          <span className="text-[#DCE7F5]">/</span>
          <span className="text-xs text-[#5A6D82]">Connected Systems</span>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg border border-[#DCE7F5] bg-[#F5F9FF] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("floor")}
            className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${activeTab === "floor"
              ? "bg-white text-[#0878F9] font-semibold shadow-xs"
              : "text-[#5A6D82] hover:text-[#0B132B]"
              }`}
          >
            Shop Floor View
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("twin")}
            className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${activeTab === "twin"
              ? "bg-white text-[#0878F9] font-semibold shadow-xs"
              : "text-[#5A6D82] hover:text-[#0B132B]"
              }`}
          >
            Digital Twin
          </button>
        </div>
      </div>

      <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#DCE7F5] bg-[#F5F9FF]">
        <img
          src={activeTab === "floor" ? SHOP_FLOOR_IMAGE : DIGITAL_TWIN_IMAGE}
          alt={
            activeTab === "floor"
              ? "Automated machine shop floor with precision robotics"
              : "Manufacturing digital twin screen showing telemetry"
          }
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-opacity duration-300"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/40 to-transparent p-4 text-white">
          <p className="font-mono text-xs font-semibold">
            {activeTab === "floor"
              ? "Automated CNC Machining & Robotic Workstation Coordination"
              : "Real-time Telemetry & Assembly Cell Tracking"}
          </p>
          <p className="mt-1 text-xs text-white/80">
            Custom operational software designed to integrate machinery with management decisions.
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-2.5">
          <span className="block font-mono text-[10px] uppercase text-[#5A6D82]">Throughput</span>
          <span className="font-mono text-xs font-semibold text-[#0B132B] tabular-nums">Real-Time Sync</span>
        </div>
        <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-2.5">
          <span className="block font-mono text-[10px] uppercase text-[#5A6D82]">Inventory</span>
          <span className="font-mono text-xs font-semibold text-[#0B132B] tabular-nums">Lot-Level Trace</span>
        </div>
        <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-2.5">
          <span className="block font-mono text-[10px] uppercase text-[#5A6D82]">Quality</span>
          <span className="font-mono text-xs font-semibold text-[#20B85A] tabular-nums">Zero-Loss Ledger</span>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteFrame>
      <main>
        {/* Hero Section */}
        <section className="hero-grid-pattern relative overflow-hidden border-b border-[#DCE7F5] py-16 md:py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              {/* Company Positioning Label */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE7F5] bg-white px-3.5 py-1 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-[#0878F9]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#0878F9]">
                  {site.positioning}
                </span>
                <span className="text-[#DCE7F5]">·</span>
                <span className="font-mono text-xs text-[#5A6D82]">WEB · MOBILE · SOFTWARE</span>
              </div>

              {/* Large Headline with Blue-to-Cyan Gradient */}
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B132B] sm:text-5xl md:text-6xl">
                Your Business Idea.{" "}
                <span className="bg-gradient-to-r from-[#0878F9] via-[#0EA5E9] to-[#11C5E8] bg-clip-text text-transparent">
                  Our Technology.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5A6D82] sm:text-lg">
                From websites and mobile apps to powerful business software, we turn your ideas into digital solutions built around your needs.
              </p>

              {/* Two CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/contact">
                    Discuss Your Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/solutions">Explore Our Solutions</Link>
                </Button>
              </div>

              {/* Three Concise Capability Highlights */}
              <div className="mt-10 grid grid-cols-1 gap-3 pt-6 border-t border-[#DCE7F5] sm:grid-cols-3">
                <div className="flex items-center gap-2 text-xs font-medium text-[#0B132B]">
                  <CheckCircle2 className="h-4 w-4 text-[#0878F9] shrink-0" />
                  <span>Websites & Web Apps</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#0B132B]">
                  <CheckCircle2 className="h-4 w-4 text-[#11C5E8] shrink-0" />
                  <span>Mobile Applications</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#0B132B]">
                  <CheckCircle2 className="h-4 w-4 text-[#20B85A] shrink-0" />
                  <span>Custom Business Software</span>
                </div>
              </div>
            </div>

            {/* Right: Large, elegant visual inspired by multicolor K logo */}
            <div className="lg:pl-4">
              <HeroVisual />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 bg-[#FAFCFF]">
          {/* Dynamic Keyframes for Continuous Scrolling Gradient */}
          <style>{`
        @keyframes scrollKodeblinkGradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-kodeblink-scroll {
          background-size: 200% auto;
          animation: scrollKodeblinkGradient 5s linear infinite;
        }
      `}</style>

          {/* Subtle Background Grid & Ambient Lighting */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)]"
            style={{
              backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0072FF]/10 via-[#00D6C6]/10 to-[#F9B208]/10 blur-3xl" />

          <div className="section-shell relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0072FF]/20 bg-[#0072FF]/5 px-3 py-1 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#0072FF] to-[#00D6C6] animate-pulse" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0468D7]">
                  Our Services
                </p>
              </div>

              {/* Continuous scrolling multi-color text */}
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
                <span className="animate-kodeblink-scroll bg-gradient-to-r from-[#0072FF] via-[#00D6C6] via-[#0AB64F] via-[#F9B208] via-[#EA3323] to-[#0072FF] bg-clip-text text-transparent">
                  What We Build for Your Business
                </span>
              </h2>

              <p className="mt-3 text-base sm:text-lg text-[#5A6D82]">
                Comprehensive digital development services covering web, mobile, and custom enterprise tools.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Card 1: Custom Software -> Blue to Cyan */}
              <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#0072FF]/60 hover:shadow-xl hover:shadow-[#0072FF]/15">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0072FF] to-[#00D6C6] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-[#0072FF]/20 to-[#00D6C6]/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0072FF]/10 text-[#0468D7] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0072FF] group-hover:to-[#00D6C6] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#0072FF]/30">
                    <Cpu className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#071522] transition-colors duration-300 group-hover:text-[#0468D7]">
                    Custom Business Software
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                    Purpose-built business platforms, ERP, CRM, inventory trackers, and internal operational tools engineered specifically around your team's unique workflows.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#5A6D82] transition-colors duration-300 group-hover:text-[#0468D7]"
                  >
                    View Software Services{" "}
                    <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </article>

              {/* Card 2: Web Design -> Gold to Red */}
              <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#EA3323]/50 hover:shadow-xl hover:shadow-[#EA3323]/15">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#F9B208] via-[#FF6B18] to-[#EA3323] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-[#F9B208]/25 to-[#EA3323]/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F9B208]/15 text-[#E0631A] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#F9B208] group-hover:to-[#EA3323] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#EA3323]/30">
                    <Globe className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#071522] transition-colors duration-300 group-hover:text-[#EA3323]">
                    Web Design & Applications
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                    High-converting corporate websites, client dashboards, and interactive web applications with modern typography, fast load times, and accessible design.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#5A6D82] transition-colors duration-300 group-hover:text-[#EA3323]"
                  >
                    View Web Capabilities{" "}
                    <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </article>

              {/* Card 3: Mobile Apps -> Emerald Green to Aqua */}
              <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#0AB64F]/60 hover:shadow-xl hover:shadow-[#0AB64F]/15">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0AB64F] to-[#00D6C6] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-[#0AB64F]/20 to-[#00D6C6]/25 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0AB64F]/10 text-[#0AB64F] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0AB64F] group-hover:to-[#00D6C6] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#0AB64F]/30">
                    <Smartphone className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#071522] transition-colors duration-300 group-hover:text-[#0AB64F]">
                    Mobile Apps (Android Focused)
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                    Intuitive mobile applications for tablets and handheld devices, empowering field staff, warehouse workers, and on-the-go teams with real-time tools.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#5A6D82] transition-colors duration-300 group-hover:text-[#0AB64F]"
                  >
                    View Mobile Services{" "}
                    <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Prominent Software Products Section - Stack -> Split -> Showcase */}
        {(() => {
          const sectionRef = React.useRef<HTMLElement>(null);
          const [animationStage, setAnimationStage] = React.useState<"hidden" | "stacked" | "split" | "settled">("hidden");
          const [isDesktop, setIsDesktop] = React.useState(false);

          React.useEffect(() => {
            const checkViewport = () => setIsDesktop(window.innerWidth >= 768);
            checkViewport();
            window.addEventListener("resize", checkViewport);
            return () => window.removeEventListener("resize", checkViewport);
          }, []);

          React.useEffect(() => {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReducedMotion) {
              setAnimationStage("settled");
              return;
            }

            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  // 1. Initial State: Deck stacked together in center
                  setAnimationStage("stacked");

                  // 2. Split Animation: Smoothly fan out to 3 columns
                  const splitTimer = setTimeout(() => {
                    setAnimationStage("split");
                  }, 650);

                  // 3. Settled State: Unlock interactive hover states cleanly
                  const settleTimer = setTimeout(() => {
                    setAnimationStage("settled");
                  }, 1700);

                  observer.disconnect();
                  return () => {
                    clearTimeout(splitTimer);
                    clearTimeout(settleTimer);
                  };
                }
              },
              { threshold: 0.25, rootMargin: "0px 0px -40px 0px" }
            );

            if (sectionRef.current) {
              observer.observe(sectionRef.current);
            }

            return () => observer.disconnect();
          }, []);

          const getCardTransformStyle = (index: number): React.CSSProperties => {
            if (!isDesktop || animationStage === "settled") return {};

            if (animationStage === "hidden") {
              return {
                opacity: 0,
                transform: "translate3d(0, 40px, -60px) scale(0.92)",
              };
            }

            if (animationStage === "stacked") {
              if (index === 0) {
                // Front card: SmartReceipt
                return {
                  opacity: 1,
                  transform: "translate3d(calc(100% + 1.5rem), -8px, 40px) rotate(-3.5deg) scale(1.02)",
                  zIndex: 30,
                  boxShadow: "0 25px 45px -15px rgba(8, 120, 249, 0.22), 0 10px 20px -10px rgba(11, 19, 43, 0.12)",
                };
              }
              if (index === 1) {
                // Middle card: Payroll Management
                return {
                  opacity: 0.95,
                  transform: "translate3d(0, 4px, 10px) rotate(1.5deg) scale(0.98)",
                  zIndex: 20,
                  boxShadow: "0 20px 35px -15px rgba(17, 197, 232, 0.18)",
                };
              }
              if (index === 2) {
                // Back card: Daily Task Tracker
                return {
                  opacity: 0.9,
                  transform: "translate3d(calc(-100% - 1.5rem), 16px, -20px) rotate(5.5deg) scale(0.94)",
                  zIndex: 10,
                  boxShadow: "0 15px 30px -10px rgba(32, 184, 90, 0.15)",
                };
              }
            }

            if (animationStage === "split") {
              return {
                opacity: 1,
                transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
                zIndex: 10,
                transition: "all 950ms cubic-bezier(0.18, 0.9, 0.22, 1.05)",
              };
            }

            return {};
          };

          return (
            <section
              ref={sectionRef}
              className="relative overflow-hidden bg-[#F5F9FF] border-y border-[#DCE7F5] py-20 md:py-28"
            >
              {/* Continuous scrolling multi-color logo gradient keyframes */}
              <style>{`
                @keyframes scrollKodeblinkGradient {
                  0% { background-position: 0% 50%; }
                  100% { background-position: 200% 50%; }
                }
                .animate-kodeblink-scroll {
                  background-size: 200% auto;
                  animation: scrollKodeblinkGradient 5.5s linear infinite;
                }
              `}</style>

              {/* Subtle Background Pattern & Ambient Lighting */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_15%,#000_60%,transparent_100%)]"
                style={{
                  backgroundImage: `radial-gradient(#CBD5E1 1.2px, transparent 1.2px)`,
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-[550px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0878F9]/10 via-[#11C5E8]/10 to-[#20B85A]/10 blur-3xl" />

              <div className="section-shell relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#0878F9]/20 bg-[#0878F9]/5 px-3 py-1 shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0878F9] animate-pulse" />
                    <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                      Software Products
                    </p>
                  </div>

                  <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#0B132B] md:text-5xl">
                    <span className="animate-kodeblink-scroll bg-gradient-to-r from-[#0878F9] via-[#11C5E8] via-[#20B85A] via-[#F9B208] via-[#EA3323] to-[#0878F9] bg-clip-text text-transparent">
                      Ready-To-Deploy Product Solutions
                    </span>
                  </h2>

                  <p className="mt-3 text-base sm:text-lg text-[#5A6D82]">
                    Explore our focused business applications designed to solve real operational bottlenecks.
                  </p>
                </div>

                {/* 3D Perspective Stage for Cards */}
                <div
                  className="mt-14 grid gap-6 md:grid-cols-3"
                  style={{ perspective: "1400px" }}
                >
                  {/* Product 1: SmartReceipt */}
                  <article
                    style={getCardTransformStyle(0)}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs transition-all duration-300 will-change-transform ${animationStage === "settled"
                      ? "hover:-translate-y-2 hover:border-[#0878F9]/60 hover:shadow-xl hover:shadow-[#0878F9]/15"
                      : ""
                      }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0878F9] to-[#11C5E8] transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-[#0878F9]/15 to-[#11C5E8]/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#EDF3FA]">
                        <div className="flex items-center gap-2 text-[#0878F9]">
                          <Receipt className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                          <span className="font-mono text-xs font-semibold uppercase">Product Direction</span>
                        </div>
                        <span className="text-xs text-[#5A6D82] font-mono">01</span>
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-[#0B132B] transition-colors duration-200 group-hover:text-[#0878F9]">
                        SmartReceipt
                      </h3>
                      <p className="mt-1 text-xs font-medium text-[#0878F9]">
                        Digital Receipt & Document Management
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                        A digital receipt management solution designed to capture, organize, and access receipt records and supplier documentation without paper clutter.
                      </p>

                      <ul className="mt-5 space-y-2 text-xs text-[#5A6D82]">
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Digital capture & organized storage
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Project & supplier categorization
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Fast search and export-ready records
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#EDF3FA]">
                      <Link
                        to="/smart-receipt"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#0878F9] hover:text-[#0668dc]"
                      >
                        <span>Explore SmartReceipt</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </article>

                  {/* Product 2: Payroll Management */}
                  <article
                    style={getCardTransformStyle(1)}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs transition-all duration-300 will-change-transform ${animationStage === "settled"
                      ? "hover:-translate-y-2 hover:border-[#11C5E8]/60 hover:shadow-xl hover:shadow-[#11C5E8]/15"
                      : ""
                      }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#11C5E8] to-[#0878F9] transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-[#11C5E8]/15 to-[#0878F9]/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#EDF3FA]">
                        <div className="flex items-center gap-2 text-[#0EA5E9]">
                          <Users2 className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                          <span className="font-mono text-xs font-semibold uppercase">Business Application</span>
                        </div>
                        <span className="text-xs text-[#5A6D82] font-mono">02</span>
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-[#0B132B] transition-colors duration-200 group-hover:text-[#0EA5E9]">
                        Payroll Management Application
                      </h3>
                      <p className="mt-1 text-xs font-medium text-[#0EA5E9]">
                        Salary & Attendance Workflows
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                        A dedicated business application focused on payroll-related workflows, salary calculations, employee deductions, and attendance verification.
                      </p>

                      <ul className="mt-5 space-y-2 text-xs text-[#5A6D82]">
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Wage & salary structure configuration
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Attendance & leave reconciliation
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Monthly salary slip generation
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#EDF3FA]">
                      <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#0878F9] hover:text-[#0668dc]"
                      >
                        <span>View Application Details</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </article>

                  {/* Product 3: Daily Task Tracker */}
                  <article
                    style={getCardTransformStyle(2)}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs transition-all duration-300 will-change-transform ${animationStage === "settled"
                      ? "hover:-translate-y-2 hover:border-[#20B85A]/60 hover:shadow-xl hover:shadow-[#20B85A]/15"
                      : ""
                      }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#20B85A] to-[#11C5E8] transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-[#20B85A]/15 to-[#11C5E8]/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#EDF3FA]">
                        <div className="flex items-center gap-2 text-[#20B85A]">
                          <CalendarCheck className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                          <span className="font-mono text-xs font-semibold uppercase">Productivity Tool</span>
                        </div>
                        <span className="text-xs text-[#5A6D82] font-mono">03</span>
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-[#0B132B] transition-colors duration-200 group-hover:text-[#20B85A]">
                        Daily Task Tracker
                      </h3>
                      <p className="mt-1 text-xs font-medium text-[#20B85A]">
                        Task Status & Team Visibility
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                        An intuitive application designed to organize daily tasks, monitor status in real time, prioritize critical work, and provide clear team visibility.
                      </p>

                      <ul className="mt-5 space-y-2 text-xs text-[#5A6D82]">
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Task assignment and priority boards
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Real-time status: To Do, Doing, Done
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Distraction-free team coordination
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#EDF3FA]">
                      <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#20B85A] hover:text-[#189b4a]"
                      >
                        <span>View Tracker Details</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          );
        })()}

        {/* Manufacturing & Custom Systems Section */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-white border-b border-[#DCE7F5]">
          {/* Subtle Industrial Dot Grid Texture & Ambient Brand Lighting */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_60%,transparent_100%)]"
            style={{
              backgroundImage: `radial-gradient(#CBD5E1 1.2px, transparent 1.2px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-[#0878F9]/10 via-[#11C5E8]/10 to-transparent blur-3xl" />

          {/* Continuous scrolling multi-color brand gradient keyframes for the title */}
          <style>{`
            @keyframes scrollKodeblinkGradient {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
            .animate-kodeblink-scroll {
              background-size: 200% auto;
              animation: scrollKodeblinkGradient 5.5s linear infinite;
            }
          `}</style>

          <div className="section-shell relative z-10 grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              {/* Pill Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0878F9]/20 bg-[#0878F9]/5 px-3 py-1 shadow-xs mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0878F9] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                  Custom Business Systems
                </span>
              </div>

              {/* High-Impact Headline with Kodeblink Scrolling Gradient */}
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0B132B] md:text-5xl leading-tight">
                Technology for{" "}
                <span className="animate-kodeblink-scroll bg-gradient-to-r from-[#0878F9] via-[#11C5E8] via-[#20B85A] via-[#F9B208] via-[#EA3323] to-[#0878F9] bg-clip-text text-transparent">
                  Modern Manufacturing.
                </span>
              </h2>

              <p className="mt-4 text-base font-medium text-[#0B132B]/90 leading-relaxed">
                Connect production, inventory, dispatch and business operations through custom software designed around your actual workflow.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                Manufacturing businesses and operational teams require software that eliminates manual paper sheets, connects shop floor machines, and provides real-time visibility. We bridge shop floor operations and executive decision-making with practical digital tools.
              </p>

              {/* Interactive Visual Feature Cards */}
              <div className="mt-8 space-y-3.5">
                {/* Feature 1: Operational Telemetry -> Blue */}
                <div className="group relative overflow-hidden flex items-start gap-3.5 rounded-xl border border-[#DCE7F5] bg-[#F5F9FF]/80 p-4.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0878F9]/60 hover:bg-white hover:shadow-lg hover:shadow-[#0878F9]/10">
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#0878F9] to-[#11C5E8] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0878F9]/10 text-[#0878F9] transition-all duration-300 group-hover:bg-[#0878F9] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#0878F9]/25">
                    <Gauge className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B132B] transition-colors duration-200 group-hover:text-[#0878F9]">
                      Operational Telemetry & Monitoring
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#5A6D82]">
                      Actionable visibility across machine throughput, station availability, and shift cycle times.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Inventory Traceability -> Cyan */}
                <div className="group relative overflow-hidden flex items-start gap-3.5 rounded-xl border border-[#DCE7F5] bg-[#F5F9FF]/80 p-4.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#11C5E8]/60 hover:bg-white hover:shadow-lg hover:shadow-[#11C5E8]/15">
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#11C5E8] to-[#0878F9] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#11C5E8]/15 text-[#0EA5E9] transition-all duration-300 group-hover:bg-[#11C5E8] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#11C5E8]/25">
                    <Boxes className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B132B] transition-colors duration-200 group-hover:text-[#0EA5E9]">
                      Inventory & Material Traceability
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#5A6D82]">
                      Lot-level tracking from raw material intake through bay assembly and finished delivery.
                    </p>
                  </div>
                </div>

                {/* Feature 3: Workflow Automation -> Green */}
                <div className="group relative overflow-hidden flex items-start gap-3.5 rounded-xl border border-[#DCE7F5] bg-[#F5F9FF]/80 p-4.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#20B85A]/60 hover:bg-white hover:shadow-lg hover:shadow-[#20B85A]/15">
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#20B85A] to-[#11C5E8] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#20B85A]/10 text-[#20B85A] transition-all duration-300 group-hover:bg-[#20B85A] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#20B85A]/25">
                    <Workflow className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B132B] transition-colors duration-200 group-hover:text-[#20B85A]">
                      Workflow & Dispatch Automation
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#5A6D82]">
                      Balance shift work orders against worker capacity, tooling availability, and client delivery deadlines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild variant="link-mint" className="group text-sm font-bold text-[#0878F9] hover:text-[#0668dc]">
                  <Link to="/solutions" className="inline-flex items-center gap-1.5">
                    <span>Explore Manufacturing Solutions</span>
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Visual Container with ambient depth */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-[#0878F9]/10 via-[#11C5E8]/5 to-transparent blur-2xl" />
              <div className="transition-transform duration-500 hover:scale-[1.01]">
                <ManufacturingVisual />
              </div>
            </div>
          </div>
        </section>

        {/* Industries & Business Use Cases Supported */}
        {/* Manufacturing & Custom Systems Section - Interactive Industry Showcase */}
        {(() => {
          const [activeTab, setActiveTab] = React.useState(0);

          const industries = [
            {
              id: "01",
              title: "Manufacturing & Fabrication",
              subtitle: "Shop floor telemetry, machine scheduling, batch inventory, and quality inspection consoles.",
              focusLabel: "FOCUS INDUSTRY",
              heading: "Manufacturing & Fabrication",
              description:
                "Custom software solutions to connect your production, inventory, quality and dispatch operations — all in one unified system. Get real-time visibility, reduce manual work and make faster, data-driven decisions.",
              bulletPoints: [
                "Real-time production monitoring",
                "Machine-wise performance tracking",
                "Inventory & material traceability",
                "Work order and dispatch management",
              ],
              ctaText: "Discuss Your Manufacturing Project",
              ctaLink: "/contact",
            },
            {
              id: "02",
              title: "Wholesale & Distribution",
              subtitle: "Multi-warehouse stock tracking, supplier order validation, and automated logistics handoffs.",
              focusLabel: "DISTRIBUTION SUITE",
              heading: "Wholesale & Distribution",
              description:
                "Streamline multi-depot inventory, track supplier PO lifecycles, and automate dispatch fulfillment with live courier integrations and automated packing slips.",
              bulletPoints: [
                "Multi-warehouse stock sync",
                "Automated re-order triggers",
                "Batch barcode & lot verification",
                "Carrier integration & routing",
                "Live client order portals",
              ],
              ctaText: "Discuss Distribution Solutions",
              ctaLink: "/contact",
            },
            {
              id: "03",
              title: "Professional & Corporate Services",
              subtitle: "Client portals, workflow automation, custom reporting tools, and secure document management.",
              focusLabel: "ENTERPRISE WORKFLOWS",
              heading: "Professional & Corporate Services",
              description:
                "Modern internal operational platforms, billing reconciliation tools, client onboarding portals, and automated compliance pipelines tailored to your firm.",
              bulletPoints: [
                "Client dashboard & document exchange",
                "Billing & milestone trackers",
                "Cross-department task routing",
                "Audit logs & role-based security",
                "Custom analytics reporting",
              ],
              ctaText: "Discuss Corporate Platforms",
              ctaLink: "/contact",
            },
            {
              id: "04",
              title: "Contractors & Field Operations",
              subtitle: "Mobile task tracking, job site dispatching, material logs, and worker status reporting.",
              focusLabel: "MOBILE & FIELD TECH",
              heading: "Contractors & Field Operations",
              description:
                "Equip job site managers, technicians, and warehouse workers with offline-capable handheld apps for work orders, time-stamped inspection photos, and material usage.",
              bulletPoints: [
                "Mobile work orders (iOS & Android)",
                "GPS-tagged job inspections",
                "On-site material & equipment logs",
                "Digital signature & photo uploads",
                "Instant office-to-field sync",
              ],
              ctaText: "Discuss Field Software",
              ctaLink: "/contact",
            },
          ];

          const current = industries[activeTab];

          return (
            <section className="relative overflow-hidden bg-[#FAFCFF] py-20 md:py-28 border-b border-[#DCE7F5]">
              {/* Subtle Tech Grid Pattern */}
              <div
                className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_15%,#000_60%,transparent_100%)]"
                style={{
                  backgroundImage: `radial-gradient(#CBD5E1 1.2px, transparent 1.2px)`,
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Shimmer text keyframes */}
              <style>{`
                @keyframes scrollKodeblinkGradient {
                  0% { background-position: 0% 50%; }
                  100% { background-position: 200% 50%; }
                }
                .animate-kodeblink-scroll {
                  background-size: 200% auto;
                  animation: scrollKodeblinkGradient 5.5s linear infinite;
                }
              `}</style>

              <div className="section-shell relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header with Factory Image Banner on Right */}
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] font-semibold text-[#0878F9]">
                      Who We Serve
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl lg:text-5xl leading-tight">
                      Technology for the Industries{" "}
                      <span className="block animate-kodeblink-scroll bg-gradient-to-r from-[#0878F9] via-[#11C5E8] via-[#20B85A] via-[#F9B208] via-[#EA3323] to-[#0878F9] bg-clip-text text-transparent">
                        That Keep Business Moving.
                      </span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-[#5A6D82] leading-relaxed max-w-2xl">
                      We build custom software solutions for diverse industries, helping businesses streamline operations, empower teams, and achieve sustainable growth.
                    </p>
                  </div>

                  {/* Header Industrial Imagery Banner */}
                  <div className="relative lg:col-span-5 hidden lg:block">
                    <div className="relative overflow-hidden rounded-2xl border border-[#DCE7F5] shadow-lg">
                      <img
                        src="/src/assets/images/smartreceipt-new-bill.png"
                        alt="Modern Industrial Automation"
                        className="h-44 w-full object-cover object-center brightness-95"
                        onError={(e) => {
                          // Fallback to alternative image if path differs
                          e.currentTarget.src = "/src/assets/images/hero_manufacturing_tech_1792770007204.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/60 via-transparent to-transparent" />

                      {/* Floating pill over image */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/95 px-3.5 py-2 backdrop-blur-md shadow-md">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0878F9]/10 text-[#0878F9]">
                          <Activity children={undefined} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0B132B]">Digitize Operations</div>
                          <div className="text-[11px] text-[#5A6D82]">Drive Sustainable Growth</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Interactive Showcase Layout */}
                <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
                  {/* Left Column: 4 Selectable Industry Cards */}
                  <div className="lg:col-span-4 space-y-3.5">
                    {industries.map((item, idx) => {
                      const isSelected = activeTab === idx;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveTab(idx)}
                          className={`w-full text-left rounded-2xl border p-5 transition-all duration-300 flex items-center justify-between group ${isSelected
                            ? "bg-white border-[#0878F9] shadow-lg shadow-[#0878F9]/10 ring-1 ring-[#0878F9]/50 -translate-y-0.5"
                            : "bg-white/80 border-[#DCE7F5] hover:bg-white hover:border-[#0878F9]/40 hover:shadow-xs"
                            }`}
                        >
                          <div className="flex items-start gap-4 pr-3">
                            {/* Icon / Number Box */}
                            <div
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${isSelected
                                ? "bg-[#0878F9] text-white shadow-sm"
                                : "bg-[#0878F9]/10 text-[#0878F9] group-hover:bg-[#0878F9]/15"
                                }`}
                            >
                              {idx === 0 && <Gauge className="h-5 w-5" />}
                              {idx === 1 && <Boxes className="h-5 w-5" />}
                              {idx === 2 && <Users2 className="h-5 w-5" />}
                              {idx === 3 && <HardHat className="h-5 w-5" />}
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                {/* <span className="font-mono text-xs font-semibold text-[#5A6D82]">
                                  {item.id}
                                </span> */}
                                <h3 className="text-base font-bold text-[#0B132B]">
                                  {item.title}
                                </h3>
                              </div>
                              <p className="mt-1 text-xs text-[#5A6D82] line-clamp-2 leading-relaxed">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>

                          {/* Arrow circle indicator */}
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isSelected
                              ? "bg-[#0878F9] text-white"
                              : "bg-[#EDF3FA] text-[#5A6D82] group-hover:bg-[#0878F9]/10 group-hover:text-[#0878F9]"
                              }`}
                          >
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column: Detailed Showcase Screen + Simulated Dashboard UI */}
                  <div className="lg:col-span-8 rounded-3xl border border-[#DCE7F5] bg-white p-7 sm:p-9 shadow-md">
                    <div className="grid gap-8 xl:grid-cols-12 xl:items-center">
                      {/* Narrative / Features */}
                      <div className="xl:col-span-5">
                        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0878F9]">
                          {current.focusLabel}
                        </span>
                        <h3 className="mt-2 text-2xl font-extrabold text-[#0B132B]">
                          {current.heading}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                          {current.description}
                        </p>

                        {/* Green Checkmarks */}
                        <ul className="mt-6 space-y-2.5">
                          {current.bulletPoints.map((point, index) => (
                            <li key={index} className="flex items-center gap-2.5 text-xs font-medium text-[#0B132B]">
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#20B85A]/15 text-[#20B85A]">
                                <Check className="h-3 w-3 stroke-[3]" />
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Mockup Dashboard UI Container */}
                      <div className="relative xl:col-span-7">
                        {/* Floating Top Badge (+32% Production Visibility) */}
                        <div className="absolute -top-5 -right-3 z-20 flex items-center gap-3 rounded-2xl border border-[#DCE7F5] bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0878F9]/10 text-[#0878F9]">
                            <BarChart3 className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-[11px] font-semibold text-[#5A6D82]">Production visibility</div>
                            <div className="flex items-center gap-1.5 text-base font-extrabold text-[#0B132B]">
                              <span>+32%</span>
                              <span className="flex items-center text-[11px] font-bold text-[#20B85A]">
                                <TrendingUp className="h-3 w-3" /> Higher efficiency
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Laptop/Console Shell */}
                        <div className="overflow-hidden rounded-2xl border border-[#DCE7F5] bg-[#0B132B] shadow-2xl">
                          {/* Inner Screen */}
                          <div className="bg-white p-4">
                            {/* Dashboard Sub-header */}
                            <div className="flex items-center justify-between border-b border-[#EDF3FA] pb-3 text-xs">
                              <div className="flex items-center gap-2">
                                <div className="h-5 w-5 rounded-md bg-[#0878F9] text-white flex items-center justify-center text-[10px] font-bold">
                                  K
                                </div>
                                <span className="font-bold text-[#0B132B]">Manufacturing Dashboard</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-600">
                                  Line #04 Active
                                </span>
                                <span className="h-2 w-2 rounded-full bg-[#20B85A]" />
                              </div>
                            </div>

                            {/* 4 Metric Cards */}
                            <div className="mt-3 grid grid-cols-4 gap-2 text-left">
                              <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-2">
                                <div className="text-[9px] font-medium text-[#5A6D82]">Total Output</div>
                                <div className="text-sm font-bold text-[#0B132B]">1,248</div>
                                <div className="text-[9px] text-[#20B85A] font-semibold">+12% vs last wk</div>
                              </div>
                              <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-2">
                                <div className="text-[9px] font-medium text-[#5A6D82]">Machine Uptime</div>
                                <div className="text-sm font-bold text-[#0B132B]">92.5%</div>
                                <div className="text-[9px] text-[#20B85A] font-semibold">+2.4%</div>
                              </div>
                              <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-2">
                                <div className="text-[9px] font-medium text-[#5A6D82]">Work Orders</div>
                                <div className="text-sm font-bold text-[#0B132B]">28</div>
                                <div className="text-[9px] text-[#0878F9] font-semibold">+4 new today</div>
                              </div>
                              <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-2">
                                <div className="text-[9px] font-medium text-[#5A6D82]">Inventory Items</div>
                                <div className="text-sm font-bold text-[#0B132B]">856</div>
                                <div className="text-[9px] text-[#20B85A] font-semibold">+98% in stock</div>
                              </div>
                            </div>

                            {/* Chart & Machine Status Row */}
                            <div className="mt-3 grid grid-cols-12 gap-3 text-xs">
                              {/* Left Simulated Trend Curve */}
                              <div className="col-span-7 rounded-xl border border-[#EDF3FA] p-3">
                                <div className="flex items-center justify-between text-[11px] text-[#5A6D82]">
                                  <span className="font-semibold text-[#0B132B]">Production Overview</span>
                                  <span className="text-[10px]">Last 7 Days</span>
                                </div>
                                <div className="mt-3 h-20 w-full flex items-end gap-1.5 pt-2">
                                  {[40, 55, 48, 70, 85, 92, 98].map((val, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                      <div
                                        className="w-full rounded-t-md bg-gradient-to-t from-[#0878F9] to-[#11C5E8]"
                                        style={{ height: `${val}%` }}
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Right Live Machine List */}
                              <div className="col-span-5 rounded-xl border border-[#EDF3FA] p-2.5 space-y-1.5">
                                <div className="text-[11px] font-bold text-[#0B132B] mb-1">Machine Status</div>
                                <div className="flex items-center justify-between text-[10px] bg-slate-50 p-1.5 rounded-md">
                                  <span>CNC Milling 01</span>
                                  <span className="text-[#20B85A] font-bold">92%</span>
                                </div>
                                <div className="flex items-center justify-between text-[10px] bg-slate-50 p-1.5 rounded-md">
                                  <span>Press Machine 02</span>
                                  <span className="text-[#20B85A] font-bold">88%</span>
                                </div>
                                <div className="flex items-center justify-between text-[10px] bg-slate-50 p-1.5 rounded-md">
                                  <span>Assembly Line 01</span>
                                  <span className="text-amber-500 font-bold">Idle</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom 3 Capability Pills */}
                    {/* <div className="mt-8 pt-6 border-t border-[#EDF3FA] grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 rounded-xl border border-[#EDF3FA] bg-[#FAFCFF] p-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0878F9]/10 text-[#0878F9]">
                          <Settings className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0B132B]">Production Management</div>
                          <div className="text-[11px] text-[#5A6D82]">Plan, track and optimize output</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl border border-[#EDF3FA] bg-[#FAFCFF] p-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#11C5E8]/15 text-[#0EA5E9]">
                          <Boxes className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0B132B]">Inventory Tracking</div>
                          <div className="text-[11px] text-[#5A6D82]">Complete material visibility</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl border border-[#EDF3FA] bg-[#FAFCFF] p-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#20B85A]/10 text-[#20B85A]">
                          <Workflow className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0B132B]">Workflow Automation</div>
                          <div className="text-[11px] text-[#5A6D82]">From production to dispatch</div>
                        </div>
                      </div>
                    </div> */}

                    {/* Bottom CTA Button */}
                    <div className="mt-8 flex justify-center">
                      <Link
                        to={current.ctaLink}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#0878F9] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#0878F9]/25 transition-all duration-200 hover:bg-[#0668dc] hover:shadow-lg hover:shadow-[#0878F9]/30 hover:-translate-y-0.5"
                      >
                        <span>{current.ctaText}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* Development Process / Methodology Stepper Section */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-white border-b border-[#DCE7F5]">
          {/* Shimmer text keyframes for headline */}
          <style>{`
            @keyframes scrollKodeblinkGradient {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
            .animate-kodeblink-scroll {
              background-size: 200% auto;
              animation: scrollKodeblinkGradient 5.5s linear infinite;
            }
          `}</style>

          <div className="section-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            {/* Section Header — Left Aligned */}
            <div className="max-w-3xl text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0878F9]/20 bg-[#0878F9]/5 px-3.5 py-1 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0878F9] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                  How It Works
                </span>
              </div>

              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl lg:text-5xl">
                From “hello” to{" "}
                <span className="animate-kodeblink-scroll bg-gradient-to-r from-[#0878F9] via-[#11C5E8] via-[#20B85A] via-[#F9B208] via-[#EA3323] to-[#0878F9] bg-clip-text text-transparent">
                  live website
                </span>{" "}
                in 5 steps.
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#5A6D82]">
                No confusing tech talk. You’ll always know what’s happening and what’s next.
              </p>
            </div>

            {/* Stepper Timeline Bar */}
            <div className="relative mt-16 lg:mt-20">
              {/* Connecting Horizontal Line (Visible on Desktop lg+) */}
              <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-[3px] -translate-y-1/2 bg-[#E2E8F0] z-0">
                {/* Active completed segment: spans first two steps like reference */}
                <div className="h-full w-[38%] bg-gradient-to-r from-[#0878F9] via-[#0EA5E9] to-[#11C5E8]" />
              </div>

              {/* 5 Stepper Columns */}
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6 relative z-10">
                {developmentSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isCompleted = step.state === "completed";

                  return (
                    <div
                      key={idx}
                      className="group flex flex-col items-center text-center transition-all duration-300"
                    >
                      {/* Circular Icon Node */}
                      <div
                        className={`flex h-[72px] w-[72px] items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 ${isCompleted
                          ? "bg-gradient-to-tr from-[#0878F9] to-[#00A3FF] text-white shadow-lg shadow-[#0878F9]/30 ring-4 ring-white"
                          : "bg-[#EDF2F7] text-[#718096] border border-[#E2E8F0] ring-4 ring-white group-hover:border-[#0878F9]/40 group-hover:bg-[#F5F9FF] group-hover:text-[#0878F9]"
                          }`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>

                      {/* Step Number Tag */}
                      <span
                        className={`mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] ${isCompleted ? "text-[#0878F9]" : "text-[#718096]"
                          }`}
                      >
                        {step.number}
                      </span>

                      {/* Step Title */}
                      <h3 className="mt-1.5 text-lg font-extrabold tracking-tight text-[#0B132B]">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="mt-2 text-xs leading-relaxed text-[#5A6D82] max-w-[220px]">
                        {step.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive 30-Second Project Planner Section */}
        {(() => {
          // --- State for Interactive Choices ---
          const [projectType, setProjectType] = React.useState<string>("Online store");
          const [mustHaves, setMustHaves] = React.useState<string[]>(["Mobile application"]);
          const [timeline, setTimeline] = React.useState<string>("Just exploring");

          // 1. What do you need?
          const projectTypeOptions = [
            { id: "business", label: "Business website", icon: Building2 },
            { id: "store", label: "Online store", icon: ShoppingBag },
            { id: "landing", label: "Landing page", icon: Target },
            { id: "webapp", label: "Custom web app", icon: Puzzle },
            { id: "redesign", label: "Redesign my site", icon: Sparkles },
            { id: "unsure", label: "Not sure yet", icon: HelpCircle },
          ];

          // 2. Must-haves?
          const mustHaveOptions = [
            { id: "mobile", label: "Mobile application", icon: Smartphone },
            { id: "whatsapp", label: "WhatsApp button", icon: MessageCircle },
            { id: "payments", label: "Online payments", icon: CreditCard },
            { id: "bookings", label: "Bookings", icon: Calendar },
            { id: "catalogue", label: "Product catalogue", icon: FolderKanban },
            { id: "blog", label: "Blog", icon: FileText },
            { id: "admin", label: "Admin panel", icon: Wrench },
            { id: "seo", label: "SEO setup", icon: Search },
            { id: "multilang", label: "Multi-language", icon: Globe2 },
          ];

          // 3. When do you need it?
          const timelineOptions = [
            { id: "asap", label: "ASAP", icon: Flame },
            { id: "month", label: "Within a month", icon: Clock },
            { id: "exploring", label: "Just exploring", icon: Compass },
          ];

          // Toggle helper for multi-select
          const toggleMustHave = (label: string) => {
            if (mustHaves.includes(label)) {
              setMustHaves(mustHaves.filter((item) => item !== label));
            } else {
              setMustHaves([...mustHaves, label]);
            }
          };

          // Dynamic Website Power calculation
          const powerScore = Math.min(
            100,
            25 + (mustHaves.length * 12) + (projectType === "Custom web app" || projectType === "Online store" ? 25 : 15)
          );

          // WhatsApp CTA link with pre-filled message
          const whatsappMessage = encodeURIComponent(
            `Hi KODEBLINK! I built a project plan:\n- Project Type: ${projectType}\n- Must-haves: ${mustHaves.length > 0 ? mustHaves.join(", ") : "None picked"}\n- Timeline: ${timeline}\nLet's discuss!`
          );

          return (
            <section className="relative overflow-hidden bg-gradient-to-b from-[#0A335C] via-[#08284A] to-[#061D36] py-20 md:py-28 text-white">
              {/* Subtle Background Glows */}
              <div className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-[#0878F9]/20 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 right-0 -z-0 h-80 w-80 rounded-full bg-[#11C5E8]/10 blur-3xl" />

              <div className="section-shell relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto">
                  {/* Badge Pill */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0B132B] shadow-sm">
                    <Zap className="h-3.5 w-3.5 fill-[#0B132B]" />
                    30-Second Planner
                  </div>

                  {/* Main Title */}
                  <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white">
                    Build your website plan.{" "}
                    <span className="text-[#FBBF24]">Right now.</span>
                  </h2>

                  <p className="mt-3 text-base sm:text-lg text-white/80">
                    Tap what you need. We'll use it to prepare your free quote, with no forms to fill twice.
                  </p>
                </div>

                {/* Main Interactive Grid */}
                <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">

                  {/* LEFT COLUMN: Steps 1, 2, 3 Selection */}
                  <div className="lg:col-span-7 space-y-10">

                    {/* Step 1: What do you need? */}
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-[#0A335C]">
                          1
                        </span>
                        <h3 className="text-lg font-bold text-white">What do you need?</h3>
                      </div>

                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {projectTypeOptions.map((item) => {
                          const Icon = item.icon;
                          const isSelected = projectType === item.label;

                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setProjectType(item.label)}
                              className={`flex items-center gap-2.5 rounded-xl border p-3.5 text-left text-xs font-semibold transition-all duration-200 ${isSelected
                                ? "bg-white text-[#0B132B] border-white shadow-lg shadow-black/20 ring-2 ring-white scale-[1.02]"
                                : "bg-white/10 border-white/15 text-white/90 hover:bg-white/15 hover:border-white/30"
                                }`}
                            >
                              <Icon className={`h-4.5 w-4.5 shrink-0 ${isSelected ? "text-[#0878F9]" : "text-[#11C5E8]"}`} />
                              <span className="truncate">{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 2: Must-haves? */}
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-[#0A335C]">
                          2
                        </span>
                        <h3 className="text-lg font-bold text-white">
                          Must-haves?{" "}
                          <span className="text-xs font-normal text-white/60">(pick any)</span>
                        </h3>
                      </div>

                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {mustHaveOptions.map((item) => {
                          const Icon = item.icon;
                          const isSelected = mustHaves.includes(item.label);

                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => toggleMustHave(item.label)}
                              className={`flex items-center gap-2.5 rounded-xl border p-3.5 text-left text-xs font-semibold transition-all duration-200 ${isSelected
                                ? "bg-white/20 border-[#FBBF24] text-[#FBBF24] shadow-md ring-1 ring-[#FBBF24]"
                                : "bg-white/10 border-white/15 text-white/90 hover:bg-white/15 hover:border-white/30"
                                }`}
                            >
                              <Icon className="h-4.5 w-4.5 shrink-0" />
                              <span className="truncate">{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 3: When do you need it? */}
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-[#0A335C]">
                          3
                        </span>
                        <h3 className="text-lg font-bold text-white">When do you need it?</h3>
                      </div>

                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {timelineOptions.map((item) => {
                          const Icon = item.icon;
                          const isSelected = timeline === item.label;

                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setTimeline(item.label)}
                              className={`flex items-center justify-between rounded-xl border p-3.5 text-left text-xs font-semibold transition-all duration-200 ${isSelected
                                ? "bg-white text-[#0B132B] border-white shadow-lg ring-2 ring-white scale-[1.02]"
                                : "bg-white/10 border-white/15 text-white/90 hover:bg-white/15 hover:border-white/30"
                                }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <Icon className={`h-4.5 w-4.5 shrink-0 ${isSelected ? "text-[#0878F9]" : "text-[#11C5E8]"}`} />
                                <span>{item.label}</span>
                              </div>
                              {isSelected && <Check className="h-4 w-4 text-[#20B85A] stroke-[3]" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                  {/* RIGHT COLUMN: Live Plan Summary Card */}
                  <div className="lg:col-span-5">
                    <div className="sticky top-28 rounded-3xl bg-white p-6 sm:p-8 text-[#0B132B] shadow-2xl">

                      {/* Card Header */}
                      <div className="flex items-center justify-between border-b border-[#EDF3FA] pb-4">
                        <h3 className="text-xl font-extrabold text-[#0B132B]">Your website plan</h3>
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#11C5E8]/15 px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#0284C7]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0284C7] animate-pulse" />
                          LIVE
                        </span>
                      </div>

                      {/* Selected Details List */}
                      <div className="mt-5 space-y-4 text-sm">
                        <div className="flex items-start justify-between border-b border-[#EDF3FA] pb-3">
                          <span className="text-[#5A6D82]">Type</span>
                          <span className="font-bold text-[#0B132B] text-right">{projectType}</span>
                        </div>

                        <div className="flex items-start justify-between border-b border-[#EDF3FA] pb-3">
                          <span className="text-[#5A6D82]">Must-haves</span>
                          <div className="font-bold text-[#0B132B] text-right max-w-[200px]">
                            {mustHaves.length === 0 ? (
                              <span className="text-[#94A3B8] font-normal">Nothing picked yet</span>
                            ) : (
                              <span className="leading-snug">{mustHaves.join(", ")}</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-start justify-between border-b border-[#EDF3FA] pb-3">
                          <span className="text-[#5A6D82]">Timeline</span>
                          <span className="font-bold text-[#0B132B] text-right">{timeline}</span>
                        </div>
                      </div>

                      {/* Website Power Gauge */}
                      <div className="mt-6">
                        <div className="flex items-center justify-between text-xs font-bold text-[#0B132B]">
                          <span>Website power</span>
                          <span className="text-[#0878F9]">
                            {powerScore > 75 ? "Pro 🚀" : powerScore > 50 ? "Standard ⚡" : "Starter 🌱"}
                          </span>
                        </div>
                        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-[#EDF2F7]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#20B85A] via-[#11C5E8] to-[#0878F9] transition-all duration-500"
                            style={{ width: `${powerScore}%` }}
                          />
                        </div>
                      </div>

                      {/* Submit CTA Button */}
                      <div className="mt-8">
                        <a
                          href={`https://wa.me/?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6B18] to-[#EA3323] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#FF6B18]/30 transition-all duration-200 hover:from-[#e85a07] hover:to-[#d02415] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                        >
                          <span>Send my plan to KODEBLINK</span>
                          <ArrowRight className="h-4 w-4" />
                        </a>

                        <p className="mt-3 text-center text-xs text-[#5A6D82]">
                          Free. No obligation. Direct technical consultation.
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })()}

        {/* Frequently Asked Questions */}
        {/* Interactive Frequently Asked Questions Section */}
        {(() => {
          const [openFaq, setOpenFaq] = React.useState<number | null>(0); // First FAQ opened by default
          const [searchQuery, setSearchQuery] = React.useState<string>("");

          // Filter FAQs in real time based on user search input
          const filteredFaqs = faqs.filter((faq) => {
            const query = searchQuery.toLowerCase();
            return (
              faq.question.toLowerCase().includes(query) ||
              faq.answer.toLowerCase().includes(query)
            );
          });

          return (
            <section className="relative overflow-hidden py-20 md:py-28 bg-[#FAFCFF] border-b border-[#DCE7F5]">
              {/* Subtle Tech Grid Pattern & Ambient Lighting */}
              <div
                className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_15%,#000_60%,transparent_100%)]"
                style={{
                  backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0878F9]/10 via-[#11C5E8]/10 to-transparent blur-3xl" />

              {/* Looping Brand Shimmer Style */}
              <style>{`
                @keyframes scrollKodeblinkGradient {
                  0% { background-position: 0% 50%; }
                  100% { background-position: 200% 50%; }
                }
                .animate-kodeblink-scroll {
                  background-size: 200% auto;
                  animation: scrollKodeblinkGradient 5.5s linear infinite;
                }
              `}</style>

              <div className="section-shell relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Centered Section Header */}
                {/* FAQ Section Header — Left Aligned */}
                <div className="mb-10 max-w-3xl text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#0878F9]/20 bg-[#0878F9]/5 px-3.5 py-1 shadow-2xs">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0878F9]" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0878F9]">
                      Questions & Answers
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl md:text-5xl">
                    Frequently Asked{" "}
                    <span className="animate-kodeblink-scroll bg-gradient-to-r from-[#0878F9] via-[#11C5E8] via-[#20B85A] via-[#F9B208] via-[#EA3323] to-[#0878F9] bg-clip-text text-transparent">
                      Questions
                    </span>
                  </h2>

                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#5A6D82]">
                    Everything you need to know about partnering with KODEBLINK on your
                    technology project.
                  </p>
                </div>

                {/* Live Search Input Bar */}
                <div className="relative max-w-md mx-auto mb-8">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#5A6D82]/70" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions or keywords..."
                    className="w-full rounded-xl border border-[#DCE7F5] bg-white pl-10 pr-10 py-2.5 text-xs sm:text-sm text-[#0B132B] placeholder-[#5A6D82]/60 shadow-xs transition-all focus:border-[#0878F9] focus:outline-none focus:ring-2 focus:ring-[#0878F9]/15"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#5A6D82] hover:text-[#0B132B]"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Accordion List */}
                <div className="space-y-3.5">
                  {filteredFaqs.length === 0 ? (
                    <div className="text-center py-10 rounded-2xl border border-dashed border-[#DCE7F5] bg-white p-8">
                      <HelpCircle className="h-8 w-8 text-[#5A6D82]/40 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-[#0B132B]">No matching questions found</p>
                      <p className="text-xs text-[#5A6D82] mt-1">Try another search keyword or clear the search.</p>
                    </div>
                  ) : (
                    filteredFaqs.map((faq, idx) => {
                      const isOpen = openFaq === idx;

                      return (
                        <div
                          key={faq.question}
                          className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                            ? "border-[#0878F9]/50 bg-white shadow-md shadow-[#0878F9]/5"
                            : "border-[#DCE7F5] bg-white/70 hover:bg-white hover:border-[#0878F9]/30 hover:shadow-xs"
                            }`}
                        >
                          {/* Left Animated Active Indicator Bar */}
                          <div
                            className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#0878F9] to-[#11C5E8] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                              }`}
                          />

                          {/* Trigger Button */}
                          <button
                            type="button"
                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                            className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors"
                          >
                            <span
                              className={`text-sm sm:text-base font-bold pr-4 transition-colors duration-200 ${isOpen ? "text-[#0878F9]" : "text-[#0B132B] group-hover:text-[#0878F9]"
                                }`}
                            >
                              {faq.question}
                            </span>

                            {/* Circular Icon Pill with 180deg Rotation */}
                            <div
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                                ? "bg-[#0878F9] text-white rotate-180 shadow-xs shadow-[#0878F9]/30"
                                : "bg-[#EDF3FA] text-[#5A6D82] group-hover:bg-[#0878F9]/10 group-hover:text-[#0878F9]"
                                }`}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </div>
                          </button>

                          {/* Smooth CSS Grid Height Transition */}
                          <div
                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                              }`}
                          >
                            <div className="overflow-hidden">
                              <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed text-[#5A6D82] border-t border-[#F1F5F9]">
                                {faq.answer}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Bottom Quick-Action Contact Box */}
                <div className="mt-12 rounded-2xl border border-[#DCE7F5] bg-gradient-to-r from-[#F5F9FF] via-white to-[#F5F9FF] p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left shadow-xs">
                  <div className="flex items-center gap-3.5 justify-center sm:justify-start">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0878F9]/10 text-[#0878F9]">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B132B]">Have a specific project idea or question?</h4>
                      <p className="text-xs text-[#5A6D82] mt-0.5">
                        Our engineering team is ready to discuss technical possibilities.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-0">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0878F9] px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#0668dc] hover:shadow-md transition-all"
                    >
                      <span>Start a Conversation</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        <CtaSection />
      </main>
    </SiteFrame>
  );
}

export function AboutPage() {
  return (
    <SiteFrame>
      <main className="relative overflow-hidden bg-[#FAFBFD]">
        {/* Dynamic Keyframes for Continuous Scrolling Logo Gradient & Floating Orbs */}
        <style>{`
          @keyframes scrollKodeblinkGradient {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .animate-kodeblink-scroll {
            background-size: 200% auto;
            animation: scrollKodeblinkGradient 5.5s linear infinite;
          }
          @keyframes pulseGlow {
            0%, 100% { transform: scale(1); opacity: 0.4; }
            50% { transform: scale(1.08); opacity: 0.65; }
          }
          .animate-pulse-glow {
            animation: pulseGlow 8s ease-in-out infinite;
          }
        `}</style>

        {/* Ambient Top Glow Orbs */}
        <div className="pointer-events-none absolute -top-44 left-1/2 -z-10 h-96 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0878F9]/15 via-[#11C5E8]/15 to-[#20B85A]/10 blur-3xl animate-pulse-glow" />

        <PageIntro
          eyebrow="About KODEBLINK"
          title="Custom design and technology built around how your business works."
          text="KODEBLINK combines design craftsmanship, software engineering, and business understanding to deliver websites, web apps, mobile solutions, and custom business software."
        />

        {/* =========================================================================
            SECTION 1: WHO WE ARE & PHILOSOPHY
            ========================================================================= */}
        <section className="relative overflow-hidden py-24 md:py-32 border-b border-white/10 bg-gradient-to-b from-[#0A335C] via-[#08284A] to-[#061D36] text-white">
          {/* Subtle Tech Dot Grid Pattern (Original Kept) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_15%,#000_60%,transparent_100%)]"
            style={{
              backgroundImage: `radial-gradient(#93C5FD 1.2px, transparent 1.2px)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Ambient Gradient Glows in Background */}
          <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#0878F9]/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-10 h-96 w-96 rounded-full bg-[#11C5E8]/10 blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid gap-16 lg:grid-cols-12 lg:items-center">

            {/* Left Column: Brand & Value Prop */}
            <div className="lg:col-span-5">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-sky-300 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
                A Dedicated Custom <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">
                  Design Partner
                </span>
              </h2>

              <p className="mt-6 text-base font-medium leading-relaxed text-slate-200">
                KODEBLINK is a Custom Design Company. We partner with business owners, operational leaders, and growing companies to develop tailored digital solutions.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Instead of forcing rigid off-the-shelf software templates onto unique business workflows, we architect software that fits your exact processes, data structures, and team requirements. From corporate hubs to multi-department ERPs, our focus is practical utility and measurable return.
              </p>

              {/* Value Chips */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  "Zero Template Lock-in",
                  "Direct Developer Consultation",
                  "Built for Scale",
                ].map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-md transition-all duration-200 hover:border-sky-400/40 hover:bg-white/[0.08] hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Modern Glass Tech Cards */}
            <div className="lg:col-span-7 grid gap-6">

              {/* Card 1: What We Believe */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-sky-500/10">
                {/* Top Subtle Accent Gradient */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400 shadow-inner shadow-sky-500/20 transition-transform duration-300 group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-white">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase">01 // PHILOSOPHY</span>
                      <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-sky-300">
                        What We Believe
                      </h3>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Good technology should make complex work feel simpler. If a digital tool creates friction or confusion, it fails its purpose. We build software that users adopt effortlessly and teams love using.
                </p>

                {/* Feature Highlights */}
                <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" /> Zero Friction UI
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" /> Human-Centered Flow
                  </span>
                </div>
              </div>

              {/* Card 2: Our Engineering Approach */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-emerald-500/10">
                {/* Top Subtle Accent Gradient */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 shadow-inner shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-white">
                      <Layers className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">02 // METHODOLOGY</span>
                      <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-emerald-300">
                        Our Engineering Approach
                      </h3>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  We begin with deep operational discovery, outline clear scope and data flows, craft clean user interfaces, and develop robust, type-safe software that performs reliably under real workloads.
                </p>

                {/* Feature Highlights */}
                <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Type-Safe Architecture
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Deep Discovery Phase
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: VISION & MISSION
            ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F9FF] via-white to-[#F5F9FF] py-24 md:py-32 border-b border-[#DCE7F5]">
          {/* Center Light Splash */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-80 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#0878F9]/10 via-[#11C5E8]/10 to-[#20B85A]/10 blur-3xl" />

          <div className="section-shell relative z-10 grid gap-8 lg:grid-cols-2">
            {/* Vision Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-[#DCE7F5] bg-white/80 backdrop-blur-md p-8 sm:p-10 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#0878F9]/60 hover:shadow-2xl hover:shadow-[#0878F9]/15">
              <div className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r from-[#0878F9] to-[#11C5E8] transition-transform duration-300 group-hover:scale-x-100" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#0878F9]/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-center justify-between pb-5 border-b border-[#EDF3FA]">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0878F9]/20 bg-[#0878F9]/5 px-3 py-1 shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0878F9] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                    Direction
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0878F9]/10 text-[#0878F9] transition-transform duration-300 group-hover:scale-110">
                  <Compass className="h-5 w-5" />
                </div>
              </div>

              <h2 className="mt-5 font-display text-2xl sm:text-3xl font-extrabold text-[#0B132B] transition-colors duration-200 group-hover:text-[#0878F9]">
                Our Vision
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5A6D82]">
                To become a trusted technology partner for growing businesses and manufacturing organizations by creating digital products and business systems that make operations simpler, smarter, and seamlessly connected.
              </p>
            </div>

            {/* Mission Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-[#DCE7F5] bg-white/80 backdrop-blur-md p-8 sm:p-10 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#20B85A]/60 hover:shadow-2xl hover:shadow-[#20B85A]/15">
              <div className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r from-[#20B85A] to-[#11C5E8] transition-transform duration-300 group-hover:scale-x-100" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#20B85A]/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-center justify-between pb-5 border-b border-[#EDF3FA]">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#20B85A]/20 bg-[#20B85A]/5 px-3 py-1 shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#20B85A] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#20B85A]">
                    Purpose
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#20B85A]/10 text-[#20B85A] transition-transform duration-300 group-hover:scale-110">
                  <Target className="h-5 w-5" />
                </div>
              </div>

              <h2 className="mt-5 font-display text-2xl sm:text-3xl font-extrabold text-[#0B132B] transition-colors duration-200 group-hover:text-[#20B85A]">
                Our Mission
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5A6D82]">
                To combine design precision, engineering rigor, and operational insight to build practical, scalable, and meaningful digital solutions that solve real business bottlenecks.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: CORE VALUES
            ========================================================================= */}
        <section className="relative overflow-hidden section-shell py-24 md:py-28">
          <SectionTitle
            eyebrow="Foundations"
            title="Our Core Values"
            text="The foundational standards that guide every software design and client relationship."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Customer First",
                icon: Users,
                color: "#0878F9",
                bg: "bg-[#0878F9]/10 text-[#0878F9] group-hover:bg-[#0878F9] group-hover:text-white",
                border: "hover:border-[#0878F9]/60 hover:shadow-[#0878F9]/10",
              },
              {
                title: "Engineering Quality",
                icon: Cpu,
                color: "#11C5E8",
                bg: "bg-[#11C5E8]/15 text-[#0EA5E9] group-hover:bg-[#11C5E8] group-hover:text-white",
                border: "hover:border-[#11C5E8]/60 hover:shadow-[#11C5E8]/10",
              },
              {
                title: "Transparent Pricing",
                icon: Coins,
                color: "#F9B208",
                bg: "bg-[#F9B208]/15 text-[#D97706] group-hover:bg-[#F9B208] group-hover:text-white",
                border: "hover:border-[#F9B208]/60 hover:shadow-[#F9B208]/10",
              },
              {
                title: "Accountability",
                icon: ShieldCheck,
                color: "#20B85A",
                bg: "bg-[#20B85A]/10 text-[#20B85A] group-hover:bg-[#20B85A] group-hover:text-white",
                border: "hover:border-[#20B85A]/60 hover:shadow-[#20B85A]/10",
              },
              {
                title: "Continuous Support",
                icon: Headphones,
                color: "#EA3323",
                bg: "bg-[#EA3323]/10 text-[#EA3323] group-hover:bg-[#EA3323] group-hover:text-white",
                border: "hover:border-[#EA3323]/60 hover:shadow-[#EA3323]/10",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden flex flex-col justify-between rounded-2xl border border-[#DCE7F5] bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.border}`}
                >
                  <div>
                    {/* Animated Rotating Icon */}
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl mb-5 shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${item.bg}`}
                    >
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                    </div>

                    <h4 className="text-base font-bold text-[#0B132B] transition-colors duration-200">
                      {item.title}
                    </h4>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#EDF3FA] flex items-center gap-1.5 text-[11px] font-semibold text-[#5A6D82]">
                    <Check className="h-3.5 w-3.5 text-[#20B85A]" />
                    <span>Guaranteed Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <CtaSection title="Build with clarity." text="Tell us what your business needs next." />
      </main>
    </SiteFrame>
  );
}
export function ServicesPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Our Services"
          title="Full-Stack Custom Development Services"
          text="From high-converting corporate websites and web apps to mobile solutions and custom ERP/CRM software, we engineer technology around your business."
        />


        <section className="relative overflow-hidden border-y border-[#DCE7F5] bg-[#F5F9FF] py-20 md:py-28">
          {/* Subtle technical grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(#BBD5F5 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />

          <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#11C5E8]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#0878F9]/10 blur-3xl" />

          <div className="section-shell relative z-10">
            {/* Section introduction */}
            <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0878F9]/20 bg-white/80 px-3.5 py-1.5 shadow-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0878F9]" />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0878F9]">
                    What We Do
                  </span>
                </div>

                <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl lg:text-5xl">
                  Technology built around{" "}
                  <span className="bg-gradient-to-r from-[#0878F9] via-[#11C5E8] to-[#20B85A] bg-clip-text text-transparent">
                    your business.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#5A6D82] sm:text-base">
                  From your first idea to a complete business application, we
                  design and develop digital solutions around your real
                  requirements.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-[#D5E5F8] bg-white px-5 py-3 text-sm font-semibold text-[#0B132B] shadow-sm transition-all duration-300 hover:border-[#0878F9] hover:text-[#0878F9] hover:shadow-md"
              >
                Discuss Your Requirements
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Service cards */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(([title, whatLabel, what, howLabel, how], index) => (
                <article
                  key={title}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE7F5] bg-white/95 p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#87BDFB] hover:shadow-xl hover:shadow-[#0878F9]/10 sm:p-8"
                >
                  {/* Animated top accent */}
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0878F9] via-[#11C5E8] to-[#20B85A] transition-transform duration-500 group-hover:scale-x-100" />

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#11C5E8]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    {/* Card header */}
                    <div className="flex items-center justify-between border-b border-[#EDF3FA] pb-5">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0878F9]">
                        SERVICE / {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] text-[#0878F9] transition-all duration-300 group-hover:border-[#0878F9]/20 group-hover:bg-[#0878F9] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0878F9]/20">
                        {index === 0 ? (
                          <Monitor className="h-5 w-5" />
                        ) : index === 1 ? (
                          <Layers className="h-5 w-5" />
                        ) : (
                          <Workflow className="h-5 w-5" />
                        )}
                      </span>
                    </div>

                    {/* Service title */}
                    <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-[#0B132B] transition-colors duration-300 group-hover:text-[#0878F9] sm:text-2xl">
                      {title}
                    </h3>

                    {/* What we do */}
                    <div className="mt-6">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0878F9]">
                        {whatLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#5A6D82]">
                        {what}
                      </p>
                    </div>

                    {/* How we do it */}
                    <div className="mt-5 rounded-xl border border-[#E5EDF7] bg-[#F8FBFF] p-4 transition-colors duration-300 group-hover:border-[#D3E8FF] group-hover:bg-[#F2F8FF]">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0EA5E9]">
                        {howLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#5A6D82]">
                        {how}
                      </p>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="relative mt-7 border-t border-[#EDF3FA] pt-5">
                    <Link
                      to="/contact"
                      className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0878F9] transition-colors hover:text-[#0B132B]"
                    >
                      Discuss this service
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom CTA strip */}
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#D5E5F8] bg-white/90 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="text-base font-bold text-[#0B132B]">
                  Need something more specific?
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5A6D82]">
                  Let's discuss a custom solution for your workflow.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-[#0878F9] to-[#11C5E8] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[#0878F9]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>


        <CtaSection />
      </main>
    </SiteFrame>
  );
}

export function SolutionsPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Custom Solutions"
          title="Business outcomes first. Technology second."
          text="We help companies eliminate manual friction, connect operations, and replace fragmented spreadsheets with reliable custom software."
        />

        <section className="section-shell py-20 md:py-24">
          {/* 1. MASTER CONTAINER ("All under 1 card") */}
          <div className="relative rounded-3xl border border-[#DCE7F5] bg-gradient-to-b from-[#F8FAFC] to-[#EDF3FA]/40 p-4 md:p-6 shadow-xl shadow-blue-500/5">

            {/* Master Card Header Bar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#DCE7F5] pb-4 px-2">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0878F9]/10 text-[#0878F9]">
                  <Layers className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B132B]">
                    Engineered Solutions Matrix
                  </p>
                  <p className="font-mono text-[10px] text-[#5A6D82]">
                    Modular Architecture • {solutions.length} Active Blueprints
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Production Ready
                </span>
              </div>
            </div>

            {/* 2. NESTED CARDS (Separate out individually inside the grid) */}
            <div className="grid gap-6 md:grid-cols-2">
              {solutions.map(([title, problem, solution, benefit], index) => (
                <article
                  key={title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-[#DCE7F5] bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0878F9] hover:shadow-2xl hover:shadow-[#0878F9]/10"
                >
                  {/* Subtle top indicator bar on hover */}
                  <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-[#0878F9] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {/* Header Tag */}
                    <div className="flex items-center justify-between border-b border-[#EDF3FA] pb-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 items-center justify-center rounded bg-[#0878F9]/10 px-2 font-mono text-xs font-bold text-[#0878F9]">
                          0{index + 1}
                        </span>
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#5A6D82]">
                          Workflow
                        </span>
                      </div>

                      <span className="rounded-full bg-[#F5F9FF] border border-[#EDF3FA] px-2.5 py-0.5 font-mono text-[10px] uppercase text-[#5A6D82] transition-colors group-hover:text-[#0878F9] group-hover:border-[#0878F9]/30">
                        Custom Solution
                      </span>
                    </div>

                    {/* Card Title */}
                    <h2 className="mt-5 text-xl sm:text-2xl font-bold tracking-tight text-[#0B132B] transition-colors group-hover:text-[#0878F9]">
                      {title}
                    </h2>

                    {/* The 3 Stepped Panels */}
                    <div className="mt-6 space-y-3">

                      {/* Step 1: Challenge */}
                      <div className="rounded-xl border border-[#EDF3FA] bg-[#FAFBFD] p-3.5 transition-colors group-hover:border-[#DCE7F5]">
                        <div className="flex items-center justify-between">
                          <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#5A6D82]">
                            Operational Challenge
                          </p>
                          <span className="text-[10px] font-mono text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded">Problem</span>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#5A6D82]">{problem}</p>
                      </div>

                      {/* Step 2: The Core Software Solution (Highlighted) */}
                      <div className="relative overflow-hidden rounded-xl border border-[#0878F9]/30 bg-gradient-to-br from-[#F5F9FF] to-white p-3.5 shadow-xs">
                        <div className="flex items-center justify-between">
                          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0878F9] flex items-center gap-1">
                            <Sparkles className="h-3 w-3" /> KODEBLINK Custom Software
                          </p>
                          <span className="text-[10px] font-mono text-[#0878F9] bg-[#0878F9]/10 px-1.5 py-0.2 rounded font-semibold">Solution</span>
                        </div>
                        <p className="mt-1.5 text-xs sm:text-sm font-medium leading-relaxed text-[#0B132B]">{solution}</p>
                      </div>

                      {/* Step 3: Business Value */}
                      <div className="rounded-xl border border-[#EDF3FA] bg-[#FAFBFD] p-3.5 transition-colors group-hover:border-[#DCE7F5]">
                        <div className="flex items-center justify-between">
                          <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#5A6D82]">
                            Measurable Value
                          </p>
                          <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">ROI</span>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#5A6D82]">{benefit}</p>
                      </div>

                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="mt-8 border-t border-[#EDF3FA] pt-4">
                    <Link
                      to="/contact"
                      className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0878F9] hover:text-[#0B132B] transition-colors"
                    >
                      Explore this outcome
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          title="Let's solve the right operational problem."
          text="Share the exact workflow, paper bottleneck, or system handoff you want to modernize."
        />
      </main>
    </SiteFrame>
  );
}

export function SmartReceiptPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Software Product"
          title="KodeBlink SmartReceipt"
          text="A digital receipt management solution designed to capture, organize, and access receipt records and supplier documentation without paper clutter."
        />

        <section className="section-shell grid gap-14 py-20 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionTitle
              title="What is SmartReceipt?"
              text="SmartReceipt is a KODEBLINK product focused on making receipt records, purchase documentation, and supplier packing slips straightforward to organize and retrieve."
            />
            <p className="mt-4 text-sm leading-relaxed text-[#5A6D82]">
              Specifically designed for business receiving docks, procurement departments, and office managers, SmartReceipt transforms loose paper receipts and scattered photo uploads into an organized digital ledger that simplifies bookkeeping and inventory cross-matching.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="gradient" size="lg">
                <Link to="/contact">
                  Discuss SmartReceipt <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">Explore All Products</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-5 shadow-lg shadow-[#0878F9]/5">
            <div className="flex items-center justify-between border-b border-[#DCE7F5] pb-3">
              <span className="font-mono text-xs font-semibold uppercase text-[#0878F9]">
                SmartReceipt / Interface
              </span>
              <span className="font-mono text-[10px] text-[#5A6D82]">Product Overview</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                "Supplier Bill of Lading & Receipt Intake",
                "Purchase Order Cross-Match Verification",
                "Vendor & Category Expense Tagging",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-lg border border-[#DCE7F5] bg-white p-4 shadow-2xs"
                >
                  <div>
                    <p className="font-mono text-[9px] uppercase text-[#5A6D82]">{item}</p>
                    <span className="mt-2 block h-1.5 w-24 rounded-full bg-gradient-to-r from-[#0878F9] to-[#11C5E8]" />
                  </div>
                  <span className="font-mono text-xs text-[#0878F9]">0{index + 1} Structured</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-[#5A6D82]">
              Organized Receipt Records · Audit-Ready Access
            </p>
          </div>
        </section>

        <section className="bg-[#F5F9FF] py-20 md:py-24 border-y border-[#DCE7F5]">
          <div className="section-shell">
            <SectionTitle
              title="Key Verified Capabilities"
              text="How SmartReceipt brings order to business and dockside procurement."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-[#DCE7F5] bg-white p-6 shadow-2xs">
                <span className="font-mono text-xs font-semibold text-[#0878F9]">01</span>
                <h4 className="mt-3 text-base font-bold text-[#0B132B]">Digital Capture & Intake</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#5A6D82]">
                  Quick photo or scan intake on tablets and smartphones, eliminating misplaced paper slips.
                </p>
              </div>

              <div className="rounded-xl border border-[#DCE7F5] bg-white p-6 shadow-2xs">
                <span className="font-mono text-xs font-semibold text-[#0878F9]">02</span>
                <h4 className="mt-3 text-base font-bold text-[#0B132B]">Categorization & Tagging</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#5A6D82]">
                  Tag receipts by department, project, supplier, or job site for clean organization.
                </p>
              </div>

              <div className="rounded-xl border border-[#DCE7F5] bg-white p-6 shadow-2xs">
                <span className="font-mono text-xs font-semibold text-[#0878F9]">03</span>
                <h4 className="mt-3 text-base font-bold text-[#0B132B]">Instant Search & Export</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#5A6D82]">
                  Find any purchase slip by date or vendor name instantly, and export records for accounting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          title="Interested in KodeBlink SmartReceipt?"
          text="Get in touch to explore how SmartReceipt can organize receipts and supplier documents for your business."
        />
      </main>
    </SiteFrame>
  );
}

export function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Products & Work"
          title="Software Products and Verified Work"
          text="Explore our software applications and custom systems designed to solve concrete operational problems."
        />

        <section className="section-shell py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.map(([category, label, title, text, image], index) => (
              <article
                key={title}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#DCE7F5] bg-white shadow-xs transition-all hover:-translate-y-1 hover:border-[#0878F9] hover:shadow-lg"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F5F9FF]">
                  <img
                    src={image}
                    alt={`${title} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                    <span className="rounded-md border border-[#DCE7F5] bg-white/95 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0878F9]">
                      {category}
                    </span>

                    <span className="rounded bg-white/90 px-2 py-1 font-mono text-[10px] text-[#5A6D82]">
                      Solution 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Existing Card Content */}
                <div className="p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#5A6D82]">
                    {label} · 0{index + 1}
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-[#0B132B]">
                    {title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                    {text}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#EDF3FA] pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(index)}
                      className="focus-ring text-xs font-semibold text-[#0878F9] transition-colors hover:text-[#0668dc]"
                    >
                      View Architecture Details →
                    </button>

                    <Link
                      to="/contact"
                      className="focus-ring text-xs text-[#5A6D82] transition-colors hover:text-[#0878F9]"
                    >
                      Request Similar Solution
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {selectedProject !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B132B]/60 p-4 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-xl rounded-2xl border border-[#DCE7F5] bg-white p-6 sm:p-8 shadow-2xl">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-[#5A6D82] hover:text-[#0B132B]"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                {portfolio[selectedProject][0]} · {portfolio[selectedProject][1]}
              </span>
              <h3 className="mt-3 text-2xl font-bold text-[#0B132B]">
                {portfolio[selectedProject][2]}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5A6D82]">
                {portfolio[selectedProject][3]}
              </p>

              <div className="mt-6 rounded-lg border border-[#DCE7F5] bg-[#F5F9FF] p-4 text-xs text-[#5A6D82] space-y-2">
                <div className="flex justify-between">
                  <span className="font-mono font-semibold text-[#0B132B]">Development Scope:</span>
                  <span>Web App / Mobile Responsive / Custom Business Logic</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono font-semibold text-[#0B132B]">Deployment Model:</span>
                  <span>Cloud Hosted / On-Premise / Tablet Ready</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono font-semibold text-[#0B132B]">Primary Value:</span>
                  <span>Eliminates manual delays and connects operational data</span>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </Button>
                <Button asChild variant="gradient" size="sm">
                  <Link to="/contact" onClick={() => setSelectedProject(null)}>
                    Discuss This Capability
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        <CtaSection
          title="Have a project in mind?"
          text="Let's shape the right digital experience and software architecture for it."
        />
      </main>
    </SiteFrame>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  company: z.string().trim().max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  phone: z.string().trim().max(30),
  project: z.string().trim().min(1, "Please tell us what you want to build.").max(200),
  message: z.string().trim().min(1, "Please add a short message.").max(2000),
});
type ContactValues = z.infer<typeof contactSchema>;

export function ContactPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Contact KODEBLINK"
          title="Let's Build Something That Moves Your Business Forward."
          text="Tell us what you are trying to build or improve. Whether you need a new website, web app, mobile solution, or custom business software, our team is ready to help."
        />

        <section className="section-shell grid gap-16 py-20 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Start the Conversation"
              title="Request a Consultation"
              text="Share a little about your project, current manual bottlenecks, or software vision. We will review your requirements and provide pragmatic technical feedback."
            />

            <div className="mt-10 rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-7 space-y-5 text-sm">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider font-semibold text-[#0878F9]">
                  Direct Email
                </span>
                <a
                  className="focus-ring mt-1 block font-medium text-[#0B132B] hover:text-[#0878F9] transition-colors"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider font-semibold text-[#0878F9]">
                  Telephone
                </span>
                <a
                  className="focus-ring mt-1 block font-medium text-[#0B132B] hover:text-[#0878F9] transition-colors"
                  href={site.phoneHref}
                >
                  {site.phone}
                </a>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider font-semibold text-[#0878F9]">
                  Connect
                </span>
                <div className="mt-1 flex items-center gap-4">
                  <a
                    className="focus-ring font-medium text-[#0B132B] hover:text-[#0878F9] transition-colors"
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <span className="text-[#DCE7F5]">·</span>
                  <a
                    className="focus-ring font-medium text-[#0B132B] hover:text-[#0878F9] transition-colors"
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-[#DCE7F5] bg-white p-6 shadow-2xs">
              <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-[#0878F9]">
                Direct Technical Discussion
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#5A6D82]">
                You will speak directly with experienced software engineers and product designers who understand custom business logic, architecture, and realistic project timelines.
              </p>
            </div>
          </div>

          <ContactForm />
        </section>
      </main>
    </SiteFrame>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [values, setValues] = useState<ContactValues>({
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const update = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<keyof ContactValues, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactValues;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-[#0878F9]/40 bg-[#F5F9FF] p-8 sm:p-10 shadow-lg animate-in fade-in duration-300"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#20B85A]/15 text-[#20B85A]">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-bold text-[#0B132B]">
          Thank you for reaching out!
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5A6D82]">
          Your project inquiry has been received. A senior member of the KODEBLINK engineering team will review your requirements and follow up with you promptly.
        </p>
        <div className="mt-6 rounded-lg border border-[#DCE7F5] bg-white p-4 text-xs font-mono text-[#5A6D82]">
          Project Inquiry: <span className="font-semibold text-[#0B132B]">{values.project || "Custom Technology"}</span> · {values.email}
        </div>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => {
            setStatus("idle");
            setValues({
              name: "",
              company: "",
              email: "",
              phone: "",
              project: "",
              message: "",
            });
          }}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  const renderField = (
    name: keyof ContactValues,
    label: string,
    placeholder: string,
    type = "text",
    required = false
  ) => (
    <label className="grid gap-2 text-sm font-medium text-[#0B132B]">
      <div className="flex justify-between items-center">
        <span>
          {label} {required && <span className="text-[#0878F9]">*</span>}
        </span>
        {errors[name] && <span className="text-xs text-[#F04438]">{errors[name]}</span>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={values[name]}
        onChange={(event) => update(name, event.target.value)}
        className="focus-ring h-12 rounded-lg border border-[#DCE7F5] bg-white px-4 text-sm text-[#0B132B] placeholder:text-[#5A6D82]/60 transition-colors focus:border-[#0878F9] outline-none"
        aria-invalid={Boolean(errors[name])}
      />
    </label>
  );

  return (
    <form
      onSubmit={submit}
      noValidate
      className="grid gap-6 rounded-xl border border-[#DCE7F5] bg-white p-7 md:p-9 shadow-sm"
    >
      <div className="border-b border-[#EDF3FA] pb-4">
        <h3 className="text-xl font-bold text-[#0B132B]">Project Inquiry Form</h3>
        <p className="mt-1 text-xs text-[#5A6D82]">
          Tell us about your project or business needs. Required fields are marked with an asterisk (*).
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {renderField("name", "Full Name", "e.g. Alex Morgan", "text", true)}
        {renderField("company", "Company / Organization", "e.g. Apex Industrial Solutions")}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {renderField("email", "Work Email", "e.g. alex@apexindustrial.com", "email", true)}
        {renderField("phone", "Phone Number", "e.g. +1 (555) 012-3456", "tel")}
      </div>

      {renderField(
        "project",
        "What do you want to build?",
        "e.g. Website, Mobile App, Custom ERP, Daily Task Tracker",
        "text",
        true
      )}

      <label className="grid gap-2 text-sm font-medium text-[#0B132B]">
        <div className="flex justify-between items-center">
          <span>
            Project Overview & Goals <span className="text-[#0878F9]">*</span>
          </span>
          {errors.message && <span className="text-xs text-[#F04438]">{errors.message}</span>}
        </div>
        <textarea
          rows={5}
          placeholder="Describe what you want to achieve, your timeline, or the operational bottlenecks you are looking to solve..."
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className="focus-ring min-h-36 resize-y rounded-lg border border-[#DCE7F5] bg-white px-4 py-3 text-sm text-[#0B132B] placeholder:text-[#5A6D82]/60 transition-colors focus:border-[#0878F9] outline-none"
          aria-invalid={Boolean(errors.message)}
        />
      </label>
      <div>
        <Button type="submit" variant="gradient" size="lg" className="w-fit">
          Send Project Inquiry <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
