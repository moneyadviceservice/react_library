import styled from 'styled-components'
import { genericStyles } from '../../utils/helpers'

const Label = styled.label`
  ${genericStyles}
  /** conditional styles */
  ${({ margin }) => !margin && `margin-bottom: 0.75rem;`}
  ${({ disabled, theme }) => disabled && `color: ${theme.colors.disabledText};`}
  ${({ hide }) => !hide && `display: block;`}
  font-size: 1rem;
  line-height: 1.375rem;
  
`

const Field = styled.input`
  margin-right: 5px;
  padding: 0;
`

export { Label, Field }
