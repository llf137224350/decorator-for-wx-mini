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
        _this.count = 0;
        return _this;
    }
    IndexController.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
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
}(base_controller_1.BaseController));
exports.IndexController = IndexController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXVFO0FBQ3ZFLGtEQUE2RDtBQUc3RDtJQUFxQyxtQ0FBYztJQUFuRDtRQUFBLHFFQVdDO1FBVFEsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFTM0IsQ0FBQztJQVBRLGdDQUFNLEdBQWI7UUFDRSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sdUNBQWEsR0FBcEI7UUFDRSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBUkQ7UUFEQyxXQUFJO2tEQUNvQjtJQUZkLGVBQWU7UUFEM0IsaUJBQVU7T0FDRSxlQUFlLENBVzNCO0lBQUQsc0JBQUM7Q0FBQSxBQVhELENBQXFDLGdDQUFjLEdBV2xEO0FBWFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2Jhc2UvY29udHJvbGxlci9iYXNlX2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgQ29udHJvbGxlciwgRGF0YSB9IGZyb20gJy4uLy4uL2Jhc2UvZGVjb3JhdG9yL3BhZ2UnO1xuXG5AQ29udHJvbGxlclxuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgQERhdGFcbiAgcHVibGljIGNvdW50OiBudW1iZXIgPSAwO1xuXG4gIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkKCk7XG4gIH1cblxuICBwdWJsaWMgb25DbGlja0hhbmRsZSgpIHtcbiAgICB0aGlzLmNvdW50ICs9IDE7XG4gIH1cbn1cbiJdfQ==