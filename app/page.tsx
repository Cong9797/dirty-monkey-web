export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-2xl space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          Featured Artist
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          New portfolio site for your next artist.
        </h1>
        <p className="text-zinc-300 leading-relaxed">
          This is a starter Next.js site running fully inside Docker.
          Replace this content with the artists biography, artworks,
          and contact information.
        </p>
      </section>
    </main>
  );
}
