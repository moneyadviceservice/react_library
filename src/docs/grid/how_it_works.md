Our grid system uses a series of containers, rows, and columns to layout and align content. It’s built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

New to or unfamiliar with flexbox?  
[Read this CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) for background, terminology, guidelines, and code snippets.

```jsx
import { Container, Row, Col } from '@moneypensionservice/directories';

<Container>
  <Row>
    <Col sizes={{xs: 12, sm: 4}} debug>
      One of three columns
    </Col>
    <Col sizes={{xs: 12, sm: 4}} debug>
      One of three columns
    </Col>
    <Col sizes={{xs: 12, sm: 4}} debug>
      One of three columns
    </Col>
  </Row>
</Container>
```

> The above example creates three equal-width columns on screens larger than 768px which collapse on smaller sreens using our predefined grid props. Those columns are centered in the page with the parent `Container` component.

Breaking it down:

- Containers provide a means to center and horizontally pad your site’s contents. Use .container for a responsive pixel width or `fluid` for width: 100% across all viewport and device sizes.
- Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. 
- In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
- Thanks to flexbox, grid columns without a specified width will automatically layout as equal width columns. For example, four instances of `<Col>` will each automatically be 25% wide from the small breakpoint and up. See the auto-layout columns section for more examples.
- Column `sizes` props indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use `sizes={6}`.
- Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.
- Columns have horizontal padding to create the gutters between individual columns, however, you can remove the padding from columns with the `noGutter` prop on the `<Row>` component.
- To make the grid responsive, there are five grid breakpoints, one for each responsive breakpoint: all breakpoints (providing a number), xsmall, small, medium, large, and extra large.
- Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it (e.g., `small` applies to small, medium, large, and extra large devices, but not the first xsmall breakpoint).
