function validationMessages(validations, object) {
    return Object.defineProperties(validations).reduce((errors, [property, requirements]) => {
        errors[property] = []
        if (requirements.required) {
            const errorMessage = validateRequiredMessage(object[property])
            if (errorMessage) errors[property].push(errorMessage)
        }

        if (requirements.length) {
            const errorMessage = validateLengthMessage(object[property], requirements.length)
            if (errorMessage) errors[property].push(errorMessage)
        }

        return errors
    }, {})
}

function validateRequiredMessage(value) {
    if (value) return

    return 'is required'
}

function printErrors(errors) {
    Object.entries(errors).forEach(([property, messages]) => {
        messages.forEach(message => {
            console.error(`${property} ${message}`);
        })
    })
}

module.exports = {
    validateRequiredMessages,
    printErrors
}