import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { Paragraph } from '../Paragraph'
import {
  AccordionBtn,
  Content,
  ContentContainer,
  Icon,
  StyledAccordion,
} from './StyledAccordion'

const Accordion = ({
  a11yTitle,
  active,
  children,
  color,
  text,
  title,
  titleSize,
  titleWeight,
  noBorder,
  onChange,
  ...rest
}) => {
  // set open state
  const [open, setOpen] = useState(false)
  // manage height
  const [height, setHeight] = useState('0')
  const contentRef = useRef()

  // dynamically change the height of the content element
  useEffect(() => {
    setHeight(`${contentRef.current.offsetTop}px`)
  }, [open])

  // manage open state when active prop is used
  useEffect(() => {
    setOpen(active)
  }, [active])

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
        flexWrap="nowrap"
        onClick={() => {
          setOpen(!open)
          if (onChange) onChange()
        }}
      >
        <Icon fillcolor={color} isopen={open ? 1 : 0} />
        <Paragraph
          color={color}
          margin="0"
          width="auto"
          textSize={titleSize}
          weight={titleWeight}
        >
          {title}
        </Paragraph>
      </AccordionBtn>
      <ContentContainer
        borderColor={color}
        hideBorder={noBorder}
        show={open}
        ref={contentRef}
        maxHeight={height}
      >
        {text && <Content>{text}</Content>}
        {children}
      </ContentContainer>
    </StyledAccordion>
  )
}

// Documentation
Accordion.propTypes = {
  /** Set accordion to be opened if true. */
  active: PropTypes.bool,
  /** Color for the chevron. */
  color: PropTypes.string,
  /** The children elements to render within the acordion. */
  children: PropTypes.node,
  /** The text to render inside the accordion. */
  text: PropTypes.string,
  /** Title of the accordion. */
  title: PropTypes.string,
  /** Specifies the font size of the accordion title. */
  titleSize: PropTypes.string,
  /** Specifies the font weight of the accordion title. */
  titleWeight: PropTypes.string,
  /** Removes border from content. */
  noBorder: PropTypes.bool,
  /** Callback when the accordion state changes. */
  onChange: PropTypes.func,
  ...genericPropTypes,
}

Accordion.defaultProps = {
  noBorder: false,
  ...genericPropsDefaults(),
}

/** @component */
export { Accordion }
