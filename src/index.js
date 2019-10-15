import React, { Suspense, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ToastProvider } from 'react-toast-notifications'
import { Helmet } from 'react-helmet'
import Routes from './core/routes/Routes'
import * as serviceWorker from './serviceWorker'
import ApolloClient /* , { gql } */ from 'apollo-boost'
import './i18n'
import { Spinner } from 'react-rainbow-components'

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_SERVER_ADDRESS}/graphiql`,
  request: operation => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token || '',
      },
    })
  },
})
function App() {
  return (
    <Fragment>
      <Helmet titleTemplate="%s - SparkEd" defaultTitle="SparkEd" />
      <Suspense fallback={<Spinner />}>
        <ApolloProvider client={client}>
          <ToastProvider>
            <Routes />
          </ToastProvider>
        </ApolloProvider>
      </Suspense>
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
