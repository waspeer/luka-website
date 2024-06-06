// @ts-check
import { configs, prefixFiles } from '@waspeer/config/eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  configs.base,
  prefixFiles(configs.solid, 'web'),
  prefixFiles(configs.react, 'sanity'),
].flat();

export default config;
