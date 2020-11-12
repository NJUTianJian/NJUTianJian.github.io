# 技术部动态页面生成工具

> 参考Github项目：https://github.com/Foveluy/React-awesome-resume

此目录用于生成[技术部动态页面](https://github.com/NJUTianJian/NJUTianJian.github.io/blob/master/Group-Website.html)所需要的JavaScript文件，即`../js/techdept-bundle.js`。
PS：动态页面内容存放在：`tools\group-website\app\src\introduction.txt`。

要能够运行，首先需要执行命令`npm install`（先根据百度，安装好nodejs和npm，且更新到最新版本）

本地测试
-------
```
npm run dev
```

然后访问：
```
http://localhost:8080/
```

部署
-------

执行运行`build.sh`，或者

```
npm run build
```

然后复制目录build下的
```
- bundle.js
```
到项目目录js中去，并更名为

```
- techdept-bundle.js
```

即可