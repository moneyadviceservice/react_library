import React, { useContext } from 'react'
import {
  genericPropTypes,
  genericPropsDefaults,
} from '../../../utils/prop-types'
import {
  FooterRow,
  FooterPrimaryContainer,
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
import Button from '../../Button'
import { Paragraph as P } from '../../Paragraph'
// svg
import ClearEnglish from '../../../assets/Images/clear_english.svg'
import Facebook from '../../../assets/Images/icon_facebook.svg'
import Twitter from '../../../assets/Images/icon_twitter.svg'
import Youtube from '../../../assets/Images/icon_youtube.svg'
// context
import LocaleContext from '../LocaleContext'

const FooterPrimary = () => {
  // manage translations
  let { social_media, link_items, copyright } = useContext(
    LocaleContext
  ).FooterPrimary

  return (
    <FooterRow justify="center" padding="0">
      <FooterPrimaryContainer align="stretch" direction="row" constrained>
        <SocialContainer
          sizes={{ xs: 12, md: 6 }}
          direction="row"
          align="center"
          justify="space-around"
          flexWrap="nowrap"
        >
          <SocialLink align="center" direction={{ xs: 'column', lg: 'row' }}>
            <SocialLogo facebook>
              <Facebook />
            </SocialLogo>
            <SocialCounter>
              <span>{social_media.facebook.number}</span>
              <span>{social_media.facebook.text}</span>
            </SocialCounter>
          </SocialLink>
          <SocialLink align="center" direction={{ xs: 'column', lg: 'row' }}>
            <SocialLogo twitter>
              <Twitter />
            </SocialLogo>
            <SocialCounter>
              <span>{social_media.twitter.number}</span>
              <span>{social_media.twitter.text}</span>
            </SocialCounter>
          </SocialLink>
          <SocialLink align="center" direction={{ xs: 'column', lg: 'row' }}>
            <SocialLogo youtube>
              <Youtube />
            </SocialLogo>
            <SocialCounter>
              <span>{social_media.youtube.number}</span>
              <span>{social_media.youtube.text}</span>
            </SocialCounter>
          </SocialLink>
        </SocialContainer>

        <FooterNav
          sizes={{ xs: 12, sm: 8, md: 4 }}
          role="navigation"
          a11yTitle="footer"
        >
          <LinkList>
            {link_items.map(({ href, text }, key) => (
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
            <Button
              blog
              text={'Blog'}
              alignSelf="center"
              href="https://www.moneyadviceservice.org.uk/blog"
              target="_blank"
            />
          </BlogContainer>
          <ClearEnglishContainer sizes={{ xs: 6, sm: 12 }} align="center">
            <A
              a11yTitle="Clear English Standard"
              href="https://www.clearest.co.uk/silver-standard"
              target="_blank"
              width="auto"
            >
              <ClearEnglish />
            </A>
          </ClearEnglishContainer>
        </FooterLinks>

        <Copyright>
          <P
            textSize="1rem"
            lineHeight={{ xs: '1.2rem', md: '1.35rem' }}
            margin={{ bottom: 0 }}
          >
            ©
            {` ${copyright.text} ${new Date().getFullYear()} ${
              copyright.organisation
            } ${copyright.address}`}
          </P>
        </Copyright>
      </FooterPrimaryContainer>
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
