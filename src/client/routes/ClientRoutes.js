import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from '../../core/component/Auth/PrivateRoutes'
import Courses from '../component/Courses'
import Header from '../../core/component/Header'
import Units from '../component/Units'
import ResourceViewer from '../component/ResourceViewer'

export default function ClientRoutes() {
  const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
      <Header headerTitle={'Client Home '} to="/client/courses" />
      <div
        style={{
          marginTop: 17,
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
            path="/client/units/:id/:topicId"
            component={Units}
          />
          <PrivateRoute
            exact
            isLoggedIn={token ? true : false}
            path="/client/resourceviewer/:topicId/:resourceId"
            component={ResourceViewer}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
