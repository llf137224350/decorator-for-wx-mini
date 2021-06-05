/**
 * 页面控制器基类
 */
export class BaseController {
  // setData
  [x: string]: any;

  protected onLoad() {
    this._init();
  }

  private _init() {
    if (!this.data) {
      return;
    }
    let keys = Object.keys(this.data);
    keys = keys.filter((key) => key !== '__webviewId__');
    keys.forEach((key: string) => {
      const value = this[key];
      this._reactive(key);
      this[key] = value;
    });
  }

  private _reactive(key: string) {
    Object.defineProperty(this, key, {
      get() {
        return this.data[key];
      },
      set(val: any) {
        this.setData({
          [key]: val
        });
      }
    });
  }
}
