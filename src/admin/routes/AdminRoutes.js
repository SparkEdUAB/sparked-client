import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppWrapper from '../component/AppWrapper'
import CoursesList from '../component/Courses'


export default function AdminRoutes() {
    return (
        <BrowserRouter>
            <AppWrapper>
                <Switch>
                    <Route exact path='/admin/overview' component={() => <h4>Overview</h4>} />
                    <Route exact path='/admin/users' component={() => <h4>Users</h4>} />
                    <Route exact path='/admin/courses' component={CoursesList} />
                    <Route component={() => <h5> Not found page</h5>} />
                </Switch>
            </AppWrapper>
        </BrowserRouter>
    )
}