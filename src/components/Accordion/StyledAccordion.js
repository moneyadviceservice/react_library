import styled from 'styled-components'
import { Col } from '../Grid'
import { Paragraph } from '../Paragraph'

// Accordion container
const StyledAccordion = styled(Col)``

const ContentContainer = styled(Col)`
  ${({ padding }) => !padding && `padding: 0;`}
`

const Content = styled(Paragraph)`
  ${({ border }) => !border && `border-left: 4px solid #027db4;`}
  ${({ padding }) => !padding && `padding: 2px 8px;`}
`

export { Content, ContentContainer, StyledAccordion }
