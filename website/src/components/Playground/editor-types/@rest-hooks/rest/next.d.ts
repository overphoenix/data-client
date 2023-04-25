type AbstractInstanceType<T> = T extends new (...args: any) => infer U ? U : T extends {
    prototype: infer U;
} ? U : never;
type DenormalizeObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? Denormalize<S[K]> : S[K];
};
type DenormalizeNullableObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? DenormalizeNullable<S[K]> : S[K];
};
type NormalizeObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? Normalize<S[K]> : S[K];
};
interface NestedSchemaClass<T = any> {
    schema: Record<string, Schema>;
    prototype: T;
}
interface RecordClass<T = any> extends NestedSchemaClass<T> {
    fromJS: (...args: any) => AbstractInstanceType<T>;
}
type DenormalizeNullableNestedSchema<S extends NestedSchemaClass> = keyof S['schema'] extends never ? S['prototype'] : string extends keyof S['schema'] ? S['prototype'] : S['prototype'] & {
    [K in keyof S['schema']]: DenormalizeNullable<S['schema'][K]>;
};
type DenormalizeReturnType<T> = T extends (input: any, unvisit: any) => [infer R, any, any] ? R : never;
type NormalizeReturnType<T> = T extends (...args: any) => infer R ? R : never;
type Denormalize<S> = S extends EntityInterface<infer U> ? U : S extends RecordClass ? AbstractInstanceType<S> : S extends {
    denormalizeOnly: (...args: any) => any;
} ? ReturnType<S['denormalizeOnly']> : S extends SchemaClass ? DenormalizeReturnType<S['denormalize']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Denormalize<F>[] : S extends {
    [K: string]: any;
} ? DenormalizeObject<S> : S;
type DenormalizeNullable<S> = S extends EntityInterface<any> ? DenormalizeNullableNestedSchema<S> | undefined : S extends RecordClass ? DenormalizeNullableNestedSchema<S> : S extends SchemaClass ? DenormalizeReturnType<S['_denormalizeNullable']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Denormalize<F>[] | undefined : S extends {
    [K: string]: any;
} ? DenormalizeNullableObject<S> : S;
type Normalize<S> = S extends EntityInterface ? string : S extends RecordClass ? NormalizeObject<S['schema']> : S extends SchemaClass ? NormalizeReturnType<S['normalize']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Normalize<F>[] : S extends {
    [K: string]: any;
} ? NormalizeObject<S> : S;

interface NetworkError extends Error {
    status: number;
    response?: Response;
}
interface UnknownError extends Error {
    status?: unknown;
    response?: unknown;
}
type ErrorTypes = NetworkError | UnknownError;

interface SnapshotInterface {
    getResponse: <E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>, Args extends readonly [...Parameters<E['key']>]>(endpoint: E, ...args: Args) => {
        data: DenormalizeNullable<E['schema']>;
        expiryStatus: ExpiryStatusInterface;
        expiresAt: number;
    };
    getError: <E extends Pick<EndpointInterface, 'key'>, Args extends readonly [...Parameters<E['key']>]>(endpoint: E, ...args: Args) => ErrorTypes | undefined;
    readonly fetchedAt: number;
}
type ExpiryStatusInterface = 1 | 2 | 3;

/** What the function's promise resolves to */
type ResolveType<E extends (...args: any) => any> = ReturnType<E> extends Promise<infer R> ? R : never;
type PartialParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? Partial<P> : never;

type FetchFunction<A extends readonly any[] = any, R = any> = (...args: A) => Promise<R>;
interface EndpointExtraOptions<F extends FetchFunction = FetchFunction> {
    /** Default data expiry length, will fall back to NetworkManager default if not defined */
    readonly dataExpiryLength?: number;
    /** Default error expiry length, will fall back to NetworkManager default if not defined */
    readonly errorExpiryLength?: number;
    /** Poll with at least this frequency in miliseconds */
    readonly pollFrequency?: number;
    /** Marks cached resources as invalid if they are stale */
    readonly invalidIfStale?: boolean;
    /** Enables optimistic updates for this request - uses return value as assumed network response
     * @deprecated use https://resthooks.io/docs/api/Endpoint#getoptimisticresponse instead
     */
    optimisticUpdate?(...args: Parameters<F>): ResolveType<F>;
    /** Enables optimistic updates for this request - uses return value as assumed network response */
    getOptimisticResponse?(snap: SnapshotInterface, ...args: Parameters<F>): ResolveType<F>;
    /** Determines whether to throw or fallback to */
    errorPolicy?(error: any): 'hard' | 'soft' | undefined;
    /** User-land extra data to send */
    readonly extra?: any;
}

