import React from 'react'
import { render } from '../../utils/testing'
import { Form } from '../Form'

describe('<Form />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with children element', () => {
      const { container } = render(
        <Form>
          <p>example child</p>
        </Form>
      )
      expect(container).toMatchSnapshot()
    })
  })
})
