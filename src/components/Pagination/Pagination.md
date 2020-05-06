Pagination Component

```jsx
import React, { useState } from 'react';
import { Pagination } from '@moneypensionservice/directories';

const items = ['item1', 'item2', 'item3', 'item4', 'item5'];

const [currentPage, setPage] = useState(2);
const itemsPerPage = 2;
const nPages = Math.ceil(items.length / itemsPerPage);

<Pagination 
  currentLng="en"
  currentPage={currentPage} 
  totalPages={nPages} 
  nextClick={() => setPage(currentPage + 1)}
  prevClick={() => setPage(currentPage - 1)} />
```
