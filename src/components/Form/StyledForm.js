import styled, { css } from 'styled-components'
import { Col } from '../Grid'

const inputFocus = css`
  background-color: white;
  border-color: transparent;
`

const inputFocusOutline = css`
  outline: solid 0.1875rem ${props => props.theme.colors.form.inputFocus};
`

const StyledForm = styled(Col)`
  input[type='text'],
  input[type='number'],
  input[type='email'],
  input[type='search'],
  input[type='password'] {
    -webkit-appearance: none;
    border: 1px solid ${props => props.theme.colors.form.inputBorder};
    border-radius: 0;
    color: ${props => props.theme.colors.black};
    display: inline-block;

    &[disabled] {
      background-color: ${props => props.theme.colors.form.disabledBackground};
      color: ${props => props.theme.colors.form.disabledText};
    }
  }

  input[type='search'] {
    box-sizing: border-box;
  }

  input[type='text'],
  input[type='number'],
  input[type='email'],
  input[type='search'],
  input[type='password'],
  input[type='checkbox'],
  input[type='radio'],
  textarea {
    &:focus {
      ${inputFocus}
      ${inputFocusOutline}
    }
  }

  input[type='checkbox'],
  input[type='radio'] {
    &:hover {
      ${inputFocus}
      ${inputFocusOutline}
      cursor: pointer;
    }
  }

  input[type='search'] {
    &:focus {
      outline-offset: -1px;
    }
  }

  input[type='submit'],
  button,
  select {
    &:focus {
      ${inputFocusOutline}
    }
  }
`

export default StyledForm
