import { ScrollReveal } from "@/components/motion/ScrollReveal/ScrollReveal";
import styles from "./HowItWorksSection.module.scss";

const steps = [
  {
    title: "Prise de contact",
    description: "Vous nous présentez votre logement et vos besoins.",
  },
  {
    title: "Échange et consignes",
    description:
      "Nous clarifions avec vous les consignes, la fréquence souhaitée et les points importants à vérifier.",
  },
  {
    title: "Intervention entre deux séjours",
    description:
      "Nous intervenons dans le créneau prévu pour nettoyer et remettre le logement en ordre.",
  },
  {
    title: "Retour si besoin",
    description:
      "Vous êtes informé si un oubli, un manque ou une anomalie visible demande votre attention.",
  },
];

export function HowItWorksSection() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works-title">
      <ScrollReveal>
        <div className={styles.heading}>
          <p className={styles.kicker}>COMMENT ÇA SE PASSE</p>
          <h2 id="how-it-works-title">Vous expliquez, nous organisons</h2>
          <p className={styles.intro}>
            <strong>
              Votre demande est suivie directement par notre petite équipe
              locale
            </strong>
            , du premier échange au retour après passage.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li className={styles.step} key={step.title}>
              <span className={styles.number}>{index + 1}</span>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </ScrollReveal>
    </section>
  );
}
