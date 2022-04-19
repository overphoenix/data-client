import { normalize, schema, Entity, AbstractInstanceType } from '../src';
import IDEntity from '../src/entities/IDEntity';

class User extends IDEntity {
  readonly posts: string[] = [];
  readonly comments: string[] = [];

  static fromJS<T extends typeof Entity>(
    this: T,
    props: Partial<AbstractInstanceType<T>> = {},
    parent?: any,
    key?: string,
  ): AbstractInstanceType<T> {
    switch (key) {
      case 'author':
        return super.fromJS({
          ...(props as Partial<User>),
          posts: [parent.id],
        } as any) as any;
      case 'commenter':
        return super.fromJS({
          ...(props as Partial<User>),
          comments: [parent.id],
        } as any) as any;
      default:
        return super.fromJS(props) as any;
    }
  }

  static merge<T extends typeof Entity>(this: T, existing: any, incoming: any) {
    // Apply everything from entityB over entityA, except for "favorites"
    return {
      ...existing,
      ...incoming,
      posts: [...(existing.posts || []), ...(incoming.posts || [])],
      comments: [...(existing.comments || []), ...(incoming.comments || [])],
    };
  }
}

class Comment extends IDEntity {
  static schema = { commenter: User };

  static fromJS<T extends typeof Entity>(
    this: T,
    props: Partial<AbstractInstanceType<T>> = {},
    parent?: any,
    key?: string,
  ): AbstractInstanceType<T> {
    return super.fromJS({ ...props, post: parent.id }) as any;
  }
}

class Post extends IDEntity {
  static schema = {
    author: User,
    comments: [Comment],
  };
}

const data = {
  /* ...*/
};
const normalizedData = normalize(data, Post);
console.log(normalizedData);