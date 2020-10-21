import React from 'react'
import { render } from '../../utils/testing'
import { Anchor } from '../Anchor'

describe('<Anchor />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Anchor>example text</Anchor>)
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot with italic and textSize props', () => {
      const { container } = render(
        <Anchor italic textSize="12px">
          example text
        </Anchor>
      )
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot with weight and underline props', () => {
      const { container } = render(
        <Anchor weight="700" underline>
          example text
        </Anchor>
      )
      expect(container).toMatchSnapshot()
    })
  })

  describe('href prop', () => {
    it('should apply href property to the anchor', () => {
      const { container, getByText } = render(
        <Anchor href="https://www.test.com/">example</Anchor>
      )
      // snapshot with href
      expect(container).toMatchSnapshot()
      // href
      expect(getByText('example').href).toBe('https://www.test.com/')
    })
  })
})
