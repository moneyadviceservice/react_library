Multiple heading classes are available. It is **required** to specify the **`tag`** prop to define the type of header rendered.

```jsx
import { ThemeProvider, Header } from '@maps/react_library';

<ThemeProvider>
  <Header tag='h1' align='left' text='Heading One' />
  <Header tag='h2' align='left' text='Heading Two' />
  <Header tag='h3' align='left' text='Heading Three' />
  <Header tag='h4' align='left' text='Heading Four' />
</ThemeProvider>
```
