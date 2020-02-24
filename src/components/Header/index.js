import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { HeaderContainer, LogoContainer, LocaleContainer } from './StyledHeader'
import { Row, Col } from '../Grid'
import MasLogoEng from '../../assets/Images/mas_logo_en.svg'
import MasLogoCy from '../../assets/Images/mas_logo_cy.svg'

const Header = ({ a11yTitle, as, currentLgn, localeText, setLgn, ...rest }) => {
  console.log(localeText)

  return (
    <HeaderContainer fluid as={as} aria-label={a11yTitle} {...rest}>
      <Row justify="space-between" align="center" padding="12px 0" constrained>
        <Col grow={false}>
          <LogoContainer href="https://www.moneyadviceservice.org.uk/en">
            {currentLgn === 'en' ? <MasLogoEng /> : <MasLogoCy />}
          </LogoContainer>
        </Col>
        <Col grow={false} onClick={setLgn}>
          <LocaleContainer>
            {localeText || currentLgn === 'en' ? 'Cymraeg' : 'English'}
          </LocaleContainer>
        </Col>
      </Row>
    </HeaderContainer>
  )
}

// Documentation
Header.propTypes = {
  /** The DOM tag or react component to use for the element. */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  currentLgn: PropTypes.string,
  localeText: PropTypes.string,
  setLanguage: PropTypes.func,
  ...genericPropTypes,
}

Header.defaultProps = {
  as: 'header',
  currentLgn: 'en',
  localeText: null,
  setLgn: null,
  width: '100%',
  ...genericPropsDefaults(),
}

/** @component */
export { Header }
