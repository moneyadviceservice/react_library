import React from 'react'
import { render, fireEvent } from '../../utils/testing'
import { Checkbox } from '../Checkbox'

describe('<Checkbox />', () => {
  describe('Snapshots', () => {
    it('should match snapshot without props', () => {
      const { container } = render(<Checkbox />)
      expect(container).toMatchSnapshot()
    })

    it('should match snapshot with disabled prop', () => {
      const { container } = render(<Checkbox disabled />)
      expect(container).toMatchSnapshot()
    })
  })

  describe('Checkbox label', () => {
    const label = 'label text'

    it('should display label prop as Checkbox label', () => {
      const { container } = render(<Checkbox label={label} />)

      expect(container.querySelector('label').textContent).toBe(label)
    })

    it('should display children as Checkbox label', () => {
      const { container } = render(<Checkbox>{label}</Checkbox>)

      expect(container.querySelector('label').textContent).toBe(label)
    })

    it('should apply given color to the label', () => {
      const { container } = render(<Checkbox style={{ color: 'red' }} />)
      expect(container.querySelector('label').style.color).toBe('red')
    })
  })

  describe('Checked status', () => {
    it('should changed the checked status of the input when the label is clicked', () => {
      const { container, getByTestId } = render(
        <Checkbox label="text" data-testid="checkbox" />
      )

      expect(container.querySelector('input').checked).toEqual(false)

      fireEvent.click(getByTestId('checkbox'))

      expect(container.querySelector('input').checked).toEqual(true)
    })
  })

  describe('onChange prop', () => {
    it('should call onChange function when Checkbox is changed', () => {
      const onChangeMock = jest.fn()
      const { getByTestId } = render(
        <Checkbox onChange={onChangeMock} label="text" data-testid="checkbox" />
      )

      fireEvent.click(getByTestId('checkbox'))

      expect(onChangeMock).toHaveBeenCalled()
    })
  })

  describe('value prop', () => {
    it('should apply the value property', () => {
      const { container } = render(<Checkbox value="my value" />)

      expect(container.querySelector('input').value).toBe('my value')
    })
  })

  describe('name prop', () => {
    it('should apply the name property', () => {
      const { container } = render(<Checkbox name="my name" />)

      expect(container.querySelector('input').name).toBe('my name')
    })
  })
})
