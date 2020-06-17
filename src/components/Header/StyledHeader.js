import styled, { css } from 'styled-components'
import { resolveMedia } from '../../utils/helpers'
import { Container, Row, Col } from '../Grid'
import { Anchor } from '../Anchor'

const HeaderContainer = styled(Container)`
  & svg {
    fill: white;
  }
`

const HeaderRow = styled(Row)`
  ${({ background, theme }) =>
    !background &&
    css`
      background: ${theme.colors.header.background};
    `}

  ${({ padding }) =>
    !padding &&
    css`
      padding: 5px 10px;

      ${resolveMedia.sm`
        padding: 10px 15px;
      `}
    `}
    
  min-height: 3.375rem;

  ${resolveMedia.md`
    min-height: 4.125rem;
  `}
`

const LocaleContainer = styled(Anchor)``

const LogoContainer = styled(Anchor)`
  overflow: hidden;
  width: 180px;

  ${resolveMedia.sm`
    width: 200px;
  `}

  ${resolveMedia.md`
    width: 285px;
  `}
`

const MapsBannerRow = styled(Row)`
  ${({ background, theme }) =>
    !background &&
    css`
      background: ${theme.colors.mapsBlue};
    `}
`

const MapsLogo = styled(Col)`
  color: white;
  padding-top: 13px;
  padding-bottom: 13px;

  & svg {
    width: 90px;
  }
`

const MapsLogoText = styled.span`
  margin-right: 10px;

  & span {
    display: block;
    text-align: right;
    font-size: 0.625rem;
    line-height: 1;
  }
`

export {
  HeaderContainer,
  HeaderRow,
  LogoContainer,
  LocaleContainer,
  MapsBannerRow,
  MapsLogo,
  MapsLogoText,
}
