// * Standard function
// const square = function (x) {
//   return x * x
// }

// *  Standard arrow function
// const square = (x) => {
//   return x * x
// }

// * 1-liner arrow function
// const square = (x) => x * x

// console.log(square(2)) // 4
// console.log(square(3)) // 9

/*
  * Arrow functions as properties on an object
  - arrow functions don't bind their own `this` value. They access the `this` value in the context in which they are created
  - with arrow functions we won't have access to `this` as reference to the eventObj. Check `printGuestListNoAccess`
  - if we want to set a method on an object, the ES6 method definition syntax `printGuestList()` is the right way
*/

const eventObj = {
  name: 'Birthday Party',
  guestList: ['Enea', 'Jim', 'John', 'Jack'],
  printGuestListStandardFn: function () {
    console.log(`Guest list for "${this.name}"`)
  },
  printGuestListNoAccess: () => {
    console.log(`Guest list for "${this.name}"`)
  },
  printGuestListArrowFn() {
    console.log(`Guest list for "${this.name}"`)
  },
  printGuestList() {
    console.log(`Guest list for "${this.name}"`)

    this.guestList.forEach((guest) => {
      console.log(`"${guest}" is attending the "${this.name}"`)
    })
  },
}

eventObj.printGuestListStandardFn()
eventObj.printGuestListNoAccess()
eventObj.printGuestListArrowFn()
eventObj.printGuestList()
