import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

import { store } from '.'

export type RootState = ReturnType<typeof store['getState']>

export type Thunky<R = void, S = RootState, E = void> = ThunkAction<R, S, E, AnyAction>

declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
}
