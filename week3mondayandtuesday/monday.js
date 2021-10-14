function objectShortHand() {
  const name = "Parrot";
  const colors = ["Red", "Green", "Blue", "Yellow"];
  const talons = true;
  const bird = {
    name,
    colors,
    talons,
  };

  console.log(bird);

  const capital = "Hanoi";
  const continent = "Asia";

  const vietnam = {
    capital,
    continent,
  };

  console.log(vietnam);

  const wheelsCount = 4;
  const doorsCount = 4;
  const color = "black";

  const car = {
    wheelsCount,
    color,
    doorsCount,
  };

  console.log(car);
}

function desRestSpread() {
  const myObject = { x: 1, y: 2, myArr: ["a", "b", 5, 6] };

  let { x, y, myArr } = myObject; //

  // let x = myObject.x;
  // let y = myObject["y"];
  // let anything = myObject.myArr;

  // console.log(x, y, myArr);
  // console.log(myObject);

  let [abc, anything, something, haha] = myArr; //

  // console.log(abc, anything, something, haha);

  let arrToObject = { abc, anything, something, haha };
  console.log(arrToObject);
  //rest and spread

  // const ogArr = [-1, 5, 11, 3];

  // let a = ogArr[0];
  // let b = ogArr[1];
  // let c = ogArr[2];
  // let d = ogArr[3];

  // let [a, b, c, d] = ogArr;

  // console.log(Math.max(...ogArr));
  // //translated to
  // console.log(Math.max(-1, 5, 11, 3));

  // if the ... is on the left side of an operator
  // it is REST
  // else
  // it is SPREAD
  // let [a, ...haha] = arr; // ...haha is rest
  // //
  // let arr = [...haha]; // ...haha is spread
  const arr = [1, 3, 4, 6, 0, 0];

  let [first, second, ...rest] = arr;

  // let first = arr[0];
  // //taking the value of everything else that not the one we choose
  // //, and make array call rest
  // let rest = arr.slice(arr.indexOf(first) + 1);

  const state = { counter: 1, list: ["a", "b"] };

  const { list, ...huhu } = state;

  console.log(list);
  console.log(huhu);

  const x1 = ["a", "b"];
  const y1 = ["c"];
  const z1 = ["d", "e"];
  const add = [1, 2];
  const combine = [...x, ...y, ...z];
  console.log(combine);

  combine.push(...add);
  console.log(...combine);
}

// function getAverage({ x, y, z }) {
//   //(object)
//   // console.log("getAverage", obj);
//   // console.log("value of x", obj.x);
//   // console.log("value of y", obj.y);
//   // console.log("value of z", obj.z);
//   // let x = obj.x;
//   // let y = obj.y;
//   // let z = obj.z;
//   // let { x, y, z } = obj
//   // console.log(x, y, z);
//   console.log(Math.floor((x + y + z) / 3.0));
//   // return Math.floor((x + y + z) / 3.0); // CHANGE ME
// }

// // let tuan = 3;
// // tuan;
// // console.log(tuan);

// // console.log(getAverage({ x: 3.6, y: 7.8, z: 4.3 }));
// getAverage({ x: 3.6, y: 7.8, z: 4.3 });
// console.log(getAverage({ x: 3.6, y: 7.8, z: 4.3 }));

// // after execute => value = line 113

// function getAddress({ city, country, address }) {
//   console.log({ city, country, address });
//   let { street } = address;
//   return city === "HCMC" && country === "Vietnam" && street === "Ton Dan";
// }

// let data = {
//   city: "HCMC",
//   country: "Vietnam",
//   address: {
//     number: 12,
//     street: "Ton Dan",
//     district: "4",
//   },
// };

// console.log(getAddress(data));
// function objectifyElements(arr) {
//   const [first, second, third, , , , , , fourth] = arr;
//   return { first, second, third, fourth }; // CHANGE ME
// }

// console.log(objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 8);

// function getFoodItems() {
//   const food = [
//     ["carrots", "beans", "peas", "lettuce"],
//     ["apples", "mangos", "oranges"],
//     ["cookies", "cake", "pizza", "chocolate"],
//   ];
//   const carrots = food[0][0];
//   const cookies = food[2][0];
//   // const mangos = food[1][1]; // CHANGE ME
//   // mangos: food[1][1]

//   let [, [, mangos]] = food;

//   // console.log(mangos);
//   return { carrots, cookies, mangos }; // CHANGE ME
// }
// console.log(getFoodItems().mangos === "mangos");

// function getHistoricPrices([index]) {
//   const bingo = index; // CHANGE ME
//   return bingo;
// }
// // console.log(getHistoricPrices([true, false, true]));

// function getHistoricPrices1([[index]]) {
//   const bingo = index; // CHANGE ME
//   return bingo;
// }
// // console.log(
// //   getHistoricPrices1([
// //     [true, false],
// //     [false, true],
// //   ])
// // );

