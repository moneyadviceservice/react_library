import { css } from 'styled-components'
import { breakpoints, mediaQuery } from './constants'
import { theme } from './styles'

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

export const backgroundMixin = css`
  background: ${props =>
    props.background ? theme.alternateBackground : theme.primaryBackground};
`

export const paddingBottomMixin = css`
  padding-bottom: ${props => (props.paddingBottom ? '' : '36px')}; //set value
`

export const paddingRightMixin = css`
  padding-right: ${props => (props.paddingRight ? '' : '40px')}; //set value
`

export const paddingLeftMixin = css`
  padding-left: ${props => (props.paddingLeft ? '' : '40px')}; //set value
`

export const colorMixin = css`
  color: ${props =>
    props.color ? theme.accentColor : theme.textColor}; //set value
`
