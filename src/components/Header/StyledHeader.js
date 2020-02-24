import styled from 'styled-components'
import { resolveMedia } from '../../utils/helpers'
import ContainerWrapper from '../Grid/Container/styledContainer'

const HeaderContainer = styled(ContainerWrapper)`
  background: ${props =>
    !props.background && props.theme.colors.header.background};
  min-height: 3.375rem;

  ${resolveMedia.md`
    min-height: 4.125rem;
  `}
`

const LocaleContainer = styled.a`
  color: white;
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 500;

  &:hover {
    color: white;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: white;
  }
`

const LogoContainer = styled.a`
  overflow: hidden;
  width: 200px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: white;
  }

  & svg {
    fill: white;
    height: 46px;
  }

  ${resolveMedia.md`
    width: 285px;
  `}
`

export { HeaderContainer, LogoContainer, LocaleContainer }
