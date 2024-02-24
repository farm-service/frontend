module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        '@typescript-eslint/no-non-null-assertion': 'off',
        'typescript-eslint/explicit-function-return-type': 'off',
        'react/react-in-jsx-scope': 'off',
        "indent": ["warn", 2], // 2 spaces indentation
        "keyword-spacing": ["warn", { "before": true, "after": true }], // Spaces around keywords
        "space-before-blocks": ["warn", "always"], // Space before block opening braces
        "space-before-function-paren": ["warn", "always"], // Space before function parentheses
        "max-len": ["warn", { "code": 80 }], // Maximum line length of 80 characters
        "linebreak-style": ["warn", "unix"], // Unix line endings
        "quotes": ["warn", "single"], // Single quotes for string literals
    }
}
