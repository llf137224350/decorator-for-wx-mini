/**
 * 微信api回调形式转为promise调用形式i
 * @param target
 * @param params
 */
import ShowModalSuccessCallbackResult = WechatMiniprogram.ShowModalSuccessCallbackResult;
import { Constant } from '../common/ts/constant';

export function wxApi2Promise(target: Function, params: any = {}) {
  return new Promise((resolve, rejest) => {
    params['success'] = (res: any) => {
      resolve(res);
    };
    params['fail'] = (error: any) => {
      rejest(error);
    };
    target(params);
  });
}

/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2020-06-01 17:34:50
 * @Description: 获取胶囊按钮位置，相对左上
 */
export function getMenuButtonBoundingClientRect() {
  const systemInfo = wx.getSystemInfoSync();
  let rect: any = {};
  try {
    rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
    if (rect === null || !rect.width) {
      // 取值为0的情况
      throw new Error('getMenuButtonBoundingClientRect error');
    }
  } catch (error) {
    let gap: any; // 胶囊按钮上下间距 使导航内容居中
    let width = 96; // 胶囊的宽度，android大部分96，ios为88
    if (systemInfo.platform === 'android') {
      gap = 8;
      width = 96;
    } else if (systemInfo.platform === 'devtools') {
      if (systemInfo.model.indexOf('iPhone') !== -1) {
        gap = 5.5; // 开发工具中ios手机
      } else {
        gap = 7.5; // 开发工具中android和其他手机
      }
    } else {
      gap = 4;
      width = 88;
    }
    if (!systemInfo.statusBarHeight) {
      // 开启wifi的情况下修复statusBarHeight值获取不到
      systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
    }
    rect = {
      left: systemInfo.windowWidth - width - 10,
      top: systemInfo.statusBarHeight + gap,
      right: systemInfo.windowWidth - 10,
      bottom: systemInfo.statusBarHeight + gap + 32,
      width: width,
      height: 32
    };
  }
  return rect;
}

/**
 * 打开微信小程序设置界面
 */
export function getSetting() {
  return wxApi2Promise(wx.getSetting);
}

/**
 * 判断用户是否进行授权
 * @param scope
 */
export async function haveAuth(scope: string) {
  let haveAuth = false;
  const res: any = await getSetting();
  if (res.errMsg === 'getSetting:ok' && res.authSetting) {
    if (res.authSetting[scope] === true) {
      haveAuth = true;
    }
  }
  return haveAuth;
}

/**
 *  弹出吐司提示 不带icon
 * @param content 提示内容
 */
export function showToast(content: string): void {
  setTimeout(() => {
    wx.showToast({
      title: content,
      icon: 'none',
      duration: 2000
    });
  }, 100);
}

/**
 * alert弹窗
 * @param param0
 */
export function alert({ title = '提示', content = '描述信息', showCancel = false, confirmText = '我知道了', cancelText = '取消', confirmColor = '#FF754D', cancelColor = '#99999D', confirm = () => {}, cancel = () => {} } = {}) {
  wx.showModal({
    title: title,
    content: content,
    showCancel: showCancel,
    confirmText: confirmText,
    cancelText: cancelText,
    confirmColor: confirmColor,
    cancelColor: cancelColor,
    success(res: ShowModalSuccessCallbackResult) {
      if (res.confirm) {
        confirm();
      } else if (res.cancel) {
        cancel();
      }
    }
  });
}

/**
 * 进度提示动画
 * @param param0
 */
export function showLoading({ title = '加载中...', mask = true } = {}) {
  wx.showLoading({
    title: title,
    mask: mask
  });
}

export function hideLoading() {
  wx.hideLoading();
}

/**
 * 比较微信基础库版本
 * @param currentVersion 当前版本
 * @param targetVersion 目标版本
 */
export function compareVersion(currentVersion: string, targetVersion: string) {
  const v1 = currentVersion.split('.');
  const v2 = targetVersion.split('.');
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i], 10);
    const num2 = parseInt(v2[i], 10);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}

/**
 * 页面跳转
 * @param url
 * @param navigateType
 * @param delta
 */
export function go(url: string = '', navigateType: string = Constant.LOGIN_JUMP_NAVIGATE_TO, delta: number = 1) {
  switch (navigateType) {
    case Constant.LOGIN_JUMP_REDIRECT_TO:
      wx.redirectTo({
        url
      });
      break;
    case Constant.LOGIN_JUMP_RELAUNCH:
      wx.reLaunch({
        url
      });
      break;
    case Constant.LOGIN_JUMP_SWITCHTAB:
      wx.switchTab({
        url
      });
      break;
    case Constant.LOGIN_JUMP_NAVIGATE_BACK:
      wx.navigateBack({
        delta
      });
      break;
    default:
      wx.navigateTo({
        url
      });
      break;
  }
}

/**
 * 检查更新
 */
export function checkUpdate() {
  if (!wx.canIUse('getUpdateManager')) {
    return;
  }
  const updateManager = wx.getUpdateManager();
  updateManager.onCheckForUpdate((res) => {
    // 有更新
    if (res.hasUpdate) {
      // 下载好后回调
      updateManager.onUpdateReady(() => {
        alert({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          confirmText: '重启',
          confirm: () => {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
          }
        });
      });
    }
  });
}
