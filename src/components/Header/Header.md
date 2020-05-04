MAS Header

```jsx
import React, { useState } from 'react';
import { Header } from '@moneypensionservice/directories';

const [lgn, changeLgn] = useState('en');

<Header 
  currentLgn={lgn} 
  setLng={() => changeLgn(lgn === 'en' ? 'cy' : 'en')} />
```
