import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/content/ArticleBody/ArticleBody";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import {
  getArticleBySlug,
  getVisibleArticles,
  isAdvicePreviewEnabled,
} from "@/content/articles";
import type { ArticleBlock } from "@/content/articles";
import styles from "./page.module.scss";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

type ArticlePresentation = {
  layout: "feature" | "split" | "editorial";
  showToc: boolean;
};

const articlePresentations: Record<string, ArticlePresentation> = {
  "checklist-nettoyage-entre-deux-voyageurs": {
    layout: "feature",
    showToc: true,
  },
  "rotation-meme-jour": { layout: "split", showToc: true },
  "nettoyage-ponctuel-ou-regulier": {
    layout: "split",
    showToc: false,
  },
  "temps-entre-deux-voyageurs": {
    layout: "editorial",
    showToc: false,
  },
  "combien-jeux-linge-location-courte-duree": {
    layout: "feature",
    showToc: true,
  },
  "verifier-apres-depart-voyageurs": {
    layout: "editorial",
    showToc: false,
  },
  "organiser-placard-nettoyage-location-courte-duree": {
    layout: "split",
    showToc: true,
  },
  "organiser-circuit-linge-propre-linge-utilise": {
    layout: "editorial",
    showToc: true,
  },
  "sable-sel-chaleur-marseille-ete": {
    layout: "feature",
    showToc: false,
  },
  "preparer-logement-haute-saison-marseille": {
    layout: "split",
    showToc: true,
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getVisibleArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.seoTitle} | Welc’Home`,
    description: article.description,
    robots: isAdvicePreviewEnabled ? { index: false, follow: false } : undefined,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const headings = article.blocks.filter(
    (block): block is Extract<ArticleBlock, { type: "heading" }> =>
      block.type === "heading" && block.level === 2,
  );
  const relatedArticles = article.relatedSlugs
    .map((relatedSlug) => getArticleBySlug(relatedSlug))
    .filter((relatedArticle) => relatedArticle !== undefined);
  const presentation = articlePresentations[article.slug] ?? {
    layout: "editorial",
    showToc: false,
  };

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <nav className={styles.breadcrumb} aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">/</span>
          <Link href="/conseils">Conseils</Link>
          <span aria-hidden="true">/</span>
          <span>{article.category}</span>
        </nav>

        <header
          className={`${styles.articleHeader} ${styles[presentation.layout]}`}
        >
          <div className={styles.headerCopy}>
            <p className={styles.category}>{article.category.toUpperCase()}</p>
            <h1>{article.title}</h1>
            <p className={styles.introduction}>{article.introduction}</p>
          </div>

          <figure className={styles.heroMedia}>
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1120px"
            />
          </figure>
        </header>

        {presentation.showToc && headings.length > 2 ? (
          <nav className={styles.toc} aria-label="Sommaire de l’article">
            <p>Dans cet article</p>
            <ol>
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a href={`#${heading.id}`}>{heading.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <article className={styles.article}>
          <ArticleBody blocks={article.blocks} variant={presentation.layout} />

          <section className={styles.sources} aria-labelledby="sources-title">
            <h2 id="sources-title">Pour aller plus loin</h2>
            <ul>
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} rel="noreferrer" target="_blank">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {relatedArticles.length > 0 ? (
          <section className={styles.related} aria-labelledby="related-title">
            <div>
              <p>POURSUIVRE LA LECTURE</p>
              <h2 id="related-title">Conseils associés</h2>
            </div>
            <div className={styles.relatedList}>
              {relatedArticles.map((relatedArticle) => (
                <article key={relatedArticle.slug}>
                  <Link
                    className={styles.relatedImage}
                    href={`/conseils/${relatedArticle.slug}`}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <Image
                      src={relatedArticle.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 280px"
                    />
                  </Link>
                  <div>
                    <p>{relatedArticle.category}</p>
                    <h3>
                      <Link href={`/conseils/${relatedArticle.slug}`}>
                        {relatedArticle.title}
                      </Link>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
