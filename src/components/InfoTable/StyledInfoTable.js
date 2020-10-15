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
    height: 30px;

    ${({ titleColor }) =>
      css`
        stroke: ${titleColor};
      `}
  }
`

const TableHead = styled(Col)`
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 1.4375rem;
  padding: 0.75rem;

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
  font-size: 1rem;
  line-height: 1.4375rem;
  color: ${({ theme }) => theme.colors.infotable.content};
  ${({ padding }) =>
    !padding &&
    css`
      padding: 1.5rem;
    `}
`

const TableText = styled(Paragraph)``

export { TableContainer, TableIcon, TableHead, TableContent, TableText }
