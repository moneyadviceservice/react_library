#### **Using a number**

If you enter a number, the number of columns of the screen xs will be used as base. in this example, 8 columns of 12 will be used for both offset and column size, ie 50%.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row>
    <Col debug offset={8}>Column</Col>
  </Row>
</Container>
```

#### **Using an object**

In this case, the offset prop must receive an object with the screens and their respective values.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row><Col debug xs={1} offset={{ xs:0, sm:6, lg:11}}>One</Col></Row>
  <Row><Col debug xs={2} offset={{ xs:0, sm:5, lg:10}}>Two</Col></Row>
  <Row><Col debug xs={3} offset={{ xs:0, sm:5, lg:9}}>Three</Col></Row>
  <Row><Col debug xs={4} offset={{ xs:0, sm:4, lg:8}}>Four</Col></Row>
  <Row><Col debug xs={5} offset={{ xs:0, sm:4, lg:7}}>Five</Col></Row>
  <Row><Col debug xs={6} offset={{ xs:0, sm:3, lg:6}}>Six</Col></Row>
  <Row><Col debug xs={7} offset={{ xs:0, sm:3, lg:5}}>Seven</Col></Row>
  <Row><Col debug xs={8} offset={{ xs:0, sm:3, lg:4}}>Eight</Col></Row>
  <Row><Col debug xs={9} offset={{ xs:0, sm:2, lg:3}}>Nine</Col></Row>
  <Row><Col debug xs={10} offset={{ xs:0, sm:1, lg:2}}>Ten</Col></Row>
  <Row><Col debug xs={11} offset={{ xs:0, sm:0, lg:1}}>Eleven</Col></Row>
</Container>
```

 
