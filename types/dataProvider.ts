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
  company?: string
  popularity?: number
  sql?: string
}
