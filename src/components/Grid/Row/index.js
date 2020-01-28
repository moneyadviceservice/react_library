import React from 'react'
import PropTypes from 'prop-types'
import {
  genericPropTypes,
  genericPropsDefaults,
} from '../../../utils/prop-types'
import RowWrapper from './styledRow'

function Row({
  a11yTitle,
  align,
  as,
  background,
  children,
  debug,
  direction,
  fill,
  height,
  justify,
  flexWrap,
  onClick,
  width,
  ...rest
}) {
  return (
    <RowWrapper
      align={align}
      aria-label={a11yTitle}
      as={as}
      background={background}
      debug={debug}
      fillProp={fill}
      flexDirection={direction}
      flexWrap={flexWrap}
      heightProp={height}
      justify={justify}
      onClick={onClick}
      widthProp={width}
      {...rest}
    >
      {children}
    </RowWrapper>
  )
}

// Documentation
Row.propTypes = {
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
  direction: PropTypes.oneOfType([
    PropTypes.oneOf(['column', 'row', 'column-reverse', 'row-reverse']),
    PropTypes.object,
  ]),
  /** Whether the width and/or height should fill the container. 'horizontal', 'vertical' */
  fill: PropTypes.oneOfType([
    PropTypes.oneOf(['horizontal', 'vertical']),
    PropTypes.bool,
  ]),
  /** Whether children can wrap if they can't all fit. */
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
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
  /** On click event. This triggers specific function. */
  onClick: PropTypes.func,
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

Row.defaultProps = {
  align: 'stretch',
  debug: false,
  direction: 'row',
  flexWrap: 'wrap',
  justify: 'flex-start',
  ...genericPropsDefaults,
}

/** @component */
export default Row
