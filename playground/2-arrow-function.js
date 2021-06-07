// const birthdayEvent = {
//   name: "Birthday Party",
//   guestList: ["Raj", "Sweta", "Puja"],
//   printGuestList: function () {
//     const that = this;
//     console.log("Guest list for " + this.name);
//     this.guestList.forEach(function (guest) {
//       console.log(guest + " is attending " + that.name);
//     });
//   },
// };

const birthdayEvent = {
  name: "Birthday Party",
  guestList: ["Raj", "Sweta", "Puja"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

birthdayEvent.printGuestList();
