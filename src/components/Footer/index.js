import React from 'react'
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
  WebChat,
  WhatsApp,
  Phone,
  ContactPanelAdditionalInfoUnorderedList,
  ContactPanelAdditionalInfoListItem,
} from './StyledFooter'
import { Col } from '../Grid'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'

const Footer = ({ as, direction, ...rest }) => {
  return (
    <FooterContainer fluid as="footer" {...rest}>
      <ContactPanelRow>
        <ContactPanelColumn sizes={{ xs: 12, md: 4 }}>
          <Heading level={2}>
            <WebChat />
            Web Chat
          </Heading>
          <Paragraph textSize="16px">
            Got a question? Our advisers will point you in the right direction.
          </Paragraph>
          <ContactPanelAdditionalInfoUnorderedList>
            <ContactPanelAdditionalInfoListItem>
              Monday to Friday, 8am to 6pm
            </ContactPanelAdditionalInfoListItem>
            <ContactPanelAdditionalInfoListItem>
              Saturday, 8am to 3pm
            </ContactPanelAdditionalInfoListItem>
            <ContactPanelAdditionalInfoListItem>
              Sunday, and Bank Holidays, closed
            </ContactPanelAdditionalInfoListItem>
          </ContactPanelAdditionalInfoUnorderedList>
          <FooterButtons text="Launch Chat" alignSelf="center" weight={400} />
        </ContactPanelColumn>

        <ContactPanelColumn sizes={{ xs: 12, md: 4 }}>
          <Heading level={2}>
            <WhatsApp />
            WhatsApp
          </Heading>
          <Paragraph margin="0px" textSize="16px">
            Need help sorting out your debts, have credit questions or want
            pensions guidance?
          </Paragraph>
          <Paragraph textSize="16px">
            Add +44 7701 342744 to your Whatsapp and send us a message.
          </Paragraph>
          <Paragraph textSize="16px">
            For everything else please contact us via Webchat or Telephone.
          </Paragraph>
          <FooterButtons
            alignSelf="center"
            weight={400}
            text="Launch Chat"
            href="https://wa.me/447701342744"
            target="_blank"
          />
        </ContactPanelColumn>

        <ContactPanelColumn sizes={{ xs: 12, md: 4 }}>
          <Heading level={2}>
            <Phone />
            Contact us
          </Heading>
          <Paragraph textSize="16px">
            Give us a call for free and impartial money advice.
          </Paragraph>
          <Paragraph textSize={{ xs: '24px', sm: '30px' }} weight={700}>
            0800 138 7777
          </Paragraph>
          <ContactPanelAdditionalInfoUnorderedList>
            <ContactPanelAdditionalInfoListItem>
              Monday to Friday, 8am to 6pm
            </ContactPanelAdditionalInfoListItem>
            <ContactPanelAdditionalInfoListItem>
              Saturday, Sunday and Bank Holidays, closed
            </ContactPanelAdditionalInfoListItem>
          </ContactPanelAdditionalInfoUnorderedList>
          <FooterButtons text="Send Email" alignSelf="center" weight={400} />
          <Paragraph margin="12px 0" textSize="16px">
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
