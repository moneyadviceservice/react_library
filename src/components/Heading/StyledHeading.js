import styled, { css } from 'styled-components'
import {
  genericStyles,
  breakpointStyle,
  responsiveProps,
} from '../../utils/helpers'
import { breakpoints } from '../../utils/constants'

const fontStyles = props => {
  const levelStyles = props.theme.sizes.heading.level[props.level]

  return Object.entries(levelStyles).map(breakpoint => {
    const styles = css`
      font-size: ${breakpoint[1].size};
      line-height: ${breakpoint[1].height};
    `
    // breakpoint styles
    return breakpointStyle(breakpoints[breakpoint[0]], styles)
  })
}

const StyledHeading = styled.h1`
  /** align-self, padding, margin, border */
  ${genericStyles}

  /** font styles */
  ${props => fontStyles(props)}
  font-weight: ${props =>
    props.weightProp ? props.weightProp : props.theme.sizes.heading.weight};
  color: ${props =>
    props.colorProp ? props.colorProp : props.theme.colors.black};

  /** responsive props */
  ${props => props.textAlign && responsiveProps('text-align', props.textAlign)}
  ${props => responsiveProps('width', props.widthProp)}
`

export { StyledHeading }
