import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import styles from "../legal.module.scss";

export const metadata: Metadata = {
  title: "Mentions légales | Welc’Home",
  robots: { index: false, follow: false },
};

export default function LegalNoticePage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.content}>
        <p className={styles.kicker}>INFORMATIONS LÉGALES</p>
        <h1>Mentions légales</h1>
        <p className={styles.introduction}>
          Informations relatives à l’éditeur, à l’hébergement et à l’utilisation
          du site Welc’Home.
        </p>
        <p className={styles.notice}>
          Cette page est préparatoire. Les informations indiquées « à compléter »
          devront être renseignées avant toute publication du site.
        </p>

        <div className={styles.sections}>
          <section>
            <h2>Éditeur du site</h2>
            <ul>
              <li>Nom ou dénomination sociale : à compléter.</li>
              <li>Statut ou forme juridique : à compléter.</li>
              <li>Adresse du siège ou de l’établissement : à compléter.</li>
              <li>Adresse e-mail et numéro de téléphone : à compléter.</li>
              <li>Numéro SIREN ou SIRET : à compléter.</li>
              <li>Immatriculation RNE ou RCS, selon l’activité : à compléter.</li>
              <li>Capital social et numéro de TVA, si applicables : à compléter.</li>
            </ul>
          </section>

          <section>
            <h2>Responsable de la publication</h2>
            <p>Nom de la personne responsable de la publication : à compléter.</p>
          </section>

          <section>
            <h2>Hébergement</h2>
            <p>
              Nom ou dénomination sociale, adresse et numéro de téléphone de
              l’hébergeur : à compléter après le choix de l’hébergement.
            </p>
          </section>

          <section>
            <h2>Activité présentée</h2>
            <p>
              Welc’Home présente un service local de nettoyage et de remise en
              ordre destiné aux locations courte durée à Marseille et ses
              alentours.
            </p>
          </section>

          <section>
            <h2>Propriété intellectuelle</h2>
            <p>
              Les textes, éléments graphiques et visuels sont soumis aux règles
              applicables en matière de propriété intellectuelle. Les droits
              associés à chaque contenu doivent être vérifiés avant sa
              publication ou sa réutilisation.
            </p>
            <p>
              Les images utilisées à titre illustratif ne constituent pas
              nécessairement des photographies d’interventions réelles.
            </p>
          </section>

          <section>
            <h2>Données personnelles</h2>
            <p>
              Les informations relatives au formulaire de contact et aux droits
              des personnes sont détaillées dans la{" "}
              <a href="/confidentialite">politique de confidentialité</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
