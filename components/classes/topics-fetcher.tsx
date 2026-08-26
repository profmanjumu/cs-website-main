import { TopicsType } from '@/lib/types'
import React from 'react'
import { Topics } from './topics'
import { fetchDriveTopics } from '@/lib/drive-topics'

type TopicsFetcherProps = {
  folderId: string
}

const TopicsFetcher = async ({ folderId }: TopicsFetcherProps) => {
  const topics = await fetchDriveTopics(folderId)
  return <Topics topics={topics} />
}

export default TopicsFetcher
