"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = void 0;
var component_1 = require("../decorator/component");
var BaseComponent = (function () {
    function BaseComponent() {
        this.properties = {};
        this.data = {};
    }
    BaseComponent.prototype._init = function () {
        this._initProperties();
        this._initData();
        this._initValueIsArray('externalClasses');
        this._initValueIsArray('behaviors');
    };
    BaseComponent.prototype._initProperties = function () {
        var _this = this;
        this.properties = this.__proto__.properties;
        if (!this.properties) {
            return;
        }
        Object.keys(this.properties).forEach(function (key) {
            _this.properties[key].type = _this[key].constructor;
            _this.properties[key].value = _this[key];
        });
    };
    BaseComponent.prototype._initData = function () {
        var _this = this;
        this.data = this.__proto__.data;
        if (!this.data) {
            return;
        }
        Object.keys(this.data).forEach(function (key) { return (_this.data[key] = _this[key]); });
    };
    BaseComponent.prototype._initValueIsArray = function (key) {
        var _this = this;
        if (!this[key]) {
            return;
        }
        this[key] = this[key].reduce(function (pre, key) {
            if (pre === void 0) { pre = []; }
            return __spreadArrays(pre, _this[key]);
        }, []);
    };
    BaseComponent.prototype.created = function () {
        var _this = this;
        if (!this.data) {
            return;
        }
        Object.keys(this.data).forEach(function (key) {
            Object.defineProperty(_this, key, {
                get: function () {
                    return this.data[key];
                },
                set: function (val) {
                    var _a;
                    this.setData((_a = {},
                        _a[key] = val,
                        _a));
                }
            });
        });
    };
    __decorate([
        component_1.Lifetimes
    ], BaseComponent.prototype, "created", null);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlX2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBMEJuRDtJQUFBO1FBT1MsZUFBVSxHQUFHLEVBQU8sQ0FBQztRQUVyQixTQUFJLEdBQUcsRUFBTyxDQUFDO0lBa0V4QixDQUFDO0lBakVRLDZCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBS00sdUNBQWUsR0FBdEI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVztZQUM5QyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQWMsQ0FBd0IsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQWdDLENBQUM7WUFDekcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFjLENBQXlCLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLTSxpQ0FBUyxHQUFoQjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVcsSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFjLENBQUMsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFLTSx5Q0FBaUIsR0FBeEIsVUFBeUIsR0FBVztRQUFwQyxpQkFLQztRQUpDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQVEsRUFBRSxHQUFXO1lBQXJCLG9CQUFBLEVBQUEsUUFBUTtZQUFrQixzQkFBSSxHQUFHLEVBQUssS0FBSSxDQUFDLEdBQUcsQ0FBQztRQUFyQixDQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFRTSwrQkFBTyxHQUFkO1FBREEsaUJBaUJDO1FBZkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXO1lBQ3pDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLEdBQUcsRUFBRTtnQkFDL0IsR0FBRztvQkFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsR0FBRyxZQUFDLEdBQUc7O29CQUNMLElBQUksQ0FBQyxPQUFPO3dCQUNWLEdBQUMsR0FBRyxJQUFHLEdBQUc7NEJBQ1YsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEJEO1FBREMscUJBQVM7Z0RBaUJUO0lBQ0gsb0JBQUM7Q0FBQSxBQTNFRCxJQTJFQztBQTNFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpZmV0aW1lcyB9IGZyb20gJy4uL2RlY29yYXRvci9jb21wb25lbnQnO1xuXG4vKlxuICogQEF1dGhvcjog44GEIOeLguWllOeahOicl+eJm1xuICogQERhdGU6IDIwMjEtMDUtMDkgMTc6MDc6NTdcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTIgMTE6MTA6NDlcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuaW50ZXJmYWNlIFRyaWdnZXJFdmVudE9wdGlvbiB7XG4gIC8qKiDkuovku7bmmK/lkKblhpLms6FcbiAgICpcbiAgICog6buY6K6k5YC877yaIGBmYWxzZWBcbiAgICovXG4gIGJ1YmJsZXM/OiBib29sZWFuO1xuICAvKiog5LqL5Lu25piv5ZCm5Y+v5Lul56m/6LaK57uE5Lu26L6555WM77yM5Li6ZmFsc2Xml7bvvIzkuovku7blsIblj6rog73lnKjlvJXnlKjnu4Tku7bnmoToioLngrnmoJHkuIrop6blj5HvvIzkuI3ov5vlhaXlhbbku5bku7vkvZXnu4Tku7blhoXpg6hcbiAgICpcbiAgICog6buY6K6k5YC877yaIGBmYWxzZWBcbiAgICovXG4gIGNvbXBvc2VkPzogYm9vbGVhbjtcbiAgLyoqIOS6i+S7tuaYr+WQpuaLpeacieaNleiOt+mYtuautVxuICAgKlxuICAgKiDpu5jorqTlgLzvvJogYGZhbHNlYFxuICAgKi9cbiAgY2FwdHVyZVBoYXNlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQ8UCwgRD4ge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIC8vIOiuvue9ruaVsOaNrlxuICBwdWJsaWMgWydzZXREYXRhJ106IChkYXRhOiBQYXJ0aWFsPEQ+LCBjYWxsYmFjaz86ICgpID0+IHZvaWQpID0+IHZvaWQ7XG4gIC8vIOWQkeeItuWFg+e0oOa0vuWPkeS6i+S7tlxuICBwdWJsaWMgWyd0cmlnZ2VyRXZlbnQnXTogKG5hbWU6IHN0cmluZywgZGV0YWlsPzogdW5rbm93biwgb3B0aW9ucz86IFRyaWdnZXJFdmVudE9wdGlvbikgPT4gdm9pZDtcbiAgLy8g57uE5Lu25bGe5oCnXG4gIHB1YmxpYyBwcm9wZXJ0aWVzID0ge30gYXMgUDtcbiAgLy8g57uE5Lu26Ieq5bex5a6a5LmJ55qE5pWw5o2uXG4gIHB1YmxpYyBkYXRhID0ge30gYXMgRDtcbiAgcHVibGljIF9pbml0KCkge1xuICAgIHRoaXMuX2luaXRQcm9wZXJ0aWVzKCk7XG4gICAgdGhpcy5faW5pdERhdGEoKTtcbiAgICB0aGlzLl9pbml0VmFsdWVJc0FycmF5KCdleHRlcm5hbENsYXNzZXMnKTtcbiAgICB0aGlzLl9pbml0VmFsdWVJc0FycmF5KCdiZWhhdmlvcnMnKTtcbiAgfVxuICAvKipcbiAgICogIOWIneWni+WMluWkhOeQhnByb3BlcnRpZXNcbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyBfaW5pdFByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gdGhpcy5fX3Byb3RvX18ucHJvcGVydGllcztcbiAgICBpZiAoIXRoaXMucHJvcGVydGllcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BlcnRpZXMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAodGhpcy5wcm9wZXJ0aWVzW2tleSBhcyBrZXlvZiBQXSBhcyB7IHR5cGU/OiB1bmtub3duIH0pLnR5cGUgPSB0aGlzW2tleV0uY29uc3RydWN0b3IgYXMgU3RyaW5nQ29uc3RydWN0b3I7XG4gICAgICAodGhpcy5wcm9wZXJ0aWVzW2tleSBhcyBrZXlvZiBQXSBhcyB7IHZhbHVlPzogdW5rbm93biB9KS52YWx1ZSA9IHRoaXNba2V5XTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogIOWIneWni+WMluWkhOeQhmRhdGFcbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyBfaW5pdERhdGEoKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5fX3Byb3RvX18uZGF0YTtcbiAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiAodGhpcy5kYXRhW2tleSBhcyBrZXlvZiBEXSA9IHRoaXNba2V5XSkpO1xuICB9XG4gIC8qKlxuICAgKiDliJ3lp4vljJblpITnkIYgZXh0ZXJuYWxDbGFzc2VzL2JlaGF2aW9yc1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIF9pbml0VmFsdWVJc0FycmF5KGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzW2tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpc1trZXldID0gdGhpc1trZXldLnJlZHVjZSgocHJlID0gW10sIGtleTogc3RyaW5nKSA9PiBbLi4ucHJlLCAuLi50aGlzW2tleV1dLCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uOiAg57uE5Lu25Yib5bu65pe25a+55pWw5o2u6L+b6KGM5Luj55CG5aSE55CGXG4gICAqIEBwYXJhbSB7Kn1cbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIEBMaWZldGltZXNcbiAgcHVibGljIGNyZWF0ZWQoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtrZXldO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIFtrZXldOiB2YWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==