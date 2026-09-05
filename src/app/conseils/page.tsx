import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import {
  getVisibleArticles,
  isAdvicePreviewEnabled,
} from "@/content/articles";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Conseils pour locations courte durée | Welc’Home",
  description:
    "Conseils pratiques pour organiser le nettoyage, le linge et les rotations de votre location courte durée.",
  robots: isAdvicePreviewEnabled ? { index: false, follow: false } : undefined,
};

export default function AdviceIndexPage() {
  const visibleArticles = getVisibleArticles();

  if (visibleArticles.length === 0) {
    notFound();
  }

  const [featuredArticle, ...otherArticles] = visibleArticles;

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <header className={styles.intro}>
          <p className={styles.kicker}>CONSEILS AUX PROPRIÉTAIRES</p>
          <h1>Conseils pratiques pour votre location</h1>
          <p>
            Des repères concrets pour préparer votre logement, organiser les
            rotations et éviter les oublis entre deux voyageurs.
          </p>
        </header>

        <section className={styles.featured} aria-labelledby="featured-title">
          <div className={styles.featuredImage}>
            <Image
              alt={featuredArticle.imageAlt}
              fill
              priority
              sizes="(max-width: 780px) calc(100vw - 32px), 48vw"
              src={featuredArticle.image}
            />
          </div>

          <div className={styles.featuredContent}>
            <p className={styles.category}>À LA UNE · {featuredArticle.category}</p>
            <h2 id="featured-title">
              <Link href={`/conseils/${featuredArticle.slug}`}>
                {featuredArticle.title}
              </Link>
            </h2>
            <p>{featuredArticle.description}</p>
            <Link
              className={styles.readLink}
              href={`/conseils/${featuredArticle.slug}`}
            >
              Lire le conseil <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className={styles.latest} aria-labelledby="latest-title">
          <div className={styles.sectionHeading}>
            <p>À DÉCOUVRIR ÉGALEMENT</p>
            <h2 id="latest-title">Pour aller plus loin</h2>
          </div>

          <div className={styles.articleList}>
            {otherArticles.map((article) => (
              <article className={styles.articleRow} key={article.slug}>
                <Link
                  aria-label={`Lire : ${article.title}`}
                  className={styles.articleImage}
                  href={`/conseils/${article.slug}`}
                >
                  <Image
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 780px) calc(100vw - 32px), 50vw"
                    src={article.image}
                  />
                </Link>
                <div>
                  <p className={styles.category}>{article.category}</p>
                  <h3>
                    <Link href={`/conseils/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p>{article.description}</p>
                  <Link
                    className={styles.readLink}
                    href={`/conseils/${article.slug}`}
                  >
                    Lire le conseil <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
