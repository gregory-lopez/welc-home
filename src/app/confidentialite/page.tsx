import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import styles from "../legal.module.scss";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Welc’Home",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.content}>
        <p className={styles.kicker}>DONNÉES PERSONNELLES</p>
        <h1>Politique de confidentialité</h1>
        <p className={styles.introduction}>
          Cette page précise le fonctionnement prévu pour les demandes de contact
          adressées à Welc’Home.
        </p>
        <p className={styles.notice}>
          Cette politique est préparatoire. L’identité du responsable de
          traitement, ses coordonnées, la durée de conservation et les
          prestataires devront être complétés avant la mise en service.
        </p>

        <div className={styles.sections}>
          <section>
            <h2>Responsable du traitement</h2>
            <p>
              Identité, adresse et coordonnées du responsable du traitement : à
              compléter avant la publication du site.
            </p>
          </section>

          <section>
            <h2>Données concernées</h2>
            <p>Le formulaire de devis demande les informations suivantes :</p>
            <ul>
              <li>Nom et prénom.</li>
              <li>Adresse e-mail.</li>
              <li>Numéro de téléphone, lorsque vous choisissez de le fournir.</li>
              <li>Commune ou code postal du logement.</li>
              <li>Surface du logement.</li>
              <li>Nombre de couchages.</li>
              <li>Nombre de salles de bain.</li>
              <li>Fréquence envisagée, lorsqu’elle est renseignée.</li>
              <li>Date souhaitée, lorsqu’elle est renseignée.</li>
              <li>Précisions libres, lorsqu’elles sont renseignées.</li>
              <li>Services complémentaires éventuellement sélectionnés.</li>
            </ul>
            <p>
              Les informations obligatoires permettent de comprendre la demande
              et d’y répondre. Le téléphone, la fréquence, la date souhaitée, les
              précisions libres et les services complémentaires sont facultatifs.
            </p>
          </section>

          <section>
            <h2>Finalité et base légale</h2>
            <p>
              Les informations servent uniquement à étudier une demande de devis,
              à échanger avec son auteur et à préparer une proposition adaptée.
            </p>
            <p>
              Base légale envisagée : mesures précontractuelles prises à la
              demande de la personne concernée. Cette base devra être confirmée
              par l’éditeur avant l’ouverture du service.
            </p>
          </section>

          <section>
            <h2>Fonctionnement du formulaire</h2>
            <p>
              Dans sa configuration actuelle, le formulaire prépare un e-mail
              dans l’application de messagerie du visiteur. Le site ne comporte
              pas de base de données dédiée aux demandes de contact.
            </p>
            <p>
              Lorsque l’adresse professionnelle sera configurée, le message
              pourra être transmis et conservé dans la messagerie choisie par
              l’éditeur.
            </p>
          </section>

          <section>
            <h2>Destinataires et conservation</h2>
            <p>
              Destinataires prévus : l’éditeur du site et, si nécessaire, les
              personnes habilitées à traiter les demandes. Les prestataires
              d’hébergement et de messagerie devront être identifiés lorsqu’ils
              seront choisis.
            </p>
            <p>
              Durée de conservation des demandes et critères de suppression : à
              définir et à compléter avant la mise en service.
            </p>
            <p>
              Éventuels transferts de données hors de l’Union européenne : à
              vérifier auprès des prestataires effectivement retenus.
            </p>
          </section>

          <section>
            <h2>Cookies et mesure d’audience</h2>
            <p>
              Aucun outil de mesure d’audience ou traceur publicitaire n’est
              intégré à la version actuelle du site. Cette information devra
              être revue si de nouveaux services sont ajoutés.
            </p>
          </section>

          <section>
            <h2>Vos droits</h2>
            <p>
              Selon les conditions prévues par la réglementation applicable,
              vous pouvez demander l’accès à vos données, leur rectification,
              leur effacement ou la limitation de leur traitement, et exercer
              les autres droits applicables à votre situation.
            </p>
            <p>
              Adresse de contact pour exercer ces droits : à compléter avant
              publication.
            </p>
            <p>
              Une réclamation peut également être adressée à la{" "}
              <a
                href="https://www.cnil.fr/fr/plaintes"
                target="_blank"
                rel="noreferrer"
              >
                Commission nationale de l’informatique et des libertés
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
