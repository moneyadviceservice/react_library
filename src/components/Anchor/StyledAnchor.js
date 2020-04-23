import styled from 'styled-components'
import { Paragraph } from '../Paragraph'

const StyledAnchor = styled(Paragraph)`
  color: ${props => props.colorProp || props.theme.colors.anchor.default};
  text-decoration: none;

  &:visited {
    color: ${props => props.colorProp || props.theme.colors.anchor.default};
  }

  &:hover,
  &:focus {
    color: ${props => props.colorProp || props.theme.colors.anchor.default};
    text-decoration: underline;
  }

  &:hover {
    outline: none;
    cursor: pointer;
  }

  &:focus {
    outline: solid 0.1875rem ${props => props.theme.colors.anchor.outline};
    background-color: ${props => props.theme.colors.anchor.focusBg};
    color: ${props => props.colorProp || props.theme.colors.black};
  }

  // Removes active link colour that is applied in Mobile Safari and adds kerning
  &[href^='tel'] {
    color: inherit;
    letter-spacing: -1px;
    text-decoration: none;
  }
`

export default StyledAnchor
