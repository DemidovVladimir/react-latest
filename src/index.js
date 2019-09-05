import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import './styles.css'
const App = React.lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
