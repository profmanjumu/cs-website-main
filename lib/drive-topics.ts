import { TopicsType } from '@/lib/types'

export async function fetchDriveTopics(folderId: string): Promise<TopicsType[]> {
  const { google } = await import('googleapis')

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
    q: `'${folderId}' in parents`,
    pageSize: 10,
    fields: 'files(id, name)',
  })

  return (driveResponse.data.files as TopicsType[]) ?? []
}
