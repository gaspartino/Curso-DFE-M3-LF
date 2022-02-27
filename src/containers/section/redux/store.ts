import { createStore } from 'redux'
import { SearchReducer } from './searchReducer'

export const store = createStore(SearchReducer)