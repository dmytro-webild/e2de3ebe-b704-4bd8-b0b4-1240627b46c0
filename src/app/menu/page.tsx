"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function MenuPage() {
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
        <NavbarStyleFullscreen
          navItems={[
            { name: "About", id: "/about" },
            { name: "Our Story", id: "/our-story" },
            { name: "Menu", id: "/menu" },
            { name: "Retail", id: "/" },
            { name: "Contact", id: "/" },
          ]}
          brandName="BUTTER"
        />
        <div className="pt-32">
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
        <FooterLogoReveal
          logoText="BUTTER"
          leftLink={{ text: "Instagram", href: "https://instagram.com/butterfortlauderdale" }}
          rightLink={{ text: "Contact", href: "mailto:butterfortlauderdale@gmail.com" }}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}