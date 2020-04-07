import styled from 'styled-components'
import { Row, Col, Container } from '../Grid'
import Button from '../Button'
import { resolveMedia } from '../../utils/helpers'
import theme from '../../theme'
import WebChatImg from '../../assets/Images/chat.svg'
import WhatsAppImg from '../../assets/Images/whatsapp.svg'
import PhoneImg from '../../assets/Images/phone.svg'

// Main footer container
const FooterContainer = styled(Container)`
  padding: 0;
`

// TODO : Separate Components for UL and LI
// Footer unordered list and list item
const ContactPanelAdditionalInfoUnorderedList = styled.ul`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;

  ${resolveMedia.md`
  font-size: 16px;

`}
`
const ContactPanelAdditionalInfoListItem = styled.li``

// The Icons
const WebChat = styled(WebChatImg)`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  vertical-align: middle;

  ${resolveMedia.md`
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto 30px;
`}
`
const WhatsApp = styled(WhatsAppImg)`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  vertical-align: middle;

  ${resolveMedia.md`
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto 30px;
  `}
`
const Phone = styled(PhoneImg)`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  vertical-align: middle;

  ${resolveMedia.md`
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto 30px;
  `}
`

// CONTACT PANEL
// Social media contacts row
const ContactPanelRow = styled(Row)`
  padding: 0;
`

// Individual social media contact column
const ContactPanelColumn = styled(Col)`
  ${props => !props.justify && 'justify-content: center;'}
  ${props => !props.align && 'text-align: center;'}
  border-right: 1px ${theme.colors.alternate} solid;
  &:last-child {
    border: 0;
  }
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

const FooterButtons = styled(Button)``

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
  WebChat,
  WhatsApp,
  Phone,
  ContactPanelAdditionalInfoUnorderedList,
  ContactPanelAdditionalInfoListItem,
}
