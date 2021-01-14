export default class BaseController {
    // setData
    [x: string]: any;

    public onLoad() {
        this._init();
    }

    public _init() {
        if (!this.data) {
            return;
        }
        const keys = Object.keys(this.data);
        keys.forEach((key: string) => {
            const value = this[key];
            this._reactive(key);
            this[key] = value;
        })
    }

    public _reactive(key: string) {
        Object.defineProperty(this, key, {
            get() {
                return this.data[key];
            },
            set(val: any) {
                this.setData({
                    [key]: val
                });
            }
        })
    }
}

