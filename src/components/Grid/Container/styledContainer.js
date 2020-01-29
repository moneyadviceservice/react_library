import styled, { css } from 'styled-components'
import {
  resolveMedia,
  genericStyles,
  backgroundStyle,
} from '../../../utils/helpers'
import { responsiveProps } from '../../../utils/flexHelpers'
import { gridConfig } from '../config'

const debugStyle = () => css`
  background-color: #5901ad40;
  outline: #fff solid 1px;
`

const ContainerWrapper = styled.div`
  /** align-self, padding, margin, border */
  ${genericStyles}

  display: flex;
  outline: none;

  /** conditional styles */
  ${props => props.debug && debugStyle()}
  ${props =>
    !props.padding && responsiveProps('padding', gridConfig.containerPadding)}
  ${props => !props.margin && 'margin: 0 auto;'}
  ${props =>
    !props.fluid && responsiveProps('max-width', gridConfig.containerWidth)}
  ${props => props.background && backgroundStyle(props.background)}

  /** responsive props */
  ${props =>
    props.flexDirection &&
    responsiveProps('flex-direction', props.flexDirection)}
`

export default ContainerWrapper
