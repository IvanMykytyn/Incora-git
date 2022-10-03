import React from 'react'
// react-router-dom
import { Route, Switch } from 'react-router-dom'
// pages
import { NotFound, Task1, Task2, Home, SharedLayout, PrivateRoute } from './pages'

const Router = () => {
  return (
    <Switch>
      <Route path="/dashboard">
        <SharedLayout>
          <Route path="/dashboard/" exact component={Home} />
          <Route path="/dashboard/task1" exact component={Task1} />
        </SharedLayout>
      </Route>

      <Route path="/private">
        <PrivateRoute>
          <SharedLayout>
            <Route path="/private/task2" exact component={Task2} />
          </SharedLayout>
        </PrivateRoute>
      </Route>

      <Route component={NotFound} />
    </Switch>
  )
}

export default Router
