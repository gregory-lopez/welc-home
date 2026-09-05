"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal/ScrollReveal";
import styles from "./ContactSection.module.scss";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

export function ContactSection() {
  const [message, setMessage] = useState("");
  const [minimumDate, setMinimumDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    setMinimumDate(`${today.getFullYear()}-${month}-${day}`);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!contactEmail) {
      setMessage(
        "L’envoi des demandes de devis sera disponible dès que l’adresse de contact sera configurée.",
      );
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const location = String(formData.get("location") ?? "").trim();
    const surface = String(formData.get("surface") ?? "").trim();
    const sleepingPlaces = String(formData.get("sleepingPlaces") ?? "").trim();
    const bathrooms = String(formData.get("bathrooms") ?? "").trim();
    const frequency = String(formData.get("frequency") ?? "").trim();
    const preferredDate = String(formData.get("preferredDate") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();
    const extraServices = formData.getAll("extraServices").map(String);

    const parameters = new URLSearchParams({
      subject: "Demande de devis Welc’Home",
      body: [
        `Nom : ${name}`,
        `Adresse e-mail : ${email}`,
        ...(phone ? [`Téléphone : ${phone}`] : []),
        "",
        "Logement :",
        `Commune ou code postal : ${location}`,
        `Surface : ${surface} m²`,
        `Nombre de couchages : ${sleepingPlaces}`,
        `Nombre de salles de bain : ${bathrooms}`,
        ...(frequency ? [`Fréquence envisagée : ${frequency}`] : []),
        ...(preferredDate ? [`Date souhaitée : ${preferredDate}`] : []),
        ...(details ? ["", "Précisions :", details] : []),
        "",
        "Services complémentaires :",
        ...(extraServices.length
          ? extraServices.map((service) => `- ${service}`)
          : ["Aucun service complémentaire demandé"]),
      ].join("\n"),
    });

    window.location.href = `mailto:${contactEmail}?${parameters.toString()}`;
    setMessage("Votre application e-mail va s’ouvrir avec votre demande.");
  }

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <ScrollReveal>
        <div className={styles.content}>
          <p className={styles.kicker}>DEMANDE DE DEVIS</p>
          <h2 id="contact-title">Parlons de votre logement</h2>
          <p className={styles.intro}>
            Décrivez-nous votre logement et vos besoins. Nous vous recontactons
            pour préparer une proposition adaptée.
          </p>
          <p className={styles.area}>Marseille et ses alentours</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <form className={styles.form} method="post" onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <label className={styles.field} htmlFor="contact-name">
            <span>Nom et prénom</span>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Nom et prénom"
              required
            />
          </label>

          <label className={styles.field} htmlFor="contact-email">
            <span>Adresse e-mail</span>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="vous@exemple.fr"
              required
            />
          </label>

          <label className={styles.field} htmlFor="contact-phone">
            <span>Téléphone (facultatif)</span>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="06 12 34 56 78"
            />
          </label>

          <label className={styles.field} htmlFor="contact-location">
            <span>Commune ou code postal</span>
            <input
              id="contact-location"
              name="location"
              type="text"
              placeholder="Ex. Marseille 6e ou 13006"
              required
            />
          </label>

          <label className={styles.field} htmlFor="contact-surface">
            <span>Surface du logement (m²)</span>
            <input
              id="contact-surface"
              name="surface"
              type="number"
              inputMode="numeric"
              min="1"
              step="1"
              placeholder="Ex. 45"
              required
            />
          </label>

          <label className={styles.field} htmlFor="contact-sleeping-places">
            <span>Nombre de couchages</span>
            <input
              id="contact-sleeping-places"
              name="sleepingPlaces"
              type="number"
              inputMode="numeric"
              min="1"
              step="1"
              placeholder="Ex. 4"
              required
            />
          </label>

          <label className={styles.field} htmlFor="contact-bathrooms">
            <span>Nombre de salles de bain</span>
            <input
              id="contact-bathrooms"
              name="bathrooms"
              type="number"
              inputMode="numeric"
              min="1"
              step="1"
              placeholder="Ex. 1"
              required
            />
          </label>

          <label className={styles.field} htmlFor="contact-frequency">
            <span>Fréquence envisagée (facultatif)</span>
            <select id="contact-frequency" name="frequency" defaultValue="">
              <option value="">À définir</option>
              <option value="Intervention ponctuelle">Intervention ponctuelle</option>
              <option value="Interventions régulières">Interventions régulières</option>
            </select>
          </label>

          <label
            className={`${styles.field} ${styles.fieldWide}`}
            htmlFor="contact-date"
          >
            <span>Date souhaitée (facultatif)</span>
            <input
              id="contact-date"
              name="preferredDate"
              type="date"
              min={minimumDate}
            />
          </label>

          <label
            className={`${styles.field} ${styles.fieldWide}`}
            htmlFor="contact-details"
          >
            <span>Quelques précisions sur votre besoin (facultatif)</span>
            <textarea
              id="contact-details"
              name="details"
              maxLength={1200}
              placeholder="Consignes particulières, accès au logement ou autre information utile"
              rows={5}
            />
          </label>
        </div>

        <fieldset
          className={styles.extras}
          aria-describedby="contact-extras-note"
        >
          <legend>Options complémentaires</legend>

          <div className={styles.extraOptions}>
            <label className={styles.extraOption}>
              <input
                name="extraServices"
                type="checkbox"
                value="Entretien du linge"
              />
              <span>Entretien du linge</span>
            </label>

            <label className={styles.extraOption}>
              <input
                name="extraServices"
                type="checkbox"
                value="Fourniture de consommables"
              />
              <span>Fourniture de consommables</span>
            </label>

            <label className={styles.extraOption}>
              <input
                name="extraServices"
                type="checkbox"
                value="Fourniture du matériel et des produits de nettoyage"
              />
              <span>Fourniture du matériel et des produits de nettoyage</span>
            </label>

            <label className={styles.extraOption}>
              <input
                name="extraServices"
                type="checkbox"
                value="Remise en état exceptionnelle"
              />
              <span>Remise en état exceptionnelle</span>
            </label>
          </div>

          <p className={styles.extrasNote} id="contact-extras-note">
            Ces prestations sont proposées en supplément.
          </p>
          <p className={styles.standardNote}>
            Le linge propre, les consommables et le matériel nécessaire au
            nettoyage sont fournis par vos soins.
          </p>
        </fieldset>

        <button className={styles.submit} type="submit">
          Envoyer ma demande
        </button>

        <p className={styles.privacyNote}>
          Vos informations servent uniquement à répondre à votre demande. Consultez
          notre <a href="/confidentialite">politique de confidentialité</a>.
        </p>

        {message ? (
          <p className={styles.message} role="status">
            {message}
          </p>
        ) : null}
        </form>
      </ScrollReveal>
    </section>
  );
}
