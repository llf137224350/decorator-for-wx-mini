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
    HelloWorld.prototype.handleClick = function () {
        var _a, _b;
        console.log((_a = this.properties) === null || _a === void 0 ? void 0 : _a.name);
        console.log((_b = this.data) === null || _b === void 0 ? void 0 : _b.age);
        this.setData({
            age: ++this.data.age
        });
    };
    HelloWorld.prototype.attached = function () {
        console.log('hello');
    };
    HelloWorld.prototype.obAge = function (age) {
        console.log(age);
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
    __decorate([
        component_1.Method
    ], HelloWorld.prototype, "handleClick", null);
    __decorate([
        component_1.Lifetimes
    ], HelloWorld.prototype, "attached", null);
    __decorate([
        component_1.Observers('age')
    ], HelloWorld.prototype, "obAge", null);
    HelloWorld = __decorate([
        component_1.Component
    ], HelloWorld);
    return HelloWorld;
}(base_component_1.BaseComponent));
exports.default = HelloWorld;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQXFFO0FBQ3JFLDREQUFzSDtBQWV0SDtJQUF3Qyw4QkFBMkI7SUFBbkU7UUFBQSxxRUEwQkM7UUF4QlEsVUFBSSxHQUFHLE1BQU0sQ0FBQztRQUVkLFNBQUcsR0FBRyxFQUFFLENBQUM7UUFFVCxVQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7SUFvQjFCLENBQUM7SUFqQlEsZ0NBQVcsR0FBbEI7O1FBQ0UsT0FBTyxDQUFDLEdBQUcsT0FBQyxJQUFJLENBQUMsVUFBVSwwQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxPQUFDLElBQUksQ0FBQyxJQUFJLDBDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSyxDQUFDLEdBQUc7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdNLDZCQUFRLEdBQWY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFHTSwwQkFBSyxHQUFaLFVBQWEsR0FBVztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUF2QkQ7UUFEQyxnQkFBSTs0Q0FDZ0I7SUFFckI7UUFEQyxnQkFBSTsyQ0FDVztJQUVoQjtRQURDLDJCQUFlOzRDQUNRO0lBR3hCO1FBREMsa0JBQU07aURBT047SUFHRDtRQURDLHFCQUFTOzhDQUdUO0lBR0Q7UUFEQyxxQkFBUyxDQUFDLEtBQUssQ0FBQzsyQ0FHaEI7SUF6QmtCLFVBQVU7UUFEOUIscUJBQVM7T0FDVyxVQUFVLENBMEI5QjtJQUFELGlCQUFDO0NBQUEsQUExQkQsQ0FBd0MsOEJBQWEsR0EwQnBEO2tCQTFCb0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2NvbnRyb2xsZXIvYmFzZV9jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEYXRhLCBFeHRlcm5hbENsYXNzZXMsIExpZmV0aW1lcywgTWV0aG9kLCBPYnNlcnZlcnMsIFByb3AgfSBmcm9tICcuLi8uLi9iYXNlL2RlY29yYXRvci9jb21wb25lbnQnO1xuLypcbiAqIEBBdXRob3I6IOOBhCDni4LlpZTnmoTonJfniZtcbiAqIEBEYXRlOiAyMDIxLTA1LTA1IDIzOjM4OjE4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTA5IDIwOjM0OjAzXG4gKiBARGVzY3JpcHRpb246XG4gKi9cblxuaW50ZXJmYWNlIElQcm9wIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuaW50ZXJmYWNlIElEYXRhIHtcbiAgYWdlOiBudW1iZXI7XG59XG5AQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgQmFzZUNvbXBvbmVudDxJUHJvcCwgSURhdGE+IHtcbiAgQFByb3BcbiAgcHVibGljIG5hbWUgPSAn5a6M576O5LiW55WMJztcbiAgQERhdGFcbiAgcHVibGljIGFnZSA9IDE4O1xuICBARXh0ZXJuYWxDbGFzc2VzXG4gIHB1YmxpYyB0ZXN0ID0gWydoZWxsbyddO1xuXG4gIEBNZXRob2RcbiAgcHVibGljIGhhbmRsZUNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcGVydGllcz8ubmFtZSk7XG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhPy5hZ2UpO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhZ2U6ICsrdGhpcy5kYXRhIS5hZ2VcbiAgICB9KTtcbiAgfVxuXG4gIEBMaWZldGltZXNcbiAgcHVibGljIGF0dGFjaGVkKCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICB9XG5cbiAgQE9ic2VydmVycygnYWdlJylcbiAgcHVibGljIG9iQWdlKGFnZTogbnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coYWdlKTtcbiAgfVxufVxuIl19