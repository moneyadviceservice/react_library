import styled, { css } from 'styled-components'
import { Col } from '../Grid'
import { Paragraph } from '../Paragraph'
import Chevron from '../../assets/Images/chevron.svg'

// Accordion container
const StyledAccordion = styled(Col)`
  ${({ width }) =>
    !width &&
    css`
      width: 100%;
    `}
`

// Accordion Button
const AccordionBtn = styled(Col)`
  cursor: pointer;
  padding: 10px 0;
  border: none;
  outline: none;
  background-color: white;
  transition: background-color 0.6s ease;
`

// Icon
const Icon = styled(Chevron)`
  width: 12px;
  margin-right: 10px;
  transition: transform ease-out 0.3s;
  ${({ fillColor, theme }) => css`
    fill: ${fillColor ? fillColor : theme.colors.accordion.default};
  `}

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(90deg);
    `}
`

// Content
const ContentContainer = styled(Col)`
  height: 0px;
  overflow: hidden;
  transition: ease-out 0.3s;
  opacity: 0;
  ${props =>
    props.show &&
    css`
      opacity: 1;
    `}

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`

const Content = styled(Paragraph)`
  ${({ border, borderColor, theme }) =>
    !border &&
    css`
      border-left-width: 5px;
      border-left-style: solid;
      border-left-color: ${borderColor
        ? borderColor
        : theme.colors.accordion.default};
    `}
  ${({ padding }) =>
    !padding &&
    css`
      padding-left: 10px;
    `}
  ${({ margin }) =>
    !margin &&
    css`
      margin: 0;
    `}
`

export { AccordionBtn, Content, ContentContainer, Icon, StyledAccordion }
