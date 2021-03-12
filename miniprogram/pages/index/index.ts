import { BaseController } from '../../base/controller/base_controller';
import { Controller, Data } from '../../base/decorator/page';

@Controller
export class IndexController extends BaseController {
  @Data
  public count: number = 0;

  public onLoad() {
    super.onLoad();
  }

  public onClickHandle() {
    this.count += 1;
  }
}
