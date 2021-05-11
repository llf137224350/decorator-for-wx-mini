/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2021-05-06 00:04:21
 * @LastEditTime: 2021-05-11 17:00:24
 * @Description:组件装饰器
 */

/**
 * @description: 声明组件
 * @param {any} Target
 * @return {*}
 */
function Components(Target: any) {
  const target = new Target();
  // 处理组件属性
  target.__proto__.__proto__._init.call(target);
  Component(target);
}
/**
 * @description: 定义组件属性
 * @param {any} target
 * @param {string} propertyKey
 * @return {*}
 */
function Prop(target: any, propertyKey: string) {
  if (!target.properties) {
    target['properties'] = {};
  }
  target.properties[propertyKey] = {
    type: Object,
    value: null
  };
}
/**
 * @description:  定义data数据
 * @param {any} target
 * @param {string} propertyKey
 * @return {*}
 */
function Data(target: any, propertyKey: string) {
  if (!target.data) {
    target['data'] = {};
  }
  target.data[propertyKey] = null;
}
/**
 * @description: 定义方法
 * @param {any} target
 * @param {string} propertyKey
 * @return {*}
 */
function Method(target: any, propertyKey: string) {
  if (!target.methods) {
    target['methods'] = {};
  }
  target.methods[propertyKey] = target[propertyKey];
}
/**
 * @description: 对外暴露css扩展
 * @param {any} target
 * @param {string} propertyKey
 * @return {*}
 */
function ExternalClasses(target: any, propertyKey: string) {
  if (!target.externalClasses) {
    target['externalClasses'] = [];
  }
  target.externalClasses = [...target.externalClasses, propertyKey];
}
/**
 * 组件逻辑复用
 * @param target
 * @param propertyKey
 */
function Behaviors(target: any, propertyKey: string) {
  if (!target.behaviors) {
    target['behaviors'] = [];
  }
  target.behaviors = [...target.behaviors, propertyKey];
}

/**
 * @description: 监听属性值的更改
 * @param {string} monitoredObject
 * @return {*}
 */
function Observers(monitoredObject: string) {
  return function (target: any, propertyKey: string) {
    if (!target.observers) {
      target['observers'] = {};
    }
    target.observers[monitoredObject] = target[propertyKey];
  };
}
/**
 * @description:  组件生命周期
 * @param {any} target
 * @param {string} propertyKey
 * @return {*}
 */
function Lifetimes(target: any, propertyKey: string) {
  if (!target.lifetimes) {
    target['lifetimes'] = {};
  }
  target.lifetimes[propertyKey] = target[propertyKey];
}

/**
 * @description:  页面生命周期
 * @param {any} target
 * @param {string} propertyKey
 * @return {*}
 */
function PageLifetimes(target: any, propertyKey: string) {
  if (!target.pageLifetimes) {
    target['pageLifetimes'] = {};
  }
  target.pageLifetimes[propertyKey] = target[propertyKey];
}
export { Components as Component, ExternalClasses, Behaviors, Prop, Data, Method, Observers, Lifetimes, PageLifetimes };
