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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBcUU7QUFDckUsNERBQXdGO0FBZ0J4RjtJQUF3Qyw4QkFBMkI7SUFBbkU7UUFBQSxxRUFjQztRQVpRLFVBQUksR0FBRyxNQUFNLENBQUM7UUFFZCxTQUFHLEdBQUcsRUFBRSxDQUFDO1FBRVQsVUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O0lBUTFCLENBQUM7SUFOUSwrQkFBVSxHQUFqQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNNLGdDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQVhEO1FBREMsZ0JBQUk7NENBQ2dCO0lBRXJCO1FBREMsZ0JBQUk7MkNBQ1c7SUFFaEI7UUFEQywyQkFBZTs0Q0FDUTtJQU5MLFVBQVU7UUFEOUIscUJBQVM7T0FDVyxVQUFVLENBYzlCO0lBQUQsaUJBQUM7Q0FBQSxBQWRELENBQXdDLDhCQUFhLEdBY3BEO2tCQWRvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvY29udHJvbGxlci9iYXNlX2NvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERhdGEsIEV4dGVybmFsQ2xhc3NlcywgUHJvcCB9IGZyb20gJy4uLy4uL2Jhc2UvZGVjb3JhdG9yL2NvbXBvbmVudCc7XG4vKlxuICogQEF1dGhvcjog44GEIOeLguWllOeahOicl+eJm1xuICogQERhdGU6IDIwMjEtMDUtMDUgMjM6Mzg6MThcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTIgMTI6MzM6NDhcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuXG5pbnRlcmZhY2UgSVByb3Age1xuICBuYW1lOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgSURhdGEge1xuICBhZ2U6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG9Xb3JsZCBleHRlbmRzIEJhc2VDb21wb25lbnQ8SVByb3AsIElEYXRhPiBpbXBsZW1lbnRzIElQcm9wLCBJRGF0YSB7XG4gIEBQcm9wXG4gIHB1YmxpYyBuYW1lID0gJ+WujOe+juS4lueVjCc7XG4gIEBEYXRhXG4gIHB1YmxpYyBhZ2UgPSAxODtcbiAgQEV4dGVybmFsQ2xhc3Nlc1xuICBwdWJsaWMgdGVzdCA9IFsnaGVsbG8nXTtcblxuICBwdWJsaWMgaGFuZGxlVGVzdCgpIHtcbiAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICB9XG4gIHB1YmxpYyBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLmFnZSA9ICsrdGhpcy5hZ2U7XG4gIH1cbn1cbiJdfQ==