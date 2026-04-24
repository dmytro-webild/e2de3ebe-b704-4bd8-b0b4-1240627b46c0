"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

export default function InquiryPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "/" },
            { name: "Retail", id: "/retail" },
            { name: "Inquiry", id: "/inquiry" },
            { name: "Team", id: "/team" },
          ]}
          brandName="BUTTER"
        />
      </div>
      <div id="contact-cta" data-section="contact-cta">
        <ContactCTA
          tag="Retail Partnership"
          title="Sell With Us"
          description="We are always scouting unique lifestyle brands to feature in our retail space. If you are a maker or a brand owner, we'd love to hear from you."
          buttons={[{ text: "Submit Inquiry", href: "mailto:butterfortlauderdale@gmail.com" }]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>
    </ThemeProvider>
  );
}