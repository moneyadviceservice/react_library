import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { CardContainer } from './StyledCompanyCard'

const CompanyCard = ({ a11yTitle, children, ...rest }) => {
  return (
    <CardContainer aria-label={a11yTitle} {...rest}>
      {children}
    </CardContainer>
  )
}

// Documentation
CompanyCard.propTypes = {
  ...genericPropTypes,
}

CompanyCard.defaultProps = {
  ...genericPropsDefaults(),
}

/** @component */
export { CompanyCard }
