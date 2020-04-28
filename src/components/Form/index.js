import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import StyledForm from './StyledForm'

const Form = ({ a11yTitle, as, children, ...rest }) => {
  return (
    <StyledForm aria-label={a11yTitle} forwardedAs={as} {...rest}>
      {children}
    </StyledForm>
  )
}

// Documentation
Form.propTypes = {
  /** Content inside component. */
  children: PropTypes.node,
  ...genericPropTypes,
}

Form.defaultProps = {
  as: 'form',
  ...genericPropsDefaults(),
}

/** @component */
export { Form }
