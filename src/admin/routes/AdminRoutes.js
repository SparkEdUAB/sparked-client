import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from '../component/Sidebar'


export default function AdminRoutes(){
    return(
        <BrowserRouter>
            <Route path='/admin/overview' component={Sidebar} />
        </BrowserRouter>
    )
}