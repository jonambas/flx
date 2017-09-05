'use strict';

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        [
          'es2015',
          { modules: false }
        ],
        'stage-2',
        'react'
      ],
      plugins: [
        'external-helpers',
      ]
    }),
    uglify()
  ],
  external: [
    'react',
    'react-dom',
    'prop-types'
  ],
};
