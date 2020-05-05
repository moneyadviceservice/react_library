A modified Column component that renders a Form element. All props enabled by the Column component can be used here as well.
This component also sets some default styles used by its children elements.

```jsx
import { Form, Formfield } from '@moneypensionservice/directories';

<Form margin="6px">
  <Formfield>
    <legend>Choose your favorite monster</legend>

    <input type="radio" id="kraken" name="monster" />
    <label htmlFor="kraken">Kraken</label><br/>

    <input type="radio" id="sasquatch" name="monster" />
    <label htmlFor="sasquatch">Sasquatch</label><br/>

    <input type="radio" id="mothman" name="monster" />
    <label htmlFor="mothman">Mothman</label>
  </Formfield>
</Form>
```
