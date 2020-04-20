import styled from 'styled-components'
import { resolveMedia } from '../../../utils/helpers'
import { Row, Col } from '../../Grid'

const FooterPrimaryRow = styled(Row)`
  ${props =>
    !props.background && `background-color: ${props.theme.colors.alternate};`}
  ${props => !props.padding && `padding: 24px 0 12px;`}
`

const SocialMediaLinks = styled(Col)``

const FooterNav = styled(Col)``

const FooterLinks = styled(Col)``

const LinkList = styled.ul`
  display: flex;
  flex-wrap: inherit;
`

const LinkListItem = styled.li`
  width: 50%;
  margin-bottom: 0.75rem;
`

const Copyright = styled(Col)`
  line-height: 1.2rem;
  ${resolveMedia.sm`
    font-size: 1rem;
    line-height: 1.375rem;
  `}
`

export {
  FooterPrimaryRow,
  SocialMediaLinks,
  FooterNav,
  FooterLinks,
  LinkList,
  LinkListItem,
  Copyright,
}
