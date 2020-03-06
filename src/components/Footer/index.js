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
} from './StyledFooter'
import { Col } from '../Grid'

const Footer = ({ as, direction, ...rest }) => {
  return (
    <FooterContainer fluid as="footer" {...rest}>
      <ContactPanelRow debug noGutter>
        <ContactPanelColumn sizes={{ xs: 12, md: 4 }} debug>
          webchati
        </ContactPanelColumn>
        <ContactPanelColumn sizes={{ xs: 12, md: 4 }} debug>
          whatsapp
        </ContactPanelColumn>
        <ContactPanelColumn sizes={{ xs: 12, md: 4 }} debug>
          phone
        </ContactPanelColumn>
      </ContactPanelRow>

      <FooterPrimary>
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
      </FooterSecondary>
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
