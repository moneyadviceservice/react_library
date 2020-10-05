import styled, { css } from 'styled-components'
import {
  genericStyles,
  responsiveProps,
  resolveMedia,
} from '../../utils/helpers'
import { Anchor } from '../Anchor'
import Button from '../Button'

const StyledTooltip = styled.span`
  ${genericStyles}
  display: inline-block;
  cursor: pointer;

  ${resolveMedia.sm`
    position: relative;
  `}
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
  /** general positioning */
  display: block;
  position: absolute;
  z-index: 1000;
  /** mobile positioning */
  left: 0;
  right: 0;
  max-width: ${({ minWidth }) => (minWidth === '160px' ? '400px' : minWidth)};
  margin: auto;
  /** prop-based side positioning */
  ${resolveMedia.sm`
    ${({ minWidth }) => responsiveProps('min-width', minWidth)}
    ${({ side }) => renderSide(side)}
    max-width: none;
    margin: 0;
  `}
  /** other styles */
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.tooltip.borderColor};
  border-radius: 2px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.tooltip.fontColor};
  line-height: 1.25rem;
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

const TipClose = styled(Button)`
  background-color: ${({ theme }) => theme.colors.tooltip.tipBackground};
  border: 2px solid #394752;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 1px;
  /** positioning */
  display: inline;
  position: absolute;
  top: -15px;
  right: -15px;

  &:active {
    padding-top: 1px;
    border-bottom: 2px solid #394752;
  }

  & svg {
    width: 11px;
    height: 11px;
  }
`

export { StyledTooltip, Icon, Tip, TipClose }