// function getHistoricPrices4([[[, { x }]]]) {
//   console.log("price4", x);
//   const bingo = x;
//   return bingo;
// }
// // console.log(getHistoricPrices4([[[{}, { x: true }]]]));

// function haveDefault(xxx, ...yyy) {
//   console.log(xxx);
// }
// haveDefault("arg1", "arg2", "arg3"); // argArr

//194 : let [xxx,...yyy] = argArr

function restParams(first, ...rest) {
  console.log(first, rest);
  return first === "first" && rest[0] === "second";
}

// console.log(restParams("first", "second")); // CHANGE ME

function restParams2(first, ...rest) {
  console.log(first, rest);
  return first === "first" && rest[0] === "second" && rest[1] === "third";
}

// console.log(restParams2("first", "second", "third")); // CHANGE ME

function restParams3(first, ...rest) {
  console.log(first, rest);
  return (
    first === "first" &&
    rest[0] === "second" &&
    rest[1] === "third" &&
    rest[2] === undefined
  );
}

// console.log(restParams3("first", "second", "third")); // CHANGE ME

function restParams4(...rest) {
  console.log(rest);
  return rest[2] === "third" && rest[0] === "first" && rest[1] === "second"; // CHANGE ME
}

// console.log(restParams4("first", "second", "third"));

function restParams5(...rest) {
  console.log(rest);
  return rest[5]; // CHANGE ME
}
// console.log(restParams5(1, 2, 3, 4, 5, 6) === 6);

function findTheMax() {
  const arr1 = [1, 7, 2, 4];
  const arr2 = [1, 9, 5, 8];
  console.log(...arr1, ...arr2);
  return Math.max(arr1); //return = exit function and result in value xxx, undefined
  return Math.max(...arr1, ...arr2);
}
// console.log(findTheMax());
function concatenateArrays() {
  const arr1 = [0, 1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];
  const result = [...arr1, ...arr2, ...arr3]; // CHANGE ME
  return result;
}
// console.log(concatenateArrays());

function mergeObjects() {
  // what does this return?
  const obj1 = {
    a: "a from obj1",
    b: "b from obj1",
    c: "c from obj1",
    d: {
      e: "e from obj1",
      f: "f from obj1",
    },
  };
  const obj2 = {
    b: "b from obj2",
    c: "c from obj2",
    d: {
      g: "g from obj2",
      h: "h from obj2",
    },
  };

  const result = { ...obj1, ...obj2, d: { ...obj1.d, ...obj2.d } };

  console.log(result);
  // return (
  //   result.a === "a from obj1" &&
  //   result.b === "b from obj2" &&
  //   result.c === "c from obj2" &&
  //   result.d.e === undefined &&
  //   result.d.f === undefined &&
  //   result.d.g === "g from obj2" &&
  //   result.d.h === "h from obj2"
  // );
}
// console.log(mergeObjects());

// console.log(hoisted(x));

// const notHoisted = (abc, dasd) => {
//   console.log("aaa");
// };

// notHoisted = 2;
// console.log(notHoisted);

// function hoisted(abc) {
//   return abc;
// }

// function cb() {}

// arr.map(cb);

// arr.map(function cb(x) {});

// arr.map((x) => {
//   asdas;
// });

// const arrowFunction = () => {
// console.log(object);
//   return 1;
// };
// const arrowFunction = () => 4 < 1; //as long as the expression result in value

// console.log(arrowFunction());

// function multiArgument() {
//   // CHANGE BELOW
//   const divide = function (a, b) {
//     return a / b;
//   };
//   return divide(40, 10);
// }

const multiArgument = () => {
  const divide = (a, b) => {
    return a / b;
  };
  return divide(40, 10);
};
// console.log(multiArgument());

// function outer() {
//   function inner(a, b) {
//     return "inner";
//   }
//   inner();
//   return "outer";
// }

// function spreadWithArrow() {
//   // CHANGE BELOW
//   // const asArray = function (...args) {
//   //   return args;
//   // };

//   const asArray = (...args) => {
//     return args;
//   };

//   return asArray(1, 2, 3, 4);
// }

// function withObject() {
//   // CHANGE BELOW
//   const getObject = function (favoriteCandy) {
//     return { favoriteCandy };
//   };
//   return getObject("twix");
// }

// const withObject = () => {
//   const getObject = (favoriteCandy) => {
//     return { favoriteCandy };
//   };
//   return getObject("twix");
// };

// function withMultiLineExpression() {
//   // CHANGE BELOW
//   const getString = function (name) {
//     return `
//         Hello there ${name}
//         How are you doing today?
//       `;
//   };
//   return getString("Ryan");
// }

const withMultiLineExpression = () => {
  const getString = (name) => `
  Hello there ${name} 
  How are you doing today?
  `;
  return getString("Ryan");
};
// console.log(withMultiLineExpression());

function curryAdd() {
  const curryAddition = (a) => (b) => a + b;
  // CHANGE BELOW
  return curryAddition(9)(3);
}
console.log(curryAdd());