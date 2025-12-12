import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedElements";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "#",
    color: "#0077B5",
    bgColor: "bg-[#0077B5]/10",
  },
  {
    name: "PingtikApp",
    icon: () => (
      <span className="text-xl font-bold">P</span>
    ),
    url: "#",
    color: "hsl(217, 91%, 50%)",
    bgColor: "bg-primary/10",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "#",
    color: "#1877F2",
    bgColor: "bg-[#1877F2]/10",
  },
  {
    name: "TikTok",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    url: "#",
    color: "#000000",
    bgColor: "bg-foreground/10",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "#",
    color: "#E1306C",
    bgColor: "bg-gradient-to-br from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    url: "#",
    color: "#000000",
    bgColor: "bg-foreground/10",
  },
];

const SocialSection = () => {
  return (
    <section id="social" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Animated Connection Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${10 + i * 15}%`}
              y1="0%"
              x2={`${30 + i * 10}%`}
              y2="100%"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <TextReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Social Media
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Connect <span className="gradient-text">With Us</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stay updated with our latest news, projects, and insights by following 
            us on social media. Join our growing community!
          </p>
        </TextReveal>

        {/* Social Grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <StaggerItem key={social.name}>
              <motion.a
                href={social.url}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  boxShadow: `0 20px 40px -12px ${social.color}40`,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 flex flex-col items-center gap-4 cursor-pointer group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-2xl ${social.bgColor} flex items-center justify-center transition-colors`}
                  style={{ color: social.color }}
                >
                  <social.icon />
                </motion.div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {social.name}
                </span>

                {/* Animated Underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent origin-left"
                />
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Animated CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Join over 10,000+ followers</p>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium shadow-lg"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-foreground"></span>
            </span>
            Growing Every Day
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
