The Radiobutton component allows the user to enable or disable options.

```jsx
import React, { useState } from 'react';
import { Form, Formfield, Radiobutton, Paragraph as P } from '@moneypensionservice/directories';

const [fruit, changeValue] = useState('Orange');

<>
<Form>
  <Formfield legend="Choose your favourite fruit:" label="Fruits">
    <Radio
      checked={fruit === 'Pear'}
      onChange={(e) => changeValue(e.target.value)}
      value="Pear"
      label="🍐 Pear"
      name="fruits" />
    <Radio
      checked={fruit === 'Orange'}
      onChange={(e) => changeValue(e.target.value)}
      value="Orange"
      label="🍊 Orange"
      name="fruits" />
    <Radio
      checked={fruit === 'Kiwi'}
      onChange={(e) => changeValue(e.target.value)}
      value="Kiwi"
      label="🥝 Kiwi"
      name="fruits" />
    <Radio
      checked={fruit === 'Grape'}
      onChange={(e) => changeValue(e.target.value)}
      value="Grape"
      label="🍇 Grape (disabled)"
      name="fruits"
      disabled />
  </Formfield>
</Form>
<P margin={{top: '10px'}}>{`Currently selected: ${fruit}`}</P>
</>
```
