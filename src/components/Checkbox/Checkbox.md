A check box allowing single values to be selected/deselected.

```jsx
import { Form, Formfield, Checkbox } from '@moneypensionservice/directories';

<Form>
  <Formfield legend="Choose your favorite cities:" >
    <Checkbox
      label="🇫🇷 Paris"
      value="Paris" />
    <Checkbox
      label="🇩🇪 Berlin"
      value="Berlin" />
    <Checkbox
      label="🇬🇧 London"
      value="London" />
    <Checkbox
      label="🇯🇵 Tokyo"
      value="Tokyo"
      disabled />
  </Formfield>
</Form>
```
