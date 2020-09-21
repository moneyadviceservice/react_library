import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import StyledNotFound from './StyledNotFound'

const NotFound = ({ a11yTitle, as, ...rest }) => {
  return <StyledNotFound aria-label={a11yTitle} forwardedAs={as} {...rest} />
}

// Documentation
NotFound.propTypes = {
  /** The DOM tag or react component to use for the element. */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  /** Content inside component. */
  children: PropTypes.node,
  ...genericPropTypes,
}

NotFound.defaultProps = {
  as: 'section',
  children: null,
  ...genericPropsDefaults(),
}
