import styled from 'styled-components'
import { resolveMedia } from '../../utils/helpers'
import { Container, Row } from '../Grid'
import { Anchor } from '../Anchor'

const HeaderContainer = styled(Container)``

const HeaderRow = styled(Row)`
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

const MapsBannerRow = styled(Row)`
  background: ${props => !props.background && props.theme.colors.mapsBlue};
  color: white;
`

export {
  HeaderContainer,
  HeaderRow,
  LogoContainer,
  LocaleContainer,
  MapsBannerRow,
}
