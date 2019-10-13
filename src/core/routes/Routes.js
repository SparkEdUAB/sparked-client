import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from '../component/Auth/Register'
import Login from '../component/Auth/Login'
import AdminRoutes from '../../admin/routes/AdminRoutes'
import Page404 from '../component/utils/404Page'
import Landing from '../component/Landing'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/admin/" component={AdminRoutes} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
