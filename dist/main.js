(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])