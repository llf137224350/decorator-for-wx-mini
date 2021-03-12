"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lock = void 0;
var Lock = (function () {
    function Lock() {
        this.locked = false;
    }
    Lock.prototype.lock = function () {
        this.locked = true;
    };
    Lock.prototype.unlock = function () {
        this.locked = false;
    };
    Lock.prototype.isLocked = function () {
        return this.locked;
    };
    return Lock;
}());
exports.Lock = Lock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ja2VkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9ja2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BO0lBQUE7UUFFVSxXQUFNLEdBQVksS0FBSyxDQUFDO0lBbUJsQyxDQUFDO0lBZlEsbUJBQUksR0FBWDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFJTSxxQkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUlNLHVCQUFRLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IOOBhCDni4LlpZTnmoTonJfniZtcbiAqIEBEYXRlOiAyMDIwLTA0LTI5IDE1OjUxOjM4XG4gKiBARGVzY3JpcHRpb246IERlc2Mg5Yqg6ZSB5bel5YW357G7XG4gKi9cblxuZXhwb3J0IGNsYXNzIExvY2sge1xuICAvLyDmmK/lkKbplIHlrpogdHJ1ZSDkuLrplIHlrpog5ZCm5YiZ5Li65pyq6ZSB5a6aXG4gIHByaXZhdGUgbG9ja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiDplIHlrppcbiAgICovXG4gIHB1YmxpYyBsb2NrKCk6IHZvaWQge1xuICAgIHRoaXMubG9ja2VkID0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog6Kej6Zmk6ZSB5a6aXG4gICAqL1xuICBwdWJsaWMgdW5sb2NrKCk6IHZvaWQge1xuICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIOaYr+WQpuW3sumUgeWumlxuICAgKi9cbiAgcHVibGljIGlzTG9ja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxvY2tlZDtcbiAgfVxufVxuIl19