/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 08 2022 18:37:15 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Arr from '../src/array'

describe('Array test', () => {
  // create array
  it('should create an array', () => {
    const arr = new Arr()
    expect(arr).toBeDefined()
  })

  // should get elements of the array
  it('should get elements of the array', () => {
    const arr = new Arr()
    arr.insertAtTheEnd(1)
    arr.insertAtTheEnd(2)
    arr.insertAtTheEnd(3)
    expect(arr.getArrElems()).toEqual([1, 2, 3])
  })

  // should insert element at the end of the array
  it('should insert element at the end of the array', () => {
    const arr = new Arr()
    arr.insertAtTheEnd(1)
    arr.insertAtTheEnd(2)
    arr.insertAtTheEnd(3)
    expect(arr.getArrElems()).toEqual([1, 2, 3])
  })

  // should insert element at the beginning of the array
  it('should insert element at the beginning of the array', () => {
    const arr = new Arr()
    arr.insertAtTheBeginning(3)
    arr.insertAtTheBeginning(2)
    arr.insertAtTheBeginning(1)
    expect(arr.getArrElems()).toEqual([1, 2, 3])
  })

  // delete first element from array
  it('should delete first element from array', () => {
    const arr = new Arr()
    arr.insertAtTheEnd(1)
    arr.insertAtTheEnd(2)
    arr.insertAtTheEnd(3)
    arr.deleteFirstElem()
    expect(arr.getArrElems()).toEqual([2, 3])
  })

  // delete last element from array
  it('should delete last element from array', () => {
    const arr = new Arr()
    arr.insertAtTheEnd(1)
    arr.insertAtTheEnd(2)
    arr.insertAtTheEnd(3)
    arr.deleteLastElem()
    expect(arr.getArrElems()).toEqual([1, 2])
  })

  // delete first occurance of x from array
  it('should delete first occurance of x from array', () => {
    const arr = new Arr()
    arr.insertAtTheEnd(1)
    arr.insertAtTheEnd(2)
    arr.insertAtTheEnd(2)
    arr.insertAtTheEnd(3)
    arr.insertAtTheEnd(2)
    arr.deleteFirstOccuranceOfElem(2)
    expect(arr.getArrElems()).toEqual([1, 2, 3, 2])
  })

  // delete all occurance of x from array
  it('should delete all occurance of x from array', () => {
    const arr = new Arr()
    arr.insertAtTheEnd(1)
    arr.insertAtTheEnd(2)
    arr.insertAtTheEnd(2)
    arr.insertAtTheEnd(3)
    arr.insertAtTheEnd(2)
    arr.deleteLastOccuranceOfElem(2)
    expect(arr.getArrElems()).toEqual([1, 2, 2, 3])
  })

  // delete all occurance of x from array
  it('should delete all occurance of x from array', () => {
    const arr = new Arr()
    arr.insertAtTheEnd(1)
    arr.insertAtTheEnd(2)
    arr.insertAtTheEnd(2)
    arr.insertAtTheEnd(3)
    arr.insertAtTheEnd(2)
    arr.deleteAllOccuranceOfElem(2)
    expect(arr.getArrElems()).toEqual([1, 3])
  })

  // should get size of the array
  it('should get size of the array', () => {
    const arr = new Arr()
    arr.insertAtTheEnd(1)
    arr.insertAtTheEnd(2)
    arr.insertAtTheEnd(2)
    arr.insertAtTheEnd(3)
    arr.insertAtTheEnd(2)
    expect(arr.getSize()).toEqual(5)
  })
})
