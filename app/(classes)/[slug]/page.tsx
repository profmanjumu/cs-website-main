import ClassTabs from '@/components/classes/class-tabs'
import Title from '@/components/classes/title'
import { courseFolderIds } from '@/lib/course-folders'
import { discordWidgetIds } from '@/lib/data'
import { fetchDriveTopics } from '@/lib/drive-topics'

type PageProps = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const folderId = courseFolderIds[params.slug] ?? ''

  const title =
    params.slug === 'cs210'
      ? 'CS 210'
      : params.slug === 'cs250'
      ? 'CS 250'
      : params.slug === 'cs460'
      ? 'CS 460'
      : params.slug === 'cs577'
      ? 'CS 577'
      : 'Unknown Course'

  const discordWidgetId = discordWidgetIds[params.slug] || ''

  let topics: Awaited<ReturnType<typeof fetchDriveTopics>> = []
  try {
    if (folderId) {
      topics = await fetchDriveTopics(folderId)
    }
  } catch {
    topics = []
  }

  return (
    <main className="min-h-screen bg-silver text-ink">
      <Title>{title}</Title>
      <ClassTabs
        slug={params.slug}
        courseTitle={title}
        topics={topics}
        discordWidgetId={discordWidgetId}
      />
    </main>
  )
}
