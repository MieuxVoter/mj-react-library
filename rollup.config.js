import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

export default {
    input: pkg.source,
    output: [{ dir: pkg.main, format: 'cjs' }],
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        del({ targets: ['dist/*'] }),
        typescript(),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        scss(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
