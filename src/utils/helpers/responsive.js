import { css } from 'styled-components'
import { breakpoints, mediaQuery, dimensions } from '../constants'

/**
 * Creates the media-query syntax with the provided content inside.
 * @param {number} breakpoint The rem value for min-width. These should come from ../constants
 * @param {string} content Styles content to go inside the media-query.
 * @returns {string[]} The media-query syntax with styles content.
 */
export const breakpointStyle = (breakpoint, content) => css`
  @media ${mediaQuery} ${breakpoint && `and (min-width: ${breakpoint}rem)`} {
    ${content}
  }
`

/**
 * Creates the multiple media-query syntax with the specified css property inside.
 * @param {string} property CSS property to be applied.
 * @param {string|Object} values Property values to be applied to the multiple breakpoints.
 * @returns {string[]} The styles for the multiples breakpoints.
 */
export const responsiveProps = (property, values) => {
  if (!values) throw new Error('No values provided for responsive props!')
  if (typeof values === 'string') {
    // same values for all screen sizes
    return property ? `${property}: ${values};` : `${values}`
  } else if (typeof values === 'object') {
    return dimensions.map(d => {
      if (breakpoints[d] && values[d] !== undefined) {
        return css`
          ${breakpointStyle(
            breakpoints[d],
            property ? `${property}: ${values[d]};` : `${values[d]}`
          )}
        `
      }
    })
  } else {
    return undefined
  }
}
