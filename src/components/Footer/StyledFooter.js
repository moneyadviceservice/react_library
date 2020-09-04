import styled from 'styled-components'
import Container from '../Grid/Container'

// Main footer container
const FooterContainer = styled(Container)`
  ${({ padding }) => !padding && `padding: 0;`}

  p {
    color: ${({ theme }) => theme.colors.footer.text};
  }
`

export { FooterContainer }
