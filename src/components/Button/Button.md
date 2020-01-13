Multiple Button Classes.

```jsx
import { ThemeProvider, Button, Row } from '@moneypensionservice/directories';

<ThemeProvider>
  <Row justify='space-between'>
    <Button text='Default' />
    <Button disabled text='Default Disabled' />
    <Button primary text='Primary' />
    <Button primary disabled text='Primary Disabled' />
  </Row>
</ThemeProvider>
```
