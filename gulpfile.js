/**
 * Description:
 * User: 常胤 <satans17@gmail.com>
 * Date: 15/3/30
 * Copyright(c) 2014 Taobao.com
 */


var gulp = require("gulp");
var webpack = require('gulp-webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var dist = "./build";


gulp.task("build", function () {
  return gulp.src(['./src/app.js'])
    .pipe(webpack({
      module: {
        loaders: [
          {test: /\.js$/, loader: 'babel-loader'},
          { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
        ]
      },
      plugins: [
        new ExtractTextPlugin("[name].css")
      ],
      output: {
        path: "/build"
      }
    }))
    .pipe(gulp.dest(dist));
});


gulp.task('default', ['build']);