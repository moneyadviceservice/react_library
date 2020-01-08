import { createGlobalStyle } from 'styled-components'
// fonts
import MuseoSans300Woff from '../../../assets/Fonts/MuseoSans300.woff'
import MuseoSans500Woff from '../../../assets/Fonts/MuseoSans500.woff'
import MuseoSans700Woff from '../../../assets/Fonts/MuseoSans700.woff'
import MuseoSans900Woff from '../../../assets/Fonts/MuseoSlab900.woff'

const GlobalStyle = createGlobalStyle`

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

  body{
    margin: 0;
    padding: 0;
    font-family: 'MuseoSans',  "Helvetica Neue", Helvetica, Arial, serif; 
  }

  li:last-child { border-bottom: none; }
  
`
export default GlobalStyle
