A modified Column component that renders a Form element. All props enabled by the Column component can be used here as well.
This component also sets some default styles used by its children elements.

```jsx
import { Form } from '@moneypensionservice/directories';

<Form margin="6px">
  <fieldset>
    <label>
      Select Me
      <input type="radio" name="radio" value={'Select Me'} />
    </label>
  </fieldset>
  <fieldset>
    <label>Name:
    <input type="text" name="submittedName" autoComplete="name" />
  </label>
  </fieldset>
</Form>
```
