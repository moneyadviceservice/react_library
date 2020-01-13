import { css } from 'styled-components'

// fonts
const typography = {
  fontFace: css`
    @font-face {
      font-family: 'MuseoSans';
      font-style: normal;
      font-weight: normal;
      src: local('MuseoSans'), local('Museo_Sans'),
        url('../../../../../assets/Fonts/MuseoSans300.woff') format('woff'),
        url('../../../../../assets/Fonts/MuseoSans500.woff') format('woff'),
        url('../../../../../assets/Fonts/MuseoSans700.woff') format('woff'),
        url('../../../../../assets/Fonts/MuseoSlab900.woff') format('woff');
    }
  `,
  fontFamily: css`
    font-family: 'Museo_Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
