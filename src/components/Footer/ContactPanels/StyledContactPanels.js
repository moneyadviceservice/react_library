import styled from 'styled-components'
import { resolveMedia } from '../../../utils/helpers'
import { Row, Col } from '../../Grid'
import Button from '../../Button'

// Contact Panel Container
const ContactPanelContainer = styled(Col)``

// Social media contacts row
const ContactPanelRow = styled(Row)`
  padding: 0;

  ${resolveMedia.xs`
    & > *:not(:last-child) {
      border-bottom: 1px solid #cbdae0;
    }
  `}

  ${resolveMedia.md`
    & > *:not(:last-child):after {
      content: '';
      border-right: 1px solid #cbdae0;
      width: 1px;
      height: 100%;
    }
    & > *:not(:last-child) {
      border-bottom: none;
    }
  `}
`

// Individual social media contact column
const ContactPanelColumn = styled(Col)`
  ${props => !props.justify && 'justify-content: center;'}
  ${props => !props.align && 'text-align: center;'}
`

const FooterButtons = styled(Button)``

export {
  ContactPanelContainer,
  ContactPanelRow,
  ContactPanelColumn,
  FooterButtons,
}
