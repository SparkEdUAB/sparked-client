import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppWrapper from '../component/AppWrapper'
import CoursesList from '../component/Courses'
import UnitsList from '../component/Units'
import PrivateRoute from '../../core/component/Auth/PrivateRoutes'
import UsersList from '../component/Users'

export default function AdminRoutes() {
  const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
      <AppWrapper>
        <Switch>
          <Route
            exact
            path="/admin/overview"
            component={() => <h4>Overview</h4>}
          />
          <PrivateRoute
            exact
            isLoggedIn={token ? true : false}
            path="/admin/users"
            component={UsersList}
          />
          <PrivateRoute
            exact
            isLoggedIn={token ? true : false}
            path="/admin/courses"
            component={CoursesList}
          />
          <PrivateRoute
            exact
            isLoggedIn={token ? true : false}
            path="/admin/course/:id"
            component={UnitsList}
          />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  )
}
