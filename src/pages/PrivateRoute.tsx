import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import { getIsAuthenticatedFromLocalStorage } from '../utils/localStorage'

const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const isAuthenticated = getIsAuthenticatedFromLocalStorage()

  if (isAuthenticated) {
    return <Route {...rest} />
  } else {
    return <Redirect to={{ pathname: '/dashboard' }} />
  }
}

export default PrivateRoute
