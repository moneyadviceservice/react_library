import React from 'react'
import { render, fireEvent } from '../../utils/testing'
import { Radio } from '../Radio'

describe('<Radio />', () => {
  describe('Snapshots', () => {
    it('should match snapshot without props', () => {
      const { container } = render(<Radio />)
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot with disabled prop', () => {
      const { container } = render(<Radio disabled />)
      expect(container).toMatchSnapshot()
    })

    it('should match snapshot with checked prop', () => {
      const { container } = render(<Radio checked onChange={e => {}} />)
      expect(container).toMatchSnapshot()
    })

    it('should match snapshot with checked and disabled prop', () => {
      const { container } = render(
        <Radio checked disabled onChange={e => {}} />
      )
      expect(container).toMatchSnapshot()
    })
  })

  describe('onChange prop', () => {
    it('should call onChange callback when RadioButton is changed', () => {
      const onChangeMock = jest.fn()
      const { getByTestId } = render(
        <Radio onChange={onChangeMock} data-testid="radio">
          Radio
        </Radio>
      )

      fireEvent.click(getByTestId('radio'))

      expect(onChangeMock).toHaveBeenCalledTimes(1)
    })
  })
})
