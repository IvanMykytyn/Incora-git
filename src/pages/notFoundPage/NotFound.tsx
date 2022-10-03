import React from 'react'
import styles from './not-found.module.scss'
import cn from 'classnames'

import { useHistory } from 'react-router'

const NotFound = () => {
    const history = useHistory()

  return (
    <div>
        <h1>Page Not Found</h1>
        <button type='button' onClick={()=> history.goBack()}>Go Back</button>
    </div>
  )
}

export default NotFound