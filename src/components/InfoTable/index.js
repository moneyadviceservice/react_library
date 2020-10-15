import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import {
  TableContainer,
  TableIcon,
  TableHead,
  TableContent,
  TableText,
} from './StyledInfoTable'

const InfoTable = ({
  a11yTitle,
  children,
  icon,
  padding,
  tableColor,
  textContent,
  title,
  titleColor,
  ...rest
}) => (
  <TableContainer
    a11yTitle={a11yTitle || title}
    tableColor={tableColor}
    {...rest}
  >
    <TableHead
      direction="row"
      align="center"
      flexWrap="nowrap"
      tableColor={tableColor}
      titleColor={titleColor}
    >
      {icon && <TableIcon titleColor={titleColor}>{icon}</TableIcon>}
      {title}
    </TableHead>
    <TableContent padding={padding}>
      {textContent && <TableText>{textContent}</TableText>}
      {children}
    </TableContent>
  </TableContainer>
)

// Documentation
InfoTable.propTypes = {
  /** Displays inside the table element. */
  children: PropTypes.any,
  /** Provide a custom svg icon to the table header. */
  icon: PropTypes.node,
  /** Sets a custom color to the table and border. */
  tableColor: PropTypes.string,
  /** Text content to be placed inside the table. */
  textContent: PropTypes.string,
  /** Title to be placed in table header. */
  title: PropTypes.string,
  /** Sets a custom color to the svg icon and title text in table header. */
  titleColor: PropTypes.string,
  ...genericPropTypes,
}

InfoTable.defaultProps = {
  titleColor: 'white',
  ...genericPropsDefaults(),
}

/** @component */
export { InfoTable }
