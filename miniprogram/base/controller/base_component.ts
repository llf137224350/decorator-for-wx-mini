/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2021-05-09 17:07:57
 * @LastEditTime: 2021-05-09 22:40:00
 * @Description:
 */

export class BaseComponent<P, D> {
  [key: string]: any;
  public properties?: P;
  public data?: D;

  public _init() {
    this._initProperties();
    this._initData();
    this._initExternalClasses();
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
}
