import React from 'react'
import './header.styles.scss'
interface HeaderProps {
  isAuthenticated: boolean
  setIsAuthenticated: (v: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <header className="header-wrapper p-3 bg-light">
      <div className="container">
        <div className="d-flex justify-content-between">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            Site Logo
          </a>

          <div className="col-md-3 text-end">
            <button
              type="button"
              className="btn btn-outline-primary me-2"
              onClick={() => setIsAuthenticated(!isAuthenticated)}>
              Switch Access
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
