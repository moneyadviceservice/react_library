import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { Anchor } from '../Anchor'
import { Content, ContentContainer, StyledAccordion } from './StyledAccordion'

const Accordion = ({
  a11yTitle,
  children,
  text,
  title,
  onChange,
  openByDefault,
  ...rest
}) => {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  let currentContent = null

  useEffect(() => {
    currentContent.style.height = open
      ? `${currentContent.scrollHeight}px`
      : (currentContent.style.height = '0')
  }, [contentRef, open])

  return (
    <StyledAccordion aria-label={a11yTitle} {...rest}>
      <Anchor
        onClick={() => {
          setOpen(!open)
          if (onChange) onChange()
        }}
      >
        {title}
      </Anchor>
      <ContentContainer
        show={open}
        ref={c => {
          currentContent = c
        }}
      >
        {text && <Content>{text}</Content>}
        {children}
      </ContentContainer>
    </StyledAccordion>
  )
}

// Documentation
Accordion.propTypes = {
  // Color for the chevron
  color: PropTypes.string,
  // The children elements to render within the acordion
  children: PropTypes.node,
  // The text to render inside the accordion
  text: PropTypes.string,
  // Title of the accordion
  title: PropTypes.string,
  // Callback when the accordion state changes
  onChange: PropTypes.func,
  // Set accordion to be opened by default
  openByDefault: PropTypes.bool,
  ...genericPropTypes,
}

Accordion.defaultProps = {
  ...genericPropsDefaults(),
}

/** @component */
export { Accordion }
