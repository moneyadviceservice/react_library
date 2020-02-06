MaPS grid includes five tiers of predefined props for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

#### **All breakpoints**

For grids that are the same from the smallest of devices to the largest, use the `sizes` prop. Specify a numbered value when you need a particularly sized column, that amount of columns will be applied to the column for all breakpoints.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row>
    <Col debug>
      col
    </Col>
    <Col debug>
      col
    </Col>
    <Col debug>
      col
    </Col>
    <Col debug>
      col
    </Col>
  </Row>
  <Row>
    <Col sizes={8} debug>
      col 8
    </Col>
    <Col sizes={4} debug>
      col 4
    </Col>
  </Row>
</Container>
```

#### **Stacked to horizontal**

Using an object on the `sizes` prop with a `xs` and `sm` value, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (768px).

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row>
    <Col sizes={{xs: 12, sm: 8}} debug>
      col 8
    </Col>
    <Col sizes={{xs: 12, sm: 4}} debug>
      col 4
    </Col>
  </Row>
  <Row>
    <Col sizes={{xs: 12, sm: 'auto'}} debug>
      col
    </Col>
    <Col sizes={{xs: 12, sm: 'auto'}} debug>
      col
    </Col>
    <Col sizes={{xs: 12, sm: 'auto'}} debug>
      col
    </Col>
  </Row>
</Container>
```

#### **Mix and match**

Don’t want your columns to simply stack in some grid tiers? Use a combination of different props for each tier as needed. See the example below for a better idea of how it all works!

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row>
    <Col sizes={{xs: 12, md: 8}} debug>
      col xs-12 md-8
    </Col>
    <Col sizes={{xs: 6, md: 4}} debug>
      col xs-6 md-4
    </Col>
  </Row>
  <Row>
    <Col sizes={{xs: 6, md: 4}} debug>
      col xs-6 md-4
    </Col>
    <Col sizes={{xs: 6, md: 4}} debug>
      col xs-6 md-4
    </Col>
    <Col sizes={{xs: 6, md: 4}} debug>
      col xs-6 md-4
    </Col>
  </Row>
  <Row>
    <Col sizes={6} debug>
      col 6
    </Col>
    <Col sizes={6} debug>
      col 6
    </Col>
  </Row>
</Container>
```
