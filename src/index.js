import React from 'react';
import ReactDom from 'react-dom'
import App from './App'
import configureStroe from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStroe()
console.log('store initial state', store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

const jsx = (
    <Provider store= { store }>
        <App/>
    </Provider>
)

ReactDom.render(jsx, document.getElementById('root'))


