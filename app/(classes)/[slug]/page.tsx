import Syllabus from '@/components/classes/syllabus'
import Title from '@/components/classes/title'
import { Topics } from '@/components/classes/topics'
import TopicsFetcher from '@/components/classes/topics-fetcher'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { TopicsType } from '@/lib/types'
import { google } from 'googleapis'
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
      : params.slug === 'cs496'
      ? '1G58n5a_oTsOL7jK1HT7KBmgGqX9y68PI'
      : 'Unknown'

  const title =
    params.slug === 'cs210'
      ? 'CS 210'
      : params.slug === 'cs460'
      ? 'CS 460'
      : params.slug === 'cs496'
      ? 'CS 496'
      : 'Unknown Course'

  return (
    <main className="min-h-screen">
      <Title>{title}</Title>
      <div>
        <Syllabus />
      </div>

      <h1 className="text-4xl font-roboto_condensed text-discordText p-10">
        Topics
      </h1>
      <p className="font-dm_serif_display ml-5 text-justify">
        Each topic below is linked to corresponding slides, video lectures and
        external resources.
      </p>
      <Suspense
        fallback={
          <div className="flex flex-col space-y-8 w-full md:w-64">
            {Array.from({ length: 9 }, (_, index) => (
              <Skeleton className="h-4 w-full" key={index} />
            ))}
          </div>
        }
      >
        <TopicsFetcher folderId={folderId} />
      </Suspense>
    </main>
  )
}
