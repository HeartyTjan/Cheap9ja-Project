import { Building2, Target, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations/AnimatedElements";

const features = [
  {
    icon: Building2,
    title: "CAC Registered",
    description: "Official business registration BN 3558256",
  },
  {
    icon: Target,
    title: "Digital Solutions",
    description: "Comprehensive tech services for modern businesses",
  },
  {
    icon: Users,
    title: "Business Growth",
    description: "Strategic partnerships for sustainable expansion",
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description: "Cutting-edge technology at competitive rates",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full opacity-5"
          style={{
            background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <TextReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Cheap9ja Smart Tech</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a CAC-registered company (BN 3558256) specializing in digital solutions, 
            social community platforms, software services, business promotion, store management, 
            and recruitment services.
          </p>
        </TextReveal>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px hsla(217, 91%, 50%, 0.2)" }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg"
                >
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Founder Card with Video */}
        <FadeInUp delay={0.2}>
          <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Video Section */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl relative group"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-64 lg:h-80 object-cover"
                  poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                >
                  <source
                    src="https://cdn.pixabay.com/video/2016/09/21/5373-183629416_large.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-6">
                  <p className="text-primary-foreground font-medium">Building the future together</p>
                </div>
              </motion.div>

              {/* Founder Info */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="w-24 h-24 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-primary-foreground mb-4 shadow-xl"
                >
                  JU
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">John Usman</h3>
                <p className="text-primary font-medium mb-4">CEO / Marketing Manager</p>
                <p className="text-muted-foreground leading-relaxed">
                  Leading Cheap9ja Smart Tech with a vision to revolutionize digital solutions 
                  in Nigeria. Committed to delivering excellence and fostering business growth 
                  through innovative technology solutions.
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default AboutSection;
