#!/usr/bin/env node

var ghPages = require('gulp-gh-pages');
var i5ting_toc = require('i5ting_toc')
//函数可以返回当前正在执行的项目路径
var pwd = process.cwd()  


var argv = process.argv;
argv.shift();

console.log('r1')


var is_open = true;
var markd_config = {
	debug: false,
  index: true
}

var source_file_name = pwd + '/README.md'
var file_name = source_file_name.split('/').pop();;
var _file_name = file_name.split('.')[0];

var dest_file_path = pwd + '/preview/' + _file_name + '.html';

console.log('pwd=' + pwd);
console.log('source_file_name=' + source_file_name);
console.log('dest_file_path=' + dest_file_path);

i5ting_toc(pwd, source_file_name, dest_file_path, is_open, markd_config);

console.log('end' + pwd + '/preview/**/*')


var ghpages = require('gh-pages');

console.log('start publish git pages...')

ghpages.publish(pwd + '/preview', function(err) {
  if (err) {
    console.log(err)
  }
  console.log('finish publish git pages...')
});