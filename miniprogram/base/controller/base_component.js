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
            return __spreadArrays(pre, _this[key]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlX2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBMEJuRDtJQUFBO1FBT1MsZUFBVSxHQUFHLEVBQU8sQ0FBQztRQUVyQixTQUFJLEdBQUcsRUFBTyxDQUFDO0lBNkV4QixDQUFDO0lBekVRLDZCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUtNLHVDQUFlLEdBQXRCO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVc7WUFDOUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFjLENBQXdCLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFnQyxDQUFDO1lBQ3pHLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBYyxDQUF5QixDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS00saUNBQVMsR0FBaEI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBYyxDQUFDLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBS00seUNBQWlCLEdBQXhCLFVBQXlCLEdBQVc7UUFBcEMsaUJBS0M7UUFKQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFRLEVBQUUsR0FBVztZQUFyQixvQkFBQSxFQUFBLFFBQVE7WUFBa0Isc0JBQUksR0FBRyxFQUFLLEtBQUksQ0FBQyxHQUFHLENBQUM7UUFBckIsQ0FBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBSU0sb0NBQVksR0FBbkI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxLQUFLLGFBQWEsSUFBSSxPQUFPLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFwRSxDQUFvRSxDQUFDLENBQUM7UUFDbEosT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQWtCLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUF2RCxDQUF1RCxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQU9NLCtCQUFPLEdBQWQ7UUFEQSxpQkFpQkM7UUFmQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVc7WUFDekMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUMvQixHQUFHO29CQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFDRCxHQUFHLFlBQUMsR0FBRzs7b0JBQ0wsSUFBSSxDQUFDLE9BQU87d0JBQ1YsR0FBQyxHQUFHLElBQUcsR0FBRzs0QkFDVixDQUFDO2dCQUNMLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFoQkQ7UUFEQyxxQkFBUztnREFpQlQ7SUFDSCxvQkFBQztDQUFBLEFBdEZELElBc0ZDO0FBdEZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlmZXRpbWVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2NvbXBvbmVudCc7XG5cbi8qXG4gKiBAQXV0aG9yOiDjgYQg54uC5aWU55qE6JyX54mbXG4gKiBARGF0ZTogMjAyMS0wNS0wOSAxNzowNzo1N1xuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMiAxMjozNjozOFxuICogQERlc2NyaXB0aW9uOlxuICovXG5pbnRlcmZhY2UgVHJpZ2dlckV2ZW50T3B0aW9uIHtcbiAgLyoqIOS6i+S7tuaYr+WQpuWGkuazoVxuICAgKlxuICAgKiDpu5jorqTlgLzvvJogYGZhbHNlYFxuICAgKi9cbiAgYnViYmxlcz86IGJvb2xlYW47XG4gIC8qKiDkuovku7bmmK/lkKblj6/ku6Xnqb/otornu4Tku7bovrnnlYzvvIzkuLpmYWxzZeaXtu+8jOS6i+S7tuWwhuWPquiDveWcqOW8leeUqOe7hOS7tueahOiKgueCueagkeS4iuinpuWPke+8jOS4jei/m+WFpeWFtuS7luS7u+S9lee7hOS7tuWGhemDqFxuICAgKlxuICAgKiDpu5jorqTlgLzvvJogYGZhbHNlYFxuICAgKi9cbiAgY29tcG9zZWQ/OiBib29sZWFuO1xuICAvKiog5LqL5Lu25piv5ZCm5oul5pyJ5o2V6I636Zi25q61XG4gICAqXG4gICAqIOm7mOiupOWAvO+8miBgZmFsc2VgXG4gICAqL1xuICBjYXB0dXJlUGhhc2U/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudDxQLCBEPiB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgLy8g6K6+572u5pWw5o2uXG4gIHB1YmxpYyBbJ3NldERhdGEnXTogKGRhdGE6IFBhcnRpYWw8RD4sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkgPT4gdm9pZDtcbiAgLy8g5ZCR54i25YWD57Sg5rS+5Y+R5LqL5Lu2XG4gIHB1YmxpYyBbJ3RyaWdnZXJFdmVudCddOiAobmFtZTogc3RyaW5nLCBkZXRhaWw/OiB1bmtub3duLCBvcHRpb25zPzogVHJpZ2dlckV2ZW50T3B0aW9uKSA9PiB2b2lkO1xuICAvLyDnu4Tku7blsZ7mgKdcbiAgcHVibGljIHByb3BlcnRpZXMgPSB7fSBhcyBQO1xuICAvLyDnu4Tku7boh6rlt7HlrprkuYnnmoTmlbDmja5cbiAgcHVibGljIGRhdGEgPSB7fSBhcyBEO1xuICAvKipcbiAgICog5Yid5aeL5YyWXG4gICAqL1xuICBwdWJsaWMgX2luaXQoKSB7XG4gICAgdGhpcy5faW5pdFByb3BlcnRpZXMoKTtcbiAgICB0aGlzLl9pbml0RGF0YSgpO1xuICAgIHRoaXMuX2luaXRWYWx1ZUlzQXJyYXkoJ2V4dGVybmFsQ2xhc3NlcycpO1xuICAgIHRoaXMuX2luaXRWYWx1ZUlzQXJyYXkoJ2JlaGF2aW9ycycpO1xuICAgIHRoaXMuX2luaXRNZXRob2RzKCk7XG4gIH1cbiAgLyoqXG4gICAqICDliJ3lp4vljJblpITnkIZwcm9wZXJ0aWVzXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBwdWJsaWMgX2luaXRQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHRoaXMuX19wcm90b19fLnByb3BlcnRpZXM7XG4gICAgaWYgKCF0aGlzLnByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgKHRoaXMucHJvcGVydGllc1trZXkgYXMga2V5b2YgUF0gYXMgeyB0eXBlPzogdW5rbm93biB9KS50eXBlID0gdGhpc1trZXldLmNvbnN0cnVjdG9yIGFzIFN0cmluZ0NvbnN0cnVjdG9yO1xuICAgICAgKHRoaXMucHJvcGVydGllc1trZXkgYXMga2V5b2YgUF0gYXMgeyB2YWx1ZT86IHVua25vd24gfSkudmFsdWUgPSB0aGlzW2tleV07XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqICDliJ3lp4vljJblpITnkIZkYXRhXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBwdWJsaWMgX2luaXREYXRhKCkge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuX19wcm90b19fLmRhdGE7XG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4gKHRoaXMuZGF0YVtrZXkgYXMga2V5b2YgRF0gPSB0aGlzW2tleV0pKTtcbiAgfVxuICAvKipcbiAgICog5Yid5aeL5YyW5aSE55CGIGV4dGVybmFsQ2xhc3Nlcy9iZWhhdmlvcnNcbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyBfaW5pdFZhbHVlSXNBcnJheShrZXk6IHN0cmluZykge1xuICAgIGlmICghdGhpc1trZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXNba2V5XSA9IHRoaXNba2V5XS5yZWR1Y2UoKHByZSA9IFtdLCBrZXk6IHN0cmluZykgPT4gWy4uLnByZSwgLi4udGhpc1trZXldXSwgW10pO1xuICB9XG4gIC8qKlxuICAgKiDliJ3lp4vljJbmlrnms5VcbiAgICovXG4gIHB1YmxpYyBfaW5pdE1ldGhvZHMoKSB7XG4gICAgdGhpcy5tZXRob2RzID0ge307XG4gICAgY29uc3QgbWV0aG9kcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuX19wcm90b19fKS5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09ICdjb25zdHJ1Y3RvcicgJiYgdHlwZW9mIHRoaXMuX19wcm90b19fW25hbWVdID09PSAnZnVuY3Rpb24nKTtcbiAgICBtZXRob2RzLmZvckVhY2goKG1ldGhvZE5hbWU6IHN0cmluZykgPT4gKHRoaXMubWV0aG9kc1ttZXRob2ROYW1lXSA9IHRoaXMuX19wcm90b19fW21ldGhvZE5hbWVdKSk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbjogIOe7hOS7tuWIm+W7uuaXtuWvueaVsOaNrui/m+ihjOS7o+eQhuWkhOeQhlxuICAgKiBAcGFyYW0geyp9XG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBATGlmZXRpbWVzXG4gIHB1YmxpYyBjcmVhdGVkKCkge1xuICAgIGlmICghdGhpcy5kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFba2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbCkge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBba2V5XTogdmFsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=