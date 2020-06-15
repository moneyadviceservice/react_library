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

const Header = ({
  a11yTitle,
  as,
  children,
  currentLgn,
  lngUrl,
  localeText,
  setLng,
  ...rest
}) => {
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
                <span>The Money Advice</span>
                <span>Service is provided by</span>
              </MapsLogoText>
              {currentLgn === 'en' ? <MapsLogoEng /> : <MapsLogoCy />}
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
                href="https://www.moneyadviceservice.org.uk/en"
                margin="0"
              >
                {currentLgn === 'en' ? <MasLogoEng /> : <MasLogoCy />}
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
                {localeText
                  ? localeText
                  : currentLgn === 'en'
                  ? 'Cymraeg'
                  : 'English'}
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
  currentLgn: PropTypes.oneOf(['en', 'cy']),
  /** Server-side fallback url to change language */
  lngUrl: PropTypes.string,
  /** Text to be displayed in Locale Button */
  localeText: PropTypes.string,
  /** Function to trigger by Locale Button */
  setLng: PropTypes.func,
  ...genericPropTypes,
}

Header.defaultProps = {
  as: 'header',
  currentLgn: 'en',
  ...genericPropsDefaults(),
}

/** @component */
export { Header }
