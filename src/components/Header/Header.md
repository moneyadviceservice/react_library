MAS Header

```jsx
import React, { useState } from 'react';
import { Header } from '@moneypensionservice/directories';

const [lng, changeLng] = useState('en');

<Header 
  currentLng={lng} 
  setLng={() => changeLng(lng === 'en' ? 'cy' : 'en')} />
```
