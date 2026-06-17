import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <HeroSection />
      </main>

      <Footer />
    </div>
  );
}
