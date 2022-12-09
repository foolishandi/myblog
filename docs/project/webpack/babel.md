## 一般设置
```bush
npm i @babel/core @babel/plugin-proposal-decorators @babel/preset-env

npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react webpack

```
```js title='/babel.config.js'
{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ],
        "@babel/plugin-proposal-class-properties"
    ]
}
```