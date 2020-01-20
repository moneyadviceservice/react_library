import { css } from 'styled-components'
import { breakpoints, mediaQuery, ALIGN_SELF_MAP } from './constants'
import theme from '../theme'

export const resolveMedia = Object.keys(breakpoints).reduce(
  (media, breakpoint) => {
    //current breakpoint
    const breakpointWidth = breakpoints[breakpoint]
    // parameters string
    let queryParams = [
      mediaQuery,
      breakpointWidth >= 0 && `(min-width: ${breakpointWidth}rem)`,
    ]
      .filter(Boolean)
      .join(' and ')

    media[breakpoint] = (...args) => css`
      @media ${queryParams} {
        ${css(...args)}
      }
    `
    return media
  },
  {}
)

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

export const genericStyles = css`
  ${props =>
    props.alignSelf && `align-self: ${ALIGN_SELF_MAP[props.alignSelf]};`}
  ${props => props.margin && setStyle('margin', props.margin)}
  ${props => props.padding && setStyle('padding', props.padding)}
  ${props => props.border && borderStyle(props.border)}
`
