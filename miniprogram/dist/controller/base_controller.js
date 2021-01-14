"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController = (function () {
    function BaseController() {
    }
    BaseController.prototype.onLoad = function () {
        this._init();
    };
    BaseController.prototype._init = function () {
        var _this = this;
        if (!this.data) {
            return;
        }
        var keys = Object.keys(this.data);
        keys.forEach(function (key) {
            var value = _this[key];
            _this._reactive(key);
            _this[key] = value;
        });
    };
    BaseController.prototype._reactive = function (key) {
        Object.defineProperty(this, key, {
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
    };
    return BaseController;
}());
exports.default = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzZV9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQWdDQSxDQUFDO0lBNUJVLCtCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLDhCQUFLLEdBQVo7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osT0FBTztTQUNWO1FBQ0QsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVc7WUFDckIsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxrQ0FBUyxHQUFoQixVQUFpQixHQUFXO1FBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUM3QixHQUFHO2dCQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixDQUFDO1lBQ0QsR0FBRyxFQUFILFVBQUksR0FBUTs7Z0JBQ1IsSUFBSSxDQUFDLE9BQU87b0JBQ1IsR0FBQyxHQUFHLElBQUcsR0FBRzt3QkFDWixDQUFDO1lBQ1AsQ0FBQztTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29udHJvbGxlciB7XG4gICAgLy8gc2V0RGF0YVxuICAgIFt4OiBzdHJpbmddOiBhbnk7XG5cbiAgICBwdWJsaWMgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIF9pbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEpO1xuICAgICAgICBrZXlzLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgIHRoaXMuX3JlYWN0aXZlKGtleSk7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgX3JlYWN0aXZlKGtleTogc3RyaW5nKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2tleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbDogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgW2tleV06IHZhbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuIl19