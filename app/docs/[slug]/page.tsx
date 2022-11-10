import { getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdown2html";
import markdownStyles from "./markdown-styles.module.css";

export default async function DocsSection({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { section: string };
}) {
  const post = getPostBySlug(
    searchParams.section,
    ["title", "author", "content"],
    params.slug
  );

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="w-full h-16  text-white">
      <p className="text-2xl">{post.title}</p>
      <p className="text-gray-400">{post.author}</p>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
