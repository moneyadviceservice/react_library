import { render, waitForElement } from '@testing-library/react'
import React from 'react'
import ThemeProvider from '../config/styles/ThemeProvider'
import theme from '../config/styles/ThemeProvider/theme'
import Button from './index'

// Hoist helper functions (but not vars) to reuse between test cases
const renderComponent = ({ theme, text }) =>
  render(
    <ThemeProvider theme={theme}>
      <Button text={text} />
    </ThemeProvider>
  )

it('renders button text', async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = renderComponent({ theme: theme, text: 'We Salute You' })

  await waitForElement(() => getByText(/We Salute You/i))
})

/**
 * 
 describe('Button', () => {
  test('should display text', () => {
    const { container } = render(<Button text="We Salute You!" />)

    getByText(container, 'We Salute You!')
  })
})

describe("Button", () => {
  test("should handle click events", () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Button text="Click me, maybe?" onClick={onClickMock} />
    );
    const component = container.firstChild;

    fireEvent.click(component);

    expect(onClickMock).toBeCalled();
});
*/
