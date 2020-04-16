import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ContactPanels from './ContactPanels/index'

configure({ adapter: new Adapter() })

const renderComponent = (props = {}) => {
  const component = shallow(<ContactPanels {...props} />)
  return component
}

const openingHours = jest
  .fn()
  .mockReturnValue(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)

describe('Footer Component', () => {
  describe('Contact Panels', () => {
    let component, disabled
    beforeEach(() => {
      component = renderComponent()
      disabled = component
        .find('StyledContactPanels__FooterButtons')
        .first()
        .props('disabled')
    })
    it('ContactPanels Component', () => {
      expect(component.exists()).toBe(true)
    })

    describe('Opening Hours', () => {
      it('Should return true on sundays, saturdays after 3pm and Mondays to Friday after 6pm', () => {
        let time = disabled.disabled === true
        const opening = openingHours()
        expect(opening).toBe(time)
      })
      it('Should return false on Mondays to Fridays from 8am to 6pm', () => {
        let time = disabled.disabled === false
        const opening = openingHours()
        expect(opening).toBe(time)
      })
    })
  })
})
