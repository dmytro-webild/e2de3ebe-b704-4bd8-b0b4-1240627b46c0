"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function OurStoryPage() {
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
          <MediaAbout
            title="Our Story"
            description="Founded on the belief that everyday rituals deserve elevated design, Butter bridges the gap between premium coffee culture and lifestyle curation."
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305073-l08q8oy3.png?_wi=1"
            useInvertedBackground={true}
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