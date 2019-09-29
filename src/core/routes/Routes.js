import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Register from '../component/Auth/Register'
// import SimpleSidebar from '../../admin/component/Sidebar'
import AdminRoutes from '../../admin/routes/AdminRoutes'

function Routes(){
    return(
        <BrowserRouter>
            <Route  path='/admin/' component={AdminRoutes} />
            <Route exact path='/register' component={Register} />
        </BrowserRouter>
    )
}
export default Routes