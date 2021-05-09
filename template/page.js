/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2020/6/17
 * @Description: 创建页面
 */

const path = require('path');
const fs = require('fs');
require('console-color-mr');
const execSync = require('child_process').execSync;

// 目标路径 - 执行脚本命令所在目录
const targetPath = process.env.INIT_CWD;
// controller相对路径
const controllerRelativePath = path.relative(targetPath, '../miniprogram/base/controller/base_controller').replace('../miniprogram/', '');
// 装饰器相对路径
const decoratorRelativePath = path.relative(targetPath, '../miniprogram/base/decorator/page').replace('../miniprogram/', '');
// base less 相对路径
const variableLessRelativePath = path.relative(targetPath, '../miniprogram/style/variable.less').replace('../miniprogram/', '');

// 模板路径
const sourcePath = path.resolve(__dirname, './page_template');

const pageName = process.argv.slice(2)[0];
if (!pageName) {
  console.log('请传入页面名称!'.red);
  return;
}

function writeContent2File(content, fileName) {
  fileName = pageName + fileName.substring(fileName.indexOf('.'));
  const tempPath = path.resolve(targetPath, pageName + '/' + fileName);
  const data = new Uint8Array(Buffer.from(content));
  // 写入数据到对应文件
  fs.writeFileSync(tempPath, data);
}
// 首字母大写
function firstLetterCapitalized(str) {
  if (!str) {
    return '';
  }
  const firstLetter = str.slice(0, 1);
  const other = str.slice(1);
  return firstLetter.toUpperCase() + other;
}
// 获取类名
function getName() {
  const arr = pageName.split('_');
  let result = '';
  arr.forEach((item) => {
    result += firstLetterCapitalized(item);
  });
  return result;
}
// 读取文件内容
function readFileContent(path, fileName) {
  let content = fs.readFileSync(path).toString();
  if (fileName.indexOf('.ts') !== -1) {
    // 替换引入
    const importStr = `import { BaseController } from '${controllerRelativePath}';
import { Controller } from '${decoratorRelativePath}';\n`;
    content = content.replace(/\'import\';\n/, importStr);
    content = content.replace(/\$/gi, getName());
    content = content.replace(/\/\/\s\@ts-nocheck\n/gs, '');
    // 替换年月日
    content = setDate(content);
    writeContent2File(content, fileName);
  } else if (fileName.indexOf('.less') !== -1) {
    content = `@import "${variableLessRelativePath}";\n${content}`;
    writeContent2File(content, fileName);
  } else {
    writeContent2File(content, fileName);
  }
}

function setDate(content) {
  // 替换年月日
  const date = new Date();
  const year = date.getFullYear();
  const money = (date.getMonth() + 1).toString().padStart(2, 0);
  const day = date.getDate().toString().padStart(2, 0);
  const hour = date.getHours().toString().padStart(2, 0);
  const minute = date.getMinutes().toString().padStart(2, 0);
  const second = date.getSeconds().toString().padStart(2, 0);
  content = content.replace(/date/g, `${year}-${money}-${day} ${hour}:${minute}:${second}`);
  return content;
}

// 读取目录下所有文件
function readSourceDir() {
  let files = fs.readdirSync(sourcePath, {
    withFileTypes: true
  });
  files.forEach((item) => {
    // 如果为文件
    if (item.isFile()) {
      readFileContent(path.resolve(sourcePath, item.name), item.name);
    }
  });

  // 更新app.json
  execSync('npm run sync', {
    stdio: 'inherit'
  });
}

// 创建目标目录
function makeSourceDir() {
  const path = `${targetPath}/${pageName}`;
  const exist = fs.existsSync(path);
  if (exist) {
    console.log('终止执行，原因：目标目录已存在'.red);
    return;
  }
  fs.mkdir(
    path,
    {
      recursive: true
    },
    (error) => {
      if (error) {
        throw error;
      }
      // 开始读取资源目录
      readSourceDir();
    }
  );
}

makeSourceDir();
