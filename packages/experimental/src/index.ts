export { Controller, useController } from '@rest-hooks/react';
export { default as useSubscription } from './hooks/useSubscription.js';
export { default as RestEndpoint } from './rest/RestEndpoint.js';
export * from './rest/RestEndpoint.js';
export { default as createResource } from './rest/createResource.js';
export type { Resource } from './rest/createResource.js';
export { default as paginationUpdate } from './rest/paginationUpdate.js';
import { schema, Entity, EndpointExtraOptions } from '@rest-hooks/endpoint';
const Delete = schema.Delete;
export { Delete, Entity };
export type { EndpointExtraOptions };
export * from './rest/types.js';
