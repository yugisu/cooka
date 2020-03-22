import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'

import { store } from 'store'

import { App } from 'containers/app'

import * as serviceWorker from './serviceWorker'

const ToRender = () => (
  <BrowserRouter>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </BrowserRouter>
)

const rootNode = document.getElementById('root')

ReactDOM.render(<ToRender />, rootNode)

serviceWorker.unregister()
