import styled, { css } from 'styled-components'
import {
  genericStyles,
  backgroundStyle,
  responsiveProps,
} from '../../../utils/helpers'
import { gridConfig } from '../config'

const getSize = (props, size) => props.theme.sizes.size[size] || size

const debugStyle = () => css`
  background-color: #5901ad40;
  outline: #fff solid 1px;
`

const RowWrapper = styled.div`
  /** align-self, padding, margin, border */
  ${genericStyles}

  /** defaults */
  max-width: ${({ constrained }) => (constrained ? '1200px' : '100%')};
  flex-grow: ${({ growProp }) => (growProp ? 1 : 0)};
  ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `}
  
  /** conditional styles */
  ${({ hide }) => !hide && `display: flex;`}
  ${({ background }) => background && backgroundStyle(background)}

  /** responsive props */
  ${({ padding }) =>
    !padding && responsiveProps('padding', gridConfig.rowPadding)}
  ${props =>
    props.widthProp
      ? responsiveProps('width', getSize(props, props.widthProp))
      : 'width: 100%;'}
  ${props =>
    props.heightProp &&
    responsiveProps('height', getSize(props, props.heightProp))}
  ${({ flexDirection }) =>
    flexDirection && responsiveProps('flex-direction', flexDirection)}
  ${({ align }) => align && responsiveProps('align-items', align)}
  ${({ justify }) => justify && responsiveProps('justify-content', justify)}

  /** debug */
  ${({ debug }) => debug && debugStyle()}
`

export default RowWrapper
