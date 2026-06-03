import React, { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Leaf,
  Droplets,
  Recycle,
  BrainCircuit,
  Satellite,
  Sparkles,
  ArrowRight,
  Activity,
  Sprout,
  Gauge,
  ScanLine,
  Home,
  School,
  Users,
  Rocket,
  CheckCircle2,
  Waves,
  Cpu,
  BatteryCharging,
  SunMedium,
  Orbit,
  ShieldCheck,
  TreePine,
  Telescope,
  CloudSun,
  Mail,
  MapPinned,
  Send,
} from "lucide-react";

const Section = ({ children, className = "" }) => (
  <section className={`relative mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</section>
);

const SoftOrb = ({ className = "" }) => (
  <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />
);

const Stat = ({ label, value, suffix = "", icon: Icon }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    className="rounded-3xl border border-emerald-900/10 bg-white/75 p-4 shadow-[0_24px_70px_rgba(18,92,61,0.08)] backdrop-blur-xl"
  >
    <div className="flex items-center gap-3">
      <div className="rounded-2xl border border-emerald-700/10 bg-emerald-100 p-2 text-emerald-700">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-2xl font-semibold tracking-tight text-slate-950">{value}<span className="text-base text-emerald-700">{suffix}</span></div>
        <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{label}</div>
      </div>
    </div>
  </motion.div>
);

const LoopCard = ({ icon: Icon, title, text, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -8 }}
    className="group relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white/70 p-6 shadow-[0_24px_90px_rgba(18,92,61,0.08)] backdrop-blur-2xl"
  >
    <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl ${accent}`} />
    <div className="relative z-10">
      <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl border border-emerald-900/10 bg-emerald-50 text-emerald-700 shadow-[0_0_35px_rgba(16,185,129,0.12)]">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
  </motion.div>
);

const ProductCard = ({ title, subtitle, price, bullets, icon: Icon, tag }) => (
  <motion.div
    whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
    transition={{ type: "spring", stiffness: 220, damping: 18 }}
    className="relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white/75 p-6 shadow-[0_30px_100px_rgba(18,92,61,0.10)] backdrop-blur-xl"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(16,185,129,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(125,211,252,0.18),transparent_38%)]" />
    <div className="relative z-10">
      <div className="mb-5 flex items-center justify-between">
        <div className="rounded-2xl border border-emerald-900/10 bg-emerald-50 p-3 text-emerald-700"><Icon size={24} /></div>
        <span className="rounded-full border border-emerald-700/15 bg-emerald-100/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-800">{tag}</span>
      </div>
      <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 min-h-[56px] text-sm leading-7 text-slate-600">{subtitle}</p>
      <div className="mt-5 text-3xl font-semibold text-slate-950">{price}</div>
      <div className="mt-6 space-y-3">
        {bullets.map((b) => (
          <div key={b} className="flex items-start gap-3 text-sm text-slate-650">
            <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={16} />
            <span>{b}</span>
          </div>
        ))}
      </div>
      <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-900/10 bg-emerald-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-800">
        Explore <ArrowRight size={16} />
      </button>
    </div>
  </motion.div>
);

