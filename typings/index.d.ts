/// <reference path="./types/index.d.ts" />
import { SubscriberCallback } from '../miniprogram/base/controller/base_app';

interface IAppOption<T> {
  $globalData: T;
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback;
  // 全局属性订阅
  addSubscriber(key: keyof T, callback: SubscriberCallback): void;
  cancelSubscriber(key: keyof T, callback: SubscriberCallback): void;
  // 消息相关
  emit(eventName: string, params?: any): void;
  on(eventName: string, callback: (params?: any) => void): void;
  remove(eventName: string, callback: (params?: any) => void): void;
}

export type AppOption<T> = IAppOption<T> &
  {
    [key in keyof T]: any;
  };
