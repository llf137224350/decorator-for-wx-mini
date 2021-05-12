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
        Object.keys(this.properties).forEach(function (key) {
            _this.properties[key].type = _this[key].constructor;
            _this.properties[key].value = _this[key];
        });
    };
    BaseComponent.prototype._initData = function () {
        var _this = this;
        this.data = this.__proto__.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlX2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXlEO0FBMEJ6RDtJQUFBO1FBT1MsZUFBVSxHQUFHLEVBQU8sQ0FBQztRQUVyQixTQUFJLEdBQUcsRUFBTyxDQUFDO0lBeUR4QixDQUFDO0lBeERRLDZCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBS00sdUNBQWUsR0FBdEI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVztZQUM5QyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQWMsQ0FBd0IsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQWdDLENBQUM7WUFDekcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFjLENBQXlCLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLTSxpQ0FBUyxHQUFoQjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBYyxDQUFDLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBS00seUNBQWlCLEdBQXhCLFVBQXlCLEdBQVc7UUFBcEMsaUJBS0M7UUFKQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFRLEVBQUUsR0FBVztZQUFyQixvQkFBQSxFQUFBLFFBQVE7WUFBa0Isc0JBQUksR0FBRyxFQUFLLEtBQUksQ0FBQyxHQUFHLENBQUM7UUFBckIsQ0FBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBUU0sK0JBQU8sR0FBZDtRQURBLGlCQWNDO1FBWkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVztZQUN6QyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUksRUFBRSxHQUFHLEVBQUU7Z0JBQy9CLEdBQUc7b0JBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUNELEdBQUcsWUFBQyxHQUFHOztvQkFDTCxJQUFJLENBQUMsT0FBTzt3QkFDVixHQUFDLEdBQUcsSUFBRyxHQUFHOzRCQUNWLENBQUM7Z0JBQ0wsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWJEO1FBREMscUJBQVM7Z0RBY1Q7SUFDSCxvQkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlmZXRpbWVzLCBQcm9wIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2NvbXBvbmVudCc7XG5cbi8qXG4gKiBAQXV0aG9yOiDjgYQg54uC5aWU55qE6JyX54mbXG4gKiBARGF0ZTogMjAyMS0wNS0wOSAxNzowNzo1N1xuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMiAxMDo0NzozN1xuICogQERlc2NyaXB0aW9uOlxuICovXG5pbnRlcmZhY2UgVHJpZ2dlckV2ZW50T3B0aW9uIHtcbiAgLyoqIOS6i+S7tuaYr+WQpuWGkuazoVxuICAgKlxuICAgKiDpu5jorqTlgLzvvJogYGZhbHNlYFxuICAgKi9cbiAgYnViYmxlcz86IGJvb2xlYW47XG4gIC8qKiDkuovku7bmmK/lkKblj6/ku6Xnqb/otornu4Tku7bovrnnlYzvvIzkuLpmYWxzZeaXtu+8jOS6i+S7tuWwhuWPquiDveWcqOW8leeUqOe7hOS7tueahOiKgueCueagkeS4iuinpuWPke+8jOS4jei/m+WFpeWFtuS7luS7u+S9lee7hOS7tuWGhemDqFxuICAgKlxuICAgKiDpu5jorqTlgLzvvJogYGZhbHNlYFxuICAgKi9cbiAgY29tcG9zZWQ/OiBib29sZWFuO1xuICAvKiog5LqL5Lu25piv5ZCm5oul5pyJ5o2V6I636Zi25q61XG4gICAqXG4gICAqIOm7mOiupOWAvO+8miBgZmFsc2VgXG4gICAqL1xuICBjYXB0dXJlUGhhc2U/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudDxQLCBEPiB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgLy8g6K6+572u5pWw5o2uXG4gIHB1YmxpYyBbJ3NldERhdGEnXTogKGRhdGE6IFBhcnRpYWw8RD4sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkgPT4gdm9pZDtcbiAgLy8g5ZCR54i25YWD57Sg5rS+5Y+R5LqL5Lu2XG4gIHB1YmxpYyBbJ3RyaWdnZXJFdmVudCddOiAobmFtZTogc3RyaW5nLCBkZXRhaWw/OiB1bmtub3duLCBvcHRpb25zPzogVHJpZ2dlckV2ZW50T3B0aW9uKSA9PiB2b2lkO1xuICAvLyDnu4Tku7blsZ7mgKdcbiAgcHVibGljIHByb3BlcnRpZXMgPSB7fSBhcyBQO1xuICAvLyDnu4Tku7boh6rlt7HlrprkuYnnmoTmlbDmja5cbiAgcHVibGljIGRhdGEgPSB7fSBhcyBEO1xuICBwdWJsaWMgX2luaXQoKSB7XG4gICAgdGhpcy5faW5pdFByb3BlcnRpZXMoKTtcbiAgICB0aGlzLl9pbml0RGF0YSgpO1xuICAgIHRoaXMuX2luaXRWYWx1ZUlzQXJyYXkoJ2V4dGVybmFsQ2xhc3NlcycpO1xuICAgIHRoaXMuX2luaXRWYWx1ZUlzQXJyYXkoJ2JlaGF2aW9ycycpO1xuICB9XG4gIC8qKlxuICAgKiAg5Yid5aeL5YyW5aSE55CGcHJvcGVydGllc1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIF9pbml0UHJvcGVydGllcygpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSB0aGlzLl9fcHJvdG9fXy5wcm9wZXJ0aWVzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcGVydGllcykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICh0aGlzLnByb3BlcnRpZXNba2V5IGFzIGtleW9mIFBdIGFzIHsgdHlwZT86IHVua25vd24gfSkudHlwZSA9IHRoaXNba2V5XS5jb25zdHJ1Y3RvciBhcyBTdHJpbmdDb25zdHJ1Y3RvcjtcbiAgICAgICh0aGlzLnByb3BlcnRpZXNba2V5IGFzIGtleW9mIFBdIGFzIHsgdmFsdWU/OiB1bmtub3duIH0pLnZhbHVlID0gdGhpc1trZXldO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiAg5Yid5aeL5YyW5aSE55CGZGF0YVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIF9pbml0RGF0YSgpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLl9fcHJvdG9fXy5kYXRhO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+ICh0aGlzLmRhdGFba2V5IGFzIGtleW9mIERdID0gdGhpc1trZXldKSk7XG4gIH1cbiAgLyoqXG4gICAqIOWIneWni+WMluWkhOeQhiBleHRlcm5hbENsYXNzZXMvYmVoYXZpb3JzXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBwdWJsaWMgX2luaXRWYWx1ZUlzQXJyYXkoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXNba2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzW2tleV0gPSB0aGlzW2tleV0ucmVkdWNlKChwcmUgPSBbXSwga2V5OiBzdHJpbmcpID0+IFsuLi5wcmUsIC4uLnRoaXNba2V5XV0sIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb246ICDnu4Tku7bliJvlu7rml7blr7nmlbDmja7ov5vooYzku6PnkIblpITnkIZcbiAgICogQHBhcmFtIHsqfVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgQExpZmV0aW1lc1xuICBwdWJsaWMgY3JlYXRlZCgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2tleV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgW2tleV06IHZhbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19