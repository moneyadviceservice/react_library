import styled, { css } from 'styled-components'
import {
  resolveMedia,
  genericStyles,
  setStyle,
  borderStyle,
} from '../../utils/helpers'

const defaultStyle = css`
  /** border-bottom */
  ${({ border, theme }) =>
    !border &&
    borderStyle({
      side: 'bottom',
      color: theme.colors.button.borderBottomColor,
      size: 'medium',
    })}
  background: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.color};
  ${({ weight, theme }) =>
    !weight && `font-weight: ${theme.typography.fontMedium}`};

  &:focus,
  &:hover,
  &:active {
    ${({ background, theme }) =>
      !background &&
      `background-color: ${theme.colors.button.activeBackground};`}
    ${({ border, theme }) =>
      !border && `border-color: ${theme.colors.button.activeBorderColor};`}
  }

  &:active {
    ${({ border, theme }) =>
      !border &&
      `border-bottom-color: ${theme.colors.button.borderBottomColor};
        border-top: 4px solid ${theme.colors.button.activeBorderColor}`}
  }

  &[disabled] {
    ${({ background, theme }) =>
      !background &&
      `background-color: ${theme.colors.button.disabledBackground};`}
    ${({ border, theme }) =>
      !border && `border-color: ${theme.colors.button.disabledBorderColor};`}
  }
`

const primaryStyle = css`
  /** border-bottom */
  ${({ border, theme }) =>
    !border &&
    borderStyle({
      side: 'bottom',
      color: theme.colors.button.primary.borderBottomColor,
      size: 'medium',
    })}
  background: ${({ theme }) => theme.colors.button.primary.background};
  color: ${({ theme }) => theme.colors.button.primary.color};
  ${({ weight, theme }) =>
    !weight && `font-weight: ${theme.typography.fontMedium}`};

  &:focus,
  &:hover,
  &:active {
    ${({ background, theme }) =>
      !background &&
      `background-color: ${theme.colors.button.primary.activeBackground};`}
    ${({ border, theme }) =>
      !border &&
      `border-color: ${theme.colors.button.primary.activeBorderColor};`}
  }

  &:active {
    ${({ border, theme }) =>
      !border &&
      `border-bottom-color: ${theme.colors.button.primary.borderBottomColor};
        border-top: 4px solid ${theme.colors.button.primary.activeBorderColor}`}
  }

  &[disabled] {
    ${({ background, theme }) =>
      !background &&
      `background-color: ${theme.colors.button.primary.disabledBackground};`}
    ${({ border, theme }) =>
      !border &&
      `border-color: ${theme.colors.button.primary.disabledBorderColor};`}
  }
`

const blogStyle = css`
  ${({ background, theme }) =>
    !background && `background-color: ${theme.colors.button.blog.masBlue};`}
  color: ${({ theme }) => theme.colors.white};
  ${({ weight, theme }) =>
    !weight && `font-weight: ${theme.typography.fontHeavy};`}
  ${({ padding }) => !padding && `padding: 12px 13.5px;`}
  ${({ border }) => !border && `border-radius: 5px; border-bottom: none;`}
  text-transform: uppercase;
  font-size: 18px;
  line-height: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.blog.masBlueDark};
  }
`

const ButtonWrapper = styled.button`
  ${genericStyles}

  /** common styles */
  -webkit-font-smoothing: antialiased;
  text-shadow: 1px 1px transparent;
  text-decoration: none;
  outline: 0;
  transition: background 0.2s ease;

  /** defaults */
  ${({ blog, theme }) =>
    !blog &&
    `font-size: 16px;
      line-height: 24px;
      border-radius: ${theme.sizes.button.border.radius};`}
  /** padding */
  ${({ blog, theme }) =>
    !blog && setStyle('padding', theme.sizes.button.padding)}
  /** border */
  ${({ border, theme }) =>
    !border && borderStyle(theme.sizes.button.border.size)}

  ${resolveMedia.md`
    ${({ blog, padding, theme }) =>
      !blog && !padding && setStyle('padding', theme.sizes.button.paddingMd)};
  `}

  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
  }

  &:hover :not([disabled]) {
    cursor: pointer;
  }

  &:active {
    ${({ blog, padding }) => !padding && !blog && 'padding-top: 12px;'};
    ${({ blog, border }) => !border && !blog && 'border-bottom: none;'};
  }

  &[disabled] {
    box-shadow: none;
    ${({ blog, theme }) =>
      !blog && `color: ${theme.colors.button.disabledColor};`};
  }

  /** prop styles */
  ${({ weight }) => weight && `font-weight: ${weight};`}

  /** conditional styles */
  ${({ blog, plain, primary }) => {
    if (!plain) {
      if (blog) {
        return blogStyle
      } else if (primary) {
        return primaryStyle
      } else {
        return defaultStyle
      }
    }
  }}
`

export { ButtonWrapper }
