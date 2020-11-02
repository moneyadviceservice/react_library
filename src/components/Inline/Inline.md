### A modified `Paragraph` component that renders as an inline `span` element using its inherited styles.
The `Inline` component is used for single line text. The component renders a `<span>` element by default. If you need a multiline paragraph use the `Paragraph` component. You can use all the props available to the `Paragraph` component here too!

```jsx
import { Col, Inline } from '@moneypensionservice/directories';

<>
<Col>
  <Inline strike>The quick brown fox jumps over the lazy dog</Inline>
</Col>
<Col>
  <Inline>The quick brown fox jumps over the lazy dog</Inline>
</Col>
<Col>
  <Inline color='salmon'>The quick brown fox jumps over the lazy dog</Inline>
</Col>
</>
```
