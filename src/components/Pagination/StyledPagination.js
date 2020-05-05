import styled, { css } from 'styled-components'
import Button from '../Button'
import { Paragraph } from '../Paragraph'
import {
  genericStyles,
  breakpointStyle,
  responsiveProps,
} from '../../utils/helpers'
import { breakpoints } from '../../utils/constants'

const StyledPagination = styled.div`
  margin: 0 auto;
`
const PaginationButton = styled(Button)`
  ${props => props.displayPrev && `display: none;}`}
  ${props => props.displayNext && `display: none;}`}
`
const PaginationCounter = styled(Paragraph)`
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  width: auto;
  padding: 10px 20px;
`

export { StyledPagination, PaginationButton, PaginationCounter }
