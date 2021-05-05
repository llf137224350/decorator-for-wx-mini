# 项目使用说明

> 因为项目存在开发依赖，所以首先需要安装依赖 npm i 或者 yarn install

# 目录说明

| 目录          | 说明                         |
| ------------- | ---------------------------- |
| base          | 项目基础代码                 |
| common        | 不常更改的内容                         |
| component     | 多页面共用组件               |
| fonts         | iconfont 字体图标            |
| libs          | 第三方依赖                   |
| pages/default | 页面                         |
| service | 非交互性业务逻辑处理，如网络请求                         |
| style         | 公共样式                     |
| util          | 工具类                       |
| scripts       | 工具脚本                     |
| template      | 页面和组件模板代码及创建脚本 |
| typings/types/project       | ts 类型定义                  |

# 如何快速创建组件或者页面
> 首先进入需要创建页面或者组件页面
* 运行：**npm run page 页面名称** /  **yarn  page 页面名称**创建页面。
* 运行：**npm run component 页面名称** /  **yarn  component 页面名称**创建组件


# vs code 如何让ts自动编译为js，less自动编译为wxss
> 通过执行任务的方式
* mac电脑，按住shift+command，选择watch all
* window电脑，按住shift+ctrl，选择watch all
