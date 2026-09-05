import { ScrollReveal } from "@/components/motion/ScrollReveal/ScrollReveal";
import styles from "./ServicesSection.module.scss";

const serviceIcons = {
  cleaning: (
    <>
      <path d="M12 3v9" />
      <path d="M9 12h6l3 8H6l3-8Z" />
      <path d="m10 16-1 4" />
      <path d="m14 16 1 4" />
    </>
  ),
  linen: (
    <>
      <path d="M4 8h16v10H4z" />
      <path d="M7 8V5h10v3M4 13h16" />
    </>
  ),
  supplies: (
    <>
      <path d="M9 3h6m-5 0v4l-3 3v10h10V10l-3-3V3" />
      <path d="M7 13h10" />
    </>
  ),
  inspection: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
};

const services = [
  {
    icon: "cleaning",
    title: "Nettoyage et remise en ordre",
    description:
      "Nettoyage des pièces principales, cuisine, salle de bain et remise en ordre visible du logement.",
  },
  {
    icon: "linen",
    title: "Changement du linge",
    description:
      "Changement des draps et serviettes avec le linge propre que vous mettez à disposition.",
  },
  {
    icon: "supplies",
    title: "Vérification et réassort sur place",
    description:
      "Vérification et réassort des essentiels avec les produits que vous fournissez : papier, savon, café, sacs et produits d’accueil.",
  },
  {
    icon: "inspection",
    title: "Contrôle visuel et signalement",
    description:
      "Repérage des oublis, objets cassés ou anomalies visibles, avec un retour simple si un point demande votre attention.",
  },
] as const;

export function ServicesSection() {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <ScrollReveal>
        <div className={styles.heading}>
          <div>
            <p className={styles.kicker}>SERVICES COUVERTS</p>
            <h2 id="services-title">Ce que Welc’Home prend en charge</h2>
          </div>
          <p className={styles.intro}>
            Une aide ciblée, adaptée à vos consignes et aux besoins réels de
            votre logement.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <ul className={styles.services}>
          {services.map((service) => (
            <li className={styles.service} key={service.title}>
              <span className={styles.marker} aria-hidden="true">
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {serviceIcons[service.icon]}
                </svg>
              </span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <div className={styles.addons}>
          <h3>Un besoin supplémentaire ?</h3>
          <p>
            Entretien du linge, fourniture de consommables ou remise en état
            exceptionnelle : ces prestations peuvent être étudiées en
            supplément, selon votre besoin.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
