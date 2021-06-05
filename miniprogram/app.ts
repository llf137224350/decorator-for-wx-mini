import {BaseApp} from "./base/controller/base_app";

// app globalData数据类型定义
export interface GlobalData {

}

@App
export class Application extends BaseApp<GlobalData> {
  // globalData
  public initGlobalData(): GlobalData {
    return {};
  }
}
