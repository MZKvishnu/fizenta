import { useState, type SVGProps } from "react";
import fixentaLogo from "../imports/fixentalogo.jpeg";
import fixatalogob from "../imports/logobottom.jpeg";
import fixantaboy from "../imports/fixantaboy.jpeg";
import { ImWhatsapp } from "react-icons/im";
import { FaGalacticRepublic } from "react-icons/fa";
import { RiFridgeFill } from "react-icons/ri";
import { MdCleaningServices } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import { GiWaterSplash } from "react-icons/gi";
import { GiPizzaCutter } from "react-icons/gi";
import { GiCoconuts } from "react-icons/gi";
import { GiHighGrass } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";
import {
  Home, Wrench, Car, Leaf, Star, Shield, Clock, DollarSign,
  Phone, Mail, MapPin, ChevronRight, Menu, X, ArrowRight,
  CheckCircle, Users, Award, Headphones, Search, Zap,
  Droplets, Paintbrush, Lightbulb, Hammer, Truck, Tractor,
  TreePine, Sprout, Package, Wind, Settings, Scissors,
  MessageSquare, CalendarCheck, ThumbsUp, Facebook, Twitter,
  Instagram, Linkedin, ChevronDown
} from "lucide-react";
function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16.7 7.3a5.7 5.7 0 0 0-8.06 0c-2.2 2.2-2.2 5.8 0 8 0 .02 0 .03.01.05l-1.5 4.3 4.4-1.4c.7.38 1.5.58 2.4.58 3.1 0 5.7-2.5 5.7-5.7 0-1.5-.58-2.9-1.7-3.9Z" />
      <path d="M15.1 14.6c-.23-.1-1.35-.67-1.56-.74-.21-.07-.36-.1-.51.1-.15.2-.58.74-.71.89-.13.15-.26.18-.5.06-.23-.1-.97-.36-1.84-1.14-.68-.61-1.14-1.35-1.27-1.59-.13-.23-.01-.35.1-.46.1-.1.23-.26.35-.39.12-.13.16-.22.25-.37.08-.15.04-.28-.02-.39-.07-.1-.51-1.23-.7-1.69-.18-.44-.37-.38-.51-.38-.13 0-.28 0-.43 0-.14 0-.37.05-.56.26-.18.2-.7.68-.7 1.64 0 .96.72 1.88.82 2.01.1.12 1.41 2.15 3.42 3.02.48.21.85.33 1.14.42.48.15.91.13 1.25.08.38-.05 1.35-.55 1.54-1.08.18-.54.18-1 .13-1.08-.05-.08-.18-.13-.4-.23Z" />
    </svg>
  );
}
// ─── Data ───────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Home", "Services", "For Workers", "About Us", "Contact Us"];

const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://www.facebook.com/fixenta" },
  { icon: Instagram, href: "https://www.instagram.com/fixentaindia?igsh=MTV1YnpveTVwbWwwbA==" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/heymirshad/" },
  { icon: ImWhatsapp, href: "https://wa.me/message/IQS3APZEMZOGC1" }
];

const STATS = [
  { value: "20+", label: "Verified Professionals" },
  { value: "98%", label: "Quality Assurance" },
  { value: "24/7", label: "Available Support" },
  { value: "Best", label: "Guaranteed Price" },
];

const HOME_SERVICES = [
  { icon: Wrench, label: "Plumbing" },
  { icon: Lightbulb, label: "Electrical" },
  { icon: FaGalacticRepublic, label: "AC Repair" },
  { icon: RiFridgeFill, label: "fridge Repair" },
  { icon: Droplets, label: "Cleaning" },
  { icon: MdCleaningServices, label: "Wall Cleaning" },
  { icon: MdOutlineCleaningServices, label: "Theresa Cleaning" },
  { icon: GiWaterSplash, label: "interlock cleaning" }
];

const AGRI_SERVICES = [
  { icon: Tractor, label: "soil tilling" },
  { icon: GiPizzaCutter, label: "tree cutting" },
  { icon: GiCoconuts, label: "coconut cuttingg" },
  { icon: GiHighGrass, label: "Grass cutting" }
];

const TRANSPORT_SERVICES = [
  { icon: FaCarAlt, label: "pick and drop" }
];

