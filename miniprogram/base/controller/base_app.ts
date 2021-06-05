import { IAppOption } from '../../../typings';
// 监听订阅globalData
export type SubscriberCallback = (newValue: any, oldValue: any) => void;
export interface Subscriber<T> {
  key: keyof T;
  callback: SubscriberCallback;
}
// 全局消息处理
export interface Event {
  eventName: string;
  callback: (params?: any) => void;
}

/**
 * app 基类
 */
export abstract class BaseApp<T> implements IAppOption<T> {
  public $globalData: T = this.initGlobalData();
  // 所有订阅者
  private $subscribers: Subscriber<T>[] = [];
  // 消息总线
  private $events: Event[] = [];
  // globalData全局属性
  public abstract initGlobalData(): T;

  public onLaunch() {
    this._initReactive();
  }

  /**
   * 处理响应式
   */
  public _initReactive() {
    const keys = Object.keys(this.$globalData);
    keys.forEach((key: string) => {
      Object.defineProperty(this, key, {
        get() {
          if (keys.includes(key)) {
            return this.$globalData[key];
          }
          return this[key];
        },
        set(val) {
          if (keys.includes(key)) {
            const oldValue = this.$globalData[key];
            if (oldValue === val) {
              return;
            }
            this.$globalData[key] = val;
            this.dispatch(key, oldValue, val);
          } else {
            this[key] = val;
          }
        }
      });
    });
  }

  /**
   * 添加key的变化订阅
   * @param key 监听的key
   * @param callback 回调
   */
  public addSubscriber(key: keyof T, callback: SubscriberCallback) {
    this.$subscribers.push({ key, callback });
  }

  /**
   * 取消订阅
   * @param key
   * @param callback
   */
  public cancelSubscriber(key: keyof T, callback: SubscriberCallback) {
    const indexs: number[] = [];
    this.$subscribers.forEach((subscriber: Subscriber<T>, index) => {
      if (subscriber.key === key && subscriber.callback === callback) {
        indexs.push(index);
      }
    });
    if (indexs.length) {
      indexs.forEach((index: number) => {
        this.$subscribers.splice(index, 1);
      });
    }
  }

  /**
   * 派发回调
   * @param key key
   * @param oldValue 旧值
   * @param newValue 新值
   */
  public dispatch(key: keyof T, oldValue: unknown, newValue: unknown) {
    const targets = this.$subscribers.filter((subscriber: Subscriber<T>) => {
      return subscriber.key === key;
    });
    if (targets.length) {
      targets.forEach((subscriber: Subscriber<T>) => {
        subscriber.callback(newValue, oldValue);
      });
    }
  }

  /**
   * 监听事件
   * @param eventName
   * @param callback
   */
  public on(eventName: string, callback: (params?: any) => void) {
    let isExist: boolean = false;
    // 判断之前添加的事件是否已经存在，如果已存在，则直接替换，否则新增
    this.$events.forEach((event) => {
      // 事件已经存在，直接替换
      if (event.eventName === eventName) {
        event.eventName = eventName;
        event.callback = callback;
        isExist = true;
      }
    });
    if (!isExist) {
      this.$events.push({
        eventName,
        callback
      });
    }
  }

  /**
   * 取消时间监听
   * @param eventName 事件名字，与emit中派发事件名字一致
   * @param callback 回调行数，需要和on中回调函数为一个函数
   */
  public remove(eventName: string, callback: (params?: any) => void) {
    const index = this.$events.findIndex((e: Event) => e.eventName === eventName && callback === e.callback);
    return !!this.$events.splice(index, 1);
  }

  /**
   * 触发事件
   * @param eventName
   * @param params
   */
  public emit(eventName: string, params?: any) {
    this.$events.forEach((event) => {
      if (eventName === event.eventName) {
        event && event.callback(params);
      }
    });
  }
}
