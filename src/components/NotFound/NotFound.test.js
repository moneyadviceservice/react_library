import React from 'react'
import { render } from '../../utils/testing'
import { NotFound } from '../NotFound'

describe('<NotFound />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<NotFound />)
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot in Welsh', () => {
      const { container } = render(<NotFound currentLng="cy" />)
      expect(container).toMatchSnapshot()
    })
  })

  describe('custom link props', () => {
    it('linkText and linkUrl props', () => {
      const { container, getByTestId } = render(
        <NotFound linkText="customLinkText" linkUrl="https://www.test.com/" />
      )
      // snapshot
      expect(container).toMatchSnapshot()
      // anchor text content
      expect(getByTestId('url').textContent).toBe('customLinkText')
      // href
      expect(getByTestId('url').href).toBe('https://www.test.com/')
    })
  })
})
