import styled from 'styled-components'
import { Paragraph } from '../Paragraph'

const StyledAnchor = styled(Paragraph)`
  color: ${props => props.colorProp || props.theme.colors.linkDefault};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:hover {
    outline: none;
  }

  &:focus {
    outline: solid 0.1875rem ${props => props.theme.colors.focusBg};
    color: ${props => props.colorProp || props.theme.colors.focusBg};
  }

  // Removes active link colour that is applied in Mobile Safari and adds kerning
  &[href^='tel'] {
    color: inherit;
    letter-spacing: -1px;
    text-decoration: none;
  }
`

export default StyledAnchor
