import type { ArticleBlock } from "@/content/articles";
import styles from "./ArticleBody.module.scss";

type ArticleBodyProps = {
  blocks: readonly ArticleBlock[];
  variant: "feature" | "split" | "editorial";
};

export function ArticleBody({ blocks, variant }: ArticleBodyProps) {
  return (
    <div className={`${styles.body} ${styles[variant]}`}>
      {blocks.map((block, index) => {
        const key = `${block.type}-${"id" in block ? block.id : index}`;

        if (block.type === "heading") {
          return block.level === 2 ? (
            <h2 id={block.id} key={key}>
              {block.text}
            </h2>
          ) : (
            <h3 id={block.id} key={key}>
              {block.text}
            </h3>
          );
        }

        if (block.type === "paragraph") {
          return <p key={key}>{block.text}</p>;
        }

        if (block.type === "callout") {
          return (
            <aside className={styles.callout} key={key}>
              <strong>{block.title}</strong>
              <p>{block.text}</p>
            </aside>
          );
        }

        if (block.type === "table") {
          return (
            <section className={styles.editorialComparison} key={key}>
              <p className={styles.comparisonLabel}>{block.headers[0]}</p>
              {block.rows.map((row, rowIndex) => (
                <div
                  className={styles.comparisonEntry}
                  key={`${key}-row-${rowIndex}`}
                >
                  <p className={styles.comparisonLead}>{row[0]}</p>
                  <div className={styles.comparisonDetails}>
                    {row.slice(1).map((cell, cellIndex) => (
                      <p key={`${key}-cell-${rowIndex}-${cellIndex}`}>
                        <strong>{block.headers[cellIndex + 1]}</strong>
                        <span>{cell}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          );
        }

        if (block.type === "checklist") {
          return (
            <div className={styles.editorialPoints} key={key}>
              {block.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          );
        }

        const List = block.ordered ? "ol" : "ul";

        return (
          <List key={key}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </List>
        );
      })}
    </div>
  );
}
