import { css } from 'styled-components'
// fonts
import MuseoSans300 from '../assets/Fonts/MuseoSans300.woff'
import MuseoSans500 from '../assets/Fonts/MuseoSans500.woff'
import MuseoSans700 from '../assets/Fonts/MuseoSans700.woff'
import MuseoSlab900 from '../assets/Fonts/MuseoSlab900.woff'

export default function() {
  const typography = {
    fontFace: css`
      @font-face {
        font-family: 'Museo Sans';
        src: url(${MuseoSans300}) format('woff'),
          url(${MuseoSans500}) format('woff'),
          url(${MuseoSans700}) format('woff'),
          url(${MuseoSlab900}) format('woff');
      }
    `,
    fontFamily: css`
      font-family: 'Museo Sans', sans-serif;
    `,
    fontLighter: 300,
    fontLight: 400,
    fontMedium: 500,
    fontHeavy: 700,
  }

  return typography
}
