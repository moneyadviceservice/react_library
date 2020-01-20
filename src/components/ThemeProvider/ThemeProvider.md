styled-components has full theming support by exporting a `<ThemeProvider>` wrapper component. This component provides a theme to all React components underneath itself via the context API. In the render tree all styled-components will have access to the provided theme, even when they are multiple levels deep.

> **NOTE:**
> `<ThemeProvider>` returns its children when rendering, so it must only wrap a single child node as it may be used as the root of the `render()` method.

```jsx
import { ThemeProvider, Button, Row } from '@moneypensionservice/directories';

<ThemeProvider>
  <Row justify='space-between'>
    <Button text='Default' />
    <Button primary text='Primary' />
  </Row>
</ThemeProvider>
```
