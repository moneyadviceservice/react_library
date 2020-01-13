```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row>
    <Col debug xs={12} sm={6} md={8} lg={4}>
      xs={12} sm={6} md={8} lg={6}
    </Col>
    <Col debug xs={12} sm={6} md={4} lg={8}>
      xs={12} sm={6} md={4} lg={6}
    </Col>
  </Row>
  <Row>
    <Col debug xs={12} sm={6} lg={12}>
      xs={12} sm={6} lg={12}
    </Col>
    <Col debug xs={12} sm={6} lg={12}>
      xs={12} sm={6} lg={12}
    </Col>
  </Row>
</Container>
```

> 💡Tip! if no dimension is defined, the column size will be auto. (i.e. md={6}. This means that xs and sm is auto, and from md, the size will be 6 columns)
