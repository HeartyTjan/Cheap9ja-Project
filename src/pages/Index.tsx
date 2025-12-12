import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BrandSection from "@/components/sections/BrandSection";
import ProductsSection from "@/components/sections/ProductsSection";
import VisionSection from "@/components/sections/VisionSection";
import SocialSection from "@/components/sections/SocialSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cheap9ja Smart Tech | Digital Solutions & Business Growth Partners</title>
        <meta
          name="description"
          content="Cheap9ja Smart Tech is a CAC-registered Nigerian tech company specializing in digital solutions, social platforms, software services, and business growth. Discover Pingtik App, SabiRecruit, SabiStore, and SabiPromote."
        />
        <meta name="keywords" content="Cheap9ja, Smart Tech, Digital Solutions, Nigeria Tech Company, Pingtik App, SabiRecruit, SabiStore, SabiPromote, Business Growth" />
        <link rel="canonical" href="https://cheap9jasmarttech.com" />
        <meta property="og:title" content="Cheap9ja Smart Tech | Digital Solutions & Business Growth Partners" />
        <meta property="og:description" content="Your trusted partner for digital transformation and business growth in Nigeria." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cheap9ja Smart Tech" />
        <meta name="twitter:description" content="Digital Solutions & Business Growth Partners" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <BrandSection />
          <ProductsSection />
          <VisionSection />
          <SocialSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
