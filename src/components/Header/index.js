import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import {
  HeaderContainer,
  HeaderRow,
  LogoContainer,
  LocaleContainer,
  MapsBannerRow,
  MapsLogo,
  MapsLogoText,
} from './StyledHeader'
import { Col } from '../Grid'
// logos
import MasLogoEng from '../../assets/Images/mas_logo_en.svg'
import MasLogoCy from '../../assets/Images/mas_logo_cy.svg'
import MapsLogoEng from '../../assets/Images/maps_logo_en.svg'
import MapsLogoCy from '../../assets/Images/maps_logo_cy.svg'
// translations
import LocaleEn from './locale_en.json'
import LocaleCy from './locale_cy.json'

const Header = ({
  a11yTitle,
  as,
  children,
  currentLng,
  lngUrl,
  i18nLng,
  setLng,
  ...rest
}) => {
  // locale
  const lng = i18nLng || (currentLng === 'cy' ? LocaleCy : LocaleEn)

  return (
    <>
      <HeaderContainer fluid forwardedAs={as} {...rest}>
        <MapsBannerRow justify="center">
          <Col direction="row" justify="flex-end" align="center" constrained>
            <MapsLogo
              grow={false}
              direction="row"
              justify="flex-end"
              align="center"
            >
              <MapsLogoText>
                <span>{lng.mapsLogo.key1}</span>
                <span>{lng.mapsLogo.key2}</span>
              </MapsLogoText>
              {currentLng === 'en' ? <MapsLogoEng /> : <MapsLogoCy />}
            </MapsLogo>
          </Col>
        </MapsBannerRow>
        <HeaderRow justify="center" align="center">
          <Col
            direction="row"
            justify="space-between"
            align="center"
            constrained
          >
            <Col grow={false}>
              <LogoContainer
                a11yTitle="Money Advice Service"
                href="https://www.moneyadviceservice.org.uk/en"
                margin="0"
              >
                {currentLng === 'cy' ? <MasLogoCy /> : <MasLogoEng />}
              </LogoContainer>
            </Col>
            <Col grow={false}>
              <LocaleContainer
                color="white"
                textSize="0.875rem"
                weight="500"
                margin="0"
                onClick={setLng}
                href={lngUrl}
              >
                {lng.localeButton}
              </LocaleContainer>
            </Col>
          </Col>
        </HeaderRow>
      </HeaderContainer>
      {children}
    </>
  )
}

// Documentation
Header.propTypes = {
  /** Current Language Value */
  currentLng: PropTypes.oneOf(['en', 'cy']),
  /** Server-side fallback url to change language */
  lngUrl: PropTypes.string,
  /** Alternate translations for header. */
  i18nLng: PropTypes.object,
  /** Function to trigger by Locale Button */
  setLng: PropTypes.func,
  ...genericPropTypes,
}

Header.defaultProps = {
  as: 'header',
  currentLng: 'en',
  ...genericPropsDefaults(),
}

/** @component */
export { Header }
