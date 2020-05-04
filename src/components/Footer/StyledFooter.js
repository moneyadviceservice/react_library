import styled from 'styled-components'
import Container from '../Grid/Container'

// Main footer container
const FooterContainer = styled(Container)`
  ${props => !props.padding && `padding: 0;`}
`

export { FooterContainer }
