import { breakpoints } from '../config/constants'
import { resolveMedia } from '../config/helpers'

export const DIMENSIONS = ['xs', 'sm', 'md', 'lg', 'xl']

export const BASE_CONF = {
  // breakpoints
  breakpoints,
  // column numbers
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
  media: {},
}

export default function gridConfig() {
  BASE_CONF.media = resolveMedia
  // return config with media queries
  return BASE_CONF
}
