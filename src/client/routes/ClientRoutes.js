import React from 'react'
<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from 'react-router-dom'
=======
import { BrowserRouter, Switch } from 'react-router-dom'
>>>>>>> ddc65875adcadc40c289d8f3f30178753bb2435b
import PrivateRoute from '../../core/component/Auth/PrivateRoutes'
import Courses from '../component/Courses'
import Header from '../../core/component/Header'
import Units from '../component/Units'
import FileUploads from '../component/Uploads'

export default function ClientRoutes() {
  const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
      <Header headerTitle={'Client Routes'} />
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
          <PrivateRoute
            exact
            isLoggedIn={token ? true : false}
            path="/client/units/:id/:topic"
            component={Units}
          />
          <Route exact path="/client/uploads" component={FileUploads} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
