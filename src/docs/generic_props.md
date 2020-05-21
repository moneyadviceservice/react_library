In order to facilitate the customisation of certain elements, some default props were established so that they're able to be modified inline and easier to implement.

### **a11yTitle**

> Custom label to be used by screen readers. When provided, an aria-label will be added to the element.

```json
Prop.Type: String
```

```jsx
import { Button } from '@moneypensionservice/directories';

<Button 
  a11yTitle='A user friendly label for screen readers' 
  text='Try me on a Screen Reader' />
```

### **alignSelf**

> Aligns the element along the cross axis when contained in a Row or along the column axis when contained in a Column.

```json
Prop.Type: String
```

```jsx
import { Container, Row, Col, Button } from '@moneypensionservice/directories';

<Container>
  Row:
  <Row debug style={{height: 100}}>
    <Button 
      alignSelf='center'
      text={"I'm vertically centered in a Row!"} />
  </Row>
  Column:
  <Row>
  <Col debug style={{height: 100}}>
    <Button 
      alignSelf='end'
      text={"I'm at the end of a Column!"} />
  </Col>
  </Row>
</Container>
```

### **hide**

> Hides the element when provided by adding `display: none` to the styles.

```json
Prop.Type: Boolean
```

```jsx
import { useState } from 'react'
import { Button } from '@moneypensionservice/directories';

const [show, setShow] = useState(true);

<Button 
  hide={!show}
  text='Click me!'
  onClick={() => setShow(false)} />
```

### **margin**

> The amount of margin around the component. An object can be specified to distinguish horizontal margin, vertical margin, and margin on a particular side.

Prop.Type:
```json
STRING:

"none"
"xsmall"
"small"
"medium"
"large"
"xlarge"
"any CSS size"

OBJECT:

{
  "vertical": "...",
  "horizontal": "...",
  "top": "...",
  "bottom": "...",
  "left": "...",
  "right": "..."
}
```

```jsx
import { Row, Col, Button } from '@moneypensionservice/directories';

<Row justify='space-between' align='center'>
  <Col>
    <Button 
      margin='50px'
      text={"BIG MARGIN!"} />
  </Col>
  <Col>
    <Button 
      margin={{vertical: '30px', left: '10px', right: '50px'}}
      text={"I'm using a margin object!"} />
  </Col>
</Row>
```

### **padding**

> Sets the padding area on all four sides of an element. An object can be specified to distinguish horizontal padding, vertical padding, and padding on a particular side.

Prop.Type:
```json
STRING:

"xsmall"
"small"
"medium"
"large"
"xlarge"
"any CSS size"

OBJECT:

{
  "vertical": "...",
  "horizontal": "...",
  "top": "...",
  "bottom": "...",
  "left": "...",
  "right": "..."
}
```

```jsx
import { Row, Col, Button } from '@moneypensionservice/directories';

<Row justify='space-between' align='center'>
  <Col>
    <Button 
      padding='50px'
      text={"BIG PADDING!"} />
  </Col>
  <Col>
    <Button 
      padding={{vertical: '30px', left: '10px', right: '50px'}}
      text={"I'm using a padding object!"} />
  </Col>
  <Col>
    <Button 
      padding='large'
      text={"I'm using a padding variable!"} />
  </Col>
</Row>
```

### **border**

> Include a border.

Prop.Type:
```json
STRING:

"none"
"xsmall"
"small"
"medium"
"large"
"xlarge"
"any CSS size"

OBJECT: 

{
  "color": "black",
  "size": "xsmall",
  "style": "solid",
  "side": "all"
}

where size could be:
"xsmall"
"small"
"medium"
"large"
"xlarge"
"any CSS size"
where style could be:
"solid"
"dashed"
"dotted"
"double"
"groove"
"ridge"
"inset"
"outset"
"hidden"
where side could be:
"top"
"left"
"bottom"
"right"
"horizontal"
"vertical"
"all"
```

```jsx
import { Row, Col, Button } from '@moneypensionservice/directories';

<Row justify='space-between' align='center'>
  <Col>
    <Button 
      border='20px solid black'
      text={"BIG BORDER!"} />
  </Col>
  <Col>
    <Button 
      border={{color: 'blue', size: '5px', style: 'solid', side: 'horizontal'}}
      text={"I'm using a border object!"} />
  </Col>
  <Col>
    <Button 
      border='medium solid red'
      text={"I'm using a border variable!"} />
  </Col>
</Row>
```

### **background**

> A color identifier to use for the background or image. For example: 'palevioletred' or '#000324'. Or, a 'url()' for an image.

Prop.Type:
```json
STRING:

"palevioletred",
"salmon",
"#FF1094"
"url("http://assets.com/img.png")",

OBJECT: 

{
  "color": "palevioletred",
  "opacity": 1,
  "position": "center center",
  "image": "url("http://assets.com/img.png")",
  "repeat": "no-repeat",
  "size": "cover",
  "dark": true,
}

Where dark indicates there's a dark background and changes fonts to lighter colors.

Where opacity could be: (this will not work for image backgrounds)
"weak"
"medium"
"strong"
a number where 1 is not transparent at all, 0.5 is 50% see-through, and 0 is completely transparent.

Where position could be:
any valid CSS for background-position
https://www.w3schools.com/cssref/pr_background-position.asp
```

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container 
  background={{
    image: 'url("https://images.pexels.com/photos/3522094/pexels-photo-3522094.jpeg")',
    dark: true}}>
  <Row>
    <Col style={{height: 300}}>
      This is a column inside a container.
    </Col>
  </Row>
</Container>
```
