import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { Label, Field } from './StyledCheckbox'

const Checkbox = ({
  a11yTitle,
  checked,
  children,
  disabled,
  label,
  name,
  onChange,
  required,
  value,
  ...rest
}) => (
  <Label disabled={disabled} {...rest}>
    <Field
      aria-label={a11yTitle}
      aria-required={required}
      checked={checked}
      disabled={disabled}
      name={name}
      onChange={onChange}
      required={required}
      type="checkbox"
      value={value}
    />
    {children || label}
  </Label>
)

// Documentation
Checkbox.propTypes = {
  /** Whether the component is checked. */
  checked: PropTypes.bool,
  /** Text inside the Label component. Works as the caption for the checkbox element. */
  children: PropTypes.string,
  /** Whether the form control is disabled. */
  disabled: PropTypes.bool,
  /** Caption for the checkbox element. */
  label: PropTypes.string,
  /** Name of the input form control. Submitted with the form as part of a name/value pair. */
  name: PropTypes.string,
  /** On change trigger function event. */
  onChange: PropTypes.func,
  /** Indicates that the user must specify a value for the input. */
  required: PropTypes.bool,
  /** Current value of the form control. Submitted with the form as part of a name/value pair. */
  value: PropTypes.string,
  ...genericPropTypes,
}

Checkbox.defaultProps = {
  disabled: false,
  required: false,
  ...genericPropsDefaults(),
}

/** @component */
export { Checkbox }
