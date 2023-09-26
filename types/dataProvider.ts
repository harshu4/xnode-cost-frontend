export type DataProvider = {
  id: string
  name?: string
  description?: string
  createdAt?: Date
  updatedAt?: Date
  tags?: string[]
  useCases?: string[]
  live: boolean
  download: boolean
  dataGithubName?: string
  dataGithubLink?: string
  dataCloudLink?: string
  dataCloudName?: string
  dataSpace?: string
  downloadCSVLink?: string
  liveLink?: string
  company?: string
  popularity?: number
  sql?: string
}
