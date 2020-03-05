import styled from 'styled-components'
import { resolveMedia } from '../../utils/helpers'
import ContainerWrapper from '../Grid/Container/styledContainer'
import { Row, Col, Container } from '../Grid'
import RowWrapper from '../Grid/Row/styledRow';

// Main footer container
const FooterContainer = styled(Container)`

${resolveMedia.md`
   
  `}

`;


// CONTACT PANEL
// Social media contacts row
const ContactPanelRow = styled(Row)`
    

`;

// Individual social media contact column
const ContactPanelColumn = styled(Col)`
  
 

`;





// GREY PANEL
// Row for the grey column under the contact panel
const GreyPanelRow= styled(Row)`

`;

// Social media counters
const SocialMediaCounter = styled(Col)`


`;

// Footer Link
const FooterLinks = styled(Col)`


`;
// Blog Button and Language Image 
const Images = styled(Col)`


`;
// Language Text 
const LanguageText = styled(Col)`
   
    ${resolveMedia.md`
        display: none;
    `}

`;




// MAS Banner
// MAS banner row
const MASBannerRow = styled(Row)`
 

`;




export { FooterContainer,
     GreyPanelRow, 
     MASBannerRow, 
     ContactPanelColumn, 
     ContactPanelRow,
     FooterLinks,
     SocialMediaCounter,
     Images,
     LanguageText
    }