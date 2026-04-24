"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function ContactPage() {
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
            { name: "About", id: "/#about" },
            { name: "Our Story", id: "/#our-story" },
            { name: "Menu", id: "/#menu" },
            { name: "Retail", id: "/#retail" },
            { name: "Inquiry", id: "/#inquiry" },
            { name: "FAQ", id: "/faq" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="BUTTER"
        />

        <div className="pt-32 pb-20">
        </div>

        <FooterLogoReveal
            logoText="BUTTER"
            leftLink={{ text: "Instagram", href: "https://instagram.com/butterfortlauderdale" }}
            rightLink={{ text: "Contact", href: "/contact" }}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}