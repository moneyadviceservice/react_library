Multiple Button Classes.

```jsx
import { Button, Row, Col } from '@moneypensionservice/directories';

<Row noGutter>
  <Col direction='row' justify='space-evenly'>
    <Button text='Default' />
    <Button disabled text='Default Disabled' />
    <Button primary text='Primary' />
    <Button primary disabled text='Primary Disabled' />
  </Col>
</Row>
```
