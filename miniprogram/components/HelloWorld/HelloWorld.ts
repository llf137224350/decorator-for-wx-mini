import { BaseComponent } from '../../base/controller/base_component';
import { Component, Data, ExternalClasses, Lifetimes, Method, Observers, Prop } from '../../base/decorator/component';
/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2021-05-05 23:38:18
 * @LastEditTime: 2021-05-11 16:58:57
 * @Description:
 */

interface IProp {
  name: string;
  myBehaviorProperty: string;
}
interface IData {
  age: number;
}
@Component
export default class HelloWorld extends BaseComponent<IProp, IData> {
  @Prop
  public name = '完美世界';
  @Data
  public age = 18;
  @ExternalClasses
  public test = ['hello'];

  @Method
  public handleClick() {
    console.log(this.properties?.name);
    console.log(this.data?.age);
    this.setData({
      age: ++this.data!.age
    });
  }

  @Lifetimes
  public attached() {
    console.log('hello');

  }

  @Observers('age')
  public obAge(age: number) {
    console.log(age);
  }
}
