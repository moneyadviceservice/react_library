### The `Heading` component allows you to show headings on the page & has a bigger line height than regular text.
Multiple heading levels are available. The `level` prop will define the type of header rendered, it defaults to 1.

```jsx
import { Heading as H } from '@moneypensionservice/directories';

<>
  <H level={1}>h1. The quick brown fox jumps over the lazy dog</H>
  <H level={2}>h2. The quick brown fox jumps over the lazy dog</H>
  <H level={3}>h3. The quick brown fox jumps over the lazy dog</H>
  <H level={4}>h4. The quick brown fox jumps over the lazy dog</H>
  <H level={5}>h5. The quick brown fox jumps over the lazy dog</H>
  <H level={6}>h6. The quick brown fox jumps over the lazy dog</H>
</>
```
