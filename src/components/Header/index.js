import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { HeaderContainer, LogoContainer, LocaleContainer } from './StyledHeader'
import { Row, Col } from '../Grid'
import MasLogoEng from '../../assets/Images/mas_logo_en.svg'
import MasLogoCy from '../../assets/Images/mas_logo_cy.svg'

const Header = ({
  a11yTitle,
  as,
  children,
  currentLgn,
  lgnUrl,
  localeText,
  setLgn,
  ...rest
}) => {
  return (
    <>
      <HeaderContainer fluid forwardedAs={as} {...rest}>
        <Row
          justify="space-between"
          align="center"
          padding="12px 0"
          margin="auto"
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
              onClick={setLgn}
              href={lgnUrl}
            >
              {localeText
                ? localeText
                : currentLgn === 'en'
                ? 'Cymraeg'
                : 'English'}
            </LocaleContainer>
          </Col>
        </Row>
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
  lgnUrl: PropTypes.string,
  /** Text to be displayed in Locale Button */
  localeText: PropTypes.string,
  /** Function to trigger by Locale Button */
  setLgn: PropTypes.func,
  ...genericPropTypes,
}

Header.defaultProps = {
  as: 'header',
  currentLgn: 'en',
  ...genericPropsDefaults(),
}

/** @component */
export { Header }
