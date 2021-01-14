"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = exports.Controller = void 0;
function Controller(target) {
    Page(new target());
}
exports.Controller = Controller;
function Data(target, key) {
    if (!target.data) {
        target['data'] = {};
    }
    target.data[key] = '';
}
exports.Data = Data;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLQSxTQUFnQixVQUFVLENBQUMsTUFBVztJQUNsQyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFGRCxnQ0FFQztBQUVELFNBQWdCLElBQUksQ0FBQyxNQUFXLEVBQUUsR0FBVztJQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDdkI7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixDQUFDO0FBTEQsb0JBS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjog44GEIOeLguWllOeahOicl+eJm1xuICogQERhdGU6IDIwMjAtMDQtMjkgMTU6NTE6MzhcbiAqIEBEZXNjcmlwdGlvbjog6KOF6aWw5ZmoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb250cm9sbGVyKHRhcmdldDogYW55KSB7XG4gICAgUGFnZShuZXcgdGFyZ2V0KCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRGF0YSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRhcmdldC5kYXRhKSB7XG4gICAgICAgIHRhcmdldFsnZGF0YSddID0ge307XG4gICAgfVxuICAgIHRhcmdldC5kYXRhW2tleV0gPSAnJztcbn1cblxuXG4iXX0=