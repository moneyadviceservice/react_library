import styled, { css } from 'styled-components'
import { genericStyles, backgroundStyle } from '../../../utils/helpers'
import { responsiveProps } from '../../../utils/flexHelpers'
import { gridConfig } from '../config'

const getSize = (props, size) => props.theme.sizes.size[size] || size

const debugStyle = () => css`
  background-color: #5901ad40;
  outline: #fff solid 1px;
`

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

const marginStyle = props =>
  !props.noGutter
    ? css`
        & > * {
          ${responsiveProps('padding', gridConfig.gutterWidth)}
        }
      `
    : 'margin: 0;'

const RowWrapper = styled.div`
  /** align-self, padding, margin, border */
  ${genericStyles}

  width: 100%;
  max-width: 100%;
  display: flex;
  flex-basis: auto;
  flex-wrap: ${props => props.flexWrap};
  flex-grow: ${props => (props.growProp ? 1 : 0)};

  /** conditional styles */
  ${props => props.debug && debugStyle()}
  ${props => !props.margin && marginStyle(props)}
  ${props => props.background && backgroundStyle(props.background)}
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
