import styled, { css } from 'styled-components'
// import components
import { Row, Col } from '../Grid'
import { Heading } from '../Heading'
import Button from '../Button'
import { Paragraph } from '../Paragraph'
import { Inline } from '../Inline'

const CardContainer = styled(Col)`
  ${({ margin }) =>
    !margin &&
    css`
      margin-bottom: 20px;
    `}
  ${({ padding }) =>
    !padding &&
    css`
      padding: 15px 0;
    `}
  ${({ border }) =>
    !border &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.companyCard.cardBorder};
      border-radius: 5px;
    `}
  
  /** box-shadow */
  transition: box-shadow ease-in 0.2s;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.companyCard.boxShadow};

  &:hover {
    box-shadow: 4px 4px 4px ${({ theme }) =>
      theme.colors.companyCard.boxShadow};
  }
`

const CardRow = styled(Row)`
  padding: 0;
`

const CardCol = styled(Col)``

const CompanyTitle = styled(Heading)`
  color: ${({ theme }) => theme.colors.companyCard.default};
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.companyCard.titleBorder};
`

const SubHeading = styled(Heading)``

const CardButton = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: white;
  color: ${({ theme }) => theme.colors.companyCard.default};
  border: 1px solid ${({ theme }) => theme.colors.companyCard.default};
  border-radius: 5px;
  margin-bottom: 10px;

  /** box-shadow */
  transition: box-shadow ease-in 0.1s;

  &:hover {
    background-color: white;
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.companyCard.default};
  }

  & svg {
    fill: ${({ theme }) => theme.colors.companyCard.default};
    width: 20px;
    margin-right: 10px;
  }
`

const Info = styled(Paragraph)`
  margin-bottom: 0.25rem;
`

const InfoTitle = styled(Inline)`
  font-weight: 700;
`

export {
  CardContainer,
  CardRow,
  CardCol,
  CompanyTitle,
  SubHeading,
  CardButton,
  Info,
  InfoTitle,
}
