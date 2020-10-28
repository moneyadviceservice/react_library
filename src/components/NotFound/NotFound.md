### Renders information and useful links when pages are not found. 
Use this component for your 404 routes. 

You can set a different url and text to the first anchor link by using the `linkUrl` and `linkText` props.

```jsx
import React, { useState } from 'react';
import { Row, Button, NotFound } from '@moneypensionservice/directories';

const [locale, setLocale] = useState('en');

<>
  <Row margin={{bottom: '20px'}}>
    <Button onClick={() => setLocale('en')}>English</Button>
    <Button onClick={() => setLocale('cy')}>Welsh</Button>
  </Row>
  <NotFound
    currentLng={locale} />
</>
```
