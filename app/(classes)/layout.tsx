export default function ClassLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="md:p-24 px-12 py-24">{children}</div>
}
