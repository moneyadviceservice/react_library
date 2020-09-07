// plugins
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import svgr from '@svgr/rollup'
import babel from 'rollup-plugin-babel'
// @rollup
import url from '@rollup/plugin-url'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// package.json
import packageJSON from './package.json'

const input = './src/index.js'
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js')

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      json(),
      svgr(),
      url({
        include: ['**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      external(),
      nodeResolve(),
      commonjs(),
    ],
  },
  // Minified
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: 'cjs',
    },
    plugins: [
      json(),
      svgr(),
      url({
        include: ['**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      external(),
      nodeResolve(),
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
      json(),
      svgr(),
      url({
        include: ['**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      external(),
      nodeResolve(),
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
      json(),
      svgr(),
      url({
        include: ['**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      external(),
      nodeResolve(),
      commonjs(),
      terser(),
    ],
  },
  // ES
  {
    input,
    output: {
      file: packageJSON.module,
      format: 'es',
      exports: 'named',
    },
    plugins: [
      json(),
      svgr(),
      url({
        include: ['**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      external(),
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.module),
      format: 'es',
      exports: 'named',
    },
    plugins: [
      json(),
      svgr(),
      url({
        include: ['**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      external(),
      nodeResolve(),
      commonjs(),
      terser(),
    ],
  },
]
