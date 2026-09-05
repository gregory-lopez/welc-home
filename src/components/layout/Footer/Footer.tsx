import { hasVisibleAdvice } from "@/content/articles";
import styles from "./Footer.module.scss";

export function Footer() {
  const showAdvice = hasVisibleAdvice();

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.identity}>
          <a className={styles.brand} href="/">
            Welc’Home
          </a>
          <p>Nettoyage et remise en ordre pour locations courte durée.</p>
        </div>

        <div className={styles.contact}>
          <p>Marseille et ses alentours</p>
        </div>
      </div>

      <nav className={styles.legalLinks} aria-label="Informations légales">
        {showAdvice ? <a href="/conseils">Conseils pratiques</a> : null}
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/confidentialite">Politique de confidentialité</a>
      </nav>
    </footer>
  );
}
