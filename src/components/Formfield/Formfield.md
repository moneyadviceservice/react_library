Does your form contain multiple sections of related inputs? Use `Formfield` to generate a `fieldset` element to group them, and the `legend` prop to provide a label for what this section is for.<br/>
Screen readers may repeat the legend for each control in the group, so the legend text should be brief and descriptive.
#### **Note:**
Fieldset and legend should only be used when a higher-level label is necessary. Single checkboxes or basic radio buttons that make sense from their labels alone do not require fieldset and legend.<br/>
Nested fieldsets can cause odd screen reader behavior and should be avoided.
```jsx
import { Form, Formfield } from '@moneypensionservice/directories';

<Form>
  <Formfield 
    legend="Choose your favorite monster:"
    margin={{bottom: "1rem"}} >
    <input type="radio" id="kraken" name="monster" />
    <label htmlFor="kraken">Kraken</label><br/>

    <input type="radio" id="sasquatch" name="monster" />
    <label htmlFor="sasquatch">Sasquatch</label><br/>

    <input type="radio" id="mothman" name="monster" />
    <label htmlFor="mothman">Mothman</label>
  </Formfield>
  <Formfield legend="Choose your favorite food:">
    <input type="radio" id="pizza" name="food" />
    <label htmlFor="kraken">Pizza</label><br/>

    <input type="radio" id="burger" name="food" />
    <label htmlFor="sasquatch">Burger</label><br/>

    <input type="radio" id="steak" name="food" />
    <label htmlFor="mothman">Steak</label>
  </Formfield>
</Form>
```

