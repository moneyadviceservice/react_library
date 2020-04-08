import React from 'react'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { FooterContainer } from './StyledFooter'
import ContactPanels from './ContactPanels'

const Footer = ({ as, direction, ...rest }) => {
  return (
    <FooterContainer fluid as="footer" {...rest}>
      <ContactPanels />
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
