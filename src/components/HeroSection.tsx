import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import GlowingOrb from "./GlowingOrb";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(180, 140, 255, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(100, 80, 200, 0.1) 0%, transparent 40%),
            radial-gradient(ellipse at 20% 80%, rgba(255, 200, 100, 0.08) 0%, transparent 40%),
            linear-gradient(180deg, hsl(260 40% 8%) 0%, hsl(270 35% 6%) 50%, hsl(260 40% 5%) 100%)
          `,
        }}
      />

      {/* Floating orb decorations */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(180, 140, 255, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-24 h-24 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255, 200, 100, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        {/* App Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cosmic-pearl tracking-wide">
            Divya Darshan
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-cosmic-pearl/70 font-light mb-12 max-w-md mx-auto"
        >
          A Divine Space for Peace, Faith & Wisdom
        </motion.p>

        {/* Central Glowing Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center mb-12"
        >
          <GlowingOrb size="lg">
            <motion.span 
              className="text-5xl md:text-6xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ॐ
            </motion.span>
          </GlowingOrb>
        </motion.div>

        {/* Ask a Question Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-md mx-auto mb-12"
        >
          <Link to="/guidance">
            <div
              className="flex items-center gap-3 px-6 py-4 rounded-full cursor-pointer transition-all duration-300 group"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              }}
            >
              <span className="text-cosmic-pearl/50 flex-1 text-left group-hover:text-cosmic-pearl/70 transition-colors">
                Ask a Question...
              </span>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cosmic-violet/30 group-hover:bg-cosmic-violet/50 transition-colors">
                <Mic className="w-5 h-5 text-cosmic-pearl/70" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link to="/meditation">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="divine-button px-8 py-4 rounded-full text-cosmic-pearl font-medium flex items-center gap-2 justify-center min-w-[180px]"
            >
              <span>🧘</span> Meditation
            </motion.button>
          </Link>
          <a href="#deities">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full text-cosmic-pearl font-medium flex items-center gap-2 justify-center min-w-[180px]"
              style={{
                background: "rgba(255, 200, 100, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 200, 100, 0.3)",
                boxShadow: "0 0 20px rgba(255, 200, 100, 0.15)",
              }}
            >
              <span>🕉️</span> Explore Deities
            </motion.button>
          </a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-3 gap-6 max-w-sm mx-auto"
        >
          {[
            { value: "11+", label: "Deities" },
            { value: "50+", label: "Mantras" },
            { value: "20+", label: "Meditations" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-2xl font-heading font-semibold text-gradient-cosmic">
                {stat.value}
              </p>
              <p className="text-xs text-cosmic-pearl/50">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-cosmic-pearl/30 rounded-full flex justify-center"
        >
          <motion.div 
            className="w-1 h-3 bg-cosmic-gold/60 rounded-full mt-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
