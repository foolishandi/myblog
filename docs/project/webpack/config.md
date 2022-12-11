```js

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { resolve } = require('path');
module.exports = {
    // 指定入口文件
    // 这里我们在src文件夹下创建一个index.ts
    entry: "./src/index.js",
    // 指定输出文件名
    output: {
        filename: "main.js",
        path: resolve(__dirname, 'dist')
    },

    module: {
        // 配置以.ts/.tsx结尾的文件都用ts-loader解析
        // 这里我们用到ts-loader，所以要安装一下
        // npm install ts-loader -D
        rules: [{ //css
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    'css-loader'
                ]
            },
            { //less
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'scss-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: 'imgs/',
                    publicPath: './dist/imgs/'
                }
            }
        ]
    },
    // 指定编译后是否生成source-map，这里判断如果是生产打包环境则不生产source-map
    devtool: process.env.NODEENV === "production" ? false : "inline-source-map",
    // 这里使用webpack-dev-server，进行本地开发调试
    devServer: {
        contentBase: "./dist",
        stats: "errors-only",
        compress: false,
        host: "localhost",
        port: 8089,
        open: true
    },
    // 这里用到两个插件，所以首先我们要记着安装
    // npm install html-webpack-plugin clean-webpack-plugin -D
    plugins: [
        // 这里在编译之前先删除dist文件夹
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        // 这里我们指定编译需要用模板，模板文件是./src/template/index.html，所以接下来我们要创建一个index.html文件
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: 'development'
};
```

```js

"devDependencies": {
        "clean-webpack-plugin": "^4.0.0",
        "css-loader": "^6.7.1",
        "file-loader": "^6.2.0",
        "html-webpack-plugin": "^5.5.0",
        "style-loader": "^3.3.1",
        "webpack-cli": "^4.9.2"
    },
    "dependencies": {
        "@babel/core": "^7.17.10",
        "@babel/preset-env": "^7.17.10",
        "babel-loader": "^8.2.5",
        "html-loader": "^3.1.0",
        "scss-loader": "^0.0.1",
        "webpack-dev-server": "^4.9.0"
    }

```