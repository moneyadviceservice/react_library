import PropTypes from 'prop-types'
import { SPACING_SIZES } from './constants'

/** spacing prop.type */
const spacingProp = PropTypes.shape({
  bottom: PropTypes.oneOfType([
    PropTypes.oneOf(SPACING_SIZES),
    PropTypes.string,
  ]),
  horizontal: PropTypes.oneOfType([
    PropTypes.oneOf(SPACING_SIZES),
    PropTypes.string,
  ]),
  left: PropTypes.oneOfType([PropTypes.oneOf(SPACING_SIZES), PropTypes.string]),
  right: PropTypes.oneOfType([
    PropTypes.oneOf(SPACING_SIZES),
    PropTypes.string,
  ]),
  top: PropTypes.oneOfType([PropTypes.oneOf(SPACING_SIZES), PropTypes.string]),
  vertical: PropTypes.oneOfType([
    PropTypes.oneOf(SPACING_SIZES),
    PropTypes.string,
  ]),
})

export const genericPropTypes = {
  a11yTitle: PropTypes.string,
  alignSelf: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  margin: PropTypes.oneOfType([
    PropTypes.oneOf(['none', ...SPACING_SIZES]),
    spacingProp,
    PropTypes.string,
    PropTypes.object,
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.oneOf([...SPACING_SIZES]),
    spacingProp,
    PropTypes.string,
    PropTypes.object,
  ]),
  border: PropTypes.oneOfType([
    PropTypes.oneOf(['none', ...SPACING_SIZES]),
    spacingProp,
    PropTypes.string,
    PropTypes.object,
  ]),
}

export function genericPropsDefaults({
  a11yTitle = null,
  alignSelf = null,
  margin = null,
  padding = null,
  border = null,
} = {}) {
  return {
    a11yTitle: a11yTitle,
    alignSelf: alignSelf,
    margin: margin,
    padding: padding,
    border: border,
  }
}
