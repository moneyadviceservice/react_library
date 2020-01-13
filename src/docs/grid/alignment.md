The props **`align`** and **`justify`** allow you to centralize **`Row`** or **`Col`** content using the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) and [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) values from the flexbox api.

### **Align**

The prop **`align`** receives a string or a object with the screens and their respective values and will align the content vertically.

**Accepted values:**

`align: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe`

#### **Using a string**

Just pass a valid value from flexbox api to align prop:

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row debug style={{height: 80}} align='center'>
    <Col debug>One</Col>
    <Col debug>Two</Col>
    <Col debug>Three</Col>
    <Col debug>Four</Col>
  </Row>
  <Row debug>
    <Col debug style={{height: 80}} align='flex-end'>I'm aligned at bottom!</Col>
  </Row>
</Container>
```
#### **Using an object**

In this case, the **`align`** prop must receive an object with the screens and their respective values.

>💡Tip! When passed an object, since this grid is mobile-first, if a value is entered for a screen (i.e XS), the other screens (SM, MD, LG and XL) will inherit these values ​​if not set. With that in mind, if you enter align={{xs: 'center', lg: 'flex-end'}}, we'll have XS to MD with align set to center and LG to XL set to flex-end.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row debug style={{height: 80}} align={{xs: 'center', lg: 'flex-end'}}>
    <Col debug>One</Col>
    <Col debug>Two</Col>
    <Col debug>Three</Col>
    <Col debug>Four</Col>
  </Row>
  <Row>
    <Col debug style={{height: 80}} align={{xs: 'flex-end', lg: 'center'}}>
      XS to MD I'm aligned at bottom, LG to XL I'm centered.
    </Col>
  </Row>
</Container>
```

### **Justify**

The prop **`justify`** receives a string or a object with the screens and their respective values and will align the content horizontally.

**Accepted values:**

`justify: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe`

#### **Using a string**

Just pass a valid value from flexbox api to the `justify` prop:

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row debug justify='center'>
    <Col debug justify='center' xs={3}>One</Col>
    <Col debug justify='center' xs={3}>Two</Col>
  </Row>
  <Row debug justify='space-between'>
    <Col debug justify='center' xs={3}>Three</Col>
    <Col debug justify='center' xs={3}>Four</Col>
  </Row>
  <Row>
    <Col debug style={{height: 80}} justify='center'>I'm horizontally centered!</Col>
  </Row>
</Container>
```

#### **Using an object**

In this case, the `justify` prop must receive an object with the screens and their respective values.

>💡Tip! When passed an object, since this grid is mobile-first, if a value is entered for a screen (i.e XS), the other screens (SM, MD, LG and XL) will inherit these values ​​if not set. With that in mind, if you enter justify={{xs: 'center', lg: 'space-between'}}, we'll have XS to MD with justify set to center and LG to XL set to space-between.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row debug justify={{xs: 'center', lg: 'space-between'}}>
    <Col debug justify='center' xs={3}>One</Col>
    <Col debug justify='center' xs={3}>Two</Col>
  </Row>
  <Row debug justify={{xs: 'space-between', lg: 'center'}}>
    <Col debug justify='center' xs={3}>Three</Col>
    <Col debug justify='center' xs={3}>Four</Col>
  </Row>
  <Row>
    <Col debug style={{height: 80}} justify={{xs: 'center', lg: 'flex-end'}}>
      XS to MD is centered and LG to XL at end of row 
    </Col>
  </Row>
</Container>
```
