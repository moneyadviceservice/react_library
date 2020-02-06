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
