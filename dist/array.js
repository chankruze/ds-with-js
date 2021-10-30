"use strict";
/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 30 2021 16:01:38 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Arr_array;
Object.defineProperty(exports, "__esModule", { value: true });
var Arr = /** @class */ (function () {
    function Arr() {
        var _this = this;
        /**
         * Class fields are public by default, but private class members can be
         * created by using a hash # prefix. The privacy encapsulation of these
         * class features is enforced by JavaScript itself.
        */
        _Arr_array.set(this, []);
        // see the size of array
        this.getSize = function () { return __classPrivateFieldGet(_this, _Arr_array, "f").length; };
        // print 
        this.getArrElems = function () { return __classPrivateFieldGet(_this, _Arr_array, "f"); };
        // insert an array element
        this.insertAtTheEnd = function (elem) { return __classPrivateFieldGet(_this, _Arr_array, "f").push(elem); };
        // insert an array element at the beginning
        this.insertAtTheBeginning = function (elem) { return __classPrivateFieldGet(_this, _Arr_array, "f").unshift(elem); };
        // delete an array element
        this.deleteFirstOccuranceOfElem = function (elem) {
            var firstIndex = __classPrivateFieldGet(_this, _Arr_array, "f").indexOf(elem);
            __classPrivateFieldSet(_this, _Arr_array, __classPrivateFieldGet(_this, _Arr_array, "f").filter(function (_, idx) { return idx !== firstIndex; }), "f");
        };
        // delete all occurance of an element from the array
        this.deleteAllOccuranceOfElem = function (elem) { return __classPrivateFieldSet(_this, _Arr_array, __classPrivateFieldGet(_this, _Arr_array, "f").filter(function (num) { return num !== elem; }), "f"); };
        // delete last element
        this.deleteLastElem = function () { return __classPrivateFieldGet(_this, _Arr_array, "f").pop(); };
        // delete first element
        this.deleteFirstElem = function () { return __classPrivateFieldGet(_this, _Arr_array, "f").shift(); };
    }
    return Arr;
}());
exports.default = Arr;
_Arr_array = new WeakMap();
