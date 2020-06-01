import styled, { css } from 'styled-components'
import { Col } from '../Grid'
import { Paragraph } from '../Paragraph'

// Accordion container
const StyledAccordion = styled(Col)`
  ${({ width }) => !width && `width: 100%;`}
`

const ContentContainer = styled(Col)`
  ${({ padding }) => !padding && `padding: 0;`}
  height: 0px;
  overflow: hidden;
  transition: ease-out 0.3s;
  opacity: 0;

  ${({ show }) =>
    show &&
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
  ${({ border }) => !border && `border-left: 4px solid #027db4;`}
  ${({ padding }) => !padding && `padding: 2px 8px;`}
`

export { Content, ContentContainer, StyledAccordion }
