### The Select input allows a user to select a value from a series of options.
The `Select` component is given an id attribute to enable it to be associated with a `<label>` element for accessibility purposes, as well as a name attribute to represent the name of the associated data point submitted to the server. Each menu option is defined by an `<option>` element nested inside the `Select` component.

You can pass as many options as you need to the `options` prop. Each `<option>` element should have a value attribute containing the data value to submit to the server when that option is selected. The value defaults to the text contained inside the element.

```jsx
import React, { useState } from 'react';
import { Container, Row, Form, Formfield, Select, Paragraph as P } from '@moneypensionservice/directories';

const [animal, changeAnimal] = useState('🐕 Dog');

<Container>
  <Row direction="column">
    <Form>
      <Formfield>
        <Select
          disabled
          id="disabled"
          label="I am disabled!"
          options={['Try to select me 🙈']}
        />
      </Formfield>
      <Formfield>
        <Select
          id="animals"
          label="Select your favourite animal:"
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
    <P textSize="medium" margin={{top: '10px'}}>{`Currently selected: ${animal}`}</P>
  </Row>
</Container>

```
