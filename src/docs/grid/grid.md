<h3>Basic usage</h3>

This grid system is based on Google Material Design.

Number of columns: xs: 12, sm: 12, md: 12, lg: 12, xl: 12

Breakpoints size: xs: 1rem, sm: 48rem, md: 64rem, lg: 90rem, xl: 120rem

```jsx
import { Container, Row, Col } from '@maps/react_library';

<Container>
  <Row>
    <Col debug xs={12} sm={8} md={8} lg={6}>
      xs={12} sm={8} md={8} lg={6}
    </Col>
    <Col debug xs={12} sm={4} md={4} lg={6}>
      xs={12} sm={4} md={4} lg={6}
    </Col>
  </Row>
  <Row>
    <Col debug xs={6} sm={12} md={6} lg={4}>
      xs={6} sm={12} md={6} lg={4}
    </Col>
    <Col debug xs={6} sm={12} md={6} lg={8}>
      xs={6} sm={12} md={6} lg={8}
    </Col>
  </Row>
</Container>
```
