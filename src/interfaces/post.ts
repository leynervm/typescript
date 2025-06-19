export interface PostI {
  title: string
  content: string
  publish?: PostStatus
}

export interface PostFilters {
  search?: string
  publish?: PostStatus
  date?: string
}

export enum PostStatus {
  PUBLISH = 'publicado',
  LOCAL = 'local'
}
