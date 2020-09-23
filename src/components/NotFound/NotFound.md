Renders information and useful links when pages are not found.

```jsx
import React, { useState } from 'react';
import { Row, Button, NotFound } from '@moneypensionservice/directories';

const [locale, setLocale] = useState('en');

<>
<Row margin={{bottom: '20px'}}>
  <Button onClick={() => setLocale('en')}>English</Button>
  <Button onClick={() => setLocale('cy')}>Welsh</Button>
</Row>
<Row justify="center">
  <NotFound
    currentLng={locale} />
</Row>
</>
```
