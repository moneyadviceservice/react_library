import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { StyledFormfield, Legend } from './StyledFormfield'

const Formfield = ({ a11yTitle, children, legend, legendColor, ...rest }) => {
  return (
    <StyledFormfield aria-label={a11yTitle || legend} {...rest}>
      {legend && <Legend color={legendColor}>{legend}</Legend>}
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
  /** Changes the color of the legend text. */
  legendColor: PropTypes.string,
  ...genericPropTypes,
}

Formfield.defaultProps = {
  ...genericPropsDefaults(),
}

/** @component */
export { Formfield }
