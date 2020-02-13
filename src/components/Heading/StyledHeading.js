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
    const { size, height, marginTop, marginBottom } = breakpoint[1]

    const styles = css`
      ${!props.textSize && `font-size: ${size};`}
      ${!props.lineHeight && `line-height: ${height};`}
      ${!props.margin && `margin-top: ${marginTop};`}
      ${!props.margin && `margin-bottom: ${marginBottom};`}
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

  /** conditional styles */
  font-weight: ${props =>
    props.weightProp ? props.weightProp : props.theme.sizes.heading.weight};
  color: ${props =>
    props.colorProp ? props.colorProp : props.theme.colors.black};

  /** responsive props */
  ${props => props.textSize && responsiveProps('font-size', props.textSize)}
  ${props =>
    props.lineHeight && responsiveProps('line-height', props.lineHeight)}
  ${props => props.textAlign && responsiveProps('text-align', props.textAlign)}
  ${props => responsiveProps('width', props.widthProp)}
`

export { StyledHeading }
