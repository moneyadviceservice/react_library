In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
Thanks to flexbox, grid columns without a specified width will automatically layout as equal width columns.
Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row>
    <Col sizes={{xs: 12, md: 8}} debug>
      Col 1
    </Col>
    <Col sizes={{xs: 12, md: 4}} debug>
      Col 2
    </Col>
    <Col debug>
      Col 3
    </Col>
    <Col debug>
      Col 4
    </Col>
  </Row>
  <Row>
    <Col sizes={6} offset={{xs: 2, sm: 4, md: 6}} debug>
      Col 5
    </Col>
  </Row>
</Container>
```
