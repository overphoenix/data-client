import React from 'react';

import type { ReducerAction } from './ReducerAction.js';

export interface MiddlewareAPI<
  R extends React.Reducer<any, any> = React.Reducer<any, any>,
> {
  getState: () => React.ReducerState<R>;
  dispatch: Dispatch<R>;
}

export type Dispatch<R extends React.Reducer<any, any>> = (
  action: ReducerAction<R>,
) => Promise<void>;

export type Middleware = <R extends React.Reducer<any, any>>({
  dispatch,
}: MiddlewareAPI<R>) => (next: Dispatch<R>) => Dispatch<R>;
