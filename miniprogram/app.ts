import { App } from './base/decorator/app';

@App
export class BaseApp implements IAppOption {
  public globalData = {};
}
