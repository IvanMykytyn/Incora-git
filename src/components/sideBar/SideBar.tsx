import React from 'react'
import './sidebar.styles.scss'
import cn from 'classnames'
import NavLinkItem from '../navLinkItem/NavLinkItem'

interface SideBarProps {
  isAuthenticated: boolean
}

const SideBar: React.FC<SideBarProps> = ({ isAuthenticated }) => {
  const baseUrl = '/dashboard'
  return (
    <div
      className={cn(
        'side-bar-wrapper',
        'd-flex flex-column p-3 bg-light border-top'
      )}>
      <ul className="nav nav-pills flex-column mb-auto">
        <NavLinkItem base={baseUrl} linkText="Home" exact />
        <NavLinkItem base={baseUrl} endpoint="task1" linkText="Task1" />
        <NavLinkItem base={baseUrl} endpoint="test" linkText="Test" />
        {isAuthenticated && (
          <NavLinkItem base={baseUrl} endpoint="task2" linkText="Task2 (Private)" />
        )}
      </ul>
    </div>
  )
}

export default SideBar
