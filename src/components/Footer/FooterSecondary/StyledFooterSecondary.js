import styled from 'styled-components'
import { resolveMedia } from '../../../utils/helpers'
import { Row, Col } from '../../Grid'
import { Anchor } from '../../Anchor'
import accessibility_svg from '../../../assets/Images/icon_accessibility.svg'

// container row
const FooterRow = styled(Row)`
  ${props =>
    !props.background && `background-color: ${props.theme.colors.mapsBlue};`}
`

const FooterSecondaryContainer = styled(Col)`
  ${props => !props.padding && `padding: 10px;`}
  color: white;

  ${resolveMedia.sm`
    ${props => !props.padding && `padding: 10px 15px;`}
  `}
`

// accessibility section
const Acessibility = styled(Col)`
  flex-grow: 0;
  font-size: 0.875rem;
  line-height: 1.5rem;
`

const AccessibilityIcon = styled(accessibility_svg)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`

// maps logo section
const MapsText = styled.span`
  display: inline-block;

  & span {
    display: block;
    font-size: 0.875rem;
    line-height: 1rem;
  }
`

const MapsLink = styled(Col)`
  flex-grow: 0;
  margin: 12px 0 6px;

  & svg {
    width: 120px;
    margin-left: 10px;
  }
`

// link list section
const ListContainer = styled(Col)`
  flex-grow: 0;
`
const FooterSecondaryListItem = styled.li`
  margin-top: 6px;
`

const FooterSecondaryList = styled.ul`
  display: flex;
  flex-wrap: inherit;
  margin: 6px 0;

  ${FooterSecondaryListItem} {
    margin-right: 6px;
    padding-right: 12px;
  }

  ${FooterSecondaryListItem}:last-child {
    margin-right: 0;
    padding-right: 0;
  }
`

const FooterAnchor = styled(Anchor)`
  color: white;
  font-size: 14px;
  ${({ margin }) => !margin && `margin: 0;`}

  &:visited,
  &:hover {
    color: white;
  }
`

// mobile translation section
const Translation = styled(Acessibility)`
  ${resolveMedia.md`
    display: none;
  `}
`

export {
  FooterRow,
  FooterSecondaryContainer,
  Translation,
  Acessibility,
  AccessibilityIcon,
  MapsText,
  MapsLink,
  ListContainer,
  FooterSecondaryList,
  FooterSecondaryListItem,
  FooterAnchor,
}
