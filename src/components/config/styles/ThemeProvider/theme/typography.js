import { css } from 'styled-components'
// fonts
import MuseoSans300Woff from '../../../../../assets/Fonts/MuseoSans300.woff'
import MuseoSans500Woff from '../../../../../assets/Fonts/MuseoSans500.woff'
import MuseoSans700Woff from '../../../../../assets/Fonts/MuseoSans700.woff'
import MuseoSans900Woff from '../../../../../assets/Fonts/MuseoSlab900.woff'

const typography = {
  fontFace: css`
    @font-face {
      font-family: 'MuseoSans';
      font-style: normal;
      font-weight: normal;
      src: 
        url('${MuseoSans300Woff}') format('woff'),
        url('${MuseoSans500Woff}') format('woff'),
        url('${MuseoSans700Woff}') format('woff'),
        url('${MuseoSans900Woff}') format('woff');
    }
  `,
  fontFamily: css`
    font-family: 'museo_sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  `,
  fontLighter: css`
    font-weight: 300;
  `,
  fontLight: css`
    font-weight: 400;
  `,
  fontMedium: css`
    font-weight: 500;
  `,
  fontHeavy: css`
    font-weight: 700;
  `,
}

export default typography
