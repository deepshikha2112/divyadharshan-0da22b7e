import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        temple: {
          saffron: "hsl(var(--temple-saffron))",
          gold: "hsl(var(--temple-gold))",
          maroon: "hsl(var(--temple-maroon))",
          cream: "hsl(var(--temple-cream))",
          white: "hsl(var(--temple-white))",
          terracotta: "hsl(var(--temple-terracotta))",
          sandal: "hsl(var(--temple-sandal))",
          copper: "hsl(var(--temple-copper))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "calc(var(--radius) + 16px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-warm": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(220, 120, 50, 0.2)" },
          "50%": { boxShadow: "0 0 35px rgba(220, 160, 60, 0.35)" },
        },
        "diya-flame": {
          "0%": { filter: "brightness(1)", transform: "scale(1)" },
          "50%": { filter: "brightness(1.1)", transform: "scale(1.02)" },
          "100%": { filter: "brightness(1.05)", transform: "scale(0.98)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "glow-warm": "glow-warm 3s ease-in-out infinite",
        "diya-flame": "diya-flame 2s ease-in-out infinite alternate",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      backgroundImage: {
        "temple-gradient": "linear-gradient(180deg, hsl(30 30% 97%) 0%, hsl(35 35% 94%) 100%)",
        "saffron-gradient": "linear-gradient(135deg, hsl(25 90% 55%) 0%, hsl(35 80% 50%) 100%)",
        "gold-gradient": "linear-gradient(135deg, hsl(42 85% 55%) 0%, hsl(35 75% 45%) 100%)",
        "sacred-gradient": "linear-gradient(180deg, hsl(35 40% 96%) 0%, hsl(30 30% 92%) 100%)",
      },
      boxShadow: {
        temple: "0 4px 20px hsl(25 50% 50% / 0.15)",
        gold: "0 4px 25px hsl(42 80% 50% / 0.2)",
        warm: "0 8px 40px hsl(20 40% 40% / 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;