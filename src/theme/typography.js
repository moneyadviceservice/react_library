import { css } from 'styled-components'
// fonts

import Roobert300 from '../assets/Fonts/RoobertRegular.woff'
import Roobert500 from '../assets/Fonts/RoobertTWHINTRegular.woff'
import Roobert700 from '../assets/Fonts/RoobertTWHINTSemiBold.woff'
import Roobert900 from '../assets/Fonts/RoobertTWHINTBold.woff'

export default function() {
  const typography = {
    fontFace: css`
      @font-face {
        font-family: 'Roobert Sans';
        font-style: normal;
        font-weight: 300;
        src: url(${Roobert300}) format('woff');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: normal;
        font-weight: 500;
        src: url(${Roobert500}) format('woff');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: normal;
        font-weight: 700;
        src: url(${Roobert700}) format('woff');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: normal;
        font-weight: 900;
        src: url(${Roobert900}) format('woff');
      }
    `,
    fontFamily: css`
      font-family: 'Roobert Sans', sans-serif;
    `,
    fontLighter: 300,
    fontLight: 400,
    fontMedium: 500,
    fontHeavy: 700,
  }

  return typography
}
