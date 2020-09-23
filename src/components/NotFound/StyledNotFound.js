import styled from 'styled-components'
import { Row, Col } from '../Grid'
import { Heading } from '../Heading'

const NotFoundContainer = styled(Row)`
  overflow: hidden;
  min-height: 650px;
`

const NotFoundSection = styled(Col)``

const NotFoundHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.notFound.heading};
`
const LinksHeading = styled(Heading)`
  font-weight: 700;
  margin: 0 0 1.5em;
  font-size: 1.25em;
  color: ${({ theme }) => theme.colors.notFound.linksHeading};
`

export { NotFoundContainer, NotFoundSection, NotFoundHeading, LinksHeading }
