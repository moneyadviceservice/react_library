Gutters can be removed in the column elements by applying the `noGutter` props to the `Row` parent component.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row>
    <Col debug>
      col 1 of 2
    </Col>
    <Col debug>
      col 2 of 2
    </Col>
  </Row>
  <Row noGutter>
    <Col debug>
      col 1 of 2
    </Col>
    <Col debug>
      col 2 of 2
    </Col>
  </Row>
</Container>
```
