import React from 'react'
import {
  genericPropTypes,
  genericPropsDefaults,
} from '../../../utils/prop-types'
import {
  FooterRow,
  FooterPrimaryRow,
  SocialContainer,
  SocialLink,
  SocialLogo,
  SocialCounter,
  FooterNav,
  FooterLinks,
  BlogContainer,
  ClearEnglishContainer,
  LinkList,
  LinkListItem,
  Copyright,
} from './StyledFooterPrimary'
import { Anchor as A } from '../../Anchor'
import { Paragraph as P } from '../../Paragraph'
// svg
import ClearEnglish from '../../../assets/Images/clear_english.svg'
import Facebook from '../../../assets/Images/icon_facebook.svg'
import Twitter from '../../../assets/Images/icon_twitter.svg'
import Youtube from '../../../assets/Images/icon_youtube.svg'

const FooterPrimary = () => {
  const linkItems = [
    {
      href: 'https://www.moneyadviceservice.org.uk/en/static/about-us',
      text: 'About us',
    },
    {
      href: 'https://www.moneyadviceservice.org.uk/en/categories/our-debt-work',
      text: 'Our debt work',
    },
    {
      href: 'https://www.moneyadviceservice.org.uk/en/static/media-centre',
      text: 'Media centre',
    },
    {
      href: 'http://www.fincap.org.uk/',
      text: 'Financial Capability',
    },
    {
      href: 'https://www.moneyadviceservice.org.uk/en/categories/partners',
      text: 'Partners',
    },
    {
      href: 'https://www.moneyadviceservice.org.uk/en/static/jobs',
      text: 'Jobs',
    },
    {
      href:
        'https://www.moneyadviceservice.org.uk/en/categories/tools-and-calculators',
      text: 'Tools & Calculators',
    },
  ]

  return (
    <FooterRow justify="center">
      <FooterPrimaryRow align="stretch" constrained>
        <SocialContainer
          sizes={{ xs: 12, md: 6 }}
          direction="row"
          align="center"
          justify="center"
          flexWrap="nowrap"
        >
          <SocialLink align="center" direction={{ xs: 'column', lg: 'row' }}>
            <SocialLogo facebook>
              <Facebook />
            </SocialLogo>
            <SocialCounter>
              <span>72k</span>
              <span>Likes</span>
            </SocialCounter>
          </SocialLink>
          <SocialLink align="center" direction={{ xs: 'column', lg: 'row' }}>
            <SocialLogo twitter>
              <Twitter />
            </SocialLogo>
            <SocialCounter>
              <span>45k</span>
              <span>Followers</span>
            </SocialCounter>
          </SocialLink>
          <SocialLink align="center" direction={{ xs: 'column', lg: 'row' }}>
            <SocialLogo youtube>
              <Youtube />
            </SocialLogo>
            <SocialCounter>
              <span>5.6m</span>
              <span>Views</span>
            </SocialCounter>
          </SocialLink>
        </SocialContainer>

        <FooterNav
          sizes={{ xs: 12, sm: 8, md: 4 }}
          role="navigation"
          a11yTitle="footer"
        >
          <LinkList>
            {linkItems.map(({ href, text }, key) => (
              <LinkListItem key={key}>
                <A href={href}>{text}</A>
              </LinkListItem>
            ))}
          </LinkList>
        </FooterNav>
        <FooterLinks
          sizes={{ xs: 12, sm: 4, md: 2 }}
          align="center"
          justify={{ xs: 'center', sm: 'flex-start' }}
          direction="row"
        >
          <BlogContainer sizes={{ xs: 6, sm: 12 }} align="center">
            BLOG
          </BlogContainer>
          <ClearEnglishContainer sizes={{ xs: 6, sm: 12 }} align="center">
            <A
              href="https://www.clearest.co.uk/silver-standard"
              target="_blank"
            >
              <ClearEnglish />
            </A>
          </ClearEnglishContainer>
        </FooterLinks>

        <Copyright padding="0">
          <P
            textSize="1rem"
            lineHeight={{ xs: '1.2rem', md: '1.35rem' }}
            margin={{ bottom: 0 }}
          >
            © Copyright 2020 The Money Advice Service 120 Holborn, London EC1N
            2TD
          </P>
        </Copyright>
      </FooterPrimaryRow>
    </FooterRow>
  )
}

FooterPrimary.prototypes = {
  ...genericPropTypes,
}
FooterPrimary.defaultProps = {
  ...genericPropsDefaults(),
}

export default FooterPrimary
