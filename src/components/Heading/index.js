import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { StyledHeading } from './StyledHeading'

const Heading = ({ a11yTitle, color, level, weight, width, ...rest }) => {
  return (
    <StyledHeading
      aria-label={a11yTitle}
      as={`h${level}`}
      colorProp={color}
      level={+level}
      weightProp={weight}
      widthProp={width}
      {...rest}
    />
  )
}

// Documentation
Heading.propTypes = {
  /** Content inside component. */
  children: PropTypes.node,
  /** Changes the text color. */
  color: PropTypes.string,
  /** Sets the header tag level */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
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
  /** Sets the font-weight property. */
  weight: PropTypes.number,
  /** Sets custom width to the element. */
  width: PropTypes.string,
  ...genericPropTypes,
}

Heading.defaultProps = {
  color: null,
  children: null,
  level: '1',
  textAlign: null,
  weight: 700,
  width: '100%',
  ...genericPropsDefaults(),
}

/** @component */
export { Heading }
