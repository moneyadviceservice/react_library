import styled from 'styled-components'
import Button from '../Button'
import { Col } from '../Grid'
import { Paragraph } from '../Paragraph'

const StyledPagination = styled(Col)`
  ${({ margin }) => !margin && `margin: 0 auto;`}
`
const PaginationButton = styled(Button)`
  ${({ hide, noShow }) => !hide && noShow && `display: none;}`}
`
const PaginationCounter = styled(Paragraph)`
  margin: 0;
  width: auto;
  padding: 0 20px;
`

export { StyledPagination, PaginationButton, PaginationCounter }
