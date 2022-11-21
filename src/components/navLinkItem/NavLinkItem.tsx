import React from 'react'
import './nav-link-item.styles.scss'
import { NavLink } from 'react-router-dom'

interface NavLinkItemProps {
    base: string
    endpoint?: string
    linkText: string
    [x: string]: any
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({base, endpoint, linkText, ...rest}) => {
  return (
    <li className="nav-item">
      <NavLink to={`${base}/${endpoint ?? ''}`} className="nav-link" {...rest}>
        {linkText}
      </NavLink>
    </li>
  )
}

export default NavLinkItem
