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

const gutterStyle = () => css`
  ${responsiveProps('padding', gridConfig.gutterWidth)}
`

const getSize = (props, size) => props.theme.sizes.size[size] || size

const ColWrapper = styled.div`
  /** align-self, padding, margin, border */
  ${genericStyles}

  display: flex;
  max-width: 100%;

  /** column-based flex size */
  ${props => (props.sizesProp ? flexStyle(props.sizesProp) : 'flex: 1 0 auto;')}

  /** conditional styles */
  ${props => props.debug && debugStyle()}
  ${props => props.background && backgroundStyle(props.background)}
  ${props => !props.padding && !props.noGutter && gutterStyle()}

  /** responsive props */
  ${props =>
    props.widthProp &&
    responsiveProps('width', getSize(props, props.widthProp))}
  ${props =>
    props.heightProp &&
    responsiveProps('height', getSize(props, props.heightProp))}
  ${props =>
    props.flexDirection &&
    responsiveProps('flex-direction', props.flexDirection)}
  ${props => props.align && responsiveProps('align-items', props.align)}
  ${props => props.justify && responsiveProps('justify-content', props.justify)}
  ${props => props.offsetProp && offsetStyle(props.offsetProp)}
`

export default ColWrapper