type Schema = null | string | {
    [K: string]: any;
} | Schema[] | SchemaSimple | Serializable;
type Serializable<T extends {
    toJSON(): string;
} = {
    toJSON(): string;
}> = {
    prototype: T;
};
interface SchemaSimple<T = any> {
    normalize(input: any, parent: any, key: any, visit: (...args: any) => any, addEntity: (...args: any) => any, visitedEntities: Record<string, any>): any;
    denormalize(input: {}, unvisit: UnvisitFunction): [denormalized: T, found: boolean, suspend: boolean];
    denormalizeOnly?(input: {}, unvisit: (input: any, schema: any) => any): T;
    infer(args: readonly any[], indexes: NormalizedIndex, recurse: (...args: any) => any, entities: EntityTable): any;
}
interface SchemaClass<T = any, N = T | undefined> extends SchemaSimple<T> {
    _normalizeNullable(): any;
    _denormalizeNullable(): [N, boolean, boolean];
}
interface EntityInterface<T = any> extends SchemaSimple {
    createIfValid?(props: any): any;
    pk(params: any, parent?: any, key?: string): string | undefined;
    readonly key: string;
    merge(existing: any, incoming: any): any;
    expiresAt?(meta: any, input: any): number;
    mergeWithStore?(existingMeta: any, incomingMeta: any, existing: any, incoming: any): any;
    mergeMetaWithStore?(existingMeta: any, incomingMeta: any, existing: any, incoming: any): any;
    useIncoming?(existingMeta: any, incomingMeta: any, existing: any, incoming: any): boolean;
    indexes?: any;
    schema: Record<string, Schema>;
    prototype: T;
}
interface UnvisitFunction {
    (input: any, schema: any): [any, boolean, boolean] | any;
    og?: UnvisitFunction;
    setLocal?: (entity: any) => void;
}
interface NormalizedIndex {
    readonly [entityKey: string]: {
        readonly [indexName: string]: {
            readonly [lookup: string]: string;
        };
    };
}
interface EntityTable {
    [entityKey: string]: {
        [pk: string]: unknown;
    } | undefined;
}
/** Defines a networking endpoint */
interface EndpointInterface<F extends FetchFunction = FetchFunction, S extends Schema | undefined = Schema | undefined, M extends true | undefined = true | undefined> extends EndpointExtraOptions<F> {
    (...args: Parameters<F>): ReturnType<F>;
    key(...args: Parameters<F>): string;
    readonly sideEffect?: M;
    readonly schema?: S;
}

/* eslint-disable @typescript-eslint/ban-types */


interface EndpointOptions<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = undefined,
  M extends true | undefined = undefined,
> extends EndpointExtraOptions<F> {
  key?: (...args: Parameters<F>) => string;
  sideEffect?: M;
  schema?: S;
  [k: string]: any;
}

interface EndpointExtendOptions<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
> extends EndpointOptions<F, S, M> {
  fetch?: FetchFunction;
}

type KeyofEndpointInstance = keyof EndpointInstance<FetchFunction>;

type ExtendedEndpoint<
  O extends EndpointExtendOptions<F>,
  E extends EndpointInstance<
    FetchFunction,
    Schema | undefined,
    true | undefined
  >,
  F extends FetchFunction,
> = EndpointInstance<
  'fetch' extends keyof O ? Exclude<O['fetch'], undefined> : E['fetch'],
  'schema' extends keyof O ? O['schema'] : E['schema'],
  'sideEffect' extends keyof O ? O['sideEffect'] : E['sideEffect']
> &
  Omit<O, KeyofEndpointInstance> &
  Omit<E, KeyofEndpointInstance>;

/**
 * Defines an async data source.
 * @see https://resthooks.io/docs/api/Endpoint
 */
interface EndpointInstance<
  F extends (...args: any) => Promise<any> = FetchFunction,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
> extends EndpointInstanceInterface<F, S, M> {
  extend<
    E extends EndpointInstance<
      (...args: any) => Promise<any>,
      Schema | undefined,
      true | undefined
    >,
    O extends EndpointExtendOptions<F> &
      Partial<Omit<E, keyof EndpointInstance<FetchFunction>>> &
      Record<string, unknown>,
  >(
    this: E,
    options: Readonly<O>,
  ): ExtendedEndpoint<typeof options, E, F>;
}

