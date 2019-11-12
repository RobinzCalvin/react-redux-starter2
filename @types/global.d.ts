// Global definitions (you shouldn't import it, it is global scope)
/* eslint-disable */
interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?(): any;
  __data: any; // initial redux state, maybe undefined
}

declare var __DISABLE_SSR__: boolean;
declare var __SERVER__: boolean;
declare var __CLIENT__: boolean;
declare var __LANG__: 'en' | 'he';
declare var __HOST__: string;

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module 'normalizr';
declare module '*.scss';
declare module '*.png';
declare module 'react-hot-loader';
declare module 'enzyme-adapter-react-16';

declare module 'postcss-reporter';
declare module 'postcss-scss';

declare module 'webpack-isomorphic-dev-middleware';
declare module 'thread-loader';
declare module 'doiuse';
declare module 'stylelint';
declare module 'favicons-webpack-plugin';
declare module 'circular-dependency-plugin';
declare module 'filemanager-webpack-plugin';
