### Renders an identical copy of the RAD header.

```jsx
import React, { useState } from 'react';
import { Header, Row, Button } from '@moneypensionservice/directories';

const [lng, changeLng] = useState('en');

<>
  <Row margin={{bottom: '20px'}}>
    <Button onClick={() => changeLng('en')}>English</Button>
    <Button onClick={() => changeLng('cy')}>Welsh</Button>
  </Row>
  <Header 
    currentLng={lng} 
    setLng={() => changeLng(lng === 'en' ? 'cy' : 'en')} />
</>
```
