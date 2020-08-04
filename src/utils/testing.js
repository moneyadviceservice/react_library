import { render, act } from '@testing-library/react'
import GlobalTheme from '../components/ThemeProvider'

const customRender = (ui, options) =>
  render(ui, { wrapper: GlobalTheme, ...options })

const waitRender = async (ui, options) => {
  const { container, ...rest } = customRender(ui, options)

  await act(async () => {
    await Promise.resolve(container)
  })

  return { container, ...rest }
}

export * from '@testing-library/react'

export { customRender as render, waitRender }
