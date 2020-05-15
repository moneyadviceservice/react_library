import styled, { css } from 'styled-components'
import { Anchor } from '../Anchor'

const StyledTooltip = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
`

const Icon = styled(Anchor)`
  font-style: italic;
  color: #428513;
  padding: 0.375rem;
`

const Tip = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  left: 0;
  bottom: 20px;
  z-index: 100;
  min-width: 300px;
  white-space: break-spaces;
  background-color: white;
  border: 1px solid black;
  padding: 4px;
`

export { StyledTooltip, Icon, Tip }
