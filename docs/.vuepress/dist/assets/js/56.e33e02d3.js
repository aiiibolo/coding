(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{270:function(e,a,s){"use strict";s.r(a);var t=s(0),n=Object(t.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"vuejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuejs","aria-hidden":"true"}},[e._v("#")]),e._v(" VueJS")]),e._v(" "),s("h2",{attrs:{id:"开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发环境","aria-hidden":"true"}},[e._v("#")]),e._v(" 开发环境")]),e._v(" "),s("h4",{attrs:{id:"node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node","aria-hidden":"true"}},[e._v("#")]),e._v(" NODE")]),e._v(" "),s("p",[e._v("安装NODE 8.1版本以上 https://nodejs.org/zh-cn/")]),e._v(" "),s("h4",{attrs:{id:"安装vue-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装vue-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装vue-cli")]),e._v(" "),s("p",[e._v("https://cli.vuejs.org/guide/creating-a-project.html#installation")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install -g @vue/cli\n")])])]),s("h2",{attrs:{id:"创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建项目")]),e._v(" "),s("p",[e._v("创建项目有两种方式")]),e._v(" "),s("h4",{attrs:{id:"命令行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行","aria-hidden":"true"}},[e._v("#")]),e._v(" 命令行")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vue create hd-vue\n")])])]),s("p",[s("img",{attrs:{src:"assets/image-20180623122121518.png",alt:"image-20180623122121518"}})]),e._v(" "),s("p",[e._v("下面命令行安装时的选项")]),e._v(" "),s("ol",[s("li",[e._v("default （babel，eslint）")]),e._v(" "),s("li",[e._v("Use NPM")])]),e._v(" "),s("h4",{attrs:{id:"gui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gui","aria-hidden":"true"}},[e._v("#")]),e._v(" GUI")]),e._v(" "),s("p",[e._v("命令行执行以下命令会调出图形设置界面")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo vue ui\n")])])]),s("p",[e._v("选择 "),s("code",[e._v("创建")]),e._v(" 项目")]),e._v(" "),s("p",[s("img",{attrs:{src:"assets/image-20180623122407106.png",alt:"image-20180623122407106"}})]),e._v(" "),s("blockquote",[s("p",[e._v("使用图形界面创建与命令行无异，不详细赘述了")])]),e._v(" "),s("h4",{attrs:{id:"运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行","aria-hidden":"true"}},[e._v("#")]),e._v(" 运行")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ cd hd-vue\n$ npm run serve\n")])])]),s("h4",{attrs:{id:"sass-less"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sass-less","aria-hidden":"true"}},[e._v("#")]),e._v(" sass&less")]),e._v(" "),s("p",[e._v("项目开发中经常需要使用 sass 处理CSS样式，比如我们使用 bootstrap 时， 所以需要安装 sass编译环境。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# Sass\nnpm install -D sass-loader node-sass\n\n# Less\nnpm install -D less-loader less\n\n# Stylus\nnpm install -D stylus-loader stylus\n")])])]),s("p",[e._v("引入 "),s("code",[e._v("bootstrap")]),e._v(" 和 "),s("code",[e._v("font-awesome")])]),e._v(" "),s("p",[e._v("下面是在 "),s("code",[e._v("script")]),e._v(" 里引入")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<script>\nimport HelloWorld from './components/HelloWorld.vue'\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport 'bootstrap/dist/js/bootstrap'\nimport 'font-awesome/css/font-awesome.min.css'\n...\n<\/script>\n")])])]),s("p",[e._v("下面是在 "),s("code",[e._v("style")]),e._v("引入 "),s("code",[e._v("bootstrap")]),e._v(" 样式")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<style lang=\"scss\">\n  @import '~bootstrap/dist/css/bootstrap.min.css';\n  @import '~font-awesome/css/font-awesome.min.css';\n...\n</style>\n")])])]),s("blockquote",[s("p",[e._v("~ 可以理解为 "),s("code",[e._v("node_mobules")])])]),e._v(" "),s("h2",{attrs:{id:"插件开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件开发","aria-hidden":"true"}},[e._v("#")]),e._v(" 插件开发")]),e._v(" "),s("p",[e._v("将组件或指令开发成插件可以方便的为其他项目使用，也可以放在GITHUB中为任何Vue项目使用。")]),e._v(" "),s("h4",{attrs:{id:"构建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 构建项目")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vue init webpack-simple vue-form\n")])])]),s("blockquote",[s("p",[e._v("我们的主要工作目录是 "),s("code",[e._v("src")])])]),e._v(" "),s("h4",{attrs:{id:"插件入口文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件入口文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 插件入口文件")]),e._v(" "),s("p",[e._v("下面是src 的目录结构")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├── App.vue\n├── assets\n│   └── logo.png\n├── components\n│   └── Image.vue #为插件开发的组件\n├── index.js #插件入口\n└── main.js\n")])])]),s("p",[s("code",[e._v("index.js")]),e._v(" 与 "),s("code",[e._v("comments/Image.vue")]),e._v(" 是我们新添加的文件。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# index.js\nimport Image from './components/Image'\n\nconst components = [\n  Image\n];\nconst plugin = {\n  install(Vue, options) {\n    if (plugin.installed) return;\n    components.map(component => Vue.component(component.name, component));\n    Vue.mixin({\n      mounted() {\n        console.log('Mounted!');\n      }\n    })\n  }\n}\nif (typeof window !== 'undefined' && window.Vue) {\n  plugin(window.Vue)\n}\nexport default plugin\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('# comments/Image.vue\n<template>\n    <div>\n      <h1>image...</h1>\n    </div>\n</template>\n\n<script>\n    export default {\n        name: "HdImage"\n    }\n<\/script>\n\n<style scoped>\n\n</style>\n')])])]),s("h4",{attrs:{id:"插件调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件调试","aria-hidden":"true"}},[e._v("#")]),e._v(" 插件调试")]),e._v(" "),s("p",[e._v("开发的插件可以安装在项目中，修改 "),s("code",[e._v("main.js")]),e._v(" 文件如下")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("...\nimport Vue from 'vue'\nimport App from './App.vue'\n// 引入插件\nimport Index from './index'\nVue.use(Index);\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});\n...\n")])])]),s("p",[e._v("在项目目录下执行 "),s("code",[e._v("npm run dev")]),e._v(" 开始在浏览器中查看结果，修改代码后页面会自动刷新。")]),e._v(" "),s("h4",{attrs:{id:"插件打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件打包","aria-hidden":"true"}},[e._v("#")]),e._v(" 插件打包")]),e._v(" "),s("p",[e._v("修改项目目录下的 "),s("code",[e._v("webpack.config.js")]),e._v(" 的部分内容")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  module.exports = {\n      //修改为插件入口文件\n      entry: {\n        'build':'./src/main.js',\n        'vue-form':'./src/index.js'\n      },\n      output: {\n        path: path.resolve(__dirname, './dist'),\n        publicPath: '/dist/',\n        //生成文件名\n        filename: '[name].js',\n        // library指定的就是你使用require时的模块名，这里便是require(\"PayKeyboard\")\n        library: 'VueForm',\n        //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。\n        libraryTarget: 'umd',\n        // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。\n        umdNamedDefine: true\n      },\n      .\n      .\n      .\n")])])]),s("ul",[s("li",[e._v("entry 定义插件入口文件")]),e._v(" "),s("li",[e._v("filename 定义生成插件的文件名")])]),e._v(" "),s("p",[e._v("修改完配置文件后，在项目下执行 "),s("code",[e._v("npm run build")]),e._v(" 命令后就生成了最终的插件编译文件了。")]),e._v(" "),s("h4",{attrs:{id:"发布插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布插件","aria-hidden":"true"}},[e._v("#")]),e._v(" 发布插件")]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("package.json")]),e._v(" 文件中添加配置项")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "name": "houdunren-vue-form",\n  "description": "A Vue.js project",\n  "version": "1.0.1",\n  "author": "houdunwang <2300071698@qq.com>",\n  "license": "MIT",\n  "main": "dist/vue-form.js",\n  "keywords": [\n    "vue",\n    "houdunren",\n    "bootstrap",\n    "后盾向军",\n    "后盾人"\n  ],\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/houdunwang/vue-form"\n  },\n  "bugs": {\n    "url": "https://github.com/houdunwang/vue-form/issues"\n  },\n  "homepage": "https://github.com/houdunwang/vue-form#readme",\n  .\n  .\n  .\n')])])]),s("p",[e._v("部分变量说明：")]),e._v(" "),s("ul",[s("li",[e._v("main——使用 require 加载时的文件")]),e._v(" "),s("li",[e._v("keywords——Npm网站显示的包关键字")]),e._v(" "),s("li",[e._v("repository —— Git仓库")]),e._v(" "),s("li",[e._v("bugs——Git issues 地址")]),e._v(" "),s("li",[e._v("homepage——项目GIt主页")])]),e._v(" "),s("p",[s("strong",[e._v("发布")])]),e._v(" "),s("ul",[s("li",[e._v("首先在 https://www.npmjs.com/ 注册一个帐号")]),e._v(" "),s("li",[e._v("删除 "),s("code",[e._v("package.json")]),e._v(" 文件中的 "),s("code",[e._v('"private": true')]),e._v(" 行")]),e._v(" "),s("li",[e._v("执行 "),s("code",[e._v("npm publish")]),e._v(" 发布")]),e._v(" "),s("li",[e._v("如果发布失败是因为 "),s("code",[e._v("package.json")]),e._v(" 中的 "),s("code",[e._v("name")]),e._v(" 已经被别人占用了需要换个包名")]),e._v(" "),s("li",[e._v("发布后其他用户就可以使用 "),s("code",[e._v("npm i houdunren-vue-form -S")]),e._v(" 安装你的插件了")]),e._v(" "),s("li",[e._v("每次发布新版本时记得修改 "),s("code",[e._v("package.json")]),e._v(" 里的版本号")])]),e._v(" "),s("p",[s("strong",[e._v("撤销")])]),e._v(" "),s("p",[e._v("发布的包也可从NPM上删除")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm unpublish houdunwang-vue-form --force\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);