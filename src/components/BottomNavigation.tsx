import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Compass, BookOpen, Mic, Settings } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Compass, label: "Meditation", path: "/meditation" },
  { icon: BookOpen, label: "Stories", path: "/bhagavad-gita" },
  { icon: Mic, label: "Mantra", path: "/#mantra-section" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const BottomNavigation = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden"
    >
      <div
        className="flex items-center gap-1 px-4 py-3 rounded-full"
        style={{
          background: "rgba(20, 10, 40, 0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(180, 140, 255, 0.2)",
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.3),
            0 0 40px rgba(180, 140, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative px-4 py-2 rounded-full transition-all duration-300"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(180, 140, 255, 0.3), rgba(255, 200, 100, 0.2))",
                    boxShadow: "0 0 20px rgba(180, 140, 255, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <motion.div
                className="relative z-10 flex flex-col items-center gap-1"
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <Icon
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isActive 
                      ? "text-cosmic-gold drop-shadow-[0_0_8px_rgba(255,200,100,0.6)]" 
                      : "text-white/60"
                  }`}
                />
                <span
                  className={`text-[10px] font-medium transition-colors duration-300 ${
                    isActive ? "text-cosmic-gold" : "text-white/50"
                  }`}
                >
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default BottomNavigation;
