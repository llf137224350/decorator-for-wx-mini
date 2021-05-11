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
        this._initBehaviors();
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
    BaseComponent.prototype._initBehaviors = function () {
        var _this = this;
        if (!this.behaviors) {
            return;
        }
        this.behaviors = this.behaviors.reduce(function (pre, key) {
            if (pre === void 0) { pre = []; }
            return __spreadArrays(pre, _this[key]);
        }, []);
        console.log(this.behaviors);
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlX2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBdUJBO0lBQUE7SUFvRUEsQ0FBQztJQTNEUSw2QkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUtNLHVDQUFlLEdBQXRCO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFDRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFXLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVztZQUN2QixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBTSxNQUFNLEdBQUcsR0FBYyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxVQUFXLENBQUMsTUFBTSxDQUFTLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFnQyxDQUFDO1lBQ25GLEtBQUksQ0FBQyxVQUFXLENBQUMsTUFBTSxDQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLTSxpQ0FBUyxHQUFoQjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFDRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVztZQUN2QixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBTSxNQUFNLEdBQUcsR0FBYyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxJQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtNLDRDQUFvQixHQUEzQjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQVEsRUFBRSxHQUFXO1lBQXJCLG9CQUFBLEVBQUEsUUFBUTtZQUFrQixzQkFBSSxHQUFHLEVBQUssS0FBSSxDQUFDLEdBQUcsQ0FBQztRQUFyQixDQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFLTSxzQ0FBYyxHQUFyQjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQVEsRUFBRSxHQUFXO1lBQXJCLG9CQUFBLEVBQUEsUUFBUTtZQUFrQixzQkFBSSxHQUFHLEVBQUssS0FBSSxDQUFDLEdBQUcsQ0FBQztRQUFyQixDQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFwRUQsSUFvRUM7QUFwRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjog44GEIOeLguWllOeahOicl+eJm1xuICogQERhdGU6IDIwMjEtMDUtMDkgMTc6MDc6NTdcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTEgMTY6NTI6MTVcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuaW50ZXJmYWNlIFRyaWdnZXJFdmVudE9wdGlvbiB7XG4gIC8qKiDkuovku7bmmK/lkKblhpLms6FcbiAgICpcbiAgICog6buY6K6k5YC877yaIGBmYWxzZWBcbiAgICovXG4gIGJ1YmJsZXM/OiBib29sZWFuO1xuICAvKiog5LqL5Lu25piv5ZCm5Y+v5Lul56m/6LaK57uE5Lu26L6555WM77yM5Li6ZmFsc2Xml7bvvIzkuovku7blsIblj6rog73lnKjlvJXnlKjnu4Tku7bnmoToioLngrnmoJHkuIrop6blj5HvvIzkuI3ov5vlhaXlhbbku5bku7vkvZXnu4Tku7blhoXpg6hcbiAgICpcbiAgICog6buY6K6k5YC877yaIGBmYWxzZWBcbiAgICovXG4gIGNvbXBvc2VkPzogYm9vbGVhbjtcbiAgLyoqIOS6i+S7tuaYr+WQpuaLpeacieaNleiOt+mYtuautVxuICAgKlxuICAgKiDpu5jorqTlgLzvvJogYGZhbHNlYFxuICAgKi9cbiAgY2FwdHVyZVBoYXNlPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50PFAsIEQ+IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuICAvLyDorr7nva7mlbDmja5cbiAgcHVibGljIFsnc2V0RGF0YSddOiAoZGF0YTogUGFydGlhbDxEPiwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xuICAvLyDlkJHniLblhYPntKDmtL7lj5Hkuovku7ZcbiAgcHVibGljIFsndHJpZ2dlckV2ZW50J106IChuYW1lOiBzdHJpbmcsIGRldGFpbD86IHVua25vd24sIG9wdGlvbnM/OiBUcmlnZ2VyRXZlbnRPcHRpb24pID0+IHZvaWQ7XG5cbiAgcHVibGljIHByb3BlcnRpZXM/OiBQO1xuICBwdWJsaWMgZGF0YT86IEQ7XG4gIHB1YmxpYyBfaW5pdCgpIHtcbiAgICB0aGlzLl9pbml0UHJvcGVydGllcygpO1xuICAgIHRoaXMuX2luaXREYXRhKCk7XG4gICAgdGhpcy5faW5pdEV4dGVybmFsQ2xhc3NlcygpO1xuICAgIHRoaXMuX2luaXRCZWhhdmlvcnMoKTtcbiAgfVxuICAvKipcbiAgICogIOWIneWni+WMluWkhOeQhnByb3BlcnRpZXNcbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyBfaW5pdFByb3BlcnRpZXMoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcGVydGllcyEpO1xuICAgIGtleXMuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpc1trZXldO1xuICAgICAgY29uc3QgbmV3S2V5ID0ga2V5IGFzIGtleW9mIFA7XG4gICAgICAodGhpcy5wcm9wZXJ0aWVzIVtuZXdLZXldIGFzIGFueSkudHlwZSA9IHRoaXNba2V5XS5jb25zdHJ1Y3RvciBhcyBTdHJpbmdDb25zdHJ1Y3RvcjtcbiAgICAgICh0aGlzLnByb3BlcnRpZXMhW25ld0tleV0gYXMgYW55KS52YWx1ZSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiAg5Yid5aeL5YyW5aSE55CGZGF0YVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIF9pbml0RGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5kYXRhISk7XG4gICAga2V5cy5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG4gICAgICBjb25zdCBuZXdLZXkgPSBrZXkgYXMga2V5b2YgRDtcbiAgICAgIHRoaXMuZGF0YSFbbmV3S2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDliJ3lp4vljJblpITnkIYgZXh0ZXJuYWxDbGFzc2VzXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBwdWJsaWMgX2luaXRFeHRlcm5hbENsYXNzZXMoKSB7XG4gICAgaWYgKCF0aGlzLmV4dGVybmFsQ2xhc3Nlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmV4dGVybmFsQ2xhc3NlcyA9IHRoaXMuZXh0ZXJuYWxDbGFzc2VzLnJlZHVjZSgocHJlID0gW10sIGtleTogc3RyaW5nKSA9PiBbLi4ucHJlLCAuLi50aGlzW2tleV1dLCBbXSk7XG4gIH1cbiAgLyoqXG4gICAqIGJlaGF2aW9ycyDpgLvovpHlpI3nlKhcbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyBfaW5pdEJlaGF2aW9ycygpIHtcbiAgICBpZiAoIXRoaXMuYmVoYXZpb3JzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnMucmVkdWNlKChwcmUgPSBbXSwga2V5OiBzdHJpbmcpID0+IFsuLi5wcmUsIC4uLnRoaXNba2V5XV0sIFtdKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJlaGF2aW9ycyk7XG5cbiAgfVxufVxuIl19