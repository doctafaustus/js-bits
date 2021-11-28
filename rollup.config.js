import globby from 'globby';
import babel from 'rollup-plugin-babel';
import html from 'rollup-plugin-html';
import del from 'rollup-plugin-delete';
import alias from '@rollup/plugin-alias';
import styles from 'rollup-plugin-styles';
import banner from 'rollup-plugin-banner';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';


// Clean dist folder on first run
del({ targets: './thinkific/dist/*' }).buildStart();

// Create a rollup config file for each entry JS file
const configFiles = globby.sync('./thinkific/*.js').map(entryFile => {
  
  const filenameNoExtension = (entryFile.match(/thinkific\/(.*)\.js/) || [])[1];

  return {
    input: entryFile,
    output: {
      file: `./thinkific/dist/${filenameNoExtension}.bundle.js`,
      format: 'iife'
    },
    plugins: [
      resolve(),
      commonjs(),
      terser(),
      banner('jshint ignore: start'),
      html({ include: '**/*.html' }),
      styles({ mode: 'extract', onExtract: () => false }),
      babel({ 
        exclude: 'node_modules/**',
        extensions: ['.js'],
        presets: ['@babel/preset-env']
      }),
      alias({
        entries: [
          { find: '@', replacement: `${__dirname}/thinkific` }
        ]
      })
    ]
  };
});

export default configFiles;