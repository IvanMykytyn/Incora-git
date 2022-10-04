import React from 'react'
import styles from './pagination.module.scss'
import cn from 'classnames'

interface PageBoxPropsBase {
  content: string | number
  classes?: {
    btn?: string
    activeBtn?: string
    disableHover?: boolean
  }
}
interface PageBoxPropsNumber extends PageBoxPropsBase {
  content: number
  currentPage: number
  onClick: () => void
}

interface PageBoxPropsString extends PageBoxPropsBase {
  content: string
  currentPage?: never
  onClick?: () => void
}

type PageBoxProps = PageBoxPropsNumber | PageBoxPropsString

const PageBox: React.FC<PageBoxProps> = ({
  content,
  classes,
  currentPage,
  onClick,
}) => {
  const pageBoxStyles = cn(styles.btn, classes?.btn ?? styles.btnDefaultColors, {
    [classes?.activeBtn ?? styles.btnActiveDefaultColors]: currentPage === content,

    [styles.disableHover]: classes?.disableHover,
    [styles.stringBtn]: typeof content === 'string',
  })

  return (
    <li className={pageBoxStyles} onClick={onClick}>
      {content}
    </li>
  )
}

export default PageBox
