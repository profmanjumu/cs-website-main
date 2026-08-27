import { TopicPageBack } from '@/components/ui/back-button'

export default function ClassLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-0">
      <TopicPageBack />
      {children}
    </div>
  )
}
