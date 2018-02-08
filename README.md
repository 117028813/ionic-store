## ionic store app

用ionic做了一个商城app demo

### 运行方法

```
git clone https://github.com/117028813/ionic-store.git

cd ionic-store

npm install

ionic serve
```

首页有4个tab，其中"分类"tab需要开启server

```
node server.js
```

"发现"tab里面是拍照和扫码功能，需要打包成apk安装到手机里才能使用

打包方法：

```
cordova platform add android --save --nofetch

ionic cordova build android --prod
```

打包成功后终端会提示打包后的apk路径，找到apk安装到手机就行了

"我的"tab需要先登录，用户名是`admin`，密码是`123456`

2018-2-8增加购物车功能（需要开启server）