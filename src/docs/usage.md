These React components work in isolation. They are **self-supporting**, and will only inject the styles they need to display. They don't rely on any global style-sheets such as normalize.css.

You can use any of the components as demonstrated in the documentation. Please refer to each component's [demo page](/#/Components/Controls?id=button) to see how they should be imported.

## Quick Start

Here's a quick example to get you started, **it's literally all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@moneypensionservice/directories';

<Button text='Default' />
```

---
## Globals
By default, the components are stylistically unopinionated and do not include a theme. You can add a theme to your application with the `ThemeProvider` component and by providing a theme in context. For more information and how you can use a custom theme, please visit the [`<ThemeProvider />`](/#/Documentation/ThemeProvider) section of the documentation.

---
## Library Versions
This documentation always reflects the latest stable version of the component library. You can find older versions of the documentation [here](https://www.npmjs.com/package/@moneypensionservice/directories).
