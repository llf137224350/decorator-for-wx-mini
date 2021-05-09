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
var base_controller_1 = require("../../base/controller/base_controller");
var page_1 = require("../../base/decorator/page");
var Index = (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'hello world';
        return _this;
    }
    __decorate([
        page_1.Data
    ], Index.prototype, "name", void 0);
    Index = __decorate([
        page_1.Controller
    ], Index);
    return Index;
}(base_controller_1.BaseController));
exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBdUU7QUFDdkUsa0RBQTZEO0FBUTdEO0lBQW1DLHlCQUFjO0lBQWpEO1FBQUEscUVBR0M7UUFEUSxVQUFJLEdBQVcsYUFBYSxDQUFDOztJQUN0QyxDQUFDO0lBREM7UUFEQyxXQUFJO3VDQUMrQjtJQUZqQixLQUFLO1FBRHpCLGlCQUFVO09BQ1UsS0FBSyxDQUd6QjtJQUFELFlBQUM7Q0FBQSxBQUhELENBQW1DLGdDQUFjLEdBR2hEO2tCQUhvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9iYXNlL2NvbnRyb2xsZXIvYmFzZV9jb250cm9sbGVyJztcbmltcG9ydCB7IENvbnRyb2xsZXIsIERhdGEgfSBmcm9tICcuLi8uLi9iYXNlL2RlY29yYXRvci9wYWdlJztcbi8qXG4gKiBAQXV0aG9yOiDjgYQg54uC5aWU55qE6JyX54mbXG4gKiBARGF0ZTogMjAyMS0wNS0wOSAxNzozMjozNlxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0wOSAxNzozNToxNFxuICogQERlc2NyaXB0aW9uOlxuICovXG5AQ29udHJvbGxlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIEBEYXRhXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnaGVsbG8gd29ybGQnO1xufVxuIl19