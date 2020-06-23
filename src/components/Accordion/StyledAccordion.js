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
  ${({ padding }) =>
    !padding &&
    css`
      padding: 0;
    `}
`

// Accordion Button
const AccordionBtn = styled(Col)`
  cursor: pointer;
  padding: 5px 12px;
  margin: 5px 0;
  text-align: left;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  background-color: white;
  transition: 0.6s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.alternate};
    border: 1px solid black;
  }
`

// Icon
const Icon = styled(Chevron)`
  width: 25px;
  margin-right: 5px;
  transition: transform ease-out 0.3s;
  & path {
    fill: none;
    ${({ fillcolor, theme }) => css`
      stroke: ${fillcolor ? fillcolor : theme.colors.accordion.default};
    `}
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 20;
  }

  ${({ isopen }) =>
    isopen &&
    css`
      transform: rotate(90deg);
    `}
`

// Content
const ContentContainer = styled(Col)`
  height: auto;
  overflow: hidden;
  transition: ease-out 0.3s;

  ${({ hideBorder, borderColor, theme }) =>
    !hideBorder &&
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
      margin-left: 22px;
    `}

  ${({ show, maxHeight }) =>
    show
      ? css`
          opacity: 1;
          max-height: ${maxHeight};
        `
      : css`
          opacity: 0;
          max-height: 0;
        `}
`

const Content = styled(Paragraph)`
  ${({ margin }) =>
    !margin &&
    css`
      margin: 0;
    `}
`

export { AccordionBtn, Content, ContentContainer, Icon, StyledAccordion }
