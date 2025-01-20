const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9 ]+$/, "Please enter a valid name"]
    },
    email: {
        type: String,
        required: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "please enter a valid email",
        ],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: validatePassword,
            message: 'Password must contain at least one uppercase and lowercase letter, symbol, and a digit'
        },
    },
    dateOfBirth: {
        type: Date,
        required: true,
        validate: {
            validator: validateAge,
            message : 'You Must be 18 years to register'
        }
    },
});

function validatePassword(password) {
    return (
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*{}()?<>]/.test(password)
    );
}
function validateAge(dateOfBirth){
    const today = new Date() ;
    const age = today.getFullYear() - dateOfBirth.getFullYear();
    return age >= 18 ;
}

module.exports = mongoose.model('user', userSchema);