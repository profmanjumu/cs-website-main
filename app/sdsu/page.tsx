import SdsuHub, { type SdsuCourseBundle } from '@/components/hubs/sdsu-hub'
import { courseFolderIds } from '@/lib/course-folders'
import {
  classOptions,
  courseMeta,
  discordWidgetIds,
  sdsuTabOrder,
} from '@/lib/data'
import { fetchDriveTopics } from '@/lib/drive-topics'

export default async function SdsuHubPage({
  searchParams,
}: {
  searchParams: { course?: string }
}) {
  const byName = Object.fromEntries(
    classOptions.filter((c) => c.org === 'SDSU').map((c) => [c.name, c])
  )

  const courses: SdsuCourseBundle[] = []

  for (const name of sdsuTabOrder) {
    const option = byName[name]
    if (!option || option.external) continue
    const slug = option.href.replace(/^\//, '')
    const folderId = courseFolderIds[slug] ?? ''
    let topics: SdsuCourseBundle['topics'] = []
    if (folderId) {
      try {
        topics = await fetchDriveTopics(folderId)
      } catch {
        topics = []
      }
    }
    courses.push({
      slug,
      name: option.name,
      title: courseMeta[option.name]?.title ?? option.name,
      topics,
      discordWidgetId: discordWidgetIds[slug] ?? '',
    })
  }

  return (
    <main>
      <SdsuHub courses={courses} initialCourse={searchParams.course} />
    </main>
  )
}
