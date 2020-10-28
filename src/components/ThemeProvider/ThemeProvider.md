The styled-components library has full theming support by exporting a ThemeProvider wrapper component. 
This component provides a theme to all React components underneath itself via the context API. In the render tree all styled-components will have access to the provided theme, even when they are multiple levels deep.

**NOTE:** `<ThemeProvider>` returns its children when rendering, so it must only wrap a single child node as it may be used as the root of the `render()` method.

```jsx
import { ThemeProvider, Button, Row } from '@moneypensionservice/directories';

<ThemeProvider>
  <Row justify='space-evenly'>
    <Button text='Default' />
    <Button primary text='Primary' />
  </Row>
</ThemeProvider>
```

You will need to implement the `<ThemeProvider>` component just like the above example in the root of you application. This way, all the children will be able to access the variables within the Theme.

### Customizing the Theme variables

This theme follows the MAS design principles by default, you can customize this by passing your custom theme as a prop to the `<ThemeProvider>` component. This new Theme should follow the same structure as the default theme found [here](https://github.com/moneyadviceservice/react_library/tree/master/src/theme).
