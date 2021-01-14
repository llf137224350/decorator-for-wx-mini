"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageLifetimes = exports.Lifetimes = exports.Observers = exports.Method = exports.Data = exports.Prop = exports.ExternalClasses = exports.Components = void 0;
function Components(target) {
    Component(new target());
}
exports.Components = Components;
function ExternalClasses(classes) {
    return function (target, propertyKey) {
        console.log(propertyKey);
        if (!target.externalClasses) {
            target['externalClasses'] = [];
        }
        target.externalClasses = classes;
    };
}
exports.ExternalClasses = ExternalClasses;
function Prop(type, defaultValue) {
    if (type === void 0) { type = Object; }
    if (defaultValue === void 0) { defaultValue = {}; }
    return function (target, propertyKey) {
        if (!target.properties) {
            target['properties'] = {};
        }
        target.properties[propertyKey] = {
            type: type,
            value: defaultValue
        };
    };
}
exports.Prop = Prop;
function Data(defaultValue) {
    if (defaultValue === void 0) { defaultValue = {}; }
    return function (target, propertyKey) {
        if (!target.data) {
            target['data'] = {};
        }
        target.data[propertyKey] = defaultValue;
    };
}
exports.Data = Data;
function Method() {
    return function (target, propertyKey) {
        if (!target.methods) {
            target['methods'] = {};
        }
        target.methods[propertyKey] = target[propertyKey];
    };
}
exports.Method = Method;
function Observers(monitoredObject) {
    return function (target, propertyKey) {
        if (!target.observers) {
            target['observers'] = {};
        }
        target.observers[monitoredObject] = target[propertyKey];
    };
}
exports.Observers = Observers;
function Lifetimes() {
    return function (target, propertyKey) {
        if (!target.lifetimes) {
            target['lifetimes'] = {};
        }
        target.lifetimes[propertyKey] = target[propertyKey];
    };
}
exports.Lifetimes = Lifetimes;
function PageLifetimes() {
    return function (target, propertyKey) {
        if (!target.pageLifetimes) {
            target['pageLifetimes'] = {};
        }
        target.pageLifetimes[propertyKey] = target[propertyKey];
    };
}
exports.PageLifetimes = PageLifetimes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLFNBQWdCLFVBQVUsQ0FBQyxNQUFXO0lBQ3BDLFNBQVMsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUZELGdDQUVDO0FBT0QsU0FBZ0IsZUFBZSxDQUFDLE9BQWlCO0lBQy9DLE9BQU8sVUFBVSxNQUFXLEVBQUUsV0FBb0I7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtZQUMzQixNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDaEM7UUFDRCxNQUFNLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztJQUNuQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBUkQsMENBUUM7QUFRRCxTQUFnQixJQUFJLENBQUMsSUFBa0IsRUFBRSxZQUFzQjtJQUExQyxxQkFBQSxFQUFBLGFBQWtCO0lBQUUsNkJBQUEsRUFBQSxpQkFBc0I7SUFDN0QsT0FBTyxVQUFVLE1BQVcsRUFBRSxXQUFtQjtRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUN0QixNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRztZQUMvQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxZQUFZO1NBQ3BCLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBVkQsb0JBVUM7QUFPRCxTQUFnQixJQUFJLENBQUMsWUFBc0I7SUFBdEIsNkJBQUEsRUFBQSxpQkFBc0I7SUFDekMsT0FBTyxVQUFVLE1BQVcsRUFBRSxXQUFtQjtRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxZQUFZLENBQUM7SUFDMUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVBELG9CQU9DO0FBTUQsU0FBZ0IsTUFBTTtJQUNwQixPQUFPLFVBQVUsTUFBVyxFQUFFLFdBQW1CO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDeEI7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUM7QUFDSixDQUFDO0FBUEQsd0JBT0M7QUFRRCxTQUFnQixTQUFTLENBQUMsZUFBdUI7SUFDL0MsT0FBTyxVQUFVLE1BQVcsRUFBRSxXQUFtQjtRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUNyQixNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzFCO1FBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVBELDhCQU9DO0FBTUQsU0FBZ0IsU0FBUztJQUN2QixPQUFPLFVBQVUsTUFBVyxFQUFFLFdBQW1CO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDMUI7UUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUM7QUFDSixDQUFDO0FBUEQsOEJBT0M7QUFNRCxTQUFnQixhQUFhO0lBQzNCLE9BQU8sVUFBVSxNQUFXLEVBQUUsV0FBbUI7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDekIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUM5QjtRQUNELE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUMsQ0FBQztBQUNKLENBQUM7QUFQRCxzQ0FPQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciDjgYQg54uC5aWU55qE6JyX54mbXG4gKiBAZGF0ZSAyMDIwLzYvOVxuICogQGRlc2Mg57uE5Lu26KOF6aWw5ZmoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnRzKHRhcmdldDogYW55KSB7XG4gIENvbXBvbmVudChuZXcgdGFyZ2V0KCkpO1xufVxuXG4vKipcbiAqIOe7hOS7tuWkluimhueblue7hOS7tuWGheagt+W8j+aatOmcsmNsYXNzXG4gKiBAcGFyYW0gY2xhc3Nlc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBFeHRlcm5hbENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk/OiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9wZXJ0eUtleSk7XG4gICAgaWYgKCF0YXJnZXQuZXh0ZXJuYWxDbGFzc2VzKSB7XG4gICAgICB0YXJnZXRbJ2V4dGVybmFsQ2xhc3NlcyddID0gW107XG4gICAgfVxuICAgIHRhcmdldC5leHRlcm5hbENsYXNzZXMgPSBjbGFzc2VzO1xuICB9O1xufVxuXG4vKipcbiAqIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB0eXBlIOexu+Wei1xuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSDpu5jorqTlgLxcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gUHJvcCh0eXBlOiBhbnkgPSBPYmplY3QsIGRlZmF1bHRWYWx1ZTogYW55ID0ge30pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuICAgIGlmICghdGFyZ2V0LnByb3BlcnRpZXMpIHtcbiAgICAgIHRhcmdldFsncHJvcGVydGllcyddID0ge307XG4gICAgfVxuICAgIHRhcmdldC5wcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XSA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICB2YWx1ZTogZGVmYXVsdFZhbHVlXG4gICAgfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBkYXRhXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIOm7mOiupOWAvFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBEYXRhKGRlZmF1bHRWYWx1ZTogYW55ID0ge30pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuICAgIGlmICghdGFyZ2V0LmRhdGEpIHtcbiAgICAgIHRhcmdldFsnZGF0YSddID0ge307XG4gICAgfVxuICAgIHRhcmdldC5kYXRhW3Byb3BlcnR5S2V5XSA9IGRlZmF1bHRWYWx1ZTtcbiAgfTtcbn1cblxuLyoqXG4gKiBtZXRob2RzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1ldGhvZCgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuICAgIGlmICghdGFyZ2V0Lm1ldGhvZHMpIHtcbiAgICAgIHRhcmdldFsnbWV0aG9kcyddID0ge307XG4gICAgfVxuICAgIHRhcmdldC5tZXRob2RzW3Byb3BlcnR5S2V5XSA9IHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIH07XG59XG5cblxuLyoqXG4gKiDlsZ7mgKfnm5HlkKxcbiAqIEBwYXJhbSBtb25pdG9yZWRPYmplY3Qg6KKr55uR5ZCs5a+56LGha2V5XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE9ic2VydmVycyhtb25pdG9yZWRPYmplY3Q6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG4gICAgaWYgKCF0YXJnZXQub2JzZXJ2ZXJzKSB7XG4gICAgICB0YXJnZXRbJ29ic2VydmVycyddID0ge307XG4gICAgfVxuICAgIHRhcmdldC5vYnNlcnZlcnNbbW9uaXRvcmVkT2JqZWN0XSA9IHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIH07XG59XG5cbi8qKlxuICog55Sf5ZG95ZGo5pyfXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExpZmV0aW1lcygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuICAgIGlmICghdGFyZ2V0LmxpZmV0aW1lcykge1xuICAgICAgdGFyZ2V0WydsaWZldGltZXMnXSA9IHt9O1xuICAgIH1cbiAgICB0YXJnZXQubGlmZXRpbWVzW3Byb3BlcnR5S2V5XSA9IHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIH07XG59XG5cbi8qKlxuICog6aG16Z2i55Sf5ZG95ZGo5pyfXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VMaWZldGltZXMoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRhcmdldC5wYWdlTGlmZXRpbWVzKSB7XG4gICAgICB0YXJnZXRbJ3BhZ2VMaWZldGltZXMnXSA9IHt9O1xuICAgIH1cbiAgICB0YXJnZXQucGFnZUxpZmV0aW1lc1twcm9wZXJ0eUtleV0gPSB0YXJnZXRbcHJvcGVydHlLZXldO1xuICB9O1xufVxuXG4iXX0=