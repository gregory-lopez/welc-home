import styles from "./ProblemSection.module.scss";

const constraints = [
  {
    title: "Délais courts",
    description:
      "Les départs et arrivées s’enchaînent parfois dans la même journée.",
  },
  {
    title: "Ménage exigeant",
    description:
      "Le logement doit être propre, rangé et prêt à accueillir les prochains voyageurs.",
  },
  {
    title: "Linge et consommables",
    description:
      "Draps, serviettes, papier, savon ou café doivent être vérifiés avant l’arrivée.",
  },
  {
    title: "Imprévus terrain",
    description:
      "Un objet cassé, un oubli ou un retard peut vite compliquer la rotation.",
  },
  {
    title: "Besoin de fiabilité",
    description:
      "Propriétaires et conciergeries ont besoin d’interventions claires et ponctuelles.",
  },
];

export function ProblemSection() {
  return (
    <section className={styles.section} aria-labelledby="problem-title">
      <div className={styles.heading}>
        <p className={styles.kicker}>Problème terrain</p>
        <h2 id="problem-title">Entre deux voyageurs, chaque heure compte.</h2>
      </div>

      <div className={styles.grid}>
        {constraints.map((constraint) => (
          <article className={styles.card} key={constraint.title}>
            <h3>{constraint.title}</h3>
            <p>{constraint.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
