/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 08 2022 16:32:29 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

export default class Stack {
  private max_size = 10
  private arr: Array<number | undefined>

  constructor(max_size: number) {
    this.arr = []
    this.max_size = max_size
  }

  // push element to stack
  public push(elem: number): void {
    this.arr[this.arr.length] = elem
  }

  // pop element from stack
  public pop(): number | undefined {
    if (this.isEmpty()) {
      const data = this.arr[this.arr.length - 1]
      this.arr[this.arr.length - 1] = undefined
      return data
    }

    return undefined
  }

  // check if stack is empty
  public isEmpty(): boolean {
    return this.arr.length === 0
  }

  // check if stack is full
  public isFull(): boolean {
    return this.arr.length === this.max_size
  }
}
