MAS Header

```jsx
import React, { useState } from 'react';
import { Header } from '@moneypensionservice/directories';

const [lgn, changeLgn] = useState('en');

<Header 
  currentLgn={lgn} 
  setLgn={() => changeLgn(lgn === 'en' ? 'cy' : 'en')} />
```
