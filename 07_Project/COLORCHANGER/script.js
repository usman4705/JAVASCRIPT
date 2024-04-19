// var myDiv = document.getElementById("grey");
// var myDivEl = document.getElementById("white");
// var myDivE2 = document.getElementById("blue");
// var myDivE3 = document.getElementById("yellow");

// //select first element
// myDiv.addEventListener("click", function () {
//   // Check if the element is selected or not

//   alert("Element is selected.");
// });
// //select second element
// myDivEl.addEventListener("click", function () {
//   // Check if the element is selected or not

//   alert("Element is selected.");
// });
// //select third element
// myDivE2.addEventListener("click", function () {
//   // Check if the element is selected or not

//   alert("Element is selected.");
// });
// //select fourth element
// myDivE3.addEventListener("click", function () {
//   // Check if the element is selected or not

//   alert("Element is selected.");
// });

var buttons = document.querySelectorAll(".button");
var body = document.querySelector("body");
console.log(body);

// buttons.forEach(function (button) {
//   button.addEventListener("click", function (e) {
//     if ((e.target.button = "grey")) {
//       body.style.backgroundColor = e.target.id;
//     } else if ((e.target.button = "white")) {
//       body.style.backgroundColor = e.target.id;
//     } else if ((e.target.button = "blue")) {
//       body.style.backgroundColor = e.target.id;
//     } else if ((e.target.button = "yellow")) {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "grey":
      case "white":
      case "blue":
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      default:
    }
  });
});
 