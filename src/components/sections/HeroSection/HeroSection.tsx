import styles from "./HeroSection.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <p className={styles.kicker}>
        LA solution de nettoyage pour les locations courtes durée, que vous
        soyez propriétaires ou une conciergerie
      </p>
      <h1 id="hero-title">
        Organisez simplement le ménage et la préparation de vos locations courte
        durée
      </h1>
      <p className={styles.intro}>
        Welc’Home aide les propriétaires et petites conciergeries à organiser
        des interventions fiables entre deux voyageurs.
      </p>
    </section>
  );
}
