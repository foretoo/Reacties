import alias from '@rollup/plugin-alias'
import cleaner from 'rollup-plugin-cleaner'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import html from 'rollup-plugin-generate-html-template'
import { terser } from "rollup-plugin-terser"
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const mode = process.env.PROD ? 'production' : 'development'

export default {
  input: 'src/index.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife'
  },
  plugins: [
    process.env.PROD && cleaner({ targets: ['build'] }),
    alias({
      entries: [
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom', replacement: 'preact/compat' }
      ]
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(mode) }),
    resolve(),
    commonjs({
      include: /node_modules/
    }),
    babel({
      exclude: /node_modules/,
      babelHelpers: 'bundled'
    }),
    process.env.DEV && postcss({ extract: true }),
    process.env.PROD && (
      postcss({
        extract: true,
        minimize: true
      })
    ),
    html({
      template: 'src/index.html',
      target: 'index.html'
    }),
    process.env.PROD && terser(),
    process.env.DEV && (
      serve({
        open: true,
        historyApiFallback: true,
        contentBase: 'build',
        host: '172.20.10.4',
        port: 8000
      })
    ),
    process.env.DEV && livereload('build')
  ]
};
