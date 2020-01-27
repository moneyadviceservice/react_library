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

export const backgroundStyle = (backgroundArg, textColorArg) => {
  const textColor = textColorArg || theme.colors
  const opacity =
    theme.colors.opacity[backgroundArg.opacity] || backgroundArg.opacity || 1
  /** if background is object */
  if (typeof backgroundArg === 'object') {
    const styles = []
    /** font color */
    let color
    if (backgroundArg.dark) {
      color = textColor.light
      styles.push(css`
        color: ${color};
      `)
    }
    //** if background is an image */
    if (backgroundArg.image) {
      styles.push(css`
        background-image: ${backgroundArg.image};
        background-repeat: ${backgroundArg.repeat || 'no-repeat'};
        background-position: ${backgroundArg.position || 'center center'};
        background-size: ${backgroundArg.size || 'cover'};
      `)
      console.log('image!', styles)
    }
    //** if background is a color */
    if (backgroundArg.color) {
      const color = backgroundArg.color
      /** if color in hex, convert to rgba with opacity */
      const backgroundColor =
        (typeof color === 'string' && hexToRGB(color, opacity)) || color
      console.log('colors!', color, backgroundColor)
      styles.push(css`
        background-color: ${backgroundColor};
      `)
    }
    return styles
  }
  /** if background is a string */
  if (typeof backgroundArg === 'string') {
    /** url */
    if (backgroundArg.lastIndexOf('url', 0) === 0) {
      return css`
        background: ${backgroundArg} no-repeat center center;
        background-size: cover;
      `
    } else {
      /** color value */
      return css`
        background: ${backgroundArg};
      `
    }
  }
  return undefined
}

function hexToRGB(color, alpha = 1) {
  // allow for color format: #RGB, #RGBA, #RRGGBB, or #RRGGBBAA
  const hexExp = /^#[A-Za-z0-9]{3,4}$|^#[A-Za-z0-9]{6,8}$/
  const rgbExp = /rgba?\(\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([0-9]*)\s?\)/
  const rgbaExp = /rgba?\(\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([.0-9]*)\s?\)/
  // check if it's a hex value or string
  const canExtractRGBArray = color =>
    hexExp.test(color) || rgbExp.test(color) || rgbaExp.test(color)
  // return rgb value
  if (canExtractRGBArray(color)) {
    let colorArray = []
    if (hexExp.test(color)) {
      colorArray =
        color.length < 7 // 7 is what's needed for '#RRGGBB'
          ? color.match(/[A-Za-z0-9]{1}/g).map(v => parseInt(`${v}${v}`, 16))
          : // https://stackoverflow.com/a/42429333
            color.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16))
    } else if (color.match(rgbExp)) {
      colorArray = match.splice(1).map(v => parseInt(v, 10))
    } else if (color.match(rgbaExp)) {
      colorArray = match.splice(1).map(v => parseFloat(v, 10))
    } else {
      return false
    }
    const [red, green, blue] = colorArray
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
  } else {
    return false
  }
}

export const genericStyles = css`
  ${props =>
    props.alignSelf && `align-self: ${ALIGN_SELF_MAP[props.alignSelf]};`}
  ${props => props.margin && setStyle('margin', props.margin)}
  ${props => props.padding && setStyle('padding', props.padding)}
  ${props => props.border && borderStyle(props.border)}
`
