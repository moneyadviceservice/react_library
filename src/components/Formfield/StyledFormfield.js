import styled from 'styled-components'
import { genericStyles } from '../../utils/helpers'

const StyledFormfield = styled.fieldset`
  ${genericStyles}
  ${props => !props.padding && `padding: 0 1.125rem;`}
`

const Legend = styled.legend`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: ${({ theme, color }) =>
    color ? color : theme.colors.formfield.legendText};
  width: 100%;
  margin-bottom: 0.75rem;
`

export { StyledFormfield, Legend }
