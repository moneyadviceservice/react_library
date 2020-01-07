import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import config, { DIMENSIONS } from '../config'

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 0 auto;
  flex-wrap: wrap;
  
  ${() => css`
    ${DIMENSIONS.map(
      d =>
        config().container[d] &&
        config().media[d]`
      margin-left: -${config().gutterWidth[d] / 2}rem;
      margin-right: -${config().gutterWidth[d] / 2}rem;
    `
    )}
  `}

  ${p =>
    p.reverse &&
    css`
      ${Array.isArray(p.reverse)
        ? DIMENSIONS.map(
            d =>
              config().breakpoints[d] &&
              config().media[d]`
        flex-direction: ${p.reverse.indexOf(d) !== -1 ? 'row-reverse' : 'row'};
      `
          )
        : 'flex-direction: row-reverse;'}
    `}

  ${p =>
    p.align &&
    css`
      ${typeof p.align === 'object'
        ? DIMENSIONS.map(
            d =>
              config().breakpoints[d] &&
              config().media[d]`${p.align[d] && `align-items: ${p.align[d]}`}`
          )
        : `align-items: ${p.align};`}
    `}
  
  ${p =>
    p.justify &&
    css`
      ${typeof p.justify === 'object'
        ? DIMENSIONS.map(
            d =>
              config().breakpoints[d] &&
              config().media[d]`${p.justify[d] &&
                `justify-content: ${p.justify[d]}`}`
          )
        : `justify-content: ${p.justify};`}
    `}

  ${({ debug }) =>
    debug &&
    css`
      background-color: #5901ad40;
      outline: #fff solid 1px;
    `}
`

// Documentation
Row.propTypes = {
  /**	reverses the direction of the row */
  reverse: PropTypes.bool,
  /**	align the content vertically */
  align: PropTypes.string,
  /**	align the content horizontally */
  justify: PropTypes.string,
  /**	content */
  children: PropTypes.node,
  /** enables debug */
  debug: PropTypes.bool,
}

Row.defaultProps = {
  reverse: false,
  children: null,
  debug: false,
  align: 'stretch',
  justify: 'flex-start',
}

/** @component */
export default Row
