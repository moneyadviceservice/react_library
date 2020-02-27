import styled, { css } from 'styled-components'
import {
  genericStyles,
  backgroundStyle,
  responsiveProps,
} from '../../../utils/helpers'

const getSize = (props, size) => props.theme.sizes.size[size] || size

const debugStyle = () => css`
  background-color: #5901ad40;
  outline: #fff solid 1px;
`

const RowWrapper = styled.div`
  /** align-self, padding, margin, border */
  ${genericStyles}

  max-width: ${props => (props.constrained ? '1200px' : '100%')};
  display: flex;
  flex-wrap: ${props => props.flexWrap};
  flex-grow: ${props => (props.growProp ? 1 : 0)};

  /** conditional styles */
  ${props => props.debug && debugStyle()}
  ${props => props.background && backgroundStyle(props.background)}

  /** responsive props */
  ${props =>
    props.widthProp
      ? responsiveProps('width', getSize(props, props.widthProp))
      : 'width: 100%;'}
  ${props =>
    props.heightProp &&
    responsiveProps('height', getSize(props, props.heightProp))}
  ${props =>
    props.flexDirection &&
    responsiveProps('flex-direction', props.flexDirection)}
  ${props => props.align && responsiveProps('align-items', props.align)}
  ${props => props.justify && responsiveProps('justify-content', props.justify)}
`

export default RowWrapper
