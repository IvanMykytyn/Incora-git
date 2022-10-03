import React, { ReactNode } from 'react'
import { Redirect, Route, RouteProps } from 'react-router'

interface PrivateRouteProps extends RouteProps {
  children: ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
  let temp = true;

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return temp === true ? (
          children
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }}
    />
  )
}

export default PrivateRoute
