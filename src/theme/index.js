import { default as typography } from './typography'
import { default as colorsGenerate } from './colors'
import { default as sizeGenerate } from './sizes'

const defaultTheme = {
  typography,
  colors: colorsGenerate(),
  sizes: sizeGenerate(),
}

export default defaultTheme
