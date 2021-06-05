"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
exports.Application = void 0;
var base_app_1 = require("./base/controller/base_app");
var Application = (function (_super) {
    __extends(Application, _super);
    function Application() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Application.prototype.initGlobalData = function () {
        return {};
    };
    Application = __decorate([
        App
    ], Application);
    return Application;
}(base_app_1.BaseApp));
exports.Application = Application;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFtRDtBQVFuRDtJQUFpQywrQkFBbUI7SUFBcEQ7O0lBS0EsQ0FBQztJQUhRLG9DQUFjLEdBQXJCO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBSlUsV0FBVztRQUR2QixHQUFHO09BQ1MsV0FBVyxDQUt2QjtJQUFELGtCQUFDO0NBQUEsQUFMRCxDQUFpQyxrQkFBTyxHQUt2QztBQUxZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlQXBwfSBmcm9tIFwiLi9iYXNlL2NvbnRyb2xsZXIvYmFzZV9hcHBcIjtcblxuLy8gYXBwIGdsb2JhbERhdGHmlbDmja7nsbvlnovlrprkuYlcbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsRGF0YSB7XG5cbn1cblxuQEFwcFxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIGV4dGVuZHMgQmFzZUFwcDxHbG9iYWxEYXRhPiB7XG4gIC8vIGdsb2JhbERhdGFcbiAgcHVibGljIGluaXRHbG9iYWxEYXRhKCk6IEdsb2JhbERhdGEge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuIl19