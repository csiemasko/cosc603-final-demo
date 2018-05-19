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
        }
    },
    data: {
        inputs: {
            stringLength: null,
            isNumeric: null,
            email: null
        }
    },
    methods: {

    }
});