function PlannerDemo() {
  const [space, setSpace] = useState("Backyard");
  const [budget, setBudget] = useState(3000);
  const [goal, setGoal] = useState("Low Maintenance");

  const score = useMemo(() => {
    const base = space === "Balcony" ? 72 : space === "Courtyard" ? 78 : 86;
    const boost = budget > 5000 ? 8 : budget > 1500 ? 4 : 0;
    return Math.min(96, base + boost + (goal === "Water Saving" ? 2 : 0));
  }, [space, budget, goal]);

  const recommended = space === "Balcony" ? "ResonaLoop Tower Mini" : budget > 5000 ? "Custom Managed Backyard" : "Smart Loop Starter Pack";

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[2rem] border border-emerald-900/10 bg-white/75 p-6 shadow-[0_30px_90px_rgba(18,92,61,0.08)] backdrop-blur-xl">
        <div className="mb-6 flex items-center gap-3">
          <ScanLine className="text-emerald-700" />
          <div>
            <h3 className="text-xl font-semibold text-slate-950">AI Planner Input</h3>
            <p className="text-sm text-slate-500">A lead-generation interface that feels like a product</p>
          </div>
        </div>
        <div className="space-y-5">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.22em] text-slate-500">Space type</span>
            <select value={space} onChange={(e) => setSpace(e.target.value)} className="mt-2 w-full rounded-2xl border border-emerald-900/10 bg-white/80 px-4 py-3 text-slate-900 outline-none focus:border-emerald-500/60">
              <option>Backyard</option><option>Balcony</option><option>Courtyard</option><option>Deck</option>
            </select>
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.22em] text-slate-500">Budget: ${budget.toLocaleString()}</span>
            <input type="range" min="500" max="10000" step="500" value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="mt-3 w-full accent-emerald-600" />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.22em] text-slate-500">Main goal</span>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {["Grow Food", "Kids Learning", "Low Maintenance", "Water Saving"].map((g) => (
                <button key={g} onClick={() => setGoal(g)} className={`rounded-2xl border px-4 py-3 text-sm transition ${goal === g ? "border-emerald-500/40 bg-emerald-100 text-emerald-950" : "border-emerald-900/10 bg-white/60 text-slate-600 hover:bg-emerald-50"}`}>{g}</button>
              ))}
            </div>
          </label>
        </div>
      </div>

      <motion.div layout className="relative overflow-hidden rounded-[2rem] border border-emerald-700/15 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 shadow-[0_30px_110px_rgba(18,92,61,0.10)] backdrop-blur-2xl">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.10) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-emerald-700/70">AI Plan Preview</div>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950">{recommended}</h3>
              <p className="mt-2 text-sm text-slate-600">Generated for a {space.toLowerCase()} focused on {goal.toLowerCase()}.</p>
            </div>
            <div className="rounded-2xl border border-emerald-900/10 bg-white/80 p-4 text-center shadow-sm">
              <div className="text-3xl font-semibold text-slate-950">{score}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-700/70">Potential</div>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Weekly care" value={space === "Balcony" ? "9" : "18"} suffix="m" icon={Activity} />
            <Stat label="Water loop" value={goal === "Water Saving" ? "92" : "81"} icon={Droplets} />
            <Stat label="Yield" value={space === "Balcony" ? "1.4" : "4.8"} suffix="kg" icon={Sprout} />
            <Stat label="Waste cut" value={budget > 1500 ? "5.2" : "2.1"} suffix="kg" icon={Recycle} />
          </div>

          <div className="mt-7 rounded-3xl border border-emerald-900/10 bg-white/75 p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-950"><Cpu size={17} className="text-sky-600" /> AI implementation route</div>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex gap-3"><span className="font-semibold text-emerald-700">01</span> Map zones, sunlight and water access</div>
              <div className="flex gap-3"><span className="font-semibold text-emerald-700">02</span> Recommend modules and procurement list</div>
              <div className="flex gap-3"><span className="font-semibold text-emerald-700">03</span> Build maintenance calendar and Loop Health model</div>
              <div className="flex gap-3"><span className="font-semibold text-emerald-700">04</span> Generate ESG impact and upgrade pathway</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function LoopCore() {
  const nodes = [
    { label: "Water", icon: Droplets, angle: 0 },
    { label: "Food", icon: Leaf, angle: 90 },
    { label: "Waste", icon: Recycle, angle: 180 },
    { label: "AI", icon: BrainCircuit, angle: 270 },
  ];
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute inset-10 rounded-full border border-emerald-500/18" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 65, repeat: Infinity, ease: "linear" }} className="absolute inset-20 rounded-full border border-sky-400/18 border-dashed" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.16),transparent_55%)]" />
      {nodes.map(({ label, icon: Icon, angle }) => {
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * 40;
        const y = Math.sin(rad) * 40;
        return (
          <motion.div
            key={label}
            whileHover={{ scale: 1.08 }}
            className="absolute flex h-24 w-24 flex-col items-center justify-center rounded-3xl border border-emerald-900/10 bg-white/80 text-center shadow-[0_18px_55px_rgba(18,92,61,0.10)] backdrop-blur-xl"
            style={{ left: `calc(50% + ${x}% - 48px)`, top: `calc(50% + ${y}% - 48px)` }}
          >
            <Icon size={25} className="text-emerald-700" />
            <span className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">{label}</span>
          </motion.div>
        );
      })}
      <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-emerald-500/25 bg-white/85 shadow-[0_0_90px_rgba(16,185,129,0.28)] backdrop-blur-xl">
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

function EarlyAccessForm() {
  const [profile, setProfile] = useState("Homeowner");
  const [space, setSpace] = useState("Backyard");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdqpqpp";

  const suggestedPath =
    profile === "School / childcare"
      ? "Start with a ResonaLoop Tower Pro and learning dashboard for sustainability education."
      : profile === "Installer / landscaper"
      ? "Join the partner network for managed habitat and backyard installations."
      : profile === "Investor / research partner"
      ? "Explore the StarLoop roadmap and closed-loop habitat research pathway."
      : space === "Balcony"
      ? "Start with ResonaLoop Tower Mini and AI Care subscription."
      : "Start with ResonaLoop Planner, then upgrade to Starter Loop or custom habitat design.";

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setStatusMessage("Please enter your email address.");
      return;
    }

    setStatus("loading");
    setStatusMessage("Submitting your request...");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          profile,
          space,
          email,
          message,
          suggestedPath,
          source: "ResonaLoop website early access form",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setStatusMessage("Thank you! Your early access request has been submitted.");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setStatusMessage(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-900/10 bg-emerald-950 p-8 text-white shadow-[0_35px_110px_rgba(18,92,61,0.20)] lg:p-10">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-emerald-50 backdrop-blur-xl">
            <Mail size={16} /> Early Access
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Turn interest into the first ResonaLoop pilot.
          </h2>

          <p className="mt-6 text-lg leading-8 text-emerald-50/70">
            Collect homeowners, schools, installers and research partners from
            the same page. The website becomes the first product funnel, not
            just a brochure.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
              <MapPinned className="text-emerald-100" />
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/45">
                Pilot market
              </div>
              <div className="mt-1 text-xl font-semibold">Melbourne first</div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
              <Orbit className="text-sky-100" />
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/45">
                Roadmap
              </div>
              <div className="mt-1 text-xl font-semibold">Earth to habitat</div>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-[2.5rem] border border-emerald-900/10 bg-white/80 p-6 shadow-[0_35px_110px_rgba(18,92,61,0.10)] backdrop-blur-2xl lg:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.22em] text-slate-500">
              I am a
            </span>
            <select
              name="profile"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-500/60"
            >
              <option>Homeowner</option>
              <option>Apartment resident</option>
              <option>School / childcare</option>
              <option>Installer / landscaper</option>
              <option>Investor / research partner</option>
            </select>
          </label>

          <label className="block">
            <span className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Space type
            </span>
            <select
              name="space"
              value={space}
              onChange={(e) => setSpace(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-500/60"
            >
              <option>Backyard</option>
              <option>Balcony</option>
              <option>Courtyard</option>
              <option>School garden</option>
              <option>Research / demo site</option>
            </select>
          </label>

          <label className="block sm:col-span-2">
            <span className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Email
            </span>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-500/60"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-xs uppercase tracking-[0.22em] text-slate-500">
              What do you want ResonaLoop to solve?
            </span>
            <textarea
              name="message"
              rows={4}
              placeholder="e.g. I have a 7m × 4m backyard and want a low-maintenance edible garden for my family..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full resize-none rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-500/60"
            />
          </label>
        </div>

        <div className="mt-6 rounded-3xl border border-emerald-900/10 bg-emerald-50 p-5">
          <div className="text-sm font-semibold text-emerald-950">
            Suggested path
          </div>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {suggestedPath}
          </p>
        </div>

        {statusMessage && (
          <div
            className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
              status === "success"
                ? "border-emerald-700/20 bg-emerald-50 text-emerald-900"
                : status === "error"
                ? "border-red-700/20 bg-red-50 text-red-800"
                : "border-slate-300 bg-slate-50 text-slate-700"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-6 py-4 font-semibold text-white shadow-[0_22px_55px_rgba(18,92,61,0.20)] hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Submitting..." : "Request early access"}
          <Send size={17} />
        </button>
      </form>
    </div>
  );
}

export default function ResonaLoopLandingPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 90]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7FBF4] text-slate-950 selection:bg-emerald-200 selection:text-slate-950">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(187,247,208,0.70),transparent_30%),radial-gradient(circle_at_78%_8%,rgba(186,230,253,0.62),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(254,240,138,0.22),transparent_32%),linear-gradient(180deg,#F7FBF4_0%,#EEF8EB_45%,#F8FBFF_100%)]" />
        <div className="absolute inset-0 opacity-[0.30]" style={{ backgroundImage: "linear-gradient(rgba(21,128,61,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(21,128,61,0.08) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
      </div>

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-emerald-900/10 bg-white/55 backdrop-blur-2xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-700/15 bg-emerald-100 shadow-[0_0_35px_rgba(16,185,129,0.14)]"><Leaf size={20} className="text-emerald-700" /></div>
            <div>
              <div className="text-sm font-semibold tracking-wide text-slate-950">ResonaLoop AI</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Backyard to Deep Space</div>
            </div>
          </div>
          <div className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
            <a href="#system" className="hover:text-emerald-800">System</a>
            <a href="#planner" className="hover:text-emerald-800">Planner</a>
            <a href="#products" className="hover:text-emerald-800">Products</a>
            <a href="#vision" className="hover:text-emerald-800">Vision</a>
          </div>
          <a href="#planner" className="rounded-full border border-emerald-700/15 bg-emerald-900 px-5 py-2.5 text-sm font-medium text-white shadow-[0_18px_45px_rgba(18,92,61,0.18)] hover:bg-emerald-800">Design My Loop</a>
        </div>
      </nav>

      <header className="relative flex min-h-screen items-center pt-24">
        <SoftOrb className="left-1/2 top-32 h-72 w-72 -translate-x-1/2 bg-emerald-300/45" />
        <SoftOrb className="right-10 top-52 h-80 w-80 bg-sky-300/30" />
        <SpaceArc />
        <Section className="grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div style={{ y: heroY }}>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/65 px-4 py-2 text-sm text-emerald-800 shadow-sm backdrop-blur-xl">
              <Satellite size={16} /> Regenerative loops for today’s spaces and tomorrow’s habitats
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
              Build a living loop.
              <span className="block bg-gradient-to-r from-emerald-800 via-emerald-500 to-sky-600 bg-clip-text text-transparent">Resonate with the future.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              ResonaLoop designs, monitors, and optimises AI-managed resource loops — connecting water, food, waste, plants, sensors, and intelligence into one regenerative system for homes, communities, and future habitats.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#planner" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-6 py-4 font-semibold text-white shadow-[0_22px_55px_rgba(18,92,61,0.22)] transition hover:scale-[1.02]">Design My ResonaLoop <ArrowRight className="transition group-hover:translate-x-1" size={18} /></a>
              <a href="#vision" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-900/10 bg-white/65 px-6 py-4 font-semibold text-slate-950 backdrop-blur-xl hover:bg-white/90">Explore StarLoop Vision</a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <LoopCore />
            <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-emerald-900/10 bg-white/75 p-4 shadow-[0_18px_60px_rgba(18,92,61,0.10)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Live Loop Console</div>
                  <div className="mt-1 text-lg font-semibold text-slate-950">System stable · AI optimising</div>
                </div>
                <div className="rounded-2xl border border-emerald-700/15 bg-emerald-100 px-4 py-2 text-2xl font-semibold text-emerald-900">87</div>
              </div>
            </div>
          </motion.div>
        </Section>
      </header>

      <Section id="system" className="py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-emerald-700/70">The system</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Not just gardening. A regenerative home operating system.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">Every household consumes water, produces organic waste, underuses space and wants a healthier lifestyle. ResonaLoop AI turns those scattered resources into a managed, measurable and ESG-friendly system.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <LoopCard icon={Droplets} title="Water Loop" text="Rainwater, irrigation logic, moisture sensing and weather-aware water saving." accent="bg-sky-300/35" />
          <LoopCard icon={Sprout} title="Food Loop" text="Vertical towers, raised beds, herbs, leafy greens and harvest forecasting." accent="bg-emerald-300/35" />
          <LoopCard icon={Recycle} title="Waste Loop" text="Kitchen waste, compost, worm farms and nutrient return pathways." accent="bg-amber-300/28" />
          <LoopCard icon={BrainCircuit} title="Intelligence Loop" text="Sensors, image diagnosis, optimisation, simple tasks and ESG reporting." accent="bg-lime-300/30" />
        </div>
      </Section>

      <Section id="planner" className="py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-sky-700/70">AI Planner</div>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Enter your space. AI builds the plan.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-600">Backyard, balcony, courtyard or deck — the planner calculates layout, modules, maintenance routines and sustainability metrics.</p>
        </div>
        <PlannerDemo />
      </Section>

      <Section id="products" className="py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-amber-700/70">Product paths</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Choose the loop that fits your life.</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <ProductCard icon={ScanLine} tag="Entry" title="ResonaLoop Planner" subtitle="AI-generated DIY plans for yards, balconies and courtyards." price="$49+" bullets={["Space diagnosis and layout", "Materials and installation steps", "Seasonal planting calendar", "ESG impact estimate"]} />
          <ProductCard icon={Waves} tag="Device" title="ResonaLoop Tower" subtitle="An AI-managed vertical living system for small spaces." price="$699+" bullets={["Automatic irrigation", "Plant health diagnosis", "Seed and nutrient subscription", "Family learning mode"]} />
          <ProductCard icon={Home} tag="Premium" title="Custom Backyard" subtitle="Managed ecological backyard design, installation and optimisation." price="$3k+" bullets={["AI + human design review", "Rain, compost and edible garden", "Partner installation network", "Ongoing managed service"]} />
        </div>
      </Section>

      <Section className="py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-emerald-700/70">AI management</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">AI does more than recommend. It manages.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">The system reads sensor data, weather, images and user actions. It diagnoses system health, predicts risks, optimises routines and tells the user exactly what to do next.</p>
          </div>
          <div className="rounded-[2rem] border border-emerald-900/10 bg-white/75 p-6 shadow-[0_30px_90px_rgba(18,92,61,0.08)] backdrop-blur-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Loop Health Score</div>
                <div className="mt-1 text-4xl font-semibold text-slate-950">87/100</div>
              </div>
              <Gauge className="text-emerald-700" size={44} />
            </div>
            <div className="space-y-4">
              {[
                ["Plant Health", "Stable", 88],
                ["Water Efficiency", "Optimised", 92],
                ["Compost Balance", "Needs dry carbon", 68],
                ["System Stability", "Strong", 84],
              ].map(([label, status, val]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm"><span className="text-slate-700">{label}</span><span className="text-slate-500">{status}</span></div>
                  <div className="h-2 overflow-hidden rounded-full bg-emerald-900/8"><motion.div initial={{ width: 0 }} whileInView={{ width: `${val}%` }} viewport={{ once: true }} transition={{ duration: 1.1 }} className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-sky-400" /></div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-amber-700/15 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
              Next action: add one handful of dry carbon to compost module within 24 hours. Irrigation is paused due to forecast rain.
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-900/10 bg-gradient-to-br from-white/80 to-emerald-50/80 p-8 shadow-[0_35px_120px_rgba(18,92,61,0.10)] backdrop-blur-2xl lg:p-12">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl" />
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-emerald-700/70">ResonaLoop Tower</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">No backyard? Build a living loop on a balcony.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">A compact AI-managed vertical ecosystem for herbs, leafy greens and family learning. Designed for apartments, townhouses, decks and small outdoor spaces.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Stat label="Plants" value="30" suffix="+" icon={Leaf} />
                <Stat label="Care time" value="10" suffix="m/w" icon={Activity} />
              </div>
            </div>
            <div className="relative mx-auto h-[520px] w-full max-w-sm">
              <div className="absolute bottom-0 left-1/2 h-[470px] w-52 -translate-x-1/2 rounded-[3rem] border border-emerald-900/10 bg-white/75 shadow-[0_0_100px_rgba(16,185,129,0.18)]" />
              {[0,1,2,3,4].map((i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 ? 45 : -45 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="absolute left-1/2 h-16 w-80 -translate-x-1/2 rounded-3xl border border-emerald-700/15 bg-gradient-to-r from-emerald-100 via-white to-sky-100 shadow-[0_18px_45px_rgba(18,92,61,0.08)] backdrop-blur-xl" style={{ top: 50 + i * 78 }}>
                  <div className="flex h-full items-center justify-around px-6">
                    {Array.from({ length: 5 }).map((_, j) => <Sprout key={j} size={20 + ((i+j)%2)*5} className="text-emerald-700" />)}
                  </div>
                </motion.div>
              ))}
              <div className="absolute bottom-8 left-1/2 flex h-24 w-64 -translate-x-1/2 items-center justify-center rounded-[2rem] border border-sky-700/15 bg-sky-100 text-sky-900 shadow-sm backdrop-blur-xl"><BatteryCharging className="mr-3" /> AI water core</div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-sky-700/70">Impact</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Sustainability you can measure.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-600">Home ESG reports transform everyday actions into visible metrics: waste recycled, water saved, herbs harvested and learning moments created.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Stat label="Kitchen waste" value="5.8" suffix="kg" icon={Recycle} />
          <Stat label="Water saved" value="42" suffix="L" icon={Droplets} />
          <Stat label="Herbs harvested" value="380" suffix="g" icon={Leaf} />
          <Stat label="Learning sessions" value="6" icon={School} />
        </div>
      </Section>

      <Section className="py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <LoopCard icon={Home} title="Families" text="Grow food, recycle waste and give children a screen-free way to understand living systems." accent="bg-emerald-300/30" />
          <LoopCard icon={School} title="Schools" text="STEM and sustainability learning gardens with dashboards, tasks and class reports." accent="bg-sky-300/30" />
          <LoopCard icon={Users} title="Communities" text="Neighbourhood resource loops, local exchange, shared compost and measurable green impact." accent="bg-amber-300/25" />
        </div>
      </Section>

      <Section id="vision" className="py-24">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-emerald-900/10 bg-gradient-to-br from-white/85 via-sky-50 to-emerald-50 p-8 text-center shadow-[0_40px_130px_rgba(18,92,61,0.12)] backdrop-blur-2xl lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.35),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.20),transparent_42%)]" />
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/20" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 130, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/20 border-dashed" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-sky-700/15 bg-white/80 text-sky-700 shadow-sm">
              <Rocket size={38} />
            </div>
            <div className="mt-6 text-sm uppercase tracking-[0.3em] text-sky-700/70">StarLoop Vision</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">From sustainable homes to deep-space habitats.</h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-600">The same intelligence that helps homes recycle water, grow food and manage waste today can help shape closed-loop living systems tomorrow — from off-grid communities to disaster shelters, remote stations, lunar bases and long-duration spacecraft.</p>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                [TreePine, "Homes"],
                [ShieldCheck, "Shelters"],
                [CloudSun, "Remote bases"],
                [Telescope, "Deep space"],
              ].map(([Icon, label]) => (
                <div key={label} className="rounded-3xl border border-emerald-900/10 bg-white/70 p-4 shadow-sm backdrop-blur-xl">
                  <Icon className="mx-auto text-emerald-700" />
                  <div className="mt-3 text-sm font-semibold text-slate-800">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#planner" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-6 py-4 font-semibold text-white">Start with one small loop <ArrowRight size={18} /></a>
              <a href="#early-access" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-900/10 bg-white/75 px-6 py-4 font-semibold text-slate-950">Join early access</a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="early-access" className="py-24">
        <EarlyAccessForm />
      </Section>

      <footer className="border-t border-emerald-900/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 text-sm text-slate-500 sm:px-8 md:flex-row">
          <div>© 2026 ResonaLoop AI · Plan the loop. Build the system. Grow the future.</div>
          <div className="flex gap-5"><span>Planner</span><span>Tower</span><span>Backyard</span><span>StarLoop</span></div>
        </div>
      </footer>
    </div>
  );
}
