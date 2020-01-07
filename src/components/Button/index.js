import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../config/theme'
import { resolveMedia } from '../../config/helpers'

const Wrapper = styled.button`
  align-items: center;
  width: auto;
  margin-left: 1.6666666667%;
  margin-right: 1.6666666667%;
  font-size: 0.75rem;
  border-radius: 4px;
  margin-bottom: 0;
  line-height: 1.5;
  filter: none;
  text-align: center;
  white-space: nowrap;
  padding: 5px 22px;
  border: none;
  border-bottom: 3px solid
    ${props =>
      props.primary
        ? theme.primaryButtonButtomColor
        : theme.alternateButtonButtomColor};
  background: ${props =>
    props.primary
      ? theme.primaryButtonBackground
      : theme.alternateButtonBackground};
  color: ${theme.textColor};
  border-buttom-color: ${props =>
    props.primary ? theme.primaryButtonBorder : theme.alternateButtonBorder};

  ${resolveMedia.sm`
    cursor: pointer;
    width: auto;
    transition: background 0.2s ease;
    font-size: 0.95rem;
    line-height: 1;
    ${props => {
      if (props.primary) {
        return `
                &:hover{
                    outline: none;
                    background: #edde74;
                    border-buttom-color: #e1c260;
            
            `
      } else {
        return `

            &:hover{
                outline: none;
                background: #ecf0ef;
                border-buttom-color: #d1d5d5;
            `
      }
    }}
    `}
`

function Button({ text, onClick }) {
  return <Wrapper onClick={onClick}>{text}</Wrapper>
}

// Documentation
Button.propTypes = {
  /** text inside button */
  text: PropTypes.string,
}

Button.defaultProps = {
  text: '',
}

/** @component */
export default Button
