The Select input component allows the user to enable or disable options.

```jsx
import React, { useState } from 'react';
import { Form, Formfield, Select, Paragraph as P } from '@moneypensionservice/directories';

const [animal, changeAnimal] = useState('🐕 Dog');

<>
<Form>
  <Formfield>
    <Select
      id="animals"
      label="Select your favourite animal"
      onChange={e => changeAnimal(e.target.value)}
      options={[
        '🐕 Dog',
        '🦊 Fox',
        '🐈 Cat',
        '🐎 Horse',
      ]}
    />
  </Formfield>
</Form>
<P margin={{top: '10px'}}>{`Currently selected: ${animal}`}</P>
</>

```
