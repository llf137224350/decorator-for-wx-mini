import { BaseController } from '../../base/controller/base_controller';
import { Controller, Data } from '../../base/decorator/page';

@Controller
export class IndexController extends BaseController {
  @Data
  public userInfo: any = {};

  public onGetUserInfoHandle(e: any) {
    if (e.detail.errMsg === 'getUserInfo:ok') {
      this.userInfo = e.detail.userInfo;
    }
  }
}
