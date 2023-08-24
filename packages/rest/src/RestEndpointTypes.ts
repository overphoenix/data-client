/* eslint-disable @typescript-eslint/ban-types */
import type {
  EndpointExtraOptions,
  EndpointInstanceInterface,
  Schema,
  FetchFunction,
  ResolveType,
} from '@data-client/endpoint';

import type { ExtractCollection } from './extractCollection.js';
import {
  OptionsToBodyArgument,
  OptionsToFunction,
} from './OptionsToFunction.js';
import { PathArgs } from './pathTypes.js';
import { EndpointUpdateFunction } from './RestEndpointTypeHelp.js';

export interface RestInstanceBase<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = any,
  M extends true | undefined = true | undefined,
  O extends {
    path: string;
    body?: any;
    searchParams?: any;
    method?: string;
  } = { path: string },
> extends EndpointInstanceInterface<F, S, M> {
  /** @see https://resthooks.io/rest/api/RestEndpoint#body */
  readonly body?: 'body' extends keyof O ? O['body'] : any;
  /** @see https://resthooks.io/rest/api/RestEndpoint#searchParams */
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
  /** @see https://resthooks.io/rest/api/RestEndpoint#method */
  readonly method: (O & { method: string })['method'];
  readonly signal: AbortSignal | undefined;
  readonly paginationField?: string;

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
  // TODO: figure out better way than wrapping whole options in Readonly<> + making O extend from {}
  //       this is just a hack to handle when no members of PartialRestGenerics are present
  //       Note: Using overloading (like paginated did) struggles because typescript does not have a clear way of distinguishing one
  //       should be used from the other (due to same problem with every member being partial)
  /** Creates a child endpoint that inherits from this while overriding provided `options`.
   * @see https://dataclient.io/rest/api/RestEndpoint#extend
   */
  extend<
    E extends RestInstanceBase,
    ExtendOptions extends PartialRestGenerics | {},
  >(
    this: E,
    options: Readonly<
      RestEndpointExtendOptions<ExtendOptions, E, F> & ExtendOptions
    >,
  ): RestExtendedEndpoint<ExtendOptions, E>;
}

export interface RestInstance<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = any,
  M extends true | undefined = true | undefined,
  O extends {
    path: string;
    body?: any;
    searchParams?: any;
    method?: string;
    paginationField?: string;
  } = { path: string },
> extends RestInstanceBase<F, S, M, O> {
  /** Creates an Endpoint to append the next page extending a list for pagination
   * @see https://dataclient.io/rest/api/RestEndpoint#paginated
   */
  paginated<
    E extends RestInstanceBase<FetchFunction, any, undefined>,
    A extends any[],
  >(
    this: E,
    removeCursor: (...args: A) => readonly [...Parameters<E>],
  ): PaginationEndpoint<E, A>;
  paginated<
    E extends RestInstanceBase<FetchFunction, any, undefined>,
    C extends string,
  >(
    this: E,
    cursorField: C,
  ): PaginationFieldEndpoint<E, C>;
  /** Endpoint to append the next page extending a list for pagination
   * @see https://dataclient.io/rest/api/RestEndpoint#getPage
   */
  getPage: 'paginationField' extends keyof O
    ? O['paginationField'] extends string
      ? PaginationFieldEndpoint<
          F & { schema: S; sideEffect: M } & O,
          O['paginationField']
        >
      : undefined
    : undefined;
  /** Endpoint that pushes (place at end) a newly created entity to this Collection
   * @see https://dataclient.io/rest/api/RestEndpoint#push
   */
  push: AddEndpoint<
    F,
    ExtractCollection<S>['push'],
    Exclude<O, 'body' | 'method'> & {
      body:
        | OptionsToAdderBodyArgument<O>
        | OptionsToAdderBodyArgument<O>[]
        | FormData;
    }
  >;
  /** Endpoint that unshifts (place at start) a newly created entity to this Collection
   * @see https://dataclient.io/rest/api/RestEndpoint#unshift
   */
  unshift: AddEndpoint<
    F,
    ExtractCollection<S>['unshift'],
    Exclude<O, 'body' | 'method'> & {
      body:
        | OptionsToAdderBodyArgument<O>
        | OptionsToAdderBodyArgument<O>[]
        | FormData;
    }
  >;
  /** Endpoint that assigns newly created entities to their respective keys in this Collection
   * @see https://dataclient.io/rest/api/RestEndpoint#assign
   */
  assign: AddEndpoint<
    F,
    ExtractCollection<S>,
    Exclude<O, 'body' | 'method'> & {
      body: Record<string, OptionsToAdderBodyArgument<O>> | FormData;
    }
  >;
}

