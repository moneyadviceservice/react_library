import styled from 'styled-components'
import { Row, Col, Container } from '../Grid'
import Button from '../Button'
import { resolveMedia } from '../../utils/helpers'

// Main footer container
const FooterContainer = styled(Container)``

// CONTACT PANEL
// Social media contacts row
const ContactPanelRow = styled(Row)``

// Individual social media contact column
const ContactPanelColumn = styled(Col)`
  ${props => !props.justify && 'justify-content: center;'}
  ${props => !props.align && 'text-align: center;'}
  padding-bottom: 30px;
`

// GREY PANEL
// Row for the grey column under the contact panel
const FooterPrimary = styled(Row)``

// Social media counters
const SocialMediaLinks = styled(Col)``

// Footer Link
const FooterNav = styled(Col)``
// Blog Button and Language Image
const FooterLinks = styled(Col)``

const Copyright = styled(Col)``

// MAS Banner
// MAS banner row
const FooterSecondary = styled(Row)``

const SocialMediaIcons = styled.span``

const FooterButtons = styled(Button)`
  font-size: 12px;
  font-weight: 400;

  ${resolveMedia.md`
    font-size: 14px;
`}
`

export {
  FooterContainer,
  FooterPrimary,
  FooterSecondary,
  ContactPanelColumn,
  ContactPanelRow,
  FooterNav,
  SocialMediaLinks,
  FooterLinks,
  Copyright,
  SocialMediaIcons,
  FooterButtons,
}
