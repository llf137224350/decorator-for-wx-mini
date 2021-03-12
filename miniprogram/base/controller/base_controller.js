"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
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
exports.BaseController = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzZV9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0lBQUE7SUFnQ0EsQ0FBQztJQTVCUSwrQkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVNLDhCQUFLLEdBQVo7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVc7WUFDdkIsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxrQ0FBUyxHQUFoQixVQUFpQixHQUFXO1FBQzFCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUMvQixHQUFHO2dCQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixDQUFDO1lBQ0QsR0FBRyxFQUFILFVBQUksR0FBUTs7Z0JBQ1YsSUFBSSxDQUFDLE9BQU87b0JBQ1YsR0FBQyxHQUFHLElBQUcsR0FBRzt3QkFDVixDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmFzZUNvbnRyb2xsZXIge1xuICAvLyBzZXREYXRhXG4gIFt4OiBzdHJpbmddOiBhbnk7XG5cbiAgcHVibGljIG9uTG9hZCgpIHtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBwdWJsaWMgX2luaXQoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSk7XG4gICAga2V5cy5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG4gICAgICB0aGlzLl9yZWFjdGl2ZShrZXkpO1xuICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgX3JlYWN0aXZlKGtleTogc3RyaW5nKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2tleV07XG4gICAgICB9LFxuICAgICAgc2V0KHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgW2tleV06IHZhbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19