Containers provide a means to center and horizontally pad your site’s contents, use them for a responsive pixel width. If you want the Container to use 100% width across all viewport and device sizes you can use the fluid prop.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container as='main' background={{color: 'salmon'}}>
  <Row>
    <Col>
      This is a column inside a container.
    </Col>
  </Row>
</Container>
```
