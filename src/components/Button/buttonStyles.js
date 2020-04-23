import styled, { css } from 'styled-components'
import {
  resolveMedia,
  genericStyles,
  setStyle,
  borderStyle,
} from '../../utils/helpers'

const defaultStyle = css`
  /** border-bottom */
  ${props =>
    !props.border &&
    borderStyle({
      side: 'bottom',
      color: props.theme.colors.button.borderBottomColor,
      size: 'medium',
    })}
  background: ${props => props.theme.colors.button.background};
  color: ${props => props.theme.colors.button.color};
  ${props =>
    !props.weight && `font-weight: ${props.theme.typography.fontMedium}`};

  &:focus,
  &:hover,
  &:active {
    ${props =>
      !props.background &&
      `background-color: ${props.theme.colors.button.activeBackground};`}
    ${props =>
      !props.border &&
      `border-color: ${props.theme.colors.button.activeBorderColor};`}
  }

  &:active {
    ${props =>
      !props.border &&
      `border-bottom-color: ${props.theme.colors.button.borderBottomColor};
        border-top: 3px solid ${props.theme.colors.button.activeBorderColor}`}
  }

  &[disabled] {
    ${props =>
      !props.background &&
      `background-color: ${props.theme.colors.button.disabledBackground};`}
    ${props =>
      !props.border &&
      `border-color: ${props.theme.colors.button.disabledBorderColor};`}
  }
`

const primaryStyle = css`
  /** border-bottom */
  ${props =>
    !props.border &&
    borderStyle({
      side: 'bottom',
      color: props.theme.colors.button.primary.borderBottomColor,
      size: 'medium',
    })}
  background: ${props => props.theme.colors.button.primary.background};
  color: ${props => props.theme.colors.button.primary.color};
  ${props =>
    !props.weight && `font-weight: ${props.theme.typography.fontMedium}`};

  &:focus,
  &:hover,
  &:active {
    ${props =>
      !props.background &&
      `background-color: ${props.theme.colors.button.primary.activeBackground};`}
    ${props =>
      !props.border &&
      `border-color: ${props.theme.colors.button.primary.activeBorderColor};`}
  }

  &:active {
    ${props =>
      !props.border &&
      `border-bottom-color: ${props.theme.colors.button.primary.borderBottomColor};
        border-top: 3px solid ${props.theme.colors.button.primary.activeBorderColor}`}
  }

  &[disabled] {
    ${props =>
      !props.background &&
      `background-color: ${props.theme.colors.button.primary.disabledBackground};`}
    ${props =>
      !props.border &&
      `border-color: ${props.theme.colors.button.primary.disabledBorderColor};`}
  }
`

const blogStyle = css`
  ${props =>
    !props.background &&
    `background-color: ${props.theme.colors.button.blog.masBlue};`}
  color: ${props => props.theme.colors.white};
  ${props =>
    !props.weight && `font-weight: ${props.theme.typography.fontHeavy};`}
  ${props => !props.padding && `padding: 12px 13.5px;`}
  ${props => !props.border && `border-radius: 5px; border-bottom: none;`}
  text-transform: uppercase;
  font-size: 18px;
  line-height: 18px;

  &:hover {
    background-color: ${props => props.theme.colors.button.blog.masBlueDark};
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
  ${props =>
    !props.blog &&
    `font-size: 16px;
      line-height: 24px;
      border-radius: ${props.theme.sizes.button.border.radius};`}
  ${props =>
    !props.blog && setStyle('padding', props.theme.sizes.button.padding)}
  ${props => !props.border && borderStyle(props.theme.sizes.button.border.size)}

  ${resolveMedia.md`
    ${props =>
      !props.blog &&
      !props.padding &&
      setStyle('padding', props.theme.sizes.button.paddingMd)};
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
    ${props => !props.padding && !props.blog && 'padding-top: 9px;'};
    ${props => !props.border && !props.blog && 'border-bottom: none;'};
  }

  &[disabled] {
    box-shadow: none;
    ${props =>
      !props.blog && `color: ${props.theme.colors.button.disabledColor};`};
  }

  /** prop styles */
  ${props => props.weight && `font-weight: ${props.weight};`}

  /** conditional styles */
  ${props => {
    if (props.blog) {
      return blogStyle
    } else if (props.primary) {
      return primaryStyle
    } else {
      return defaultStyle
    }
  }}
`

export { ButtonWrapper }
