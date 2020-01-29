import styled, { css } from 'styled-components'
import { genericStyles, backgroundStyle } from '../../../utils/helpers'
import {
  responsiveProps,
  flexStyle,
  offsetStyle,
} from '../../../utils/flexHelpers'
import { gridConfig } from '../config'

const debugStyle = () => css`
  background-color: #5901ad40;
  outline: #fff solid 1px;
`

const paddingStyle = () => css`
  /** remove padding if noGutter prop is present */
  ${props =>
    props.noGutter
      ? 'padding: 0'
      : responsiveProps('padding', gridConfig.gutterWidth)}
`

const ColWrapper = styled.div`
  /** align-self, padding, margin, border */
  ${genericStyles}

  display: flex;
  outline: none;

  /** column-based flex size */
  ${props =>
    props.sizesProp
      ? flexStyle(props.sizesProp)
      : 'flex: 1 0 auto; max-width: 100%;'}

  /** conditional styles */
  ${props => props.debug && debugStyle()}
  ${props => !props.padding && paddingStyle()}
  ${props => props.background && backgroundStyle(props.background)}

  /** responsive props */
  ${props =>
    props.flexDirection &&
    responsiveProps('flex-direction', props.flexDirection)}
  ${props => props.align && responsiveProps('align-items', props.align)}
  ${props => props.justify && responsiveProps('justify-content', props.justify)}
  ${props => props.offsetProp && offsetStyle(props.offsetProp)}
`

export default ColWrapper
