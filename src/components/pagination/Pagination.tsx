import React from 'react'
import styles from './pagination.module.scss'
import cn from 'classnames'

// components
import PageBox from './PageBox'
import { usePagination } from '../../utils/customHooks/usePagination'

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
  const maxNumOfPages = 2
  const {
    page,
    setPage,
    previousPage,
    nextPage,
    middlePageNumbers,
    numOfPages,
    LEFT_LIMIT,
    RIGHT_LIMIT,
  } = usePagination(activePage, totalItems, perPage, maxNumOfPages)

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
            currentPage={page}
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
      {middlePageNumbers.map((pageNumber) => {
        return (
          <PageBox
            key={pageNumber}
            currentPage={page}
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
            currentPage={page}
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
