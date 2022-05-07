"use strict";
/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 30 2021 15:59:25 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = __importDefault(require("./array"));
var arr = new array_1.default();
console.log("size of arr_1: ", arr.getSize());
console.log("print arr_1: ", arr.getArrElems());
// insert elems to array
arr.insertAtTheEnd(1);
arr.insertAtTheEnd(2);
arr.insertAtTheEnd(2);
arr.insertAtTheEnd(3);
arr.insertAtTheEnd(4);
arr.insertAtTheEnd(5);
arr.insertAtTheEnd(5);
arr.insertAtTheEnd(5);
arr.insertAtTheEnd(6);
arr.insertAtTheEnd(7);
arr.insertAtTheEnd(8);
arr.insertAtTheEnd(9);
// print array
console.log(arr.getArrElems());
// delete first element
arr.deleteFirstElem();
// delete last element
arr.deleteLastElem();
// delete first occurance of a given number
arr.deleteFirstOccuranceOfElem(5);
// delete last occurance of a given number
arr.deleteLastOccuranceOfElem(5);
// delete all occurance of a given number
arr.deleteAllOccuranceOfElem(5);
arr.insertAtTheBeginning(4);
arr.insertAtTheBeginning(3);
arr.insertAtTheBeginning(2);
arr.insertAtTheBeginning(1);
// print array
console.log(arr.getArrElems());
// print array
console.log(arr.getArrElems());
