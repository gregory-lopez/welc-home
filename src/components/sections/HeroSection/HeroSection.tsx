import styles from "./HeroSection.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <p className={styles.kicker}>
          NETTOYAGE ET REMISE EN ORDRE ENTRE DEUX SÉJOURS
        </p>
        <h1 id="hero-title">Votre logement prêt pour la prochaine arrivée</h1>
        <p className={styles.intro}>
          Un service local de nettoyage pour vos locations courte durée à
          Marseille et ses alentours.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#contact">
            Demandez un devis gratuit
          </a>
        </div>
      </div>

      <aside
        className={styles.positioningCard}
        aria-label="Positionnement du service Welc'Home"
      >
        <h2>Vous gardez la main</h2>
        <p className={styles.positioningText}>
          Vous gérez vos réservations, vos annonces et vos voyageurs. Welc’Home
          intervient entre deux arrivées pour préparer le logement.
        </p>
        <p className={styles.localNote}>Une aide ciblée entre deux séjours</p>
      </aside>
    </section>
  );
}
