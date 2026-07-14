import styles from "./HowItWorksSection.module.scss";

const steps = [
  "Vous indiquez votre besoin",
  "L’intervention est organisée",
  "Le logement est préparé",
  "Vous avancez plus sereinement entre deux arrivées",
];

export function HowItWorksSection() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works-title">
      <h2 id="how-it-works-title">
        Une solution simple pour organiser les interventions entre deux séjours.
      </h2>

      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li className={styles.step} key={step}>
            <span className={styles.number}>{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
