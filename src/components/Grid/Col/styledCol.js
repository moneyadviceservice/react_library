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

  /** column-based flex size */
  ${({ constrained, sizesProp }) =>
    constrained
      ? css`
          flex-basis: 0%;
        `
      : sizesProp
      ? flexStyle(sizesProp)
      : css`
          flex-basis: auto;
        `}
  
  ${({ constrained, sizesProp, growProp }) =>
    !constrained &&
    !sizesProp &&
    css`
      flex-grow: ${growProp ? 1 : 0};
    `}
  
  /** max-width */
  ${({ constrained }) =>
    constrained &&
    css`
      flex-grow: 1;
      max-width: ${gridConfig.constrained};
    `};

  /** conditional styles */
  ${({ hide }) =>
    !hide &&
    css`
      display: flex;
    `}
  ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `};
  ${({ background }) => background && backgroundStyle(background)}
  ${({ padding, noGutter }) => !padding && !noGutter && gutterStyle()}

  /** responsive props */
  ${({ widthProp, theme }) =>
    widthProp && responsiveProps('width', getSize(theme, widthProp))}
  ${({ heightProp, theme }) =>
    heightProp && responsiveProps('height', getSize(theme, heightProp))}
  ${({ flexDirection }) =>
    flexDirection && responsiveProps('flex-direction', flexDirection)}
  ${({ align }) => align && responsiveProps('align-items', align)}
  ${({ justify }) => justify && responsiveProps('justify-content', justify)}
  ${({ offsetProp }) => offsetProp && offsetStyle(offsetProp)}

  /** debug */
  ${({ debug }) => debug && debugStyle()}
`

export default ColWrapper
