import styled, { css } from 'styled-components'
import {
  resolveMedia,
  genericStyles,
  backgroundStyle,
} from '../../../utils/helpers'
import { responsiveProps } from '../../../utils/flexHelpers'

const fluidStyle = () => css`
  max-width: 100%;

  ${resolveMedia.lg`
    max-width: 1440px;
  `}
`

const debugStyle = () => css`
  background-color: #5901ad40;
  outline: #fff solid 1px;
`

const paddingStyle = props => css`
  padding: 0 1rem;

  ${resolveMedia.md`
    padding: 0 1.5rem;
  `}
`

const ContainerWrapper = styled.div`
  /** align-self, padding, margin, border */
  ${genericStyles}

  display: flex;
  outline: none;

  /** conditional styles */
  ${props => props.debug && debugStyle()}
  ${props => !props.padding && paddingStyle()}
  ${props => !props.margin && 'margin: 0 auto;'}
  ${props => !props.fluid && fluidStyle()}
  ${props => props.background && backgroundStyle(props.background)}

  /** responsive props */
  ${props =>
    props.flexDirection &&
    responsiveProps('flex-direction', props.flexDirection)}
`

export default ContainerWrapper
