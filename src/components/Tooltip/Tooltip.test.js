import React from 'react'
import { render, fireEvent, act } from '../../utils/testing'
import { Tooltip } from '../Tooltip'

describe('<Tooltip />', () => {
  describe('Snapshot', () => {
    it('should match click snapshot', () => {
      const { container } = render(<Tooltip text="Tooltip text" />)
      // tooltip closed
      expect(container).toMatchSnapshot()
      // click on icon
      act(() => {
        fireEvent.click(container.firstChild)
      })
      // tooltip opened
      expect(container).toMatchSnapshot()
    })

    it('should match hover snapshot with children', () => {
      const { container } = render(
        <Tooltip hover text="Tooltip text">
          <span>hover</span>
        </Tooltip>
      )
      // tooltip closed
      expect(container).toMatchSnapshot()
      // hover
      act(() => {
        fireEvent.mouseEnter(container)
      })
      // tooltip opened
      expect(container).toMatchSnapshot()
    })
  })
})