export type RestEndpointExtendOptions<
  O extends PartialRestGenerics,
  E extends { body?: any; path?: string; schema?: Schema; method?: string },
  F extends FetchFunction,
> = RestEndpointOptions<
  OptionsToFunction<O, E, F>,
  'schema' extends keyof O
    ? Extract<O['schema'], Schema | undefined>
    : E['schema']
> &
  Partial<
    Omit<
      E,
      KeyofRestEndpoint | keyof PartialRestGenerics | keyof RestEndpointOptions
    >
  >;

type OptionsToRestEndpoint<
  O extends PartialRestGenerics,
  E extends RestInstanceBase & { body?: any; paginationField?: string },
  F extends FetchFunction,
> = 'path' extends keyof O
  ? RestType<
      'searchParams' extends keyof O
        ? O['searchParams'] extends undefined
          ? PathArgs<Exclude<O['path'], undefined>>
          : O['searchParams'] & PathArgs<Exclude<O['path'], undefined>>
        : PathArgs<Exclude<O['path'], undefined>>,
      OptionsToBodyArgument<
        'body' extends keyof O ? O : E,
        'method' extends keyof O ? O['method'] : E['method']
      >,
      'schema' extends keyof O ? O['schema'] : E['schema'],
      'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'],
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>,
      {
        path: Exclude<O['path'], undefined>;
        body: 'body' extends keyof O ? O['body'] : E['body'];
        searchParams: 'searchParams' extends keyof O
          ? O['searchParams']
          : E['searchParams'];
        method: 'method' extends keyof O ? O['method'] : E['method'];
        paginationField: 'paginationField' extends keyof O
          ? O['paginationField']
          : E['paginationField'];
      }
    >
  : 'body' extends keyof O
  ? RestType<
      'searchParams' extends keyof O
        ? O['searchParams'] extends undefined
          ? PathArgs<Exclude<O['path'], undefined>>
          : O['searchParams'] & PathArgs<Exclude<E['path'], undefined>>
        : PathArgs<Exclude<E['path'], undefined>>,
      OptionsToBodyArgument<
        O,
        'method' extends keyof O ? O['method'] : E['method']
      >,
      'schema' extends keyof O ? O['schema'] : E['schema'],
      'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'],
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>,
      {
        path: E['path'];
        body: O['body'];
        searchParams: 'searchParams' extends keyof O
          ? O['searchParams']
          : E['searchParams'];
        method: 'method' extends keyof O ? O['method'] : E['method'];
        paginationField: 'paginationField' extends keyof O
          ? O['paginationField']
          : Extract<E['paginationField'], string>;
      }
    >
  : 'searchParams' extends keyof O
  ? RestType<
      O['searchParams'] extends undefined
        ? PathArgs<Exclude<O['path'], undefined>>
        : O['searchParams'] & PathArgs<Exclude<E['path'], undefined>>,
      OptionsToBodyArgument<
        E,
        'method' extends keyof O ? O['method'] : E['method']
      >,
      'schema' extends keyof O ? O['schema'] : E['schema'],
      'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'],
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>,
      {
        path: E['path'];
        body: E['body'];
        searchParams: O['searchParams'];
        method: 'method' extends keyof O ? O['method'] : E['method'];
        paginationField: 'paginationField' extends keyof O
          ? O['paginationField']
          : Extract<E['paginationField'], string>;
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
        method: 'method' extends keyof O ? O['method'] : E['method'];
        paginationField: 'paginationField' extends keyof O
          ? O['paginationField']
          : E['paginationField'];
      }
    >;

export type RestExtendedEndpoint<
  O extends PartialRestGenerics,
  E extends RestInstanceBase & { getPage?: unknown },
> = OptionsToRestEndpoint<
  O,
  E &
    (E extends { getPage: { paginationField: string } }
      ? { paginationField: E['getPage']['paginationField'] }
      : unknown),
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

export interface PartialRestGenerics {
  /** @see https://resthooks.io/rest/api/RestEndpoint#path */
  readonly path?: string;
  /** @see https://resthooks.io/rest/api/RestEndpoint#schema */
  readonly schema?: Schema | undefined;
  /** @see https://resthooks.io/rest/api/RestEndpoint#method */
  readonly method?: string;
  /** Only used for types */
  /** @see https://dataclient.io/rest/api/RestEndpoint#body */
  body?: any;
  /** Only used for types */
  /** @see https://dataclient.io/rest/api/RestEndpoint#searchParams */
  searchParams?: any;
  /** @see https://dataclient.io/rest/api/RestEndpoint#paginationfield */
  readonly paginationField?: string;
  /** @see https://resthooks.io/rest/api/RestEndpoint#process */
  process?(value: any, ...args: any): any;
}
export interface RestGenerics extends PartialRestGenerics {
  readonly path: string;
}

