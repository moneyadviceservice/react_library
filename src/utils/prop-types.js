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
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.oneOf([...SPACING_SIZES]),
    spacingProp,
    PropTypes.string,
  ]),
  border: PropTypes.oneOfType([
    PropTypes.oneOf(['none', ...SPACING_SIZES]),
    spacingProp,
    PropTypes.string,
  ]),
}

export const genericPropsDefaults = {
  a11yTitle: undefined,
  alignSelf: undefined,
  margin: undefined,
  padding: undefined,
  border: undefined,
}
