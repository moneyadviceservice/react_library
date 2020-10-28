### The `Formfield` component is used to group several controls within the `Form`.
Does your form contain multiple sections of related inputs? Use `Formfield` to generate a `fieldset` element to group them, and the `legend` prop to provide a label for what this section is for.

Screen readers may repeat the legend for each control in the group, so the legend text should be brief and descriptive.
#### **Note:**
Fieldset and legend should only be used when a higher-level label is necessary. Single checkboxes or basic radio buttons that make sense from their labels alone do not require fieldset and legend.<br/>
Nested fieldsets can cause odd screen reader behavior and should be avoided.
```jsx
import { Form, Formfield, Radio, Button } from '@moneypensionservice/directories';

<Form>
  <Formfield 
    legend="Choose your favorite monster:"
    margin={{bottom: "1rem"}} >
    <Radio
      value="kraken"
      label="Kraken" />
    <Radio
      value="sasquatch"
      label="Sasquatch" />
    <Radio
      value="mothman"
      label="Mothman" />
  </Formfield>
  <Formfield legend="Choose your favorite food:">
    <Radio
      value="pizza"
      label="Pizza" />
    <Radio
      value="burger"
      label="Burger" />
    <Radio
      value="steak"
      label="Steak" />
  </Formfield>
</Form>
```

