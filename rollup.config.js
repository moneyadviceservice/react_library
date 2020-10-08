// plugins
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import svgr from '@svgr/rollup'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
// @rollup
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
// package.json
import packageJSON from './package.json'

const input = './src/index.js'
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js')

export default [
  // CommonJS
  {
    input,
    output: [
      { file: packageJSON.main, format: 'cjs', sourcemap: true },
      { file: packageJSON.module, format: 'es', exports: 'named' },
    ],
    plugins: [
      external(),
      json(),
      svgr(),
      url({
        include: ['**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
      }),
      resolve(),
      commonjs(),
    ],
  },
  // Minified
  {
    input,
    output: [
      {
        file: minifyExtension(packageJSON.main),
        format: 'cjs',
      },
      {
        file: minifyExtension(packageJSON.module),
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      external(),
      json(),
      svgr(),
      url({
        include: ['**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
      }),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
  // UMD
  {
    input,
    output: {
      file: packageJSON.browser,
      format: 'umd',
      name: '@maps/react_library',
      globals: {
        react: 'React',
        'styled-components': 'styled',
      },
    },
    plugins: [
      external(),
      json(),
      svgr(),
      url({
        include: ['**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
      }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.browser),
      format: 'umd',
      name: '@maps/react_library',
      globals: {
        react: 'React',
        'styled-components': 'styled',
      },
    },
    plugins: [
      external(),
      json(),
      svgr(),
      url({
        include: ['**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
      }),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
]
