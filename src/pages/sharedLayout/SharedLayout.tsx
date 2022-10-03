import React, { ReactNode } from 'react'
import styles from './shared-layout.module.scss'
import cn from 'classnames'
import { RouteProps } from 'react-router'

interface SharedLayoutRouteProps {
  children: RouteProps
}

const SharedLayout: React.FC<SharedLayoutRouteProps> = ({ children }) => {
  return (
    <div>
      <h1>SharedLayout</h1>
      <>{children}</>
    </div>
  )
}

export default SharedLayout
