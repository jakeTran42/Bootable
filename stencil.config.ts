import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ezjs',
  taskQueue: 'async',
  globalStyle: 'src/main.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
