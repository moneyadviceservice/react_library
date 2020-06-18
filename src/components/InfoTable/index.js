import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { TableContainer, TableHead, TableContent } from './StyledInfoTable'

const InfoTable = ({
  a11yTitle,
  children,
  ...rest
}) => (
)

// Documentation
Radio.propTypes = {
  /** Text inside the Label component. Works as the caption for the checkbox element. */
  children: PropTypes.string,
  ...genericPropTypes,
}

Radio.defaultProps = {
  ...genericPropsDefaults(),
}

/** @component */
export { InfoTable }
