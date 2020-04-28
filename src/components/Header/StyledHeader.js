import styled from 'styled-components'
import { resolveMedia } from '../../utils/helpers'
import Container from '../Grid/Container'
import { Anchor } from '../Anchor/index'

const HeaderContainer = styled(Container)`
  background: ${props =>
    !props.background && props.theme.colors.header.background};
  min-height: 3.375rem;

  ${resolveMedia.md`
    min-height: 4.125rem;
  `}
`

const LocaleContainer = styled(Anchor)``

const LogoContainer = styled(Anchor)`
  overflow: hidden;
  width: 200px;
  & svg {
    fill: white;
  }
  ${resolveMedia.md`
    width: 285px;
  `}
`

export { HeaderContainer, LogoContainer, LocaleContainer }