export type PaginationEndpoint<
  E extends FetchFunction & RestGenerics & { sideEffect?: true | undefined },
  A extends any[],
> = RestInstanceBase<
  ParamFetchNoBody<A[0], ResolveType<E>>,
  E['schema'],
  E['sideEffect'],
  Pick<E, 'path' | 'searchParams' | 'body'> & {
    searchParams: Omit<A[0], keyof PathArgs<E['path']>>;
  }
>;
export type PaginationFieldEndpoint<
  E extends FetchFunction & RestGenerics & { sideEffect?: true | undefined },
  C extends string,
> = RestInstanceBase<
  ParamFetchNoBody<
    { [K in C]: string | number | boolean } & E['searchParams'] &
      PathArgs<Exclude<E['path'], undefined>>,
    ResolveType<E>
  >,
  E['schema'],
  E['sideEffect'],
  Pick<E, 'path' | 'searchParams' | 'body'> & {
    searchParams: { [K in C]: string | number | boolean } & E['searchParams'];
  }
> & { paginationField: C };
export type AddEndpoint<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = any,
  O extends {
    path: string;
    body: any;
    searchParams?: any;
  } = { path: string; body: any },
> = RestInstanceBase<
  RestFetch<
    'searchParams' extends keyof O
      ? O['searchParams'] extends undefined
        ? PathArgs<Exclude<O['path'], undefined>>
        : O['searchParams'] & PathArgs<Exclude<O['path'], undefined>>
      : PathArgs<Exclude<O['path'], undefined>>,
    O['body'],
    ResolveType<F>
  >,
  S,
  true,
  Omit<O, 'method'> & { method: 'POST' }
>;

type OptionsBodyDefault<O extends RestGenerics> = 'body' extends keyof O
  ? O
  : O['method'] extends 'POST' | 'PUT' | 'PATCH'
  ? O & { body: any }
  : O & { body: undefined };

type OptionsToAdderBodyArgument<O extends { body?: any }> =
  'body' extends keyof O ? O['body'] : any;

export interface RestEndpointOptions<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = undefined,
> extends EndpointExtraOptions<F> {
  urlPrefix?: string;
  requestInit?: RequestInit;
  getHeaders?(headers: HeadersInit): Promise<HeadersInit> | HeadersInit;
  getRequestInit?(body: any): Promise<RequestInit> | RequestInit;
  fetchResponse?(input: RequestInfo, init: RequestInit): Promise<any>;
  parseResponse?(response: Response): Promise<any>;

  sideEffect?: true | undefined;
  name?: string;
  signal?: AbortSignal;
  fetch?: F;
  key?(...args: Parameters<F>): string;
  url?(...args: Parameters<F>): string;
  update?: EndpointUpdateFunction<F, S>;
}

export type RestEndpointConstructorOptions<O extends RestGenerics = any> =
  RestEndpointOptions<
    RestFetch<
      'searchParams' extends keyof O
        ? O['searchParams'] extends undefined
          ? PathArgs<O['path']>
          : O['searchParams'] & PathArgs<O['path']>
        : PathArgs<O['path']>,
      OptionsToBodyArgument<
        O,
        'method' extends keyof O
          ? O['method']
          : O extends { sideEffect: true }
          ? 'POST'
          : 'GET'
      >,
      O['process'] extends {}
        ? ReturnType<O['process']>
        : any /*Denormalize<O['schema']>*/
    >,
    O['schema']
  >;

export interface RestEndpointConstructor {
  new <O extends RestGenerics = any>({
    method,
    sideEffect,
    name,
    ...options
  }: RestEndpointConstructorOptions<O> & Readonly<O>): RestInstance<
    RestFetch<
      'searchParams' extends keyof O
        ? O['searchParams'] extends undefined
          ? PathArgs<O['path']>
          : O['searchParams'] & PathArgs<O['path']>
        : PathArgs<O['path']>,
      OptionsToBodyArgument<
        O,
        'method' extends keyof O
          ? O['method']
          : O extends { sideEffect: true }
          ? 'POST'
          : 'GET'
      >,
      O['process'] extends {}
        ? ReturnType<O['process']>
        : any /*Denormalize<O['schema']>*/
    >,
    'schema' extends keyof O ? O['schema'] : undefined,
    'sideEffect' extends keyof O
      ? Extract<O['sideEffect'], undefined | true>
      : MethodToSide<O['method']>,
    'method' extends keyof O
      ? O
      : O & {
          method: O extends { sideEffect: true } ? 'POST' : 'GET';
        }
  >;
  readonly prototype: RestInstanceBase;
}

