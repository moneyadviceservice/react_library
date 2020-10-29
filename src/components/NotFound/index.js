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
// translations
import LocaleEn from './locale_en.json'
import LocaleCy from './locale_cy.json'

const NotFound = ({
  a11yTitle,
  as,
  children,
  currentLng,
  linkText,
  linkUrl,
  i18nLng,
  ...rest
}) => {
  // locale
  const lng = i18nLng || (currentLng === 'cy' ? LocaleCy : LocaleEn)

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
        <NotFoundHeading level={1}>{lng.heading}</NotFoundHeading>
        <P>{lng.subHeading}</P>
      </NotFoundSection>
      <NotFoundSection grow={false}>
        <LinksHeading level={2}>{lng.links.title}</LinksHeading>
        <Anchor href={linkUrl || lng.links.link_1.url}>
          {linkText || lng.links.link_1.text}
        </Anchor>
        <Anchor href={lng.links.link_2.url}>{lng.links.link_2.text}</Anchor>
      </NotFoundSection>
      {children && <NotFoundSection grow={false}>{children}</NotFoundSection>}
    </NotFoundContainer>
  )
}

// Documentation
NotFound.propTypes = {
  /** The DOM tag or react component to use for the element. */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  /** Current Language Value */
  currentLng: PropTypes.oneOf(['en', 'cy']),
  /** Alternate text to be displayed in the directory link. */
  linkText: PropTypes.string,
  /** Alternate directory link url. */
  linkUrl: PropTypes.string,
  /** Alternate translations for the card. */
  i18nLng: PropTypes.object,
  ...genericPropTypes,
}

NotFound.defaultProps = {
  as: 'section',
  currentLng: 'en',
  ...genericPropsDefaults(),
}

/** @component */
export { NotFound }
