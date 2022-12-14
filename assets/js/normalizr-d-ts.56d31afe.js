(self.webpackChunk=self.webpackChunk||[]).push([[12192],{14991:e=>{e.exports="type Schema = null | string | {\n    [K: string]: any;\n} | Schema[] | SchemaSimple | Serializable;\ntype Serializable<T extends {\n    toJSON(): string;\n} = {\n    toJSON(): string;\n}> = {\n    prototype: T;\n};\ninterface SchemaSimple<T = any> {\n    normalize(input: any, parent: any, key: any, visit: (...args: any) => any, addEntity: (...args: any) => any, visitedEntities: Record<string, any>): any;\n    denormalize(input: {}, unvisit: UnvisitFunction): [denormalized: T, found: boolean, suspend: boolean];\n    infer(args: readonly any[], indexes: NormalizedIndex, recurse: (...args: any) => any, entities: EntityTable): any;\n}\ninterface SchemaClass<T = any, N = T | undefined> extends SchemaSimple<T> {\n    _normalizeNullable(): any;\n    _denormalizeNullable(): [N, boolean, boolean];\n}\ninterface EntityInterface<T = any> extends SchemaSimple {\n    pk(params: any, parent?: any, key?: string): string | undefined;\n    readonly key: string;\n    merge(existing: any, incoming: any): any;\n    expiresAt?(meta: any, input: any): number;\n    useIncoming?(existingMeta: any, incomingMeta: any, existing: any, incoming: any): boolean;\n    indexes?: any;\n    schema: Record<string, Schema>;\n    prototype: T;\n}\ninterface UnvisitFunction {\n    (input: any, schema: any): [any, boolean, boolean];\n    og?: UnvisitFunction;\n    setLocal?: (entity: any) => void;\n}\ninterface NormalizedIndex {\n    readonly [entityKey: string]: {\n        readonly [indexName: string]: {\n            readonly [lookup: string]: string;\n        };\n    };\n}\ninterface EntityTable {\n    [entityKey: string]: {\n        [pk: string]: unknown;\n    } | undefined;\n}\n\n/** Link in a chain */\ndeclare class Link<K extends object, V> {\n    children: WeakMap<K, Link<K, V>>;\n    value?: V;\n}\n/** Maps from a list of objects (referentially) to any value\n *\n * If *any* members of the list get claned up, so does that key/value pair get removed.\n */\ndeclare class WeakListMap<K extends object, V> {\n    readonly first: WeakMap<K, Link<K, V>>;\n    delete(key: K[]): boolean;\n    get(key: K[]): V | undefined;\n    has(key: K[]): boolean;\n    set(key: K[], value: V): WeakListMap<K, V>;\n    protected traverse(key: K[]): Link<K, V> | undefined;\n}\n\ntype AbstractInstanceType<T> = T extends {\n    prototype: infer U;\n} ? U : never;\ntype DenormalizeObject<S extends Record<string, any>> = {\n    [K in keyof S]: S[K] extends Schema ? Denormalize$1<S[K]> : S[K];\n};\ntype DenormalizeNullableObject<S extends Record<string, any>> = {\n    [K in keyof S]: S[K] extends Schema ? DenormalizeNullable$1<S[K]> : S[K];\n};\ntype NormalizeObject<S extends Record<string, any>> = {\n    [K in keyof S]: S[K] extends Schema ? Normalize$1<S[K]> : S[K];\n};\ntype NormalizedNullableObject<S extends Record<string, any>> = {\n    [K in keyof S]: S[K] extends Schema ? NormalizeNullable$1<S[K]> : S[K];\n};\ninterface NestedSchemaClass<T = any> {\n    schema: Record<string, Schema>;\n    prototype: T;\n}\ninterface RecordClass<T = any> extends NestedSchemaClass<T> {\n    fromJS: (...args: any) => AbstractInstanceType<T>;\n}\ninterface DenormalizeCache {\n    entities: {\n        [key: string]: {\n            [pk: string]: WeakListMap<object, EntityInterface>;\n        };\n    };\n    results: {\n        [key: string]: WeakListMap<object, any>;\n    };\n}\ntype DenormalizeNullableNestedSchema<S extends NestedSchemaClass> = keyof S['schema'] extends never ? S['prototype'] : string extends keyof S['schema'] ? S['prototype'] : S['prototype'];\ntype DenormalizeReturnType<T> = T extends (input: any, unvisit: any) => [infer R, any, any] ? R : never;\ntype NormalizeReturnType<T> = T extends (...args: any) => infer R ? R : never;\ntype Denormalize$1<S> = S extends EntityInterface<infer U> ? U : S extends RecordClass ? AbstractInstanceType<S> : S extends SchemaClass ? DenormalizeReturnType<S['denormalize']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Denormalize$1<F>[] : S extends {\n    [K: string]: any;\n} ? DenormalizeObject<S> : S;\ntype DenormalizeNullable$1<S> = S extends EntityInterface<any> ? DenormalizeNullableNestedSchema<S> | undefined : S extends RecordClass ? DenormalizeNullableNestedSchema<S> : S extends SchemaClass ? DenormalizeReturnType<S['_denormalizeNullable']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Denormalize$1<F>[] | undefined : S extends {\n    [K: string]: any;\n} ? DenormalizeNullableObject<S> : S;\ntype Normalize$1<S> = S extends EntityInterface ? string : S extends RecordClass ? NormalizeObject<S['schema']> : S extends SchemaClass ? NormalizeReturnType<S['normalize']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Normalize$1<F>[] : S extends {\n    [K: string]: any;\n} ? NormalizeObject<S> : S;\ntype NormalizeNullable$1<S> = S extends EntityInterface ? string | undefined : S extends RecordClass ? NormalizedNullableObject<S['schema']> : S extends SchemaClass ? NormalizeReturnType<S['_normalizeNullable']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Normalize$1<F>[] | undefined : S extends {\n    [K: string]: any;\n} ? NormalizedNullableObject<S> : S;\ntype NormalizedSchema<E, R> = {\n    entities: E;\n    result: R;\n    indexes: NormalizedIndex;\n    entityMeta: {\n        readonly [entityKey: string]: {\n            readonly [pk: string]: {\n                readonly date: number;\n                readonly expiresAt: number;\n                readonly fetchedAt: number;\n            };\n        };\n    };\n};\n\ntype DenormalizeReturn<S extends Schema> = [\n    denormalized: Denormalize$1<S>,\n    found: true,\n    deleted: false,\n    resolvedEntities: Record<string, Record<string, any>>\n] | [\n    denormalized: DenormalizeNullable$1<S>,\n    found: boolean,\n    deleted: true,\n    resolvedEntities: Record<string, Record<string, any>>\n] | [\n    denormalized: DenormalizeNullable$1<S>,\n    found: false,\n    deleted: boolean,\n    resolvedEntities: Record<string, Record<string, any>>\n];\ndeclare const denormalize: <S extends Schema>(input: unknown, schema: S | undefined, entities: any, entityCache?: DenormalizeCache['entities'], resultCache?: WeakListMap<object, any>) => DenormalizeReturn<S>;\n\ndeclare function isEntity(schema: Schema): schema is EntityInterface;\n\ndeclare const normalize: <S extends Schema = Schema, E extends Record<string, Record<string, any> | undefined> = Record<string, Record<string, any>>, R = NormalizeNullable$1<S>>(input: any, schema?: S | undefined, existingEntities?: Readonly<E>, existingIndexes?: Readonly<NormalizedIndex>, existingEntityMeta?: {\n    readonly [entityKey: string]: {\n        readonly [pk: string]: {\n            readonly date: number;\n            readonly expiresAt: number;\n            readonly fetchedAt: number;\n        };\n    };\n}, meta?: {\n    expiresAt: number;\n    date: number;\n    fetchedAt?: number;\n}) => NormalizedSchema<E, R>;\n\n/**\n * Build the result parameter to denormalize from schema alone.\n * Tries to compute the entity ids from params.\n */\ndeclare function inferResults<S extends Schema>(schema: S, args: any[], indexes: NormalizedIndex, entities?: EntityTable): NormalizeNullable$1<S>;\n\ndeclare const DELETED: unique symbol;\n\ninterface NetworkError extends Error {\n    status: number;\n    response?: Response;\n}\ninterface UnknownError extends Error {\n    status?: unknown;\n    response?: unknown;\n}\ntype ErrorTypes = NetworkError | UnknownError;\n\n/** What the function's promise resolves to */\ntype ResolveType<E extends (...args: any) => any> = ReturnType<E> extends Promise<infer R> ? R : never;\n/** Fallback to schema if fetch function isn't defined */\ntype InferReturn<F extends FetchFunction, S extends Schema | undefined> = S extends undefined ? ReturnType<F> : ReturnType<F> extends unknown ? Promise<Denormalize$1<S>> : ReturnType<F>;\n\ninterface IndexInterface<S extends Schema = Schema, P = object> {\n    key(params?: P): string;\n    readonly schema: S;\n}\ntype ArrayElement<ArrayType extends unknown[] | readonly unknown[]> = ArrayType[number];\ntype IndexParams<S extends Schema> = S extends {\n    indexes: readonly string[];\n} ? {\n    [K in Extract<ArrayElement<S['indexes']>, keyof AbstractInstanceType<S>>]?: AbstractInstanceType<S>[K];\n} : Readonly<object>;\n\ndeclare const enum ExpiryStatus {\n    Invalid = 1,\n    InvalidIfStale = 2,\n    Valid = 3\n}\ntype ExpiryStatusInterface = 1 | 2 | 3;\n\ninterface SnapshotInterface {\n    getResponse: <E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>, Args extends readonly [...Parameters<E['key']>]>(endpoint: E, ...args: Args) => {\n        data: any;\n        expiryStatus: ExpiryStatusInterface;\n        expiresAt: number;\n    };\n    getError: <E extends Pick<EndpointInterface, 'key'>, Args extends readonly [...Parameters<E['key']>]>(endpoint: E, ...args: Args) => ErrorTypes | undefined;\n    readonly fetchedAt: number;\n}\n\n/** Defines a networking endpoint */\ninterface EndpointInterface<F extends FetchFunction = FetchFunction, S extends Schema | undefined = Schema | undefined, M extends true | undefined = true | undefined> extends EndpointExtraOptions<F> {\n    (...args: Parameters<F>): InferReturn<F, S>;\n    key(...args: Parameters<F>): string;\n    readonly sideEffect?: M;\n    readonly schema?: S;\n}\ninterface EndpointExtraOptions<F extends FetchFunction = FetchFunction> {\n    /** Default data expiry length, will fall back to NetworkManager default if not defined */\n    readonly dataExpiryLength?: number;\n    /** Default error expiry length, will fall back to NetworkManager default if not defined */\n    readonly errorExpiryLength?: number;\n    /** Poll with at least this frequency in miliseconds */\n    readonly pollFrequency?: number;\n    /** Marks cached resources as invalid if they are stale */\n    readonly invalidIfStale?: boolean;\n    /** Enables optimistic updates for this request - uses return value as assumed network response\n     * @deprecated use https://resthooks.io/docs/api/Endpoint#getoptimisticresponse instead\n     */\n    optimisticUpdate?(...args: Parameters<F>): ResolveType<F>;\n    /** Enables optimistic updates for this request - uses return value as assumed network response */\n    getOptimisticResponse?(snap: SnapshotInterface, ...args: Parameters<F>): ResolveType<F>;\n    /** Determines whether to throw or fallback to */\n    errorPolicy?(error: any): 'hard' | 'soft' | undefined;\n    /** User-land extra data to send */\n    readonly extra?: any;\n}\ntype OptimisticUpdateParams<SourceSchema extends Schema | undefined, Dest extends EndpointInterface<FetchFunction, Schema, any>> = [\n    Dest,\n    Parameters<Dest>[0],\n    UpdateFunction<SourceSchema, Exclude<Dest['schema'], undefined>>\n];\ntype UpdateFunction<SourceSchema extends Schema | undefined, DestSchema extends Schema> = (sourceResults: Normalize$1<SourceSchema>, destResults: Normalize$1<DestSchema> | undefined) => Normalize$1<DestSchema>;\n/** To change values on the server */\ninterface MutateEndpoint<F extends FetchFunction = FetchFunction, S extends Schema | undefined = Schema | undefined> extends EndpointInterface<F, S, true> {\n    sideEffect: true;\n}\n/** For retrieval requests */\ntype ReadEndpoint<F extends FetchFunction = FetchFunction, S extends Schema | undefined = Schema | undefined> = EndpointInterface<F, S, undefined>;\n\ntype FetchFunction<A extends readonly any[] = any, R = any> = (...args: A) => Promise<R>;\n\n/** This file exists to keep compatibility with SchemaDetail, and SchemaList type hacks\n * Support can be dropped once @rest-hooks/rest@5 support is dropped\n */\n\ntype Denormalize<S> = Extract<S, EntityInterface> extends never ? Extract<S, EntityInterface[]> extends never ? Denormalize$1<S> : Denormalize$1<Extract<S, EntityInterface[]>> : Denormalize$1<Extract<S, EntityInterface>>;\ntype DenormalizeNullable<S> = Extract<S, EntityInterface> extends never ? Extract<S, EntityInterface[]> extends never ? DenormalizeNullable$1<S> : DenormalizeNullable$1<Extract<S, EntityInterface[]>> : DenormalizeNullable$1<Extract<S, EntityInterface>>;\ntype Normalize<S> = Extract<S, EntityInterface> extends never ? Extract<S, EntityInterface[]> extends never ? Normalize$1<S> : Normalize$1<Extract<S, EntityInterface[]>> : Normalize$1<Extract<S, EntityInterface>>;\ntype NormalizeNullable<S> = Extract<S, EntityInterface> extends never ? Extract<S, EntityInterface[]> extends never ? NormalizeNullable$1<S> : NormalizeNullable$1<Extract<S, EntityInterface[]>> : NormalizeNullable$1<Extract<S, EntityInterface>>;\n\nexport { AbstractInstanceType, ArrayElement, DELETED, Denormalize, DenormalizeCache, DenormalizeNullable, DenormalizeReturnType, EndpointExtraOptions, EndpointInterface, EntityInterface, EntityTable, ErrorTypes, ExpiryStatus, ExpiryStatusInterface, FetchFunction, IndexInterface, IndexParams, InferReturn, MutateEndpoint, NetworkError, Normalize, NormalizeNullable, NormalizeReturnType, NormalizedIndex, NormalizedSchema, OptimisticUpdateParams, ReadEndpoint, ResolveType, Schema, SchemaClass, SchemaSimple, Serializable, SnapshotInterface, UnknownError, UnvisitFunction, UpdateFunction, WeakListMap, denormalize, inferResults, isEntity, normalize };\n"}}]);