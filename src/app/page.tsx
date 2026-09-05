import { PalettePreviewSwitcher } from "@/components/dev/PalettePreviewSwitcher/PalettePreviewSwitcher";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection/HowItWorksSection";
import { ProblemSection } from "@/components/sections/ProblemSection/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection/ServicesSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <HowItWorksSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
      <PalettePreviewSwitcher />
    </div>
  );
}
