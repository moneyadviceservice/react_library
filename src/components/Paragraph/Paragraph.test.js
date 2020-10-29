import React from 'react'
import { render } from '../../utils/testing'
import { Paragraph } from '../Paragraph'

describe('<Paragraph />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with children element', () => {
      const { container } = render(<Paragraph>example child</Paragraph>)
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot with italic, width and margin props', () => {
      const { container } = render(
        <Paragraph italic width="75%" margin={{ bottom: '50px' }}>
          example child
        </Paragraph>
      )
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot with underline, weight and textAlign props', () => {
      const { container } = render(
        <Paragraph underline weight="700" textAlign="justify">
          example child
        </Paragraph>
      )
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot with color and strike props', () => {
      const { container } = render(
        <Paragraph color="salmon" strike>
          example child
        </Paragraph>
      )
      expect(container).toMatchSnapshot()
    })
  })
})
