import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { Label, Field } from './StyledSelect'

const Select = ({ a11yTitle, disabled, label, onChange, options, ...rest }) => (
  <>
    <Label for="favcity">{label}</Label>
    <Field
      aria-label={a11yTitle}
      disabled={disabled}
      onChange={onChange}
      {...rest}
    >
      {options.length &&
        options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
    </Field>
  </>
)

// Documentation
Select.propTypes = {
  /** Whether the form control is disabled. */
  disabled: PropTypes.bool,
  /** Caption for the checkbox element. */
  label: PropTypes.string,
  /** On change trigger function event. */
  onChange: PropTypes.func,
  ...genericPropTypes,
}

Select.defaultProps = {
  disabled: false,
  ...genericPropsDefaults(),
}

/** @component */
export { Select }
