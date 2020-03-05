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
  /** align-self, padding, margin, border */
  ${genericStyles}

  display: flex;
  outline: none;

  /** conditional styles */
  ${props => props.debug && debugStyle()}
  ${props =>
    !props.padding && responsiveProps('padding', gridConfig.containerPadding)}
  ${props => !props.margin && 'margin: 0 auto;'}
  ${props => props.background && backgroundStyle(props.background)}
  ${props =>
    props.heightProp &&
    (typeof props.heightProp === 'object' ? heightObjectStyle : heightStyle)}
  ${props =>
    props.widthProp &&
    (typeof props.widthProp === 'object' ? widthObjectStyle : widthStyle)}
  ${props =>
    !props.fluid &&
    !props.widthProp &&
    responsiveProps('max-width', gridConfig.containerWidth)}
  ${props => !props.widthProp && props.fluid && 'width: 100%;'}
${props => console.log(props)}
  /** responsive props */
  ${props =>
    props.flexDirection &&
    responsiveProps('flex-direction', props.flexDirection)}
`

export default ContainerWrapper
