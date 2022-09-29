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
  const pageBoxStyles = cn(
    classes?.btn,
    currentPage === content && classes?.activeBtn,
    classes?.disableHover && styles.disableHover,
    typeof content === 'string' && styles.stringBtn,
    styles.btn,
    currentPage === content && styles.activeBtn
  )

  return (
    <li className={pageBoxStyles} onClick={onClick}>
      {content}
    </li>
  )
}

export default PageBox