const WHY_ITEMS = [
  {
    icon: Shield,
    title: "Verified Professionals",
    desc: "All service providers are background checked, licensed, and vetted before joining our platform.",
    color: "bg-[#FFF0E8]",
    iconColor: "text-primary",
  },
  {
    icon: ThumbsUp,
    title: "On-Time Guarantee",
    desc: "We promise punctuality. If a pro is late, you get a discount automatically, no questions asked.",
    color: "bg-[#EBF1FA]",
    iconColor: "text-secondary",
  },
  {
    icon: Award,
    title: "Quality Assured",
    desc: "Every job comes with a 30-day service warranty. Not satisfied? We rebook for free.",
    color: "bg-[#FFF0E8]",
    iconColor: "text-primary",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Our customer team is available around the clock call, chat, or email anytime you need help.",
    color: "bg-[#EBF1FA]",
    iconColor: "text-secondary",
  },
];

const HOW_STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Contact Us",
    desc: "Tell us what service you need and where you're located. Takes under 2 minutes.",
  },
  {
    step: "02",
    icon: CalendarCheck,
    title: "Get Matched",
    desc: "We connect you with the best-rated professional available in your area.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Service Delivery",
    desc: "Your pro arrives on time, gets the job done, and you pay only when satisfied.",
  },
  {
    step: "04",
    icon: Star,
    title: "Rate & Review",
    desc: "Share your experience to help the community and earn loyalty rewards.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function ServiceIcon({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="group flex flex-col items-center gap-3 cursor-pointer">
      <div className="w-16 h-16 rounded-2xl bg-[#F7F5F0] border border-[rgba(26,23,20,0.08)] flex items-center justify-center transition-all duration-200 group-hover:bg-[#FFF0E8] group-hover:border-[#D94F0D]/20 group-hover:shadow-md group-hover:-translate-y-0.5">
        <Icon className="w-7 h-7 text-[#6B6458] group-hover:text-[var(--text-orange)] transition-colors duration-200" />
      </div>
      <span className="text-xs font-medium text-center text-[var(--text-blur)] leading-tight">{label}</span>
    </div>
  );
}

