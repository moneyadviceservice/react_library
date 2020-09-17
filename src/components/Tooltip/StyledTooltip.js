import styled, { css } from 'styled-components'
import { genericStyles, responsiveProps } from '../../utils/helpers'
import { Anchor } from '../Anchor'

const StyledTooltip = styled.span`
  ${genericStyles}
  display: inline-block;
  position: relative;
  cursor: pointer;
`

/** Side styles for popup */
const topStyle = css`
  top: auto;
  right: auto;
  left: 50%;
  bottom: calc(100% + 5px);
  transform: translate(-50%, -0.5em);
`
const rightStyle = css`
  bottom: auto;
  top: 50%;
  left: calc(100% + 5px);
  right: calc(0em - 5px);
  transform: translate(0.5em, -50%);
`
const bottomStyle = css`
  right: auto;
  bottom: auto;
  left: 50%;
  top: calc(100% + 5px);
  transform: translate(-50%, 0.5em);
`
const leftStyle = css`
  bottom: auto;
  left: auto;
  top: 50%;
  right: calc(100% + 5px);
  transform: translate(-0.5em, -50%);
`

const sideStyles = {
  top: topStyle,
  right: rightStyle,
  bottom: bottomStyle,
  left: leftStyle,
}

const renderSide = sideProp => {
  // string - fixed width
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
  /** conditional styles */
  display: block;
  ${({ minWidth }) => responsiveProps('min-width', minWidth)}
  /** positioning */
  position: absolute;
  z-index: 1000;
  /** Prop-based side styles */
  ${({ side }) => renderSide(side)}
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.tooltip.borderColor};
  border-radius: 2px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.tooltip.fontColor};
  line-height: 1rem;
  white-space: pre-wrap;
  background-color: ${({ theme }) => theme.colors.tooltip.tipBackground};
  box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
`

const Icon = styled(Anchor)`
  font-family: 'Times-Italic', 'Times Italic', 'Times', sans-serif;
  font-style: italic;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.tooltip.iconColor};
  margin: 0;
  border: 1px solid ${({ theme }) => theme.colors.tooltip.iconColor};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.tooltip.iconBackground};
  width: 25px;
  height: 25px;
  text-align: center;
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.colors.tooltip.iconColor};
    text-decoration: none;
  }
`

export { StyledTooltip, Icon, Tip }
