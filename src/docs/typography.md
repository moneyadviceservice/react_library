## Text sizes and font family styles

---
### Text Components:
- [Heading](/#/Components/Typography?id=heading): used for headings. A `<h1>` element by default.
- [Inline](/#/Components/Typography?id=inline): used for single line text. A `<span>` element by default.
- [Paragraph](/#/Components/Typography?id=paragraph): used for multiline text. A `<p>` element by default.
- [Anchor](/#/Components/Typography?id=anchor): used for links. A `<a>` element by default.

---
### Font Family
**Roobert Sans** is used in this library and is based on the well-known Roobert. It is a sturdy, low contrast, geometric, highly legible sans serif typeface very well suited for any display and text use.

```jsx
import { Paragraph as P } from '@moneypensionservice/directories';

<>
<P>p.300 The quick brown fox jumps over the lazy dog</P>
<P italic>p.300.italic The quick brown fox jumps over the lazy dog</P>
<P weight={500}>p.500 The quick brown fox jumps over the lazy dog</P>
<P weight={500} italic>p.500.italic The quick brown fox jumps over the lazy dog</P>
<P weight={700}>p.700 The quick brown fox jumps over the lazy dog</P>
<P weight={700} italic>p.700.italic The quick brown fox jumps over the lazy dog</P>
<P weight={900}>p.900 The quick brown fox jumps over the lazy dog</P>
<P weight={900} italic>p.900.italic The quick brown fox jumps over the lazy dog</P>
</>
```

---
### Heading Styles

| Heading Level	| Extra small screens<br>≥1px | Medium screens<br>≥1024px |
|:---------:	|----------------------------------------------------------------------------------------------------------------------------------------------------------------	| ---- |
| Heading 6 	| Font size: **0.75rem**<br>Font weight: **700**<br>Line height: **1.125rem**<br>Letter spacing: **normal**<br>Default margin top: **0.75rem**<br>Default margin bottom: **0.375rem** | |
| Heading 5 	| Font size: **0.875rem**<br>Font weight: 700<br>Line height: **1.25rem**<br>Letter spacing: **normal**<br>Default margin top: **0.875rem**<br>Default margin bottom: **0.4375rem** | |
| Heading 4 	| Font size: **1rem**<br>Font weight: **700**<br>Line height: **1.5rem**<br>Letter spacing: **normal**<br>Default margin top: **1rem**<br>Default margin bottom: **0.5rem**	| |
| Heading 3 	| Font size: **1.375rem**<br>Font weight: **700**<br>Line height: **1.875rem**<br>Letter spacing: **normal**<br>Default margin top: **1.375rem**<br>Default margin bottom: **0.6875rem** | |
| Heading 2 	| Font size: **1.5rem**<br>Font weight: **700**<br>Line height: **1.875rem**<br>Letter spacing: **normal**<br>Default margin top: **1.5rem**<br>Default margin bottom: **0.75rem** | Font size: **1.75rem**<br>Font weight: **700**<br>Line height: **2.25rem**<br>Letter spacing: **normal**<br>Default margin top: **1.75rem**<br>Default margin bottom: **0.875rem** |
| Heading 1 	| Font size: **2rem**<br>Font weight: **700**<br>Line height: **2.25rem**<br>Letter spacing: **normal**<br>Default margin top: **2rem**<br>Default margin bottom: **1rem** | Font size: **2.5rem**<br>Font weight: **700**<br>Line height: **2.625rem**<br>Letter spacing: **normal**<br>Default margin top: **2.5rem**<br>Default margin bottom: **1.25rem** |

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

---
### Paragraph Styles

|	| Extra small screens<br>≥1px | Medium screens<br>≥1024px |
|:---------:	|----------------------------------------------------------------------------------------------------------------------------------------------------------------	| ---- |
| Paragraph 	| Font size: **1rem**<br>Font weight: **300**<br>Line height: **1.5rem**<br>Letter spacing: **normal**<br>Default margin top: **0**<br>Default margin bottom: **0.625rem** | Font size: **1.125rem**<br>Font weight: **300**<br>Line height: **1.5rem**<br>Letter spacing: **normal**<br>Default margin top: **0**<br>Default margin bottom: **0.75rem** |

```jsx
import { Paragraph as P } from '@moneypensionservice/directories';

<P>p.default The quick brown fox jumps over the lazy dog</P>
```
