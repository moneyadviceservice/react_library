import styled from 'styled-components'
import { Row, Col, Container } from '../Grid'
import Button from '../Button'
import { resolveMedia } from '../../utils/helpers'
import theme from '../../theme'
import { Component } from 'react'
import WebChatImg from '../../assets/Images/chat.svg'
import WhatsAppImg from '../../assets/Images/whatsapp.svg'
import PhoneImg from '../../assets/Images/phone.svg'

// Main footer container
const FooterContainer = styled(Container)`
  padding: 0;
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
  ${props => !props.height && 'height: 500px;'}
  padding-bottom: 30px;
  border-right: 1px ${theme.colors.alternate} solid;
  &:last-child {
    border: 0;
  }
`
// The Icons

const WebChat = styled(WebChatImg)`
  ${resolveMedia.md`
  display: block;
  margin: 0 auto 30px;
  width: 60px;
  height: 60px;
`}
  width: 40px;
  height: 40px;
  margin-right: 20px;
  vertical-align: middle;
`

const WhatsApp = styled(WhatsAppImg)`
  ${resolveMedia.md`
display: block;
margin: 0 auto 30px;
width: 60px;
height: 60px;
`}
  width: 40px;
  height: 40px;
  margin-right: 20px;
  vertical-align: middle;
`

const Phone = styled(PhoneImg)`
  ${resolveMedia.md`
  display: block;
  margin: 0 auto 30px;
  width: 60px;
  height: 60px;
`}
  width: 40px;
  height: 40px;
  margin-right: 20px;
  vertical-align: middle;
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
// TODO : Separate Components for UL and LI
const ContactPanelAdditionalInfoUnorderedList = styled.ul`
  text-align: center;
  font-size: 13px;
`
const ContactPanelAdditionalInfoListItem = styled.li``

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
  ContactPanelAdditionalInfoUnorderedList,
  ContactPanelAdditionalInfoListItem,
  WebChat,
  WhatsApp,
  Phone,
}
