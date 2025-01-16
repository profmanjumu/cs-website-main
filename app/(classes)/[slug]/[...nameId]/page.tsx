import CategoryFileDisplay from '@/components/classes/category-file-display'
import ExternalLinks from '@/components/classes/external-links'
import Title from '@/components/classes/title'
import { Separator } from '@/components/ui/separator'
import {
  CategorizedGoogleDriveFile,
  FileGroup,
  GoogleDriveFile,
} from '@/lib/types'
import { google } from 'googleapis'
import { Gaxios } from "gaxios";
export type TopicsPageProps = {
  params: {
    nameId: string[]
  }
}

export default async function TopicPage({ params }: TopicsPageProps) {
  // const [title, id] = params.slug

  // console.log(title, id)

  const [title, id] = params.nameId
  console.log('Title and id: ', title, id)

  const decodedCredentials = Buffer.from(
    process.env.GOOGLE_APPLICATION_CREDENTIALS!,
    'base64'
  ).toString('utf8')

  const credentialsJson = JSON.parse(decodedCredentials)

  const auth = new google.auth.GoogleAuth({
    credentials: credentialsJson,
    scopes: ['https://www.googleapis.com/auth/drive'],
  })

  const drive = google.drive({ version: 'v3', auth })

  const driveResponse = await drive.files.list({
    q: `'${id}' in parents`,
    pageSize: 10,
    fields: 'files(id, name, webViewLink, webContentLink)',
  })

  const files = driveResponse.data.files as GoogleDriveFile[]

  const categorizedFiles: (CategorizedGoogleDriveFile | null)[] = files
    .map((file) => {
      if (!file || !file.name) return null

      const parts = file.name.split('.')
      const extension =
        parts.length > 0 ? parts.pop()!.toLowerCase() : undefined
      let category = ''

      if (['mkv', 'mp4'].includes(extension!)) {
        category = 'Videos'
      } else {
        category = 'Slides'
      }

      return { ...file, category } as CategorizedGoogleDriveFile
    })
    .filter((file) => file !== null)

  const groupByExtension: FileGroup = categorizedFiles.reduce(
    (acc: FileGroup, file) => {
      if (!file) return acc

      const { category = 'unknown' } = file

      if (!acc[category]) {
        acc[category] = []
      }

      acc[category].push(file)
      return acc
    },
    {}
  )

  const categoryOrder = ['Slides', 'Videos']

  const sortedCategories = Object.keys(groupByExtension).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a)
    const indexB = categoryOrder.indexOf(b)

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB
    } else if (indexA !== -1) {
      return -1
    } else if (indexB !== -1) {
      return 1
    }

    return a.localeCompare(b)
  })

  return (
    <main className="flex flex-col gap-y-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <Title>{decodeURIComponent(title).split('-').join(' ')}</Title>
      <ExternalLinks />
      {sortedCategories.map((category, index) => (
        <>
          <Separator className="h-[3px]" />
          <CategoryFileDisplay
            key={category}
            files={groupByExtension[category]}
            showDownloadButton={category === 'Slides'}
          />
        </>
      ))}
    </main>
  )
}
