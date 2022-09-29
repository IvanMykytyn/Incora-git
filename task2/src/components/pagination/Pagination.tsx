import React, { useState } from 'react'
import styles from './pagination.module.scss'
import cn from 'classnames'

// components
import PageBox from './PageBox'

interface PaginationProps {
  activePage?: number
  totalItems: number
  perPage: number
  withActions?: boolean
  classes?: {
    btn?: string
    activeBtn?: string
  }
}

const Pagination: React.FC<PaginationProps> = ({
  activePage = 1,
  totalItems,
  perPage,
  withActions = false,
  classes,
}) => {
  const [currentPage, setPage] = useState(activePage)

  // max number of pages to show (from left and right sides)
  const MAX_NUM_OF_PAGES = 1
  const numOfPages = Math.ceil(totalItems / perPage)

  const LEFT_LIMIT = currentPage - MAX_NUM_OF_PAGES
  const RIGHT_LIMIT = currentPage + MAX_NUM_OF_PAGES

  // set pages
  // TODO optimize for a large number of pages
  let pages = Array.from({ length: numOfPages }, (_, i) => i + 1)
  pages = pages.filter((num) => {
    return num <= RIGHT_LIMIT && num >= LEFT_LIMIT
  })

  const previousPage = () => {
    if (currentPage === 1) return setPage(numOfPages)
    setPage(currentPage - 1)
  }

  const nextPage = () => {
    if (currentPage === numOfPages) return setPage(1)
    setPage(currentPage + 1)
  }

  if (totalItems < perPage) {
    return <></>
  }

  return (
    <div className={cn(styles.pagination)}>
      {/* Previous Button */}
      {withActions && (
        <PageBox
          content={'Previous'}
          onClick={previousPage}
          classes={{ btn: cn(styles.previousBtn), ...classes }}
        />
      )}
      {/* First page and dots from left*/}
      {LEFT_LIMIT > 1 && (
        <>
          <PageBox
            currentPage={currentPage}
            content={1}
            onClick={() => setPage(1)}
            classes={classes}
          />
          {/* hide the dots if the difference between the numbers only 1*/}
          {LEFT_LIMIT - 1 > 1 && (
            <PageBox content={'...'} classes={{ ...classes, disableHover: true }} />
          )}
        </>
      )}
      {/* The current page and pages next to the current one */}
      {pages.map((pageNumber) => {
        return (
          <PageBox
            key={pageNumber}
            currentPage={currentPage}
            content={pageNumber}
            onClick={() => setPage(pageNumber)}
            classes={classes}
          />
        )
      })}
      {/* Dots and last page from right */}
      {RIGHT_LIMIT < numOfPages && (
        <>
          {/* hide the dots if the difference between the numbers only 1*/}
          {numOfPages - RIGHT_LIMIT > 1 && (
            <PageBox content={'...'} classes={{ ...classes, disableHover: true }} />
          )}
          <PageBox
            currentPage={currentPage}
            content={numOfPages}
            onClick={() => setPage(numOfPages)}
            classes={classes}
          />
        </>
      )}
      {/* Next Button */}
      {withActions && (
        <PageBox
          content={'Next'}
          onClick={nextPage}
          classes={{ btn: cn(styles.nextBtn), ...classes }}
        />
      )}
    </div>
  )
}

export default Pagination
