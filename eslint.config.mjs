import nextVitals from 'eslint-config-next/core-web-vitals';
import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = [
  ...nextVitals,
  eslintConfigPrettier,
];

export default eslintConfig;
