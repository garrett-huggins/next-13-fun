import styles from "./page.module.css";
import Link from "next/link";
import { getDocsSection, getDocsDirectory } from "../../lib/api";

export default function Layout({ children }: { children: React.ReactNode }) {
  const docSections = getDocsDirectory();

  const posts = docSections.map((section) => {
    return {
      sectionTitle: section,
      docs: getDocsSection(["title", "slug", "idx"], section),
    };
  });
  // return {
  //   sectionTitle: string of each docs directory
  //   docs: get each section in the directory
  // }

  return (
    <div className="container mx-auto">
      <main className="grid grid-cols-[30%_70%] gap-1 grid-rows-[auto]">
        <aside
          className={`sticky h-screen top-0 w-full overflow-y-scroll ${styles.sidebar}`}
        >
          <div className="space-y-2">
            {posts.map((section) => (
              <div className="space-y-2" key={section.sectionTitle}>
                <p className="text-2xl">{section.sectionTitle}</p>
                <ul className="space-y-2">
                  {section.docs.map((item) => (
                    <li className="ml-2" key={item.slug}>
                      <Link
                        href={`/docs/${section.sectionTitle}?section=${item.slug}`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
        <div>{children}</div>
      </main>
    </div>
  );
}
