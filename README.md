### 改变微信小程序逻辑代码的书写方式

**以下代码实现一个计数器功能**

````javascript
import BaseController from '../../dist/controller/index';
import {Controller, Data} from '../../dist/decorator/page';

@Controller
export class IndexController extends BaseController {
  @Data
  public count: number = 0;

  public onClickHandle() {
    this.count += 1;
  }
}
````
