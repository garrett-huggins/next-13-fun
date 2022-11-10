import { getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdown2html";
import markdownStyles from "./markdown-styles.module.css";

export default async function DocsSection({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="w-full h-16  text-white">
      <p>{post.title}</p>
      {/* angry since Items: [key: string]: string */}
      <p>{post.author}</p>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
