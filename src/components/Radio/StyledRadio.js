import styled from 'styled-components'
import { genericStyles } from '../../utils/helpers'

const Label = styled.label`
  ${genericStyles}
  ${({ disabled, theme }) => disabled && `color: ${theme.colors.disabledText};`}
  ${({ hide }) => !hide && `display: block;`}
`

const Field = styled.input`
  margin-right: 5px;
  padding: 0;
`

export { Label, Field }
