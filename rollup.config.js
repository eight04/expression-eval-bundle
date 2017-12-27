import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import {minify} from 'uglify-es';

const {COMPRESS} = process.env;
const file = `dist/expression-eval${COMPRESS?".min":""}.js`;
const plugins = [resolve(), commonjs()];

if (COMPRESS) {
  plugins.push(uglify({}, minify));
}

export default {
	input: 'bundle.js',
	output: {
    file,
    format: 'iife',
    name: 'expressionEval',
    sourcemap: true
  },
	plugins
};
