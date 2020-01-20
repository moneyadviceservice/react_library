import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { resolveMedia } from '../../../utils/helpers'

// Headers
const headerStyles = css`
  font-weight: ${props => props.theme.typography.fontHeavy};
  color: ${props => (props.color ? props.color : props.theme.colors.black)};
  width: ${({ width }) => width};
  text-align: ${({ align }) => align};
`

const H1Wrapper = styled.h1`
  ${headerStyles}

  font-size: 2em;
  line-height: 1.25em;

  ${resolveMedia.md`
    font-size: 2.5em;
    line-height: 1.125em;
  `}
  ${resolveMedia.lg`
    font-size: 3em;
    line-height: 1.05em;
  `}
`
const H2Wrapper = styled.h2`
  ${headerStyles}

  font-size: 1.625em;
  line-height: 1.15384615em;

  ${resolveMedia.md`
    font-size: 2em;
    line-height: 1.25em;
  `}
  ${resolveMedia.lg`
    font-size: 2.25em;
  `}
`
const H3Wrapper = styled.h3`
  ${headerStyles}

  font-size: 1.375em;
  line-height: 1.13636364em;

  ${resolveMedia.md`
    font-size: 1.5em;
    line-height: 1.25em;
  `}
  ${resolveMedia.lg`
    font-size: 1.75em;
  `}
`
const H4Wrapper = styled.h4`
  ${headerStyles}

  font-size: 1.125em;
  line-height: 1.11111111em;

  ${resolveMedia.md`
    line-height: 1.22222222em;
  `}
`

function Header({ tag, color, width, align, text, children }) {
  let HeaderTag

  switch (tag) {
    case 'h1':
      HeaderTag = H1Wrapper
      break
    case 'h2':
      HeaderTag = H2Wrapper
      break
    case 'h3':
      HeaderTag = H3Wrapper
      break
    case 'h4':
      HeaderTag = H4Wrapper
      break
  }

  return (
    <HeaderTag width={width} align={align} color={color}>
      {text}
      {children}
    </HeaderTag>
  )
}

// Documentation
Header.propTypes = {
  /** sets the header tag */
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  /** sets custom width */
  width: PropTypes.string,
  /** text content */
  text: PropTypes.string,
  /** text color */
  color: PropTypes.string,
  /** aligns text */
  align: PropTypes.string,
  /** content */
  children: PropTypes.node,
}

Header.defaultProps = {
  tag: 'h1',
  width: 'auto',
  align: 'center',
  color: 'black',
  text: null,
  children: null,
}

/** @component */
export { Header }
