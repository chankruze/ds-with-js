/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 30 2021 16:01:38 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

export default class Arr {
    /**
     * Class fields are public by default, but private class members can be 
     * created by using a hash # prefix. The privacy encapsulation of these
     * class features is enforced by JavaScript itself.
    */
    #array: Array<Number> = [];

    constructor() { }

    // see the size of array
    getSize = () => this.#array.length;

    // print 
    getArrElems = () => this.#array;

    // insert an array element
    insertAtTheEnd = (elem: Number) => this.#array.push(elem)

    // insert an array element at the beginning
    insertAtTheBeginning = (elem: Number) => this.#array.unshift(elem)

    // delete first element
    deleteFirstElem = () => this.#array.shift()

    // delete last element
    deleteLastElem = () => this.#array.pop()

    // delete first occurance of an array element
    deleteFirstOccuranceOfElem = (elem: Number) => {
        const firstIndex = this.#array.indexOf(elem);
        this.#array = this.#array.filter((_, idx) => idx !== firstIndex)
    }

    // delete last occurance of an array element
    deleteLastOccuranceOfElem = (elem: Number) => {
        const firstIndex = this.#array.lastIndexOf(elem);
        this.#array = this.#array.filter((_, idx) => idx !== firstIndex)
    }

    // delete all occurance of an element from the array
    deleteAllOccuranceOfElem = (elem: Number) => this.#array = this.#array.filter(num => num !== elem);
}