import styled, { css } from 'styled-components'
import { Col } from '../Grid'
import { Paragraph } from '../Paragraph'

const TableContainer = styled(Col)`
  padding: 0;
  ${({ tableColor, theme }) =>
    css`
      border: 2px solid ${tableColor || theme.colors.infotable.default};
    `}
`

const TableIcon = styled.span`
  margin-right: 10px;
  & > * {
    width: 30px;

    ${({ titleColor }) =>
      css`
        stroke: ${titleColor};
      `}
  }
`

const TableHead = styled(Col)`
  font-size: 1.375rem;
  line-height: 1.875rem;
  font-weight: 500;
  padding: 12px;

  ${({ titleColor }) =>
    css`
      color: ${titleColor};
    `}
  ${({ tableColor, theme }) =>
    css`
      background-color: ${tableColor || theme.colors.infotable.default};
    `}
`

const TableContent = styled(Col)`
  ${({ padding }) =>
    !padding &&
    css`
      padding: 12px;
    `}
`

const TableText = styled(Paragraph)``

export { TableContainer, TableIcon, TableHead, TableContent, TableText }
