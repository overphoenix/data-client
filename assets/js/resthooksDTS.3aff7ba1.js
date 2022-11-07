(self.webpackChunk=self.webpackChunk||[]).push([[78789],{52031:n=>{n.exports="import {\n  NetworkError as NetworkError$1,\n  Dispatch as Dispatch$1,\n  State as State$1,\n  Controller,\n  ActionTypes,\n  CacheProvider as CacheProvider$1,\n  Manager,\n  Middleware as Middleware$1,\n  SubscribeAction,\n  UnsubscribeAction,\n  Schema as Schema$1,\n  __INTERNAL__,\n  initialState,\n  StateContext,\n  DispatchContext,\n  hasUsableData,\n} from '@rest-hooks/core';\nexport {\n  AbstractInstanceType,\n  ActionTypes,\n  DeleteShape,\n  Dispatch,\n  FetchAction,\n  FetchShape,\n  InvalidateAction,\n  Manager,\n  Middleware,\n  MiddlewareAPI,\n  MutateShape,\n  PK,\n  ParamsFromShape,\n  ReadShape,\n  ReceiveAction,\n  ReceiveTypes,\n  ResetAction,\n  SetShapeParams,\n  State,\n  SubscribeAction,\n  UnsubscribeAction,\n  UpdateFunction,\n  useCache,\n  useController,\n  useDLE,\n  useDenormalized,\n  useError,\n  useFetch,\n  useFetcher,\n  useInvalidator,\n  useMeta,\n  usePromisifiedDispatch,\n  useResetter,\n  useResource,\n  useRetrieve,\n  useSubscription,\n  useSuspense,\n} from '@rest-hooks/core';\nimport React from 'react';\n\ndeclare type AbstractInstanceType<T> = T extends {\n  prototype: infer U;\n}\n  ? U\n  : never;\ndeclare type DenormalizeObject<S extends Record<string, any>> = {\n  [K in keyof S]: S[K] extends Schema ? Denormalize<S[K]> : S[K];\n};\ndeclare type DenormalizeNullableObject<S extends Record<string, any>> = {\n  [K in keyof S]: S[K] extends Schema ? DenormalizeNullable<S[K]> : S[K];\n};\ndeclare type NormalizeObject<S extends Record<string, any>> = {\n  [K in keyof S]: S[K] extends Schema ? Normalize<S[K]> : S[K];\n};\ndeclare type NormalizedNullableObject<S extends Record<string, any>> = {\n  [K in keyof S]: S[K] extends Schema ? NormalizeNullable<S[K]> : S[K];\n};\ninterface NestedSchemaClass<T = any> {\n  schema: Record<string, Schema>;\n  prototype: T;\n}\ninterface RecordClass<T = any> extends NestedSchemaClass<T> {\n  fromJS: (...args: any) => AbstractInstanceType<T>;\n}\ndeclare type DenormalizeNullableNestedSchema<S extends NestedSchemaClass> =\n  keyof S['schema'] extends never\n    ? S['prototype']\n    : string extends keyof S['schema']\n    ? S['prototype']\n    : S['prototype'] & {\n        [K in keyof S['schema']]: DenormalizeNullable<S['schema'][K]>;\n      };\ndeclare type DenormalizeReturnType<T> = T extends (\n  input: any,\n  unvisit: any,\n) => [infer R, any, any]\n  ? R\n  : never;\ndeclare type NormalizeReturnType<T> = T extends (...args: any) => infer R\n  ? R\n  : never;\ndeclare type Denormalize<S> = S extends EntityInterface<infer U>\n  ? U\n  : S extends RecordClass\n  ? AbstractInstanceType<S>\n  : S extends SchemaClass\n  ? DenormalizeReturnType<S['denormalize']>\n  : S extends Serializable<infer T>\n  ? T\n  : S extends Array<infer F>\n  ? Denormalize<F>[]\n  : S extends {\n      [K: string]: any;\n    }\n  ? DenormalizeObject<S>\n  : S;\ndeclare type DenormalizeNullable<S> = S extends EntityInterface<any>\n  ? DenormalizeNullableNestedSchema<S> | undefined\n  : S extends RecordClass\n  ? DenormalizeNullableNestedSchema<S>\n  : S extends SchemaClass\n  ? DenormalizeReturnType<S['_denormalizeNullable']>\n  : S extends Serializable<infer T>\n  ? T\n  : S extends Array<infer F>\n  ? Denormalize<F>[] | undefined\n  : S extends {\n      [K: string]: any;\n    }\n  ? DenormalizeNullableObject<S>\n  : S;\ndeclare type Normalize<S> = S extends EntityInterface\n  ? string\n  : S extends RecordClass\n  ? NormalizeObject<S['schema']>\n  : S extends SchemaClass\n  ? NormalizeReturnType<S['normalize']>\n  : S extends Serializable<infer T>\n  ? T\n  : S extends Array<infer F>\n  ? Normalize<F>[]\n  : S extends {\n      [K: string]: any;\n    }\n  ? NormalizeObject<S>\n  : S;\ndeclare type NormalizeNullable<S> = S extends EntityInterface\n  ? string | undefined\n  : S extends RecordClass\n  ? NormalizedNullableObject<S['schema']>\n  : S extends SchemaClass\n  ? NormalizeReturnType<S['_normalizeNullable']>\n  : S extends Serializable<infer T>\n  ? T\n  : S extends Array<infer F>\n  ? Normalize<F>[] | undefined\n  : S extends {\n      [K: string]: any;\n    }\n  ? NormalizedNullableObject<S>\n  : S;\n\n/** Get the Params type for a given Shape */\ndeclare type EndpointParam<E> = E extends (first: infer A, ...rest: any) => any\n  ? A\n  : E extends {\n      key: (first: infer A, ...rest: any) => any;\n    }\n  ? A\n  : never;\n/** What the function's promise resolves to */\ndeclare type ResolveType<E extends (...args: any) => any> =\n  ReturnType<E> extends Promise<infer R> ? R : never;\ndeclare type PartialArray<A> = A extends []\n  ? []\n  : A extends [infer F]\n  ? [F] | []\n  : A extends [infer F, ...infer Rest]\n  ? [F] | [F, ...PartialArray<Rest>]\n  : A extends (infer T)[]\n  ? T[]\n  : never;\n\ninterface NetworkError extends Error {\n  status: number;\n  response?: Response;\n}\ninterface UnknownError extends Error {\n  status?: unknown;\n  response?: unknown;\n}\ndeclare type ErrorTypes = NetworkError | UnknownError;\n\ninterface SnapshotInterface {\n  getResponse: <\n    E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => {\n    data: DenormalizeNullable<E['schema']>;\n    expiryStatus: ExpiryStatusInterface;\n    expiresAt: number;\n  };\n  getError: <\n    E extends Pick<EndpointInterface, 'key'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => ErrorTypes | undefined;\n  readonly fetchedAt: number;\n}\ndeclare type ExpiryStatusInterface = 1 | 2 | 3;\n\ndeclare type FetchFunction<A extends readonly any[] = any, R = any> = (\n  ...args: A\n) => Promise<R>;\ninterface EndpointExtraOptions<F extends FetchFunction = FetchFunction> {\n  /** Default data expiry length, will fall back to NetworkManager default if not defined */\n  readonly dataExpiryLength?: number;\n  /** Default error expiry length, will fall back to NetworkManager default if not defined */\n  readonly errorExpiryLength?: number;\n  /** Poll with at least this frequency in miliseconds */\n  readonly pollFrequency?: number;\n  /** Marks cached resources as invalid if they are stale */\n  readonly invalidIfStale?: boolean;\n  /** Enables optimistic updates for this request - uses return value as assumed network response\n   * @deprecated use https://resthooks.io/docs/api/Endpoint#getoptimisticresponse instead\n   */\n  optimisticUpdate?(...args: Parameters<F>): ResolveType<F>;\n  /** Enables optimistic updates for this request - uses return value as assumed network response */\n  getOptimisticResponse?(\n    snap: SnapshotInterface,\n    ...args: Parameters<F>\n  ): ResolveType<F>;\n  /** Determines whether to throw or fallback to */\n  errorPolicy?(error: any): 'hard' | 'soft' | undefined;\n  /** User-land extra data to send */\n  readonly extra?: any;\n}\n\ndeclare type Schema =\n  | null\n  | string\n  | {\n      [K: string]: any;\n    }\n  | Schema[]\n  | SchemaSimple\n  | Serializable;\ndeclare type Serializable<\n  T extends {\n    toJSON(): string;\n  } = {\n    toJSON(): string;\n  },\n> = {\n  prototype: T;\n};\ninterface SchemaSimple<T = any> {\n  normalize(\n    input: any,\n    parent: any,\n    key: any,\n    visit: (...args: any) => any,\n    addEntity: (...args: any) => any,\n    visitedEntities: Record<string, any>,\n  ): any;\n  denormalize(\n    input: {},\n    unvisit: UnvisitFunction,\n  ): [denormalized: T, found: boolean, suspend: boolean];\n  infer(\n    args: readonly any[],\n    indexes: NormalizedIndex,\n    recurse: (...args: any) => any,\n    entities: EntityTable,\n  ): any;\n}\ninterface SchemaClass<T = any, N = T | undefined> extends SchemaSimple<T> {\n  _normalizeNullable(): any;\n  _denormalizeNullable(): [N, boolean, boolean];\n}\ninterface EntityInterface<T = any> extends SchemaSimple {\n  pk(params: any, parent?: any, key?: string): string | undefined;\n  readonly key: string;\n  merge(existing: any, incoming: any): any;\n  expiresAt?(meta: any, input: any): number;\n  useIncoming?(\n    existingMeta: any,\n    incomingMeta: any,\n    existing: any,\n    incoming: any,\n  ): boolean;\n  indexes?: any;\n  schema: Record<string, Schema>;\n  prototype: T;\n}\ninterface UnvisitFunction {\n  (input: any, schema: any): [any, boolean, boolean];\n  og?: UnvisitFunction;\n  setLocal?: (entity: any) => void;\n}\ninterface NormalizedIndex {\n  readonly [entityKey: string]: {\n    readonly [indexName: string]: {\n      readonly [lookup: string]: string;\n    };\n  };\n}\ninterface EntityTable {\n  [entityKey: string]:\n    | {\n        [pk: string]: unknown;\n      }\n    | undefined;\n}\n/** Defines a networking endpoint */\ninterface EndpointInterface<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n> extends EndpointExtraOptions<F> {\n  (...args: Parameters<F>): ReturnType<F>;\n  key(...args: Parameters<F>): string;\n  readonly sideEffect?: M;\n  readonly schema?: S;\n}\n/** To change values on the server */\ninterface MutateEndpoint<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n> extends EndpointInterface<F, S, true> {\n  sideEffect: true;\n}\n/** For retrieval requests */\ndeclare type ReadEndpoint<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n> = EndpointInterface<F, S, undefined>;\n\n/* eslint-disable @typescript-eslint/ban-types */\n\ninterface EndpointOptions<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = undefined,\n  M extends true | undefined = undefined,\n> extends EndpointExtraOptions<F> {\n  key?: (...args: Parameters<F>) => string;\n  sideEffect?: M;\n  schema?: S;\n  [k: string]: any;\n}\n\ninterface EndpointExtendOptions<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n> extends EndpointOptions<F, S, M> {\n  fetch?: FetchFunction;\n}\n\ntype KeyofEndpointInstance = keyof EndpointInstance<FetchFunction>;\n\ntype ExtendedEndpoint<\n  O extends EndpointExtendOptions<F>,\n  E extends EndpointInstance<\n    FetchFunction,\n    Schema | undefined,\n    true | undefined\n  >,\n  F extends FetchFunction,\n> = EndpointInstance<\n  'fetch' extends keyof O ? Exclude<O['fetch'], undefined> : E['fetch'],\n  'schema' extends keyof O ? O['schema'] : E['schema'],\n  'sideEffect' extends keyof O ? O['sideEffect'] : E['sideEffect']\n> &\n  Omit<O, KeyofEndpointInstance> &\n  Omit<E, KeyofEndpointInstance>;\n\n/**\n * Defines an async data source.\n * @see https://resthooks.io/docs/api/Endpoint\n */\ninterface EndpointInstance<\n  F extends (...args: any) => Promise<any> = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n> extends EndpointInstanceInterface<F, S, M> {\n  extend<\n    E extends EndpointInstance<\n      (...args: any) => Promise<any>,\n      Schema | undefined,\n      true | undefined\n    >,\n    O extends EndpointExtendOptions<F> &\n      Partial<Omit<E, keyof EndpointInstance<FetchFunction>>> &\n      Record<string, unknown>,\n  >(\n    this: E,\n    options: Readonly<O>,\n  ): ExtendedEndpoint<typeof options, E, F>;\n}\n\n/**\n * Defines an async data source.\n * @see https://resthooks.io/docs/api/Endpoint\n */\ninterface EndpointInstanceInterface<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n> extends EndpointInterface<F, S, M> {\n  constructor: EndpointConstructor;\n\n  /**\n   * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.\n   * @param thisArg The object to be used as the this object.\n   * @param argArray A set of arguments to be passed to the function.\n   */\n  apply<E extends FetchFunction>(\n    this: E,\n    thisArg: ThisParameterType<E>,\n    argArray?: Parameters<E>,\n  ): ReturnType<E>;\n\n  /**\n   * Calls a method of an object, substituting another object for the current object.\n   * @param thisArg The object to be used as the current object.\n   * @param argArray A list of arguments to be passed to the method.\n   */\n  call<E extends FetchFunction>(\n    this: E,\n    thisArg: ThisParameterType<E>,\n    ...argArray: Parameters<E>\n  ): ReturnType<E>;\n\n  /**\n   * For a given function, creates a bound function that has the same body as the original function.\n   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.\n   * @param thisArg An object to which the this keyword can refer inside the new function.\n   * @param argArray A list of arguments to be passed to the new function.\n   */\n  bind<E extends FetchFunction, P extends PartialArray<Parameters<E>>>(\n    this: E,\n    thisArg: ThisParameterType<E>,\n    ...args: readonly [...P]\n  ): EndpointInstance<\n    (...args: readonly [...RemoveArray<Parameters<E>, P>]) => ReturnType<E>,\n    S,\n    M\n  > &\n    Omit<E, keyof EndpointInstance<FetchFunction>>;\n\n  /** Returns a string representation of a function. */\n  toString(): string;\n\n  prototype: any;\n  readonly length: number;\n\n  // Non-standard extensions\n  arguments: any;\n  caller: F;\n\n  key(...args: Parameters<F>): string;\n\n  readonly sideEffect: M;\n\n  readonly schema: S;\n\n  fetch: F;\n\n  /** The following is for compatibility with FetchShape */\n  /** @deprecated */\n  readonly type: M extends undefined\n    ? 'read'\n    : IfAny<M, any, IfTypeScriptLooseNull<'read', 'mutate'>>;\n\n  /** @deprecated */\n  getFetchKey(...args: OnlyFirst<Parameters<F>>): string;\n  /** @deprecated */\n  options?: EndpointExtraOptions<F>;\n}\n\ninterface EndpointConstructor {\n  new <\n    F extends (\n      this: EndpointInstance<FetchFunction> & E,\n      params?: any,\n      body?: any,\n    ) => Promise<any>,\n    S extends Schema | undefined = undefined,\n    M extends true | undefined = undefined,\n    E extends Record<string, any> = {},\n  >(\n    fetchFunction: F,\n    options?: EndpointOptions<F, S, M> & E,\n  ): EndpointInstance<F, S, M> & E;\n  readonly prototype: Function;\n}\ndeclare let Endpoint: EndpointConstructor;\n\ntype IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;\ntype IfTypeScriptLooseNull<Y, N> = 1 | undefined extends 1 ? Y : N;\n\ntype OnlyFirst<A extends unknown[]> = A extends [] ? [] : [A[0]];\n\ntype RemoveArray<Orig extends any[], Rem extends any[]> = Rem extends [\n  any,\n  ...infer RestRem,\n]\n  ? Orig extends [any, ...infer RestOrig]\n    ? RemoveArray<RestOrig, RestRem>\n    : never\n  : Orig;\n\n/**\n * Performant lookups by secondary indexes\n * @see https://resthooks.io/docs/api/Index\n */\ndeclare class Index<S extends Schema, P = Readonly<IndexParams<S>>> {\n  schema: S;\n  constructor(schema: S, key?: (params: P) => string);\n  key(params?: P): string;\n  /** The following is for compatibility with FetchShape */\n  getFetchKey: (params: P) => string;\n}\ndeclare type ArrayElement<ArrayType extends unknown[] | readonly unknown[]> =\n  ArrayType[number];\ndeclare type IndexParams<S extends Schema> = S extends {\n  indexes: readonly string[];\n}\n  ? {\n      [K in Extract<\n        ArrayElement<S['indexes']>,\n        keyof AbstractInstanceType<S>\n      >]?: AbstractInstanceType<S>[K];\n    }\n  : Readonly<object>;\n\ninterface Props$1<E extends NetworkError$1> {\n  children: React.ReactNode;\n  fallbackComponent: React.ComponentType<{\n    error: E;\n  }>;\n}\ninterface State<E extends NetworkError$1> {\n  error?: E;\n}\n/**\n * Handles any networking errors from useResource()\n * @see https://resthooks.io/docs/api/NetworkErrorBoundary\n */\ndeclare class NetworkErrorBoundary<\n  E extends NetworkError$1,\n> extends React.Component<Props$1<E>, State<E>> {\n  static defaultProps: {\n    fallbackComponent: ({ error }: { error: NetworkError$1 }) => JSX.Element;\n  };\n\n  static getDerivedStateFromError(error: NetworkError$1 | any): {\n    error: NetworkError$1;\n  };\n\n  state: State<E>;\n  render(): JSX.Element;\n}\n\ndeclare const PromiseifyMiddleware: <R extends React.Reducer<any, any>>(\n  _: unknown,\n) => (next: Dispatch$1<R>) => (action: React.ReducerAction<R>) => Promise<void>;\n//# sourceMappingURL=PromiseifyMiddleware.d.ts.map\n\ninterface Store<S> {\n  subscribe(listener: () => void): () => void;\n  dispatch: React.Dispatch<ActionTypes>;\n  getState(): S;\n}\ninterface Props<S> {\n  children: React.ReactNode;\n  store: Store<S>;\n  selector: (state: S) => State$1<unknown>;\n  controller: Controller;\n}\ndeclare function ExternalCacheProvider<S>({\n  children,\n  store,\n  selector,\n  controller,\n}: Props<S>): JSX.Element;\n\ninterface MiddlewareAPI<\n  R extends React.Reducer<any, any> = React.Reducer<any, any>,\n> {\n  getState: () => React.ReducerState<R>;\n  dispatch: Dispatch<R>;\n}\ndeclare type Dispatch<R extends React.Reducer<any, any>> = (\n  action: React.ReducerAction<R>,\n) => Promise<void>;\ndeclare type Middleware = <R extends React.Reducer<any, any>>({\n  dispatch,\n}: MiddlewareAPI<R>) => (next: Dispatch<R>) => Dispatch<R>;\n\ndeclare const mapMiddleware: <M extends Middleware[]>(\n  selector: (state: any) => State$1<unknown>,\n) => (...middlewares: Middleware[]) => M;\n//# sourceMappingURL=mapMiddleware.d.ts.map\n\ndeclare const CacheProvider: typeof CacheProvider$1;\n//# sourceMappingURL=index.d.ts.map\n\n/** Use selector to access part of state */\ndeclare function useSelectionUnstable<\n  Params extends Readonly<object> | Readonly<object>[],\n  F extends (state: State$1<unknown>, params: Params) => any,\n>(\n  select: F,\n  params: Params | null,\n  paramSerializer?: (p: Params) => string,\n): ReturnType<F> | null;\n\ninterface ConnectionListener {\n  isOnline: () => boolean;\n  addOnlineListener: (handler: () => void) => void;\n  removeOnlineListener: (handler: () => void) => void;\n  addOfflineListener: (handler: () => void) => void;\n  removeOfflineListener: (handler: () => void) => void;\n}\n\ndeclare let DefaultConnectionListener: {\n  new (): ConnectionListener;\n};\n\n/** Properties sent to Subscription constructor */\ninterface SubscriptionInit {\n  schema?: Schema$1 | undefined;\n  fetch: () => Promise<any>;\n  key: string;\n  getState: () => State$1<unknown>;\n  frequency?: number | undefined;\n}\n/** Interface handling a single resource subscription */\ninterface Subscription {\n  add(frequency?: number): void;\n  remove(frequency?: number): boolean;\n  cleanup(): void;\n}\n/** The static class that constructs Subscription */\ninterface SubscriptionConstructable {\n  new (init: SubscriptionInit, dispatch: Dispatch$1<any>): Subscription;\n}\n/** Handles subscription actions -> fetch or receive actions\n *\n * Constructor takes a SubscriptionConstructable class to control how\n * subscriptions are handled. (e.g., polling, websockets)\n */\ndeclare class SubscriptionManager<S extends SubscriptionConstructable>\n  implements Manager\n{\n  protected subscriptions: {\n    [key: string]: InstanceType<S>;\n  };\n\n  protected readonly Subscription: S;\n  protected middleware: Middleware$1;\n  constructor(Subscription: S);\n  /** Ensures all subscriptions are cleaned up. */\n  cleanup(): void;\n  /** Called when middleware intercepts 'rest-hooks/subscribe' action.\n   *\n   */\n  protected handleSubscribe(\n    action: SubscribeAction,\n    dispatch: Dispatch$1<any>,\n    getState: () => State$1<unknown>,\n  ): void;\n\n  /** Called when middleware intercepts 'rest-hooks/unsubscribe' action.\n   *\n   */\n  protected handleUnsubscribe(\n    action: UnsubscribeAction,\n    dispatch: Dispatch$1<any>,\n  ): void;\n\n  /** Attaches Manager to store\n   *\n   * Intercepts 'rest-hooks/subscribe'/'rest-hooks/unsubscribe' to register resources that\n   * need to be kept up to date.\n   *\n   * Will possibly dispatch 'rest-hooks/fetch' or 'rest-hooks/receive' to keep resources fresh\n   *\n   */\n  getMiddleware<T extends SubscriptionManager<any>>(this: T): Middleware$1;\n}\n\n/**\n * PollingSubscription keeps a given resource updated by\n * dispatching a fetch at a rate equal to the minimum update\n * interval requested.\n */\ndeclare class PollingSubscription implements Subscription {\n  protected readonly schema: Schema$1 | undefined;\n  protected readonly fetch: () => Promise<any>;\n  protected readonly key: string;\n  protected frequency: number;\n  protected frequencyHistogram: Map<number, number>;\n  protected dispatch: Dispatch$1<any>;\n  protected getState: () => State$1<unknown>;\n  protected intervalId?: ReturnType<typeof setInterval>;\n  protected lastIntervalId?: ReturnType<typeof setInterval>;\n  protected startId?: ReturnType<typeof setTimeout>;\n  private connectionListener;\n  constructor(\n    { key, schema, fetch, frequency, getState }: SubscriptionInit,\n    dispatch: Dispatch$1<any>,\n    connectionListener?: ConnectionListener,\n  );\n\n  /** Subscribe to a frequency */\n  add(frequency?: number): void;\n  /** Unsubscribe from a frequency */\n  remove(frequency?: number): boolean;\n  /** Cleanup means clearing out background interval. */\n  cleanup(): void;\n  /** Trigger request for latest resource */\n  protected update(): void;\n  /** What happens when browser goes offline */\n  protected offlineListener: () => void;\n  /** What happens when browser comes online */\n  protected onlineListener: () => void;\n  /** Run polling process with current frequency\n   *\n   * Will clean up old poll interval on next run\n   */\n  protected run(): void;\n  /** Last fetch time */\n  protected lastFetchTime(): number;\n}\n\ndeclare type DevToolsConfig = {\n  [k: string]: unknown;\n  name: string;\n};\n/** Integrates with https://github.com/zalmoxisus/redux-devtools-extension\n *\n * Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md\n */\ndeclare class DevToolsManager implements Manager {\n  protected middleware: Middleware$1;\n  protected devTools: undefined | any;\n  constructor(\n    config?: DevToolsConfig,\n    skipLogging?: (action: ActionTypes) => boolean,\n  );\n\n  /** Called when initial state is ready */\n  init(state: State$1<any>): void;\n  /** Ensures all subscriptions are cleaned up. */\n  cleanup(): void;\n  /** Attaches Manager to store\n   *\n   */\n  getMiddleware<T extends DevToolsManager>(this: T): Middleware$1;\n}\n\ndeclare const inferResults: typeof __INTERNAL__.inferResults;\ndeclare const RIC: (cb: (...args: any[]) => void, options: any) => void;\n\ndeclare const internal_d_inferResults: typeof inferResults;\ndeclare const internal_d_RIC: typeof RIC;\ndeclare const internal_d_initialState: typeof initialState;\ndeclare const internal_d_StateContext: typeof StateContext;\ndeclare const internal_d_DispatchContext: typeof DispatchContext;\ndeclare const internal_d_hasUsableData: typeof hasUsableData;\ndeclare namespace internal_d {\n  export {\n    internal_d_inferResults as inferResults,\n    internal_d_RIC as RIC,\n    internal_d_initialState as initialState,\n    internal_d_StateContext as StateContext,\n    internal_d_DispatchContext as DispatchContext,\n    internal_d_hasUsableData as hasUsableData,\n  };\n}\n\nexport {\n  ArrayElement,\n  CacheProvider,\n  ConnectionListener,\n  DefaultConnectionListener,\n  Denormalize,\n  DenormalizeNullable,\n  DevToolsConfig,\n  DevToolsManager,\n  Endpoint,\n  EndpointExtraOptions,\n  EndpointInterface,\n  EndpointParam,\n  ExternalCacheProvider,\n  FetchFunction,\n  EndpointExtraOptions as FetchOptions,\n  Index,\n  IndexParams,\n  MutateEndpoint,\n  NetworkError,\n  NetworkErrorBoundary,\n  Normalize,\n  NormalizeNullable,\n  PollingSubscription,\n  PromiseifyMiddleware,\n  ReadEndpoint,\n  ResolveType,\n  Schema,\n  SubscriptionManager,\n  internal_d as __INTERNAL__,\n  mapMiddleware,\n  useSelectionUnstable,\n};\n"}}]);