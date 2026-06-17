import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="/" aria-label="Accueil Welc'Home">
        Welc'Home
      </a>
      <p className={styles.location}>Marseille et ses alentours</p>
    </header>
  );
}
