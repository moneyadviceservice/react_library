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
  height,
  width,
  ...rest
}) {
  return (
    <ContainerWrapper
      aria-label={a11yTitle}
      as={as}
      background={background}
      debug={debug}
      flexDirection={direction}
      fluid={fluid}
      heightProp={height}
      widthProp={width}
      {...rest}
    >
      {children}
    </ContainerWrapper>
  )
}

// Documentation
Container.propTypes = {
  /** The DOM tag or react component to use for the element. */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** A color identifier or url to use for the background or image. */
  background: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      color: PropTypes.string,
      opacity: PropTypes.bool,
      position: PropTypes.string,
      image: PropTypes.string,
      repeat: PropTypes.string,
      size: PropTypes.string,
    }),
  ]),
  /** Content inside element. */
  children: PropTypes.node,
  /** Enables debug styles. */
  debug: PropTypes.bool,
  /** The orientation to layout the child components in. 'column', 'row', 'column-reverse', 'row-reverse' */
  direction: PropTypes.oneOfType([
    PropTypes.oneOf(['column', 'row', 'column-reverse', 'row-reverse']),
    PropTypes.object,
  ]),
  /** Makes container full-width across all viewport and device sizes. */
  fluid: PropTypes.bool,
  /** Set a fixed height. 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', any CSS value */
  height: PropTypes.oneOfType([
    PropTypes.oneOf([
      'xxsmall',
      'xsmall',
      'small',
      'medium',
      'large',
      'xlarge',
      'xxlarge',
    ]),
    PropTypes.string,
    PropTypes.object,
  ]),
  /** Set a fixed width. 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', any CSS value  */
  width: PropTypes.oneOfType([
    PropTypes.oneOf([
      'xxsmall',
      'xsmall',
      'small',
      'medium',
      'large',
      'xlarge',
      'xxlarge',
    ]),
    PropTypes.string,
    PropTypes.object,
  ]),
  ...genericPropTypes,
}

Container.defaultProps = {
  debug: false,
  direction: 'column',
  fluid: false,
  ...genericPropsDefaults,
}

/** @component */
export default Container
