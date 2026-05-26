import Syllabus from '@/components/classes/syllabus'
import Title from '@/components/classes/title'
import TopicsFetcher from '@/components/classes/topics-fetcher'
import { Skeleton } from '@/components/ui/skeleton'
import { Suspense } from 'react'

type PageProps = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const folderId =
    params.slug === 'cs210'
      ? '1c6FZ7t5MUjFi8jiicgh1_mRd9XqkcZ8k'
      : params.slug === 'cs460'
      ? '149mtuEwIJry3mKvXFtN_djAzjnR96UsM'
      : params.slug === 'cs577'
      ? '1G58n5a_oTsOL7jK1HT7KBmgGqX9y68PI'
      : 'Unknown'

  const title =
    params.slug === 'cs210'
      ? 'CS 210'
      : params.slug === 'cs460'
      ? 'CS 460'
      : params.slug === 'cs577'
      ? 'CS 577'
      : 'Unknown Course'

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Title>{title}</Title>

      <div className="px-6 sm:px-12 pt-10 max-w-5xl mx-auto">
        <Syllabus />
      </div>

      <section className="px-6 sm:px-12 pt-12 pb-16 max-w-5xl mx-auto">
        <span className="section-tag">Topics</span>
        <h2 className="font-playfair font-black text-ink text-3xl sm:text-4xl mt-2 mb-3">
          Course Topics
        </h2>
        <p className="font-playfair italic text-inkMuted border-l-[3px] border-terra pl-4 mb-8 max-w-prose">
          Each topic below is linked to the corresponding slides, video lectures and external resources.
        </p>
        <Suspense
          fallback={
            <div className="flex flex-col space-y-3 w-full md:w-64">
              {Array.from({ length: 9 }, (_, index) => (
                <Skeleton className="h-4 w-full" key={index} />
              ))}
            </div>
          }
        >
          <TopicsFetcher folderId={folderId} />
        </Suspense>
      </section>
    </main>
  )
}
