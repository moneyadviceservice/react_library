The accordion component lets users show and hide sections of related content on a page. Anchors are used as triggers and collapsing an element will animate the height from its current value to 0.

```jsx
import React, { useState } from 'react';
import { Accordion, Button, Row } from '@moneypensionservice/directories';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam. Aenean tincidunt, purus eu mattis aliquam, mauris elit rhoncus lectus, at venenatis diam urna at turpis. Nam tempor, nisl et dignissim finibus, leo diam scelerisque est, eget rutrum risus sapien quis massa. Praesent condimentum ex vitae tincidunt eleifend. Nunc vehicula tellus ut nisi laoreet vulputate. Fusce luctus dui eu scelerisque euismod. Quisque aliquet lorem egestas elit faucibus commodo. In dictum at lectus ac auctor.";

const [activeIndex, changeIndex] = useState(0);

const handleClick = (current) => {
  const newIndex = activeIndex === current ? -1 : current
  changeIndex(newIndex)
}

<Row direction="column">
  <Accordion 
    text={lorem} 
    title="Outside" />
  <Accordion 
    text={lorem} 
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
    <Button text="I'm inside the Accordion!" />
  </Accordion>
  <Accordion 
    text={lorem} 
    title="Custom color" 
    color="red"
    active={activeIndex === 3}
    onClick={() => handleClick(3)} />
</Row>
```
