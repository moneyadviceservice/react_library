Accordion Component

```jsx
import React, { useState } from 'react';
import { Accordion, Button, Row } from '@moneypensionservice/directories';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam. Aenean tincidunt, purus eu mattis aliquam, mauris elit rhoncus lectus, at venenatis diam urna at turpis. Nam tempor, nisl et dignissim finibus, leo diam scelerisque est, eget rutrum risus sapien quis massa. Praesent condimentum ex vitae tincidunt eleifend. Nunc vehicula tellus ut nisi laoreet vulputate. Fusce luctus dui eu scelerisque euismod. Quisque aliquet lorem egestas elit faucibus commodo. In dictum at lectus ac auctor.";

<Row direction="column">
  <Accordion text={lorem} title="Opened by default" openByDefault />
  <Accordion title="Custom Content">
    {lorem}
  </Accordion>
  <Accordion title="Using other components inside">
    <Button text="I'm inside the Accordion!" />
  </Accordion>
  <Accordion text={lorem} title="Custom color" color="red" />
</Row>
```
