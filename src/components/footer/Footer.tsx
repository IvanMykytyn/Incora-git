import React from 'react'
import styles from './footer.module.scss'
import cn from 'classnames'

const Footer = () => {
  return (
    <footer
      className={cn(
        styles['footer-wrapper'],
        'd-flex flex-wrap justify-content-between align-items-center py-3 border-top'
      )}>
      <div className="col-md-4">
        {/* logo */}
        <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-muted" href="https://www.instagram.com/">
            {/* {icon} */}
            Ins
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="https://t.me/VanekCheck">
            {/* {icon} */}
            Tel
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="https://github.com/VanekCheck">
            {/* {icon} */}
            Git
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
