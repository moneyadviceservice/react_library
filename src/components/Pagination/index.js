import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import {
  StyledPagination,
  PaginationButton,
  PaginationCounter,
} from './StyledPagination'
// translations
import LocaleEn from './pagination_en.json'
import LocaleCy from './pagination_cy.json'

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
  const i18n = currentLng === 'cy' ? LocaleCy : LocaleEn

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
        text={`\u003C ${i18n.previous}`}
        weight={400}
        href={prevUrl}
        onClick={prevClick}
        noShow={currentPage === 1}
      />
      <PaginationCounter>
        {`${i18n.page} ${currentPage} ${i18n.of} ${totalPages}`}
      </PaginationCounter>
      <PaginationButton
        text={`${i18n.next} \u003E`}
        weight={400}
        href={nextUrl}
        onClick={nextClick}
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
