import styled from 'styled-components'
import { resolveMedia } from '../../../utils/helpers'
import { Row, Col } from '../../Grid'

const FooterSecondaryContainer = styled(Row)`
  ${props =>
    !props.background && `background-color: ${props.theme.colors.mapsBlue};`}
  ${props => !props.padding && `padding: 20px 0;`}
  color: white;
`

const Translation = styled(Col)`
  flex-grow: 0;

  ${resolveMedia.md`
    display: none;
  `}
`

const Acessibility = styled(Col)`
  flex-grow: 0;
  font-size: 0.875rem;
  line-height: 1.5rem;
`

const MapsLink = styled(Col)`
  flex-grow: 0;
`

const ListContainer = styled(Col)`
  flex-grow: 0;
  ${resolveMedia.md`
    ${props => !props.margin && `margin-left: auto;`}
  `}
`

const FooterSecondaryList = styled.ul`
  display: flex;
  flex-wrap: inherit;
`

const FooterSecondaryListItem = styled.li``

export {
  FooterSecondaryContainer,
  Translation,
  Acessibility,
  MapsLink,
  ListContainer,
  FooterSecondaryList,
  FooterSecondaryListItem,
}
