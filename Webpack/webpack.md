## webpack.config.js有哪些配置项？

- entry : 入口(Entry)指示 webpack 以哪个文件为入口起点开始打包
- output : 输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名
- module : 配置loader(Loader 让 webpack 能 够 去 处 理 那 些 非 JavaScript 文 件)
- plugins : 插件(Plugins)可以用于执行范围更广的任务
- mode : 模式(Mode)指示 webpack 使用相应模式的配置。

```javascript
/**
* webpack.config.js 
*/
//引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的文件
        filename: "bundle.js",
    },

    // 指定webpack打包时要使用模块
    module: {
        // 指定要加载的规则
        rules: [
            // 设置ts文件的处理
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            },

            // 设置less文件的处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },

    // 配置Webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "这是一个自定义的title"
            template: "./src/index.html"
        }),
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }

};
```


## 常用的webpack loader?

- css-loader : 将css文件变成common.js模块，内容是样式字符串
- style-loader : 创建style标签，将js中的样式资源添加到head中
- url-loader : 处理样式中的图片资源
- html-loader : 处理HTML文件的img图片
- file-loader : 打包其他资源（除html/js/css以外的资源）
- babel-loader : 把 ES6 转换成 ES5

## 常用的webpack plugins?

- html-webpack-plugin : 创建一个空的html文件，引入打包输出的所有资源
- commons-chunk-plugin : 提取公共代码
- uglifyjs-webpack-plugin : 通过UglifyES压缩ES6代码



## devServer是干什么的？
概念:

开发服务器，用来实现自动化（自动编译，自动更新）
特点:
只会在内存中编译打包，不会有输出（用webpack会有output）


