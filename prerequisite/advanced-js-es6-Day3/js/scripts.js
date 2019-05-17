// // example

// var countries = [
//   {
//     name: "pakistan",
//     province: 5
//   },
//   {
//     name: "India",
//     province: 50
//   }
// ];

// //JSON.stringify parse
// console.log("countries", countries);

// var result = JSON.stringify(countries);

// console.log("stringify", result);

// result = JSON.parse(result);

// console.log("stringify parse", result);

// try {
// //   let val = prompt("Enter 5");
//   if (val == 5) {
//   } else {
//     throw "mum should be 5";
//   }
// } catch (error) {
// //   alert(error);
// } finally {
//   console.log("finaly");
// }

// // Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

// function multiply(a, b = 1) {
//   return a * b;
// }

// console.log(multiply(5, 2));
// // expected output: 10

// console.log(multiply(5));
// // expected output: 5

// function name(params) {

// }
// //anonymous function expression
// var myFunction = function() {
// //   alert("anonymous function expression");
// };
// myFunction();

// //another type of anonymous function Immediately Invokable Function Expression

// (function(a,b) {
// //   alert("Immediately Invokable Function Expression");
// })(2,5);

// // let mul = (a,b) => 2

// // Map
// // filter() is used to skip unwanted elements of collection. map() is used to modify elements of collection.

// // filter() expects that function to return Boolean value based on which element will be skipped or not. map() will expect that function to return an new collection element.

// var agesArr = [2, 3, 4, 4, 5, 6];

// var doubleAges = agesArr.map(function (item) {
//  console.log('item',item);

//  if(item == 4){
//      return item *2;
//  }
//  else {
//      return item;
//  }

// });
// console.log('doubleAges',doubleAges);

// let newArr = [];
// agesArr.forEach(element => {
//     newArr.push(element*2)
// });

// console.log(doubleAges);

// // filter recap
// var newAges = agesArr.filter(num => num !== 4);
// console.log(newAges);

//

let arr = [
  {
    name: "naveed",
    class: "se"
  },
  {
    name: "Ali",
    class: "se"
  },
  {
    name: "Umar",
    class: "se"
  },
  {
    name: "Faizan",
    class: "cs"
  },
  {
    name: "qadeer",
    class: "cs"
  }
];

// var csArr = arr.map(item => {
//   if (item.class == "cs") {
//     return item;
//   }
// });

// var seArr = arr.map(item => {
//   if (item.class == "se") {
//     return item;
//   }
// });

// console.log("csArr", csArr);

// console.log("seArr", seArr);
