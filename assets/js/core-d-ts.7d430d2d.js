(self.webpackChunk=self.webpackChunk||[]).push([[30007],{90734:e=>{e.exports="import { ErrorFluxStandardActionWithPayloadAndMeta, FSA, FSAWithPayloadAndMeta, FSAWithMeta } from 'flux-standard-action';\n\ntype Schema = null | string | {\n    [K: string]: any;\n} | Schema[] | SchemaSimple | Serializable;\ntype Serializable<T extends {\n    toJSON(): string;\n} = {\n    toJSON(): string;\n}> = {\n    prototype: T;\n};\ninterface SchemaSimple<T = any> {\n    normalize(input: any, parent: any, key: any, visit: (...args: any) => any, addEntity: (...args: any) => any, visitedEntities: Record<string, any>): any;\n    denormalize(input: {}, unvisit: UnvisitFunction): [denormalized: T, found: boolean, suspend: boolean];\n    infer(args: readonly any[], indexes: NormalizedIndex, recurse: (...args: any) => any, entities: EntityTable): any;\n}\ninterface SchemaClass<T = any, N = T | undefined> extends SchemaSimple<T> {\n    _normalizeNullable(): any;\n    _denormalizeNullable(): [N, boolean, boolean];\n}\ninterface EntityInterface<T = any> extends SchemaSimple {\n    pk(params: any, parent?: any, key?: string): string | undefined;\n    readonly key: string;\n    merge(existing: any, incoming: any): any;\n    expiresAt?(meta: any, input: any): number;\n    useIncoming?(existingMeta: any, incomingMeta: any, existing: any, incoming: any): boolean;\n    indexes?: any;\n    schema: Record<string, Schema>;\n    prototype: T;\n}\ninterface UnvisitFunction {\n    (input: any, schema: any): [any, boolean, boolean];\n    og?: UnvisitFunction;\n    setLocal?: (entity: any) => void;\n}\ninterface NormalizedIndex {\n    readonly [entityKey: string]: {\n        readonly [indexName: string]: {\n            readonly [lookup: string]: string;\n        };\n    };\n}\ninterface EntityTable {\n    [entityKey: string]: {\n        [pk: string]: unknown;\n    } | undefined;\n}\n\n/** Link in a chain */\ndeclare class Link<K extends object, V> {\n    children: WeakMap<K, Link<K, V>>;\n    value?: V;\n}\n/** Maps from a list of objects (referentially) to any value\n *\n * If *any* members of the list get claned up, so does that key/value pair get removed.\n */\ndeclare class WeakListMap<K extends object, V> {\n    readonly first: WeakMap<K, Link<K, V>>;\n    delete(key: K[]): boolean;\n    get(key: K[]): V | undefined;\n    has(key: K[]): boolean;\n    set(key: K[], value: V): WeakListMap<K, V>;\n    protected traverse(key: K[]): Link<K, V> | undefined;\n}\n\ntype AbstractInstanceType<T> = T extends {\n    prototype: infer U;\n} ? U : never;\ntype DenormalizeObject<S extends Record<string, any>> = {\n    [K in keyof S]: S[K] extends Schema ? Denormalize$1<S[K]> : S[K];\n};\ntype DenormalizeNullableObject<S extends Record<string, any>> = {\n    [K in keyof S]: S[K] extends Schema ? DenormalizeNullable$1<S[K]> : S[K];\n};\ntype NormalizeObject<S extends Record<string, any>> = {\n    [K in keyof S]: S[K] extends Schema ? Normalize$1<S[K]> : S[K];\n};\ntype NormalizedNullableObject<S extends Record<string, any>> = {\n    [K in keyof S]: S[K] extends Schema ? NormalizeNullable$1<S[K]> : S[K];\n};\ninterface NestedSchemaClass<T = any> {\n    schema: Record<string, Schema>;\n    prototype: T;\n}\ninterface RecordClass<T = any> extends NestedSchemaClass<T> {\n    fromJS: (...args: any) => AbstractInstanceType<T>;\n}\ninterface DenormalizeCache {\n    entities: {\n        [key: string]: {\n            [pk: string]: WeakListMap<object, EntityInterface>;\n        };\n    };\n    results: {\n        [key: string]: WeakListMap<object, any>;\n    };\n}\ntype DenormalizeNullableNestedSchema<S extends NestedSchemaClass> = keyof S['schema'] extends never ? S['prototype'] : string extends keyof S['schema'] ? S['prototype'] : S['prototype'];\ntype DenormalizeReturnType<T> = T extends (input: any, unvisit: any) => [infer R, any, any] ? R : never;\ntype NormalizeReturnType<T> = T extends (...args: any) => infer R ? R : never;\ntype Denormalize$1<S> = S extends EntityInterface<infer U> ? U : S extends RecordClass ? AbstractInstanceType<S> : S extends SchemaClass ? DenormalizeReturnType<S['denormalize']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Denormalize$1<F>[] : S extends {\n    [K: string]: any;\n} ? DenormalizeObject<S> : S;\ntype DenormalizeNullable$1<S> = S extends EntityInterface<any> ? DenormalizeNullableNestedSchema<S> | undefined : S extends RecordClass ? DenormalizeNullableNestedSchema<S> : S extends SchemaClass ? DenormalizeReturnType<S['_denormalizeNullable']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Denormalize$1<F>[] | undefined : S extends {\n    [K: string]: any;\n} ? DenormalizeNullableObject<S> : S;\ntype Normalize$1<S> = S extends EntityInterface ? string : S extends RecordClass ? NormalizeObject<S['schema']> : S extends SchemaClass ? NormalizeReturnType<S['normalize']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Normalize$1<F>[] : S extends {\n    [K: string]: any;\n} ? NormalizeObject<S> : S;\ntype NormalizeNullable$1<S> = S extends EntityInterface ? string | undefined : S extends RecordClass ? NormalizedNullableObject<S['schema']> : S extends SchemaClass ? NormalizeReturnType<S['_normalizeNullable']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Normalize$1<F>[] | undefined : S extends {\n    [K: string]: any;\n} ? NormalizedNullableObject<S> : S;\n\n/**\n * Build the result parameter to denormalize from schema alone.\n * Tries to compute the entity ids from params.\n */\ndeclare function inferResults<S extends Schema>(schema: S, args: any[], indexes: NormalizedIndex, entities?: EntityTable): NormalizeNullable$1<S>;\n\ndeclare const DELETED: unique symbol;\n\ninterface NetworkError extends Error {\n    status: number;\n    response?: Response;\n}\ninterface UnknownError extends Error {\n    status?: unknown;\n    response?: unknown;\n}\ntype ErrorTypes = NetworkError | UnknownError;\n\n/** What the function's promise resolves to */\ntype ResolveType<E extends (...args: any) => any> = ReturnType<E> extends Promise<infer R> ? R : never;\n/** Fallback to schema if fetch function isn't defined */\ntype InferReturn<F extends FetchFunction, S extends Schema | undefined> = S extends undefined ? ReturnType<F> : ReturnType<F> extends unknown ? Promise<Denormalize$1<S>> : ReturnType<F>;\n\ndeclare const enum ExpiryStatus {\n    Invalid = 1,\n    InvalidIfStale = 2,\n    Valid = 3\n}\ntype ExpiryStatusInterface = 1 | 2 | 3;\n\ninterface SnapshotInterface {\n    getResponse: <E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>, Args extends readonly [...Parameters<E['key']>]>(endpoint: E, ...args: Args) => {\n        data: any;\n        expiryStatus: ExpiryStatusInterface;\n        expiresAt: number;\n    };\n    getError: <E extends Pick<EndpointInterface, 'key'>, Args extends readonly [...Parameters<E['key']>]>(endpoint: E, ...args: Args) => ErrorTypes | undefined;\n    readonly fetchedAt: number;\n}\n\n/** Defines a networking endpoint */\ninterface EndpointInterface<F extends FetchFunction = FetchFunction, S extends Schema | undefined = Schema | undefined, M extends true | undefined = true | undefined> extends EndpointExtraOptions<F> {\n    (...args: Parameters<F>): InferReturn<F, S>;\n    key(...args: Parameters<F>): string;\n    readonly sideEffect?: M;\n    readonly schema?: S;\n}\ninterface EndpointExtraOptions<F extends FetchFunction = FetchFunction> {\n    /** Default data expiry length, will fall back to NetworkManager default if not defined */\n    readonly dataExpiryLength?: number;\n    /** Default error expiry length, will fall back to NetworkManager default if not defined */\n    readonly errorExpiryLength?: number;\n    /** Poll with at least this frequency in miliseconds */\n    readonly pollFrequency?: number;\n    /** Marks cached resources as invalid if they are stale */\n    readonly invalidIfStale?: boolean;\n    /** Enables optimistic updates for this request - uses return value as assumed network response\n     * @deprecated use https://resthooks.io/docs/api/Endpoint#getoptimisticresponse instead\n     */\n    optimisticUpdate?(...args: Parameters<F>): ResolveType<F>;\n    /** Enables optimistic updates for this request - uses return value as assumed network response */\n    getOptimisticResponse?(snap: SnapshotInterface, ...args: Parameters<F>): ResolveType<F>;\n    /** Determines whether to throw or fallback to */\n    errorPolicy?(error: any): 'hard' | 'soft' | undefined;\n    /** User-land extra data to send */\n    readonly extra?: any;\n}\ntype UpdateFunction<SourceSchema extends Schema | undefined, DestSchema extends Schema> = (sourceResults: Normalize$1<SourceSchema>, destResults: Normalize$1<DestSchema> | undefined) => Normalize$1<DestSchema>;\n\ntype FetchFunction<A extends readonly any[] = any, R = any> = (...args: A) => Promise<R>;\n\n/** This file exists to keep compatibility with SchemaDetail, and SchemaList type hacks\n * Support can be dropped once @rest-hooks/rest@5 support is dropped\n */\n\ntype Denormalize<S> = Extract<S, EntityInterface> extends never ? Extract<S, EntityInterface[]> extends never ? Denormalize$1<S> : Denormalize$1<Extract<S, EntityInterface[]>> : Denormalize$1<Extract<S, EntityInterface>>;\ntype DenormalizeNullable<S> = Extract<S, EntityInterface> extends never ? Extract<S, EntityInterface[]> extends never ? DenormalizeNullable$1<S> : DenormalizeNullable$1<Extract<S, EntityInterface[]>> : DenormalizeNullable$1<Extract<S, EntityInterface>>;\ntype Normalize<S> = Extract<S, EntityInterface> extends never ? Extract<S, EntityInterface[]> extends never ? Normalize$1<S> : Normalize$1<Extract<S, EntityInterface[]>> : Normalize$1<Extract<S, EntityInterface>>;\ntype NormalizeNullable<S> = Extract<S, EntityInterface> extends never ? Extract<S, EntityInterface[]> extends never ? NormalizeNullable$1<S> : NormalizeNullable$1<Extract<S, EntityInterface[]>> : NormalizeNullable$1<Extract<S, EntityInterface>>;\n\ndeclare const RIC: (cb: (...args: any[]) => void, options: any) => void;\n\ndeclare const FETCH_TYPE: \"rest-hooks/fetch\";\ndeclare const RECEIVE_TYPE: \"rest-hooks/receive\";\ndeclare const OPTIMISTIC_TYPE: \"rest-hooks/optimistic\";\ndeclare const RESET_TYPE: \"rest-hooks/reset\";\ndeclare const SUBSCRIBE_TYPE: \"rest-hooks/subscribe\";\ndeclare const UNSUBSCRIBE_TYPE: \"rest-hook/unsubscribe\";\ndeclare const INVALIDATE_TYPE: \"rest-hooks/invalidate\";\ndeclare const GC_TYPE: \"rest-hooks/gc\";\n\ndeclare const actionTypes_d_FETCH_TYPE: typeof FETCH_TYPE;\ndeclare const actionTypes_d_RECEIVE_TYPE: typeof RECEIVE_TYPE;\ndeclare const actionTypes_d_OPTIMISTIC_TYPE: typeof OPTIMISTIC_TYPE;\ndeclare const actionTypes_d_RESET_TYPE: typeof RESET_TYPE;\ndeclare const actionTypes_d_SUBSCRIBE_TYPE: typeof SUBSCRIBE_TYPE;\ndeclare const actionTypes_d_UNSUBSCRIBE_TYPE: typeof UNSUBSCRIBE_TYPE;\ndeclare const actionTypes_d_INVALIDATE_TYPE: typeof INVALIDATE_TYPE;\ndeclare const actionTypes_d_GC_TYPE: typeof GC_TYPE;\ndeclare namespace actionTypes_d {\n  export {\n    actionTypes_d_FETCH_TYPE as FETCH_TYPE,\n    actionTypes_d_RECEIVE_TYPE as RECEIVE_TYPE,\n    actionTypes_d_OPTIMISTIC_TYPE as OPTIMISTIC_TYPE,\n    actionTypes_d_RESET_TYPE as RESET_TYPE,\n    actionTypes_d_SUBSCRIBE_TYPE as SUBSCRIBE_TYPE,\n    actionTypes_d_UNSUBSCRIBE_TYPE as UNSUBSCRIBE_TYPE,\n    actionTypes_d_INVALIDATE_TYPE as INVALIDATE_TYPE,\n    actionTypes_d_GC_TYPE as GC_TYPE,\n  };\n}\n\ntype ResultEntry<E extends EndpointInterface> = E['schema'] extends undefined ? ResolveType<E> : Normalize<E>;\ntype EndpointUpdateFunction<Source extends EndpointInterface, Updaters extends Record<string, any> = Record<string, any>> = (source: ResultEntry<Source>, ...args: Parameters<Source>) => {\n    [K in keyof Updaters]: (result: Updaters[K]) => Updaters[K];\n};\n\n/** Defines the shape of a network request */\ninterface FetchShape<S extends Schema | undefined, Params extends Readonly<object> = Readonly<object>, Body extends Readonly<object | string> | void | unknown = Readonly<object | string> | undefined, Response = any> {\n    readonly type: 'read' | 'mutate' | 'delete';\n    fetch(params: Params, body?: Body): Promise<Response>;\n    getFetchKey(params: Params): string;\n    readonly schema: S;\n    readonly options?: EndpointExtraOptions;\n}\n/** To change values on the server */\ninterface MutateShape<S extends Schema | undefined, Params extends Readonly<object> = Readonly<object>, Body extends Readonly<object | string> | void | unknown = Readonly<object | string> | undefined, Response extends object | string | number | boolean | null = any> extends FetchShape<S, Params, Body, Response> {\n    readonly type: 'mutate';\n    fetch(params: Params, body: Body): Promise<Response>;\n}\n/** Removes entities */\ninterface DeleteShape<S extends Schema | undefined, Params extends Readonly<object> = Readonly<object>, Response extends object | string | number | boolean | null = any> extends FetchShape<S, Params, undefined, Response> {\n    readonly type: 'mutate';\n    fetch(params: Params, ...args: any): Promise<Response>;\n}\n/** For retrieval requests */\ninterface ReadShape<S extends Schema | undefined, Params extends Readonly<object> = Readonly<object>, Response extends object | string | number | boolean | null = any> extends FetchShape<S, Params, undefined, Response> {\n    readonly type: 'read';\n    fetch(params: Params): Promise<Response>;\n}\n\n/** Sets a FetchShape's Param type.\n * Useful to constrain acceptable params (second arg) in hooks like useResource().\n *\n * @param [Shape] FetchShape to act upon\n * @param [Params] what to set the Params to\n */\ntype SetShapeParams<Shape extends FetchShape<any, any, any>, Params extends Readonly<object>> = {\n    [K in keyof Shape]: Shape[K];\n} & (Shape['fetch'] extends (first: any, ...rest: infer Args) => infer Return ? {\n    fetch: (first: Params, ...rest: Args) => Return;\n} : never);\n/** Get the Params type for a given Shape */\ntype ParamsFromShape<S> = S extends {\n    fetch: (first: infer A, ...rest: any) => any;\n} ? A : S extends {\n    getFetchKey: (first: infer A, ...rest: any) => any;\n} ? A : never;\n/** Get the Schema type for a given Shape */\ntype SchemaFromShape<F extends FetchShape<Schema | undefined, any, any>> = F['schema'];\n/** Get the Body type for a given Shape */\ntype BodyFromShape<F extends FetchShape<any, any, any>> = Parameters<F['fetch']>[1];\ntype OptimisticUpdateParams<SourceSchema extends Schema | undefined, DestShape extends FetchShape<any, any, any>> = [\n    DestShape,\n    ParamsFromShape<DestShape>,\n    UpdateFunction<SourceSchema, SchemaFromShape<DestShape>>\n];\ntype ReturnFromShape<S extends FetchShape<any, any, any>> = ReturnType<S['fetch']> extends unknown ? Promise<Denormalize<S['schema']>> : ReturnType<S['fetch']>;\n\ntype ErrorableFSAWithPayloadAndMeta<Type extends string = string, Payload = undefined, Meta = undefined, CustomError extends Error = Error> = ErrorFluxStandardActionWithPayloadAndMeta<Type, CustomError, Meta> | NoErrorFluxStandardActionWithPayloadAndMeta<Type, Payload, Meta>;\ninterface NoErrorFluxStandardAction<Type extends string = string, Payload = undefined, Meta = undefined> extends FSA<Type, Payload, Meta> {\n    error?: false;\n}\n/**\n * A Flux Standard action with a required payload property.\n */\ninterface NoErrorFluxStandardActionWithPayload<Type extends string = string, Payload = undefined, Meta = undefined> extends NoErrorFluxStandardAction<Type, Payload, Meta> {\n    /**\n     * The required `payload` property MAY be any type of value.\n     * It represents the payload of the action.\n     * Any information about the action that is not the type or status of the action should be part of the `payload` field.\n     * By convention, if `error` is `true`, the `payload` SHOULD be an error object.\n     * This is akin to rejecting a promise with an error object.\n     */\n    payload: Payload;\n}\n/**\n * A Flux Standard action with a required metadata property.\n */\ninterface NoErrorFluxStandardActionWithMeta<Type extends string = string, Payload = undefined, Meta = undefined> extends NoErrorFluxStandardAction<Type, Payload, Meta> {\n    /**\n     * The required `meta` property MAY be any type of value.\n     * It is intended for any extra information that is not part of the payload.\n     */\n    meta: Meta;\n}\n/**\n * A Flux Standard action with required payload and metadata properties.\n */\ntype NoErrorFluxStandardActionWithPayloadAndMeta<Type extends string = string, Payload = undefined, Meta = undefined> = NoErrorFluxStandardActionWithPayload<Type, Payload, Meta> & NoErrorFluxStandardActionWithMeta<Type, Payload, Meta>;\n\ninterface MiddlewareAPI$1<R extends Reducer<any, any> = Reducer<any, any>> {\n    getState: () => ReducerState<R>;\n    dispatch: Dispatch<R>;\n    controller: Controller;\n}\ntype Dispatch<R extends Reducer<any, any>> = (action: ReducerAction<R>) => Promise<void>;\ntype Middleware$1 = <R extends Reducer<any, any>>({ dispatch, }: MiddlewareAPI$1<R>) => (next: Dispatch<R>) => Dispatch<R>;\ntype Reducer<S, A> = (prevState: S, action: A) => S;\ntype ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;\ntype ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A> ? A : never;\n\ntype ReceiveTypes = typeof RECEIVE_TYPE;\ntype PK = string;\ninterface State<T> {\n    readonly entities: {\n        readonly [entityKey: string]: {\n            readonly [pk: string]: T;\n        } | undefined;\n    };\n    readonly indexes: NormalizedIndex;\n    readonly results: {\n        readonly [key: string]: unknown | PK[] | PK | undefined;\n    };\n    readonly meta: {\n        readonly [key: string]: {\n            readonly date: number;\n            readonly error?: ErrorTypes;\n            readonly expiresAt: number;\n            readonly prevExpiresAt?: number;\n            readonly invalidated?: boolean;\n            readonly errorPolicy?: 'hard' | 'soft' | undefined;\n        };\n    };\n    readonly entityMeta: {\n        readonly [entityKey: string]: {\n            readonly [pk: string]: {\n                readonly date: number;\n                readonly expiresAt: number;\n                readonly fetchedAt: number;\n            };\n        };\n    };\n    readonly optimistic: (ReceiveAction | OptimisticAction)[];\n    readonly lastReset: Date | number;\n}\ninterface ReceiveMeta<S extends Schema | undefined> {\n    schema?: S;\n    key: string;\n    args?: readonly any[];\n    updaters?: Record<string, UpdateFunction<S, any>>;\n    update?: (result: any, ...args: any) => Record<string, (...args: any) => any>;\n    fetchedAt?: number;\n    date: number;\n    expiresAt: number;\n    errorPolicy?: (error: any) => 'hard' | 'soft' | undefined;\n}\ntype ReceiveAction<Payload extends object | string | number | null = object | string | number | null, S extends Schema | undefined = any> = ErrorableFSAWithPayloadAndMeta<typeof RECEIVE_TYPE, Payload, ReceiveMeta<S>> & {\n    endpoint?: EndpointInterface;\n};\ntype OptimisticAction<E extends EndpointInterface & {\n    update?: EndpointUpdateFunction<E>;\n} = EndpointInterface & {\n    update?: EndpointUpdateFunction<EndpointInterface>;\n}> = {\n    type: typeof OPTIMISTIC_TYPE;\n    meta: {\n        schema: E['schema'];\n        key: string;\n        args: readonly any[];\n        update?: (result: any, ...args: any) => Record<string, (...args: any) => any>;\n        fetchedAt: number;\n        date: number;\n        expiresAt: number;\n        errorPolicy?: (error: any) => 'hard' | 'soft' | undefined;\n    };\n    endpoint: E;\n    error?: undefined;\n};\ninterface ResetAction {\n    type: typeof RESET_TYPE;\n    date: number | Date;\n}\ninterface FetchMeta<Payload extends object | string | number | null = object | string | number | null, S extends Schema | undefined = any> {\n    type: FetchShape<any, any>['type'];\n    schema?: S;\n    key: string;\n    args?: readonly any[];\n    updaters?: Record<string, UpdateFunction<S, any>>;\n    update?: (result: any, ...args: any) => Record<string, (...args: any) => any>;\n    options?: EndpointExtraOptions;\n    throttle: boolean;\n    resolve: (value?: any | PromiseLike<any>) => void;\n    reject: (reason?: any) => void;\n    promise: PromiseLike<any>;\n    createdAt: number | Date;\n    optimisticResponse?: Payload;\n    nm?: boolean;\n}\ninterface FetchAction<Payload extends object | string | number | null = object | string | number | null, S extends Schema | undefined = any> extends FSAWithPayloadAndMeta<typeof FETCH_TYPE, () => Promise<Payload>, FetchMeta<any, any>> {\n    meta: FetchMeta<Payload, S>;\n    endpoint?: EndpointInterface;\n}\ninterface SubscribeAction extends FSAWithMeta<typeof SUBSCRIBE_TYPE, undefined, any> {\n    endpoint?: EndpointInterface;\n    meta: {\n        args?: readonly any[];\n        schema: Schema | undefined;\n        fetch: () => Promise<any>;\n        key: string;\n        options: EndpointExtraOptions | undefined;\n    };\n}\ninterface UnsubscribeAction extends FSAWithMeta<typeof UNSUBSCRIBE_TYPE, undefined, any> {\n    endpoint?: EndpointInterface;\n    meta: {\n        args?: readonly any[];\n        key: string;\n        options: EndpointExtraOptions | undefined;\n    };\n}\ninterface InvalidateAction extends FSAWithMeta<typeof INVALIDATE_TYPE, undefined, any> {\n    meta: {\n        key: string;\n    };\n}\ninterface GCAction {\n    type: typeof GC_TYPE;\n    entities: [string, string][];\n    results: string[];\n}\ntype ResponseActions = ReceiveAction;\ntype ActionTypes = FetchAction | OptimisticAction | ReceiveAction | SubscribeAction | UnsubscribeAction | InvalidateAction | ResetAction | GCAction;\ninterface Manager {\n    getMiddleware(): Middleware$1;\n    cleanup(): void;\n    init?: (state: State<any>) => void;\n}\n\ntype RHDispatch = (value: ActionTypes) => Promise<void>;\ninterface ConstructorProps {\n    dispatch?: RHDispatch;\n    globalCache?: DenormalizeCache;\n}\n/**\n * Imperative control of Rest Hooks store\n * @see https://resthooks.io/docs/api/Controller\n */\ndeclare class Controller {\n    readonly dispatch: RHDispatch;\n    readonly globalCache: DenormalizeCache;\n    constructor({ dispatch, globalCache, }?: ConstructorProps);\n    /*************** Action Dispatchers ***************/\n    /**\n     * Fetches the endpoint with given args, updating the Rest Hooks cache with the response or error upon completion.\n     * @see https://resthooks.io/docs/api/Controller#fetch\n     */\n    fetch: <E extends EndpointInterface<FetchFunction<any, any>, Schema | undefined, true | undefined> & {\n        update?: EndpointUpdateFunction<E, Record<string, any>> | undefined;\n    }>(endpoint: E, ...args_0: Parameters<E>) => ReturnType<E>;\n    /**\n     * Forces refetching and suspense on useResource with the same Endpoint and parameters.\n     * @see https://resthooks.io/docs/api/Controller#invalidate\n     */\n    invalidate: <E extends EndpointInterface<FetchFunction<any, any>, Schema | undefined, true | undefined>>(endpoint: E, ...args: readonly [...Parameters<E>] | readonly [null]) => Promise<void>;\n    /**\n     * Resets the entire Rest Hooks cache. All inflight requests will not resolve.\n     * @see https://resthooks.io/docs/api/Controller#resetEntireStore\n     */\n    resetEntireStore: () => Promise<void>;\n    /**\n     * Stores response in cache for given Endpoint and args.\n     * @see https://resthooks.io/docs/api/Controller#receive\n     */\n    receive: <E extends EndpointInterface<FetchFunction<any, any>, Schema | undefined, true | undefined> & {\n        update?: EndpointUpdateFunction<E, Record<string, any>> | undefined;\n    }>(endpoint: E, ...rest: readonly [...Parameters<E>, any]) => Promise<void>;\n    /**\n     * Stores the result of Endpoint and args as the error provided.\n     * @see https://resthooks.io/docs/api/Controller#receiveError\n     */\n    receiveError: <E extends EndpointInterface<FetchFunction<any, any>, Schema | undefined, true | undefined> & {\n        update?: EndpointUpdateFunction<E, Record<string, any>> | undefined;\n    }>(endpoint: E, ...rest: readonly [...Parameters<E>, Error]) => Promise<void>;\n    /**\n     * Resolves an inflight fetch. `fetchedAt` should `fetch`'s `createdAt`\n     * @see https://resthooks.io/docs/api/Controller#resolve\n     */\n    resolve: <E extends EndpointInterface<FetchFunction<any, any>, Schema | undefined, true | undefined> & {\n        update?: EndpointUpdateFunction<E, Record<string, any>> | undefined;\n    }>(endpoint: E, meta: {\n        args: readonly [...Parameters<E>];\n        response: Error;\n        fetchedAt: number;\n        error: true;\n    } | {\n        args: readonly [...Parameters<E>];\n        response: any;\n        fetchedAt: number;\n        error?: false | undefined;\n    }) => Promise<void>;\n    /**\n     * Marks a new subscription to a given Endpoint.\n     * @see https://resthooks.io/docs/api/Controller#subscribe\n     */\n    subscribe: <E extends EndpointInterface<FetchFunction<any, any>, Schema | undefined, undefined>>(endpoint: E, ...args: readonly [null] | readonly [...Parameters<E>]) => Promise<void>;\n    /**\n     * Marks completion of subscription to a given Endpoint.\n     * @see https://resthooks.io/docs/api/Controller#unsubscribe\n     */\n    unsubscribe: <E extends EndpointInterface<FetchFunction<any, any>, Schema | undefined, undefined>>(endpoint: E, ...args: readonly [null] | readonly [...Parameters<E>]) => Promise<void>;\n    /*************** More ***************/\n    /**\n     * Gets the latest state snapshot that is fully committed.\n     *\n     * This can be useful for imperative use-cases like event handlers.\n     * This should *not* be used to render; instead useSuspense() or useCache()\n     * @see https://resthooks.io/docs/api/Controller#getState\n     */\n    getState: () => State<unknown>;\n    snapshot: (state: State<unknown>, fetchedAt?: number) => SnapshotInterface;\n    /**\n     * Gets the error, if any, for a given endpoint. Returns undefined for no errors.\n     * @see https://resthooks.io/docs/api/Controller#getError\n     */\n    getError: <E extends Pick<EndpointInterface<FetchFunction<any, any>, Schema | undefined, true | undefined>, \"key\">, Args extends readonly [null] | readonly [...Parameters<E[\"key\"]>]>(endpoint: E, ...rest: [...Args, State<unknown>]) => ErrorTypes | undefined;\n    /**\n     * Gets the (globally referentially stable) response for a given endpoint/args pair from state given.\n     * @see https://resthooks.io/docs/api/Controller#getResponse\n     */\n    getResponse: <E extends Pick<EndpointInterface<FetchFunction<any, any>, Schema | undefined, true | undefined>, \"schema\" | \"key\" | \"invalidIfStale\">, Args extends readonly [null] | readonly [...Parameters<E[\"key\"]>]>(endpoint: E, ...rest: [...Args, State<unknown>]) => {\n        data: DenormalizeNullable<E[\"schema\"]>;\n        expiryStatus: ExpiryStatus;\n        expiresAt: number;\n    };\n    private getResults;\n}\n\ndeclare const initialState: State<unknown>;\ndeclare function createReducer(controller: Controller): (state: State<unknown> | undefined, action: ActionTypes) => State<unknown>;\n\n//# sourceMappingURL=internal.d.ts.map\n\ndeclare const internal_d_inferResults: typeof inferResults;\ndeclare const internal_d_DELETED: typeof DELETED;\ndeclare const internal_d_RIC: typeof RIC;\ndeclare const internal_d_initialState: typeof initialState;\ndeclare namespace internal_d {\n  export {\n    internal_d_inferResults as inferResults,\n    internal_d_DELETED as DELETED,\n    internal_d_RIC as RIC,\n    internal_d_initialState as initialState,\n  };\n}\n\ndeclare class ResetError extends Error {\n    name: string;\n    constructor();\n}\n/** Handles all async network dispatches\n *\n * Dedupes concurrent requests by keeping track of all fetches in flight\n * and returning existing promises for requests already in flight.\n *\n * Interfaces with store via a redux-compatible middleware.\n */\ndeclare class NetworkManager implements Manager {\n    protected fetched: {\n        [k: string]: Promise<any>;\n    };\n    protected resolvers: {\n        [k: string]: (value?: any) => void;\n    };\n    protected rejectors: {\n        [k: string]: (value?: any) => void;\n    };\n    readonly dataExpiryLength: number;\n    readonly errorExpiryLength: number;\n    protected middleware: Middleware$1;\n    protected getState: () => State<unknown>;\n    cleanupDate?: number;\n    constructor(dataExpiryLength?: number, errorExpiryLength?: number);\n    /** Used by DevtoolsManager to determine whether to log an action */\n    skipLogging(action: ActionTypes): boolean;\n    /** On mount */\n    init(): void;\n    /** Ensures all promises are completed by rejecting remaining. */\n    cleanup(): void;\n    allSettled(): Promise<PromiseSettledResult<any>[]> | undefined;\n    /** Clear all promise state */\n    protected clearAll(): void;\n    /** Clear promise state for a given key */\n    protected clear(key: string): void;\n    protected getLastReset(): number;\n    /** Called when middleware intercepts 'rest-hooks/fetch' action.\n     *\n     * Will then start a promise for a key and potentially start the network\n     * fetch.\n     *\n     * Uses throttle only when instructed by action meta. This is valuable\n     * for ensures mutation requests always go through.\n     */\n    protected handleFetch(action: FetchAction, dispatch: Dispatch<any>, controller: Controller): Promise<string | number | void | object | null>;\n    /** Called when middleware intercepts a receive action.\n     *\n     * Will resolve the promise associated with receive key.\n     */\n    protected handleReceive(action: ReceiveAction): void;\n    /** Attaches NetworkManager to store\n     *\n     * Intercepts 'rest-hooks/fetch' actions to start requests.\n     *\n     * Resolve/rejects a request when matching 'rest-hooks/receive' event\n     * is seen.\n     */\n    getMiddleware<T extends NetworkManager>(this: T): Middleware$1;\n    /** Ensures only one request for a given key is in flight at any time\n     *\n     * Uses key to either retrieve in-flight promise, or if not\n     * create a new promise and call fetch.\n     *\n     * Note: The new promise is not actually tied to fetch at all,\n     * but is resolved when the expected 'recieve' action is processed.\n     * This ensures promises are resolved only once their data is processed\n     * by the reducer.\n     */\n    protected throttle(key: string, fetch: () => Promise<any>): Promise<any>;\n}\n\n/**\n * @deprecated use createReducer instead\n */\ndeclare const reducer: (state: State<unknown> | undefined, action: ActionTypes) => State<unknown>;\n//# sourceMappingURL=reducerInstance.d.ts.map\n\ndeclare function applyManager(managers: Manager[], controller: Controller): Middleware[];\ninterface MiddlewareAPI<R extends Reducer<any, any> = Reducer<any, any>> {\n    getState: () => ReducerState<R>;\n    dispatch: Dispatch<R>;\n}\ntype Middleware = <R extends Reducer<any, any>>({ dispatch, }: MiddlewareAPI<R>) => (next: Dispatch<R>) => Dispatch<R>;\n\ninterface Options$2<Shape extends FetchShape<Schema | undefined, Readonly<object>, Readonly<object | string> | void>> {\n    params: ParamsFromShape<Shape>;\n    body?: BodyFromShape<Shape>;\n    throttle: boolean;\n    updateParams?: OptimisticUpdateParams<SchemaFromShape<Shape>, FetchShape<Schema | undefined, any, any>>[] | undefined;\n}\n/** Requesting a fetch to begin\n *\n * @param fetchShape\n * @param param1 { params, body, throttle, updateParams }\n */\ndeclare function createFetch<Shape extends FetchShape<Schema | undefined, Readonly<object>, Readonly<object | string> | void>>(fetchShape: Shape & {\n    update?: (...args: any) => Record<string, (...args: any) => any>;\n}, { params, body, throttle, updateParams }: Options$2<Shape>): FetchAction;\n\ninterface Options$1<Payload extends object | string | number | null = object | string | number | null, S extends Schema | undefined = any> extends Pick<FetchAction<Payload, S>['meta'], 'schema' | 'key' | 'type' | 'updaters' | 'update' | 'args'> {\n    dataExpiryLength: NonNullable<EndpointExtraOptions['dataExpiryLength']>;\n    fetchedAt?: number;\n}\n/** Update state with data\n *\n * @param data\n * @param param1 { schema, key, type, updaters, dataExpiryLength }\n */\ndeclare function createReceive<Payload extends object | string | number | null = object | string | number | null, S extends Schema | undefined = any>(data: Payload, { schema, key, args, updaters, fetchedAt, update, dataExpiryLength, }: Options$1<Payload, S>): ReceiveAction<Payload, S>;\n\ninterface Options<S extends Schema | undefined = any> extends Pick<FetchAction<any, S>['meta'], 'schema' | 'key' | 'options'> {\n    errorExpiryLength: NonNullable<EndpointExtraOptions['errorExpiryLength']>;\n    fetchedAt?: number;\n}\ndeclare function createReceiveError<S extends Schema | undefined = any>(error: Error, { schema, key, options, errorExpiryLength, fetchedAt }: Options<S>): ReceiveAction;\n\n//# sourceMappingURL=index.d.ts.map\n\ndeclare const index_d_createFetch: typeof createFetch;\ndeclare const index_d_createReceive: typeof createReceive;\ndeclare const index_d_createReceiveError: typeof createReceiveError;\ndeclare namespace index_d {\n  export {\n    index_d_createFetch as createFetch,\n    index_d_createReceive as createReceive,\n    index_d_createReceiveError as createReceiveError,\n  };\n}\n\ninterface ConnectionListener {\n    isOnline: () => boolean;\n    addOnlineListener: (handler: () => void) => void;\n    removeOnlineListener: (handler: () => void) => void;\n    addOfflineListener: (handler: () => void) => void;\n    removeOfflineListener: (handler: () => void) => void;\n}\n\ndeclare let DefaultConnectionListener: {\n    new (): ConnectionListener;\n};\n\n/** Properties sent to Subscription constructor */\ninterface SubscriptionInit {\n    schema?: Schema | undefined;\n    fetch: () => Promise<any>;\n    key: string;\n    getState: () => State<unknown>;\n    frequency?: number | undefined;\n}\n/** Interface handling a single resource subscription */\ninterface Subscription {\n    add(frequency?: number): void;\n    remove(frequency?: number): boolean;\n    cleanup(): void;\n}\n/** The static class that constructs Subscription */\ninterface SubscriptionConstructable {\n    new (init: SubscriptionInit, dispatch: Dispatch<any>): Subscription;\n}\n/** Handles subscription actions -> fetch or receive actions\n *\n * Constructor takes a SubscriptionConstructable class to control how\n * subscriptions are handled. (e.g., polling, websockets)\n */\ndeclare class SubscriptionManager<S extends SubscriptionConstructable> implements Manager {\n    protected subscriptions: {\n        [key: string]: InstanceType<S>;\n    };\n    protected readonly Subscription: S;\n    protected middleware: Middleware$1;\n    constructor(Subscription: S);\n    /** Ensures all subscriptions are cleaned up. */\n    cleanup(): void;\n    /** Called when middleware intercepts 'rest-hooks/subscribe' action.\n     *\n     */\n    protected handleSubscribe(action: SubscribeAction, dispatch: Dispatch<any>, getState: () => State<unknown>): void;\n    /** Called when middleware intercepts 'rest-hooks/unsubscribe' action.\n     *\n     */\n    protected handleUnsubscribe(action: UnsubscribeAction, dispatch: Dispatch<any>): void;\n    /** Attaches Manager to store\n     *\n     * Intercepts 'rest-hooks/subscribe'/'rest-hooks/unsubscribe' to register resources that\n     * need to be kept up to date.\n     *\n     * Will possibly dispatch 'rest-hooks/fetch' or 'rest-hooks/receive' to keep resources fresh\n     *\n     */\n    getMiddleware<T extends SubscriptionManager<any>>(this: T): Middleware$1;\n}\n\n/**\n * PollingSubscription keeps a given resource updated by\n * dispatching a fetch at a rate equal to the minimum update\n * interval requested.\n */\ndeclare class PollingSubscription implements Subscription {\n    protected readonly schema: Schema | undefined;\n    protected readonly fetch: () => Promise<any>;\n    protected readonly key: string;\n    protected frequency: number;\n    protected frequencyHistogram: Map<number, number>;\n    protected dispatch: Dispatch<any>;\n    protected getState: () => State<unknown>;\n    protected intervalId?: ReturnType<typeof setInterval>;\n    protected lastIntervalId?: ReturnType<typeof setInterval>;\n    protected startId?: ReturnType<typeof setTimeout>;\n    private connectionListener;\n    constructor({ key, schema, fetch, frequency, getState }: SubscriptionInit, dispatch: Dispatch<any>, connectionListener?: ConnectionListener);\n    /** Subscribe to a frequency */\n    add(frequency?: number): void;\n    /** Unsubscribe from a frequency */\n    remove(frequency?: number): boolean;\n    /** Cleanup means clearing out background interval. */\n    cleanup(): void;\n    /** Trigger request for latest resource */\n    protected update(): void;\n    /** What happens when browser goes offline */\n    protected offlineListener: () => void;\n    /** What happens when browser comes online */\n    protected onlineListener: () => void;\n    /** Run polling process with current frequency\n     *\n     * Will clean up old poll interval on next run\n     */\n    protected run(): void;\n    /** Last fetch time */\n    protected lastFetchTime(): number;\n}\n\ntype DevToolsConfig = {\n    [k: string]: unknown;\n    name: string;\n};\n/** Integrates with https://github.com/zalmoxisus/redux-devtools-extension\n *\n * Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md\n */\ndeclare class DevToolsManager implements Manager {\n    protected middleware: Middleware$1;\n    protected devTools: undefined | any;\n    constructor(config?: DevToolsConfig, skipLogging?: (action: ActionTypes) => boolean);\n    /** Called when initial state is ready */\n    init(state: State<any>): void;\n    /** Ensures all subscriptions are cleaned up. */\n    cleanup(): void;\n    /** Attaches Manager to store\n     *\n     */\n    getMiddleware<T extends DevToolsManager>(this: T): Middleware$1;\n}\n\nexport { AbstractInstanceType, ActionTypes, BodyFromShape, ConnectionListener, Controller, DefaultConnectionListener, DeleteShape, Denormalize, DenormalizeCache, DenormalizeNullable, DevToolsConfig, DevToolsManager, Dispatch, EndpointExtraOptions, EndpointInterface, EndpointUpdateFunction, EntityInterface, ErrorTypes, ExpiryStatus, FetchAction, FetchFunction, FetchShape, GCAction, InvalidateAction, Manager, Middleware$1 as Middleware, MiddlewareAPI$1 as MiddlewareAPI, MutateShape, NetworkError, NetworkManager, Normalize, NormalizeNullable, OptimisticAction, PK, ParamsFromShape, PollingSubscription, ReadShape, ReceiveAction, ReceiveMeta, ReceiveTypes, ResetAction, ResetError, ResolveType, ResponseActions, ResultEntry, ReturnFromShape, Schema, SetShapeParams, State, SubscribeAction, SubscriptionManager, UnknownError, UnsubscribeAction, UpdateFunction, internal_d as __INTERNAL__, actionTypes_d as actionTypes, applyManager, createReducer, initialState, index_d as legacyActions, reducer };\n"}}]);