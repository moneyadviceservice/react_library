import React from 'react'
import { render } from '../../utils/testing'
import { InfoTable } from '../InfoTable'

describe('<InfoTable />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with title and textContent props', () => {
      const { container, getByTestId } = render(
        <InfoTable title="example" textContent="example content" />
      )
      // snapshot
      expect(container).toMatchSnapshot()
      // content
      expect(getByTestId('content').textContent).toBe('example content')
    })
    it('should match snapshot with title prop and children', () => {
      const { container, getByTestId } = render(
        <InfoTable title="example">example child</InfoTable>
      )
      // snapshot
      expect(container).toMatchSnapshot()
      // content
      expect(getByTestId('content').textContent).toBe('example child')
    })
    it('should match snapshot with tableColor and titleColor props', () => {
      const { container } = render(
        <InfoTable
          title="example"
          textContent="example content"
          tableColor="aqua"
          titleColor="black"
        />
      )
      expect(container).toMatchSnapshot()
    })
  })
})
