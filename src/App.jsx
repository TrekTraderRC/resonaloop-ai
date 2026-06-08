import React, { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  CloudSun,
  Cpu,
  Droplets,
  Gauge,
  Home,
  Leaf,
  LineChart,
  Mail,
  MapPinned,
  Recycle,
  Rocket,
  ScanLine,
  School,
  Send,
  ShieldCheck,
  Sparkles,
  Sprout,
  Telescope,
  TreePine,
  Users,
  Waves,
  Wrench,
} from "lucide-react";

import logo from "./assets/resonaloop-logo-full.svg";
import logoIcon from "./assets/resonaloop-icon.svg";
import logoReversed from "./assets/resonaloop-logo-reversed.svg";


const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdqpqpp";

const go = (path) => {
  window.location.hash = path;
};

const readRoute = () => {
  const hash = window.location.hash.replace(/^#/, "");
  return hash || "/";
};

function useRoute() {
  const [route, setRoute] = useState(readRoute());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(readRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

const solutions = {
  "/solutions/home-living-loop": {
    eyebrow: "Home Solution",
    title: "Home Living Loop",
    subtitle:
      "Small, practical systems for balconies, courtyards and backyards — designed around real homes, daily routines and long-term care.",
    icon: Home,
    imageTone: "from-emerald-100 via-lime-50 to-white",
    bullets: [
      "Balcony, courtyard or backyard layout planning",
      "Edible plants, herbs, water-conscious growing and organic routines",
      "Optional sensor monitoring for light, water, humidity and soil moisture",
      "A staged plan that can begin small and expand over time",
    ],
    outcomes: ["Clear first-system pathway", "Equipment list", "Maintenance rhythm", "Upgrade roadmap"],
  },
  "/solutions/water-garden-loop": {
    eyebrow: "Water-Based System",
    title: "Water Garden Loop",
    subtitle:
      "A gentle entry point for people who want a visible living loop — water movement, plants, filtration and optional fish in one connected system.",
    icon: Waves,
    imageTone: "from-sky-100 via-emerald-50 to-white",
    bullets: [
      "Compact water garden or aquaponic-style system planning",
      "Pump, filtration, grow-bed and lighting guidance",
      "Beginner-friendly plant and care recommendations",
      "Useful for homes, classrooms and demonstration corners",
    ],
    outcomes: ["Visible circular system", "Water-flow layout", "Care checklist", "Sensor-ready setup"],
  },
  "/solutions/school-learning-loop": {
    eyebrow: "Education Solution",
    title: "School Learning Loop",
    subtitle:
      "Hands-on learning systems for ecology, biology, sustainability, data literacy and AI-assisted environmental monitoring.",
    icon: School,
    imageTone: "from-amber-100 via-emerald-50 to-white",
    bullets: [
      "Classroom or school-garden system concept design",
      "Sensor data for STEM, sustainability and environmental learning",
      "Student-friendly observation logs and learning prompts",
      "Optional dashboard for growth, water, care and impact records",
    ],
    outcomes: ["Learning loop plan", "Data activities", "Teacher-friendly routines", "Impact display"],
  },
  "/solutions/community-circular-loop": {
    eyebrow: "Community Solution",
    title: "Community Circular Loop",
    subtitle:
      "Shared circular systems for gardens, councils, organisations and ESG demonstration spaces that need visible and measurable outcomes.",
    icon: Users,
    imageTone: "from-teal-100 via-sky-50 to-white",
    bullets: [
      "Shared garden and circular living concept planning",
      "Compost, water awareness, growing zones and participation design",
      "Impact dashboard direction for public-facing communication",
      "Useful for councils, community groups, offices and ESG projects",
    ],
    outcomes: ["Shared-space plan", "Engagement model", "Impact metrics", "Pilot roadmap"],
  },
};

const platform = {
  "/platform/ai-system-planner": {
    eyebrow: "Platform Module",
    title: "AI System Planner",
    subtitle:
      "Turn space, budget, goals and constraints into a practical first system path — before buying equipment or starting installation.",
    icon: ScanLine,
    bullets: [
      "Collects space type, sunlight, water access, budget and preferred level of care",
      "Suggests suitable system direction and staged build pathway",
      "Produces a practical design brief for consultation or DIY planning",
      "Helps avoid buying the wrong equipment too early",
    ],
  },
  "/platform/sensor-kit": {
    eyebrow: "Core Product Concept",
    title: "ResonaLoop Sensor Kit",
    subtitle:
      "The intelligence layer for living systems — monitoring water, light, humidity, soil moisture and system activity so users can care with less guesswork.",
    icon: Cpu,
    bullets: [
      "Water temperature, pH, water level and pump activity for water systems",
      "Light, air temperature, humidity and soil moisture for growing spaces",
      "Designed to support aquaponic, garden, classroom and community loops",
      "Forms the data foundation for AI maintenance and impact reporting",
    ],
  },
  "/platform/maintenance-assistant": {
    eyebrow: "AI Layer",
    title: "AI Maintenance Assistant",
    subtitle:
      "Translate live conditions into reminders, alerts and practical next actions — from topping up water to checking filters or adjusting light.",
    icon: BrainCircuit,
    bullets: [
      "Turns raw sensor readings into simple explanations",
      "Flags unstable water, low light, high temperature or dry soil risk",
      "Creates maintenance reminders based on real conditions",
      "Builds a care history that improves future recommendations",
    ],
  },
  "/platform/impact-dashboard": {
    eyebrow: "Measurement Layer",
    title: "Impact Dashboard",
    subtitle:
      "Make circular living visible through growth records, water awareness, care routines, maintenance logs and learning or ESG summaries.",
    icon: LineChart,
    bullets: [
      "Track plant growth, harvest notes and care actions",
      "Visualise water, compost and system health patterns",
      "Create monthly summaries for families, schools or community projects",
      "Support future sustainability and learning reports",
    ],
  },
};

const services = {
  "/services/design-planning": {
    eyebrow: "Service",
    title: "Design & Planning",
    subtitle:
      "A practical front-end process that turns an idea, space and budget into a system brief that can actually be built.",
    icon: ScanLine,
    steps: [
      "Site and space assessment",
      "System concept and staged pathway",
      "Equipment list and budget direction",
      "Maintenance rhythm and sensor upgrade options",
    ],
  },
  "/services/setup-guidance": {
    eyebrow: "Service",
    title: "Setup Guidance",
    subtitle:
      "Support for DIY-friendly installation, recommended hardware choices, sensor setup and future partner installer pathways.",
    icon: Wrench,
    steps: [
      "Installation sequence and checklist",
      "Hardware compatibility guidance",
      "Sensor placement and calibration direction",
      "Remote support or partner coordination pathway",
    ],
  },
  "/services/monitoring-optimisation": {
    eyebrow: "Service",
    title: "Monitoring & Optimisation",
    subtitle:
      "Ongoing support that helps a living system improve after installation instead of becoming a one-off project.",
    icon: Activity,
    steps: [
      "Dashboard setup and system profile",
      "Maintenance alerts and monthly check-ins",
      "Planting, watering and care improvement suggestions",
      "Impact summaries for schools, homes or shared spaces",
    ],
  },
};

const navGroups = [
  {
    label: "Solutions",
    items: [
      { path: "/solutions/home-living-loop", icon: Home, title: "Home Living Loop", text: "Balcony, courtyard and backyard systems." },
      { path: "/solutions/water-garden-loop", icon: Waves, title: "Water Garden Loop", text: "Water movement, plants and gentle growing." },
      { path: "/solutions/school-learning-loop", icon: School, title: "School Learning Loop", text: "Sustainability, ecology and data literacy." },
      { path: "/solutions/community-circular-loop", icon: Users, title: "Community Circular Loop", text: "Shared systems and ESG demonstration spaces." },
    ],
  },
  {
    label: "Platform",
    items: [
      { path: "/platform/ai-system-planner", icon: ScanLine, title: "AI System Planner", text: "Turn space and goals into a first pathway." },
      { path: "/platform/sensor-kit", icon: Cpu, title: "Sensor Kit", text: "Monitor water, light and system activity." },
      { path: "/platform/maintenance-assistant", icon: BrainCircuit, title: "AI Maintenance Assistant", text: "Alerts, reminders and next actions." },
      { path: "/platform/impact-dashboard", icon: LineChart, title: "Impact Dashboard", text: "Growth, care routines and visible outcomes." },
    ],
  },
  {
    label: "Services",
    items: [
      { path: "/services/design-planning", icon: ScanLine, title: "Design & Planning", text: "Assessment, concept, equipment and budget path." },
      { path: "/services/setup-guidance", icon: Wrench, title: "Setup Guidance", text: "DIY setup, hardware and sensor placement." },
      { path: "/services/monitoring-optimisation", icon: Activity, title: "Monitoring & Optimisation", text: "Ongoing dashboard and improvement support." },
    ],
  },
];

const Section = ({ children, className = "" }) => (
  <section className={`relative mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</section>
);

const SoftOrb = ({ className = "" }) => (
  <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />
);

function HeroParticleField() {
  const particles = [
    { left: "9%", top: "26%", size: 5, delay: 0.1, drift: 24 },
    { left: "18%", top: "78%", size: 7, delay: 1.2, drift: 18 },
    { left: "34%", top: "18%", size: 4, delay: 0.7, drift: 28 },
    { left: "52%", top: "70%", size: 6, delay: 1.6, drift: 22 },
    { left: "70%", top: "24%", size: 5, delay: 0.4, drift: 26 },
    { left: "88%", top: "62%", size: 8, delay: 1.0, drift: 20 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-emerald-400/45 shadow-[0_0_30px_rgba(16,185,129,0.28)]"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -p.drift, 0], x: [0, index % 2 === 0 ? 10 : -10, 0], opacity: [0.15, 0.8, 0.15], scale: [1, 1.8, 1] }}
          transition={{ duration: 5.5 + index * 0.45, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <motion.div
        className="absolute left-[6%] top-[18%] h-px w-[42%] origin-left bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent"
        animate={{ scaleX: [0.25, 1, 0.25], opacity: [0, 0.55, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function LoopCore() {
  const nodes = [
    { label: "Water", icon: Droplets, angle: 0, delay: 0.15 },
    { label: "Food", icon: Leaf, angle: 90, delay: 0.35 },
    { label: "Waste", icon: Recycle, angle: 180, delay: 0.55 },
    { label: "AI", icon: BrainCircuit, angle: 270, delay: 0.75 },
  ];

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center">
      <motion.div className="absolute inset-24 rounded-full bg-emerald-300/20 blur-3xl" animate={{ scale: [0.85, 1.16, 0.85], opacity: [0.28, 0.55, 0.28] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute inset-10 rounded-full border border-emerald-500/18" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 65, repeat: Infinity, ease: "linear" }} className="absolute inset-20 rounded-full border border-sky-400/18 border-dashed" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute inset-[4.7rem] rounded-full">
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_26px_rgba(16,185,129,0.7)]" />
      </motion.div>
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="absolute inset-[7.8rem] rounded-full">
        <span className="absolute left-1/2 bottom-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_24px_rgba(56,189,248,0.65)]" />
      </motion.div>
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 520 520" aria-hidden="true">
        {[0, 90, 180, 270].map((angle, index) => {
          const rad = (angle * Math.PI) / 180;
          const x = 260 + Math.cos(rad) * 158;
          const y = 260 + Math.sin(rad) * 158;
          return (
            <motion.line key={angle} x1="260" y1="260" x2={x} y2={y} stroke="rgba(5,150,105,0.26)" strokeWidth="1.2" strokeDasharray="4 9" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: [0.15, 1, 0.15], opacity: [0.1, 0.65, 0.1] }} transition={{ duration: 3.8, delay: index * 0.45, repeat: Infinity, ease: "easeInOut" }} />
          );
        })}
      </svg>
      {nodes.map(({ label, icon: Icon, angle, delay }) => {
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * 40;
        const y = Math.sin(rad) * 40;
        return (
          <motion.div key={label} initial={{ opacity: 0, scale: 0.86 }} animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }} transition={{ opacity: { delay, duration: 0.45 }, scale: { delay, duration: 0.45 }, y: { delay, duration: 4.2, repeat: Infinity, ease: "easeInOut" } }} className="absolute flex h-24 w-24 flex-col items-center justify-center rounded-3xl border border-emerald-900/10 bg-white/80 text-center shadow-[0_18px_55px_rgba(18,92,61,0.10)] backdrop-blur-xl" style={{ left: `calc(50% + ${x}% - 48px)`, top: `calc(50% + ${y}% - 48px)` }}>
            <Icon size={25} className="text-emerald-700" />
            <span className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">{label}</span>
          </motion.div>
        );
      })}
      <motion.div animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 70px rgba(16,185,129,0.20)", "0 0 110px rgba(16,185,129,0.38)", "0 0 70px rgba(16,185,129,0.20)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-emerald-500/25 bg-white/85 backdrop-blur-xl">
        <Sparkles className="text-emerald-700" size={28} />
        <div className="mt-2 text-sm font-semibold text-slate-950">ResonaLoop</div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-emerald-700/70">Living OS</div>
      </motion.div>
    </div>
  );
}

function SpaceArc() {
  return (
    <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] overflow-hidden opacity-70">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute right-[-90px] top-[-90px] h-[520px] w-[520px] rounded-full border border-sky-300/35" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute right-[20px] top-[20px] h-[300px] w-[300px] rounded-full border border-emerald-400/25 border-dashed" />
      <div className="absolute right-[120px] top-[118px] h-8 w-8 rounded-full bg-gradient-to-br from-sky-300 to-emerald-300 shadow-[0_0_45px_rgba(14,165,233,0.35)]" />
    </div>
  );
}

function NavDropdown({ label, items }) {
  return (
    <div className="group relative flex h-18 items-center">
      <button className="inline-flex items-center gap-1.5 text-sm text-slate-600 transition hover:text-emerald-800">
        {label}<ChevronDown size={14} className="transition group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full w-[380px] -translate-x-1/2 translate-y-3 rounded-[1.75rem] border border-emerald-900/10 bg-white p-3 opacity-0 shadow-[0_30px_90px_rgba(18,92,61,0.18)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="grid gap-1.5">
          {items.map(({ path, icon: Icon, title, text }) => (
            <button key={title} onClick={() => go(path)} className="group/item flex w-full gap-3 rounded-2xl p-3 text-left transition hover:bg-emerald-50">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-900/10 bg-emerald-100 text-emerald-700 transition group-hover/item:scale-105"><Icon size={17} /></div>
              <div><div className="text-sm font-semibold text-slate-950">{title}</div><div className="mt-1 text-xs leading-5 text-slate-500">{text}</div></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Layout({ route, children }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F7FBF4] text-slate-950 selection:bg-emerald-200 selection:text-slate-950">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(187,247,208,0.70),transparent_30%),radial-gradient(circle_at_78%_8%,rgba(186,230,253,0.62),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(254,240,138,0.22),transparent_32%),linear-gradient(180deg,#F7FBF4_0%,#EEF8EB_45%,#F8FBFF_100%)]" />
        <div className="absolute inset-0 opacity-[0.30]" style={{ backgroundImage: "linear-gradient(rgba(21,128,61,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(21,128,61,0.08) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
      </div>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-emerald-900/10 bg-white shadow-sm">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          <button onClick={() => go("/")} aria-label="Back to ResonaLoop home" className="group flex items-center gap-3 rounded-3xl outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-700/15 bg-emerald-100 shadow-[0_0_35px_rgba(16,185,129,0.14)] transition group-hover:-translate-y-0.5"><Leaf size={20} className="text-emerald-700" /></div>
            <div className="text-left"><div className="text-sm font-semibold tracking-wide text-slate-950">ResonaLoop AI</div><div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Circular Living · Living Systems</div></div>
            {/* <img src={logo} alt="ResonaLoop AI" className="h-14 w-auto" /> */}
          </button>
          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {navGroups.map((group) => <NavDropdown key={group.label} {...group} />)}
            <button onClick={() => go("/education")} className={`${route === "/education" ? "text-emerald-800" : ""} hover:text-emerald-800`}>Education</button>
            <button onClick={() => go("/vision")} className={`${route === "/vision" ? "text-emerald-800" : ""} hover:text-emerald-800`}>Vision</button>
            <button onClick={() => go("/about")} className={`${route === "/about" ? "text-emerald-800" : ""} hover:text-emerald-800`}>About</button>
          </div>
          <button onClick={() => go("/plan-your-loop")} className="rounded-full border border-emerald-700/15 bg-emerald-900 px-5 py-2.5 text-sm font-medium text-white shadow-[0_18px_45px_rgba(18,92,61,0.18)] hover:bg-emerald-800">Plan Your Loop</button>
        </div>
      </nav>
      <main className="pt-18">{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-emerald-900/10 bg-[#07140F] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.7fr_1.05fr] lg:gap-20">
          <div>
            <button onClick={() => go("/")} className="group flex items-center gap-4 text-left">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-emerald-300/20 bg-emerald-300/10 shadow-[0_0_45px_rgba(16,185,129,0.18)] transition group-hover:-translate-y-0.5">
                <Leaf size={30} className="text-emerald-300" />
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight text-white">ResonaLoop</div>
                <div className="mt-1 text-xs uppercase tracking-[0.34em] text-emerald-200/70">AI Systems</div>
              </div>
              {/* <img src={logoReversed} alt="ResonaLoop AI" className="h-14 w-auto" /> */}
            </button>
            <p className="mt-7 max-w-sm text-base leading-8 text-slate-300">
              AI-guided circular living systems for homes, schools and communities.
            </p>
            <div className="mt-8 flex gap-3">
              {["AI", "IoT", "ESG"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium tracking-[0.18em] text-emerald-100/80">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {navGroups.map((group) => (
              <div key={group.label}>
                <div className="text-lg font-semibold tracking-wide text-white">{group.label}</div>
                <div className="mt-4 h-px w-9 bg-emerald-300/70" />
                <div className="mt-6 space-y-3 text-sm text-slate-300">
                  {group.items.map((item) => (
                    <button key={item.path} onClick={() => go(item.path)} className="block text-left leading-6 transition hover:text-emerald-200">
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="text-lg font-semibold tracking-wide text-white">Contact Information</div>
            <div className="mt-4 h-px w-9 bg-emerald-300/70" />
            <div className="mt-6 space-y-5 text-sm text-slate-300">
              <div className="flex gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-emerald-300" />
                <div>
                  <div className="text-white">Email</div>
                  <a href="mailto:hello@resonaloop.ai" className="mt-1 block hover:text-emerald-200">hello@resonaloop.ai</a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPinned size={18} className="mt-1 shrink-0 text-emerald-300" />
                <div>
                  <div className="text-white">Location</div>
                  <div className="mt-1 leading-6">Melbourne, Australia</div>
                </div>
              </div>
              <button onClick={() => go("/plan-your-loop")} className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 font-semibold text-emerald-950 transition hover:bg-emerald-200">
                Plan Your Loop <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} ResonaLoop AI. All rights reserved.</div>
          <div className="flex gap-5">
            <button onClick={() => go("/vision")} className="hover:text-emerald-200">Vision</button>
            <button onClick={() => go("/about")} className="hover:text-emerald-200">About</button>
            <button onClick={() => go("/plan-your-loop")} className="hover:text-emerald-200">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 90]);

  return (
    <>
      <header id="home" className="relative flex min-h-[calc(100vh-72px)] items-center">
        <SoftOrb className="left-1/2 top-32 h-72 w-72 -translate-x-1/2 bg-emerald-300/45" />
        <SoftOrb className="right-10 top-52 h-80 w-80 bg-sky-300/30" />
        <SpaceArc />
        <HeroParticleField />
        <Section className="grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div style={{ y: heroY }}>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/65 px-4 py-2 text-sm text-emerald-800 shadow-sm backdrop-blur-xl">
              <Sparkles size={16} /> AI-guided living systems for homes, schools and communities
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="max-w-4xl pb-2 text-5xl font-semibold leading-[1.12] tracking-tight sm:text-7xl lg:text-8xl">
              AI-guided living systems
              <span className="block pb-3 bg-gradient-to-r from-emerald-800 via-emerald-500 to-sky-600 bg-clip-text text-transparent">for circular living.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              ResonaLoop helps homes, schools, and small communities turn everyday spaces into resilient living systems — linking growing, water, organic matter, energy awareness, and environmental data into one practical loop.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => go("/plan-your-loop")} className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-6 py-4 font-semibold text-white shadow-[0_22px_55px_rgba(18,92,61,0.22)] transition hover:scale-[1.02]">Plan Your Loop <ArrowRight className="transition group-hover:translate-x-1" size={18} /></button>
              <button onClick={() => go("/vision")} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-900/10 bg-white/65 px-6 py-4 font-semibold text-slate-950 backdrop-blur-xl hover:bg-white/90">Explore the Vision</button>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }} transition={{ opacity: { duration: 0.8, delay: 0.2 }, scale: { duration: 0.8, delay: 0.2 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }} className="relative">
            <LoopCore />
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.55 }} className="absolute bottom-4 left-4 right-4 rounded-3xl border border-emerald-900/10 bg-white/75 p-4 shadow-[0_18px_60px_rgba(18,92,61,0.10)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div><div className="text-xs uppercase tracking-[0.25em] text-slate-500">Live Loop Console</div><div className="mt-1 text-lg font-semibold text-slate-950">System stable · AI optimising</div></div>
                <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.92, 1, 0.92] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} className="rounded-2xl border border-emerald-700/15 bg-emerald-100 px-4 py-2 text-2xl font-semibold text-emerald-900">87</motion.div>
              </div>
            </motion.div>
          </motion.div>
        </Section>
      </header>
      <HomeLandingSections />
    </>
  );
}

function HomeLandingSections() {
  return (
    <>
      <Section className="py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-emerald-700/70">About ResonaLoop</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Building the operating layer for circular living.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              ResonaLoop is an AI-assisted circular living system platform. We help people design, monitor, and improve living loops that connect growing spaces, water movement, organic matter, energy awareness, and environmental data.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We begin with practical everyday spaces — balconies, backyards, courtyards, classrooms, and small community gardens. The goal is to make living systems easier to plan, care for, measure, and improve.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => go('/about')} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-900/10 bg-white px-6 py-4 font-semibold text-slate-950 hover:bg-emerald-50">Read more <ArrowRight size={18} /></button>
              <button onClick={() => go('/platform/sensor-kit')} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-6 py-4 font-semibold text-white hover:bg-emerald-800">Explore Sensor Kit <Cpu size={18} /></button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-900/10 bg-white/75 p-6 shadow-[0_35px_110px_rgba(18,92,61,0.10)] backdrop-blur-2xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl" />
            <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl" />
            <div className="relative z-10 grid gap-4">
              {[
                [Leaf, 'Nature-led practicality', 'Start with space-aware planning, growing zones, water movement, organic routines, useful equipment choices, and measurable everyday outcomes.'],
                [BrainCircuit, 'AI-assisted intelligence', 'Bring AI into planning and maintenance: interpret sensor data, flag risks, suggest next actions, and turn complexity into simple routines.'],
                [Rocket, 'Future habitat ambition', 'Explore how AI-assisted circular systems can support resilient living — from homes and schools to off-grid sites and future habitats.'],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-3xl border border-emerald-900/10 bg-white/80 p-5">
                  <div className="flex items-center gap-3"><Icon className="text-emerald-700" /><h3 className="text-xl font-semibold text-slate-950">{title}</h3></div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-emerald-700/70">Solutions</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Start small. Let the system grow with your space.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A ResonaLoop project can begin with a balcony herb wall, a water garden, a compost corner, a classroom growing system, or a shared community space. The point is to connect living elements into a system that can be cared for, measured, and improved over time.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {navGroups[0].items.map(({ path, icon: Icon, title, text }) => (
            <motion.button key={path} onClick={() => go(path)} whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white/70 p-6 text-left shadow-[0_24px_90px_rgba(18,92,61,0.08)] backdrop-blur-2xl">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-300/25 blur-2xl" />
              <div className="relative z-10">
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl border border-emerald-900/10 bg-emerald-50 text-emerald-700 shadow-[0_0_35px_rgba(16,185,129,0.12)]"><Icon size={24} /></div>
                <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">View solution <ArrowRight size={15} className="transition group-hover:translate-x-1" /></div>
              </div>
            </motion.button>
          ))}
        </div>
      </Section>

      <Section className="py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-sky-700/70">Platform</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">The platform behind every loop.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The product layer combines planning, sensing, maintenance guidance, and impact records — so a living system can be managed as an evolving system, not a one-off installation.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {navGroups[1].items.map(({ path, icon: Icon, title, text }) => (
            <motion.button key={path} onClick={() => go(path)} whileHover={{ y: -8 }} className="rounded-[2rem] border border-emerald-900/10 bg-white/75 p-6 text-left shadow-[0_26px_90px_rgba(18,92,61,0.09)] backdrop-blur-xl">
              <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700"><Icon size={24} /></div>
              <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </motion.button>
          ))}
        </div>
      </Section>

      <Section className="py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-emerald-700/70">Services</div>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">From idea to installed living system.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-600">ResonaLoop works as a design and implementation partner. We help users move from curiosity to a practical setup, then keep the system visible and improving over time.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {navGroups[2].items.map(({ path, icon: Icon, title, text }) => (
            <motion.button key={path} onClick={() => go(path)} whileHover={{ y: -8 }} className="relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white/75 p-6 text-left shadow-[0_26px_90px_rgba(18,92,61,0.09)] backdrop-blur-2xl">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-300/20 blur-3xl" />
              <div className="relative z-10">
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl border border-emerald-900/10 bg-emerald-50 text-emerald-700"><Icon size={24} /></div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">View service <ArrowRight size={15} /></div>
              </div>
            </motion.button>
          ))}
        </div>
      </Section>

      <Section className="py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-emerald-700/70">AI maintenance</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">A living system should not be maintained by guesswork.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">ResonaLoop uses sensor data, maintenance logs and environmental context to make water, light, temperature and care routines visible and actionable.</p>
            <button onClick={() => go('/platform/maintenance-assistant')} className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-6 py-4 font-semibold text-white hover:bg-emerald-800">Explore AI Maintenance <ArrowRight size={18} /></button>
          </div>
          <div className="rounded-[2rem] border border-emerald-900/10 bg-white/75 p-6 shadow-[0_30px_90px_rgba(18,92,61,0.08)] backdrop-blur-2xl">
            <div className="mb-6 flex items-center justify-between"><div><div className="text-xs uppercase tracking-[0.25em] text-slate-500">Loop Health Score</div><div className="mt-1 text-4xl font-semibold text-slate-950">87/100</div></div><Gauge className="text-emerald-700" size={44} /></div>
            <div className="space-y-4">
              {[["Plant Health", "Stable", 88], ["Water Efficiency", "Optimised", 92], ["Soil Moisture", "Slightly low", 68], ["System Stability", "Strong", 84]].map(([label, status, val]) => (
                <div key={label}><div className="mb-2 flex justify-between text-sm"><span className="text-slate-700">{label}</span><span className="text-slate-500">{status}</span></div><div className="h-2 overflow-hidden rounded-full bg-emerald-900/8"><motion.div initial={{ width: 0 }} whileInView={{ width: `${val}%` }} viewport={{ once: true }} transition={{ duration: 1.1 }} className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-sky-400" /></div></div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-amber-700/15 bg-amber-50 p-4 text-sm leading-7 text-amber-900">Next action: check water level and inspect pump flow within 24 hours. Lighting schedule looks stable; soil moisture is slightly below target.</div>
          </div>
        </div>
      </Section>

      <Section className="py-24">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-emerald-900/10 bg-gradient-to-br from-white/85 via-sky-50 to-emerald-50 p-8 text-center shadow-[0_40px_130px_rgba(18,92,61,0.12)] backdrop-blur-2xl lg:p-16">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: 'linear' }} className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/20" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-sky-700/15 bg-white/80 text-sky-700 shadow-sm"><Rocket size={38} /></div>
            <div className="mt-6 text-sm uppercase tracking-[0.3em] text-sky-700/70">Vision</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Designed for homes today. Inspired by closed-loop habitats of tomorrow.</h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-600">ResonaLoop begins with practical circular living systems, but the long-term vision is broader: intelligent, measurable and scalable loops for homes, schools, off-grid communities and future closed-loop habitats.</p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"><button onClick={() => go('/plan-your-loop')} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-6 py-4 font-semibold text-white">Start with one small loop <ArrowRight size={18} /></button><button onClick={() => go('/vision')} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-900/10 bg-white/75 px-6 py-4 font-semibold text-slate-950">Explore the vision</button></div>
          </div>
        </div>
      </Section>
    </>
  );
}

function FeaturePanel({ title, text, items }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="rounded-[2rem] border border-emerald-900/10 bg-white/75 p-6 shadow-[0_26px_90px_rgba(18,92,61,0.09)] backdrop-blur-xl">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <p className="mt-3 min-h-[56px] text-sm leading-7 text-slate-600">{text}</p>
      <div className="mt-6 space-y-2">
        {items.map((item) => (
          <button key={item.path} onClick={() => go(item.path)} className="flex w-full items-center justify-between rounded-2xl border border-emerald-900/10 bg-emerald-50/50 p-3 text-left hover:bg-emerald-50">
            <span className="font-medium text-slate-800">{item.title}</span><ArrowRight size={16} className="text-emerald-700" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function PageHero({ data, cta = true }) {
  const Icon = data.icon || Leaf;
  return (
    <section className="relative overflow-hidden border-b border-emerald-900/10 pt-24">
      <SoftOrb className="left-1/3 top-20 h-72 w-72 bg-emerald-300/35" />
      <SoftOrb className="right-24 top-28 h-80 w-80 bg-sky-300/25" />
      <Section className="grid items-center gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-sm text-emerald-800 shadow-sm"><Icon size={16} /> {data.eyebrow}</div>
          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl">{data.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{data.subtitle}</p>
          {cta && <div className="mt-9 flex flex-col gap-4 sm:flex-row"><button onClick={() => go("/plan-your-loop")} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-6 py-4 font-semibold text-white">Plan this loop <ArrowRight size={18} /></button><button onClick={() => go("/")} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-900/10 bg-white/75 px-6 py-4 font-semibold text-slate-950">Back to home</button></div>}
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className={`relative overflow-hidden rounded-[2.8rem] border border-emerald-900/10 bg-gradient-to-br ${data.imageTone || "from-emerald-100 via-white to-sky-50"} p-8 shadow-[0_35px_120px_rgba(18,92,61,0.12)]`}>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl" />
          <div className="relative z-10 grid gap-4 sm:grid-cols-2">
            {(data.bullets || data.steps || []).map((b, i) => (
              <div key={b} className="rounded-3xl border border-emerald-900/10 bg-white/75 p-5 shadow-sm">
                <CheckCircle2 className="text-emerald-700" size={20} />
                <p className="mt-3 text-sm leading-7 text-slate-600">{b}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>
    </section>
  );
}

function DetailPage({ data, type }) {
  const related = type === "solution" ? Object.entries(solutions) : type === "platform" ? Object.entries(platform) : Object.entries(services);
  return (
    <>
      <PageHero data={data} />
      <Section className="py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-emerald-900/10 bg-white/75 p-8 shadow-[0_28px_100px_rgba(18,92,61,0.09)]">
            <div className="text-sm uppercase tracking-[0.3em] text-emerald-700/70">How it works</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">A practical path from idea to living system.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">ResonaLoop is designed to begin with a realistic first step. We clarify the available space, define the system goal, recommend a staged setup, then add monitoring and improvement only when it makes sense.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Assess the space", "Design the first loop", "Prepare equipment", "Monitor and improve"].map((step) => <div key={step} className="rounded-2xl bg-emerald-50 p-4 font-medium text-slate-800">{step}</div>)}
            </div>
          </div>
          <div className="rounded-[2rem] border border-emerald-900/10 bg-white/75 p-8 shadow-[0_28px_100px_rgba(18,92,61,0.09)]">
            <div className="text-sm uppercase tracking-[0.3em] text-sky-700/70">Explore more</div>
            <div className="mt-6 space-y-3">
              {related.map(([path, item]) => path !== readRoute() && (
                <button key={path} onClick={() => go(path)} className="flex w-full items-center justify-between rounded-2xl border border-emerald-900/10 bg-white p-4 text-left transition hover:bg-emerald-50">
                  <span className="font-semibold text-slate-900">{item.title}</span><ArrowRight size={17} className="text-emerald-700" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function EducationPage() {
  return <DetailPage type="solution" data={{ eyebrow: "Education", title: "Learning systems that students can see, touch and measure.", subtitle: "ResonaLoop brings ecology, growing systems, sensors and AI-guided maintenance into classrooms, school gardens and sustainability programs.", icon: School, bullets: ["Classroom-friendly living system design", "Student observation and data logging", "Water-cycle and plant-growth activities", "Optional dashboard for learning outcomes"] }} />;
}

function VisionPage() {
  return (
    <>
      <PageHero cta={false} data={{ eyebrow: "Vision", title: "Designed for homes today. Inspired by closed-loop habitats of tomorrow.", subtitle: "ResonaLoop begins with practical living systems, but the long-term ambition is to make circular systems more intelligent, measurable and scalable — from homes and schools to off-grid communities and future habitats.", icon: Rocket, imageTone: "from-sky-100 via-emerald-50 to-white", bullets: ["Practical systems for everyday spaces", "Data-driven care and improvement", "Resilient off-grid and community concepts", "Future closed-loop habitat research"] }} />
      <Section className="py-20">
        <div className="grid gap-5 md:grid-cols-4">
          {[[TreePine,"Homes"],[ShieldCheck,"Shelters"],[CloudSun,"Remote bases"],[Telescope,"Deep space"]].map(([Icon,label]) => <div key={label} className="rounded-[2rem] border border-emerald-900/10 bg-white/75 p-8 text-center shadow-sm"><Icon className="mx-auto text-emerald-700" size={34} /><div className="mt-4 font-semibold">{label}</div></div>)}
        </div>
      </Section>
    </>
  );
}

function AboutPage() {
  return <DetailPage type="solution" data={{ eyebrow: "About ResonaLoop", title: "Building the operating layer for circular living.", subtitle: "ResonaLoop is an AI-assisted permaculture and circular living system platform. We help people design, monitor and improve practical living loops that connect growing spaces, water movement, organic matter, energy awareness and environmental data.", icon: Leaf, bullets: ["Practical systems before abstract sustainability claims", "AI as a care layer, not a gimmick", "Sensor Kit as a product foundation", "Long-term vision for resilient living spaces"] }} />;
}

function PlanYourLoopPage() {
  const [profile, setProfile] = useState("Homeowner");
  const [space, setSpace] = useState("Backyard");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const suggestedPath = profile === "School / childcare" ? "Start with a School Learning Loop and a sensor-assisted learning dashboard." : profile === "Community / organisation" ? "Start with a Community Circular Loop and measurable public-facing outcomes." : space === "Balcony" ? "Start with a compact Home Living Loop and optional Sensor Kit." : "Start with a system design consultation, then add monitoring when the first loop is ready.";

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) { setStatus("error"); setStatusMessage("Please enter your email address."); return; }
    setStatus("loading"); setStatusMessage("Submitting your request...");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ profile, space, email, message, suggestedPath, source: "ResonaLoop Plan Your Loop page" }) });
      if (response.ok) { setStatus("success"); setStatusMessage("Thank you! Your request has been submitted."); setEmail(""); setMessage(""); }
      else { setStatus("error"); setStatusMessage("Something went wrong. Please try again."); }
    } catch { setStatus("error"); setStatusMessage("Network error. Please check your connection and try again."); }
  }

  return (
    <>
      <PageHero cta={false} data={{ eyebrow: "Plan Your Loop", title: "Tell us about your space. We’ll help you find the right first loop.", subtitle: "Use this page as the main conversion point for consultation, pilot users and custom system design enquiries.", icon: Send, imageTone: "from-emerald-100 via-white to-sky-50", bullets: ["Home, school or community space", "Budget and maintenance preferences", "Smart monitoring interest", "Suggested first pathway"] }} />
      <Section className="py-20">
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl rounded-[2.5rem] border border-emerald-900/10 bg-white/80 p-6 shadow-[0_35px_120px_rgba(18,92,61,0.12)] sm:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">I am a<select value={profile} onChange={(e) => setProfile(e.target.value)} className="mt-2 w-full rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 outline-none focus:border-emerald-500/60"><option>Homeowner</option><option>School / childcare</option><option>Community / organisation</option><option>Installer / landscaper</option><option>Investor / research partner</option></select></label>
            <label className="text-sm font-medium text-slate-700">Space type<select value={space} onChange={(e) => setSpace(e.target.value)} className="mt-2 w-full rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 outline-none focus:border-emerald-500/60"><option>Balcony</option><option>Backyard</option><option>Courtyard</option><option>Indoor room</option><option>School garden</option><option>Community space</option></select></label>
            <label className="md:col-span-2 text-sm font-medium text-slate-700">Email<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 outline-none focus:border-emerald-500/60" /></label>
            <label className="md:col-span-2 text-sm font-medium text-slate-700">What do you want ResonaLoop to solve?<textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="e.g. I have a small backyard and want a low-maintenance circular growing system..." className="mt-2 w-full resize-none rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 outline-none focus:border-emerald-500/60" /></label>
          </div>
          <div className="mt-6 rounded-3xl border border-emerald-900/10 bg-emerald-50 p-5"><div className="font-semibold text-emerald-950">Suggested path</div><p className="mt-2 text-sm leading-7 text-slate-600">{suggestedPath}</p></div>
          {statusMessage && <div className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${status === "success" ? "border-emerald-700/20 bg-emerald-50 text-emerald-900" : status === "error" ? "border-red-700/20 bg-red-50 text-red-800" : "border-slate-300 bg-slate-50 text-slate-700"}`}>{statusMessage}</div>}
          <button disabled={status === "loading"} type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-6 py-4 font-semibold text-white hover:bg-emerald-800 disabled:opacity-60">{status === "loading" ? "Submitting..." : "Request consultation"}<Send size={17} /></button>
        </form>
      </Section>
    </>
  );
}

export default function ResonaLoopApp() {
  const route = useRoute();
  const page = useMemo(() => {
    if (solutions[route]) return <DetailPage type="solution" data={solutions[route]} />;
    if (platform[route]) return <DetailPage type="platform" data={platform[route]} />;
    if (services[route]) return <DetailPage type="service" data={services[route]} />;
    if (route === "/education") return <EducationPage />;
    if (route === "/vision") return <VisionPage />;
    if (route === "/about") return <AboutPage />;
    if (route === "/plan-your-loop") return <PlanYourLoopPage />;
    return <HomePage />;
  }, [route]);

  return <Layout route={route}>{page}</Layout>;
}
