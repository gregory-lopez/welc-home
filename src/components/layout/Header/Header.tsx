import { hasVisibleAdvice } from "@/content/articles";
import styles from "./Header.module.scss";

export function Header() {
  const showAdvice = hasVisibleAdvice();

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="/" aria-label="Accueil Welc'Home">
        Welc'Home
      </a>

      {showAdvice ? (
        <nav className={styles.navigation} aria-label="Navigation principale">
          <a href="/conseils">Conseils</a>
        </nav>
      ) : null}
    </header>
  );
}
