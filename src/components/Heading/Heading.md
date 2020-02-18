Multiple heading classes are available. The **`level`** prop will define the type of header rendered, it defaults to 1.

```jsx
import { Heading as H } from '@moneypensionservice/directories';

<>
  <H level={1} color='blue' textAlign='right'>h1. Heading One</H>
  <H level={2} weight={300}>h2. Heading Two</H>
  <H level={3}>h3. Heading Three</H>
  <H level={4} color='salmon' textAlign='center'>h4. Heading Four</H>
  <H level={5}>h5. Heading Five</H>
  <H level={6}>h6. Heading Six</H>
</>
```
