import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from '../component/Auth/Register'
import AdminRoutes from '../../admin/routes/AdminRoutes'
import Page404 from '../component/utils/404Page'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/admin/' component={AdminRoutes} />
                <Route exact path='/register' component={Register} />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes