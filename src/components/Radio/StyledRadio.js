import styled from 'styled-components'
import { genericStyles } from '../../utils/helpers'

const Label = styled.label`
  ${genericStyles}
  ${({ disabled, theme }) => disabled && `color: ${theme.colors.disabledText};`}
  ${({ hide }) => !hide && `display: flex;`}
  ${({ margin }) => !margin && `margin-bottom: 5px;`}
`

const Field = styled.input`
  margin-right: 10px;
  margin-top: 5px;
`

export { Label, Field }
