#!/usr/bin/env node

var argv = process.argv;
argv.shift();

console.log('r1')


var is_open = true;
var markd_config = {
	debug: false
}

//函数可以返回当前正在执行的项目路径
var pwd = process.cwd()  

var source_file_name = pwd + '/README.md'
var file_name = source_file_name.split('/').pop();;
var _file_name = file_name.split('.')[0];

var dest_file_path = pwd + '/preview/' + _file_name + '.html';

console.log('pwd=' + pwd);
console.log('source_file_name=' + source_file_name);
console.log('dest_file_path=' + dest_file_path);

require('i5ting_toc')(pwd, source_file_name, dest_file_path, is_open, markd_config);