import React from 'react'
import {
  genericPropTypes,
  genericPropsDefaults,
} from '../../../utils/prop-types'
import {
  FooterPrimaryRow,
  SocialMediaLinks,
  FooterNav,
  FooterLinks,
  LinkList,
  LinkListItem,
  Copyright,
} from './StyledFooterPrimary'

const FooterPrimary = ({ as, direction, ...rest }) => {
  return (
    <FooterPrimaryRow align="stretch">
      <SocialMediaLinks
        sizes={{ xs: 12, md: 6 }}
        align="center"
        justify="center"
      >
        social media
      </SocialMediaLinks>

      <FooterNav sizes={{ xs: 12, sm: 8, md: 4 }}>
        <LinkList>
          <LinkListItem>1</LinkListItem>
          <LinkListItem>2</LinkListItem>
          <LinkListItem>3</LinkListItem>
          <LinkListItem>4</LinkListItem>
          <LinkListItem>5</LinkListItem>
          <LinkListItem>6</LinkListItem>
          <LinkListItem>7</LinkListItem>
        </LinkList>
      </FooterNav>
      <FooterLinks sizes={{ xs: 12, sm: 4, md: 2 }} align="center">
        images
      </FooterLinks>

      <Copyright>
        © Copyright 2020 The Money Advice Service 120 Holborn, London EC1N 2TD
      </Copyright>
    </FooterPrimaryRow>
  )
}

FooterPrimary.prototypes = {
  ...genericPropTypes,
}
FooterPrimary.defaultProps = {
  ...genericPropsDefaults(),
}

export default FooterPrimary
