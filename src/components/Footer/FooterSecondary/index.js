import React from 'react'
import {
  genericPropTypes,
  genericPropsDefaults,
} from '../../../utils/prop-types'
import {
  FooterSecondaryContainer,
  Translation,
  Acessibility,
  MapsLink,
  ListContainer,
  FooterSecondaryList as List,
  FooterSecondaryListItem as ListItem,
} from './StyledFooterSecondary'

const FooterSecondary = ({ as, direction, ...rest }) => {
  return (
    <FooterSecondaryContainer>
      <Translation sizes="auto">Cymraeg</Translation>
      <Acessibility sizes="auto">Report an accessibility problem</Acessibility>
      <MapsLink sizes={{ xs: 12, sm: 'auto' }}>Maps LOGO</MapsLink>
      <ListContainer sizes={{ xs: 12, md: 'auto' }}>
        <List>
          <ListItem>item 1</ListItem>
          <ListItem>item 2</ListItem>
        </List>
      </ListContainer>
    </FooterSecondaryContainer>
  )
}

FooterSecondary.prototypes = {
  ...genericPropTypes,
}
FooterSecondary.defaultProps = {
  ...genericPropsDefaults(),
}

export default FooterSecondary
