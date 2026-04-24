"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import SplitAbout from '@/components/sections/about/SplitAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function AboutPage() {
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
        <FooterLogoReveal
          logoText="BUTTER"
          leftLink={{ text: "Instagram", href: "https://instagram.com/butterfortlauderdale" }}
          rightLink={{ text: "Contact", href: "mailto:butterfortlauderdale@gmail.com" }}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}