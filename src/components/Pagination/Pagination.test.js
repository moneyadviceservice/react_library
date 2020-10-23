import React from 'react'
import { render, fireEvent } from '../../utils/testing'
import { Pagination } from '../Pagination'

describe('<Pagination />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <Pagination currentPage={2} totalPages={3} />
      )
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot in Welsh', () => {
      const { container } = render(
        <Pagination currentPage={2} totalPages={3} currentLng="cy" />
      )
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot in first page', () => {
      const { container } = render(
        <Pagination currentPage={1} totalPages={2} />
      )
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot in last page', () => {
      const { container } = render(
        <Pagination currentPage={3} totalPages={3} />
      )
      expect(container).toMatchSnapshot()
    })
  })

  describe('nextClick prop', () => {
    it('should call nextClick function when right button is clicked', () => {
      const nextClickMock = jest.fn()
      const { getByTestId } = render(
        <Pagination currentPage={2} totalPages={3} nextClick={nextClickMock} />
      )

      fireEvent.click(getByTestId('nextBtn'))

      expect(nextClickMock).toHaveBeenCalledTimes(1)
    })
  })

  describe('prevClick prop', () => {
    it('should call prevClick function when left button is clicked', () => {
      const prevClickMock = jest.fn()
      const { getByTestId } = render(
        <Pagination currentPage={2} totalPages={3} prevClick={prevClickMock} />
      )

      fireEvent.click(getByTestId('prevBtn'))

      expect(prevClickMock).toHaveBeenCalledTimes(1)
    })
  })

  describe('nextUrl prop', () => {
    it('should apply href property to right button', () => {
      const { container, getByTestId } = render(
        <Pagination
          currentPage={2}
          totalPages={3}
          nextUrl="https://www.test.com/"
        />
      )
      // snapshot with url
      expect(container).toMatchSnapshot()
      // href
      expect(getByTestId('nextBtn').href).toBe('https://www.test.com/')
    })
  })

  describe('prevUrl prop', () => {
    it('should apply href property to left button', () => {
      const { container, getByTestId } = render(
        <Pagination
          currentPage={2}
          totalPages={3}
          prevUrl="https://www.test.com/"
        />
      )
      // snapshot with url
      expect(container).toMatchSnapshot()
      // href
      expect(getByTestId('prevBtn').href).toBe('https://www.test.com/')
    })
  })
})
