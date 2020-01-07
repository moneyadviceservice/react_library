import React from 'react'
import styled from 'styled-components'
import { font, primaryColors, shape } from 'config/styles'

const Wrapper = styled.button`
  ${font}
  ${primaryColors}
  ${shape}
`

function Button({ text, onClick }) {
  return <Wrapper onClick={onClick}>{text}</Wrapper>
}
/** @component */
export default Button
