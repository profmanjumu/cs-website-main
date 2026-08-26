export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-silver text-ink px-6 py-24">
      <h1 className="font-bricolage font-extrabold text-gemOrange text-[clamp(4rem,16vw,7rem)] leading-none mb-3">
        404
      </h1>
      <p className="font-lora text-lg text-inkMuted">Page not found.</p>
    </main>
  )
}
