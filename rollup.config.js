// plugins
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import svgr from '@svgr/rollup'
// @rollup
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
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
    external: ['axios'],
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
      nodeResolve({ rootDir: './src' }),
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
    external: ['axios'],
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
      nodeResolve({ rootDir: './src' }),
      commonjs({ sourceMap: false }),
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
        axios: 'axios',
      },
    },
    external: ['axios'],
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
      nodeResolve({ rootDir: './src', browser: true }),
      commonjs({ sourceMap: false }),
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
        axios: 'axios',
      },
    },
    external: ['axios'],
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
      nodeResolve({ rootDir: './src', browser: true }),
      commonjs({ sourceMap: false }),
      terser(),
    ],
  },
]
