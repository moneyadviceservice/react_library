import { css } from 'styled-components'
import { breakpoints, mediaQuery } from '../constants'

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
