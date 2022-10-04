import React from 'react'
import styles from './sidebar.module.scss'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

interface SideBarProps {
  isAuthenticated: boolean
}

const SideBar: React.FC<SideBarProps> = ({
  isAuthenticated,
}) => {
  return (
    <div
      className={cn(
        styles['side-bar-wrapper'],
        'd-flex flex-column flex-shrink-0 p-3 bg-light border-top'
      )}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/dashboard" className="nav-link link-dark" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/task1" className="nav-link link-dark">
            Task1
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/test" className="nav-link link-dark">
            Test
          </NavLink>
        </li>
        {isAuthenticated && (
          <li>
            <NavLink to="/dashboard/task2" className="nav-link link-dark">
              Task2
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  )
}

export default SideBar
