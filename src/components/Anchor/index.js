import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import StyledAnchor from './StyledAnchor'

const Anchor = ({ a11yTitle, as, color, weight, width, ...rest }) => {
  return (
    <StyledAnchor
      aria-label={a11yTitle}
      as={as}
      colorProp={color}
      weightProp={weight}
      widthProp={width}
      {...rest}
    />
  )
}

// Documentation
Anchor.propTypes = {
  /** The DOM tag or react component to use for the element. */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  /** Content inside component. */
  children: PropTypes.node,
  /** Changes the text color. */
  color: PropTypes.string,
  /** Set text style to italic. */
  italic: PropTypes.bool,
  /** Sets the line-height property. */
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Sets the horizontal alignment. Values: start, end, left, right, center, justify, justify-all, or match-parent. */
  textAlign: PropTypes.oneOfType([
    PropTypes.oneOf([
      'start',
      'end',
      'left',
      'right',
      'center',
      'justify',
      'justify-all',
      'match-parent',
    ]),
    PropTypes.object,
  ]),
  /** Strike through the text. */
  strike: PropTypes.bool,
  /** Sets the font-size property. */
  textSize: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Underlines the text. */
  underline: PropTypes.bool,
  /** Sets the font-weight property. */
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets custom width to the element. */
  width: PropTypes.string,
  ...genericPropTypes,
}

Anchor.defaultProps = {
  as: 'a',
  color: null,
  children: null,
  italic: false,
  lineHeight: null,
  strike: false,
  textAlign: null,
  textSize: null,
  underline: false,
  weight: null,
  width: '100%',
  ...genericPropsDefaults(),
}

/** @component */
export { Anchor }
