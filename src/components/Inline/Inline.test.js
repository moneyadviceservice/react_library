import React from 'react'
import { render } from '../../utils/testing'
import { Inline } from '../Inline'

describe('<Inline />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with children element', () => {
      const { container } = render(<Inline>example child</Inline>)
      expect(container).toMatchSnapshot()
    })
  })
})
