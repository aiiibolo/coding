(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{286:function(a,e,t){"use strict";t.r(e);var s=t(0),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"dockerfile-入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-入门","aria-hidden":"true"}},[a._v("#")]),a._v(" DockerFile 入门")]),a._v(" "),t("blockquote",[t("p",[a._v("后盾人 @ 版权所有 ，请尊重他人劳动成果，转载请注明出处 houdunren.com。")]),a._v(" "),t("p",[a._v("感谢你的支持与理解。")])]),a._v(" "),t("h2",{attrs:{id:"配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),t("p",[a._v("Dockerfile是由一系列命令和参数构成的脚本，这些命令应用于基础镜像并最终创建一个新的镜像。它们简化了从头到尾的流程并极大的简化了部署工作。")]),a._v(" "),t("p",[a._v("下面创建 Dockerfile 配置文件如下")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# 使用的源镜像\nFROM    ubuntu\n# RUN 执行的容器命令\nRUN     apt -y update && apt -y upgrade && apt install -y vim \\\nnginx \n# 开放端口\nEXPOSE  80\n# 启动后执行的命令，在执行docker run ... 命令时添加 /bin/bash ，CMD设置将无效\n# 以前台运行NGINX\nCMD\t\t\t["nginx","g","daemon off;"]\n')])])]),t("ul",[t("li",[t("p",[a._v("RUN指令是在镜像构建时执行，RUN 经常用于安装软件包。")])]),a._v(" "),t("li",[t("p",[a._v("CMD 设置容器启动后默认执行的命令及其参数，但 CMD 能够被 "),t("code",[a._v("docker run")]),a._v(" 后面跟的命令行参数替换，有多个 CMD 指令时只有最后一个 CMD 有效。")])])]),a._v(" "),t("h2",{attrs:{id:"编译镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 编译镜像")]),a._v(" "),t("p",[a._v("在 Dockerfile 文件所在目录执行编译镜像操作。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker build -t houdunren/nginx . \n")])])]),t("p",[a._v("查看镜像编译是否成功")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker images\n")])])]),t("h2",{attrs:{id:"使用镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用镜像")]),a._v(" "),t("p",[a._v("修改 "),t("code",[a._v("/etc/hosts")]),a._v("添加 "),t("code",[a._v("houdunren.test")]),a._v(" 本地域名的解析记录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("...\n127.0.0.1       houdunren.test\n...\n")])])]),t("p",[a._v("运行容器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker run -tid -p 8080:80 -v /www:/var/www/html --name nginx houdunren/nginx\n")])])]),t("p",[a._v("宿主使用 "),t("code",[a._v("houdunren.test")]),a._v(" 或"),t("code",[a._v("localhost:8080")]),a._v("  (如果宿主机没有使用80也可以将80端口映射) 访问nginx")]),a._v(" "),t("h2",{attrs:{id:"镜像上传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像上传","aria-hidden":"true"}},[a._v("#")]),a._v(" 镜像上传")]),a._v(" "),t("p",[a._v("制作好的镜像可以上传到网上，以供其他人使用。")]),a._v(" "),t("p",[a._v("登录 docker hub")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker login\n")])])]),t("p",[a._v("推送镜像到仓库")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker push houdunren/lamp\n")])])]),t("p",[a._v("登录 https://hub.docker.com/ 就可以在 Repositories 中查看到刚者提交的镜像了。")]),a._v(" "),t("p",[a._v("现在其他用户可以使用以下命令安装我们的镜像了。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker pull houdunren/lamp\n")])])]),t("p",[a._v("退出 docker hub")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker logout\n")])])])])},[],!1,null,null,null);e.default=r.exports}}]);