import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AppWrapper from '../component/AppWrapper'


export default function AdminRoutes(){
    return(
        <BrowserRouter>
            <AppWrapper>
                <Route exact path='/admin/overview' component={() => <h4>Overview</h4>} />
                <Route exact path='/admin/users' component={() => <h4>Users</h4>} />
            </AppWrapper>
        </BrowserRouter>
    )
}