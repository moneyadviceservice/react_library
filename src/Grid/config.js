import { css } from 'styled-components'

export const DIMENSIONS = ['xs', 'sm', 'md', 'lg', 'xl']

export const BASE_CONF = {
  mediaQuery: 'only screen',
  columns: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  },
  // row gutter
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  // container padding
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  // container width
  container: {
    xs: 'full', // 'full' = max-width: 100%
    sm: 'full', // 'full' = max-width: 100%
    md: 'full', // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90, // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120, // 1920px
  },
  media: {},
}

export default function resolveConfig() {
  // create media queries
  BASE_CONF.media = Object.keys(BASE_CONF.breakpoints).reduce(
    (media, breakpoint) => {
      const breakpointWidth = BASE_CONF.breakpoints[breakpoint]
      // only screen and (min-width: "width")
      media[breakpoint] = makeMedia(
        [
          BASE_CONF.mediaQuery,
          breakpointWidth >= 0 && `(min-width: ${breakpointWidth}rem)`,
        ]
          .filter(Boolean)
          .join(' and ')
      )
      return media
    },
    {}
  )
  // console.log(BASE_CONF.media)
  return BASE_CONF
}

function makeMedia(media) {
  return (...args) => css`
    @media ${media} {
      ${css(...args)}
    }
  `
}
