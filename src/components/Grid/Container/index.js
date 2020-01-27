import React from 'react'
import PropTypes from 'prop-types'
import {
  genericPropTypes,
  genericPropsDefaults,
} from '../../../utils/prop-types'

import ContainerWrapper from './styledContainer'

function Container({
  a11yTitle,
  as,
  background,
  children,
  debug,
  direction,
  fluid,
}) {
  return (
    <ContainerWrapper
      aria-label={a11yTitle}
      as={as}
      background={background}
      debug={debug}
      flexDirection={direction}
      fluid={fluid}
    >
      {children}
    </ContainerWrapper>
  )
}

// Documentation
Container.propTypes = {
  /** The DOM tag or react component to use for the element. */
  as: PropTypes.oneOf([PropTypes.string, PropTypes.func]),
  /** A color identifier to use for the background or image. */
  background: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  /** Content inside element. */
  children: PropTypes.node,
  /** Enables debug styles. */
  debug: PropTypes.bool,
  /** The orientation to layout the child components in. */
  direction: PropTypes.oneOf([
    'column',
    'row',
    'column-reverse',
    'row-reverse',
  ]),
  /** Makes container full-width across all viewport and device sizes. */
  fluid: PropTypes.bool,
  ...genericPropTypes,
}

Container.defaultProps = {
  as: null,
  background: null,
  children: null,
  debug: false,
  direction: 'row',
  fluid: false,
  ...genericPropsDefaults,
}

/** @component */
export default Container
