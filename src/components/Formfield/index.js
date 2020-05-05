import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { StyledFormfield, Legend } from './StyledFormfield'

const Formfield = ({ a11yTitle, children, legend, ...rest }) => {
  return (
    <StyledFormfield aria-label={a11yTitle} {...rest}>
      {legend && <Legend>{legend}</Legend>}
      {children}
    </StyledFormfield>
  )
}

// Documentation
Formfield.propTypes = {
  /** Content inside component. */
  children: PropTypes.node,
  /** Creates a legend element that represents a caption for the content. */
  legend: PropTypes.string,
  ...genericPropTypes,
}

Formfield.defaultProps = {
  ...genericPropsDefaults(),
}

/** @component */
export { Formfield }
