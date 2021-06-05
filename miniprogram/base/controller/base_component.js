"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
        this._initMethods();
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
            return __spreadArray(__spreadArray([], pre), _this[key]);
        }, []);
    };
    BaseComponent.prototype._initMethods = function () {
        var _this = this;
        this.methods = {};
        var methods = Object.getOwnPropertyNames(this.__proto__).filter(function (name) { return name !== 'constructor' && typeof _this.__proto__[name] === 'function'; });
        methods.forEach(function (methodName) { return (_this.methods[methodName] = _this.__proto__[methodName]); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlX2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQTBCbkQ7SUFBQTtRQU9TLGVBQVUsR0FBRyxFQUFPLENBQUM7UUFFckIsU0FBSSxHQUFHLEVBQU8sQ0FBQztJQTZFeEIsQ0FBQztJQXpFUSw2QkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFLTSx1Q0FBZSxHQUF0QjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXO1lBQzlDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBYyxDQUF3QixDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBZ0MsQ0FBQztZQUN6RyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQWMsQ0FBeUIsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtNLGlDQUFTLEdBQWhCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVyxJQUFLLE9BQUEsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQWMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUtNLHlDQUFpQixHQUF4QixVQUF5QixHQUFXO1FBQXBDLGlCQUtDO1FBSkMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBUSxFQUFFLEdBQVc7WUFBckIsb0JBQUEsRUFBQSxRQUFRO1lBQWtCLHVDQUFJLEdBQUcsR0FBSyxLQUFJLENBQUMsR0FBRyxDQUFDO1FBQXJCLENBQXNCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUlNLG9DQUFZLEdBQW5CO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksS0FBSyxhQUFhLElBQUksT0FBTyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBcEUsQ0FBb0UsQ0FBQyxDQUFDO1FBQ2xKLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFrQixJQUFLLE9BQUEsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFPTSwrQkFBTyxHQUFkO1FBREEsaUJBaUJDO1FBZkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXO1lBQ3pDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLEdBQUcsRUFBRTtnQkFDL0IsR0FBRztvQkFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsR0FBRyxZQUFDLEdBQUc7O29CQUNMLElBQUksQ0FBQyxPQUFPO3dCQUNWLEdBQUMsR0FBRyxJQUFHLEdBQUc7NEJBQ1YsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEJEO1FBREMscUJBQVM7Z0RBaUJUO0lBQ0gsb0JBQUM7Q0FBQSxBQXRGRCxJQXNGQztBQXRGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpZmV0aW1lcyB9IGZyb20gJy4uL2RlY29yYXRvci9jb21wb25lbnQnO1xuXG4vKlxuICogQEF1dGhvcjog44GEIOeLguWllOeahOicl+eJm1xuICogQERhdGU6IDIwMjEtMDUtMDkgMTc6MDc6NTdcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTIgMTI6MzY6MzhcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuaW50ZXJmYWNlIFRyaWdnZXJFdmVudE9wdGlvbiB7XG4gIC8qKiDkuovku7bmmK/lkKblhpLms6FcbiAgICpcbiAgICog6buY6K6k5YC877yaIGBmYWxzZWBcbiAgICovXG4gIGJ1YmJsZXM/OiBib29sZWFuO1xuICAvKiog5LqL5Lu25piv5ZCm5Y+v5Lul56m/6LaK57uE5Lu26L6555WM77yM5Li6ZmFsc2Xml7bvvIzkuovku7blsIblj6rog73lnKjlvJXnlKjnu4Tku7bnmoToioLngrnmoJHkuIrop6blj5HvvIzkuI3ov5vlhaXlhbbku5bku7vkvZXnu4Tku7blhoXpg6hcbiAgICpcbiAgICog6buY6K6k5YC877yaIGBmYWxzZWBcbiAgICovXG4gIGNvbXBvc2VkPzogYm9vbGVhbjtcbiAgLyoqIOS6i+S7tuaYr+WQpuaLpeacieaNleiOt+mYtuautVxuICAgKlxuICAgKiDpu5jorqTlgLzvvJogYGZhbHNlYFxuICAgKi9cbiAgY2FwdHVyZVBoYXNlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQ8UCwgRD4ge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIC8vIOiuvue9ruaVsOaNrlxuICBwdWJsaWMgWydzZXREYXRhJ106IChkYXRhOiBQYXJ0aWFsPEQ+LCBjYWxsYmFjaz86ICgpID0+IHZvaWQpID0+IHZvaWQ7XG4gIC8vIOWQkeeItuWFg+e0oOa0vuWPkeS6i+S7tlxuICBwdWJsaWMgWyd0cmlnZ2VyRXZlbnQnXTogKG5hbWU6IHN0cmluZywgZGV0YWlsPzogdW5rbm93biwgb3B0aW9ucz86IFRyaWdnZXJFdmVudE9wdGlvbikgPT4gdm9pZDtcbiAgLy8g57uE5Lu25bGe5oCnXG4gIHB1YmxpYyBwcm9wZXJ0aWVzID0ge30gYXMgUDtcbiAgLy8g57uE5Lu26Ieq5bex5a6a5LmJ55qE5pWw5o2uXG4gIHB1YmxpYyBkYXRhID0ge30gYXMgRDtcbiAgLyoqXG4gICAqIOWIneWni+WMllxuICAgKi9cbiAgcHVibGljIF9pbml0KCkge1xuICAgIHRoaXMuX2luaXRQcm9wZXJ0aWVzKCk7XG4gICAgdGhpcy5faW5pdERhdGEoKTtcbiAgICB0aGlzLl9pbml0VmFsdWVJc0FycmF5KCdleHRlcm5hbENsYXNzZXMnKTtcbiAgICB0aGlzLl9pbml0VmFsdWVJc0FycmF5KCdiZWhhdmlvcnMnKTtcbiAgICB0aGlzLl9pbml0TWV0aG9kcygpO1xuICB9XG4gIC8qKlxuICAgKiAg5Yid5aeL5YyW5aSE55CGcHJvcGVydGllc1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIF9pbml0UHJvcGVydGllcygpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSB0aGlzLl9fcHJvdG9fXy5wcm9wZXJ0aWVzO1xuICAgIGlmICghdGhpcy5wcm9wZXJ0aWVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcGVydGllcykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICh0aGlzLnByb3BlcnRpZXNba2V5IGFzIGtleW9mIFBdIGFzIHsgdHlwZT86IHVua25vd24gfSkudHlwZSA9IHRoaXNba2V5XS5jb25zdHJ1Y3RvciBhcyBTdHJpbmdDb25zdHJ1Y3RvcjtcbiAgICAgICh0aGlzLnByb3BlcnRpZXNba2V5IGFzIGtleW9mIFBdIGFzIHsgdmFsdWU/OiB1bmtub3duIH0pLnZhbHVlID0gdGhpc1trZXldO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiAg5Yid5aeL5YyW5aSE55CGZGF0YVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIF9pbml0RGF0YSgpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLl9fcHJvdG9fXy5kYXRhO1xuICAgIGlmICghdGhpcy5kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+ICh0aGlzLmRhdGFba2V5IGFzIGtleW9mIERdID0gdGhpc1trZXldKSk7XG4gIH1cbiAgLyoqXG4gICAqIOWIneWni+WMluWkhOeQhiBleHRlcm5hbENsYXNzZXMvYmVoYXZpb3JzXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBwdWJsaWMgX2luaXRWYWx1ZUlzQXJyYXkoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXNba2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzW2tleV0gPSB0aGlzW2tleV0ucmVkdWNlKChwcmUgPSBbXSwga2V5OiBzdHJpbmcpID0+IFsuLi5wcmUsIC4uLnRoaXNba2V5XV0sIFtdKTtcbiAgfVxuICAvKipcbiAgICog5Yid5aeL5YyW5pa55rOVXG4gICAqL1xuICBwdWJsaWMgX2luaXRNZXRob2RzKCkge1xuICAgIHRoaXMubWV0aG9kcyA9IHt9O1xuICAgIGNvbnN0IG1ldGhvZHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9fcHJvdG9fXykuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiB0aGlzLl9fcHJvdG9fX1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgbWV0aG9kcy5mb3JFYWNoKChtZXRob2ROYW1lOiBzdHJpbmcpID0+ICh0aGlzLm1ldGhvZHNbbWV0aG9kTmFtZV0gPSB0aGlzLl9fcHJvdG9fX1ttZXRob2ROYW1lXSkpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb246ICDnu4Tku7bliJvlu7rml7blr7nmlbDmja7ov5vooYzku6PnkIblpITnkIZcbiAgICogQHBhcmFtIHsqfVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgQExpZmV0aW1lc1xuICBwdWJsaWMgY3JlYXRlZCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2tleV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgW2tleV06IHZhbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19