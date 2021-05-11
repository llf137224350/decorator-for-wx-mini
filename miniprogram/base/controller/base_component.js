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
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlX2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBd0JBO0lBQUE7UUFPUyxlQUFVLEdBQUcsRUFBTyxDQUFDO1FBRXJCLFNBQUksR0FBRyxFQUFPLENBQUM7SUFxQ3hCLENBQUM7SUFuQ1EsNkJBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFLTSx1Q0FBZSxHQUF0QjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXO1lBQzlDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBYyxDQUF3QixDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBZ0MsQ0FBQztZQUN6RyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQWMsQ0FBeUIsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtNLGlDQUFTLEdBQWhCO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVcsSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFjLENBQUMsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFLTSx5Q0FBaUIsR0FBeEIsVUFBeUIsR0FBVztRQUFwQyxpQkFLQztRQUpDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQVEsRUFBRSxHQUFXO1lBQXJCLG9CQUFBLEVBQUEsUUFBUTtZQUFrQixzQkFBSSxHQUFHLEVBQUssS0FBSSxDQUFDLEdBQUcsQ0FBQztRQUFyQixDQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjog44GEIOeLguWllOeahOicl+eJm1xuICogQERhdGU6IDIwMjEtMDUtMDkgMTc6MDc6NTdcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTIgMDA6MDA6NTNcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuaW50ZXJmYWNlIFRyaWdnZXJFdmVudE9wdGlvbiB7XG4gIC8qKiDkuovku7bmmK/lkKblhpLms6FcbiAgICpcbiAgICog6buY6K6k5YC877yaIGBmYWxzZWBcbiAgICovXG4gIGJ1YmJsZXM/OiBib29sZWFuO1xuICAvKiog5LqL5Lu25piv5ZCm5Y+v5Lul56m/6LaK57uE5Lu26L6555WM77yM5Li6ZmFsc2Xml7bvvIzkuovku7blsIblj6rog73lnKjlvJXnlKjnu4Tku7bnmoToioLngrnmoJHkuIrop6blj5HvvIzkuI3ov5vlhaXlhbbku5bku7vkvZXnu4Tku7blhoXpg6hcbiAgICpcbiAgICog6buY6K6k5YC877yaIGBmYWxzZWBcbiAgICovXG4gIGNvbXBvc2VkPzogYm9vbGVhbjtcbiAgLyoqIOS6i+S7tuaYr+WQpuaLpeacieaNleiOt+mYtuautVxuICAgKlxuICAgKiDpu5jorqTlgLzvvJogYGZhbHNlYFxuICAgKi9cbiAgY2FwdHVyZVBoYXNlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQ8UCwgRD4ge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIC8vIOiuvue9ruaVsOaNrlxuICBwdWJsaWMgWydzZXREYXRhJ106IChkYXRhOiBQYXJ0aWFsPEQ+LCBjYWxsYmFjaz86ICgpID0+IHZvaWQpID0+IHZvaWQ7XG4gIC8vIOWQkeeItuWFg+e0oOa0vuWPkeS6i+S7tlxuICBwdWJsaWMgWyd0cmlnZ2VyRXZlbnQnXTogKG5hbWU6IHN0cmluZywgZGV0YWlsPzogdW5rbm93biwgb3B0aW9ucz86IFRyaWdnZXJFdmVudE9wdGlvbikgPT4gdm9pZDtcbiAgLy8g57uE5Lu25bGe5oCnXG4gIHB1YmxpYyBwcm9wZXJ0aWVzID0ge30gYXMgUDtcbiAgLy8g57uE5Lu26Ieq5bex5a6a5LmJ55qE5pWw5o2uXG4gIHB1YmxpYyBkYXRhID0ge30gYXMgRDtcblxuICBwdWJsaWMgX2luaXQoKSB7XG4gICAgdGhpcy5faW5pdFByb3BlcnRpZXMoKTtcbiAgICB0aGlzLl9pbml0RGF0YSgpO1xuICAgIHRoaXMuX2luaXRWYWx1ZUlzQXJyYXkoJ2V4dGVybmFsQ2xhc3NlcycpO1xuICAgIHRoaXMuX2luaXRWYWx1ZUlzQXJyYXkoJ2JlaGF2aW9ycycpO1xuICB9XG4gIC8qKlxuICAgKiAg5Yid5aeL5YyW5aSE55CGcHJvcGVydGllc1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIF9pbml0UHJvcGVydGllcygpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSB0aGlzLl9fcHJvdG9fXy5wcm9wZXJ0aWVzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcGVydGllcykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICh0aGlzLnByb3BlcnRpZXNba2V5IGFzIGtleW9mIFBdIGFzIHsgdHlwZT86IHVua25vd24gfSkudHlwZSA9IHRoaXNba2V5XS5jb25zdHJ1Y3RvciBhcyBTdHJpbmdDb25zdHJ1Y3RvcjtcbiAgICAgICh0aGlzLnByb3BlcnRpZXNba2V5IGFzIGtleW9mIFBdIGFzIHsgdmFsdWU/OiB1bmtub3duIH0pLnZhbHVlID0gdGhpc1trZXldO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiAg5Yid5aeL5YyW5aSE55CGZGF0YVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIF9pbml0RGF0YSgpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLl9fcHJvdG9fXy5kYXRhO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+ICh0aGlzLmRhdGFba2V5IGFzIGtleW9mIERdID0gdGhpc1trZXldKSk7XG4gIH1cbiAgLyoqXG4gICAqIOWIneWni+WMluWkhOeQhiBleHRlcm5hbENsYXNzZXMvYmVoYXZpb3JzXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBwdWJsaWMgX2luaXRWYWx1ZUlzQXJyYXkoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXNba2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzW2tleV0gPSB0aGlzW2tleV0ucmVkdWNlKChwcmUgPSBbXSwga2V5OiBzdHJpbmcpID0+IFsuLi5wcmUsIC4uLnRoaXNba2V5XV0sIFtdKTtcbiAgfVxufVxuIl19