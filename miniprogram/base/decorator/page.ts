/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2021-05-06 00:04:21
 * @LastEditTime: 2021-05-09 20:41:02
 * @Description: 页面装饰器
 */

/**
 * @description: 页面controller装饰器
 * @param {any} Target
 * @return {*}
 */
function Controller(Target: any) {
  const target = new Target();
  const onLoadStr = target.onLoad.toString();
  if (onLoadStr && onLoadStr.indexOf('this._init()') === -1 && onLoadStr.indexOf('_super.prototype.onLoad.call(this)') === -1) {
    throw new Error('子类复写onLoad方式时，必须调用super.onLoad();方法');
  }
  Page(target);
}

/**
 * @description: 页面data属性中属性装饰器
 * @param {any} target
 * @param {string} key
 * @return {*}
 */
function Data(target: any, key: string) {
  if (!target.data) {
    target['data'] = {};
  }
  target.data[key] = '';
}

export { Controller, Data };
