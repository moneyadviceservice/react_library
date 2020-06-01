import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { StyledAccordion } from './StyledAccordion'

const Accordion = ({ a11yTitle, children, ...rest }) => {
  return (
    <StyledAccordion aria-label={a11yTitle} {...rest}>
      {children}
    </StyledAccordion>
  )
}

// Documentation
Accordion.propTypes = {
  ...genericPropTypes,
}

Accordion.defaultProps = {
  ...genericPropsDefaults(),
}

/** @component */
export { Accordion }
