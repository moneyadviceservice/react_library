A check box allowing single values to be selected/deselected.

```jsx
import { Form, Formfield, Checkbox } from '@moneypensionservice/directories';

<Form>
  <Formfield legend="Choose your favorite place:" >
    <Checkbox
      label="Paris"
      value="paris" />
    <Checkbox
      label="Berlin"
      value="berlin" />
    <Checkbox
      label="London"
      value="london" />
  </Formfield>
</Form>
```
