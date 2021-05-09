"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUpdate = exports.go = exports.compareVersion = exports.hideLoading = exports.showLoading = exports.alert = exports.showToast = exports.haveAuth = exports.getSetting = exports.getMenuButtonBoundingClientRect = exports.wxApi2Promise = void 0;
var constant_1 = require("../common/ts/constant");
function wxApi2Promise(target, params) {
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, rejest) {
        params['success'] = function (res) {
            resolve(res);
        };
        params['fail'] = function (error) {
            rejest(error);
        };
        target(params);
    });
}
exports.wxApi2Promise = wxApi2Promise;
function getMenuButtonBoundingClientRect() {
    var systemInfo = wx.getSystemInfoSync();
    var rect = {};
    try {
        rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
        if (rect === null || !rect.width) {
            throw new Error('getMenuButtonBoundingClientRect error');
        }
    }
    catch (error) {
        var gap = void 0;
        var width = 96;
        if (systemInfo.platform === 'android') {
            gap = 8;
            width = 96;
        }
        else if (systemInfo.platform === 'devtools') {
            if (systemInfo.model.indexOf('iPhone') !== -1) {
                gap = 5.5;
            }
            else {
                gap = 7.5;
            }
        }
        else {
            gap = 4;
            width = 88;
        }
        if (!systemInfo.statusBarHeight) {
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
exports.getMenuButtonBoundingClientRect = getMenuButtonBoundingClientRect;
function getSetting() {
    return wxApi2Promise(wx.getSetting);
}
exports.getSetting = getSetting;
function haveAuth(scope) {
    return __awaiter(this, void 0, void 0, function () {
        var haveAuth, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    haveAuth = false;
                    return [4, getSetting()];
                case 1:
                    res = _a.sent();
                    if (res.errMsg === 'getSetting:ok' && res.authSetting) {
                        if (res.authSetting[scope] === true) {
                            haveAuth = true;
                        }
                    }
                    return [2, haveAuth];
            }
        });
    });
}
exports.haveAuth = haveAuth;
function showToast(content) {
    setTimeout(function () {
        wx.showToast({
            title: content,
            icon: 'none',
            duration: 2000
        });
    }, 100);
}
exports.showToast = showToast;
function alert(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.title, title = _c === void 0 ? '提示' : _c, _d = _b.content, content = _d === void 0 ? '描述信息' : _d, _e = _b.showCancel, showCancel = _e === void 0 ? false : _e, _f = _b.confirmText, confirmText = _f === void 0 ? '我知道了' : _f, _g = _b.cancelText, cancelText = _g === void 0 ? '取消' : _g, _h = _b.confirmColor, confirmColor = _h === void 0 ? '#FF754D' : _h, _j = _b.cancelColor, cancelColor = _j === void 0 ? '#99999D' : _j, _k = _b.confirm, confirm = _k === void 0 ? function () { } : _k, _l = _b.cancel, cancel = _l === void 0 ? function () { } : _l;
    wx.showModal({
        title: title,
        content: content,
        showCancel: showCancel,
        confirmText: confirmText,
        cancelText: cancelText,
        confirmColor: confirmColor,
        cancelColor: cancelColor,
        success: function (res) {
            if (res.confirm) {
                confirm();
            }
            else if (res.cancel) {
                cancel();
            }
        }
    });
}
exports.alert = alert;
function showLoading(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.title, title = _c === void 0 ? '加载中...' : _c, _d = _b.mask, mask = _d === void 0 ? true : _d;
    wx.showLoading({
        title: title,
        mask: mask
    });
}
exports.showLoading = showLoading;
function hideLoading() {
    wx.hideLoading();
}
exports.hideLoading = hideLoading;
function compareVersion(currentVersion, targetVersion) {
    var v1 = currentVersion.split('.');
    var v2 = targetVersion.split('.');
    var len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
        v1.push('0');
    }
    while (v2.length < len) {
        v2.push('0');
    }
    for (var i = 0; i < len; i++) {
        var num1 = parseInt(v1[i], 10);
        var num2 = parseInt(v2[i], 10);
        if (num1 > num2) {
            return 1;
        }
        else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
}
exports.compareVersion = compareVersion;
function go(url, navigateType, delta) {
    if (url === void 0) { url = ''; }
    if (navigateType === void 0) { navigateType = constant_1.Constant.LOGIN_JUMP_NAVIGATE_TO; }
    if (delta === void 0) { delta = 1; }
    switch (navigateType) {
        case constant_1.Constant.LOGIN_JUMP_REDIRECT_TO:
            wx.redirectTo({
                url: url
            });
            break;
        case constant_1.Constant.LOGIN_JUMP_RELAUNCH:
            wx.reLaunch({
                url: url
            });
            break;
        case constant_1.Constant.LOGIN_JUMP_SWITCHTAB:
            wx.switchTab({
                url: url
            });
            break;
        case constant_1.Constant.LOGIN_JUMP_NAVIGATE_BACK:
            wx.navigateBack({
                delta: delta
            });
            break;
        default:
            wx.navigateTo({
                url: url
            });
            break;
    }
}
exports.go = go;
function checkUpdate() {
    if (!wx.canIUse('getUpdateManager')) {
        return;
    }
    var updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
            updateManager.onUpdateReady(function () {
                alert({
                    title: '更新提示',
                    content: '新版本已经准备好，是否重启应用？',
                    confirmText: '重启',
                    confirm: function () {
                        updateManager.applyUpdate();
                    }
                });
            });
        }
    });
}
exports.checkUpdate = checkUpdate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3hfaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid3hfaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLGtEQUFpRDtBQUVqRCxTQUFnQixhQUFhLENBQUMsTUFBZ0IsRUFBRSxNQUFnQjtJQUFoQix1QkFBQSxFQUFBLFdBQWdCO0lBQzlELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBQyxHQUFRO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxVQUFDLEtBQVU7WUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFWRCxzQ0FVQztBQU9ELFNBQWdCLCtCQUErQjtJQUM3QyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMxQyxJQUFJLElBQUksR0FBUSxFQUFFLENBQUM7SUFDbkIsSUFBSTtRQUNGLElBQUksR0FBRyxFQUFFLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDeEYsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUVoQyxNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDMUQ7S0FDRjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxHQUFHLFNBQUssQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElB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Q0osQ0FBQyxDQUFDO1lBQ0gsTUFBTTtRQUNSLEtBQUssbUJBQVEsQ0FBQyx3QkFBd0I7WUFDcEMsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFLLE9BQUE7YUFDTixDQUFDLENBQUM7WUFDSCxNQUFNO1FBQ1I7WUFDRSxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsS0FBQTthQUNKLENBQUMsQ0FBQztZQUNILE1BQU07S0FDVDtBQUNILENBQUM7QUE1QkQsZ0JBNEJDO0FBS0QsU0FBZ0IsV0FBVztJQUN6QixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1FBQ25DLE9BQU87S0FDUjtJQUNELElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFDLEdBQUc7UUFFakMsSUFBSSxHQUFHLENBQUMsU0FBUyxFQUFFO1lBRWpCLGFBQWEsQ0FBQyxhQUFhLENBQUM7Z0JBQzFCLEtBQUssQ0FBQztvQkFDSixLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixXQUFXLEVBQUUsSUFBSTtvQkFDakIsT0FBTyxFQUFFO3dCQUVQLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDOUIsQ0FBQztpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBdEJELGtDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5b6u5L+hYXBp5Zue6LCD5b2i5byP6L2s5Li6cHJvbWlzZeiwg+eUqOW9ouW8j2lcbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSBwYXJhbXNcbiAqL1xuaW1wb3J0IFNob3dNb2RhbFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCA9IFdlY2hhdE1pbmlwcm9ncmFtLlNob3dNb2RhbFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdDtcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSAnLi4vY29tbW9uL3RzL2NvbnN0YW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIHd4QXBpMlByb21pc2UodGFyZ2V0OiBGdW5jdGlvbiwgcGFyYW1zOiBhbnkgPSB7fSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVzdCkgPT4ge1xuICAgIHBhcmFtc1snc3VjY2VzcyddID0gKHJlczogYW55KSA9PiB7XG4gICAgICByZXNvbHZlKHJlcyk7XG4gICAgfTtcbiAgICBwYXJhbXNbJ2ZhaWwnXSA9IChlcnJvcjogYW55KSA9PiB7XG4gICAgICByZWplc3QoZXJyb3IpO1xuICAgIH07XG4gICAgdGFyZ2V0KHBhcmFtcyk7XG4gIH0pO1xufVxuXG4vKlxuICogQEF1dGhvcjog44GEIOeLguWllOeahOicl+eJm1xuICogQERhdGU6IDIwMjAtMDYtMDEgMTc6MzQ6NTBcbiAqIEBEZXNjcmlwdGlvbjog6I635Y+W6IO25ZuK5oyJ6ZKu5L2N572u77yM55u45a+55bem5LiKXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCkge1xuICBjb25zdCBzeXN0ZW1JbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgbGV0IHJlY3Q6IGFueSA9IHt9O1xuICB0cnkge1xuICAgIHJlY3QgPSB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0ID8gd3guZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcbiAgICBpZiAocmVjdCA9PT0gbnVsbCB8fCAhcmVjdC53aWR0aCkge1xuICAgICAgLy8g5Y+W5YC85Li6MOeahOaDheWGtVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0IGVycm9yJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxldCBnYXA6IGFueTsgLy8g6IO25ZuK5oyJ6ZKu5LiK5LiL6Ze06LedIOS9v+WvvOiIquWGheWuueWxheS4rVxuICAgIGxldCB3aWR0aCA9IDk2OyAvLyDog7blm4rnmoTlrr3luqbvvIxhbmRyb2lk5aSn6YOo5YiGOTbvvIxpb3PkuLo4OFxuICAgIGlmIChzeXN0ZW1JbmZvLnBsYXRmb3JtID09PSAnYW5kcm9pZCcpIHtcbiAgICAgIGdhcCA9IDg7XG4gICAgICB3aWR0aCA9IDk2O1xuICAgIH0gZWxzZSBpZiAoc3lzdGVtSW5mby5wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xuICAgICAgaWYgKHN5c3RlbUluZm8ubW9kZWwuaW5kZXhPZignaVBob25lJykgIT09IC0xKSB7XG4gICAgICAgIGdhcCA9IDUuNTsgLy8g5byA5Y+R5bel5YW35LitaW9z5omL5py6XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYXAgPSA3LjU7IC8vIOW8gOWPkeW3peWFt+S4rWFuZHJvaWTlkozlhbbku5bmiYvmnLpcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZ2FwID0gNDtcbiAgICAgIHdpZHRoID0gODg7XG4gICAgfVxuICAgIGlmICghc3lzdGVtSW5mby5zdGF0dXNCYXJIZWlnaHQpIHtcbiAgICAgIC8vIOW8gOWQr3dpZmnnmoTmg4XlhrXkuIvkv67lpI1zdGF0dXNCYXJIZWlnaHTlgLzojrflj5bkuI3liLBcbiAgICAgIHN5c3RlbUluZm8uc3RhdHVzQmFySGVpZ2h0ID0gc3lzdGVtSW5mby5zY3JlZW5IZWlnaHQgLSBzeXN0ZW1JbmZvLndpbmRvd0hlaWdodCAtIDIwO1xuICAgIH1cbiAgICByZWN0ID0ge1xuICAgICAgbGVmdDogc3lzdGVtSW5mby53aW5kb3dXaWR0aCAtIHdpZHRoIC0gMTAsXG4gICAgICB0b3A6IHN5c3RlbUluZm8uc3RhdHVzQmFySGVpZ2h0ICsgZ2FwLFxuICAgICAgcmlnaHQ6IHN5c3RlbUluZm8ud2luZG93V2lkdGggLSAxMCxcbiAgICAgIGJvdHRvbTogc3lzdGVtSW5mby5zdGF0dXNCYXJIZWlnaHQgKyBnYXAgKyAzMixcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogMzJcbiAgICB9O1xuICB9XG4gIHJldHVybiByZWN0O1xufVxuXG4vKipcbiAqIOaJk+W8gOW+ruS/oeWwj+eoi+W6j+iuvue9rueVjOmdolxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0dGluZygpIHtcbiAgcmV0dXJuIHd4QXBpMlByb21pc2Uod3guZ2V0U2V0dGluZyk7XG59XG5cbi8qKlxuICog5Yik5pat55So5oi35piv5ZCm6L+b6KGM5o6I5p2DXG4gKiBAcGFyYW0gc2NvcGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhdmVBdXRoKHNjb3BlOiBzdHJpbmcpIHtcbiAgbGV0IGhhdmVBdXRoID0gZmFsc2U7XG4gIGNvbnN0IHJlczogYW55ID0gYXdhaXQgZ2V0U2V0dGluZygpO1xuICBpZiAocmVzLmVyck1zZyA9PT0gJ2dldFNldHRpbmc6b2snICYmIHJlcy5hdXRoU2V0dGluZykge1xuICAgIGlmIChyZXMuYXV0aFNldHRpbmdbc2NvcGVdID09PSB0cnVlKSB7XG4gICAgICBoYXZlQXV0aCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBoYXZlQXV0aDtcbn1cblxuLyoqXG4gKiAg5by55Ye65ZCQ5Y+45o+Q56S6IOS4jeW4pmljb25cbiAqIEBwYXJhbSBjb250ZW50IOaPkOekuuWGheWuuVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RvYXN0KGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6IGNvbnRlbnQsXG4gICAgICBpY29uOiAnbm9uZScsXG4gICAgICBkdXJhdGlvbjogMjAwMFxuICAgIH0pO1xuICB9LCAxMDApO1xufVxuXG4vKipcbiAqIGFsZXJ05by556qXXG4gKiBAcGFyYW0gcGFyYW0wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGVydCh7IHRpdGxlID0gJ+aPkOekuicsIGNvbnRlbnQgPSAn5o+P6L+w5L+h5oGvJywgc2hvd0NhbmNlbCA9IGZhbHNlLCBjb25maXJtVGV4dCA9ICfmiJHnn6XpgZPkuoYnLCBjYW5jZWxUZXh0ID0gJ+WPlua2iCcsIGNvbmZpcm1Db2xvciA9ICcjRkY3NTREJywgY2FuY2VsQ29sb3IgPSAnIzk5OTk5RCcsIGNvbmZpcm0gPSAoKSA9PiB7fSwgY2FuY2VsID0gKCkgPT4ge30gfSA9IHt9KSB7XG4gIHd4LnNob3dNb2RhbCh7XG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgc2hvd0NhbmNlbDogc2hvd0NhbmNlbCxcbiAgICBjb25maXJtVGV4dDogY29uZmlybVRleHQsXG4gICAgY2FuY2VsVGV4dDogY2FuY2VsVGV4dCxcbiAgICBjb25maXJtQ29sb3I6IGNvbmZpcm1Db2xvcixcbiAgICBjYW5jZWxDb2xvcjogY2FuY2VsQ29sb3IsXG4gICAgc3VjY2VzcyhyZXM6IFNob3dNb2RhbFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkge1xuICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgIGNvbmZpcm0oKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIOi/m+W6puaPkOekuuWKqOeUu1xuICogQHBhcmFtIHBhcmFtMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvYWRpbmcoeyB0aXRsZSA9ICfliqDovb3kuK0uLi4nLCBtYXNrID0gdHJ1ZSB9ID0ge30pIHtcbiAgd3guc2hvd0xvYWRpbmcoe1xuICAgIHRpdGxlOiB0aXRsZSxcbiAgICBtYXNrOiBtYXNrXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUxvYWRpbmcoKSB7XG4gIHd4LmhpZGVMb2FkaW5nKCk7XG59XG5cbi8qKlxuICog5q+U6L6D5b6u5L+h5Z+656GA5bqT54mI5pysXG4gKiBAcGFyYW0gY3VycmVudFZlcnNpb24g5b2T5YmN54mI5pysXG4gKiBAcGFyYW0gdGFyZ2V0VmVyc2lvbiDnm67moIfniYjmnKxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uKGN1cnJlbnRWZXJzaW9uOiBzdHJpbmcsIHRhcmdldFZlcnNpb246IHN0cmluZykge1xuICBjb25zdCB2MSA9IGN1cnJlbnRWZXJzaW9uLnNwbGl0KCcuJyk7XG4gIGNvbnN0IHYyID0gdGFyZ2V0VmVyc2lvbi5zcGxpdCgnLicpO1xuICBjb25zdCBsZW4gPSBNYXRoLm1heCh2MS5sZW5ndGgsIHYyLmxlbmd0aCk7XG5cbiAgd2hpbGUgKHYxLmxlbmd0aCA8IGxlbikge1xuICAgIHYxLnB1c2goJzAnKTtcbiAgfVxuICB3aGlsZSAodjIubGVuZ3RoIDwgbGVuKSB7XG4gICAgdjIucHVzaCgnMCcpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBudW0xID0gcGFyc2VJbnQodjFbaV0sIDEwKTtcbiAgICBjb25zdCBudW0yID0gcGFyc2VJbnQodjJbaV0sIDEwKTtcbiAgICBpZiAobnVtMSA+IG51bTIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAobnVtMSA8IG51bTIpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbi8qKlxuICog6aG16Z2i6Lez6L2sXG4gKiBAcGFyYW0gdXJsXG4gKiBAcGFyYW0gbmF2aWdhdGVUeXBlXG4gKiBAcGFyYW0gZGVsdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdvKHVybDogc3RyaW5nID0gJycsIG5hdmlnYXRlVHlwZTogc3RyaW5nID0gQ29uc3RhbnQuTE9HSU5fSlVNUF9OQVZJR0FURV9UTywgZGVsdGE6IG51bWJlciA9IDEpIHtcbiAgc3dpdGNoIChuYXZpZ2F0ZVR5cGUpIHtcbiAgICBjYXNlIENvbnN0YW50LkxPR0lOX0pVTVBfUkVESVJFQ1RfVE86XG4gICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgdXJsXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ29uc3RhbnQuTE9HSU5fSlVNUF9SRUxBVU5DSDpcbiAgICAgIHd4LnJlTGF1bmNoKHtcbiAgICAgICAgdXJsXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ29uc3RhbnQuTE9HSU5fSlVNUF9TV0lUQ0hUQUI6XG4gICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICB1cmxcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDb25zdGFudC5MT0dJTl9KVU1QX05BVklHQVRFX0JBQ0s6XG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICBkZWx0YVxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybFxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG4vKipcbiAqIOajgOafpeabtOaWsFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tVcGRhdGUoKSB7XG4gIGlmICghd3guY2FuSVVzZSgnZ2V0VXBkYXRlTWFuYWdlcicpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHVwZGF0ZU1hbmFnZXIgPSB3eC5nZXRVcGRhdGVNYW5hZ2VyKCk7XG4gIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZSgocmVzKSA9PiB7XG4gICAgLy8g5pyJ5pu05pawXG4gICAgaWYgKHJlcy5oYXNVcGRhdGUpIHtcbiAgICAgIC8vIOS4i+i9veWlveWQjuWbnuiwg1xuICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KCgpID0+IHtcbiAgICAgICAgYWxlcnQoe1xuICAgICAgICAgIHRpdGxlOiAn5pu05paw5o+Q56S6JyxcbiAgICAgICAgICBjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5piv5ZCm6YeN5ZCv5bqU55So77yfJyxcbiAgICAgICAgICBjb25maXJtVGV4dDogJ+mHjeWQrycsXG4gICAgICAgICAgY29uZmlybTogKCkgPT4ge1xuICAgICAgICAgICAgLy8g5paw55qE54mI5pys5bey57uP5LiL6L295aW977yM6LCD55SoIGFwcGx5VXBkYXRlIOW6lOeUqOaWsOeJiOacrOW5tumHjeWQr1xuICAgICAgICAgICAgdXBkYXRlTWFuYWdlci5hcHBseVVwZGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuIl19