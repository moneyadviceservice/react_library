import React from 'react'
import {
  genericPropTypes,
  genericPropsDefaults,
} from '../../../utils/prop-types'
import {
  FooterSecondaryContainer,
  Acessibility,
  MapsLink,
  ListContainer,
  FooterSecondaryList as List,
  FooterSecondaryListItem as ListItem,
} from './StyledFooterSecondary'

const FooterSecondary = ({ as, direction, ...rest }) => {
  return (
    <FooterSecondaryContainer>
      <Acessibility sizes={{ xs: 12, sm: 6, md: 'auto' }}>
        Report an accessibility problem
      </Acessibility>
      <MapsLink sizes={{ xs: 12, sm: 6, md: 'auto' }}>Maps LINK</MapsLink>
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
