var util = require('util');
var path = require('path');
var util = require('util');
var koa = require('koa');
var router = require('koa-router');
var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var compiler = webpack(require('./webpack.config'));

var port = 8000;
var app = koa();

app.use(router(app));
app.use(webpackDevMiddleware(compiler, {}));
app.use(require('koa-serve-index')(process.cwd()));
app.use(require('koa-static')(process.cwd()));


// 模拟jsonp
app.get('/interface', function *(next) {
  var query = this.query || {};
  var callback = query.callback || "";
  var tpl = callback ? callback + "(%s)" : "%s";
  var data = {
    status: 1,
    message: "",
    data: {}
  };
  this.type = 'text/javascript';
  this.body = util.format(tpl,JSON.stringify(data,4,4));
  yield next;
});

app.listen(port);
console.log('server start at ' + port);