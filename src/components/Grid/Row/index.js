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
  grow,
  height,
  justify,
  flexWrap,
  noGutter,
  onClick,
  width,
  ...rest
}) {
  const renderChildren = (children, noGutter) => {
    //The <Row/> renders it's children, but passes in this.props.noGutter to each child
    return React.Children.map(children, child =>
      React.cloneElement(child, {
        noGutter: noGutter,
      })
    )
  }

  return (
    <RowWrapper
      align={align}
      aria-label={a11yTitle}
      as={as}
      background={background}
      debug={debug}
      flexDirection={direction}
      flexWrap={flexWrap}
      growProp={grow}
      heightProp={height}
      justify={justify}
      onClick={onClick}
      widthProp={width}
      {...rest}
    >
      {renderChildren(children, noGutter)}
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
  /** Applies default max-width */
  constrained: PropTypes.bool,
  /** Enables debug styles. */
  debug: PropTypes.bool,
  /** The orientation to layout the child components in. 'column', 'row', 'column-reverse', 'row-reverse' */
  direction: PropTypes.oneOfType([
    PropTypes.oneOf(['column', 'row', 'column-reverse', 'row-reverse']),
    PropTypes.object,
  ]),
  /** Whether children can wrap if they can't all fit. */
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
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
  /**	Removes the space between children columns. */
  noGutter: PropTypes.bool,
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
  ]),
  ...genericPropTypes,
}

Row.defaultProps = {
  align: 'flex-start',
  constrained: false,
  debug: false,
  direction: 'row',
  flexWrap: 'wrap',
  grow: true,
  noGutter: false,
  ...genericPropsDefaults(),
}

/** @component */
export default Row
