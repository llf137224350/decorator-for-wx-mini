/**
 * @author い 狂奔的蜗牛
 * @date 2020/6/9
 * @desc 组件装饰器
 */
export function Components(target: any) {
  Component(new target());
}

/**
 * 组件外覆盖组件内样式暴露class
 * @param classes
 * @constructor
 */
export function ExternalClasses(classes: string[]) {
  return function (target: any, propertyKey?: string) {
    console.log(propertyKey);
    if (!target.externalClasses) {
      target['externalClasses'] = [];
    }
    target.externalClasses = classes;
  };
}

/**
 * properties
 * @param type 类型
 * @param defaultValue 默认值
 * @constructor
 */
export function Prop(type: any = Object, defaultValue: any = {}) {
  return function (target: any, propertyKey: string) {
    if (!target.properties) {
      target['properties'] = {};
    }
    target.properties[propertyKey] = {
      type: type,
      value: defaultValue
    };
  };
}

/**
 * data
 * @param defaultValue 默认值
 * @constructor
 */
export function Data(defaultValue: any = {}) {
  return function (target: any, propertyKey: string) {
    if (!target.data) {
      target['data'] = {};
    }
    target.data[propertyKey] = defaultValue;
  };
}

/**
 * methods
 * @constructor
 */
export function Method() {
  return function (target: any, propertyKey: string) {
    if (!target.methods) {
      target['methods'] = {};
    }
    target.methods[propertyKey] = target[propertyKey];
  };
}


/**
 * 属性监听
 * @param monitoredObject 被监听对象key
 * @constructor
 */
export function Observers(monitoredObject: string) {
  return function (target: any, propertyKey: string) {
    if (!target.observers) {
      target['observers'] = {};
    }
    target.observers[monitoredObject] = target[propertyKey];
  };
}

/**
 * 生命周期
 * @constructor
 */
export function Lifetimes() {
  return function (target: any, propertyKey: string) {
    if (!target.lifetimes) {
      target['lifetimes'] = {};
    }
    target.lifetimes[propertyKey] = target[propertyKey];
  };
}

/**
 * 页面生命周期
 * @constructor
 */
export function PageLifetimes() {
  return function (target: any, propertyKey: string) {
    if (!target.pageLifetimes) {
      target['pageLifetimes'] = {};
    }
    target.pageLifetimes[propertyKey] = target[propertyKey];
  };
}

