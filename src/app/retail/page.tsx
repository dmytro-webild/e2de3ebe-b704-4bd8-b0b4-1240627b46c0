"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

export default function RetailPage() {
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
      <ProductCardThree
        animationType="slide-up"
        textboxLayout="default"
        gridVariant="three-columns-all-equal-width"
        title="Curated Lifestyle"
        description="Discover a selection of lifestyle goods, beauty, and accessories."
        products={[
          { id: "r1", name: "Lifestyle Goods", price: "Various", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305072-w5axp7rr.png?_wi=2" },
          { id: "r2", name: "Local Finds", price: "Various", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305073-83c73fzj.png?_wi=2" },
          { id: "r3", name: "Daily Rituals", price: "Various", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1777001305073-pqacv5i8.png?_wi=2" },
        ]}
      />
    </ThemeProvider>
  );
}