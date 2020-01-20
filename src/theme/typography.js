import { css } from 'styled-components'

export default function() {
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
    fontLighter: 300,
    fontLight: 400,
    fontMedium: 500,
    fontHeavy: 700,
  }

  return typography
}
