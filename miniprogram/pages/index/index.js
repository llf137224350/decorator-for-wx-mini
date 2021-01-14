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
var base_controller_1 = require("../../dist/controller/base_controller");
var page_1 = require("../../dist/decorator/page");
var IndexController = (function (_super) {
    __extends(IndexController, _super);
    function IndexController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = 0;
        return _this;
    }
    IndexController.prototype.onClickHandle = function () {
        this.count += 1;
    };
    __decorate([
        page_1.Data
    ], IndexController.prototype, "count", void 0);
    IndexController = __decorate([
        page_1.Controller
    ], IndexController);
    return IndexController;
}(base_controller_1.default));
exports.IndexController = IndexController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseUVBQW1FO0FBQ25FLGtEQUEyRDtBQUczRDtJQUFxQyxtQ0FBYztJQUFuRDtRQUFBLHFFQU9DO1FBTFUsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFLN0IsQ0FBQztJQUhVLHVDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUpEO1FBREMsV0FBSTtrREFDb0I7SUFGaEIsZUFBZTtRQUQzQixpQkFBVTtPQUNFLGVBQWUsQ0FPM0I7SUFBRCxzQkFBQztDQUFBLEFBUEQsQ0FBcUMseUJBQWMsR0FPbEQ7QUFQWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcbmltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vZGlzdC9jb250cm9sbGVyL2Jhc2VfY29udHJvbGxlclwiO1xuaW1wb3J0IHtDb250cm9sbGVyLCBEYXRhfSBmcm9tIFwiLi4vLi4vZGlzdC9kZWNvcmF0b3IvcGFnZVwiO1xuXG5AQ29udHJvbGxlclxuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgICBARGF0YVxuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBvbkNsaWNrSGFuZGxlKCkge1xuICAgICAgICB0aGlzLmNvdW50ICs9IDE7XG4gICAgfVxufVxuXG5cbiJdfQ==