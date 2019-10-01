import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppWrapper from '../component/AppWrapper'
import CoursesList from '../component/Courses'
import Page404 from '../../core/component/utils/404Page'
import PrivateRoute from '../../core/component/Auth/PrivateRoutes'

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
          <Route exact path="/admin/users" component={() => <h4>Users</h4>} />
          <PrivateRoute
            exact
            isLoggedIn={token ? true : false}
            path="/admin/courses"
            component={CoursesList}
          />

          <Route component={Page404} />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  )
}
