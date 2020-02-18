import styled, { css } from 'styled-components'
import {
  genericStyles,
  breakpointStyle,
  responsiveProps,
} from '../../utils/helpers'
import { breakpoints } from '../../utils/constants'

const fontStyles = props => {
  const sizeStyles = props.theme.sizes.paragraph.sizing

  return Object.entries(sizeStyles).map(breakpoint => {
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

const StyledParagraph = styled.p`
  /** align-self, padding, margin, border */
  ${genericStyles}

  /** font styles */
  ${props => fontStyles(props)}
  ${props => props.italic && `font-style: italic;`}
  ${props => props.strike && `text-decoration: line-through;`}
  ${props => props.underline && `text-decoration: underline;`}

  /** conditional styles */
  ${props => props.weightProp && `font-weight: ${props.weightProp};`}
  color: ${props => props.colorProp || props.theme.colors.black};

  /** responsive props */
  ${props => props.textSize && responsiveProps('font-size', props.textSize)}
  ${props =>
    props.lineHeight && responsiveProps('line-height', props.lineHeight)}
  ${props => props.textAlign && responsiveProps('text-align', props.textAlign)}
  ${props => responsiveProps('width', props.widthProp)}
`

export { StyledParagraph }
