---
sidebar_position: -1
---

## 1.安装nvm

> [nvm网站](https://nvm.uihtm.com/)

### 1.1 [下载nvm](https://nvm.uihtm.com/nvm-1.1.10-setup.zip)

### 1.2 安装完确认信息
```js
打开CMD，输入命令 nvm
```
### 1.3 nvm配置
> `nvm`安装位置，打开文件：`settings.txt` ，配置镜像：
```js
root: D:\NodeJs\nvm\nvm
path: D:\NodeJs\nvm\nodejs
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

### 1.4 nvm命令

>可用版本查看 nvm list available

>安装 nvm install 版本号

>卸载 nvm uninstall 版本

>使用 nvm use 版本号

>当前版本查看 nvm current

### 1.5 npm 安装冲突
>Fix the upstream dependency conflict, or retry this command with
–force, or --legacy-peer-deps to accept an incorrect (and potentially broken) dependency resolution.

>问题解决：

>--force： 会无视冲突，并强制获取远端npm库资源，即使本地有资源也会覆盖掉

>--legacy-peer-deps：安装时忽略所有peerDependencies，忽视依赖冲突，采用npm版本4到版本6的样式去安装依赖，已有的依赖不会覆盖。

>一般使用：–legacy-peer-deps

## 2.npm

### 2.1 npm命令
```js
npm -v

//  设置全局的npm淘宝镜像
npm config set registry https://registry.npm.taobao.org
//  也可以切换回默认全局镜像
npm config set registry https://registry.npmjs.org

```
```
-g： 为 --global 的缩写，表示安装到全局目录里
-S： 为 --save 的缩写，表示安装的包将写入package.json里面的dependencies
-D： 为 --save-dev 的缩写，表示将安装的包将写入packege.json里面的devDependencies
 i： 为install的缩写，表示安装
```
```
npm init  # npm 初始化当前目录
npm i  # 安装所有依赖
npm i express  # 安装模块到默认dependencies
npm i express -g  # 会安装到配置的全局目录下
npm i express -S  # 安装包信息将加入到dependencies生产依赖
npm i express -D  # 安装包信息将加入到devDependencies开发依赖
npm i jquery@1.8.3  # 安装jquery指定的1.8.3版本
```
```
npm uninstall express  # 卸载模块，但不卸载模块留在package.json中的对应信息
npm uninstall express -g  # 卸载全局模块
npm uninstall express --save  # 卸载模块，同时卸载留在package.json中dependencies下的信息
npm uninstall express --save-dev  # 卸载模块，同时卸载留在package.json中devDependencies下的信息
```
```
npm update jquery  # 更新最新版本的jquery
npm update jquery@2.1.0  # 更新到指定版本号的jquery
npm install jquery@latest  # 可以直接更新到最后一个新版本
```