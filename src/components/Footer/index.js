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

const Footer = ({ currentLng, lngUrl, setLng, i18nLng, ...rest }) => {
  const lng = i18nLng || (currentLng === 'cy' ? LocaleCy : LocaleEn)

  return (
    <LocaleContext.Provider value={lng}>
      <FooterContainer forwardedAs="footer" fluid {...rest}>
        <ContactPanels />
        <FooterPrimary />
        <FooterSecondary lngUrl={lngUrl} setLng={setLng} />
      </FooterContainer>
    </LocaleContext.Provider>
  )
}

Footer.propTypes = {
  /** Current Language Value. */
  currentLng: PropTypes.oneOf(['en', 'cy']),
  /** Server-side fallback url to change language. */
  lngUrl: PropTypes.string,
  /** Function to be triggered by Locale Button. */
  setLng: PropTypes.func,
  /** Implements custom translations for the Footer. */
  i18nLng: PropTypes.object,
  ...genericPropTypes,
}
Footer.defaultProps = {
  currentLng: 'en',
  ...genericPropsDefaults(),
}

export { Footer }
