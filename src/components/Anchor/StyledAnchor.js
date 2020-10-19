import styled from 'styled-components'
import { Paragraph } from '../Paragraph'

const StyledAnchor = styled(Paragraph)`
  color: ${({ colorProp, theme }) => colorProp || theme.colors.anchor.default};
  text-decoration: none;

  &:visited {
    color: ${({ colorProp, theme }) =>
      colorProp || theme.colors.anchor.default};
  }

  &:hover,
  &:focus {
    color: ${({ colorProp, theme }) =>
      colorProp || theme.colors.anchor.default};
    text-decoration: underline;
  }

  &:hover {
    outline: none;
    cursor: pointer;
  }

  &:focus {
    outline: solid 0.1875rem ${({ theme }) => theme.colors.anchor.outline};
    background-color: ${({ theme }) => theme.colors.anchor.focusBg};
    color: ${({ colorProp, theme }) => colorProp || theme.colors.black};
  }

  // Removes active link colour that is applied in Mobile Safari and adds kerning
  &[href^='tel'] {
    ${({ colorProp }) => !colorProp && 'color: inherit;'}
    letter-spacing: -1px;
  }
`

export default StyledAnchor
