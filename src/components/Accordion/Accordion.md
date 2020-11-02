### The accordion component lets users show and hide sections of related content on a page.
Anchors are used as triggers and collapsing an element will animate the height from its current value to 0.

You can configure the accordion item's heading using the `title` prop. Everything you pass in as a child of `Accordion` will be rendered in the accordion's collapsible panel.

To create a controlled accordion, use the `active` prop to set each tab open state as showed in the example.

```jsx
import React, { useState } from 'react';
import { Accordion, InfoTable, Row } from '@moneypensionservice/directories';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula.";

const [activeIndex, changeIndex] = useState(0);

const handleClick = (current) => {
  const newIndex = activeIndex === current ? -1 : current
  changeIndex(newIndex)
}

<Row direction="column">
  <Accordion 
    text={lorem} 
    title="Outside controlled state"
    btnClass="customClass" />
  <Accordion 
    text={lorem + lorem + lorem} 
    title="Opened by default" 
    active={activeIndex === 0}
    onClick={() => handleClick(0)} />
  <Accordion 
    title="Custom content with border"
    active={activeIndex === 1}
    onClick={() => handleClick(1)} >
    {lorem}
  </Accordion>
  <Accordion 
    noBorder 
    title="Using other components inside with no content border"
    active={activeIndex === 2}
    onClick={() => handleClick(2)} >
    <InfoTable title="I'm inside the Accordion!" textContent={lorem} />
  </Accordion>
  <Accordion 
    text={lorem} 
    title="Custom color" 
    color="red"
    active={activeIndex === 3}
    onClick={() => handleClick(3)} />
</Row>
```
