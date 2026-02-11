import {
  MessageCircle,
  Users,
  Store,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  TextReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/AnimatedElements";
import { useState } from "react";

const products = [
  {
    icon: MessageCircle,
    name: "Pingtik App",
    description:
      "A vibrant social community platform connecting people through meaningful conversations and shared experiences.",
    color: "from-blue-500 to-cyan-500",
    features: ["Social Networking", "Community Building", "Real-time Chat"],
    link: "https://pingtik.com/",
  },
  {
    icon: Users,
    name: "SabiRecruit",
    description:
      "Streamlined recruitment services connecting top talent with leading organizations across Nigeria.",
    color: "from-emerald-500 to-teal-500",
    features: ["Job Matching", "CV Database", "Hiring Solutions"],
    link: "https://sabirecruit.sabipromote.com.ng/",
  },
  {
    icon: Store,
    name: "SabiStore",
    description:
      "Complete store management solution empowering businesses with inventory, sales, and analytics tools.",
    color: "from-orange-500 to-amber-500",
    features: ["Inventory Management", "Sales Tracking", "Business Analytics"],
    link: "https://sabistores.sabipromote.com.ng/",
  },
  {
    icon: Megaphone,
    name: "SabiPromote",
    description:
      "Powerful business promotion tools to amplify your brand reach and engage with your target audience.",
    color: "from-pink-500 to-rose-500",
    features: ["Brand Promotion", "Digital Marketing", "Audience Growth"],
    link: "https://sabipromote.com.ng/",
  },
];

const ProductCard = ({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) => {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4 }}
      className="group glass-card overflow-hidden h-full"
    >
      {/* Icon Header */}
      <div className="relative overflow-hidden p-6 bg-gradient-to-br from-card to-secondary/50">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}
        >
          <product.icon className="w-8 h-8 text-primary-foreground" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.map((feature) => (
            <motion.span
              key={feature}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
            >
              {feature}
            </motion.span>
          ))}
        </div>

        {/* CTA */}
        <motion.div whileHover={{ x: 5 }}>
          <a href={product.link} target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              className="group/btn p-0 h-auto text-primary font-medium"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -100],
              x: Math.sin(i) * 50,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 50}%`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <TextReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Digital Products</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our suite of innovative digital solutions designed to
            transform businesses and create meaningful connections.
          </p>
        </TextReveal>

        {/* Products Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          staggerDelay={0.15}
        >
          {products.map((product, index) => (
            <StaggerItem key={product.name}>
              <ProductCard product={product} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProductsSection;
