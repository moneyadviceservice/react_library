import styled, { css } from 'styled-components'
import { genericStyles } from '../../utils/helpers'

const Label = styled.label`
  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${theme.colors.disabledText};
    `}
  ${({ hide }) =>
    hide
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}

  padding-bottom: 0.75rem;
`

const Field = styled.select`
  ${genericStyles}

  ${({ margin }) =>
    !margin &&
    css`
      margin-right: 5px;
    `}
  ${({ padding }) =>
    !padding &&
    css`
      padding: 5px;
    `}
  
  text-transform: none;
`

export { Label, Field }
