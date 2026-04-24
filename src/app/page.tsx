"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="large"
        background="circleGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "About", id: "#about" },
        { name: "Menu", id: "#menu" },
        { name: "Retail", id: "#retail" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="BUTTER"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "gradient-bars" }}
      title="Fort Lauderdale, buttered."
      description="A design-forward coffee, matcha, and retail platform for everyday ritual."
      tag="Coming Soon"
      buttons={[{ text: "Visit Us", href: "#contact" }]}
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305072-w5axp7rr.png?_wi=1",          imageAlt: "Butter Cafe Scene"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305073-83c73fzj.png?_wi=1",          imageAlt: "Butter Branding Concept"}
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Join the waitlist"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Designed for Culture."
      description="Butter is more than a coffee shop. It is a modern café, retail platform, and community space created for Fort Lauderdale. Inspired by the cafe culture of Los Angeles and New York."
      bulletPoints={[
        { title: "Coffee", description: "High-quality espresso, classic drinks, and seasonal specials." },
        { title: "Matcha", description: "Premium matcha designed to be clean and smooth." },
        { title: "Curated Retail", description: "A rotating selection of emerging lifestyle brands." },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305073-pqacv5i8.png?_wi=1"
    />
  </div>

  <div id="menu" data-section="menu">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="What We Serve"
      description="Good coffee, good taste, good things."
      accordionItems={[
        { id: "c", title: "Coffee", content: "High-quality espresso, classic coffee drinks, cold brew, and seasonal specials." },
        { id: "m", title: "Matcha", content: "Premium matcha made with care, designed to be clean, smooth, and craveable." },
        { id: "p", title: "Pastries", content: "Locally sourced pastries from trusted bakeries to keep quality high." },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305073-l08q8oy3.png?_wi=1"
    />
  </div>

  <div id="retail" data-section="retail">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "r1", name: "Lifestyle Goods", price: "Various", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305072-w5axp7rr.png?_wi=2" },
        { id: "r2", name: "Local Finds", price: "Various", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305073-83c73fzj.png?_wi=2" },
        { id: "r3", name: "Daily Rituals", price: "Various", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305073-pqacv5i8.png?_wi=2" },
      ]}
      title="Curated Lifestyle"
      description="Discover a selection of lifestyle goods, beauty, and accessories."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      members={[
        { id: "t1", name: "Sophia Chugranis", role: "Co-Founder", description: "Content creator and sociologist bringing cultural insight and brand awareness.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305073-l08q8oy3.png?_wi=2" },
        { id: "t2", name: "Olivia Lallouz", role: "Co-Founder", description: "Speech-Language Pathologist bringing operational experience and community connection.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305073-83c73fzj.png?_wi=3" },
      ]}
      title="The Founders"
      description="Bringing a science-backed and culture-first perspective to the community."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["Bakery One", "Market Two", "Roaster Three", "Design House", "Studio Five", "Creative Labs", "Local Coffee Co"]}
      title="Community Partners"
      description="Local favorites and partners."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "When is Butter opening?", content: "We are currently in development. Follow us on Instagram for opening updates." },
        { id: "f2", title: "Where is the shop?", content: "Located in the heart of Fort Lauderdale. Specific address coming soon." },
        { id: "f3", title: "How can I collaborate?", content: "Reach out to butterfortlauderdale@gmail.com for partnerships." },
      ]}
      title="Frequently Asked"
      description="Everything you need to know about Butter."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      tag="Newsletter"
      title="Stay in the loop."
      description="Get updates on opening, brand drops, and location announcements."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="BUTTER"
      leftLink={{ text: "Instagram", href: "https://instagram.com/butterfortlauderdale" }}
      rightLink={{ text: "Contact", href: "mailto:butterfortlauderdale@gmail.com" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}