import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "light" | "glow";
  hover?: boolean;
  onClick?: () => void;
}

const GlassCard = ({ 
  children, 
  className = "", 
  variant = "default",
  hover = true,
  onClick
}: GlassCardProps) => {
  const variants = {
    default: {
      background: "rgba(255, 255, 255, 0.08)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    },
    dark: {
      background: "rgba(20, 10, 40, 0.7)",
      border: "1px solid rgba(180, 140, 255, 0.2)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    },
    light: {
      background: "rgba(255, 255, 255, 0.15)",
      border: "1px solid rgba(255, 255, 255, 0.25)",
      boxShadow: "0 8px 32px rgba(255, 255, 255, 0.1)",
    },
    glow: {
      background: "rgba(180, 140, 255, 0.1)",
      border: "1px solid rgba(180, 140, 255, 0.3)",
      boxShadow: "0 0 40px rgba(180, 140, 255, 0.15), 0 8px 32px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <motion.div
      className={`rounded-2xl backdrop-blur-xl ${className}`}
      style={{
        ...variants[variant],
      }}
      whileHover={hover ? {
        scale: 1.02,
        boxShadow: variant === "glow" 
          ? "0 0 60px rgba(180, 140, 255, 0.25), 0 12px 40px rgba(0, 0, 0, 0.3)"
          : "0 12px 40px rgba(0, 0, 0, 0.3)",
      } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
