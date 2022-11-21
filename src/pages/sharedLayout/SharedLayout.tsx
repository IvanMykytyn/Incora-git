import React, { useState } from 'react'
import styles from './shared-layout.module.scss'
import cn from 'classnames'
import { RouteProps } from 'react-router'
import { Footer, Header, SideBar } from '../../components'

import {
  getIsAuthenticatedFromLocalStorage,
  setIsAuthenticatedToLocalStorage,
} from '../../utils/localStorage'

interface SharedLayoutRouteProps {
  children: RouteProps
}

const SharedLayout: React.FC<SharedLayoutRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticatedState] = useState(
    getIsAuthenticatedFromLocalStorage()
  )

  const setIsAuthenticated = (authenticatedValue: boolean) => {
    setIsAuthenticatedState(authenticatedValue)
    setIsAuthenticatedToLocalStorage(authenticatedValue)
  }

  return (
    <div>
      <Header
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <div className={cn(styles.contentWrapper)}>
        <SideBar isAuthenticated={isAuthenticated} />
        <main className={cn(styles.content)}>
          <>{children}</>
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default SharedLayout
