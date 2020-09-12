import { createStore, combineReducers, compose } from 'redux'
import customersReducer from '../reducers/customersReducer'
import viewDetailsReducer from '../reducers/viewDetailsReducer'


const configureStore = () => {

    const store = createStore(combineReducers({
        customers: customersReducer,
        customerDetails: viewDetailsReducer
        
    }),compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      ))

    return store

}

export default configureStore