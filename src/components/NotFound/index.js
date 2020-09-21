import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
// components
import {
  NotFoundContainer,
  NotFoundSection,
  NotFoundHeading,
  LinksHeading,
} from './StyledNotFound'
import { Paragraph as P } from '../Paragraph'
import { Anchor } from '../Anchor'

const NotFound = ({ a11yTitle, as, ...rest }) => {
  return (
    <NotFoundContainer
      aria-label={a11yTitle}
      constrained
      direction="column"
      forwardedAs={as}
      justify="space-evenly"
      {...rest}
    >
      <NotFoundSection grow={false}>
        <NotFoundHeading level={1}>
          We're sorry. We can't find that page.
        </NotFoundHeading>
        <P>
          Please check the address you entered or try again later and you should
          be able to find it.
        </P>
      </NotFoundSection>
      <NotFoundSection grow={false}>
        <LinksHeading level={2}>Useful links</LinksHeading>
        <Anchor href="https://traveldirectory.moneyadviceservice.org.uk/">
          Return to the Travel Advice Directory homepage
        </Anchor>
        <Anchor href="https://www.moneyadviceservice.org.uk/">
          Go to the Money Advice Service homepage
        </Anchor>
      </NotFoundSection>
    </NotFoundContainer>
  )
}

// Documentation
NotFound.propTypes = {
  /** The DOM tag or react component to use for the element. */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  /** Content inside component. */
  children: PropTypes.node,
  ...genericPropTypes,
}

NotFound.defaultProps = {
  as: 'section',
  children: null,
  ...genericPropsDefaults(),
}

/** @component */
export { NotFound }
