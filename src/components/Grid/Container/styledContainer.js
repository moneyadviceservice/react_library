import styled, { css } from 'styled-components'
import {
  genericStyles,
  backgroundStyle,
  responsiveProps,
} from '../../../utils/helpers'
import { gridConfig } from '../config'

const debugStyle = () => css`
  background-color: #5901ad40;
  outline: #fff solid 1px;
`

const getSize = (props, size) => props.theme.sizes.size[size] || size

const heightObjectStyle = css`
  ${props =>
    props.heightProp.max &&
    css`
      max-height: ${getSize(props, props.heightProp.max)};
    `};
  ${props =>
    props.heightProp.min &&
    css`
      min-height: ${getSize(props, props.heightProp.min)};
    `};
`

const heightStyle = css`
  height: ${props => getSize(props, props.heightProp)};
`

const widthObjectStyle = css`
  ${props =>
    props.widthProp.max &&
    css`
      max-width: ${getSize(props, props.widthProp.max)};
    `};
  ${props =>
    props.widthProp.min &&
    css`
      min-width: ${getSize(props, props.widthProp.min)};
    `};
`

const widthStyle = css`
  width: ${props => getSize(props, props.widthProp)};
`

const ContainerWrapper = styled.div`
  ${genericStyles}
  /** defaults */
  outline: none;

  /** conditional styles */
  ${({ hide }) => !hide && `display: flex;`}
  ${({ padding }) =>
    !padding && responsiveProps('padding', gridConfig.containerPadding)}
  ${({ margin }) => !margin && 'margin: 0 auto;'}
  ${({ background }) => background && backgroundStyle(background)}
  ${({ heightProp }) =>
    heightProp &&
    (typeof heightProp === 'object' ? heightObjectStyle : heightStyle)}
  ${({ widthProp }) =>
    widthProp &&
    (typeof widthProp === 'object' ? widthObjectStyle : widthStyle)}
  ${({ fluid, widthProp }) =>
    !fluid &&
    !widthProp &&
    responsiveProps('max-width', gridConfig.containerWidth)}
  ${props => !props.widthProp && props.fluid && 'width: 100%;'}

  /** responsive props */
  ${({ flexDirection }) =>
    flexDirection && responsiveProps('flex-direction', flexDirection)}

  /** debug */
  ${({ debug }) => debug && debugStyle()}
`

export default ContainerWrapper
