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
    __decorate([
        component_1.Method
    ], HelloWorld.prototype, "handleClick", null);
    HelloWorld = __decorate([
        component_1.Component
    ], HelloWorld);
    return HelloWorld;
}(base_component_1.BaseComponent));
exports.default = HelloWorld;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQXFFO0FBQ3JFLDREQUFnRztBQWdCaEc7SUFBd0MsOEJBQTJCO0lBQW5FO1FBQUEscUVBV0M7UUFUUSxVQUFJLEdBQUcsTUFBTSxDQUFDO1FBRWQsU0FBRyxHQUFHLEVBQUUsQ0FBQztRQUVULFVBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztJQUsxQixDQUFDO0lBSFEsZ0NBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBUkQ7UUFEQyxnQkFBSTs0Q0FDZ0I7SUFFckI7UUFEQyxnQkFBSTsyQ0FDVztJQUVoQjtRQURDLDJCQUFlOzRDQUNRO0lBRXhCO1FBREMsa0JBQU07aURBR047SUFWa0IsVUFBVTtRQUQ5QixxQkFBUztPQUNXLFVBQVUsQ0FXOUI7SUFBRCxpQkFBQztDQUFBLEFBWEQsQ0FBd0MsOEJBQWEsR0FXcEQ7a0JBWG9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9jb250cm9sbGVyL2Jhc2VfY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGF0YSwgRXh0ZXJuYWxDbGFzc2VzLCBNZXRob2QsIFByb3AgfSBmcm9tICcuLi8uLi9iYXNlL2RlY29yYXRvci9jb21wb25lbnQnO1xuLypcbiAqIEBBdXRob3I6IOOBhCDni4LlpZTnmoTonJfniZtcbiAqIEBEYXRlOiAyMDIxLTA1LTA1IDIzOjM4OjE4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTEyIDEwOjU0OjU2XG4gKiBARGVzY3JpcHRpb246XG4gKi9cblxuaW50ZXJmYWNlIElQcm9wIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuaW50ZXJmYWNlIElEYXRhIHtcbiAgYWdlOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvV29ybGQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50PElQcm9wLCBJRGF0YT4gaW1wbGVtZW50cyBJUHJvcCwgSURhdGEge1xuICBAUHJvcFxuICBwdWJsaWMgbmFtZSA9ICflroznvo7kuJbnlYwnO1xuICBARGF0YVxuICBwdWJsaWMgYWdlID0gMTg7XG4gIEBFeHRlcm5hbENsYXNzZXNcbiAgcHVibGljIHRlc3QgPSBbJ2hlbGxvJ107XG4gIEBNZXRob2RcbiAgcHVibGljIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuYWdlID0gKyt0aGlzLmFnZTtcbiAgfVxufVxuIl19