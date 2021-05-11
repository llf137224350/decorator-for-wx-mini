/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2021-05-11 16:11:15
 * @LastEditTime: 2021-05-11 16:11:48
 * @Description:
 */
function AppController(Target: any) {
  const target = new Target();
  App(target);
}
export { AppController as App };
