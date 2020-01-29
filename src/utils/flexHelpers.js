import { css } from 'styled-components'
import { breakpoints, dimensions } from './constants'
import { breakpointStyle } from './helpers'

export const responsiveProps = (property, values) => {
  if (typeof values === 'string') {
    // same values for all screen sizes
    return `${property}: ${values};`
  } else if (typeof values === 'object') {
    return dimensions.map(d => {
      if (breakpoints[d] && values[d]) {
        return css`
          ${breakpointStyle(breakpoints[d], `${property}: ${values[d]};`)}
        `
      }
    })
  } else {
    return undefined
  }
}

export const flexStyle = sizeProp => {
  if (typeof sizeProp === 'number') {
    return css`
      flex: 0 1 ${(sizeProp / 12) * 100}%;
      max-width: ${(sizeProp / 12) * 100}%;
    `
  } else {
    return dimensions.map(d => {
      if (breakpoints[d] && sizeProp[d] !== undefined) {
        return css`
          ${breakpointStyle(
            breakpoints[d],
            `flex: 0 1 ${(sizeProp[d] / 12) * 100}%;
             max-width: ${(sizeProp[d] / 12) * 100}%;`
          )}
        `
      }
    })
  }
}

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
