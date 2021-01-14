/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2020-04-29 15:51:38
 * @Description: 装饰器
 */
export function Controller(target: any) {
    Page(new target());
}

export function Data(target: any, key: string) {
    if (!target.data) {
        target['data'] = {};
    }
    target.data[key] = '';
}


