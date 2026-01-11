import { motion } from "framer-motion";

interface GlowingOrbProps {
  size?: "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
  className?: string;
}

const GlowingOrb = ({ size = "lg", children, className = "" }: GlowingOrbProps) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48 md:w-64 md:h-64",
    xl: "w-64 h-64 md:w-80 md:h-80",
  };

  return (
    <div className={`relative ${className}`}>
      {/* Outer glow rings */}
      <motion.div
        className={`absolute ${sizeClasses[size]} rounded-full`}
        style={{
          background: "radial-gradient(circle, rgba(180, 140, 255, 0.15) 0%, transparent 70%)",
          transform: "scale(1.8)",
        }}
        animate={{
          scale: [1.8, 2, 1.8],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className={`absolute ${sizeClasses[size]} rounded-full`}
        style={{
          background: "radial-gradient(circle, rgba(255, 200, 100, 0.2) 0%, transparent 60%)",
          transform: "scale(1.5)",
        }}
        animate={{
          scale: [1.5, 1.7, 1.5],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Main orb */}
      <motion.div
        className={`relative ${sizeClasses[size]} rounded-full flex items-center justify-center`}
        style={{
          background: `
            radial-gradient(circle at 30% 30%, 
              rgba(255, 255, 255, 0.9) 0%, 
              rgba(255, 230, 180, 0.7) 20%,
              rgba(200, 150, 255, 0.5) 50%,
              rgba(100, 80, 200, 0.3) 80%,
              transparent 100%
            )
          `,
          boxShadow: `
            0 0 60px rgba(255, 200, 100, 0.4),
            0 0 120px rgba(180, 140, 255, 0.3),
            inset 0 0 40px rgba(255, 255, 255, 0.5)
          `,
        }}
        animate={{
          scale: [1, 1.02, 1],
          boxShadow: [
            "0 0 60px rgba(255, 200, 100, 0.4), 0 0 120px rgba(180, 140, 255, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.5)",
            "0 0 80px rgba(255, 200, 100, 0.5), 0 0 150px rgba(180, 140, 255, 0.4), inset 0 0 50px rgba(255, 255, 255, 0.6)",
            "0 0 60px rgba(255, 200, 100, 0.4), 0 0 120px rgba(180, 140, 255, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.5)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>

      {/* Sacred geometry overlay */}
      <motion.div
        className={`absolute ${sizeClasses[size]} rounded-full pointer-events-none`}
        style={{
          background: `
            conic-gradient(
              from 0deg,
              transparent 0deg,
              rgba(255, 215, 0, 0.1) 60deg,
              transparent 120deg,
              rgba(180, 140, 255, 0.1) 180deg,
              transparent 240deg,
              rgba(255, 215, 0, 0.1) 300deg,
              transparent 360deg
            )
          `,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default GlowingOrb;
