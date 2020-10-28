### A checkbox allows the user to toggle between checked and unchecked.
You can build a checkbox using the `Checkbox` component in combination with a `Formfield` component to group controls and use its `legend` prop for the label.

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
