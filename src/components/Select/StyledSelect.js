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

  padding-bottom: 0.5rem;
`

const Field = styled.select`
  ${genericStyles}

  ${({ margin }) =>
    !margin &&
    css`
      margin-bottom: 12px;
    `}
  ${({ padding }) =>
    !padding &&
    css`
      padding: 5px;
    `}
  ${({ width }) =>
    css`
      width: ${width};
    `}
  
  text-transform: none;
`

export { Label, Field }
