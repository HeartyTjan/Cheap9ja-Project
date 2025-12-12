import { Award, Shield, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedElements";

const brandValues = [
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Building lasting relationships through consistent delivery",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Embracing cutting-edge technology for modern solutions",
  },
  {
    icon: TrendingUp,
    title: "Growth Focus",
    description: "Dedicated to accelerating your business potential",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to quality in every project we undertake",
  },
];

const BrandSection = () => {
  return (
    <section id="brand" className="section-padding relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(var(--accent)) 0%, transparent 50%)`,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <TextReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Brand Identity
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Brand Values</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Cheap9ja Smart Tech, our brand represents innovation, reliability, and 
            commitment to excellence. We stand for smart solutions that empower businesses.
          </p>
        </TextReveal>

        {/* Brand Logo Display with Animation */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1.2, bounce: 0.4 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={{
                boxShadow: [
                  "0 0 20px hsla(217, 91%, 50%, 0.3)",
                  "0 0 60px hsla(217, 91%, 50%, 0.5)",
                  "0 0 20px hsla(217, 91%, 50%, 0.3)",
                ],
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl"
            >
              <div className="text-center text-primary-foreground">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="block text-4xl md:text-5xl font-bold"
                >
                  C9
                </motion.span>
                <span className="block text-sm md:text-base font-medium mt-2">Smart Tech</span>
              </div>
            </motion.div>

            {/* Animated Orbital Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-3xl border-2 border-primary/30 scale-125"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-3xl border-2 border-accent/30 scale-150"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-primary/20 scale-[1.75]"
            />
          </motion.div>
        </div>

        {/* Brand Values Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandValues.map((value, index) => (
            <StaggerItem key={value.title}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 h-full"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4"
                >
                  <value.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default BrandSection;
