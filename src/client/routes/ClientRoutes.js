import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Page404 from '../../core/component/utils/404Page'
import PrivateRoute from '../../core/component/Auth/PrivateRoutes'
import Courses from '../component/Courses'
import Header from '../../core/component/Header'
import Units from '../component/Units'

export default function ClientRoutes() {
  const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
      <Header />
      <div
        style={{
          marginTop: 100,
          padding: '1.5em',
        }}
      >
        <Switch>
          <PrivateRoute
            exact
            isLoggedIn={token ? true : false}
            path="/client/courses"
            component={Courses}
          />
          <PrivateRoute
            exact
            isLoggedIn={token ? true : false}
            path="/client/units/:id"
            component={Units}
          />

          <Route component={Page404} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
