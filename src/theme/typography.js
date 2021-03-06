import { css } from 'styled-components'
// fonts

import RoobertLightWoff from '../assets/Fonts/Roobert-Light.woff'
import RoobertLightItalicWoff from '../assets/Fonts/Roobert-LightItalic.woff'
import RoobertLightWoff2 from '../assets/Fonts/Roobert-Light.woff2'
import RoobertLightItalicWoff2 from '../assets/Fonts/Roobert-LightItalic.woff2'


import RoobertMediumWoff from '../assets/Fonts/Roobert-Medium.woff'
import RoobertMediumItalicWoff from '../assets/Fonts/Roobert-MediumItalic.woff'
import RoobertMediumWoff2 from '../assets/Fonts/Roobert-Medium.woff2'
import RoobertMediumItalicWoff2 from '../assets/Fonts/Roobert-MediumItalic.woff2'


import RoobertHeavyWoff from '../assets/Fonts/Roobert-Heavy.woff'
import RoobertHeavyItalicWoff from '../assets/Fonts/Roobert-HeavyItalic.woff'
import RoobertHeavyWoff2 from '../assets/Fonts/Roobert-Heavy.woff2'
import RoobertHeavyItalicWoff2 from '../assets/Fonts/Roobert-HeavyItalic.woff2'


import RoobertRegularWoff from '../assets/Fonts/Roobert-Regular.woff'
import RoobertRegularItalicWoff from '../assets/Fonts/Roobert-RegularItalic.woff'
import RoobertRegularWoff2 from '../assets/Fonts/Roobert-Regular.woff2'
import RoobertRegularItalicWoff2 from '../assets/Fonts/Roobert-RegularItalic.woff2'


import RoobertSemiBoldWoff from '../assets/Fonts/Roobert-SemiBold.woff'
import RoobertSemiBoldItalicWoff from '../assets/Fonts/Roobert-SemiBoldItalic.woff'
import RoobertSemiBoldWoff2 from '../assets/Fonts/Roobert-SemiBold.woff2'
import RoobertSemiBoldItalicWoff2 from '../assets/Fonts/Roobert-SemiBoldItalic.woff2'


import RoobertBoldWoff from '../assets/Fonts/Roobert-Bold.woff'
import RoobertBoldItalicWoff from '../assets/Fonts/Roobert-BoldItalic.woff'
import RoobertBoldWoff2 from '../assets/Fonts/Roobert-Bold.woff2'
import RoobertBoldItalicWoff2 from '../assets/Fonts/Roobert-BoldItalic.woff2'


export default function() {
  const typography = {
    fontFace: css`
      @font-face {
        font-family: 'Roobert Sans';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${RoobertLightWoff}) format('woff'),
             url(${RoobertLightWoff2}) format('woff2');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url(${RoobertLightItalicWoff}) format('woff'),
             url(${RoobertLightItalicWoff2}) format('woff2');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(${RoobertMediumWoff}) format('woff'),
             url(${RoobertMediumWoff2}) format('woff2');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url(${RoobertMediumItalicWoff}) format('woff'),
             url(${RoobertMediumItalicWoff2}) format('woff2');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(${RoobertHeavyWoff}) format('woff'),
             url(${RoobertHeavyWoff2}) format('woff2');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url(${RoobertHeavyItalicWoff}) format('woff'),
             url(${RoobertHeavyItalicWoff2}) format('woff2');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url(${RoobertRegularWoff}) format('woff'),
             url(${RoobertRegularWoff2}) format('woff2');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: italic;
        font-weight: normal;
        font-display: swap;
        src: url(${RoobertRegularItalicWoff}) format('woff'),
             url(${RoobertRegularItalicWoff2}) format('woff2');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(${RoobertSemiBoldWoff}) format('woff'),
             url(${RoobertSemiBoldWoff2}) format('woff2');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: url(${RoobertSemiBoldItalicWoff}) format('woff'),
             url(${RoobertSemiBoldItalicWoff2}) format('woff2');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: normal;
        font-weight: bold;
        font-display: swap;
        src: url(${RoobertBoldWoff}) format('woff'),
             url(${RoobertBoldWoff2}) format('woff2');
      }
      @font-face {
        font-family: 'Roobert Sans';
        font-style: italic;
        font-weight: bold;
        font-display: swap;
        src: url(${RoobertBoldItalicWoff}) format('woff'),
             url(${RoobertBoldItalicWoff2}) format('woff2');
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
