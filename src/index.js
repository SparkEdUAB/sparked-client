import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import Routes from './core/routes/Routes'
import * as serviceWorker from './serviceWorker'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphiql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
