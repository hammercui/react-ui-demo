#  简介

这是一个使用[react-weui](https://github.com/weui/react-weui)的reactjs项目demo,在demo中学习如何使用[react-weui](https://github.com/weui/react-weui)来开发一个微信风格的h5手机站。


#  运行

##  进入开发模式

命令行执行,然后可以在写代码时动态加载
```
npm run dev
```

## 打包发布模式，命令行执行

```
npm run build
```
这样就把JavaScript文件进行打包，生成`main.min.js`跟`common.min.js`两个文件。这两个文件都已经压缩处理了，我们在正式环境可以直接引用，建议部署到cdn上，分散服务器压力