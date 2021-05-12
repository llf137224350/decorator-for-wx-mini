import { BaseController } from '../../base/controller/base_controller';
import { Controller, Data } from '../../base/decorator/page';
/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2021-05-09 17:32:36
 * @LastEditTime: 2021-05-12 09:41:59
 * @Description:
 */
@Controller
export default class Index extends BaseController {
  @Data
  public name: string = 'hello world';

  public onLoad() {
    super.onLoad();
    setTimeout(()=>{
      this.name = '你好';
    },1000);
  }
}
