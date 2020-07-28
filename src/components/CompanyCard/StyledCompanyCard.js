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
      border: 1px solid #edf0f2;
      border-radius: 5px;
    `}
  
  box-shadow: 5px 5px 5px rgba(215, 215, 215, 1);
`

const CardRow = styled(Row)`
  padding: 0;
`

const CardCol = styled(Col)``

const CompanyTitle = styled(Heading)`
  color: #003d8e;
  border-bottom: 1px solid #edf0f0;
`

const SubHeading = styled(Heading)``

const CardButton = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: transparent;
  color: #003d8e;
  border: 1px solid #003d8e;
  border-radius: 5px;
  margin-bottom: 10px;

  & svg {
    fill: #003d8e;
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
