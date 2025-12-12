import { MessageCircle, Users, Store, Megaphone, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TextReveal, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedElements";
import { useState } from "react";

const products = [
  {
    icon: MessageCircle,
    name: "Pingtik App",
    description: "A vibrant social community platform connecting people through meaningful conversations and shared experiences.",
    color: "from-blue-500 to-cyan-500",
    features: ["Social Networking", "Community Building", "Real-time Chat"],
    video: "https://cdn.pixabay.com/video/2019/07/30/25708-351768498_large.mp4",
  },
  {
    icon: Users,
    name: "SabiRecruit",
    description: "Streamlined recruitment services connecting top talent with leading organizations across Nigeria.",
    color: "from-emerald-500 to-teal-500",
    features: ["Job Matching", "CV Database", "Hiring Solutions"],
    video: "https://cdn.pixabay.com/video/2020/07/15/44942-441176222_large.mp4",
  },
  {
    icon: Store,
    name: "SabiStore",
    description: "Complete store management solution empowering businesses with inventory, sales, and analytics tools.",
    color: "from-orange-500 to-amber-500",
    features: ["Inventory Management", "Sales Tracking", "Business Analytics"],
    video: "https://cdn.pixabay.com/video/2021/04/03/69726-532509600_large.mp4",
  },
  {
    icon: Megaphone,
    name: "SabiPromote",
    description: "Powerful business promotion tools to amplify your brand reach and engage with your target audience.",
    color: "from-pink-500 to-rose-500",
    features: ["Brand Promotion", "Digital Marketing", "Audience Growth"],
    video: "https://cdn.pixabay.com/video/2019/06/28/25141-345155562_large.mp4",
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4 }}
      className="group glass-card overflow-hidden h-full"
    >
      {/* Video Preview */}
      <div className="relative h-48 overflow-hidden">
        <motion.video
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={`https://images.unsplash.com/photo-${1560472355 + index}-5c9e8f6f5a96?w=600&q=80`}
        >
          <source src={product.video} type="video/mp4" />
        </motion.video>
        <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Play Icon */}
        <motion.div
          animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-8 h-8 text-primary-foreground fill-current" />
          </div>
        </motion.div>

        {/* Product Icon */}
        <motion.div
          animate={{ y: isHovered ? -10 : 0 }}
          className={`absolute bottom-4 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}
        >
          <product.icon className="w-7 h-7 text-primary-foreground" />
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
          <Button variant="ghost" className="group/btn p-0 h-auto text-primary font-medium">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-secondary/30 relative overflow-hidden">
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
            Discover our suite of innovative digital solutions designed to transform 
            businesses and create meaningful connections.
          </p>
        </TextReveal>

        {/* Products Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15}>
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
