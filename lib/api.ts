import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getPostBySlug(
  slug: string,
  fields: string[] = [],
  docsDirectory: string
) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(`_docs/${docsDirectory}`, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getDocsSection(fields: string[] = [], docsDirectory: string) {
  const slugs = fs.readdirSync(`_docs/${docsDirectory}`);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, docsDirectory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.idx > post2.idx ? 1 : -1));
  return posts;
}

export function getDocsDirectory() {
  const docSections = fs.readdirSync("_docs/", "utf8");
  return docSections;
}
