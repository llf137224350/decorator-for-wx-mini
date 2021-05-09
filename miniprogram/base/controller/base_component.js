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
    }
    BaseComponent.prototype._init = function () {
        this._initProperties();
        this._initData();
        this._initExternalClasses();
    };
    BaseComponent.prototype._initProperties = function () {
        var _this = this;
        if (!this.properties) {
            return;
        }
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
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlX2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0E7SUFBQTtJQW1EQSxDQUFDO0lBOUNRLDZCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFLTSx1Q0FBZSxHQUF0QjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVc7WUFDdkIsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQU0sTUFBTSxHQUFHLEdBQWMsQ0FBQztZQUM3QixLQUFJLENBQUMsVUFBVyxDQUFDLE1BQU0sQ0FBUyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBZ0MsQ0FBQztZQUNuRixLQUFJLENBQUMsVUFBVyxDQUFDLE1BQU0sQ0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS00saUNBQVMsR0FBaEI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVc7WUFDdkIsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQU0sTUFBTSxHQUFHLEdBQWMsQ0FBQztZQUM5QixLQUFJLENBQUMsSUFBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLTSw0Q0FBb0IsR0FBM0I7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFRLEVBQUUsR0FBVztZQUFyQixvQkFBQSxFQUFBLFFBQVE7WUFBa0Isc0JBQUksR0FBRyxFQUFLLEtBQUksQ0FBQyxHQUFHLENBQUM7UUFBckIsQ0FBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDO0FBbkRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IOOBhCDni4LlpZTnmoTonJfniZtcbiAqIEBEYXRlOiAyMDIxLTA1LTA5IDE3OjA3OjU3XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTA5IDIyOjQwOjAwXG4gKiBARGVzY3JpcHRpb246XG4gKi9cblxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQ8UCwgRD4ge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIHB1YmxpYyBwcm9wZXJ0aWVzPzogUDtcbiAgcHVibGljIGRhdGE/OiBEO1xuXG4gIHB1YmxpYyBfaW5pdCgpIHtcbiAgICB0aGlzLl9pbml0UHJvcGVydGllcygpO1xuICAgIHRoaXMuX2luaXREYXRhKCk7XG4gICAgdGhpcy5faW5pdEV4dGVybmFsQ2xhc3NlcygpO1xuICB9XG4gIC8qKlxuICAgKiAg5Yid5aeL5YyW5aSE55CGcHJvcGVydGllc1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIF9pbml0UHJvcGVydGllcygpIHtcbiAgICBpZiAoIXRoaXMucHJvcGVydGllcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzISk7XG4gICAga2V5cy5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG4gICAgICBjb25zdCBuZXdLZXkgPSBrZXkgYXMga2V5b2YgUDtcbiAgICAgICh0aGlzLnByb3BlcnRpZXMhW25ld0tleV0gYXMgYW55KS50eXBlID0gdGhpc1trZXldLmNvbnN0cnVjdG9yIGFzIFN0cmluZ0NvbnN0cnVjdG9yO1xuICAgICAgKHRoaXMucHJvcGVydGllcyFbbmV3S2V5XSBhcyBhbnkpLnZhbHVlID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqICDliJ3lp4vljJblpITnkIZkYXRhXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBwdWJsaWMgX2luaXREYXRhKCkge1xuICAgIGlmICghdGhpcy5kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEhKTtcbiAgICBrZXlzLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXNba2V5XTtcbiAgICAgIGNvbnN0IG5ld0tleSA9IGtleSBhcyBrZXlvZiBEO1xuICAgICAgdGhpcy5kYXRhIVtuZXdLZXldID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIOWIneWni+WMluWkhOeQhiBleHRlcm5hbENsYXNzZXNcbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyBfaW5pdEV4dGVybmFsQ2xhc3NlcygpIHtcbiAgICBpZiAoIXRoaXMuZXh0ZXJuYWxDbGFzc2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZXh0ZXJuYWxDbGFzc2VzID0gdGhpcy5leHRlcm5hbENsYXNzZXMucmVkdWNlKChwcmUgPSBbXSwga2V5OiBzdHJpbmcpID0+IFsuLi5wcmUsIC4uLnRoaXNba2V5XV0sIFtdKTtcbiAgfVxufVxuIl19