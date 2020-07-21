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
import QuestionIcon from '../../assets/Images/question_mark.svg'

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
      <TableIcon titleColor={titleColor}>
        {icon ? icon : <QuestionIcon />}
      </TableIcon>
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
  /** Text inside the Label component. Works as the caption for the checkbox element. */
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
