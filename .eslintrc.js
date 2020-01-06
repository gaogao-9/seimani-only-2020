module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"
    ],
    "plugins": [
        "@typescript-eslint",
        "react",
        "emotion",
    ],
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": ["error", "always"],
        "prettier/prettier": ["error", {
            "trailingComma": "all",
        }, {
            "usePrettierrc": false
        }],
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "emotion/jsx-import": "error",
        "emotion/no-vanilla": "error",
        "emotion/import-from-emotion": "error",
        "emotion/styled-import": "error",
        "emotion/syntax-preference": "error",
    }
}