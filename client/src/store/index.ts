import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { recipeReducer } from './recipes/reducer'

const rootReducer = combineReducers({ recipes: recipeReducer })

const devToolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeEnhancers = (process.env.NODE_ENV === 'development' && devToolsCompose) || compose

const middleware = [thunk]

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))
