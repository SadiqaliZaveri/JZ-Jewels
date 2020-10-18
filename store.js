import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'

import loggerMiddleware from './middlewares/logger'
import rootReducer from './reducers'

const useDevToolsComposer = () => {
	return (
		typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && //eslint-disable-line
		process.env.NODE_ENV !== 'production'
	)
}

const configureStore = () => {
	const middlewares = [loggerMiddleware, thunkMiddleware]
	const middlewareEnhancer = applyMiddleware(...middlewares)

	const enhancers = [middlewareEnhancer]

	const composedEnhancers = useDevToolsComposer()
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(...enhancers) //eslint-disable-line
		: compose(...enhancers)

	const store = () => createStore(rootReducer, composedEnhancers)
	const nextReduxWrapper = createWrapper(store, { debug: false })

	return nextReduxWrapper
}

const nextReduxWrapper = configureStore()

export default nextReduxWrapper
