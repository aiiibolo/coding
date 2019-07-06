(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{298:function(a,n,t){"use strict";t.r(n);var e=t(0),s=Object(e.a)({},function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"pjax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pjax","aria-hidden":"true"}},[a._v("#")]),a._v(" pjax")]),a._v(" "),t("p",[a._v("下面是laravel 框架为例讲解")]),a._v(" "),t("p",[a._v("在 "),t("code",[a._v("resources/plugin/pjax")]),a._v(" 目录下创建 "),t("code",[a._v("pjax.js")]),a._v(" 与 "),t("code",[a._v("pjax.css")]),a._v(" 内容如下")]),a._v(" "),t("h2",{attrs:{id:"前端配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 前端配置")]),a._v(" "),t("p",[a._v("https://github.com/defunkt/jquery-pjax")]),a._v(" "),t("p",[t("strong",[a._v("pjax.js")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//定义加载区域\n$(document).pjax('a','#pjax-container');\n//定义pjax有效时间，超过这个时间会整页刷新\n$.pjax.defaults.timeout = 1200;\n//显示加载动画\n$(document).on('pjax:click', function() {\n    $(\"#loading\").show();\n});\n//隐藏加载动画\n$(document).on('pjax:end', function() {\n    $(\"#loading\").hide();\n});\n\n")])])]),t("p",[t("strong",[a._v("pjax.css")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#loading {\n  background-color: rgba(238, 238, 238, 0.6);\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  z-index: 2000;\n  bottom: 0;\n  padding-top: 10%;\n}\n#loading .spinner {\n  margin: 100px auto;\n  width: 50px;\n  height: 60px;\n  text-align: center;\n  font-size: 10px;\n}\n#loading .spinner > div {\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;\n  animation: stretchdelay 1.2s infinite ease-in-out;\n}\n#loading .spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n#loading .spinner .rect3 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n#loading .spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n#loading .spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n@-webkit-keyframes stretchdelay {\n  0%,\n  40%,\n  100% {\n    -webkit-transform: scaleY(0.4);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n  }\n}\n@keyframes stretchdelay {\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1);\n  }\n}\n")])])]),t("p",[a._v("修改 Laravel框架根目录下的 "),t("code",[a._v("webpack.mix.js")]),a._v(" 文件，添加以下代码用于复制 "),t("code",[a._v("plugin")]),a._v(" 目录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(".mix.copyDirectory('resources/plugin', 'public/plugin')\n")])])]),t("h3",{attrs:{id:"缓存处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存处理","aria-hidden":"true"}},[a._v("#")]),a._v(" 缓存处理")]),a._v(" "),t("p",[a._v("js文件当加载完后，下次不会重新加载。这在使用 vue.js 时会造成第二次请求页面不效果。解决方法如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<script>\n        var _hmt = _hmt || [];\n        (function() {\n            var hm = document.createElement("script");\n            hm.src = "{{ asset(\'js/article.js\') }}?ver="+Math.random();\n            var s = document.getElementsByTagName("script")[0];\n            s.parentNode.insertBefore(hm, s);\n        })();\n<\/script>\n')])])]),t("p",[a._v("把这段代码放在 pjax 容器内，对 .js 文件设置了随机后缀，就可以让页面每次请求都进行加载了。")]),a._v(" "),t("h2",{attrs:{id:"laravel配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#laravel配置","aria-hidden":"true"}},[a._v("#")]),a._v(" Laravel配置")]),a._v(" "),t("p",[a._v("需要安装 https://github.com/spatie/laravel-pjax 用于实现后台处理")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ composer require spatie/laravel-pjax\n")])])]),t("p",[a._v("在 "),t("code",[a._v("app/Http/Kernel.php")]),a._v(" 文件添加")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("protected $middleware = [\n    ...\n    \\Spatie\\Pjax\\Middleware\\FilterIfPjax::class,\n];\n")])])]),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),t("p",[a._v("主模板中引入文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<script src="https://cdn.bootcss.com/jquery.pjax/2.0.1/jquery.pjax.min.js"><\/script>\n<script src="{{asset(\'plugin/pjax/pjax.js\')}}"><\/script>\n<link rel="stylesheet" href="{{asset(\'plugin/pjax/pjax.css\')}}">\n')])])]),t("p",[a._v("定义 pjax加载区域")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<div class="main-content container-fluid" id="pjax-container">\n\t\x3c!--pjax加载动画--\x3e\n\t<div id="loading">\n\t\t<div class="spinner">\n\t\t\t<div class="rect1"></div>\n\t\t\t<div class="rect2"></div>\n\t\t\t<div class="rect3"></div>\n\t\t\t<div class="rect4"></div>\n\t\t\t<div class="rect5"></div>\n\t\t</div>\n\t</div>\n\t\x3c!--pjax加载动画 结束--\x3e\n\t<div id="app">\n\t\t@yield(\'content\')\n\t</div>\n</div>\n')])])]),t("p",[a._v('pjax 异步加载数据后会替换 id="pjax-container"  的div区域。')])])},[],!1,null,null,null);n.default=s.exports}}]);