import styled, { css } from 'styled-components'
import { genericStyles, backgroundStyle } from '../../../utils/helpers'
import { responsiveProps } from '../../../utils/flexHelpers'

const getSize = (props, size) => props.theme.sizes.size[size] || size

const debugStyle = () => css`
  background-color: #5901ad40;
  outline: #fff solid 1px;
`

const fillStyle = fillProp => {
  if (fillProp === 'horizontal') {
    return 'width: 100%;'
  }
  if (fillProp === 'vertical') {
    return 'height: 100%;'
  }
  if (fillProp) {
    return `
      width: 100%;
      height: 100%;
    `
  }
  return undefined
}

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

const RowWrapper = styled.div`
  /** align-self, padding, margin, border */
  ${genericStyles}

  display: flex;
  flex: 1 0 auto;
  min-width: 100%;
  outline: none;
  flex-wrap: ${props => props.flexWrap};

  /** conditional styles */
  ${props => props.debug && debugStyle()}
  ${props => props.background && backgroundStyle(props.background)}
  ${props => props.fillProp && fillStyle(props.fillProp)}
  ${props =>
    props.heightProp &&
    (typeof props.heightProp === 'object' ? heightObjectStyle : heightStyle)}
  ${props =>
    props.widthProp &&
    (typeof props.widthProp === 'object' ? widthObjectStyle : widthStyle)}

  /** responsive props */
  ${props =>
    props.flexDirection &&
    responsiveProps('flex-direction', props.flexDirection)}
  ${props => props.align && responsiveProps('align-items', props.align)}
  ${props => props.justify && responsiveProps('justify-content', props.justify)}
`

export default RowWrapper
