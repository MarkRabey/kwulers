import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { version } from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const file = `dist/${ isProduction ? 'kwulers.min.js' : 'kwulers.js' }`;

const banner = `/*!
 * @name Kwulers v${ version }
 * @license MIT
 * @copyright (c) ${ new Date().getFullYear() } Mark Rabey
 * @author Mark Rabey <mark@markrabey.com> (https://markrabey.com)
 */
`;

const uglifyOptions = {
  output: {
    comments: function(node, comment) {
      const text = comment.value;
      const type = comment.type;

      if (type === 'comment2') {
        return /@preserve|@license|@cc_on/i.test(text);
      }
    }
  }
};

export default {
  input: 'src/kwulers.js',
  output: {
    file,
    sourcemap: true,
    format: 'umd',
    exports: 'named',
    name: 'kwulers',
    banner
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    eslint({
      exclude: 'src/test/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    (process.env.NODE_ENV === 'production' && uglify(uglifyOptions)),
  ],
};