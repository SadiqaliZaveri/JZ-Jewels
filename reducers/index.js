import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

import categories from './categories'
import products from './products'

const combinedReducers = combineReducers({
	categories,
	products,
})

const rootReducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		}
		return nextState
	}

	return combinedReducers(state, action)
}

export default rootReducer
