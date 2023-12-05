import fs from 'node:fs';
import path from 'node:path';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

const entries = [];

const BABEL_PLUGIN_OPTIONS = {
	exclude: 'node_modules/**',
	presets: ['@babel/preset-react'],
	plugins: ['@babel/plugin-transform-runtime'],
	skipPreflightCheck: true,
	babelHelpers: 'runtime',
	babelrc: false
};

const REPLACE_PLUGIN_OPTIONS = {
	'process.env.NODE_ENV': JSON.stringify('production'),
	preventAssignment: true
};

const RESOLVE_PLUGIN_OPTIONS = {
	extensions: ['.js']
};

const plugins = [replace(REPLACE_PLUGIN_OPTIONS), resolve(RESOLVE_PLUGIN_OPTIONS), babel(BABEL_PLUGIN_OPTIONS)];
const external = ['react', 'react-dom', '@babel/runtime', /^primereact\//];

fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR), { withFileTypes: true })
	.filter(dir => dir.isDirectory())
	.forEach(({ name: folderName }) => {
		fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR + folderName)).forEach(file => {
			const name = file.split(/(.js)$/)[0].toLowerCase();

			if (name === folderName) {
				const input = `${process.env.INPUT_DIR + folderName}/${file}`;
				const output = process.env.OUTPUT_DIR + name;

				entries.push({
					input,
					plugins,
					external,
					inlineDynamicImports: true,
					output: {
						format: 'esm',
						file: `${output}.js`,
						exports: 'auto'
					}
				});
			}
		});
	});

export default entries;
