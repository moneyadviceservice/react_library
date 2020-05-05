import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { StyledFormfield } from './StyledFormfield'

const Formfield = ({ a11yTitle, children, ...rest }) => {
  return (
    <StyledFormfield aria-label={a11yTitle} {...rest}>
      {children}
    </StyledFormfield>
  )
}

// Documentation
Formfield.propTypes = {
  /** Content inside component. */
  children: PropTypes.node,
  ...genericPropTypes,
}

Formfield.defaultProps = {
  ...genericPropsDefaults(),
}

/** @component */
export { Formfield }
