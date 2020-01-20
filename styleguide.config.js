const path = require('path')
const { version } = require('./package.json')

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, './src/components/ThemeProvider'),
  },
  title: 'React components library for Directories project',
  version,
  styleguideDir: 'dist-docs',
  moduleAliases: {
    '@moneypensionservice/directories': path.resolve(__dirname, 'src'),
  },
  pagePerSection: true,
  sections: [
    {
      name: 'Documentation',
      content: './src/docs/documentation.md',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      sectionDepth: 1,
      sections: [
        {
          name: 'ThemeProvider',
          content: './src/components/ThemeProvider/ThemeProvider.md',
        },
        {
          name: 'Generic Props',
          content: './src/docs/generic_props.md',
        },
      ],
    },
    {
      name: 'Components',
      content: './src/docs/components.md',
      components: () => ['./src/components/Button/index.js'],
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Typography',
      content: './src/components/Typography/typography.md',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      components: () => ['./src/components/Typography/Headers/index.js'],
    },
    {
      name: 'Grid',
      content: './src/docs/grid/grid.md',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      pagePerSection: true,
      sectionDepth: 1,
      sections: [
        {
          name: 'Components',
          components: () => [
            './src/components/Grid/Container/index.js',
            './src/components/Grid/Row/index.js',
            './src/components/Grid/Col/index.js',
          ],
        },
        {
          name: 'Usage',
          content: './src/docs/grid/usage.md',
          sections: [
            {
              name: 'Responsive',
              content: './src/docs/grid/responsive.md',
            },
            {
              name: 'Offset',
              content: './src/docs/grid/offset.md',
            },
            {
              name: 'Aligment',
              content: './src/docs/grid/alignment.md',
            },
            {
              name: 'Row Reverse',
              content: './src/docs/grid/row_reverse.md',
            },
            {
              name: 'Column Reverse',
              content: './src/docs/grid/column_reverse.md',
            },
          ],
        },
      ],
    },
  ],
}
