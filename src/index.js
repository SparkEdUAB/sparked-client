import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ToastProvider } from 'react-toast-notifications'
import Routes from './core/routes/Routes'
import * as serviceWorker from './serviceWorker'
import ApolloClient /* , { gql } */ from 'apollo-boost'

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
// keep the lines below for testing different queries
// client
//   .query({
//     query: gql`
//       {
//         me {
//           name
//           email
//         }
//       }
//     `,
//   })
//   .then(result => console.log(result))

function App() {
  return (
    <ApolloProvider client={client}>
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
