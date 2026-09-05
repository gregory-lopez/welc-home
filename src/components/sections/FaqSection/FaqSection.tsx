"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal/ScrollReveal";
import styles from "./FaqSection.module.scss";

const questions = [
  {
    question: "Dans quelle zone Welc’Home intervient-il ?",
    answer:
      "Welc’Home intervient à Marseille et dans ses alentours. Indiquez la commune ou le code postal du logement dans votre demande afin que nous puissions vérifier si une intervention peut être organisée.",
  },
  {
    question: "Que comprend le nettoyage standard ?",
    answer:
      "La prestation standard comprend le nettoyage et la remise en ordre visible du logement, le changement des draps et serviettes avec le linge propre que vous fournissez, le réassort avec les consommables disponibles sur place, ainsi qu’un contrôle visuel.",
  },
  {
    question: "Qui fournit le linge et les consommables ?",
    answer:
      "Le linge propre et les consommables nécessaires à la prestation standard sont mis à disposition dans le logement par le propriétaire. L’entretien du linge et la fourniture de consommables peuvent être étudiés en supplément.",
  },
  {
    question: "Qui fournit le matériel et les produits de nettoyage ?",
    answer:
      "Pour la prestation standard, le client met à disposition un aspirateur, un balai, une serpillière et les produits nécessaires. Welc’Home apporte ses chiffons. Le matériel et les produits peuvent également être fournis par Welc’Home en supplément.",
  },
  {
    question: "Comment le devis est-il établi ?",
    answer:
      "Le devis tient compte de la localisation et des caractéristiques du logement, de la fréquence envisagée, des consignes à respecter et des éventuelles prestations complémentaires. Un échange permet de préciser ces éléments avant toute proposition.",
  },
  {
    question: "Peut-on demander une intervention ponctuelle ou régulière ?",
    answer:
      "Vous pouvez nous indiquer si votre besoin est ponctuel, régulier ou encore à définir. L’organisation possible est ensuite étudiée avec vous selon votre logement et vos besoins.",
  },
] as const;

export function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <ScrollReveal>
        <div className={styles.heading}>
          <p className={styles.kicker}>QUESTIONS FRÉQUENTES</p>
          <h2 id="faq-title">Avant de nous présenter votre logement</h2>
          <p>
            Quelques repères sur le service, son organisation et la préparation
            du devis.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className={styles.questions}>
          {questions.map((item, index) => {
            const isOpen = openQuestion === index;
            const triggerId = `faq-trigger-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                className={`${styles.question} ${isOpen ? styles.open : ""}`}
                key={item.question}
              >
                <h3>
                  <button
                    type="button"
                    id={triggerId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.icon} aria-hidden="true" />
                  </button>
                </h3>

                <div
                  className={styles.answer}
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
