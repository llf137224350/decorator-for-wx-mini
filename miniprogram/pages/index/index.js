"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
var base_controller_1 = require("../../base/controller/base_controller");
var page_1 = require("../../base/decorator/page");
var IndexController = (function (_super) {
    __extends(IndexController, _super);
    function IndexController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userInfo = {};
        return _this;
    }
    IndexController.prototype.onGetUserInfoHandle = function (e) {
        if (e.detail.errMsg === 'getUserInfo:ok') {
            this.userInfo = e.detail.userInfo;
        }
    };
    __decorate([
        page_1.Data
    ], IndexController.prototype, "userInfo", void 0);
    IndexController = __decorate([
        page_1.Controller
    ], IndexController);
    return IndexController;
}(base_controller_1.BaseController));
exports.IndexController = IndexController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXVFO0FBQ3ZFLGtEQUE2RDtBQUc3RDtJQUFxQyxtQ0FBYztJQUFuRDtRQUFBLHFFQVNDO1FBUFEsY0FBUSxHQUFRLEVBQUUsQ0FBQzs7SUFPNUIsQ0FBQztJQUxRLDZDQUFtQixHQUExQixVQUEyQixDQUFNO1FBQy9CLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssZ0JBQWdCLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNuQztJQUNILENBQUM7SUFORDtRQURDLFdBQUk7cURBQ3FCO0lBRmYsZUFBZTtRQUQzQixpQkFBVTtPQUNFLGVBQWUsQ0FTM0I7SUFBRCxzQkFBQztDQUFBLEFBVEQsQ0FBcUMsZ0NBQWMsR0FTbEQ7QUFUWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vYmFzZS9jb250cm9sbGVyL2Jhc2VfY29udHJvbGxlcic7XG5pbXBvcnQgeyBDb250cm9sbGVyLCBEYXRhIH0gZnJvbSAnLi4vLi4vYmFzZS9kZWNvcmF0b3IvcGFnZSc7XG5cbkBDb250cm9sbGVyXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICBARGF0YVxuICBwdWJsaWMgdXNlckluZm86IGFueSA9IHt9O1xuXG4gIHB1YmxpYyBvbkdldFVzZXJJbmZvSGFuZGxlKGU6IGFueSkge1xuICAgIGlmIChlLmRldGFpbC5lcnJNc2cgPT09ICdnZXRVc2VySW5mbzpvaycpIHtcbiAgICAgIHRoaXMudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mbztcbiAgICB9XG4gIH1cbn1cbiJdfQ==