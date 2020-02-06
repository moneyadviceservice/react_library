Use the flexbox alignment `props` to vertically and horizontally align columns.

#### **Vertical Alignment**

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row height='xxsmall' debug>
    <Col debug>
      One of three columns
    </Col>
    <Col debug>
      One of three columns
    </Col>
    <Col debug>
      One of three columns
    </Col>
  </Row>
  <Row align='center' height='xxsmall' debug>
    <Col debug>
      One of three columns
    </Col>
    <Col debug>
      One of three columns
    </Col>
    <Col debug>
      One of three columns
    </Col>
  </Row>
  <Row align='flex-end' height='xxsmall' debug>
    <Col debug>
      One of three columns
    </Col>
    <Col debug>
      One of three columns
    </Col>
    <Col debug>
      One of three columns
    </Col>
  </Row>
</Container>
```

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row height='xxsmall' debug>
    <Col alignSelf='start' debug>
      One of three columns
    </Col>
    <Col alignSelf='center' debug>
      One of three columns
    </Col>
    <Col alignSelf='end' debug>
      One of three columns
    </Col>
  </Row>
</Container>
```

#### **Horizontal Alignment**

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row justify='flex-start' height='xxsmall' debug>
    <Col sizes={4} debug>
      One of two columns
    </Col>
    <Col sizes={4} debug>
      One of two columns
    </Col>
  </Row>
  <Row justify='center' height='xxsmall' debug>
    <Col sizes={4} debug>
      One of two columns
    </Col>
    <Col sizes={4} debug>
      One of two columns
    </Col>
  </Row>
  <Row justify='flex-end' height='xxsmall' debug>
    <Col sizes={4} debug>
      One of two columns
    </Col>
    <Col sizes={4} debug>
      One of two columns
    </Col>
  </Row>
  <Row justify='space-around' height='xxsmall' debug>
    <Col sizes={4} debug>
      One of two columns
    </Col>
    <Col sizes={4} debug>
      One of two columns
    </Col>
  </Row>
  <Row justify='space-between' height='xxsmall' debug>
    <Col sizes={4} debug>
      One of two columns
    </Col>
    <Col sizes={4} debug>
      One of two columns
    </Col>
  </Row>
</Container>
```
