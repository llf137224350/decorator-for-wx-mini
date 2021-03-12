/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2020-04-29 15:51:38
 * @Description: 装饰器
 */

/**
 * 页面controller装饰器
 * @param Target
 * @constructor
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
 * 页面data属性中属性装饰器
 * @param target
 * @param key
 * @constructor
 */
function Data(target: any, key: string) {
  if (!target.data) {
    target['data'] = {};
  }
  target.data[key] = '';
}

export { Controller, Data };