/**
 * Defines an async data source.
 * @see https://resthooks.io/docs/api/Endpoint
 */
interface EndpointInstanceInterface<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
> extends EndpointInterface<F, S, M> {
  constructor: EndpointConstructor;

  /**
   * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
   * @param thisArg The object to be used as the this object.
   * @param argArray A set of arguments to be passed to the function.
   */
  apply<E extends FetchFunction>(
    this: E,
    thisArg: ThisParameterType<E>,
    argArray?: Parameters<E>,
  ): ReturnType<E>;

  /**
   * Calls a method of an object, substituting another object for the current object.
   * @param thisArg The object to be used as the current object.
   * @param argArray A list of arguments to be passed to the method.
   */
  call<E extends FetchFunction>(
    this: E,
    thisArg: ThisParameterType<E>,
    ...argArray: Parameters<E>
  ): ReturnType<E>;

  /**
   * For a given function, creates a bound function that has the same body as the original function.
   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg An object to which the this keyword can refer inside the new function.
   * @param argArray A list of arguments to be passed to the new function.
   */
  bind<E extends FetchFunction, P extends PartialParameters<E>>(
    this: E,
    thisArg: ThisParameterType<E>,
    ...args: readonly [...P]
  ): EndpointInstance<
    (...args: readonly [...RemoveArray<Parameters<E>, P>]) => ReturnType<E>,
    S,
    M
  > &
    Omit<E, keyof EndpointInstance<FetchFunction>>;

  /** Returns a string representation of a function. */
  toString(): string;

  prototype: any;
  readonly length: number;

  // Non-standard extensions
  arguments: any;
  caller: F;

  key(...args: Parameters<F>): string;

  readonly sideEffect: M;

  readonly schema: S;

  fetch: F;

  /* utilities */
  /** @see https://resthooks.io/rest/api/Endpoint#testKey */
  testKey(key: string): boolean;

  /** The following is for compatibility with FetchShape */
  /** @deprecated */
  readonly type: M extends undefined
    ? 'read'
    : IfAny<M, any, IfTypeScriptLooseNull$1<'read', 'mutate'>>;

  /** @deprecated */
  getFetchKey(...args: OnlyFirst<Parameters<F>>): string;
  /** @deprecated */
  options?: EndpointExtraOptions<F>;
}

interface EndpointConstructor {
  new <
    F extends (
      this: EndpointInstance<FetchFunction> & E,
      params?: any,
      body?: any,
    ) => Promise<any>,
    S extends Schema | undefined = undefined,
    M extends true | undefined = undefined,
    E extends Record<string, any> = {},
  >(
    fetchFunction: F,
    options?: EndpointOptions<F, S, M> & E,
  ): EndpointInstance<F, S, M> & E;
  readonly prototype: Function;
}

type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;
type IfTypeScriptLooseNull$1<Y, N> = 1 | undefined extends 1 ? Y : N;

type OnlyFirst<A extends unknown[]> = A extends [] ? [] : [A[0]];

type RemoveArray<Orig extends any[], Rem extends any[]> = Rem extends [
  any,
  ...infer RestRem,
]
  ? Orig extends [any, ...infer RestOrig]
    ? RemoveArray<RestOrig, RestRem>
    : never
  : Orig;

type OnlyOptional<S extends string> = S extends `${infer K}?` ? K : never;
type OnlyRequired$1<S extends string> = S extends `${string}?` ? never : S;
/** Computes the union of keys for a path string */
type PathKeys<S extends string> = string extends S ? string : S extends `${infer A}\\:${infer B}` ? PathKeys<A> | PathKeys<B> : S extends `${infer A}\\?${infer B}` ? PathKeys<A> | PathKeys<B> : PathSplits<S>;
type PathSplits<S extends string> = S extends `${string}:${infer K}/${infer R}` ? PathSplits<`:${K}`> | PathSplits<R> : S extends `${string}:${infer K}:${infer R}` ? PathSplits<`:${K}`> | PathSplits<`:${R}`> : S extends `${string}:${infer K}` ? K : never;
/** Parameters for a given path */
type PathArgs<S extends string> = PathKeys<S> extends never ? unknown : KeysToArgs<PathKeys<S>>;
type KeysToArgs<Key extends string> = {
    [K in Key as OnlyOptional<K>]?: string | number;
} & {
    [K in Key as OnlyRequired$1<K>]: string | number;
};

