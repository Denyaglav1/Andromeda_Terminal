/**
 * Vite plugin: resolve `figma:asset/HASH.png` virtual imports
 * to files inside `public/assets/`.
 *
 * When you download the project ZIP from Figma Make the actual
 * image blobs are embedded in the bundle. To run locally you need
 * to extract them into `public/assets/` keeping original filenames
 * (e.g. `public/assets/08e99bf020c8ff5a0d0ffc8c3783d91d8fc9bd04.png`).
 *
 * The plugin rewrites every `figma:asset/<file>` import so that
 * Vite serves the file from the public directory.
 */

import { Plugin } from 'vite';

export default function figmaAssetsPlugin(): Plugin {
  return {
    name: 'vite-plugin-figma-assets',
    enforce: 'pre',

    resolveId(source) {
      if (source.startsWith('figma:asset/')) {
        // Strip the virtual scheme → bare filename
        const filename = source.replace('figma:asset/', '');
        // For local development, we want Vite to treat this as a simple static asset path
        // that points to the public directory.
        return `/assets/${filename}`;
      }
      return null;
    },
  };
}
