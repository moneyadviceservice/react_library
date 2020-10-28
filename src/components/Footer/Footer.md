### Renders an identical copy of the MAS footer. 
Use the locale props to set custom text. Both the Webchat and WhatsApp buttons will be automatically disabled outside opening hours.

```jsx
import React, { useState } from 'react';
import { Button, Footer, Row } from '@moneypensionservice/directories';

const [locale, setLocale] = useState('en');

<>
  <Row margin={{bottom: '20px'}}>
    <Button onClick={() => setLocale('en')}>English</Button>
    <Button onClick={() => setLocale('cy')}>Welsh</Button>
  </Row>
  <Footer 
    currentLng={locale}
    setLng={() => setLocale(locale === 'en' ? 'cy' : 'en')} />
</>
```
