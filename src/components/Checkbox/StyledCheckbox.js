import styled from 'styled-components'
import { genericStyles } from '../../utils/helpers'

const Label = styled.label`
  ${genericStyles}
  ${props => !props.margin && `margin-bottom: 0.75rem;`}
  ${props => props.disabled && `color: ${props.theme.colors.disabledText};`}
  font-size: 1rem;
  line-height: 1.375rem;
  display: block;
`

const Field = styled.input`
  margin-right: 5px;
  padding: 0;
`

export { Label, Field }
