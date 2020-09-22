import replace from '@rollup/plugin-replace'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import css from 'rollup-plugin-css-porter'
import html from 'rollup-plugin-generate-html-template';
import { terser } from "rollup-plugin-terser"
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const mode = process.env.BUILD ? 'production' : 'development'

export default {
  input: 'src/index.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife'
  },
  plugins: [
    replace({ 'process.env.NODE_ENV': JSON.stringify(mode) }),
    alias({
      entries: [
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom', replacement: 'preact/compat' }
      ]
    }),
    resolve(),
    commonjs({ include: /node_modules/ }),
    babel({
      exclude: /node_modules/,
      babelHelpers: 'bundled'
    }),
    css({ minified: false }),
    html({
      template: 'src/index.html',
      target: 'index.html'
    }),
    process.env.BUILD && terser(),
    process.env.DEV && (
      serve({
        open: true,
        contentBase: 'build',
        host: '172.20.10.4',
        port: 8000
      })
    ),
    process.env.DEV && livereload('build')
  ]
};
