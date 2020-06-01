import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { Anchor } from '../Anchor'
import { Content, ContentContainer, StyledAccordion } from './StyledAccordion'

const Accordion = ({ a11yTitle, children, text, title, ...rest }) => {
  const [open, setOpen] = useState(false)

  return (
    <StyledAccordion aria-label={a11yTitle} {...rest}>
      <Anchor onClick={() => setOpen(!open)}>{title}</Anchor>
      {text && (
        <ContentContainer>
          <Content>{text}</Content>
        </ContentContainer>
      )}
      {children}
    </StyledAccordion>
  )
}

// Documentation
Accordion.propTypes = {
  ...genericPropTypes,
}

Accordion.defaultProps = {
  ...genericPropsDefaults(),
}

/** @component */
export { Accordion }
