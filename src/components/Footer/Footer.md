MAS Footer

```jsx
import React, { useState } from 'react';
import { Button, Footer, Row } from '@moneypensionservice/directories';

const [locale, setLocale] = useState('en');

<>
  <Row>
    <Button onClick={() => setLocale('en')}>English</Button>
    <Button onClick={() => setLocale('cy')}>Welsh</Button>
  </Row>
  <Footer 
    currentLgn={locale}
    setLng={() => setLocale(locale === 'en' ? 'cy' : 'en')} />
</>
```
