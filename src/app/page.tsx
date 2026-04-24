"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

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
        { name: "About", id: "/about" },
        { name: "Our Story", id: "/our-story" },
        { name: "Menu", id: "/menu" },
        { name: "Retail", id: "/retail" },
        { name: "Inquiry", id: "/inquiry" },
        { name: "Contact", id: "/contact" },
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
      buttons={[{ text: "Visit Us", href: "/contact" }]}
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

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["Bakery One", "Market Two", "Roaster Three", "Design House", "Studio Five", "Creative Labs", "Local Coffee Co"]}
      title="Community Partners"
      description="Local favorites and partners."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="BUTTER"
      leftLink={{ text: "Instagram", href: "https://instagram.com/butterfortlauderdale" }}
      rightLink={{ text: "Contact", href: "/contact" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}