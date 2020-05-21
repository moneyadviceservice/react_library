import { css } from 'styled-components'
import theme from '../../theme'
import { ALIGN_SELF_MAP } from '../constants'

// Returns the styles for generic props to be used in all components.
export const genericStyles = css`
  ${({ alignSelf }) => alignSelf && `align-self: ${ALIGN_SELF_MAP[alignSelf]};`}
  ${({ margin }) => margin && setStyle('margin', margin)}
  ${({ padding }) => padding && setStyle('padding', padding)}
  ${({ border }) => border && borderStyle(border)}
  ${({ hide }) => hide && `display: none;`}
`

/**
 * Sets default css styles for specified sides or all sides.
 * Can be used to set margin or padding styles.
 * @param {string} kind Css property to be applied.
 * @param {Object|string} data Css value to be applied to property
 * @param {(number|string)} data.horizontal Applies the styles to left and right sides.
 * @param {(number|string)} data.vertical Applies the styles to top and bottom sides.
 * @param {(number|string)} data.top Applies the styles to top side.
 * @param {(number|string)} data.bottom Applies the styles to bottom side.
 * @param {(number|string)} data.left Applies the styles to left side.
 * @param {(number|string)} data.right Applies the styles to right side.
 * @returns {string[]} The styles for the multiple sides.
 */
export const setStyle = (kind, data) => {
  if (typeof data === 'string') {
    return css`
      ${kind}: ${theme.sizes.edgeSize[data] || data};
    `
  }
  const result = []
  if (data.horizontal) {
    result.push(css`
      ${kind}-left: ${theme.sizes.edgeSize[data.horizontal] || data.horizontal};
      ${kind}-right: ${theme.sizes.edgeSize[data.horizontal] ||
        data.horizontal};
    `)
  }
  if (data.vertical) {
    result.push(css`
      ${kind}-top: ${theme.sizes.edgeSize[data.vertical] || data.vertical};
      ${kind}-bottom: ${theme.sizes.edgeSize[data.vertical] || data.vertical};
    `)
  }
  if (data.top) {
    result.push(css`
      ${kind}-top: ${theme.sizes.edgeSize[data.top] || data.top};
    `)
  }
  if (data.bottom) {
    result.push(css`
      ${kind}-bottom: ${theme.sizes.edgeSize[data.bottom] || data.bottom};
    `)
  }
  if (data.left) {
    result.push(css`
      ${kind}-left: ${theme.sizes.edgeSize[data.left] || data.left};
    `)
  }
  if (data.right) {
    result.push(css`
      ${kind}-right: ${theme.sizes.edgeSize[data.right] || data.right};
    `)
  }
  return result
}

/**
 * Sets the border css styles for specified sides or all sides.
 * @param {Object|string} data Css border value to be applied to property
 * @param {(number|string)} data.horizontal Applies the border styles to left and right sides.
 * @param {(number|string)} data.vertical Applies the border styles to top and bottom sides.
 * @param {(number|string)} data.top Applies the border styles to top side.
 * @param {(number|string)} data.bottom Applies the border styles to bottom side.
 * @param {(number|string)} data.left Applies the border styles to left side.
 * @param {(number|string)} data.right Applies the border styles to right side.
 * @returns {string[]} The border styles for the multiple sides.
 */
export const borderStyle = data => {
  if (typeof data === 'string') {
    return css`
      border: ${theme.sizes.borderSize[data] || data};
    `
  }
  const styles = []
  const color = data.color || 'black'
  const borderSize = data.size || 'xsmall' // 1px
  const style = data.style || 'solid'
  const side = typeof data === 'string' ? data : data.side || 'all'
  /** default: 1px solid black */
  const value = `${theme.sizes.borderSize[borderSize] ||
    borderSize} ${style} ${color}`

  if (
    side === 'top' ||
    side === 'bottom' ||
    side === 'left' ||
    side === 'right'
  ) {
    styles.push(css`border-${side}: ${value};`)
  } else if (side === 'vertical') {
    styles.push(css`
      border-left: ${value};
      border-right: ${value};
    `)
  } else if (side === 'horizontal') {
    styles.push(css`
      border-top: ${value};
      border-bottom: ${value};
    `)
  } else {
    styles.push(css`
      border: ${value};
    `)
  }
  return styles
}
