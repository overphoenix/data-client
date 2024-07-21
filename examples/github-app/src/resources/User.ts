import { Temporal } from '@js-temporal/polyfill';

import { githubResource, GithubEndpoint, GithubEntity } from './Base';

export class User extends GithubEntity {
  readonly nodeId: string = '';
  readonly login: string = '';
  readonly avatarUrl: string = '';
  readonly gravatarUrl: string = '';
  readonly gravatarId: string = '';
  readonly type = 'User';
  readonly siteAdmin: boolean = false;
  readonly htmlUrl: string = '';
  readonly followersUrl: string = '';
  readonly followingUrl: string = '';
  readonly gistsUrl: string = '';
  readonly starredUrl: string = '';
  readonly subscriptionsUrl: string = '';
  readonly organizationsUrl: string = '';
  readonly eventsUrl: string = '';
  readonly receivedEventsUrl: string = '';

  readonly name: string = '';
  readonly company: string = '';
  readonly blog: string = '';
  readonly location: string = '';
  readonly email: string = '';
  readonly hireable: boolean = false;
  readonly bio: string = '';
  readonly publicRepos: number = 0;
  readonly publicGists: number = 0;
  readonly followers: number = 0;
  readonly following: number = 0;
  readonly createdAt = Temporal.Instant.fromEpochSeconds(0);
  readonly updatedAt = Temporal.Instant.fromEpochSeconds(0);
  readonly privateGists: number = 0;
  readonly totalPrivateRepos: number = 0;
  readonly ownedPrivateRepos: number = 0;
  readonly collaborators: number = 0;

  static schema = {
    createdAt: Temporal.Instant.from,
    updatedAt: Temporal.Instant.from,
  };

  pk() {
    return this.login;
  }
}
export const UserResource = githubResource({
  path: '/users/:login',
  schema: User,
}).extend('current', {
  path: '/user',
  schema: User,
});

export default UserResource;
