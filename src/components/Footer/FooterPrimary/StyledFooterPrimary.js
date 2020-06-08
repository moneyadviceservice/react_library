import styled from 'styled-components'
import { resolveMedia } from '../../../utils/helpers'
import { Row, Col } from '../../Grid'
import { Anchor } from '../../Anchor'
import { Paragraph } from '../../Paragraph'

// row container
const FooterRow = styled(Row)`
  ${props =>
    !props.background && `background-color: ${props.theme.colors.alternate};`}
`

const FooterPrimaryContainer = styled(Col)`
  ${props => !props.padding && `padding: 24px 15px 12px;`}
`

// social media section
const SocialContainer = styled(Col)`
  ${props => !props.padding && `padding: 12px 0;`}
`

const SocialLink = styled(Col)`
  flex-grow: 0;
`

const SocialLogo = styled(Anchor)`
  ${props =>
    props.facebook &&
    `background-color: #3c5a99; &:hover{background-color: #214782;}`}
  ${props =>
    props.twitter &&
    `background-color: #2ba9e1; &:hover{background-color: #1991b8;}`}
  ${props =>
    props.youtube &&
    `background-color: #cd201f; &:hover{background-color: #b61b1b;}`}

  border-radius: 50%;
  width: 60px; 
  height: 60px;
  line-height: 60px;
  text-align: center;

  & svg {
    vertical-align: middle;
    width: 25px; 
    height: 25px;
    fill: white;
  }
`

const SocialCounter = styled(Paragraph)`
  display: none;
  flex-direction: column;
  text-align: center;
  width: auto;

  & span:nth-of-type(1) {
    display: block;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  & span:nth-of-type(2) {
    display: block;
    font-size: 0.875rem;
    line-height: 0.875rem;
  }

  ${resolveMedia.sm`
    display: flex;
    ${props => !props.margin && `margin: 6px 0;`}
  `}

  ${resolveMedia.md`
    ${props => !props.margin && `margin: 6px;`}
  `}
`

// navigation links section
const FooterNav = styled(Col)`
  ${props => !props.padding && `padding: 12px 0;`}
`

const LinkList = styled.ul`
  display: flex;
  flex-wrap: inherit;
`

const LinkListItem = styled.li`
  width: 50%;
  margin-bottom: 0.75rem;
`

// blog & clear english section
const FooterLinks = styled(Col)`
  ${props => !props.padding && `padding: 12px 0;`}
`
const BlogContainer = styled(Col)`
  ${props => !props.margin && `margin-bottom: 24px;`}
`

const ClearEnglishContainer = styled(Col)`
  & svg {
    width: 80px;
  }
`

// copyright section
const Copyright = styled(Col)`
  line-height: 1.2rem;

  ${resolveMedia.sm`
    font-size: 1rem;
    line-height: 1.375rem;
  `}
`

export {
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
}
