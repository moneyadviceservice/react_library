import React from 'react'
import { render } from '../../utils/testing'
import { InfoTable } from '../InfoTable'

describe('<InfoTable />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with title and textContent props', () => {
      const { container } = render(
        <InfoTable title="example" textContent="example content" />
      )
      expect(container).toMatchSnapshot()
    })
    it('should match snapshot with title prop and children', () => {
      const { container } = render(
        <InfoTable title="example">
          <p>example child</p>
        </InfoTable>
      )
      expect(container).toMatchSnapshot()
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