type OptionsToFunction<O extends PartialRestGenerics, E extends RestInstance & {
    body?: any;
}, F extends FetchFunction> = 'path' extends keyof O ? RestFetch<'searchParams' extends keyof O ? O['searchParams'] & PathArgs<Exclude<O['path'], undefined>> : PathArgs<Exclude<O['path'], undefined>>, 'body' extends keyof O ? O['body'] : E['body'], O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>> : 'body' extends keyof O ? RestFetch<'searchParams' extends keyof O ? O['searchParams'] & PathArgs<Exclude<E['path'], undefined>> : PathArgs<Exclude<E['path'], undefined>>, O['body'], O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>> : 'searchParams' extends keyof O ? RestFetch<O['searchParams'] & PathArgs<Exclude<E['path'], undefined>>, E['body'], O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>> : (this: ThisParameterType<F>, ...args: Parameters<F>) => Promise<O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>>;

type EndpointUpdateFunction<Source extends FetchFunction, Schema, Updaters extends Record<string, any> = Record<string, any>> = (source: ResultEntry<Source & {
    schema: Schema;
}>, ...args: Parameters<Source>) => {
    [K in keyof Updaters]: (result: Updaters[K]) => Updaters[K];
};
type ResultEntry<E extends FetchFunction & {
    schema: any;
}> = E['schema'] extends undefined | null ? ResolveType<E> : Normalize<E['schema']>;

/** Extracts only the keys that will be required
 *
 * Removes optional, as well as unbounded (aka 'string')
 *
 * @example
 ```
RequiredKeys<{
  opt?: string;
  bob: string;
  alice: number;
  [k: string]: string | number | undefined;
}> // = 'bob' | 'alice'
 ```
 */
type RequiredKeys<T> = Values<OnlyRequired<T>>;
type OnlyRequired<T> = {
    [K in keyof T as string extends K ? never : K]-?: {} extends Pick<T, K> ? never : K;
};
type Values<T> = T[keyof T];

/* eslint-disable @typescript-eslint/ban-types */


interface RestInstance<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = any,
  M extends true | undefined = true | undefined,
  O extends {
    path: string;
    body?: any;
    searchParams?: any;
  } = { path: string },
> extends EndpointInstanceInterface<F, S, M> {
  readonly body?: 'body' extends keyof O ? O['body'] : any;
  readonly searchParams?: 'searchParams' extends keyof O
    ? O['searchParams']
    : // unknown is identity with '&' type operator
      unknown;

  /** Pattern to construct url based on Url Parameters
   * @see https://resthooks.io/rest/api/RestEndpoint#path
   */
  readonly path: O['path'];
  /** Prepended to all urls
   * @see https://resthooks.io/rest/api/RestEndpoint#urlPrefix
   */
  readonly urlPrefix: string;
  readonly requestInit: RequestInit;
  readonly method: string;
  readonly signal: AbortSignal | undefined;

  /* fetch lifecycles */
  /* before-fetch */
  url(...args: Parameters<F>): string;
  /** @see https://resthooks.io/rest/api/RestEndpoint#getRequestInit */
  getRequestInit(
    this: any,
    body?: RequestInit['body'] | Record<string, unknown>,
  ): Promise<RequestInit> | RequestInit;
  /** @see https://resthooks.io/rest/api/RestEndpoint#getHeaders */
  getHeaders(headers: HeadersInit): Promise<HeadersInit> | HeadersInit;
  /* after-fetch */
  /** @see https://resthooks.io/rest/api/RestEndpoint#fetchResponse */
  fetchResponse(input: RequestInfo, init: RequestInit): Promise<Response>;
  /** @see https://resthooks.io/rest/api/RestEndpoint#parseResponse */
  parseResponse(response: Response): Promise<any>;
  /** @see https://resthooks.io/rest/api/RestEndpoint#process */
  process(value: any, ...args: Parameters<F>): ResolveType<F>;

  /* utilities */
  /** @see https://resthooks.io/rest/api/RestEndpoint#testKey */
  testKey(key: string): boolean;

  /* extenders */
  paginated<
    E extends RestInstance<FetchFunction, Schema | undefined, undefined>,
    A extends any[],
  >(
    this: E,
    removeCursor: (...args: A) => readonly [...Parameters<E>],
  ): PaginationEndpoint<E, A>;
  extend<E extends RestInstance, O extends PartialRestGenerics | {}>(
    this: E,
    options: Readonly<RestEndpointExtendOptions<O, E, F> & O>,
  ): RestExtendedEndpoint<O, E>;
}

