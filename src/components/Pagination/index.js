import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import {
  StyledPagination,
  PaginationButton,
  PaginationCounter,
} from './StyledPagination'

const Pagination = ({
  a11yTitle,
  currentLng,
  currentPage,
  nextClick,
  nextUrl,
  prevClick,
  prevUrl,
  totalPages,
  ...rest
}) => {
  return (
    <StyledPagination
      aria-label={a11yTitle}
      forwardedAs="nav"
      direction="row"
      align="center"
      justify="center"
      {...rest}
    >
      <PaginationButton
        text="&lt; Prev"
        weight={400}
        noShow={currentPage === 1}
      />
      <PaginationCounter>
        Page {currentPage} of {totalPages}
      </PaginationCounter>
      <PaginationButton
        text="Next &gt;"
        weight={400}
        noShow={currentPage === totalPages}
      />
    </StyledPagination>
  )
}

// Documentation
Pagination.propTypes = {
  /** Current Language Value */
  currentLng: PropTypes.oneOf(['en', 'cy']),
  /** Sets the currentPage being displayed. */
  currentPage: PropTypes.number,
  /** Function to be triggered by the next button. */
  nextClick: PropTypes.func,
  /** Sets a url on the next button. Button will render as an anchor. */
  nextUrl: PropTypes.string,
  /** Function to be triggered by the prev button. */
  prevClick: PropTypes.func,
  /** Sets a url on the prev button. Button will render as an anchor. */
  prevUrl: PropTypes.string,
  /** Sets the total pages to display. */
  totalPages: PropTypes.number,
  ...genericPropTypes,
}

Pagination.defaultProps = {
  currentLng: 'en',
  ...genericPropsDefaults(),
}

/** @component */
export { Pagination }
