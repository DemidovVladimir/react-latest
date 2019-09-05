import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import './styles.css'

const App = React.lazy(() => import('./App'));

if (process.env.NODE_ENV === 'development') {
    const axe = require('react-axe');
    axe(React, ReactDOM, 1000)
}

ReactDOM.render(
    <React.StrictMode>
        <DefaultErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <App/>
            </Suspense>
        </DefaultErrorBoundary>
    </React.StrictMode>,
    document.getElementById('app')
)
