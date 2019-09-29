import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Register from '../component/Auth/Register'
// import SimpleSidebar from '../../admin/component/Sidebar'
import AdminRoutes from '../../admin/routes/AdminRoutes'

function Routes(){
    return(
        <BrowserRouter>
        <Switch>

            <Route path='/admin/' component={AdminRoutes} />
            <Route exact path='/register' component={Register} />
            {/* <Redirect from='/' to='/admin/overview' /> */}
            <Route component={() => <h5> Not found page</h5>} />
        </Switch>
        </BrowserRouter>
    )
}
export default Routes