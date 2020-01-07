import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import config, { DIMENSIONS } from '../config'

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  box-sizing: border-box;

  ${() => css`
    ${DIMENSIONS.map(
      d =>
        config().container[d] &&
        config().media[d]`
      padding-left: ${config().paddingWidth[d]}rem;
      padding-right: ${config().paddingWidth[d]}rem;
    `
    )}
  `}
  
  ${p =>
    !p.fluid &&
    css`
      ${DIMENSIONS.map(
        d =>
          config().container[d] &&
          config().media[d]`
      ${
        typeof config().container[d] === 'number'
          ? `width: ${config().container[d]}rem;`
          : 'width: 100%;'
      }
    `
      )}
    `}
    
  ${({ debug }) =>
    debug &&
    css`
      background-color: #5901ad40;
      outline: #fff solid 1px;
    `}
`

// Documentation
Container.propTypes = {
  /** makes container full-width */
  fluid: PropTypes.bool,
  /** content */
  children: PropTypes.node,
  /** enables debug */
  debug: PropTypes.bool,
}

Container.defaultProps = {
  fluid: false,
  children: null,
  debug: false,
}

/** @component */
export default Container
