import styled, { css } from 'styled-components'
import {
  genericStyles,
  backgroundStyle,
  responsiveProps,
  flexStyle,
  offsetStyle,
} from '../../../utils/helpers'
import { gridConfig } from '../config'

const debugStyle = () => css`
  background-color: #5901ad40;
  outline: #fff solid 1px;
`

const gutterStyle = () => css`
  ${responsiveProps('padding', gridConfig.gutterWidth)}
`

const getSize = (theme, size) => theme.sizes.size[size] || size

const ColWrapper = styled.div`
  ${genericStyles}
  
  flex-wrap: ${props => props.flexWrap};
  max-width: 100%;

  /** column-based flex size */
  ${({ sizesProp }) => (sizesProp ? flexStyle(sizesProp) : 'flex-basis: auto;')}

  /** conditional styles */
  ${({ hide }) => !hide && `display: flex;`}
  ${({ sizesProp, growProp }) =>
    !sizesProp && `flex-grow: ${growProp ? 1 : 0};`}
  ${({ background }) => background && backgroundStyle(background)}
  ${({ padding, noGutter }) => !padding && !noGutter && gutterStyle()}

  /** responsive props */
  ${({ widthProp, theme }) =>
    widthProp && responsiveProps('width', getSize(theme, widthProp))}
  ${({ heightProp, theme }) =>
    heightProp && responsiveProps('height', getSize(theme, heightProp))}
  ${({ flexDirection }) =>
    flexDirection && responsiveProps('flex-direction', flexDirection)}
  ${props => props.align && responsiveProps('align-items', props.align)}
  ${props => props.justify && responsiveProps('justify-content', props.justify)}
  ${props => props.offsetProp && offsetStyle(props.offsetProp)}

  /** debug */
  ${({ debug }) => debug && debugStyle()}
`

export default ColWrapper
