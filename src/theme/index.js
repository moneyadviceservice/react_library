import { default as typographyGenerate } from './typography'
import { default as colorsGenerate } from './colors'
import { default as sizeGenerate } from './sizes'

const defaultTheme = {
  typography: typographyGenerate(),
  colors: colorsGenerate(),
  sizes: sizeGenerate(),
}

export default defaultTheme
