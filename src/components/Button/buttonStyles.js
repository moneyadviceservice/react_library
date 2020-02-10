import styled, { css } from 'styled-components'
import {
  resolveMedia,
  genericStyles,
  setStyle,
  borderStyle,
} from '../../utils/helpers/index.js'

const defaultStyle = props => css`
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
`

const primaryStyle = props => css`
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
`

const disabledStyle = css`
  &:disabled {
    box-shadow: none;
    background: ${props =>
      props.primary
        ? props.theme.colors.button.primary.disabledBackground
        : props.theme.colors.button.disabledBackground};
    border-color: ${props =>
      !props.border &&
      (props.primary
        ? props.theme.colors.button.primary.disabledBorderColor
        : props.theme.colors.button.disabledBorderColor)};
    color: ${props => props.theme.colors.button.disabledColor};
  }
`

const hoverStyle = css`
  &:focus,
  &:hover,
  &:active {
    background: ${props =>
      props.primary
        ? props.theme.colors.button.primary.activeBackground
        : props.theme.colors.button.activeBackground};
    border-color: ${props =>
      !props.border &&
      (props.primary
        ? props.theme.colors.button.primary.activeBorderColor
        : props.theme.colors.button.activeBorderColor)};
    text-decoration: none;
  }
`

const activeStyle = css`
  &:active {
    padding-top: ${props => !props.padding && '8px'};
    border-bottom-color: ${props =>
      !props.border &&
      (props.primary
        ? props.theme.colors.button.primary.borderBottomColor
        : props.theme.colors.button.borderBottomColor)};
    border-top: ${props =>
      !props.border &&
      `4px solid ${
        props.primary
          ? props.theme.colors.button.primary.activeBorderColor
          : props.theme.colors.button.activeBorderColor
      }`};
    border-bottom: ${props => !props.border && 'none'};
  }
`

const ButtonWrapper = styled.button`
  ${genericStyles}

  -webkit-font-smoothing: antialiased;
  text-shadow: 1px 1px transparent;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  outline: 0;
  transition: background 0.2s ease;

  /** padding */
  ${props =>
    !props.padding && setStyle('padding', props.theme.sizes.button.padding)}
  /** border */
  ${props => !props.border && borderStyle(props.theme.sizes.button.border.size)}

  /** prop styles */
  font-weight: ${props => props.theme.typography.fontMedium};
  border-radius: ${props => props.theme.sizes.button.border.radius};
  ${props => (props.primary ? primaryStyle(props) : defaultStyle(props))}

  /** conditional styles */
  ${props => !props.disabled && props.focus && props.active && activeStyle}
  ${props => !props.disabled && props.active && hoverStyle}
  ${props => props.disabled && disabledStyle}

  ${resolveMedia.md`
    /** padding */
    ${props =>
      !props.padding &&
      setStyle('padding', props.theme.sizes.button.paddingMd)};
  `}
`

export { ButtonWrapper }
