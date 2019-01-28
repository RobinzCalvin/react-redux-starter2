export interface ISearchUserResponse {
  items: IServerUser[];
  total_count: number;
}

export interface IServerUser {
  id: number;
  login: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  html_url: string;
  organizations_url: string;
  repos_url: string;
  starred_url: string;
  subscriptions_url: string;
  score: number;
}

export interface IUser {
  id: number;
  login: string;
  avatarURL: string;
  followersURL: string;
  followingURL: string;
  htmlURL: string;
  organizationsURL: string;
  reposURL: string;
  starredURL: string;
  subscriptionsURL: string;
  score: number;
}
