import React from 'react'
import PropTypes from 'prop-types'
import {
  genericPropTypes,
  genericPropsDefaults,
} from '../../../utils/prop-types'
import ColWrapper from './styledCol'

function Col({
  a11yTitle,
  align,
  as,
  background,
  children,
  debug,
  direction,
  fill,
  flexWrap,
  height,
  justify,
  offset,
  onClick,
  sizes,
  width,
  ...rest
}) {
  return (
    <ColWrapper
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
      offsetProp={offset}
      onClick={onClick}
      sizesProp={sizes}
      widthProp={width}
      {...rest}
    >
      {children}
    </ColWrapper>
  )
}

// Documentation
Col.propTypes = {
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
  /**	Sets the number of the offset columns. */
  offSet: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  /** On click event. This triggers specific function. */
  onClick: PropTypes.func,
  /** Sets the number of columns on multiple screen sizes. */
  sizes: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['auto']),
    PropTypes.shape({
      xs: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
      sm: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
      md: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
      lg: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
      xl: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
    }),
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
  ]),
  ...genericPropTypes,
}

Col.defaultProps = {
  align: 'stretch',
  debug: false,
  direction: 'column',
  justify: 'flex-start',
  ...genericPropsDefaults,
}

/** @component */
export default Col
