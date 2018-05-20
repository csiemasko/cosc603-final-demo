var _v = new Vue({
    el: '#root',
    filters: {
        'string-length'(v) {
            return v == null ? 0 : v.length;
        },
        'is-numeric'(v) {
            return !isNaN(parseFloat(v)) && isFinite(v);
        },
        email(v){
            return v == null ? false : v.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null ? false : true;
        },
        'valid-password'(v){
            // The string must contain at least 1 lowercase alphabetical character
            // The string must contain at least 1 uppercase alphabetical character
            // The string must contain at least 1 numeric character
            // The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
            // The string must be 6 characters or longer
            return v == null ? false : v.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})") == null ? false : true;
        },
        'confirmed-password'(v){

        }

    },
    data: {
        inputs: {
            stringLength: null,
            isNumeric: null,
            email: null,
            isValidPassword: null,
            isPwdConfirmed: false
        }
    },
    methods: {

    }
});