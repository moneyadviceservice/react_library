import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { Label, Field } from './StyledSelect'

const Select = ({
  a11yTitle,
  children,
  disabled,
  hideLabel,
  id,
  label,
  width,
  onChange,
  options,
  ...rest
}) => (
  <>
    {label && (
      <Label disabled={disabled} hide={hideLabel} htmlFor={id}>
        {label}
      </Label>
    )}
    <Field
      width={width}
      aria-label={a11yTitle}
      disabled={disabled}
      id={id}
      onChange={onChange}
      {...rest}
    >
      {options.length &&
        options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      {children}
    </Field>
  </>
)

// Documentation
Select.propTypes = {
  /** Add options to the select element without using the provided prop. */
  children: PropTypes.any,
  /** Whether the select element is disabled. */
  disabled: PropTypes.bool,
  /** Hides the select input label. */
  hideLabel: PropTypes.bool,
  /** Id of the select input. Also sets the "for" attribute on the label. Required. */
  id: PropTypes.string.isRequired,
  /** Caption for the select element. */
  label: PropTypes.string,
  /** Sets the width of the select element. */
  width: PropTypes.string,
  /** Options for the select element. */
  options: PropTypes.array.isRequired,
  /** On change trigger function event. */
  onChange: PropTypes.func,
  ...genericPropTypes,
}

Select.defaultProps = {
  disabled: false,
  hideLabel: false,
  ...genericPropsDefaults(),
}

/** @component */
export { Select }
