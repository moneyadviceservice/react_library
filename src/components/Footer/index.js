import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { FooterContainer } from './StyledFooter'
// footer panels
import ContactPanels from './ContactPanels'
import FooterPrimary from './FooterPrimary'
import FooterSecondary from './FooterSecondary'
// translations
import LocaleEn from './locale_en.json'
import LocaleCy from './locale_cy.json'
import LocaleContext from './LocaleContext'

const Footer = ({ currentLgn, setLgn, ...rest }) => {
  const i18n = currentLgn === 'en' ? LocaleEn : LocaleCy

  return (
    <LocaleContext.Provider value={i18n}>
      <FooterContainer forwardedAs="footer" fluid {...rest}>
        <ContactPanels />
        <FooterPrimary />
        <FooterSecondary setLgn={setLgn} />
      </FooterContainer>
    </LocaleContext.Provider>
  )
}

Footer.prototypes = {
  /** Current Language Value */
  currentLgn: PropTypes.oneOf(['en', 'cy']),
  /** Function to be triggered by Locale Button */
  setLgn: PropTypes.func,
  ...genericPropTypes,
}
Footer.defaultProps = {
  currentLgn: 'en',
  ...genericPropsDefaults(),
}

export { Footer }
