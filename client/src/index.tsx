import React from 'react'
import ReactDOM from 'react-dom'

import { App } from 'containers/app'

import * as serviceWorker from './serviceWorker'

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)

serviceWorker.unregister()
