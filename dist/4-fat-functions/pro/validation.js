"use strict";
function validationMessages(validations, object) {
    return Object.entries(validations).reduce(function (errors, _a) {
        var property = _a[0], requirements = _a[1];
        errors[property] = [];
        if (requirements.required) {
            var errorMessage = validateRequiredMessage(object[property]);
            if (errorMessage)
                errors[property].push(errorMessage);
        }
        if (requirements.length) {
            var errorMessage = validateLengthMessage(object[property], requirements.length);
            if (errorMessage)
                errors[property].push(errorMessage);
        }
        return errors;
    }, {});
}
function validateLengthMessage(value, length) {
    if (value == null)
        return;
    if (value.length >= length)
        return;
    return "must be " + length + " or more characters";
}
function validateRequiredMessage(value) {
    if (value)
        return;
    return 'is required';
}
function printErrors(errors) {
    Object.entries(errors).forEach(function (_a) {
        var property = _a[0], messages = _a[1];
        messages.forEach(function (message) {
            console.error(property + " " + message);
        });
    });
}
module.exports = {
    validationMessages: validationMessages,
    printErrors: printErrors
};
