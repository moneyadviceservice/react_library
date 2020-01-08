import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, typography } from '../config/styles'
import { resolveMedia } from '../config/helpers'

// Headings

const H1Wrapper = styled.h1`
  font-size: 2em;
  line-height: 1.25;
  ${typography.fontHeavy}
  color: ${theme.accentColor};
  width: ${({ width }) => width};
  text-align: ${({ align }) => align};

  ${resolveMedia.md`
    font-size: 2.5em;
    line-height: 1.125;
  `}
  ${resolveMedia.lg`
    font-size: 3em;
    line-height: 1.05;
  `}
`

function HeaderOne({ width = 'auto', align = 'center', children }) {
  return (
    <H1Wrapper width={width} align={align}>
      {children}
    </H1Wrapper>
  )
}

// Documentation
HeaderOne.propTypes = {
  /** sets custom width */
  width: PropTypes.string,
  /** aligns text */
  align: PropTypes.string,
  /** content */
  children: PropTypes.node,
}

HeaderOne.defaultProps = {
  width: 'auto',
  align: 'center',
  children: null,
}

/** @component */
export { HeaderOne }
