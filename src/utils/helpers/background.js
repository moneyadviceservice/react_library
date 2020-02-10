import { css } from 'styled-components'
import theme from '../../theme'

/**
 * Takes the background prop and returns the background styles.
 * @param {Object|string} backgroundArg The background to be applied.
 * @param {string} backgroundArg.color Sets the background color of the component.
 * @param {string} backgroundArg.opacity Specifies the opacity/transparency of the background color.
 * @param {string} backgroundArg.position Sets the starting position of the background image.
 * @param {string} backgroundArg.image Sets one or more background images for the component
 * @param {string} backgroundArg.repeat Sets if/how a background image will be repeated.
 * @param {string} backgroundArg.size Specifies the size of the background images.
 * @param {string} textColorArg The color to be applied to text on the component.
 * @returns {string[]} The background styles to be applied.
 */
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
    }
    //** if background is a color */
    if (backgroundArg.color) {
      const color = backgroundArg.color
      /** if color in hex, convert to rgba with opacity */
      const backgroundColor =
        (typeof color === 'string' && hexToRGB(color, opacity)) || color
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

/**
 * Converts an hex style color to an rgba format.
 * @param {string} color Color to be converted.
 * @param {string} [alpha = 1] Transparency to be applied.
 * @returns {string} Returns the color in rgba format.
 */
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
      return undefined
    }
    const [red, green, blue] = colorArray
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
  } else {
    return undefined
  }
}
