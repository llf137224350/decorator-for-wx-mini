"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageLifetimes = exports.Lifetimes = exports.Observers = exports.Method = exports.Data = exports.Prop = exports.ExternalClasses = exports.Component = void 0;
function Components(target) {
    Component(new target());
}
exports.Component = Components;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLFNBQVMsVUFBVSxDQUFDLE1BQVc7SUFDN0IsU0FBUyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBc0dlLCtCQUFTO0FBL0Z6QixTQUFTLGVBQWUsQ0FBQyxPQUFpQjtJQUN4QyxPQUFPLFVBQVUsTUFBVyxFQUFFLFdBQW9CO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDM0IsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsTUFBTSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQXdGQywwQ0FBZTtBQWhGakIsU0FBUyxJQUFJLENBQUMsSUFBa0IsRUFBRSxZQUFzQjtJQUExQyxxQkFBQSxFQUFBLGFBQWtCO0lBQUUsNkJBQUEsRUFBQSxpQkFBc0I7SUFDdEQsT0FBTyxVQUFVLE1BQVcsRUFBRSxXQUFtQjtRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUN0QixNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRztZQUMvQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxZQUFZO1NBQ3BCLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBdUVDLG9CQUFJO0FBaEVOLFNBQVMsSUFBSSxDQUFDLFlBQXNCO0lBQXRCLDZCQUFBLEVBQUEsaUJBQXNCO0lBQ2xDLE9BQU8sVUFBVSxNQUFXLEVBQUUsV0FBbUI7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNyQjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsWUFBWSxDQUFDO0lBQzFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUEwREMsb0JBQUk7QUFwRE4sU0FBUyxNQUFNO0lBQ2IsT0FBTyxVQUFVLE1BQVcsRUFBRSxXQUFtQjtRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNuQixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQThDQyx3QkFBTTtBQXZDUixTQUFTLFNBQVMsQ0FBQyxlQUF1QjtJQUN4QyxPQUFPLFVBQVUsTUFBVyxFQUFFLFdBQW1CO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDMUI7UUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUM7QUFDSixDQUFDO0FBaUNDLDhCQUFTO0FBM0JYLFNBQVMsU0FBUztJQUNoQixPQUFPLFVBQVUsTUFBVyxFQUFFLFdBQW1CO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDMUI7UUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUM7QUFDSixDQUFDO0FBcUJDLDhCQUFTO0FBZlgsU0FBUyxhQUFhO0lBQ3BCLE9BQU8sVUFBVSxNQUFXLEVBQUUsV0FBbUI7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDekIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUM5QjtRQUNELE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUMsQ0FBQztBQUNKLENBQUM7QUFTQyxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciDjgYQg54uC5aWU55qE6JyX54mbXG4gKiBAZGF0ZSAyMDIwLzYvOVxuICogQGRlc2Mg57uE5Lu26KOF6aWw5ZmoXG4gKi9cbmZ1bmN0aW9uIENvbXBvbmVudHModGFyZ2V0OiBhbnkpIHtcbiAgQ29tcG9uZW50KG5ldyB0YXJnZXQoKSk7XG59XG5cbi8qKlxuICog57uE5Lu25aSW6KaG55uW57uE5Lu25YaF5qC35byP5pq06ZyyY2xhc3NcbiAqIEBwYXJhbSBjbGFzc2VzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gRXh0ZXJuYWxDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5Pzogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2cocHJvcGVydHlLZXkpO1xuICAgIGlmICghdGFyZ2V0LmV4dGVybmFsQ2xhc3Nlcykge1xuICAgICAgdGFyZ2V0WydleHRlcm5hbENsYXNzZXMnXSA9IFtdO1xuICAgIH1cbiAgICB0YXJnZXQuZXh0ZXJuYWxDbGFzc2VzID0gY2xhc3NlcztcbiAgfTtcbn1cblxuLyoqXG4gKiBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0gdHlwZSDnsbvlnotcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUg6buY6K6k5YC8XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUHJvcCh0eXBlOiBhbnkgPSBPYmplY3QsIGRlZmF1bHRWYWx1ZTogYW55ID0ge30pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuICAgIGlmICghdGFyZ2V0LnByb3BlcnRpZXMpIHtcbiAgICAgIHRhcmdldFsncHJvcGVydGllcyddID0ge307XG4gICAgfVxuICAgIHRhcmdldC5wcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XSA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICB2YWx1ZTogZGVmYXVsdFZhbHVlXG4gICAgfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBkYXRhXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIOm7mOiupOWAvFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIERhdGEoZGVmYXVsdFZhbHVlOiBhbnkgPSB7fSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG4gICAgaWYgKCF0YXJnZXQuZGF0YSkge1xuICAgICAgdGFyZ2V0WydkYXRhJ10gPSB7fTtcbiAgICB9XG4gICAgdGFyZ2V0LmRhdGFbcHJvcGVydHlLZXldID0gZGVmYXVsdFZhbHVlO1xuICB9O1xufVxuXG4vKipcbiAqIG1ldGhvZHNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBNZXRob2QoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRhcmdldC5tZXRob2RzKSB7XG4gICAgICB0YXJnZXRbJ21ldGhvZHMnXSA9IHt9O1xuICAgIH1cbiAgICB0YXJnZXQubWV0aG9kc1twcm9wZXJ0eUtleV0gPSB0YXJnZXRbcHJvcGVydHlLZXldO1xuICB9O1xufVxuXG4vKipcbiAqIOWxnuaAp+ebkeWQrFxuICogQHBhcmFtIG1vbml0b3JlZE9iamVjdCDooqvnm5HlkKzlr7nosaFrZXlcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBPYnNlcnZlcnMobW9uaXRvcmVkT2JqZWN0OiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuICAgIGlmICghdGFyZ2V0Lm9ic2VydmVycykge1xuICAgICAgdGFyZ2V0WydvYnNlcnZlcnMnXSA9IHt9O1xuICAgIH1cbiAgICB0YXJnZXQub2JzZXJ2ZXJzW21vbml0b3JlZE9iamVjdF0gPSB0YXJnZXRbcHJvcGVydHlLZXldO1xuICB9O1xufVxuXG4vKipcbiAqIOeUn+WRveWRqOacn1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIExpZmV0aW1lcygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuICAgIGlmICghdGFyZ2V0LmxpZmV0aW1lcykge1xuICAgICAgdGFyZ2V0WydsaWZldGltZXMnXSA9IHt9O1xuICAgIH1cbiAgICB0YXJnZXQubGlmZXRpbWVzW3Byb3BlcnR5S2V5XSA9IHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIH07XG59XG5cbi8qKlxuICog6aG16Z2i55Sf5ZG95ZGo5pyfXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUGFnZUxpZmV0aW1lcygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuICAgIGlmICghdGFyZ2V0LnBhZ2VMaWZldGltZXMpIHtcbiAgICAgIHRhcmdldFsncGFnZUxpZmV0aW1lcyddID0ge307XG4gICAgfVxuICAgIHRhcmdldC5wYWdlTGlmZXRpbWVzW3Byb3BlcnR5S2V5XSA9IHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIH07XG59XG5leHBvcnQge1xuICBDb21wb25lbnRzIGFzIENvbXBvbmVudCxcbiAgRXh0ZXJuYWxDbGFzc2VzLFxuICBQcm9wLFxuICBEYXRhLFxuICBNZXRob2QsXG4gIE9ic2VydmVycyxcbiAgTGlmZXRpbWVzLFxuICBQYWdlTGlmZXRpbWVzXG59O1xuIl19