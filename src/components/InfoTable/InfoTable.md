The InfoTable component enables you to display information in a custom table format.

```jsx
import React, { useState } from 'react';
import { InfoTable, Row } from '@moneypensionservice/directories';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.';

<Row justify="space-around" direction={{xs: 'column', md: 'row'}}>
  <InfoTable 
    margin={{bottom: '15px'}}
    sizes={{xs: 12, md: 4}}
    title="Default InfoTable Component" 
    textContent={lorem} />
  <InfoTable 
    sizes={{xs: 12, md: 4}}
    title="I'm using custom colors!" 
    textContent={lorem}
    tableColor="aqua"
    titleColor="black" />
</ Row>
```
