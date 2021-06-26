var express = require('express');
var app = express();
var spider = require("./spider.js")
var minify = require('html-minifier').minify;
app.get('*', async (req, res, next) => {
	// 部署到服务器的完整URL
	// var url = req.protocol + '://'+ req.hostname + req.originalUrl;
         var url = 'https://'+ req.hostname + req.originalUrl;
	console.log('请求的完整URL：' + url);
	var content = await spider(url).catch((error) => {
		console.log(error);
		res.send('获取html内容失败');
		return;
	});
    //由于是直接获取的源码，下面通过minify库压缩代码，也不知道是不是多余的。
	content=minify(content,{removeComments: true,collapseWhitespace: true,minifyJS:true, minifyCSS:true});
	res.send(content);
});
//监听3000端口
app.listen(3811, () => {
	console.log('预渲染服务已启动！');
});