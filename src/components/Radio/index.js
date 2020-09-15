import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { Label, Field } from './StyledRadio'
import { Paragraph as P } from '../Paragraph'

const Radio = ({
  a11yTitle,
  checked,
  children,
  disabled,
  label,
  name,
  onChange,
  value,
  ...rest
}) => (
  <Label disabled={disabled} {...rest}>
    <Field
      aria-label={a11yTitle}
      checked={checked}
      disabled={disabled}
      name={name}
      onChange={onChange}
      type="radio"
      value={value}
    />
    <P textSize="1rem" margin="0">
      {label}
    </P>
    {children}
  </Label>
)

// Documentation
Radio.propTypes = {
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
  /** Current value of the form control. Submitted with the form as part of a name/value pair. */
  value: PropTypes.string,
  ...genericPropTypes,
}

Radio.defaultProps = {
  disabled: false,
  ...genericPropsDefaults(),
}

/** @component */
export { Radio }
