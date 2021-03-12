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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzZV9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQUE7SUFnQ0EsQ0FBQztJQTVCVywrQkFBTSxHQUFoQjtRQUNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFTyw4QkFBSyxHQUFiO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXO1lBQ3ZCLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sa0NBQVMsR0FBakIsVUFBa0IsR0FBVztRQUMzQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDL0IsR0FBRztnQkFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsQ0FBQztZQUNELEdBQUcsRUFBSCxVQUFJLEdBQVE7O2dCQUNWLElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsR0FBRyxJQUFHLEdBQUc7d0JBQ1YsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDpobXpnaLmjqfliLblmajln7rnsbtcbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgLy8gc2V0RGF0YVxuICBbeDogc3RyaW5nXTogYW55O1xuXG4gIHByb3RlY3RlZCBvbkxvYWQoKSB7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5kYXRhKTtcbiAgICBrZXlzLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXNba2V5XTtcbiAgICAgIHRoaXMuX3JlYWN0aXZlKGtleSk7XG4gICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlYWN0aXZlKGtleTogc3RyaW5nKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2tleV07XG4gICAgICB9LFxuICAgICAgc2V0KHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgW2tleV06IHZhbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19