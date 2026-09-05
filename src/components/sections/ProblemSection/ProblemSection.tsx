import { ScrollReveal } from "@/components/motion/ScrollReveal/ScrollReveal";
import styles from "./ProblemSection.module.scss";

export function ProblemSection() {
  return (
    <section className={styles.section} aria-labelledby="problem-title">
      <ScrollReveal>
        <p className={styles.kicker}>ENTRE DEUX SÉJOURS</p>
        <h2 id="problem-title">
          Quand les réservations s’enchaînent, l’organisation compte.
        </h2>
        <p className={styles.summary}>
          Entre un départ et une nouvelle arrivée, le temps est souvent compté
          et chaque détail doit être anticipé.
        </p>
      </ScrollReveal>
    </section>
  );
}
