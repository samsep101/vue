module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    "plugins": [
        "vue"
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        // allow jsx syntax in js files (for next.js project)
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/prop-types": 0,
      },
}
