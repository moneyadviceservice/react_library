import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { button, typography } from '../config/styles'
import { resolveMedia } from '../config/helpers'

const Wrapper = styled.button`
  ${typography.fontBody}

  // doesn't work as well with italics as with regular text
  -webkit-font-smoothing: antialiased;
  // improves antialiasing in Chrome and Windows
  text-shadow: 1px 1px transparent;

  font-size: 16px;
  line-height: 24px;

  padding: 12px 22px;
  transition: background 0.2s ease;
  border: none;
  border-radius: 4px;

  &:focus,
  &:hover,
  &:active {
    background: ${props =>
      props.primary
        ? button.primary.activeBackground
        : button.default.activeBackground};
    border-color: ${props =>
      props.primary
        ? button.primary.activeBorderColor
        : button.default.activeBorderColor};
    text-decoration: none;
    color: #000000;
    outline: 0;
  }

  &:active {
    padding-top: 9px;
    border-bottom-color: ${props =>
      props.primary
        ? button.primary.borderBottomColor
        : button.default.borderBottomColor};
    border-top: 3px solid
      ${props =>
        props.primary
          ? button.primary.activeBorderColor
          : button.default.activeBorderColor};
  }

  &.is-disabled,
  &[disabled] {
    box-shadow: none;
    background: ${props =>
      props.primary
        ? button.primary.disabledBackground
        : button.default.disabledBackground};
    border-color: ${props =>
      props.primary
        ? button.primary.disabledBorderColor
        : button.default.disabledBorderColor};
    color: #666969;
  }

  border-bottom: 4px solid
    ${props =>
      props.primary
        ? button.primary.borderBottomColor
        : button.default.borderBottomColor};
  background: ${props =>
    props.primary ? button.primary.background : button.default.background};
  color: ${props =>
    props.primary ? button.primary.color : button.default.color};

  ${resolveMedia.sm``}
`

function Button({ primary, text, onClick, disabled }) {
  return (
    <Wrapper primary={primary} onClick={onClick} disabled={disabled}>
      {text}
    </Wrapper>
  )
}

// Documentation
Button.propTypes = {
  /** text inside button */
  text: PropTypes.string,
  /** primary button styles */
  primary: PropTypes.bool,
  /** disables button clicks */
  disabled: PropTypes.bool,
  /** on click event */
  onClick: PropTypes.func,
}

Button.defaultProps = {
  text: null,
  primary: false,
  disabled: false,
  onClick: event => {
    // eslint-disable-next-line no-console
    console.log('You have clicked me!', event.target)
  },
}

/** @component */
export default Button
