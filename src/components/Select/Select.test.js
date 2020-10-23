import React from 'react'
import { render, fireEvent } from '../../utils/testing'
import { Select } from '../Select'

describe('<Select />', () => {
  const options = ['option1', 'option2', 'option3']

  describe('Snapshots', () => {
    it('should match snapshot with options, id and label', () => {
      const { container } = render(
        <Select id="test" label="test label" options={['option 1']} />
      )
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot disabled', () => {
      const { container } = render(
        <Select
          disabled
          id="disabled"
          label="test disabled"
          options={['option 1']}
        />
      )
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot with multiple options', () => {
      const { container } = render(
        <Select id="options" label="test options" options={options} />
      )
      expect(container).toMatchSnapshot()
    })
  })

  describe('options prop', () => {
    it('should display correct number of options', () => {
      const { container } = render(<Select id="options" options={options} />)
      const dropDownOptions = container.querySelectorAll('option')

      expect(dropDownOptions.length).toBe(3)
    })

    it('should display correct option text', () => {
      const { container } = render(<Select id="options" options={options} />)
      const dropDownOptions = container.querySelectorAll('option')
      const [opt1, opt2, opt3] = Array.from(dropDownOptions)

      expect(opt1.textContent).toBe(options[0])
      expect(opt2.textContent).toBe(options[1])
      expect(opt3.textContent).toBe(options[2])
    })
  })

  describe('onChange prop', () => {
    it('should call onChange function when option is changed', () => {
      const onChangeMock = jest.fn()
      const { getByTestId } = render(
        <Select
          data-testid="select"
          id="change"
          onChange={onChangeMock}
          options={options}
        />
      )

      fireEvent.change(getByTestId('select'), {
        target: { value: 'option2' },
      })

      expect(onChangeMock).toHaveBeenCalledTimes(1)
    })
  })
})
