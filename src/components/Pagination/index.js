import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes } from '../../utils/prop-types'
import {
  StyledPagination,
  PaginationButton,
  PaginationCounter,
} from './StyledPagination'

const Pagination = ({ totalPages, currentPage }) => {
  const [page, setPage] = useState(currentPage)
  const [displayPrev, setdisplayPrev] = useState()
  const [displayNext, setdisplayNext] = useState()

  useEffect(() => {
    switch (page) {
      case 1:
        setdisplayPrev(prevState => true)
        break
      case totalPages:
        setdisplayNext(prevState => true)
        break
      default:
        setdisplayNext(prevState => false)
        setdisplayPrev(prevState => false)
    }
  }, [page])

  const prev = () => {
    setPage(page - 1)
  }

  const next = () => {
    setPage((page % totalPages) + 1)
  }
  return (
    <StyledPagination>
      <PaginationButton
        onClick={() => prev()}
        text=" &lt; Prev "
        weight={400}
        displayPrev={displayPrev}
      />

      <PaginationCounter>
        Page {page} of {totalPages}
      </PaginationCounter>
      <PaginationButton
        onClick={() => next()}
        text=" Next &gt;"
        weight={400}
        displayNext={displayNext}
      />
    </StyledPagination>
  )
}

// Documentation
Pagination.propTypes = {
  /** Sets the totalpages props of the component. */
  totalPages: PropTypes.number,
  /** Sets the currentPage props of the component. */
  currentPage: PropTypes.number,
  ...genericPropTypes,
}

/** @component */
export { Pagination }
