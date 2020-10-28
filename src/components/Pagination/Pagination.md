### A long list can be divided into several pages using Pagination, and only one page will be loaded at a time.
Use this component when it will take a long time to load/render all items or if you want to browse the data by navigating through pages.

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