function ServiceSection({
  title,
  services,
  tag,
}: {
  title: string;
  services: { icon: React.ElementType; label: string }[];
  tag: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-[rgba(26,23,20,0.08)] shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-orange)] mb-1.5 block">{tag}</span>
          <h3 className="text-xl font-bold text-[var(--text-blur)]" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
        </div>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-[var(--text-orange)] hover:gap-2.5 transition-all duration-200">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 sm:grid-cols-8">
        {services.map((s) => (
          <ServiceIcon key={s.label} icon={s.icon} label={s.label} />
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home Maintenance");

  // Scroll to a named section while accounting for the sticky header
  const scrollToSection = (link: string) => {
    try {
      const id = link; // NAV_LINKS uses readable labels that we'll use as ids
      const el = document.getElementById(id);
      const headerEl = document.querySelector("header");
      const offset = headerEl ? (headerEl.clientHeight || 0) + 8 : 8;
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        // fallback: scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } finally {
      // close mobile menu after navigation
      setMenuOpen(false);
    }
  };

  const tabServices = {
    "Home Maintenance": HOME_SERVICES,
    "Agriculture & Land": AGRI_SERVICES,
    "Transport": TRANSPORT_SERVICES,
  };

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{ fontFamily: "var(--font-sans)", background: "var(--background)" }}
    >
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[rgba(26,23,20,0.08)] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-transparent flex items-center justify-center">
              <img src={fixentaLogo} alt="Fixenta logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-[0.25rem]">
              <span
                className="text-xl relative -bottom-1.5 font-bold text-[var(--text-blur)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Fixenta
              </span>
              <span className="text-xs text-[var(--text-orange)]" style={{ fontFamily: "var(--font-sans)" }}>
                Trusted Services On Demand
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${i === 0
                  ? "text-[var(--text-orange)] bg-[#FFF0E8]"
                  : "text-[#6B6458] hover:text-[var(--text-blur)] hover:bg-[#F7F5F0]"
                  }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#Contact Us"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("Contact Us");
              }}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D94F0D] text-white text-sm font-semibold hover:bg-[#C04409] transition-colors duration-150 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Book a Service
            </a>
            <button
              className="lg:hidden p-2 rounded-lg text-[#6B6458] hover:bg-[#F7F5F0]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden px-6 pb-4 flex flex-col gap-1 border-t border-[rgba(26,23,20,0.08)]">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link);
                }}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#6B6458] hover:text-[var(--text-blur)] hover:bg-[#F7F5F0]"
              >
                {link}
              </a>
            ))}
            <button className="mt-2 px-5 py-2.5 rounded-xl bg-[#D94F0D] text-white text-sm font-semibold">
              Book a Service
            </button>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section id="Home" className="relative max-w-7xl mx-auto px-6 pt-8 pb-6 lg:pt-10 lg:pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E8] border border-[#D94F0D]/20 text-xs font-semibold text-[var(--text-orange)] mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D94F0D] animate-pulse" />
              Now available in vadkara
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] text-[var(--text-blur)] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trusted Services {" "}
              <span className="text-[var(--text-orange)]">On Demand</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6B6458] leading-relaxed mb-8 max-w-md">
              Book skilled, verified professionals for home maintenance, agriculture,
              and transport fast, reliable, and fairly priced. We are got you covered.
            </p>

            {/* Hero CTA buttons (replacing search) */}
            <div className="flex items-center gap-3 mb-8">
              <a
                href="https://wa.me/message/IQS3APZEMZOGC1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:brightness-95 transition-colors duration-150"
              >
                <ImWhatsapp className="w-4 h-4" />
                Book on WhatsApp
              </a>

              <a
                href="#Contact Us"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("Contact Us");
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D94F0D] text-[var(--text-orange)] bg-white text-sm font-semibold hover:bg-[#FFF8F6] transition-colors duration-150"
              >
                Become a Partner
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {["Verified Professionals", "Quality Assured", "24/7 Support", "Best Price"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-sm text-[#6B6458]">
                  <CheckCircle className="w-4 h-4 text-[#D94F0D]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="relative block mt-8 lg:mt-0">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFF0E8] to-[#EBF1FA] -z-10 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4" />
            <div className="relative rounded-3xl overflow-hidden bg-white aspect-[4/3] flex items-center justify-center shadow-sm">
              <img
                src={fixantaboy}
                alt="Professional handyman at work"
                className="w-full h-full object-contain"
              />
              {/* Floating card */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-lg flex items-center gap-3 sm:gap-4 border border-[rgba(26,23,20,0.06)]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF0E8] flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#D94F0D] fill-[#D94F0D]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[var(--text-blur)]">i am here</p>
                  <p className="text-[11px] sm:text-xs text-[#6B6458]">We are here to help </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="max-w-7xl mx-auto px-6 py-4 mb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl px-6 py-5 border border-[rgba(26,23,20,0.08)] shadow-sm flex flex-col gap-1"
            >
              <span
                className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--bgblue)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </span>
              <span className="text-sm text-[#6B6458] font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="Services" className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--text-orange)] mb-2">What We Offer</p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-blur)] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything You Need, We are Got You Covered
          </h2>
          <p className="text-[#6B6458] text-sm sm:text-base max-w-xl mx-auto">
            From fixing a leaky pipe to transporting your goods — browse hundreds of services across three major categories.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-6 flex-wrap justify-center">
          {Object.keys(tabServices).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${activeTab === tab
                ? "bg-[#D94F0D] text-white shadow-sm"
                : "bg-white text-[#6B6458] border border-[rgba(26,23,20,0.10)] hover:border-[#D94F0D]/30 hover:text-[var(--text-blur)]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[rgba(26,23,20,0.08)] shadow-sm">
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-6">
            {tabServices[activeTab as keyof typeof tabServices].map((s) => (
              <ServiceIcon key={s.label} icon={s.icon} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Fixenta ── */}
      <section id="About Us" className="max-w-7xl mx-auto px-6 py-12 bg-[var(--bgblue)]">
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--text-orange)] mb-2">Our Promise</p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#ffffff] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Choose Fixenta ?
          </h2>
          <p className="text-[#bababa] text-sm sm:text-base max-w-xl mx-auto">
            We deliver exceptional service because your home and your time deserve the very best.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-7 border border-[rgba(26,23,20,0.08)] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-5`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <h4
                className="font-bold text-[var(--text-blur)] mb-2 text-base sm:text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h4>
              <p className="text-sm text-[#6B6458] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--text-orange)] mb-2">Simple Process</p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-blur)] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How It Works
          </h2>
          <p className="text-[#6B6458] text-sm sm:text-base max-w-xl mx-auto">
            Getting a trusted professional to your door is simpler than ordering lunch.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-[rgba(26,23,20,0.08)] z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_STEPS.map((step, i) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[rgba(26,23,20,0.10)] shadow-sm flex items-center justify-center group-hover:border-[#D94F0D]">
                    <step.icon className="w-8 h-8 text-[#D94F0D]" />
                  </div>
                  <span
                    className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#1B3A6B] text-white text-xs font-bold flex items-center justify-center"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h4
                  className="font-bold text-[var(--text-blur)] mb-2 text-base sm:text-lg"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h4>
                <p className="text-sm text-[#6B6458] leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section id="For Workers" className="max-w-7xl mx-auto px-6 py-8 mb-6">
        <div className="relative rounded-3xl overflow-hidden bg-[var(--bgblue)] border border-[rgba(26,23,20,0.08)] shadow-sm">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white"
                style={{
                  width: `${120 + i * 80}px`,
                  height: `${120 + i * 80}px`,
                  top: "50%",
                  right: "10%",
                  transform: "translate(50%, -50%)",
                }}
              />
            ))}
          </div>

          <div className="relative px-10 py-14 lg:flex items-center justify-between gap-8">
            <div className="mb-8 lg:mb-0">
              <p className="text-[#E8A87C] text-sm font-semibold uppercase tracking-widest mb-3">
                Join the Network
              </p>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 max-w-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Join Fixenta's Growing Professional Network
              </h2>
              <p className="text-[#A8BDD4] text-sm sm:text-base max-w-md">
                Are you a skilled professional ? Get access to thousands of jobs in your area,
                manage your schedule, and grow your business with us.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button className="px-7 py-3.5 rounded-xl bg-[#D94F0D] text-white font-semibold hover:bg-[#C04409] transition-colors duration-150 shadow-lg">
                Become a Provider
              </button>
              <button className="px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors duration-150">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials strip ── */}
      <section className="max-w-7xl mx-auto px-6 py-8 mb-4">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              name: "Muhammad Faris",
              role: "Business",
              text: "I booked the grass cutting service, and the lawn looks neat and clean. The work was completed on time, and I'm happy with the service.",
              rating: 4,
              avatar: '/avatars/user1.jpeg',
            },
            {
              name: "Safeena Ali",
              role: "Entrepreneur",
              text: "I contacted them for AC repair, and the issue was fixed quickly. Good service at a reasonable price.",
              rating: 5,
              avatar: '/avatars/user2.jpeg',
            },
            {
              name: "Safeera Sidheek",
              role: "Startup Founder",
              text: "We used the home cleaning service, and the house looked fresh and spotless. The team was friendly and professional.",
              rating: 5,
              avatar: '/avatars/user3.jpeg',
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-[rgba(26,23,20,0.08)] shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D94F0D] fill-[#D94F0D]" />
                ))}
              </div>
              <p className="text-sm text-[#6B6458] leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover bg-[#EDE9E1]"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-blur)]">{t.name}</p>
                  <p className="text-xs text-[#6B6458]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="Contact Us" className="bg-[var(--bgblue)] text-white mt-8">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg  flex items-center justify-center">
                  <img src={fixentaLogo} alt="Fixenta logo" className="w-full h-full object-contain rounded-sm" />
                </div>
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Fixenta
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--texBottom)] leading-relaxed mb-5">
                Connecting you with trusted professionals for every service you need — fast, reliable, and fairly priced.
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#D94F0D] transition-colors duration-150"
                  >
                    <item.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5
                className="font-bold text-white mb-4 text-xs sm:text-sm uppercase tracking-wider"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Quick Links
              </h5>
              <ul className="space-y-2.5">
                {["Home", "Services", "For Workers", "About Us", "Blog", "Careers"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link);
                      }}
                      className="text-xs sm:text-sm text-[var(--texBottom)] hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h5
                className="font-bold text-white mb-4 text-xs sm:text-sm uppercase tracking-wider"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Services
              </h5>
              <ul className="space-y-2.5">
                {["Plumbing & Electrical", "Home Cleaning", "AC Repair", "Crop Planting", "Cargo & Movers", "Pest Control"].map((s) => (
                  <li key={s}>
                    <a href="#" className="text-xs sm:text-sm text-[var(--texBottom)] hover:text-white transition-colors duration-150">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5
                className="font-bold text-white mb-4 text-xs sm:text-sm uppercase tracking-wider"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contact Us
              </h5>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[var(--texBottom)] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-[var(--texBottom)]">703 4470 730</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[var(--texBottom)] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-[var(--texBottom)]"> Ig: @fixenta.india</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[var(--texBottom)] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-[var(--texBottom)]"> kuttiady Nearby Areas </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[var(--texBottom)]">© 2026 Fixenta. All rights reserved.</p>
            <div className="flex gap-5">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" className="text-xs text-[var(--texBottom)] hover:text-white transition-colors duration-150">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
