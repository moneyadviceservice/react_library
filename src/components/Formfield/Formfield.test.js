import React from 'react'
import { render } from '../../utils/testing'
import { Formfield } from '../Formfield'

describe('<Formfield />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with legend prop and children element', () => {
      const { container } = render(
        <Formfield legend="example">
          <p>example child</p>
        </Formfield>
      )
      expect(container).toMatchSnapshot()
    })
  })
})
