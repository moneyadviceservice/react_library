import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { StyledTooltip, Icon, Tip } from './StyledTooltip'

const Tooltip = ({ a11yTitle, children, hover, side, text, ...rest }) => {
  const [show, setShow] = useState(false)

  return (
    <StyledTooltip
      aria-label={a11yTitle}
      onClick={() => !hover && setShow(!show)}
      onMouseEnter={() => hover && setShow(true)}
      onMouseLeave={() => hover && setShow(false)}
    >
      {children || (
        <Icon weight={700} color="#428513">
          i
        </Icon>
      )}
      <Tip show={show} text={text} side={side} {...rest} />
    </StyledTooltip>
  )
}

// Documentation
Tooltip.propTypes = {
  /** Content inside component. If children are available inside the component they'll work as the trigger for it.s */
  children: PropTypes.node,
  hover: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  side: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  ...genericPropTypes,
}

Tooltip.defaultProps = {
  side: 'right',
  ...genericPropsDefaults(),
}

/** @component */
export { Tooltip }
