The order of the `columns` inside a `Row` component can easily be reversed by using the `direction` prop.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row direction='row-reverse'>
    <Col debug>
      col 1
    </Col>
    <Col debug>
      col 2
    </Col>
  </Row>
  <Row>
    <Col debug>
      col 3
    </Col>
    <Col debug>
      col 4
    </Col>
  </Row>
</Container>
```
