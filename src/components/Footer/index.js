import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import {
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
} from './StyledFooter'
import { Col } from '../Grid'
import WhatsAppImg from '../../assets/Images/whatsapp.svg'
import PhoneImg from '../../assets/Images/phone.svg'
import WebChatImg from '../../assets/Images/chat.svg'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { Inline } from '../Inline'

const Footer = ({ as, direction, ...rest }) => {
  return (
    <FooterContainer fluid as="footer" {...rest}>
      <ContactPanelRow>
        <ContactPanelColumn sizes={{ xs: 12, md: 4 }} direction="row">
          <Heading level={5}>
            <WebChatImg width="60px" height="60px" alignSelf="start" />
          </Heading>
          <Heading level={2}>Web Chat</Heading>
          <Paragraph textAlign="center" textSize="13px" hide>
            Got a question? Our advisers will point you in the right direction.
          </Paragraph>
          <Paragraph textAlign="center" textSize="13px" width="70%">
            Monday to Friday, 8am to 6pm Saturday, 8am to 3pm Sunday and Bank
            Holidays, closed
          </Paragraph>
          <FooterButtons text="Launch Chat" />
        </ContactPanelColumn>

        <ContactPanelColumn sizes={{ xs: 12, md: 4 }} direction="row">
          <Heading level={5}>
            <WhatsAppImg width="60px" height="60px" alignSelf="start" />
          </Heading>
          <Heading level={2}>WhatsApp</Heading>
          <Paragraph textAlign="center" textSize="13px">
            Need help sorting out your debts, have credit questions or want
            pensions guidance?
          </Paragraph>
          <Paragraph textAlign="center" textSize="13px">
            Add +44 7701 342744 to your Whatsapp and send us a message.
          </Paragraph>
          <Paragraph textAlign="center" textSize="13px">
            For everything else please contact us via Webchat or Telephone.
          </Paragraph>
          <FooterButtons text="Launch Chat" />
        </ContactPanelColumn>

        <ContactPanelColumn sizes={{ xs: 12, md: 4 }} direction="row">
          <Heading level={5}>
            <PhoneImg width="60px" height="60px" alignSelf="start" />
          </Heading>
          <Heading level={2}>Contact us</Heading>
          <Paragraph textAlign="center" textSize="13px">
            Give us a call for free and impartial money advice.<br></br>
            <Inline textSize="20px" weight="bold">
              0800 138 7777
            </Inline>
          </Paragraph>
          <Paragraph textAlign="center" textSize="13px">
            Monday to Friday, 8am to 6pm Saturday, Sunday and Bank Holidays,
            closed
          </Paragraph>
          <Paragraph textAlign="center" textSize="13px">
            Our general email address is enquiries@maps.org.uk.
          </Paragraph>
          <FooterButtons text="Send Email" />
          <Paragraph textAlign="center" textSize="13px">
            We will normally respond to your enquiry within 48 hours of receipt.
          </Paragraph>
        </ContactPanelColumn>
      </ContactPanelRow>

      {/* <FooterPrimary>
        <SocialMediaLinks sizes={{ xs: 12, md: 6 }} debug>
          twiter
        </SocialMediaLinks>

        <FooterNav sizes={{ xs: 12, sm: 8, md: 4 }} debug>
          links
        </FooterNav>
        <FooterLinks sizes={{ xs: 12, sm: 4, md: 2 }} debug>
          images
        </FooterLinks>

        <Copyright>copyright</Copyright>
      </FooterPrimary>
      <FooterSecondary debug>
        <Col>last row</Col>
      </FooterSecondary> */}
    </FooterContainer>
  )
}

Footer.prototypes = {
  ...genericPropTypes,
}
Footer.defaultProps = {
  ...genericPropsDefaults(),
}

export { Footer }
