"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function FaqPage() {
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

        <FooterLogoReveal
            logoText="BUTTER"
            leftLink={{ text: "Instagram", href: "https://instagram.com/butterfortlauderdale" }}
            rightLink={{ text: "Contact", href: "/contact" }}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
