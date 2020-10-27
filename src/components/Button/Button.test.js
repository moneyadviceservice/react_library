import React from 'react'
import { render, fireEvent } from '../../utils/testing'
import Button from '../Button'

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('should match default snapshot', () => {
      const { container } = render(<Button />)
      expect(container).toMatchSnapshot()
    })
    it('should match default disabled snapshot', () => {
      const { container } = render(<Button disabled />)
      expect(container).toMatchSnapshot()
    })
    it('should match primary snapshot', () => {
      const { container } = render(<Button primary />)
      expect(container).toMatchSnapshot()
    })
    it('should match primary disabled snapshot', () => {
      const { container } = render(<Button primary disabled />)
      expect(container).toMatchSnapshot()
    })
    it('should match blog snapshot', () => {
      const { container } = render(<Button blog />)
      expect(container).toMatchSnapshot()
    })
    it('should match plain snapshot', () => {
      const { container } = render(<Button plain />)
      expect(container).toMatchSnapshot()
    })
  })

  describe('text prop', () => {
    it('should display value as Button children', () => {
      const { container } = render(<Button text="Cancel" />)

      expect(container.querySelector('button').textContent).toBe('Cancel')
    })
  })

  describe('onClick prop', () => {
    it('should call onClick function when Button is clicked', () => {
      const onClickMock = jest.fn()
      const { getByText } = render(<Button onClick={onClickMock} text="ok" />)

      fireEvent.click(getByText('ok'))

      expect(onClickMock).toHaveBeenCalledTimes(1)
    })
  })
})
