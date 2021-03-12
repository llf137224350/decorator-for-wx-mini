/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2020-04-29 15:51:38
 * @Description: Desc 加锁工具类
 */

export class Lock {
  // 是否锁定 true 为锁定 否则为未锁定
  private locked: boolean = false;
  /**
   * 锁定
   */
  public lock(): void {
    this.locked = true;
  }
  /**
   * 解除锁定
   */
  public unlock(): void {
    this.locked = false;
  }
  /**
   * 是否已锁定
   */
  public isLocked(): boolean {
    return this.locked;
  }
}
