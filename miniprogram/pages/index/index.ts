// index.ts
// 获取应用实例
import BaseController from "../../dist/controller/base_controller";
import {Controller, Data} from "../../dist/decorator/page";

@Controller
export class IndexController extends BaseController {
    @Data
    public count: number = 0;

    public onClickHandle() {
        this.count += 1;
    }
}


