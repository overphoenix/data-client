(self.webpackChunk=self.webpackChunk||[]).push([[72901],{73118:n=>{n.exports="declare type AbstractInstanceType<T> = T extends {\n  prototype: infer U;\n}\n  ? U\n  : never;\ndeclare type DenormalizeObject<S extends Record<string, any>> = {\n  [K in keyof S]: S[K] extends Schema ? Denormalize<S[K]> : S[K];\n};\ndeclare type DenormalizeNullableObject<S extends Record<string, any>> = {\n  [K in keyof S]: S[K] extends Schema ? DenormalizeNullable<S[K]> : S[K];\n};\ndeclare type NormalizeObject<S extends Record<string, any>> = {\n  [K in keyof S]: S[K] extends Schema ? Normalize<S[K]> : S[K];\n};\ndeclare type NormalizedNullableObject<S extends Record<string, any>> = {\n  [K in keyof S]: S[K] extends Schema ? NormalizeNullable<S[K]> : S[K];\n};\ninterface NestedSchemaClass<T = any> {\n  schema: Record<string, Schema>;\n  prototype: T;\n}\ninterface RecordClass<T = any> extends NestedSchemaClass<T> {\n  fromJS: (...args: any) => AbstractInstanceType<T>;\n}\ndeclare type DenormalizeNullableNestedSchema<S extends NestedSchemaClass> =\n  keyof S['schema'] extends never\n    ? S['prototype']\n    : string extends keyof S['schema']\n    ? S['prototype']\n    : S['prototype'] & {\n        [K in keyof S['schema']]: DenormalizeNullable<S['schema'][K]>;\n      };\ndeclare type DenormalizeReturnType<T> = T extends (\n  input: any,\n  unvisit: any,\n) => [infer R, any, any]\n  ? R\n  : never;\ndeclare type NormalizeReturnType<T> = T extends (...args: any) => infer R\n  ? R\n  : never;\ndeclare type Denormalize<S> = S extends EntityInterface<infer U>\n  ? U\n  : S extends RecordClass\n  ? AbstractInstanceType<S>\n  : S extends SchemaClass\n  ? DenormalizeReturnType<S['denormalize']>\n  : S extends Serializable<infer T>\n  ? T\n  : S extends Array<infer F>\n  ? Denormalize<F>[]\n  : S extends {\n      [K: string]: any;\n    }\n  ? DenormalizeObject<S>\n  : S;\ndeclare type DenormalizeNullable<S> = S extends EntityInterface<any>\n  ? DenormalizeNullableNestedSchema<S> | undefined\n  : S extends RecordClass\n  ? DenormalizeNullableNestedSchema<S>\n  : S extends SchemaClass\n  ? DenormalizeReturnType<S['_denormalizeNullable']>\n  : S extends Serializable<infer T>\n  ? T\n  : S extends Array<infer F>\n  ? Denormalize<F>[] | undefined\n  : S extends {\n      [K: string]: any;\n    }\n  ? DenormalizeNullableObject<S>\n  : S;\ndeclare type Normalize<S> = S extends EntityInterface\n  ? string\n  : S extends RecordClass\n  ? NormalizeObject<S['schema']>\n  : S extends SchemaClass\n  ? NormalizeReturnType<S['normalize']>\n  : S extends Serializable<infer T>\n  ? T\n  : S extends Array<infer F>\n  ? Normalize<F>[]\n  : S extends {\n      [K: string]: any;\n    }\n  ? NormalizeObject<S>\n  : S;\ndeclare type NormalizeNullable<S> = S extends EntityInterface\n  ? string | undefined\n  : S extends RecordClass\n  ? NormalizedNullableObject<S['schema']>\n  : S extends SchemaClass\n  ? NormalizeReturnType<S['_normalizeNullable']>\n  : S extends Serializable<infer T>\n  ? T\n  : S extends Array<infer F>\n  ? Normalize<F>[] | undefined\n  : S extends {\n      [K: string]: any;\n    }\n  ? NormalizedNullableObject<S>\n  : S;\ninterface EntityMap<T = any> {\n  readonly [k: string]: EntityInterface<T>;\n}\n\n/**\n * Marks entity as deleted.\n * @see https://resthooks.io/rest/api/Delete\n */\ndeclare class Delete<\n  E extends EntityInterface & {\n    process: any;\n  },\n> implements SchemaClass$1\n{\n  private _entity;\n  constructor(entity: E);\n  get key(): string;\n  normalize(\n    input: any,\n    parent: any,\n    key: string | undefined,\n    visit: (...args: any) => any,\n    addEntity: (...args: any) => any,\n    visitedEntities: Record<string, any>,\n  ): string | undefined;\n\n  infer(args: any, indexes: any, recurse: any): any;\n  denormalize(\n    id: string,\n    unvisit: UnvisitFunction,\n  ): [denormalized: AbstractInstanceType<E>, found: boolean, suspend: boolean];\n\n  _denormalizeNullable(): [AbstractInstanceType<E> | undefined, boolean, false];\n\n  _normalizeNullable(): string | undefined;\n  merge(existing: any, incoming: any): any;\n  useIncoming(\n    existingMeta: {\n      date: number;\n      fetchedAt: number;\n    },\n    incomingMeta: {\n      date: number;\n      fetchedAt: number;\n    },\n    existing: any,\n    incoming: any,\n  ): boolean;\n}\n\n/**\n * Represents arrays\n * @see https://resthooks.io/rest/api/Array\n */\ndeclare class Array$1<S extends Schema = Schema> implements SchemaClass$1 {\n  constructor(\n    definition: S,\n    schemaAttribute?: S extends EntityMap<infer T>\n      ? keyof T | SchemaFunction<keyof S>\n      : undefined,\n  );\n\n  define(definition: Schema): void;\n  readonly isSingleSchema: S extends EntityMap ? false : true;\n  readonly schema: S;\n  normalize(\n    input: any,\n    parent: any,\n    key: any,\n    visit: (...args: any) => any,\n    addEntity: (...args: any) => any,\n    visitedEntities: Record<string, any>,\n  ): (S extends EntityMap ? UnionResult<S> : Normalize<S>)[];\n\n  _normalizeNullable():\n    | (S extends EntityMap ? UnionResult<S> : Normalize<S>)[]\n    | undefined;\n\n  denormalize(\n    // eslint-disable-next-line @typescript-eslint/ban-types\n    input: {},\n    unvisit: UnvisitFunction,\n  ): [\n    denormalized: (S extends EntityMap<infer T> ? T : Denormalize<S>)[],\n    found: boolean,\n    suspend: boolean,\n  ];\n\n  _denormalizeNullable(): [\n    (S extends EntityMap<infer T> ? T : Denormalize<S>)[] | undefined,\n    false,\n    boolean,\n  ];\n\n  infer(\n    args: readonly any[],\n    indexes: NormalizedIndex,\n    recurse: (...args: any) => any,\n  ): any;\n}\n\n/**\n * Retrieves all entities in cache\n *\n * @see https://resthooks.io/rest/api/AllSchema\n */\ndeclare class All<\n  S extends EntityMap | EntityInterface = EntityMap | EntityInterface,\n> implements SchemaClass$1\n{\n  constructor(\n    definition: S,\n    schemaAttribute?: S extends EntityMap<infer T>\n      ? keyof T | SchemaFunction<keyof S>\n      : undefined,\n  );\n\n  define(definition: Schema): void;\n  readonly isSingleSchema: S extends EntityMap ? false : true;\n  readonly schema: S;\n  normalize(\n    input: any,\n    parent: any,\n    key: any,\n    visit: (...args: any) => any,\n    addEntity: (...args: any) => any,\n    visitedEntities: Record<string, any>,\n  ): (S extends EntityMap ? UnionResult<S> : Normalize<S>)[];\n\n  _normalizeNullable():\n    | (S extends EntityMap ? UnionResult<S> : Normalize<S>)[]\n    | undefined;\n\n  denormalize(\n    // eslint-disable-next-line @typescript-eslint/ban-types\n    input: {},\n    unvisit: UnvisitFunction,\n  ): [\n    denormalized: (S extends EntityMap<infer T> ? T : Denormalize<S>)[],\n    found: boolean,\n    suspend: boolean,\n  ];\n\n  _denormalizeNullable(): [\n    (S extends EntityMap<infer T> ? T : Denormalize<S>)[] | undefined,\n    false,\n    boolean,\n  ];\n\n  infer(\n    args: readonly any[],\n    indexes: NormalizedIndex,\n    recurse: (...args: any) => any,\n    entities: EntityTable,\n  ): any;\n}\n\n/**\n * Represents objects with statically known members\n * @see https://resthooks.io/rest/api/Object\n */\ndeclare class Object$1<O extends Record<string, any> = Record<string, Schema>>\n  implements SchemaClass$1\n{\n  constructor(definition: O);\n  define(definition: Schema): void;\n  readonly schema: O;\n  normalize(\n    input: any,\n    parent: any,\n    key: any,\n    visit: (...args: any) => any,\n    addEntity: (...args: any) => any,\n    visitedEntities: Record<string, any>,\n  ): NormalizeObject<O>;\n\n  _normalizeNullable(): NormalizedNullableObject<O>;\n\n  denormalize(\n    // eslint-disable-next-line @typescript-eslint/ban-types\n    input: {},\n    unvisit: UnvisitFunction,\n  ): [denormalized: DenormalizeObject<O>, found: boolean, suspend: boolean];\n\n  _denormalizeNullable(): [DenormalizeNullableObject<O>, false, boolean];\n\n  infer(\n    args: readonly any[],\n    indexes: NormalizedIndex,\n    recurse: (...args: any) => any,\n  ): any;\n}\n\n/**\n * Represents polymorphic values.\n * @see https://resthooks.io/rest/api/Union\n */\ndeclare class Union<Choices extends EntityMap = any> implements SchemaClass$1 {\n  constructor(\n    definition: Choices,\n    schemaAttribute:\n      | keyof AbstractInstanceType<Choices[keyof Choices]>\n      | SchemaFunction<keyof Choices>,\n  );\n\n  define(definition: Schema): void;\n  inferSchema: SchemaAttributeFunction<Choices[keyof Choices]>;\n  getSchemaAttribute: SchemaFunction<keyof Choices>;\n  readonly schema: Choices;\n  normalize(\n    input: any,\n    parent: any,\n    key: any,\n    visit: (...args: any) => any,\n    addEntity: (...args: any) => any,\n    visitedEntities: Record<string, any>,\n  ): UnionResult<Choices>;\n\n  _normalizeNullable(): UnionResult<Choices> | undefined;\n\n  denormalize(\n    // eslint-disable-next-line @typescript-eslint/ban-types\n    input: {},\n    unvisit: UnvisitFunction,\n  ): [\n    denormalized: AbstractInstanceType<Choices[keyof Choices]>,\n    found: boolean,\n    suspend: boolean,\n  ];\n\n  _denormalizeNullable(): [\n    AbstractInstanceType<Choices[keyof Choices]> | undefined,\n    false,\n    boolean,\n  ];\n\n  infer(\n    args: readonly any[],\n    indexes: NormalizedIndex,\n    recurse: (...args: any) => any,\n  ): any;\n}\n\n/**\n * Represents variably sized objects\n * @see https://resthooks.io/rest/api/Values\n */\ndeclare class Values<Choices extends Schema = any> implements SchemaClass$1 {\n  constructor(\n    definition: Choices,\n    schemaAttribute?: Choices extends EntityMap<infer T>\n      ? keyof T | SchemaFunction<keyof Choices>\n      : undefined,\n  );\n\n  define(definition: Schema): void;\n  readonly isSingleSchema: Choices extends EntityMap ? false : true;\n  inferSchema: SchemaAttributeFunction<\n    Choices extends EntityMap ? Choices[keyof Choices] : Choices\n  >;\n\n  getSchemaAttribute: Choices extends EntityMap\n    ? SchemaFunction<keyof Choices>\n    : false;\n\n  readonly schema: Choices;\n  normalize(\n    input: any,\n    parent: any,\n    key: any,\n    visit: (...args: any) => any,\n    addEntity: (...args: any) => any,\n    visitedEntities: Record<string, any>,\n  ): Record<\n    string,\n    Choices extends EntityMap ? UnionResult<Choices> : Normalize<Choices>\n  >;\n\n  _normalizeNullable():\n    | Record<\n        string,\n        Choices extends EntityMap\n          ? UnionResult<Choices>\n          : NormalizeNullable<Choices>\n      >\n    | undefined;\n\n  denormalize(\n    // eslint-disable-next-line @typescript-eslint/ban-types\n    input: {},\n    unvisit: UnvisitFunction,\n  ): [\n    denormalized: Record<\n      string,\n      Choices extends EntityMap<infer T> ? T : Denormalize<Choices>\n    >,\n    found: boolean,\n    suspend: boolean,\n  ];\n\n  _denormalizeNullable(): [\n    Record<\n      string,\n      Choices extends EntityMap<infer T>\n        ? T | undefined\n        : DenormalizeNullable<Choices>\n    >,\n    false,\n    boolean,\n  ];\n\n  infer(\n    args: readonly any[],\n    indexes: NormalizedIndex,\n    recurse: (...args: any) => any,\n  ): any;\n}\n\ntype StrategyFunction<T> = (value: any, parent: any, key: string) => T;\ntype SchemaFunction<K = string> = (value: any, parent: any, key: string) => K;\ntype MergeFunction = (entityA: any, entityB: any) => any;\ntype SchemaAttributeFunction<S extends Schema> = (\n  value: any,\n  parent: any,\n  key: string,\n) => S;\n\ntype UnionResult<Choices extends EntityMap> = {\n  id: string;\n  schema: keyof Choices;\n};\ninterface SchemaClass$1<T = any, N = T | undefined> extends SchemaSimple<T> {\n  // this is not an actual member, but is needed for the recursive NormalizeNullable<> type algo\n  _normalizeNullable(): any;\n  // this is not an actual member, but is needed for the recursive DenormalizeNullable<> type algo\n  _denormalizeNullable(): [N, boolean, boolean];\n}\n\ntype schema_d_Delete<\n  E extends EntityInterface & {\n    process: any;\n  },\n> = Delete<E>;\ndeclare const schema_d_Delete: typeof Delete;\ntype schema_d_EntityMap<T = any> = EntityMap<T>;\ntype schema_d_UnvisitFunction = UnvisitFunction;\ntype schema_d_All<\n  S extends EntityMap | EntityInterface = EntityMap | EntityInterface,\n> = All<S>;\ndeclare const schema_d_All: typeof All;\ntype schema_d_Union<Choices extends EntityMap = any> = Union<Choices>;\ndeclare const schema_d_Union: typeof Union;\ntype schema_d_Values<Choices extends Schema = any> = Values<Choices>;\ndeclare const schema_d_Values: typeof Values;\ntype schema_d_StrategyFunction<T> = StrategyFunction<T>;\ntype schema_d_SchemaFunction<K = string> = SchemaFunction<K>;\ntype schema_d_MergeFunction = MergeFunction;\ntype schema_d_SchemaAttributeFunction<S extends Schema> =\n  SchemaAttributeFunction<S>;\ntype schema_d_UnionResult<Choices extends EntityMap> = UnionResult<Choices>;\ntype schema_d_EntityInterface<T = any> = EntityInterface<T>;\ndeclare namespace schema_d {\n  export {\n    schema_d_Delete as Delete,\n    schema_d_EntityMap as EntityMap,\n    schema_d_UnvisitFunction as UnvisitFunction,\n    Array$1 as Array,\n    schema_d_All as All,\n    Object$1 as Object,\n    schema_d_Union as Union,\n    schema_d_Values as Values,\n    schema_d_StrategyFunction as StrategyFunction,\n    schema_d_SchemaFunction as SchemaFunction,\n    schema_d_MergeFunction as MergeFunction,\n    schema_d_SchemaAttributeFunction as SchemaAttributeFunction,\n    schema_d_UnionResult as UnionResult,\n    SchemaClass$1 as SchemaClass,\n    schema_d_EntityInterface as EntityInterface,\n  };\n}\n\n/** Get the Params type for a given Shape */\ndeclare type EndpointParam<E> = E extends (first: infer A, ...rest: any) => any\n  ? A\n  : E extends {\n      key: (first: infer A, ...rest: any) => any;\n    }\n  ? A\n  : never;\n/** What the function's promise resolves to */\ndeclare type ResolveType<E extends (...args: any) => any> =\n  ReturnType<E> extends Promise<infer R> ? R : never;\ndeclare type PartialArray<A> = A extends []\n  ? []\n  : A extends [infer F]\n  ? [F] | []\n  : A extends [infer F, ...infer Rest]\n  ? [F] | [F, ...PartialArray<Rest>]\n  : A extends (infer T)[]\n  ? T[]\n  : never;\n\ninterface NetworkError extends Error {\n  status: number;\n  response?: Response;\n}\ninterface UnknownError extends Error {\n  status?: unknown;\n  response?: unknown;\n}\ndeclare type ErrorTypes = NetworkError | UnknownError;\n\ninterface SnapshotInterface {\n  getResponse: <\n    E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => {\n    data: DenormalizeNullable<E['schema']>;\n    expiryStatus: ExpiryStatusInterface;\n    expiresAt: number;\n  };\n  getError: <\n    E extends Pick<EndpointInterface, 'key'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => ErrorTypes | undefined;\n  readonly fetchedAt: number;\n}\ndeclare type ExpiryStatusInterface = 1 | 2 | 3;\n\ndeclare type FetchFunction<A extends readonly any[] = any, R = any> = (\n  ...args: A\n) => Promise<R>;\n/** @deprecated */\ndeclare type SchemaDetail<T> =\n  | EntityInterface<T>\n  | {\n      [K: string]: any;\n    }\n  | SchemaClass$1;\n/** @deprecated */\ndeclare type SchemaList<T> =\n  | EntityInterface<T>[]\n  | {\n      [K: string]: any;\n    }\n  | Schema[]\n  | SchemaClass$1;\ninterface EndpointExtraOptions<F extends FetchFunction = FetchFunction> {\n  /** Default data expiry length, will fall back to NetworkManager default if not defined */\n  readonly dataExpiryLength?: number;\n  /** Default error expiry length, will fall back to NetworkManager default if not defined */\n  readonly errorExpiryLength?: number;\n  /** Poll with at least this frequency in miliseconds */\n  readonly pollFrequency?: number;\n  /** Marks cached resources as invalid if they are stale */\n  readonly invalidIfStale?: boolean;\n  /** Enables optimistic updates for this request - uses return value as assumed network response\n   * @deprecated use https://resthooks.io/docs/api/Endpoint#getoptimisticresponse instead\n   */\n  optimisticUpdate?(...args: Parameters<F>): ResolveType<F>;\n  /** Enables optimistic updates for this request - uses return value as assumed network response */\n  getOptimisticResponse?(\n    snap: SnapshotInterface,\n    ...args: Parameters<F>\n  ): ResolveType<F>;\n  /** Determines whether to throw or fallback to */\n  errorPolicy?(error: any): 'hard' | 'soft' | undefined;\n  /** User-land extra data to send */\n  readonly extra?: any;\n}\n\ndeclare type Schema =\n  | null\n  | string\n  | {\n      [K: string]: any;\n    }\n  | Schema[]\n  | SchemaSimple\n  | Serializable;\ndeclare type Serializable<\n  T extends {\n    toJSON(): string;\n  } = {\n    toJSON(): string;\n  },\n> = {\n  prototype: T;\n};\ninterface SchemaSimple<T = any> {\n  normalize(\n    input: any,\n    parent: any,\n    key: any,\n    visit: (...args: any) => any,\n    addEntity: (...args: any) => any,\n    visitedEntities: Record<string, any>,\n  ): any;\n  denormalize(\n    input: {},\n    unvisit: UnvisitFunction,\n  ): [denormalized: T, found: boolean, suspend: boolean];\n  infer(\n    args: readonly any[],\n    indexes: NormalizedIndex,\n    recurse: (...args: any) => any,\n    entities: EntityTable,\n  ): any;\n}\ninterface SchemaClass<T = any, N = T | undefined> extends SchemaSimple<T> {\n  _normalizeNullable(): any;\n  _denormalizeNullable(): [N, boolean, boolean];\n}\ninterface EntityInterface<T = any> extends SchemaSimple {\n  pk(params: any, parent?: any, key?: string): string | undefined;\n  readonly key: string;\n  merge(existing: any, incoming: any): any;\n  expiresAt?(meta: any, input: any): number;\n  useIncoming?(\n    existingMeta: any,\n    incomingMeta: any,\n    existing: any,\n    incoming: any,\n  ): boolean;\n  indexes?: any;\n  schema: Record<string, Schema>;\n  prototype: T;\n}\ninterface UnvisitFunction {\n  (input: any, schema: any): [any, boolean, boolean];\n  og?: UnvisitFunction;\n  setLocal?: (entity: any) => void;\n}\ninterface NormalizedIndex {\n  readonly [entityKey: string]: {\n    readonly [indexName: string]: {\n      readonly [lookup: string]: string;\n    };\n  };\n}\ninterface EntityTable {\n  [entityKey: string]:\n    | {\n        [pk: string]: unknown;\n      }\n    | undefined;\n}\n/** Defines a networking endpoint */\ninterface EndpointInterface<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n> extends EndpointExtraOptions<F> {\n  (...args: Parameters<F>): ReturnType<F>;\n  key(...args: Parameters<F>): string;\n  readonly sideEffect?: M;\n  readonly schema?: S;\n}\n/** To change values on the server */\ninterface MutateEndpoint<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n> extends EndpointInterface<F, S, true> {\n  sideEffect: true;\n}\n/** For retrieval requests */\ndeclare type ReadEndpoint<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n> = EndpointInterface<F, S, undefined>;\n\n/* eslint-disable @typescript-eslint/ban-types */\n\ninterface EndpointOptions<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = undefined,\n  M extends true | undefined = undefined,\n> extends EndpointExtraOptions<F> {\n  key?: (...args: Parameters<F>) => string;\n  sideEffect?: M;\n  schema?: S;\n  [k: string]: any;\n}\n\ninterface EndpointExtendOptions<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n> extends EndpointOptions<F, S, M> {\n  fetch?: FetchFunction;\n}\n\ntype KeyofEndpointInstance = keyof EndpointInstance<FetchFunction>;\n\ntype ExtendedEndpoint<\n  O extends EndpointExtendOptions<F>,\n  E extends EndpointInstance<\n    FetchFunction,\n    Schema | undefined,\n    true | undefined\n  >,\n  F extends FetchFunction,\n> = EndpointInstance<\n  'fetch' extends keyof O ? Exclude<O['fetch'], undefined> : E['fetch'],\n  'schema' extends keyof O ? O['schema'] : E['schema'],\n  'sideEffect' extends keyof O ? O['sideEffect'] : E['sideEffect']\n> &\n  Omit<O, KeyofEndpointInstance> &\n  Omit<E, KeyofEndpointInstance>;\n\n/**\n * Defines an async data source.\n * @see https://resthooks.io/docs/api/Endpoint\n */\ninterface EndpointInstance<\n  F extends (...args: any) => Promise<any> = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n> extends EndpointInstanceInterface<F, S, M> {\n  extend<\n    E extends EndpointInstance<\n      (...args: any) => Promise<any>,\n      Schema | undefined,\n      true | undefined\n    >,\n    O extends EndpointExtendOptions<F> &\n      Partial<Omit<E, keyof EndpointInstance<FetchFunction>>> &\n      Record<string, unknown>,\n  >(\n    this: E,\n    options: Readonly<O>,\n  ): ExtendedEndpoint<typeof options, E, F>;\n}\n\n/**\n * Defines an async data source.\n * @see https://resthooks.io/docs/api/Endpoint\n */\ninterface EndpointInstanceInterface<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n> extends EndpointInterface<F, S, M> {\n  constructor: EndpointConstructor;\n\n  /**\n   * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.\n   * @param thisArg The object to be used as the this object.\n   * @param argArray A set of arguments to be passed to the function.\n   */\n  apply<E extends FetchFunction>(\n    this: E,\n    thisArg: ThisParameterType<E>,\n    argArray?: Parameters<E>,\n  ): ReturnType<E>;\n\n  /**\n   * Calls a method of an object, substituting another object for the current object.\n   * @param thisArg The object to be used as the current object.\n   * @param argArray A list of arguments to be passed to the method.\n   */\n  call<E extends FetchFunction>(\n    this: E,\n    thisArg: ThisParameterType<E>,\n    ...argArray: Parameters<E>\n  ): ReturnType<E>;\n\n  /**\n   * For a given function, creates a bound function that has the same body as the original function.\n   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.\n   * @param thisArg An object to which the this keyword can refer inside the new function.\n   * @param argArray A list of arguments to be passed to the new function.\n   */\n  bind<E extends FetchFunction, P extends PartialArray<Parameters<E>>>(\n    this: E,\n    thisArg: ThisParameterType<E>,\n    ...args: readonly [...P]\n  ): EndpointInstance<\n    (...args: readonly [...RemoveArray<Parameters<E>, P>]) => ReturnType<E>,\n    S,\n    M\n  > &\n    Omit<E, keyof EndpointInstance<FetchFunction>>;\n\n  /** Returns a string representation of a function. */\n  toString(): string;\n\n  prototype: any;\n  readonly length: number;\n\n  // Non-standard extensions\n  arguments: any;\n  caller: F;\n\n  key(...args: Parameters<F>): string;\n\n  readonly sideEffect: M;\n\n  readonly schema: S;\n\n  fetch: F;\n\n  /** The following is for compatibility with FetchShape */\n  /** @deprecated */\n  readonly type: M extends undefined\n    ? 'read'\n    : IfAny<M, any, IfTypeScriptLooseNull<'read', 'mutate'>>;\n\n  /** @deprecated */\n  getFetchKey(...args: OnlyFirst<Parameters<F>>): string;\n  /** @deprecated */\n  options?: EndpointExtraOptions<F>;\n}\n\ninterface EndpointConstructor {\n  new <\n    F extends (\n      this: EndpointInstance<FetchFunction> & E,\n      params?: any,\n      body?: any,\n    ) => Promise<any>,\n    S extends Schema | undefined = undefined,\n    M extends true | undefined = undefined,\n    E extends Record<string, any> = {},\n  >(\n    fetchFunction: F,\n    options?: EndpointOptions<F, S, M> & E,\n  ): EndpointInstance<F, S, M> & E;\n  readonly prototype: Function;\n}\ndeclare let Endpoint: EndpointConstructor;\n\ninterface ExtendableEndpointConstructor {\n  new <\n    F extends (\n      this: EndpointInstanceInterface<FetchFunction> & E,\n      params?: any,\n      body?: any,\n    ) => Promise<any>,\n    S extends Schema | undefined = undefined,\n    M extends true | undefined = undefined,\n    E extends Record<string, any> = {},\n  >(\n    RestFetch: F,\n    options?: Readonly<EndpointOptions<F, S, M>> & E,\n  ): EndpointInstanceInterface<F, S, M> & E;\n  readonly prototype: Function;\n}\ndeclare let ExtendableEndpoint: ExtendableEndpointConstructor;\n\ntype IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;\ntype IfTypeScriptLooseNull<Y, N> = 1 | undefined extends 1 ? Y : N;\n\ntype OnlyFirst<A extends unknown[]> = A extends [] ? [] : [A[0]];\n\ntype RemoveArray<Orig extends any[], Rem extends any[]> = Rem extends [\n  any,\n  ...infer RestRem,\n]\n  ? Orig extends [any, ...infer RestOrig]\n    ? RemoveArray<RestOrig, RestRem>\n    : never\n  : Orig;\n\n/**\n * Represents data that should be deduped by specifying a primary key.\n * @see https://resthooks.io/docs/api/Entity\n */\ndeclare abstract class Entity {\n  static toJSON(): {\n    name: string;\n    schema: {\n      [k: string]: Schema;\n    };\n    key: string;\n  };\n\n  /** Defines nested entities */\n  static schema: {\n    [k: string]: Schema;\n  };\n\n  /**\n   * A unique identifier for each Entity\n   *\n   * @param [parent] When normalizing, the object which included the entity\n   * @param [key] When normalizing, the key where this entity was found\n   */\n  abstract pk(parent?: any, key?: string): string | undefined;\n  /** Returns the globally unique identifier for the static Entity */\n  static get key(): string;\n  /** Defines indexes to enable lookup by */\n  static indexes?: readonly string[];\n  /** Control how automatic schema validation is handled\n   *\n   * `undefined`: Defaults - throw error in worst offense\n   * 'warn': only ever warn\n   * 'silent': Don't bother with processing at all\n   *\n   * Note: this only applies to non-nested members.\n   */\n  protected static automaticValidation?: 'warn' | 'silent';\n  /**\n   * A unique identifier for each Entity\n   *\n   * @param [value] POJO of the entity or subset used\n   * @param [parent] When normalizing, the object which included the entity\n   * @param [key] When normalizing, the key where this entity was found\n   */\n  static pk<T extends typeof Entity>(\n    this: T,\n    value: Partial<AbstractInstanceType<T>>,\n    parent?: any,\n    key?: string,\n  ): string | undefined;\n\n  /** Return true to merge incoming data; false keeps existing entity */\n  static useIncoming(\n    existingMeta: {\n      date: number;\n      fetchedAt: number;\n    },\n    incomingMeta: {\n      date: number;\n      fetchedAt: number;\n    },\n    existing: any,\n    incoming: any,\n  ): boolean;\n\n  /** Creates new instance copying over defined values of arguments */\n  static merge(existing: any, incoming: any): any;\n  /** Factory method to convert from Plain JS Objects.\n   *\n   * @param [props] Plain Object of properties to assign.\n   * @param [parent] When normalizing, the object which included the record\n   * @param [key] When normalizing, the key where this record was found\n   */\n  static fromJS<T extends typeof Entity>(\n    this: T,\n    props?: Partial<AbstractInstanceType<T>>,\n  ): AbstractInstanceType<T>;\n\n  /** Do any transformations when first receiving input */\n  static process(input: any, parent: any, key: string | undefined): any;\n  static normalize(\n    input: any,\n    parent: any,\n    key: string | undefined,\n    visit: (...args: any) => any,\n    addEntity: (...args: any) => any,\n    visitedEntities: Record<string, any>,\n  ): any;\n\n  protected static validate(processedEntity: any): string | undefined;\n  static infer(\n    args: readonly any[],\n    indexes: NormalizedIndex,\n    recurse: any,\n  ): any;\n\n  static expiresAt(\n    meta: {\n      expiresAt: number;\n      date: number;\n      fetchedAt: number;\n    },\n    input: any,\n  ): number;\n\n  static denormalize<T extends typeof Entity>(\n    this: T,\n    input: any,\n    unvisit: UnvisitFunction,\n  ): [denormalized: AbstractInstanceType<T>, found: boolean, suspend: boolean];\n\n  private static __defaults;\n  /** All instance defaults set */\n  protected static get defaults(): any;\n  /** Used by denormalize to set nested members */\n  protected static set(entity: any, key: string, value: any): void;\n}\n\ndeclare function validateRequired(\n  processedEntity: any,\n  requiredDefaults: Record<string, unknown>,\n): string | undefined;\n\ndeclare const DELETED: unique symbol;\n\n/**\n * Performant lookups by secondary indexes\n * @see https://resthooks.io/docs/api/Index\n */\ndeclare class Index<S extends Schema, P = Readonly<IndexParams<S>>> {\n  schema: S;\n  constructor(schema: S, key?: (params: P) => string);\n  key(params?: P): string;\n  /** The following is for compatibility with FetchShape */\n  getFetchKey: (params: P) => string;\n}\ndeclare type ArrayElement<ArrayType extends unknown[] | readonly unknown[]> =\n  ArrayType[number];\ndeclare type IndexParams<S extends Schema> = S extends {\n  indexes: readonly string[];\n}\n  ? {\n      [K in Extract<\n        ArrayElement<S['indexes']>,\n        keyof AbstractInstanceType<S>\n      >]?: AbstractInstanceType<S>[K];\n    }\n  : Readonly<object>;\n\n/**\n * Programmatic cache reading\n * @see https://resthooks.io/rest/api/Query\n */\ndeclare class Query<S extends SchemaSimple, P extends any[] = []> {\n  schema: S;\n  process: (entries: Denormalize<S>, ...args: P) => Denormalize<S>;\n  readonly sideEffect: undefined;\n  constructor(\n    schema: S,\n    process?: (entries: Denormalize<S>, ...args: P) => Denormalize<S>,\n  );\n\n  key(...args: P): string;\n  protected createQuerySchema(schema: SchemaSimple): any;\n}\n\ndeclare class AbortOptimistic extends Error {}\n\nexport {\n  AbortOptimistic,\n  AbstractInstanceType,\n  ArrayElement,\n  DELETED,\n  Denormalize,\n  DenormalizeNullable,\n  Endpoint,\n  EndpointExtendOptions,\n  EndpointExtraOptions,\n  EndpointInstance,\n  EndpointInstanceInterface,\n  EndpointInterface,\n  EndpointOptions,\n  EndpointParam,\n  Entity,\n  ErrorTypes,\n  ExpiryStatusInterface,\n  ExtendableEndpoint,\n  FetchFunction,\n  Index,\n  IndexParams,\n  KeyofEndpointInstance,\n  MutateEndpoint,\n  NetworkError,\n  Normalize,\n  NormalizeNullable,\n  Query,\n  ReadEndpoint,\n  ResolveType,\n  Schema,\n  SchemaDetail,\n  SchemaList,\n  SnapshotInterface,\n  UnknownError,\n  schema_d as schema,\n  validateRequired,\n};\n"}}]);