import styles from "./page.module.css";
import Link from "next/link";

async function getSections() {
  const section = await fetch("https://dummyjson.com/posts?limit=10");
  return section.json();
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { posts } = await getSections();

  return (
    <div className="container mx-auto">
      <main className="grid grid-cols-[30%_70%] grid-rows-[auto]">
        <aside
          className={`sticky h-screen top-0 w-full overflow-y-scroll ${styles.sidebar}`}
        >
          <ul>
            {posts.map((item: { id: string; title: string }) => (
              <li key={item.id}>
                <Link href={`/docs/${item.id}`}>{item.title}</Link>
              </li>
            ))}
            <li>Intro</li>
            <li>Second</li>
          </ul>
          <p className="bg-red-200 h-[1000px]">stuff</p>
        </aside>
        <div>{children}</div>
      </main>
    </div>
  );
}
