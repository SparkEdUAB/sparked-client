import React, { Suspense, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ToastProvider } from 'react-toast-notifications'
import { Helmet } from 'react-helmet'
import Routes from './core/routes/Routes'
import * as serviceWorker from './serviceWorker'
import './i18n'
import { Spinner } from 'react-rainbow-components'

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { ApolloLink, Observable } from 'apollo-link'
import { createUploadLink } from 'apollo-upload-client'

const link = createUploadLink({
  uri: `${process.env.REACT_APP_SERVER_ADDRESS}/graphiql`,
  credentials: 'same-origin',
})

const request = async operation => {
  const token = await localStorage.getItem('token')
  operation.setContext({
    headers: {
      authorization: token || '',
    },
  })
}

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          })
        })
        .catch(observer.error.bind(observer))

      return () => {
        if (handle) handle.unsubscribe()
      }
    })
)

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        // sendToLoggingService(graphQLErrors)
        console.log(graphQLErrors)
      }
      if (networkError) {
        console.log(networkError)

        // logoutUser()
      }
    }),
    requestLink,
    link,
  ]),
  cache: new InMemoryCache(),
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
