import styled, { css } from 'styled-components'
import {
  resolveMedia,
  genericStyles,
  responsiveProps,
} from '../../utils/helpers'
import { Anchor } from '../Anchor'

const StyledTooltip = styled.span`
  position: relative;
  cursor: pointer;
`

const Icon = styled(Anchor)`
  font-style: italic;
  color: #428513;
  padding: 0.375rem;
`

/** Side styles for popup */
const topStyle = css`
  &:after {
    left: 50%;
    bottom: calc(100% + 5px);
    transform: translate(-50%, -0.5em);
  }
`
const rightStyle = css`
  &:after {
    top: 50%;
    left: calc(100% + 5px);
    right: calc(0em - 5px);
    transform: translate(0.5em, -50%);
  }
`
const bottomStyle = css`
  &:after {
    left: 50%;
    top: calc(100% + 5px);
    transform: translate(-50%, 0.5em);
  }
`
const leftStyle = css`
  &:after {
    top: 50%;
    right: calc(100% + 5px);
    left: calc(0em - 5px);
    transform: translate(-0.5em, -50%);
  }
`

const sideStyles = {
  top: topStyle,
  right: rightStyle,
  bottom: bottomStyle,
  left: leftStyle,
}

const Tip = styled.span`
  /** Prop-based side styles */
  ${({ side }) => sideStyles[side]}
  /** Popup */
  &:after {
    ${genericStyles}
    display: ${({ show }) => (show ? 'block' : 'none')};
    position: absolute;
    z-index: 1000;
    background-color: #FFF;
    min-width: 160px;
    white-space: pre-wrap;
    padding: 4px 6px;
    border: 1px solid black;
    border-radius: 4px;
    box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
    /** Popup Content */
    content: "${({ text }) => text}";
  }
`

export { StyledTooltip, Icon, Tip }
