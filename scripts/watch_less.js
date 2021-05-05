/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2020-11-11 09:35:58
 * @LastEditTime: 2020-11-26 20:04:39
 * @Description: 自动监听less文件并在对应目录生成wxss文件
 */
const chokidar = require('chokidar');
const shelljs = require('shelljs');
const path = require('path');
require('console-color-mr');
console.log('watch start...'.green);

// 所有less文件
const files = './miniprogram/**/*.less';
const extName = 'wxss';
chokidar.watch(files).on('change', function (currentPath) {
  console.log(' ');
  console.log(`${currentPath} changed...`.green);

  const beginTime = Date.now();

  const extname = path.extname(currentPath);
  const name = currentPath.replace(extname, '');
  console.log(currentPath);
  shelljs.exec(`lessc ${currentPath} ${name}.${extName}`);

  const endTime = Date.now();
  console.log(`compile time：${endTime - beginTime}ms`.green);
});
