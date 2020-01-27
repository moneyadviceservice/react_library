import styled, { css } from 'styled-components'
import {
  resolveMedia,
  genericStyles,
  backgroundStyle,
} from '../../../utils/helpers'

const fluidStyle = () => css`
  max-width: 100%;

  ${resolveMedia.lg`
    max-width: 1440px;
  `}
`

const debugStyle = () => css`
  background-color: #5901ad40;
  outline: #fff solid 1px;
`

const directionStyle = props => css`
  min-width: 0;
  min-height: 0;
  flex-direction: ${props => props.flexDirection};
`

const paddingStyle = props => css`
  padding: 0 1rem;

  ${resolveMedia.md`
    padding: 0 1.5rem;
  `}
`

const ContainerWrapper = styled.div`
  ${genericStyles}
  ${props => console.log(props)}

  display: flex;
  outline: none;
  
  /** conditional styles */
  ${props => !props.padding && paddingStyle()}
  ${props => !props.margin && 'margin: 0 auto;'}
  ${props => !props.fluid && fluidStyle()}
  ${props => props.debug && debugStyle()}
  ${props => props.flexDirection && directionStyle()}
  ${props => props.background && backgroundStyle(props.background)}
  
`

export default ContainerWrapper
