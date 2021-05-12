import { Lifetimes, Prop } from '../decorator/component';

/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2021-05-09 17:07:57
 * @LastEditTime: 2021-05-12 10:47:37
 * @Description:
 */
interface TriggerEventOption {
  /** 事件是否冒泡
   *
   * 默认值： `false`
   */
  bubbles?: boolean;
  /** 事件是否可以穿越组件边界，为false时，事件将只能在引用组件的节点树上触发，不进入其他任何组件内部
   *
   * 默认值： `false`
   */
  composed?: boolean;
  /** 事件是否拥有捕获阶段
   *
   * 默认值： `false`
   */
  capturePhase?: boolean;
}

export class BaseComponent<P, D> {
  [key: string]: any;
  // 设置数据
  public ['setData']: (data: Partial<D>, callback?: () => void) => void;
  // 向父元素派发事件
  public ['triggerEvent']: (name: string, detail?: unknown, options?: TriggerEventOption) => void;
  // 组件属性
  public properties = {} as P;
  // 组件自己定义的数据
  public data = {} as D;
  public _init() {
    this._initProperties();
    this._initData();
    this._initValueIsArray('externalClasses');
    this._initValueIsArray('behaviors');
  }
  /**
   *  初始化处理properties
   * @returns
   */
  public _initProperties() {
    this.properties = this.__proto__.properties;
    Object.keys(this.properties).forEach((key: string) => {
      (this.properties[key as keyof P] as { type?: unknown }).type = this[key].constructor as StringConstructor;
      (this.properties[key as keyof P] as { value?: unknown }).value = this[key];
    });
  }
  /**
   *  初始化处理data
   * @returns
   */
  public _initData() {
    this.data = this.__proto__.data;
    Object.keys(this.data).forEach((key: string) => (this.data[key as keyof D] = this[key]));
  }
  /**
   * 初始化处理 externalClasses/behaviors
   * @returns
   */
  public _initValueIsArray(key: string) {
    if (!this[key]) {
      return;
    }
    this[key] = this[key].reduce((pre = [], key: string) => [...pre, ...this[key]], []);
  }

  /**
   * @description:  组件创建时对数据进行代理处理
   * @param {*}
   * @return {*}
   */
  @Lifetimes
  public created() {
    Object.keys(this.data).forEach((key: string) => {
      Object.defineProperty(this, key, {
        get() {
          return this.data[key];
        },
        set(val) {
          this.setData({
            [key]: val
          });
        }
      });
    });
  }
}
