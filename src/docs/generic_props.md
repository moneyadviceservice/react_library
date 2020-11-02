#### In order to facilitate the customisation of certain elements, some default props were established so that they're able to be modified inline and easier to implement. **These props are available to all the components in this library.**
---
## a11yTitle
```json
Prop.Type: String
```
When provided, an aria-label will be added to the element.
```jsx
import { Button } from '@moneypensionservice/directories';

<Button 
  a11yTitle='A user friendly label for screen readers' 
  text='I have an aria-label!' />
```
---
## alignSelf
```json
Prop.Type: String
```
Aligns the element along the cross axis when contained in a Row or along the column axis when contained in a Column.
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
---
## as
```json
Prop.Type: String
```
Renders an element with the specified tag.
```jsx
import { Col } from '@moneypensionservice/directories';

<Col as='section'>I'm inside a section element!</Col>
```
---
## hide
```json
Prop.Type: Boolean
```
Hides the element when provided by adding `display: none` to the styles.
```jsx
import { useState } from 'react'
import { Button } from '@moneypensionservice/directories';

const [show, setShow] = useState(true);

<Button 
  hide={!show}
  text='Click me!'
  onClick={() => setShow(false)} />
```
---
## margin
```json
Prop.Type: String - "none", "xsmall", "small", "medium", "large", "xlarge" or any valid CSS size.

Prop.Type: Object - {
  "vertical": "...",
  "horizontal": "...",
  "top": "...",
  "bottom": "...",
  "left": "...",
  "right": "..."
}
```
The amount of margin around the component. An object can be specified to distinguish horizontal margin, vertical margin, and margin on a particular side.
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
---
## padding
```json
Prop.Type: String - "xsmall", "small", "medium", "large", "xlarge" or any valid CSS size.

Prop.Type: Object - {
  "vertical": "...",
  "horizontal": "...",
  "top": "...",
  "bottom": "...",
  "left": "...",
  "right": "..."
}
```
Sets the padding area on all four sides of an element. An object can be specified to distinguish horizontal padding, vertical padding, and padding on a particular side.
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
---
## border
```json
Prop.Type: String: "none", "xsmall", "small", "medium", "large", "xlarge" or "any CSS size".

Prop.Type: Object - {
  "color": any valid css color value,
  "size": "none", "xsmall", "small", "medium", "large", "xlarge" or any valid CSS size.
  "style": any valid css border style,
  "side": "top", "left", "bottom", "right", "horizontal", "vertical" or "all".
}
```
Adds a border to the element.
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
---
## background
```json
Prop.Type: String

Prop.Type: Object - {
  "color": any valid CSS color value,
  "opacity": Number or any valid CSS opacity value,
  "position": any valid CSS background-position value,
  "image": any valid CSS image value (use for background url),
  "repeat": any valid CSS background-repeat value,
  "size": any valid CSS background-size value.
}
```
A color identifier to use for the background or image. For example: 'palevioletred' or '#000324'. Or, a 'url()' for an image.
```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container 
  background='url("https://images.pexels.com/photos/3522094/pexels-photo-3522094.jpeg")'>
  <Row>
    <Col style={{height: 300, color: 'white'}} justify='center'>
      This is a column inside a container with a background picture.
    </Col>
  </Row>
</Container>
```
