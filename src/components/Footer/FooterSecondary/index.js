import React from 'react'
import {
  genericPropTypes,
  genericPropsDefaults,
} from '../../../utils/prop-types'
import {
  FooterRow,
  FooterSecondaryContainer,
  Translation,
  Acessibility,
  AccessibilityIcon,
  MapsText,
  MapsLink,
  ListContainer,
  FooterSecondaryList as List,
  FooterSecondaryListItem as ListItem,
  FooterAnchor as A,
} from './StyledFooterSecondary'
import MapsLogoEn from '../../../assets/Images/maps_logo_en.svg'

const FooterSecondary = ({ as, direction, ...rest }) => {
  const listItems = [
    {
      href: 'https://www.moneyadviceservice.org.uk/en/static/contact-us',
      text: 'Contact us',
    },
    {
      href:
        'https://www.moneyadviceservice.org.uk/en/static/terms-and-conditions',
      text: 'Terms & Conditions',
    },
    {
      href: 'https://www.moneyadviceservice.org.uk/en/corporate/privacy',
      text: 'Privacy Notice',
    },
    {
      href: 'https://www.moneyadviceservice.org.uk/en/static/accessibility',
      text: 'Accessibility',
    },
    {
      href: 'https://www.moneyadviceservice.org.uk/en/static/cookie_notice_en',
      text: 'Cookies',
    },
    {
      href: 'https://www.moneyadviceservice.org.uk/en/sitemap',
      text: 'Sitemap',
    },
  ]

  return (
    <FooterRow justify="center">
      <FooterSecondaryContainer
        justify="space-between"
        align="center"
        constrained
      >
        <ListContainer direction="row" align="center" padding="0">
          <Translation sizes="auto">
            <A>Cymraeg</A>
          </Translation>
          <Acessibility sizes="auto">
            <A>
              <AccessibilityIcon />
              Report an accessibility problem
            </A>
          </Acessibility>
          <MapsLink sizes={{ xs: 12, sm: 'auto' }}>
            <A>
              <MapsText>
                <span>The Money</span>
                <span>Advice Service</span>
                <span>is provided by</span>
              </MapsText>
              <MapsLogoEn />
            </A>
          </MapsLink>
        </ListContainer>

        <ListContainer sizes={{ xs: 12, lg: 'auto' }}>
          <List>
            {listItems.map(({ href, text }, key) => (
              <ListItem key={key}>
                <A href={href}>{text}</A>
              </ListItem>
            ))}
          </List>
        </ListContainer>
      </FooterSecondaryContainer>
    </FooterRow>
  )
}

FooterSecondary.prototypes = {
  ...genericPropTypes,
}
FooterSecondary.defaultProps = {
  ...genericPropsDefaults(),
}

export default FooterSecondary
