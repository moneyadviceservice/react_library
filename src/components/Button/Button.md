### Buttons allow users to take actions, and make choices, with a single tap.
There are multiple button variants to choose from. You can use the `plain` variant to serve as base for your own custom buttons.

If `href` is passed as a prop, the button will render as an anchor.

```jsx
import { Button, Row, Col } from '@moneypensionservice/directories';

<>
<Row>
  <Col padding={{vertical: '20px'}} sizes={4}>
    <Button text='Default' alignSelf="center" />
  </Col>
  <Col padding={{vertical: '20px'}} sizes={4}>
    <Button disabled text='Default Disabled' alignSelf="center" />
  </Col>
  <Col padding={{vertical: '20px'}} sizes={4}>
    <Button primary text='Primary' alignSelf="center" />
  </Col>
</Row>
<Row>
  <Col padding={{vertical: '20px'}} sizes={4}>
    <Button primary disabled text='Primary Disabled' alignSelf="center" />
  </Col>
  <Col padding={{vertical: '20px'}} sizes={4}>
    <Button blog text='Blog' alignSelf="center" />
  </Col>
  <Col padding={{vertical: '20px'}} sizes={4}>
    <Button plain text='Plain' alignSelf="center" />
  </Col>
</Row>
</>
```
