/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2021-05-09 17:07:57
 * @LastEditTime: 2021-05-11 16:52:15
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

  public properties?: P;
  public data?: D;
  public _init() {
    this._initProperties();
    this._initData();
    this._initExternalClasses();
    this._initBehaviors();
  }
  /**
   *  初始化处理properties
   * @returns
   */
  public _initProperties() {
    if (!this.properties) {
      return;
    }
    const keys = Object.keys(this.properties!);
    keys.forEach((key: string) => {
      const value = this[key];
      const newKey = key as keyof P;
      (this.properties![newKey] as any).type = this[key].constructor as StringConstructor;
      (this.properties![newKey] as any).value = value;
    });
  }
  /**
   *  初始化处理data
   * @returns
   */
  public _initData() {
    if (!this.data) {
      return;
    }
    const keys = Object.keys(this.data!);
    keys.forEach((key: string) => {
      const value = this[key];
      const newKey = key as keyof D;
      this.data![newKey] = value;
    });
  }
  /**
   * 初始化处理 externalClasses
   * @returns
   */
  public _initExternalClasses() {
    if (!this.externalClasses) {
      return;
    }
    this.externalClasses = this.externalClasses.reduce((pre = [], key: string) => [...pre, ...this[key]], []);
  }
  /**
   * behaviors 逻辑复用
   * @returns
   */
  public _initBehaviors() {
    if (!this.behaviors) {
      return;
    }
    this.behaviors = this.behaviors.reduce((pre = [], key: string) => [...pre, ...this[key]], []);
    console.log(this.behaviors);

  }
}
