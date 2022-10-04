import React from 'react'

import { useHistory } from 'react-router'

const NotFound = () => {
  const history = useHistory()

  return (
    <div>
      <h1>Page Not Found</h1>
      <button type="button" onClick={() => history.push('/dashboard')}>
        Home Page
      </button>
    </div>
  )
}

export default NotFound
