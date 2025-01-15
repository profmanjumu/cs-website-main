export type CategorizedGoogleDriveFile = GoogleDriveFile & {
  category?: string;
};

export type FileGroup = {
  [key: string]: CategorizedGoogleDriveFile[];
};

export type GoogleDriveFile = {
  id: string;
  name: string;
  webViewLink: string;
  webContentLink: string;
};

export type TopicsType = {
  id: string;
  name: string;
};
