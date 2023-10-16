export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-evenly p-24">
      My contact: {params.slug}
    </div>
  );
}
