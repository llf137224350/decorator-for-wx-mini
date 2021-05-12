import { BaseComponent } from '../../base/controller/base_component';
import { Component, Data, ExternalClasses, Method, Prop } from '../../base/decorator/component';
/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2021-05-05 23:38:18
 * @LastEditTime: 2021-05-12 10:54:56
 * @Description:
 */

interface IProp {
  name: string;
}
interface IData {
  age: number;
}

@Component
export default class HelloWorld extends BaseComponent<IProp, IData> implements IProp, IData {
  @Prop
  public name = '完美世界';
  @Data
  public age = 18;
  @ExternalClasses
  public test = ['hello'];
  @Method
  public handleClick() {
    this.age = ++this.age;
  }
}
