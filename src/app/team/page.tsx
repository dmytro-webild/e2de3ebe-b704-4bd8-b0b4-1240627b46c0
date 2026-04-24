"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

export default function TeamPage() {
  return (
    <ThemeProvider>
      <NavbarStyleFullscreen
        navItems={[
          { name: "Home", id: "/" },
          { name: "Retail", id: "/retail" },
          { name: "Inquiry", id: "/inquiry" },
          { name: "Team", id: "/team" },
        ]}
        brandName="BUTTER"
      />
      <TeamCardTwo
        animationType="slide-up"
        textboxLayout="split"
        gridVariant="two-columns-alternating-heights"
        title="The Founders"
        description="Bringing a science-backed and culture-first perspective to the community."
        members={[
          { id: "t1", name: "Sophia Chugranis", role: "Co-Founder", description: "Content creator and sociologist bringing cultural insight and brand awareness.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305073-l08q8oy3.png?_wi=2" },
          { id: "t2", name: "Olivia Lallouz", role: "Co-Founder", description: "Speech-Language Pathologist bringing operational experience and community connection.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305073-83c73fzj.png?_wi=3" },
        ]}
      />
    </ThemeProvider>
  );
}