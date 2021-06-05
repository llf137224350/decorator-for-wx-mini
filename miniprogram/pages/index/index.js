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
var base_controller_1 = require("../../base/controller/base_controller");
var page_1 = require("../../base/decorator/page");
var Index = (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'hello world';
        return _this;
    }
    Index.prototype.onLoad = function () {
        var _this = this;
        _super.prototype.onLoad.call(this);
        setTimeout(function () {
            _this.name = '你好';
        }, 1000);
    };
    __decorate([
        page_1.Data
    ], Index.prototype, "name", void 0);
    Index = __decorate([
        page_1.Controller
    ], Index);
    return Index;
}(base_controller_1.BaseController));
exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUF1RTtBQUN2RSxrREFBNkQ7QUFRN0Q7SUFBbUMseUJBQWM7SUFBakQ7UUFBQSxxRUFXQztRQVRRLFVBQUksR0FBVyxhQUFhLENBQUM7O0lBU3RDLENBQUM7SUFQUSxzQkFBTSxHQUFiO1FBQUEsaUJBTUM7UUFMQyxpQkFBTSxNQUFNLFdBQUUsQ0FBQztRQUVmLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNWLENBQUM7SUFSRDtRQURDLFdBQUk7dUNBQytCO0lBRmpCLEtBQUs7UUFEekIsaUJBQVU7T0FDVSxLQUFLLENBV3pCO0lBQUQsWUFBQztDQUFBLEFBWEQsQ0FBbUMsZ0NBQWMsR0FXaEQ7a0JBWG9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2Jhc2UvY29udHJvbGxlci9iYXNlX2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgQ29udHJvbGxlciwgRGF0YSB9IGZyb20gJy4uLy4uL2Jhc2UvZGVjb3JhdG9yL3BhZ2UnO1xuLypcbiAqIEBBdXRob3I6IOOBhCDni4LlpZTnmoTonJfniZtcbiAqIEBEYXRlOiAyMDIxLTA1LTA5IDE3OjMyOjM2XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTEyIDA5OjQxOjU5XG4gKiBARGVzY3JpcHRpb246XG4gKi9cbkBDb250cm9sbGVyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgQERhdGFcbiAgcHVibGljIG5hbWU6IHN0cmluZyA9ICdoZWxsbyB3b3JsZCc7XG5cbiAgcHVibGljIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQoKTtcblxuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHRoaXMubmFtZSA9ICfkvaDlpb0nO1xuICAgIH0sMTAwMCk7XG4gIH1cbn1cbiJdfQ==