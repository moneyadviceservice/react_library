import styled, { css } from 'styled-components'
import { genericStyles, responsiveProps } from '../../utils/helpers'
import { Anchor } from '../Anchor'

const StyledTooltip = styled.span`
  position: relative;
  cursor: pointer;
`

/** Side styles for popup */
const topStyle = css`
  &:after {
    top: auto;
    right: auto;
    left: 50%;
    bottom: calc(100% + 5px);
    transform: translate(-50%, -0.5em);
  }
`
const rightStyle = css`
  &:after {
    bottom: auto;
    top: 50%;
    left: calc(100% + 5px);
    right: calc(0em - 5px);
    transform: translate(0.5em, -50%);
  }
`
const bottomStyle = css`
  &:after {
    right: auto;
    bottom: auto;
    left: 50%;
    top: calc(100% + 5px);
    transform: translate(-50%, 0.5em);
  }
`
const leftStyle = css`
  &:after {
    bottom: auto;
    left: auto;
    top: 50%;
    right: calc(100% + 5px);
    transform: translate(-0.5em, -50%);
  }
`

const sideStyles = {
  top: topStyle[0],
  right: rightStyle[0],
  bottom: bottomStyle[0],
  left: leftStyle[0],
}

const renderSide = sideProp => {
  // string
  if (typeof sideProp === 'string') return sideStyles[sideProp]
  // responsive
  if (typeof sideProp === 'object') {
    const responsiveStyles = {}
    for (let [key, value] of Object.entries(sideProp)) {
      responsiveStyles[key] = sideStyles[value]
    }
    return responsiveProps(null, responsiveStyles)
  }
}

const Tip = styled.span`
  /** Prop-based side styles */
  ${({ side }) => renderSide(side)}
  /** Popup */
  &:after {
    ${genericStyles}
    display: ${({ show }) => (show ? 'block' : 'none')};
    ${({ minWidth }) => responsiveProps('min-width', minWidth)}
    position: absolute;
    z-index: 1000;
    padding: 8px;
    border: 1px solid black;
    border-radius: 4px;
    box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
    /** Popup Content */
    content: "${({ text }) => text}";
    /** text */
    font-size: 0.875rem;
    line-height: 1rem;
    white-space: pre-wrap;
    background-color: #FFF;
  }
`

const Icon = styled(Anchor)`
  font-style: italic;
  color: #428513;
  padding: 0.375rem;
`

export { StyledTooltip, Icon, Tip }
