import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({
  component: Component,
  isLoggedIn,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            strict
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}
