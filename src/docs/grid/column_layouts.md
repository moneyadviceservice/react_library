#### **Equal-width**

For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of unit-less elements for each breakpoint you need and every column will be the same width.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row>
    <Col debug>
      1 of 2
    </Col>
    <Col debug>
      2 of 2
    </Col>
  </Row>
  <Row>
    <Col debug>
      1 of 3
    </Col>
    <Col debug>
      2 of 3
    </Col>
    <Col debug>
      3 of 3
    </Col>
  </Row>
</Container>
```

#### **Setting one column width**

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid props (as shown below), or inline widths. Note that the other columns will resize no matter the width of the center column.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row>
    <Col debug>
      1 of 3
    </Col>
    <Col sizes={6} debug>
      2 of 3 (Wider)
    </Col>
    <Col debug>
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col debug>
      1 of 3
    </Col>
    <Col sizes={5} debug>
      2 of 3 (Wider)
    </Col>
    <Col debug>
      3 of 3
    </Col>
  </Row>
</Container>
```

#### **Variable width content**

Use `sizes='auto'` prop to size columns based on the natural width of their content.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row justify='center'>
    <Col sizes={{sm: 2}} debug>
      1 of 3
    </Col>
    <Col sizes='auto' debug>
      Variable width content
    </Col>
    <Col sizes={{sm: 2}} debug>
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col debug>
      1 of 3
    </Col>
    <Col sizes='auto' debug>
      Variable width content
    </Col>
    <Col sizes={{sm: 2}} debug>
      3 of 3
    </Col>
  </Row>
</Container>
```

#### **Column wrapping**

If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row>
    <Col sizes={9} debug>
      col 9
    </Col>
    <Col sizes={4} debug>
      col 4 <br />Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
    </Col>
    <Col sizes={6} debug>
      col 6 <br />Subsequent columns continue along the new line.
    </Col>
  </Row>
</Container>
```
