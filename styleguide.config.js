const path = require('path')

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
  title: 'React components library for Directories project',
  styleguideDir: 'dist-docs',
  moduleAliases: {
    '@maps/react_library': path.resolve(__dirname, 'src'),
  },
  pagePerSection: true,
  sections: [
    {
      name: 'Documentation',
      content: './src/docs/documentation.md',
    },
    {
      name: 'Components',
      content: './src/docs/components.md',
      components: 'src/components/**/*.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Grid',
      content: './src/docs/grid/grid.md',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      pagePerSection: true,
      sectionDepth: 1,
      sections: [
        {
          name: 'Components',
          components: () => [
            './src/Grid/Container/index.js',
            './src/Grid/Row/index.js',
            './src/Grid/Col/index.js',
          ],
          exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
          usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'Usage',
          content: './src/docs/grid/usage.md',
          exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
          usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
          sections: [
            {
              name: 'Responsive',
              content: './src/docs/grid/responsive.md',
              exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
              usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
            },
            {
              name: 'Offset',
              content: './src/docs/grid/offset.md',
              exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
              usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
            },
            {
              name: 'Aligment',
              content: './src/docs/grid/alignment.md',
              exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
              usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
            },
            {
              name: 'Row Reverse',
              content: './src/docs/grid/row_reverse.md',
              exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
              usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
            },
            {
              name: 'Column Reverse',
              content: './src/docs/grid/column_reverse.md',
              exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
              usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
            },
          ],
        },
      ],
    },
  ],
}
