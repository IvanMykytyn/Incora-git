import { useState } from 'react'

interface usePaginationReturnTypes {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  previousPage: () => void
  nextPage: () => void
  middlePageNumbers: number[]
  LEFT_LIMIT: number
  RIGHT_LIMIT: number
  numOfPages: number
}

const usePagination = (
  initialPage: number = 0,
  totalItems: number,
  perPage: number,
  maxNumOfPages: number
): usePaginationReturnTypes => {
  const [page, setPage] = useState(initialPage)

  // max number of pages to show (from left and right sides)
  const MAX_NUM_OF_PAGES = maxNumOfPages
  const numOfPages = Math.ceil(totalItems / perPage)

  const LEFT_LIMIT = page - MAX_NUM_OF_PAGES
  const RIGHT_LIMIT = page + MAX_NUM_OF_PAGES

  let middlePageNumbers = Array.from({ length: numOfPages }, (_, i) => i + 1)
  middlePageNumbers = middlePageNumbers.filter((num) => {
    return num <= RIGHT_LIMIT && num >= LEFT_LIMIT
  })

  const previousPage = () => {
    if (page === 1) return setPage(numOfPages)
    setPage(page - 1)
  }

  const nextPage = () => {
    if (page === numOfPages) return setPage(1)
    setPage(page + 1)
  }

  return {
    page,
    middlePageNumbers,
    setPage,
    previousPage,
    nextPage,
    LEFT_LIMIT,
    RIGHT_LIMIT,
    numOfPages,
  }
}

export { usePagination }
