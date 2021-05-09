/**
 * @author い 狂奔的蜗牛
 * @date 2020/6/2
 * @desc 构建app.json
 */
const fs = require('fs');
const path = require('path');
require('console-color-mr');
// 要读取页面的根路径
const baseUrl = path.resolve(__dirname, '../miniprogram');
// app.json文件路径
const appJsonPath = path.resolve(__dirname, '../miniprogram/app.json');
// 是否将新配置追加到pages数组最后
const append = false;
// 存储从pages下读取的文件路径
const pages = [];

/**
 * 读取app.js文件并获取pages配置，通过与pages下的页面目录比对进行增删pages配置
 */
function readAppJson () {

  let content = fs.readFileSync(appJsonPath);
  if (content.length) {
    content = content.toString();
    content = JSON.parse(content)
  }
  const appPages = content.pages;
  // 将数据添加到app.json pages
  for (let i = 0; i < pages.length; i++) {
    if (!appPages.includes(pages[i])) {
      if (append) {
        appPages.push(pages[i]);
      } else {
        appPages.unshift(pages[i])
      }
      console.log(`增加页面：${pages[i]}`.green);
    }
  }
  // 移除无效配置
  for (let i = 0; i < appPages.length; i++) {
    if (!pages.includes(appPages[i])) {
      console.log(`移除页面：${appPages[i]}`.green);
      appPages.splice(i, 1)
    }
  }
  content.pages = appPages;
  writePagesToAppJson(content)
}

/**
 * 将读取并操作了pages中的数据重新写入app.json
 * @param content
 */
function writePagesToAppJson (content) {
  const data = new Uint8Array(Buffer.from(JSON.stringify(content, null, "  ")));
  // 写入数据到app.json
  fs.writeFile(appJsonPath, data, (error) => {
    if (error) {
      throw error;
    }
    console.log(`===============执行成功================`.green);
  })
}

// 开始执行
function getAllPagePath(basePath) {
  let files = fs.readdirSync(path.resolve(baseUrl,basePath));
  files = files.filter((file) => {
    return file !== '.DS_Store'
  })
  files.forEach((file) => {
    const stat = fs.statSync(path.resolve(baseUrl,basePath,file))
    if(stat.isDirectory()) {
      getAllPagePath(`${basePath}/${file}`)
    } else {
      const tempPath = basePath +'/'+ file;
      const extname = path.extname(tempPath);
      if ('.wxml' === extname && file.indexOf('.skeleton.wxml') === -1 && tempPath.indexOf('components') === -1) {
        pages.push(tempPath.replace(extname,''))
      }
    }
  });
}
// 读取所有页面得到页面路径
getAllPagePath('pages');
// 自动修改package.json
readAppJson()
