"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createUser(user) {
    return __assign(__assign({}, user), { id: Date.now(), createdAt: new Date(), updatedAt: new Date() });
}
function updateUser(user) {
    return __assign(__assign({}, user), { updatedAt: new Date() });
}
module.exports = { createUser: createUser, updateUser: updateUser };
