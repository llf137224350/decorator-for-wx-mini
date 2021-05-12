"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var base_component_1 = require("../../base/controller/base_component");
var component_1 = require("../../base/decorator/component");
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '完美世界';
        _this.age = 18;
        _this.test = ['hello'];
        return _this;
    }
    HelloWorld.prototype.handleTest = function () {
        console.log('test');
    };
    HelloWorld.prototype.handleClick = function () {
        this.age = ++this.age;
    };
    __decorate([
        component_1.Prop
    ], HelloWorld.prototype, "name", void 0);
    __decorate([
        component_1.Data
    ], HelloWorld.prototype, "age", void 0);
    __decorate([
        component_1.ExternalClasses
    ], HelloWorld.prototype, "test", void 0);
    HelloWorld = __decorate([
        component_1.Component
    ], HelloWorld);
    return HelloWorld;
}(base_component_1.BaseComponent));
exports.default = HelloWorld;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQXFFO0FBQ3JFLDREQUF3RjtBQWdCeEY7SUFBd0MsOEJBQTJCO0lBQW5FO1FBQUEscUVBY0M7UUFaUSxVQUFJLEdBQUcsTUFBTSxDQUFDO1FBRWQsU0FBRyxHQUFHLEVBQUUsQ0FBQztRQUVULFVBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztJQVExQixDQUFDO0lBTlEsK0JBQVUsR0FBakI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDTSxnQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFYRDtRQURDLGdCQUFJOzRDQUNnQjtJQUVyQjtRQURDLGdCQUFJOzJDQUNXO0lBRWhCO1FBREMsMkJBQWU7NENBQ1E7SUFOTCxVQUFVO1FBRDlCLHFCQUFTO09BQ1csVUFBVSxDQWM5QjtJQUFELGlCQUFDO0NBQUEsQUFkRCxDQUF3Qyw4QkFBYSxHQWNwRDtrQkFkb0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2NvbnRyb2xsZXIvYmFzZV9jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEYXRhLCBFeHRlcm5hbENsYXNzZXMsIFByb3AgfSBmcm9tICcuLi8uLi9iYXNlL2RlY29yYXRvci9jb21wb25lbnQnO1xuLypcbiAqIEBBdXRob3I6IOOBhCDni4LlpZTnmoTonJfniZtcbiAqIEBEYXRlOiAyMDIxLTA1LTA1IDIzOjM4OjE4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTEyIDEyOjMzOjQ4XG4gKiBARGVzY3JpcHRpb246XG4gKi9cblxuaW50ZXJmYWNlIElQcm9wIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuaW50ZXJmYWNlIElEYXRhIHtcbiAgYWdlOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvV29ybGQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50PElQcm9wLCBJRGF0YT4gaW1wbGVtZW50cyBJUHJvcCwgSURhdGEge1xuICBAUHJvcFxuICBwdWJsaWMgbmFtZSA9ICflroznvo7kuJbnlYwnO1xuICBARGF0YVxuICBwdWJsaWMgYWdlID0gMTg7XG4gIEBFeHRlcm5hbENsYXNzZXNcbiAgcHVibGljIHRlc3QgPSBbJ2hlbGxvJ107XG5cbiAgcHVibGljIGhhbmRsZVRlc3QoKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgfVxuICBwdWJsaWMgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5hZ2UgPSArK3RoaXMuYWdlO1xuICB9XG59XG4iXX0=