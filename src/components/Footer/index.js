import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import {
  FooterContainer,
  GreyPanelRow,
  MASBannerRow,
  ContactPanelColumn,
  ContactPanelRow,
  FooterLinks,
  SocialMediaCounter,
  Images,
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

      <GreyPanelRow>
        <SocialMediaCounter sizes={{ xs: 12, md: 6 }} debug>
          twiter
        </SocialMediaCounter>

        <FooterLinks sizes={{ xs: 12, sm: 8, md: 4 }} debug>
          links
        </FooterLinks>
        <Images sizes={{ xs: 12, sm: 4, md: 2 }} debug>
          images
        </Images>

        <Copyright>copyright</Copyright>
      </GreyPanelRow>
      <MASBannerRow debug>
        <Col>last row</Col>
      </MASBannerRow>
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
