module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    // https://eslint.org/docs/rules/arrow-body-style.html
    // no rules for arrow functions body
    "arrow-body-style": ["off"],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off"
  },
};
