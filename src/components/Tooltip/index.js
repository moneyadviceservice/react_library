import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { StyledTooltip, Icon, Tip, TipClose } from './StyledTooltip'
import MobileClose from '../../assets/Images/mobile_close.svg'

const Tooltip = ({
  a11yTitle,
  children,
  closeBtn,
  hover,
  minWidth,
  side,
  text,
  ...rest
}) => {
  const node = useRef()
  const [show, setShow] = useState(false)

  /** Manage clicks */
  const handleClick = () => {
    if (!show) {
      setShow(true)
      document.addEventListener('click', handleOutsideClick, false)
    } else {
      setShow(false)
      document.removeEventListener('click', handleOutsideClick, false)
    }
  }

  const handleOutsideClick = e => {
    if (node.current && !node.current.contains(e.target)) {
      setShow(false)
      document.addEventListener('click', handleOutsideClick, false)
    }
    return
  }

  return (
    <StyledTooltip
      aria-label={a11yTitle}
      onMouseEnter={() => hover && setShow(true)}
      onMouseLeave={() => hover && setShow(false)}
      ref={node}
      {...rest}
    >
      {children ? (
        <span onClick={() => !hover && handleClick()}>{children}</span>
      ) : (
        <Icon weight={700} onClick={() => !hover && handleClick()}>
          i
        </Icon>
      )}
      {show && (
        <Tip minWidth={minWidth} side={side}>
          {text}
          {!hover && closeBtn && (
            <TipClose plain onClick={() => setShow(false)}>
              <MobileClose />
            </TipClose>
          )}
        </Tip>
      )}
    </StyledTooltip>
  )
}

// Documentation
Tooltip.propTypes = {
  /** Content inside component. If children are available inside the tooltip component they'll work as the trigger. */
  children: PropTypes.node,
  /** If false, the Tooltip close button will not display. */
  closeBtn: PropTypes.bool,
  /** If enabled, the tooltip will show on hover. */
  hover: PropTypes.bool,
  /** Sets the minimum width of the tooltip. Responsive.e */
  minWidth: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /** Defines the side where the tooltip shows. Responsive. */
  side: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /** The text to display inside the Tooltip. */
  text: PropTypes.any,
  ...genericPropTypes,
}

Tooltip.defaultProps = {
  closeBtn: true,
  minWidth: '160px',
  side: 'right',
  ...genericPropsDefaults(),
}

/** @component */
export { Tooltip }
