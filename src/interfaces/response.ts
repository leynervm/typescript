export interface GitHubAPIResponse {
  total_count: number
  incomplete_results: boolean
  items: Item[]
}

export interface Item {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  owner: Owner
  html_url: string
  description: string
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  deployments_url: string
  created_at: Date
  updated_at: Date
  pushed_at: Date
  git_url: string
  ssh_url: string
  clone_url: string
  svn_url: string
  homepage: null | string
  size: number
  stargazers_count: number
  watchers_count: number
  language: null | string
  has_issues: boolean
  has_projects: boolean
  has_downloads: boolean
  has_wiki: boolean
  has_pages: boolean
  has_discussions: boolean
  forks_count: number
  mirror_url: null
  archived: boolean
  disabled: boolean
  open_issues_count: number
  license: License | null
  allow_forking: boolean
  is_template: boolean
  web_commit_signoff_required: boolean
  topics: string[]
  visibility: Visibility
  forks: number
  open_issues: number
  watchers: number
  default_branch: DefaultBranch
  score: number
}

export enum DefaultBranch {
  Dev = 'dev',
  Develop = 'develop',
  Main = 'main',
  Master = 'master',
  V2 = 'v2'
}

export interface License {
  key: Key
  name: Name
  spdx_id: SpdxID
  url: null | string
  node_id: NodeID
}

export enum Key {
  Apache20 = 'apache-2.0',
  CcBy40 = 'cc-by-4.0',
  MIT = 'mit',
  Other = 'other',
  Unlicense = 'unlicense'
}

export enum Name {
  ApacheLicense20 = 'Apache License 2.0',
  CreativeCommonsAttribution40International = 'Creative Commons Attribution 4.0 International',
  MITLicense = 'MIT License',
  Other = 'Other',
  TheUnlicense = 'The Unlicense'
}

export enum NodeID {
  MDc6TGljZW5ZZTA = 'MDc6TGljZW5zZTA=',
  MDc6TGljZW5ZZTE1 = 'MDc6TGljZW5zZTE1',
  MDc6TGljZW5ZZTEz = 'MDc6TGljZW5zZTEz',
  MDc6TGljZW5ZZTI = 'MDc6TGljZW5zZTI=',
  MDc6TGljZW5ZZTI1 = 'MDc6TGljZW5zZTI1'
}

export enum SpdxID {
  Apache20 = 'Apache-2.0',
  CcBy40 = 'CC-BY-4.0',
  MIT = 'MIT',
  Noassertion = 'NOASSERTION',
  Unlicense = 'Unlicense'
}

export interface Owner {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: Type
  user_view_type: Visibility
  site_admin: boolean
}

export enum Type {
  Organization = 'Organization',
  User = 'User'
}

export enum Visibility {
  Public = 'public'
}
