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
        console.log(this.properties.name);
        console.log(this.data.age);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQXFFO0FBQ3JFLDREQUFzSDtBQWdCdEg7SUFBd0MsOEJBQTJCO0lBQW5FO1FBQUEscUVBMEJDO1FBeEJRLFVBQUksR0FBRyxNQUFNLENBQUM7UUFFZCxTQUFHLEdBQUcsRUFBRSxDQUFDO1FBRVQsVUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O0lBb0IxQixDQUFDO0lBakJRLGdDQUFXLEdBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHTSw2QkFBUSxHQUFmO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBR00sMEJBQUssR0FBWixVQUFhLEdBQVc7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBdkJEO1FBREMsZ0JBQUk7NENBQ2dCO0lBRXJCO1FBREMsZ0JBQUk7MkNBQ1c7SUFFaEI7UUFEQywyQkFBZTs0Q0FDUTtJQUd4QjtRQURDLGtCQUFNO2lEQU9OO0lBR0Q7UUFEQyxxQkFBUzs4Q0FHVDtJQUdEO1FBREMscUJBQVMsQ0FBQyxLQUFLLENBQUM7MkNBR2hCO0lBekJrQixVQUFVO1FBRDlCLHFCQUFTO09BQ1csVUFBVSxDQTBCOUI7SUFBRCxpQkFBQztDQUFBLEFBMUJELENBQXdDLDhCQUFhLEdBMEJwRDtrQkExQm9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9jb250cm9sbGVyL2Jhc2VfY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGF0YSwgRXh0ZXJuYWxDbGFzc2VzLCBMaWZldGltZXMsIE1ldGhvZCwgT2JzZXJ2ZXJzLCBQcm9wIH0gZnJvbSAnLi4vLi4vYmFzZS9kZWNvcmF0b3IvY29tcG9uZW50Jztcbi8qXG4gKiBAQXV0aG9yOiDjgYQg54uC5aWU55qE6JyX54mbXG4gKiBARGF0ZTogMjAyMS0wNS0wNSAyMzozODoxOFxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMSAyMzozNjoyMVxuICogQERlc2NyaXB0aW9uOlxuICovXG5cbmludGVyZmFjZSBJUHJvcCB7XG4gIG5hbWU6IHN0cmluZztcbn1cbmludGVyZmFjZSBJRGF0YSB7XG4gIGFnZTogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgQmFzZUNvbXBvbmVudDxJUHJvcCwgSURhdGE+IGltcGxlbWVudHMgSVByb3AsIElEYXRhIHtcbiAgQFByb3BcbiAgcHVibGljIG5hbWUgPSAn5a6M576O5LiW55WMJztcbiAgQERhdGFcbiAgcHVibGljIGFnZSA9IDE4O1xuICBARXh0ZXJuYWxDbGFzc2VzXG4gIHB1YmxpYyB0ZXN0ID0gWydoZWxsbyddO1xuXG4gIEBNZXRob2RcbiAgcHVibGljIGhhbmRsZUNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcGVydGllcy5uYW1lKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuYWdlKTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYWdlOiArK3RoaXMuZGF0YS5hZ2VcbiAgICB9KTtcbiAgfVxuXG4gIEBMaWZldGltZXNcbiAgcHVibGljIGF0dGFjaGVkKCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICB9XG5cbiAgQE9ic2VydmVycygnYWdlJylcbiAgcHVibGljIG9iQWdlKGFnZTogbnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coYWdlKTtcbiAgfVxufVxuIl19