type RestEndpointExtendOptions<
  O extends PartialRestGenerics | {},
  E extends RestInstance,
  F extends FetchFunction,
> = RestEndpointOptions<
  OptionsToFunction<O, E, F>,
  'schema' extends keyof O
    ? Extract<O['schema'], Schema | undefined>
    : E['schema']
> &
  Partial<Omit<E, KeyofRestEndpoint | 'body' | 'searchParams'>>;

type OptionsToRestEndpoint<
  O extends PartialRestGenerics,
  E extends RestInstance & { body?: any },
  F extends FetchFunction,
> = 'path' extends keyof O
  ? RestType<
      'searchParams' extends keyof O
        ? O['searchParams'] & PathArgs<Exclude<O['path'], undefined>>
        : PathArgs<Exclude<O['path'], undefined>>,
      'body' extends keyof O ? O['body'] : E['body'],
      'schema' extends keyof O ? O['schema'] : E['schema'],
      'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'],
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>,
      {
        path: Exclude<O['path'], undefined>;
        body: 'body' extends keyof O ? O['body'] : E['body'];
        searchParams: 'searchParams' extends keyof O
          ? O['searchParams']
          : E['searchParams'];
      }
    >
  : 'body' extends keyof O
  ? RestType<
      'searchParams' extends keyof O
        ? O['searchParams'] & PathArgs<Exclude<E['path'], undefined>>
        : PathArgs<Exclude<E['path'], undefined>>,
      O['body'],
      'schema' extends keyof O ? O['schema'] : E['schema'],
      'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'],
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>,
      {
        path: E['path'];
        body: O['body'];
        searchParams: 'searchParams' extends keyof O
          ? O['searchParams']
          : E['searchParams'];
      }
    >
  : 'searchParams' extends keyof O
  ? RestType<
      O['searchParams'] & PathArgs<Exclude<E['path'], undefined>>,
      E['body'],
      'schema' extends keyof O ? O['schema'] : E['schema'],
      'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'],
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>,
      {
        path: E['path'];
        body: E['body'];
        searchParams: O['searchParams'];
      }
    >
  : RestInstance<
      F,
      'schema' extends keyof O ? O['schema'] : E['schema'],
      'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'],
      {
        path: 'path' extends keyof O
          ? Exclude<O['path'], undefined>
          : E['path'];
        body: 'body' extends keyof O ? O['body'] : E['body'];
        searchParams: 'searchParams' extends keyof O
          ? O['searchParams']
          : E['searchParams'];
      }
    >;

type RestExtendedEndpoint<
  O extends PartialRestGenerics,
  E extends RestInstance,
> = OptionsToRestEndpoint<
  O,
  E,
  RestInstance<
    (
      ...args: Parameters<E>
    ) => O['process'] extends {}
      ? Promise<ReturnType<O['process']>>
      : ReturnType<E>,
    'schema' extends keyof O ? O['schema'] : E['schema'],
    'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect']
  >
> &
  Omit<O, KeyofRestEndpoint> &
  Omit<E, KeyofRestEndpoint | keyof O>;

interface PartialRestGenerics {
  readonly path?: string;
  readonly schema?: Schema | undefined;
  readonly method?: string;
  /** Only used for types */
  readonly body?: any;
  /** Only used for types */
  readonly searchParams?: any;
  /** @see https://resthooks.io/rest/api/RestEndpoint#process */
  process?(value: any, ...args: any): any;
}
interface RestGenerics extends PartialRestGenerics {
  readonly path: string;
}

type PaginationEndpoint<
  E extends RestInstance,
  A extends any[],
> = RestInstance<
  ParamFetchNoBody<A[0], ResolveType<E>>,
  E['schema'],
  E['sideEffect'],
  Pick<E, 'path' | 'searchParams' | 'body'> & {
    searchParams: Omit<A[0], keyof PathArgs<E['path']>>;
  }
>;

