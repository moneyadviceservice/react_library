import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
// wrapper
import { ButtonWrapper } from './buttonStyles'

function Button({
  as,
  a11yTitle,
  primary,
  text,
  onClick,
  disabled,
  type = 'button',
  children,
  margin,
  alignSelf,
  href,
  onBlur,
  onFocus,
  onMouseOut,
  onMouseOver,
  ...rest
}) {
  const domTag = !as && href ? 'a' : as

  const [hover, setHover] = useState(false)

  const [focus, setFocus] = useState()

  return (
    <ButtonWrapper
      as={domTag}
      aria-label={a11yTitle}
      primary={primary}
      onClick={onClick}
      disabled={disabled}
      type={!href ? type : undefined}
      margin={margin}
      alignSelf={alignSelf}
      href={href}
      onFocus={() => {
        setFocus(true)
      }}
      onBlur={() => {
        setFocus(false)
      }}
      focus={focus}
      onMouseOver={() => {
        setHover(true)
      }}
      onMouseOut={() => {
        setHover(false)
      }}
      active={hover}
      {...rest}
    >
      {text}
      {children}
    </ButtonWrapper>
  )
}

// Documentation
Button.propTypes = {
  /** The DOM tag or react component to use for the element. */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** If specified, the button will behave like an anchor tag. */
  href: PropTypes.string,
  /** Label text to place inside the button. */
  text: PropTypes.string,
  /** Whether this is a primary button. There should be at most one per page or screen. */
  primary: PropTypes.bool,
  /** Whether the button is disabled. */
  disabled: PropTypes.bool,
  /** On click event. This triggers specific function. */
  onClick: PropTypes.func,
  /** Button content. */
  children: PropTypes.node,
  /** The type of button. Sets the type to submit for the default button on forms. */
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  ...genericPropTypes,
}

Button.defaultProps = {
  primary: false,
  disabled: false,
  type: 'button',
  ...genericPropsDefaults,
}

/** @component */
export default Button
