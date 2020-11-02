### The Tooltip component allows you to wrap a child with a help tooltip when clicked or hovered.
Tooltips are about way finding, not feature adoption, education, or promotion. They should only include short descriptive text and are co-located with the element they describe.

The `Tooltip` component is highly customizable, you can set which side to display it on multiple screen sizes as well as set the minimun width of the tooltip to fit your needs. On smaller screens, the tooltip will always align to the center as to not go outside of the screen.

To set a custom trigger instead of the default icon, just pass a child component. The `text` prop will accept either just a string for text or any component for more complex scenarios.

This component should be used cautiously, since it is [hard to be completely accessible](https://inclusive-components.design/tooltips-toggletips/).

```jsx
import { Tooltip, Row, Button, Paragraph as P } from '@moneypensionservice/directories';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

<Row justify="space-evenly" align="center" direction="row">
  <P width="auto" margin="0">
    Default tooltip <Tooltip text={`This is a default tooltip.`} />
  </P>
  <Tooltip text={lorem} hover side="top">
    <Button text="Hover me!" />
  </Tooltip>
  <Tooltip text={lorem} side="bottom" minWidth={{xs: '150px', md: '250px'}}>
    Click me!
  </Tooltip>
  <Tooltip text={lorem} side={{xs: 'bottom', md:'left'}}>
    xs: bottom, md:left
  </Tooltip>
</Row>
```
