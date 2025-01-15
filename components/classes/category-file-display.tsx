'use client'
import React from 'react'
import { CategorizedGoogleDriveFile } from '@/lib/types'
import CategoryDivider from './category-divider'
import { DownloadIcon } from 'lucide-react'

import { usePathname } from 'next/navigation'
import ExternalLinks from './external-links'

type CategoryFileDisplayProps = {
  files: CategorizedGoogleDriveFile[]
  showDownloadButton?: boolean
}

const CategoryFileDisplay: React.FC<CategoryFileDisplayProps> = ({
  files,
  showDownloadButton = false,
}) => {
  const pathname = usePathname()

  if (files.length === 0) return null

  return (
    <section className="mb-12">
      <CategoryDivider>{files[0].category}</CategoryDivider>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
        {files.map((file, index) => {
          const embedUrl = `https://drive.google.com/file/d/${file.id}/preview`
          const fileNameWithoutExtension = file.name
            .split('.')
            .slice(0, -1)
            .join('.')

          return (
            <li key={index} style={{ width: '100%', height: '500px' }}>
              <div className="flex items-center gap-x-3 m-2">
                <h2 className="text-muted-foreground">
                  {fileNameWithoutExtension}
                </h2>
                {showDownloadButton && (
                  <a href={file.webContentLink}>
                    <DownloadIcon className="opacity-50 hover:opacity-100 transition-colors duration-150" />
                  </a>
                )}
              </div>
              <iframe
                src={embedUrl}
                style={{ width: '100%', height: '100%' }}
              ></iframe>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default CategoryFileDisplay
