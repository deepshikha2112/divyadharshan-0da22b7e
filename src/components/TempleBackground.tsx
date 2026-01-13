import { motion } from "framer-motion";

const TempleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(35 35% 96%) 0%, hsl(30 30% 94%) 50%, hsl(35 40% 95%) 100%)"
        }}
      />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%23c4a054' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Warm glow from top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, hsl(42 80% 70% / 0.3) 0%, transparent 70%)"
        }}
      />

      {/* Diya glow effect - left */}
      <motion.div
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(25 90% 60% / 0.4) 0%, transparent 70%)"
        }}
      />

      {/* Diya glow effect - right */}
      <motion.div
        animate={{
          opacity: [0.25, 0.4, 0.25],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute bottom-32 right-16 w-28 h-28 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(35 85% 55% / 0.35) 0%, transparent 70%)"
        }}
      />

      {/* Floating particles - like incense smoke */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-temple-gold/20"
          style={{
            left: `${15 + i * 15}%`,
            bottom: "10%"
          }}
          animate={{
            y: [-20, -100 - i * 30],
            x: [0, (i % 2 === 0 ? 1 : -1) * 20],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.8
          }}
        />
      ))}
    </div>
  );
};

export default TempleBackground;