import { motion, useScroll, useTransform } from "motion/react";
import { personalData } from "../data";
import { useState, useEffect } from "react";

export default function Navigation() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(252, 252, 249, 0)", "rgba(252, 252, 249, 0.9)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["tech", "philosophy", "cross", "personal"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "tech", label: "AI & Tech" },
    { id: "philosophy", label: "Academic Philosophy" },
    { id: "cross", label: "NGO - Ideality Refracted" },
    { id: "personal", label: "Life & Art" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, borderBottom: `1px solid rgba(0,0,0,${borderOpacity.get()})` }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-sm transition-colors"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-serif font-bold text-xl tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Xihui (Stream) Wu
        </motion.div>

        <div className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
              className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors relative py-1 ${
                activeSection === item.id ? "text-brand-accent" : "text-brand-secondary hover:text-brand-primary"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-px bg-brand-accent"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
