import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { retrieveFromLocalStorage, saveToLocalStorage } from '../../local-storage'

import { reducer } from './reducer'



const data = retrieveFromLocalStorage()

export const store = createStore(
    reducer,
    data,
    composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => saveToLocalStorage(store.getState()))