The Radio input component allows the user to enable or disable options.

```jsx
import React, { useState } from 'react';
import { Form, Formfield, Radiobutton, Paragraph as P } from '@moneypensionservice/directories';

const [fruit, changeValue] = useState('Mango');

<>
<Form>
  <Formfield legend="Choose your favourite fruit:" label="Fruits">
    <Radio
      checked={fruit === 'Pineapple'}
      onChange={e => changeValue(e.target.value)}
      value="Pineapple"
      label="🍍 Pineapple"
      name="fruits" />
    <Radio
      checked={fruit === 'Mango'}
      onChange={e => changeValue(e.target.value)}
      value="Mango"
      label="🥭 Mango"
      name="fruits" />
    <Radio
      checked={fruit === 'Melon'}
      onChange={e => changeValue(e.target.value)}
      value="Melon"
      label="🍈 Melon"
      name="fruits" />
    <Radio
      checked={fruit === 'Banana'}
      onChange={e => changeValue(e.target.value)}
      value="Banana"
      label="🍌 Banana"
      name="fruits"
      disabled />
  </Formfield>
</Form>
<P margin={{top: '10px'}}>{`Currently selected: ${fruit}`}</P>
</>
```
