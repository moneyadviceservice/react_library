import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { Anchor } from '../Anchor'
import {
  AccordionBtn,
  Content,
  ContentContainer,
  Icon,
  StyledAccordion,
} from './StyledAccordion'

const Accordion = ({
  a11yTitle,
  children,
  color,
  text,
  title,
  onChange,
  openByDefault,
  ...rest
}) => {
  const [open, setOpen] = useState(openByDefault)
  const contentRef = useRef(null)
  let currentContent = null

  useEffect(() => {
    currentContent.style.height = open
      ? `${currentContent.scrollHeight}px`
      : (currentContent.style.height = '0')
  }, [contentRef, open])

  return (
    <StyledAccordion
      forwardedAs="section"
      aria-label={a11yTitle || title}
      {...rest}
    >
      <AccordionBtn
        forwardedAs="button"
        aria-expanded={open}
        direction="row"
        align="center"
        justify="flex-start"
        onClick={() => {
          setOpen(!open)
          if (onChange) onChange()
        }}
      >
        <Icon fillColor={color} isOpen={open} />
        <Anchor color={color} margin="0" width="auto">
          {title}
        </Anchor>
      </AccordionBtn>
      <ContentContainer
        show={open}
        ref={c => {
          currentContent = c
        }}
      >
        {text && <Content borderColor={color}>{text}</Content>}
        {children}
      </ContentContainer>
    </StyledAccordion>
  )
}

// Documentation
Accordion.propTypes = {
  /** Color for the chevron. */
  color: PropTypes.string,
  /** The children elements to render within the acordion. */
  children: PropTypes.node,
  /** The text to render inside the accordion. */
  text: PropTypes.string,
  /** Title of the accordion. */
  title: PropTypes.string,
  /** Callback when the accordion state changes. */
  onChange: PropTypes.func,
  /** Set accordion to be opened by default. */
  openByDefault: PropTypes.bool,
  ...genericPropTypes,
}

Accordion.defaultProps = {
  openByDefault: false,
  ...genericPropsDefaults(),
}

/** @component */
export { Accordion }
