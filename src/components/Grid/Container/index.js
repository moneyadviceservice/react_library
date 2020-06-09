import React from 'react'
import PropTypes from 'prop-types'
import {
  genericPropTypes,
  genericPropsDefaults,
} from '../../../utils/prop-types'

import ContainerWrapper from './styledContainer'

function Container({
  a11yTitle,
  align,
  as,
  background,
  children,
  debug,
  flexDirection = 'column',
  flexWrap,
  fluid,
  grow,
  height,
  justify,
  width,
  ...rest
}) {
  return (
    <ContainerWrapper
      align={align}
      aria-label={a11yTitle}
      as={as}
      background={background}
      debug={debug}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      fluid={fluid}
      growProp={grow}
      heightProp={height}
      justify={justify}
      widthProp={width}
      {...rest}
    >
      {children}
    </ContainerWrapper>
  )
}

// Documentation
Container.propTypes = {
  /**	Align the contents along the cross axis. 'stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'first baseline', 'last baseline', 'start', 'end', 'self-start', 'self-end' */
  align: PropTypes.oneOfType([
    PropTypes.oneOf([
      'stretch',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'first baseline',
      'last baseline',
      'start',
      'end',
      'self-start',
      'self-end',
    ]),
    PropTypes.object,
  ]),
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
  flexDirection: PropTypes.oneOfType([
    PropTypes.oneOf(['column', 'row', 'column-reverse', 'row-reverse']),
    PropTypes.object,
  ]),
  /** Whether children can wrap if they can't all fit. */
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  /** Makes container full-width across all viewport and device sizes. */
  fluid: PropTypes.bool,
  /** Flex Grow. */
  grow: PropTypes.bool,
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
  /**	Align the contents along the main axis. 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'left', 'right' */
  justify: PropTypes.oneOfType([
    PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
      'start',
      'end',
      'left',
      'right',
    ]),
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
  flexDirection: 'column',
  flexWrap: 'nowrap',
  fluid: false,
  grow: true,
  ...genericPropsDefaults(),
}

/** @component */
export default Container
