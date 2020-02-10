import { css } from 'styled-components'
import { breakpoints, dimensions } from '../constants'
import { breakpointStyle } from './responsive'

/**
 * Converts the sizes prop to flex-basis that defines the width of the element inside a flex container.
 * To be used in the Column component.
 * @param {number|string|Object} sizeProp The sizes prop.
 * @returns {string[]} Returns the flex-basis styles for the multiple breakpoints.
 */
export const flexStyle = sizeProp => {
  if (typeof sizeProp === 'number') {
    return css`
      flex-basis: ${(sizeProp / 12) * 100}%;
    `
  } else if (sizeProp === 'auto') {
    return css`
      flex-basis: auto;
      flex-grow: 0;
    `
  } else {
    return dimensions.map(d => {
      if (breakpoints[d] && sizeProp[d] && sizeProp[d] !== 'auto') {
        return css`
          ${breakpointStyle(
            breakpoints[d],
            `flex-basis: ${(sizeProp[d] / 12) * 100}%;`
          )}
        `
      } else if (breakpoints[d] && sizeProp[d] === 'auto') {
        return css`
          ${breakpointStyle(breakpoints[d], `flex-basis: auto; flex-grow: 1;`)}
        `
      }
    })
  }
}

/**
 * Defines the offset of an element by applying margin-left.
 * @param {string|Object} offsetProp The offset in columns. Max 12.
 * @returns {string} Returns the margin-left styles for the multiple breakpoints.
 */
export const offsetStyle = offsetProp => {
  if (typeof offsetProp !== 'object') {
    return css`
      margin-left: ${(offsetProp / 12) * 100}%;
    `
  } else {
    return dimensions.map(d => {
      if (breakpoints[d] && offsetProp[d] !== undefined) {
        return css`
          ${breakpointStyle(
            breakpoints[d],
            `margin-left: ${
              offsetProp[d] > 0 ? (offsetProp[d] / 12) * 100 : 0
            }%`
          )}
        `
      }
    })
  }
}
