"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = void 0;
var BaseComponent = (function () {
    function BaseComponent() {
        this.properties = {};
        this.data = {};
    }
    BaseComponent.prototype._init = function () {
        this._initProperties();
        this._initData();
        this._initExternalClasses();
        this._initBehaviors();
    };
    BaseComponent.prototype._initProperties = function () {
        var _this = this;
        if (!this.properties) {
            return;
        }
        this.properties = this.__proto__.properties;
        var keys = Object.keys(this.properties);
        keys.forEach(function (key) {
            var value = _this[key];
            var newKey = key;
            _this.properties[newKey].type = _this[key].constructor;
            _this.properties[newKey].value = value;
        });
    };
    BaseComponent.prototype._initData = function () {
        var _this = this;
        if (!this.data) {
            return;
        }
        this.data = this.__proto__.data;
        var keys = Object.keys(this.data);
        keys.forEach(function (key) {
            var value = _this[key];
            var newKey = key;
            _this.data[newKey] = value;
        });
    };
    BaseComponent.prototype._initExternalClasses = function () {
        var _this = this;
        if (!this.externalClasses) {
            return;
        }
        this.externalClasses = this.externalClasses.reduce(function (pre, key) {
            if (pre === void 0) { pre = []; }
            return __spreadArrays(pre, _this[key]);
        }, []);
    };
    BaseComponent.prototype._initBehaviors = function () {
        var _this = this;
        if (!this.behaviors) {
            return;
        }
        this.behaviors = this.behaviors.reduce(function (pre, key) {
            if (pre === void 0) { pre = []; }
            return __spreadArrays(pre, _this[key]);
        }, []);
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlX2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBd0JBO0lBQUE7UUFPUyxlQUFVLEdBQUcsRUFBTyxDQUFDO1FBRXJCLFNBQUksR0FBRyxFQUFPLENBQUM7SUE2RHhCLENBQUM7SUEzRFEsNkJBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFLTSx1Q0FBZSxHQUF0QjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUM1QyxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFXLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVztZQUN2QixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBTSxNQUFNLEdBQUcsR0FBYyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxVQUFXLENBQUMsTUFBTSxDQUFTLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFnQyxDQUFDO1lBQ25GLEtBQUksQ0FBQyxVQUFXLENBQUMsTUFBTSxDQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLTSxpQ0FBUyxHQUFoQjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXO1lBQ3ZCLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixJQUFNLE1BQU0sR0FBRyxHQUFjLENBQUM7WUFDOUIsS0FBSSxDQUFDLElBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS00sNENBQW9CLEdBQTNCO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBUSxFQUFFLEdBQVc7WUFBckIsb0JBQUEsRUFBQSxRQUFRO1lBQWtCLHNCQUFJLEdBQUcsRUFBSyxLQUFJLENBQUMsR0FBRyxDQUFDO1FBQXJCLENBQXNCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUtNLHNDQUFjLEdBQXJCO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBUSxFQUFFLEdBQVc7WUFBckIsb0JBQUEsRUFBQSxRQUFRO1lBQWtCLHNCQUFJLEdBQUcsRUFBSyxLQUFJLENBQUMsR0FBRyxDQUFDO1FBQXJCLENBQXNCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQztBQXRFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiDjgYQg54uC5aWU55qE6JyX54mbXG4gKiBARGF0ZTogMjAyMS0wNS0wOSAxNzowNzo1N1xuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMSAyMzozNToyNlxuICogQERlc2NyaXB0aW9uOlxuICovXG5pbnRlcmZhY2UgVHJpZ2dlckV2ZW50T3B0aW9uIHtcbiAgLyoqIOS6i+S7tuaYr+WQpuWGkuazoVxuICAgKlxuICAgKiDpu5jorqTlgLzvvJogYGZhbHNlYFxuICAgKi9cbiAgYnViYmxlcz86IGJvb2xlYW47XG4gIC8qKiDkuovku7bmmK/lkKblj6/ku6Xnqb/otornu4Tku7bovrnnlYzvvIzkuLpmYWxzZeaXtu+8jOS6i+S7tuWwhuWPquiDveWcqOW8leeUqOe7hOS7tueahOiKgueCueagkeS4iuinpuWPke+8jOS4jei/m+WFpeWFtuS7luS7u+S9lee7hOS7tuWGhemDqFxuICAgKlxuICAgKiDpu5jorqTlgLzvvJogYGZhbHNlYFxuICAgKi9cbiAgY29tcG9zZWQ/OiBib29sZWFuO1xuICAvKiog5LqL5Lu25piv5ZCm5oul5pyJ5o2V6I636Zi25q61XG4gICAqXG4gICAqIOm7mOiupOWAvO+8miBgZmFsc2VgXG4gICAqL1xuICBjYXB0dXJlUGhhc2U/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudDxQLCBEPiB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgLy8g6K6+572u5pWw5o2uXG4gIHB1YmxpYyBbJ3NldERhdGEnXTogKGRhdGE6IFBhcnRpYWw8RD4sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkgPT4gdm9pZDtcbiAgLy8g5ZCR54i25YWD57Sg5rS+5Y+R5LqL5Lu2XG4gIHB1YmxpYyBbJ3RyaWdnZXJFdmVudCddOiAobmFtZTogc3RyaW5nLCBkZXRhaWw/OiB1bmtub3duLCBvcHRpb25zPzogVHJpZ2dlckV2ZW50T3B0aW9uKSA9PiB2b2lkO1xuICAvLyDnu4Tku7blsZ7mgKdcbiAgcHVibGljIHByb3BlcnRpZXMgPSB7fSBhcyBQO1xuICAvLyDnu4Tku7boh6rlt7HlrprkuYnnmoTmlbDmja5cbiAgcHVibGljIGRhdGEgPSB7fSBhcyBEO1xuXG4gIHB1YmxpYyBfaW5pdCgpIHtcbiAgICB0aGlzLl9pbml0UHJvcGVydGllcygpO1xuICAgIHRoaXMuX2luaXREYXRhKCk7XG4gICAgdGhpcy5faW5pdEV4dGVybmFsQ2xhc3NlcygpO1xuICAgIHRoaXMuX2luaXRCZWhhdmlvcnMoKTtcbiAgfVxuICAvKipcbiAgICogIOWIneWni+WMluWkhOeQhnByb3BlcnRpZXNcbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyBfaW5pdFByb3BlcnRpZXMoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gdGhpcy5fX3Byb3RvX18ucHJvcGVydGllcztcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzISk7XG4gICAga2V5cy5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG4gICAgICBjb25zdCBuZXdLZXkgPSBrZXkgYXMga2V5b2YgUDtcbiAgICAgICh0aGlzLnByb3BlcnRpZXMhW25ld0tleV0gYXMgYW55KS50eXBlID0gdGhpc1trZXldLmNvbnN0cnVjdG9yIGFzIFN0cmluZ0NvbnN0cnVjdG9yO1xuICAgICAgKHRoaXMucHJvcGVydGllcyFbbmV3S2V5XSBhcyBhbnkpLnZhbHVlID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqICDliJ3lp4vljJblpITnkIZkYXRhXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBwdWJsaWMgX2luaXREYXRhKCkge1xuICAgIGlmICghdGhpcy5kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGF0YSA9IHRoaXMuX19wcm90b19fLmRhdGE7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSEpO1xuICAgIGtleXMuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpc1trZXldO1xuICAgICAgY29uc3QgbmV3S2V5ID0ga2V5IGFzIGtleW9mIEQ7XG4gICAgICB0aGlzLmRhdGEhW25ld0tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICog5Yid5aeL5YyW5aSE55CGIGV4dGVybmFsQ2xhc3Nlc1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIF9pbml0RXh0ZXJuYWxDbGFzc2VzKCkge1xuICAgIGlmICghdGhpcy5leHRlcm5hbENsYXNzZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5leHRlcm5hbENsYXNzZXMgPSB0aGlzLmV4dGVybmFsQ2xhc3Nlcy5yZWR1Y2UoKHByZSA9IFtdLCBrZXk6IHN0cmluZykgPT4gWy4uLnByZSwgLi4udGhpc1trZXldXSwgW10pO1xuICB9XG4gIC8qKlxuICAgKiBiZWhhdmlvcnMg6YC76L6R5aSN55SoXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBwdWJsaWMgX2luaXRCZWhhdmlvcnMoKSB7XG4gICAgaWYgKCF0aGlzLmJlaGF2aW9ycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzLnJlZHVjZSgocHJlID0gW10sIGtleTogc3RyaW5nKSA9PiBbLi4ucHJlLCAuLi50aGlzW2tleV1dLCBbXSk7XG4gIH1cbn1cbiJdfQ==