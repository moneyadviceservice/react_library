import React from 'react'
import { render, fireEvent } from '../../utils/testing'
import { Header } from '../Header'

describe('<Header />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Header />)
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot in Welsh', () => {
      const { container } = render(<Header currentLng="cy" />)
      expect(container).toMatchSnapshot()
    })
  })

  describe('lngUrl prop', () => {
    it('should change the anchor url', () => {
      const { container, getByTestId } = render(
        <Header lngUrl="https://www.test.com/" />
      )
      // snapshot
      expect(container).toMatchSnapshot()
      // href
      expect(getByTestId('localeAnchor').href).toBe('https://www.test.com/')
    })
  })

  describe('setLng prop', () => {
    it('should call function on anchor click', () => {
      const onClickMock = jest.fn()
      const { container, getByTestId } = render(<Header setLng={onClickMock} />)
      // snapshot
      expect(container).toMatchSnapshot()

      fireEvent.click(getByTestId('localeAnchor'))

      expect(onClickMock).toHaveBeenCalledTimes(1)
    })
  })
})
