import { Lightbulb, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/animations/AnimatedElements";

const visions = [
  {
    icon: Lightbulb,
    title: "Vision 1",
    statement:
      "To build smart business solutions for ageing businesses and ignite growth in the business world.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Rocket,
    title: "Vision 2",
    statement:
      "Becoming the best tech-driven company and exploring opportunities to stand out through professionalism and growth.",
    gradient: "from-accent to-primary",
  },
];

const VisionSection = () => {
  return (
    <section id="vision" className="section-padding relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          poster="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80"
        >
          <source
            src="https://cdn.pixabay.com/video/2017/08/15/11251-230450089_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "200%", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              width: "50%",
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <TextReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Vision
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Driving <span className="gradient-text">Future Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our vision guides every decision we make, pushing us to innovate and
            create lasting impact in the tech industry.
          </p>
        </TextReveal>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {visions.map((vision, index) => (
            <motion.div
              key={vision.title}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Animated Gradient Border */}
              <motion.div
                animate={{
                  background: [
                    `linear-gradient(0deg, hsl(var(--primary)), hsl(var(--accent)))`,
                    `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))`,
                    `linear-gradient(180deg, hsl(var(--primary)), hsl(var(--accent)))`,
                    `linear-gradient(270deg, hsl(var(--primary)), hsl(var(--accent)))`,
                    `linear-gradient(360deg, hsl(var(--primary)), hsl(var(--accent)))`,
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-sm"
              />

              <div className="relative glass-card p-8 md:p-10 h-full overflow-hidden">
                {/* Background Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${vision.gradient} rounded-full blur-3xl`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${vision.gradient} flex items-center justify-center mb-6 shadow-xl`}
                >
                  <vision.icon className="w-10 h-10 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "auto" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 overflow-hidden"
                >
                  {vision.title}
                </motion.span>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative text-xl md:text-2xl font-medium leading-relaxed text-foreground"
                >
                  {vision.statement}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