type BodyDefault<O extends RestGenerics> = 'body' extends keyof O
  ? O['body']
  : O['method'] extends 'POST' | 'PUT' | 'PATCH'
  ? Record<string, unknown> | FormData
  : undefined;

type OptionsBodyDefault<O extends RestGenerics> = 'body' extends keyof O
  ? O
  : O['method'] extends 'POST' | 'PUT' | 'PATCH'
  ? O & { body: any }
  : O & { body: undefined };

interface RestEndpointOptions<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = undefined,
> extends EndpointExtraOptions<F> {
  fetch?: F;
  urlPrefix?: string;
  requestInit?: RequestInit;
  key?(...args: Parameters<F>): string;
  sideEffect?: true | undefined;
  name?: string;
  signal?: AbortSignal;
  url?(...args: Parameters<F>): string;
  getHeaders?(headers: HeadersInit): Promise<HeadersInit> | HeadersInit;
  getRequestInit?(body: any): Promise<RequestInit> | RequestInit;
  fetchResponse?(input: RequestInfo, init: RequestInit): Promise<any>;
  parseResponse?(response: Response): Promise<any>;
  update?: EndpointUpdateFunction<F, S>;
}

type RestEndpointConstructorOptions<O extends RestGenerics = any> =
  RestEndpointOptions<
    RestFetch<
      'searchParams' extends keyof O
        ? O['searchParams'] & PathArgs<O['path']>
        : PathArgs<O['path']>,
      BodyDefault<O>,
      O['process'] extends {}
        ? ReturnType<O['process']>
        : any /*Denormalize<O['schema']>*/
    >,
    O['schema']
  >;

interface RestEndpointConstructor {
  new <O extends RestGenerics = any>({
    method,
    sideEffect,
    name,
    ...options
  }: Readonly<RestEndpointConstructorOptions<O> & O>): RestInstance<
    RestFetch<
      'searchParams' extends keyof O
        ? O['searchParams'] & PathArgs<O['path']>
        : PathArgs<O['path']>,
      BodyDefault<O>,
      O['process'] extends {}
        ? ReturnType<O['process']>
        : any /*Denormalize<O['schema']>*/
    >,
    'schema' extends keyof O ? O['schema'] : undefined,
    MethodToSide<O['method']>,
    OptionsBodyDefault<O>
  >;
  readonly prototype: RestInstance;
}

/** Simplifies endpoint definitions that follow REST patterns
 *
 * @see https://resthooks.io/rest/api/RestEndpoint
 */
declare let RestEndpoint: RestEndpointConstructor;


type MethodToSide<M> = M extends string
  ? M extends 'GET'
    ? undefined
    : true
  : undefined;

/** RestEndpoint types simplified */
type RestType<
  UrlParams = any,
  Body = any,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
  R = any,
  O extends {
    path: string;
    body?: any;
    searchParams?: any;
  } = { path: string },
  // eslint-disable-next-line @typescript-eslint/ban-types
> = IfTypeScriptLooseNull<
  RestInstance<
    keyof UrlParams extends never
      ? (this: EndpointInstanceInterface, body?: Body) => Promise<R>
      : string extends keyof UrlParams
      ?
          | ((this: EndpointInstanceInterface, body?: Body) => Promise<R>)
          | ((
              this: EndpointInstanceInterface,
              params: UrlParams,
              body?: Body,
            ) => Promise<R>)
      : (
          this: EndpointInstanceInterface,
          params: UrlParams,
          body?: Body,
        ) => Promise<R>,
    S,
    M,
    O
  >,
  Body extends {}
    ? RestTypeWithBody<UrlParams, S, M, Body, R, O>
    : RestTypeNoBody<UrlParams, S, M, R, O>
>;

type RestTypeWithBody<
  UrlParams = any,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
  Body = any,
  R = any /*Denormalize<S>*/,
  O extends {
    path: string;
    body?: any;
    searchParams?: any;
  } = { path: string; body: any },
> = RestInstance<ParamFetchWithBody<UrlParams, Body, R>, S, M, O>;

type RestTypeNoBody<
  UrlParams = any,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
  R = any /*Denormalize<S>*/,
  O extends {
    path: string;
    body?: undefined;
    searchParams?: any;
  } = { path: string; body: undefined },
> = RestInstance<ParamFetchNoBody<UrlParams, R>, S, M, O>;

/** Simple parameters, and body fetch functions */
type RestFetch<
  UrlParams,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Body = {},
  Resolve = any,
