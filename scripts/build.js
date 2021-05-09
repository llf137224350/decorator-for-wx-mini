/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2021-05-08 21:08:30
 * @LastEditTime: 2021-05-08 22:17:49
 * @Description: 重新构建wxss与js，防止未监听到改变时未能重新编译导致的bug
 */

const readdirp = require('readdirp');
const shelljs = require('shelljs');
const path = require('path');
require('console-color-mr');
const dir = './miniprogram';
let beginTime;
let endTime;
async function build(command, sourcePostfix, targetPostfix) {
  console.log(`开始编译 ${sourcePostfix}...`.green);
  const files = await readdirp.promise(dir, { fileFilter: `*.${sourcePostfix}` });
  beginTime = Date.now();
  for (const file of files) {
    const currentPath = file.fullPath;
    const extname = path.extname(currentPath);
    const name = currentPath.replace(extname, '');
    shelljs.exec(`${command} ${currentPath} ${name}.${targetPostfix}`);
  }
  endTime = Date.now();
  console.log(`编译 ${sourcePostfix} 完成，耗时：${endTime - beginTime}ms`.green);
  beginTime = Date.now();
  console.log(`开始编译 ts...`.green);
  shelljs.exec(`tsc`);
  endTime = Date.now();
  console.log(`编译 ts 完成，耗时：${endTime - beginTime}ms`.green);
  console.log(`===============编译成功================`.green);
}

build('lessc', 'less', 'wxss');