export type MethodToSide<M> = M extends string
  ? M extends 'GET'
    ? undefined
    : true
  : undefined;

/** RestEndpoint types simplified */
export type RestType<
  UrlParams = any,
  Body = any,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
  R = any,
  O extends {
    path: string;
    body?: any;
    searchParams?: any;
    paginationField?: string;
  } = { path: string; paginationField: string },
  // eslint-disable-next-line @typescript-eslint/ban-types
> = IfTypeScriptLooseNull<
  RestInstance<
    keyof UrlParams extends never
      ? (this: EndpointInstanceInterface, body?: Body) => Promise<R>
      : // even with loose null, this will only be true when all members are optional
      {} extends UrlParams
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

export type RestTypeWithBody<
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

export type RestTypeNoBody<
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
export type RestFetch<
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

export type ParamFetchWithBody<P, B = {}, R = any> =
  // we must always allow undefined in a union and give it a type without params
  P extends undefined
    ? (this: EndpointInstanceInterface, body: B) => Promise<R>
    : // even with loose null, this will only be true when all members are optional
    {} extends P
    ? // this safely handles PathArgs with no members that results in a simple `unknown` type
      keyof P extends never
      ? (this: EndpointInstanceInterface, body: B) => Promise<R>
      :
          | ((
              this: EndpointInstanceInterface,
              params: P,
              body: B,
            ) => Promise<R>)
          | ((this: EndpointInstanceInterface, body: B) => Promise<R>)
    : (this: EndpointInstanceInterface, params: P, body: B) => Promise<R>;

export type ParamFetchNoBody<P, R = any> =
  // we must always allow undefined in a union and give it a type without params
  P extends undefined
    ? (this: EndpointInstanceInterface) => Promise<R>
    : // even with loose null, this will only be true when all members are optional
    {} extends P
    ? // this safely handles PathArgs with no members that results in a simple `unknown` type
      keyof P extends never
      ? (this: EndpointInstanceInterface) => Promise<R>
      :
          | ((this: EndpointInstanceInterface, params: P) => Promise<R>)
          | ((this: EndpointInstanceInterface) => Promise<R>)
    : (this: EndpointInstanceInterface, params: P) => Promise<R>;

type IfTypeScriptLooseNull<Y, N> = 1 | undefined extends 1 ? Y : N;

export type KeyofRestEndpoint = keyof RestInstance;

export type FromFallBack<K extends keyof E, O, E> = K extends keyof O
  ? O[K]
  : E[K];

export type FetchMutate<
  A extends readonly any[] =  // eslint-disable-next-line @typescript-eslint/ban-types
    | [any, {}]
    // eslint-disable-next-line @typescript-eslint/ban-types
    | [{}],
  R = any,
> = (this: RestInstance, ...args: A) => Promise<R>;

export type FetchGet<A extends readonly any[] = [any], R = any> = (
  this: RestInstance,
  ...args: A
) => Promise<R>;

export type Defaults<O, D> = {
  [K in keyof O | keyof D]: K extends keyof O
    ? Exclude<O[K], undefined>
    : D[Extract<K, keyof D>];
};

export type GetEndpoint<
  O extends {
    readonly path: string;
    readonly schema: Schema;
    /** Only used for types */
    readonly searchParams?: any;
    readonly paginationField?: string;
  } = {
    path: string;
    schema: Schema;
  },
> = RestTypeNoBody<
  'searchParams' extends keyof O
    ? O['searchParams'] extends undefined
      ? PathArgs<O['path']>
      : O['searchParams'] & PathArgs<O['path']>
    : PathArgs<O['path']>,
  O['schema'],
  undefined,
  any,
  O & { method: 'GET' }
>;

export type MutateEndpoint<
  O extends {
    readonly path: string;
    readonly schema: Schema;
    /** Only used for types */
    readonly searchParams?: any;
    /** Only used for types */
    readonly body?: any;
  } = {
    path: string;
    body: any;
    schema: Schema;
  },
> = RestTypeWithBody<
  'searchParams' extends keyof O
    ? O['searchParams'] extends undefined
      ? PathArgs<O['path']>
      : O['searchParams'] & PathArgs<O['path']>
    : PathArgs<O['path']>,
  O['schema'],
  true,
  O['body'],
  any,
  O & { body: any; method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' }
>;