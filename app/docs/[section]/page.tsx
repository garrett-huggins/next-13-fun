async function getNote(id: number) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);

  return res.json();
}

export default async function DocsSection({
  params,
}: {
  params: { section: number };
}) {
  const note = await getNote(params.section);

  return (
    <div className="w-full h-16  text-white">
      <p>{note.id}</p>
      <p>{note.title}</p>
      <p>{note.body}</p>
    </div>
  );
}
