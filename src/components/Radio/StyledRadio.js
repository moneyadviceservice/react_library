import styled from 'styled-components'
import { genericStyles } from '../../utils/helpers'

const Label = styled.label`
  ${genericStyles}
  ${props =>
    props.disabled &&
    `color: ${props.theme.colors.disabledText};`}
  display: block;
`

const Field = styled.input`
  margin-right: 5px;
  padding: 0;
`

export { Label, Field }
