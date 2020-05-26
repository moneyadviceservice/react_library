import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { StyledTooltip, Icon, Tip } from './StyledTooltip'

const Tooltip = ({
  a11yTitle,
  children,
  hover,
  minWidth,
  side,
  text,
  ...rest
}) => {
  const [show, setShow] = useState(false)

  return (
    <StyledTooltip
      aria-label={a11yTitle}
      onClick={() => !hover && setShow(!show)}
      onMouseEnter={() => hover && setShow(true)}
      onMouseLeave={() => hover && setShow(false)}
      {...rest}
    >
      <Tip minWidth={minWidth} show={show} side={side} text={text}>
        {children || (
          <Icon weight={700} color="#428513">
            i
          </Icon>
        )}
      </Tip>
    </StyledTooltip>
  )
}

// Documentation
Tooltip.propTypes = {
  /** Content inside component. If children are available inside the tooltip component they'll work as the trigger. */
  children: PropTypes.node,
  /** If enabled, the tooltip will show on hover. */
  hover: PropTypes.bool,
  /** Sets the minimum width of the tooltip. Responsive.e */
  minWidth: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /** Defines the side where the tooltip shows. Responsive. */
  side: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /** The text to display inside the Tooltip. */
  text: PropTypes.string,
  ...genericPropTypes,
}

Tooltip.defaultProps = {
  minWidth: '160px',
  side: 'right',
  ...genericPropsDefaults(),
}

/** @component */
export { Tooltip }