> = IfTypeScriptLooseNull<
  | ParamFetchNoBody<UrlParams, Resolve>
  | ParamFetchWithBody<UrlParams, Body, Resolve>,
  Body extends {}
    ? ParamFetchWithBody<UrlParams, Body, Resolve>
    : ParamFetchNoBody<UrlParams, Resolve>
>;

type ParamFetchWithBody<P, B = {}, R = any> = IfTypeScriptLooseNull<
  keyof P extends never
    ? (this: EndpointInstanceInterface, body: B) => Promise<R>
    : string extends keyof P
    ?
        | ((this: EndpointInstanceInterface, body: B) => Promise<R>)
        | ((this: EndpointInstanceInterface, params: P, body: B) => Promise<R>)
    : (this: EndpointInstanceInterface, params: P, body: B) => Promise<R>,
  P extends undefined
    ? (this: EndpointInstanceInterface, body: B) => Promise<R>
    : undefined extends P
    ? (this: EndpointInstanceInterface, body: B) => Promise<R>
    : RequiredKeys<P> extends never
    ?
        | ((this: EndpointInstanceInterface, body: B) => Promise<R>)
        | ((this: EndpointInstanceInterface, params: P, body: B) => Promise<R>)
    : (this: EndpointInstanceInterface, params: P, body: B) => Promise<R>
>;

type ParamFetchNoBody<P, R = any> = IfTypeScriptLooseNull<
  keyof P extends never
    ? (this: EndpointInstanceInterface) => Promise<R>
    : string extends keyof P
    ? (this: EndpointInstanceInterface, params?: P) => Promise<R>
    : (this: EndpointInstanceInterface, params: P) => Promise<R>,
  P extends undefined
    ? (this: EndpointInstanceInterface) => Promise<R>
    : undefined extends P
    ? (this: EndpointInstanceInterface) => Promise<R>
    : RequiredKeys<P> extends never
    ? (this: EndpointInstanceInterface, params?: P) => Promise<R>
    : (this: EndpointInstanceInterface, params: P) => Promise<R>
>;

type IfTypeScriptLooseNull<Y, N> = 1 | undefined extends 1 ? Y : N;

type KeyofRestEndpoint = keyof RestInstance;

type FetchMutate<
  A extends readonly any[] =  // eslint-disable-next-line @typescript-eslint/ban-types
    | [any, {}]
    // eslint-disable-next-line @typescript-eslint/ban-types
    | [{}],
  R = any,
> = (this: RestInstance, ...args: A) => Promise<R>;

type FetchGet<A extends readonly any[] = [any], R = any> = (
  this: RestInstance,
  ...args: A
) => Promise<R>;

type GetEndpoint<
  UrlParams = any,
  S extends Schema | undefined = Schema | undefined,
> = RestTypeNoBody<UrlParams, S, undefined>;

type MutateEndpoint<
  UrlParams = any,
  Body extends BodyInit | Record<string, any> = any,
  S extends Schema | undefined = Schema | undefined,
> = RestTypeWithBody<UrlParams, S, true, Body>;

type Defaults<O, D> = {
  [K in keyof O | keyof D]: K extends keyof O
    ? Exclude<O[K], undefined>
    : D[Extract<K, keyof D>];
};

type NewGetEndpoint<
  O extends {
    path: string;
    searchParams?: any;
  } = { path: string },
  S extends Schema | undefined = Schema | undefined,
> = RestTypeNoBody<
  'searchParams' extends keyof O
    ? O['searchParams'] & PathArgs<O['path']>
    : PathArgs<O['path']>,
  S,
  undefined,
  any,
  O & { body: undefined }
>;

type NewMutateEndpoint<
  O extends {
    path: string;
    body?: any;
    searchParams?: any;
  } = { path: string; body: any },
  S extends Schema | undefined = Schema | undefined,
> = RestTypeWithBody<
  'searchParams' extends keyof O
    ? O['searchParams'] & PathArgs<O['path']>
    : PathArgs<O['path']>,
  S,
  true,
  O['body'],
  any,
  O
>;

export { Defaults, FetchGet, FetchMutate, GetEndpoint, KeyofRestEndpoint, MutateEndpoint, NewGetEndpoint, NewMutateEndpoint, RestEndpoint, RestEndpointConstructorOptions, RestFetch, RestGenerics, RestType };