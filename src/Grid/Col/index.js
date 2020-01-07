import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import config, { DIMENSIONS, BASE_CONF } from '../config'

const Col = styled.div`
  box-sizing: border-box;
  flex: 1 0 auto;
  max-width: 100%;
  display: flex;

  ${p =>
    !p.noGutter &&
    css`
      ${DIMENSIONS.map(
        d =>
          config().breakpoints[d] &&
          config().media[d]`
      padding-right: ${config().gutterWidth[d] / 2}rem;
      padding-left: ${config().gutterWidth[d] / 2}rem;
    `
      )}
    `}

  ${p => css`
    ${DIMENSIONS.map(
      d =>
        BASE_CONF.breakpoints[d] &&
        BASE_CONF.media[d]`
      ${p[d] &&
        `
        flex: 1 1 ${(p[d] / BASE_CONF.columns[d]) * 100}%;
        max-width: ${(p[d] / BASE_CONF.columns[d]) * 100}%;
      `}
    `
    )}
  `}

  ${p =>
    p.offset &&
    css`
      ${DIMENSIONS.map(
        d =>
          config().breakpoints[d] &&
          config().media[d]`
    ${
      typeof p.offset === 'object'
        ? p.offset[d] !== undefined &&
          `margin-left: ${
            p.offset[d] > 0 ? (p.offset[d] / config().columns[d]) * 100 : 0
          }%`
        : `margin-left: ${(p.offset / config().columns['xs']) * 100}%`
    };
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
        flex-direction: ${
          p.reverse.indexOf(d) !== -1 ? 'column-reverse' : 'column'
        };
      `
          )
        : 'flex-direction: column-reverse;'}
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
const numberOrString = PropTypes.oneOfType([PropTypes.string, PropTypes.number])

const stringOrObject = PropTypes.oneOfType([PropTypes.string, PropTypes.object])

const numberOrObject = PropTypes.oneOfType([PropTypes.bool, PropTypes.object])

const boolOrArray = PropTypes.oneOfType([PropTypes.bool, PropTypes.array])

Col.propTypes = {
  /** sets the number of columns on screens xs */
  xs: numberOrString,
  /** sets the number of columns on screens sm */
  sm: numberOrString,
  /** sets the number of columns on screens md */
  md: numberOrString,
  /** sets the number of columns on screens lg */
  lg: numberOrString,
  /** sets the number of columns on screens xl */
  xl: numberOrString,
  /** align the content vertically */
  align: stringOrObject,
  /**	align the content horizontally */
  justify: stringOrObject,
  /**	sets the number of the offset columns */
  offSet: numberOrObject,
  /**	reverses the direction of the column */
  reverse: boolOrArray,
  /**	removes the gutter */
  noGutter: PropTypes.bool,
  /** content */
  children: PropTypes.node,
  /** enables debug */
  debug: PropTypes.bool,
}

Col.defaultProps = {
  xs: 'auto',
  sm: 'auto',
  md: 'auto',
  lg: 'auto',
  xl: 'auto',
  reverse: false,
  noGutter: false,
  children: null,
  debug: false,
  align: 'stretch',
  justify: 'flex-start',
}

/** @component */
export default Col
