// const programmers = [
//     "Dennis Ritchie",
//     "Brian Kernighan",
//     "Ken Thompson",
//     "Linus Torvalds",
//     "Bjarne Stroustrup",
//     "Tim Berners-Lee",
//     "Donald Knuth",
//     "Alan Turing",
//     "Mark Zuckerberg",
//     "Bill Gates",
//     "Larry Page",
//     "Elon Musk",
//     "Jack Dorsey",
//     "Satoshi Nakamoto",
//     "Ada Lovelace",
//     "Grace Hopper",
//     "Dan Ambramov",
//     "Jordan Walke",
//     "Ryan Dahl",
//     "David Heinemeier Hansson",
//     "Guido van Rossum",
//     "Yukihiro Matsumoto",
//     "Sergey Brin",
//     "Lyndsey Scott",
//     "Abhinav Asthana",
//     "Abhijit Kane",
//     "Ankit Sobti",
//     "Loi Tran",
//     "Charles Lee",
//     "Tuan Nguyen",
//     "Tan Vo",
//   ];
//   // Iterator using the for loop to grab/sequester/fetch/retrieve individual elements in the programmers array:
//   const forLoopFunction = () => {
//     for (let index = 0; index < programmers.length; index++) {
//       const element = programmers[index];
//       const nameParts = element.split(" ");
//       // Print to the screen the first name of each programmer.
//       const firstName = nameParts[0];
//       console.log(firstName);
//       // Print to the screen the last name of each programmer.
//       const lastName = nameParts[nameParts.length - 1];
//       console.log(lastName);
//       // Print to the screen the sum char length of the first name of each programmer.
//       const sumCharFirst = firstName.length;
//       console.log(sumCharFirst);
//       // Print to the screen the sum char length of the last name of each programmer.
//       const sumCharLast = lastName.length;
//       console.log(sumCharLast);
//       // Print to the screen the sum char length of all the programmers.
//       const totalAlphaChar = element.replace(" ", "").length;
//       console.log("total Alphabetical character", totalAlphaChar);
//     }
//   };
  // forLoopFunction();
  
  // Use sort() mutate the programmers array:
  // Remember, sort() changes the original array.
//   const usingSort = () => {
    // Mutate programmers such that it's in alphabetical order of the first name of the programmers, A-Z.
    // console.log(programmers.sort());
    // Mutate programmers such that it's in alphabetical order of the last name of the programmers, A-Z.
    // console.log(
    //   programmers.sort((a, b) => {
    //     const lastNameA = a.split(" ")[a.split(" ").length - 1];
    //     const lastNameB = b.split(" ")[b.split(" ").length - 1];
    //     //ascending
    //     //compare function return 1 if a <b
    //     if (lastNameA > lastNameB) {
    //       return 1;
    //       //compare function return -1 if a >b
    //     } else if (lastNameA < lastNameB) {
    //       return -1;
    //       //compare function return 0 if a ===b
    //     } else if (lastNameA === lastNameB) {
    //       return 0;
    //     }
    //   })
    // );
    // // Mutate programmers such that it's sorted by length of first name characters, shortest to longest.
    // console.log(
    //   programmers.sort((a, b) => {
    //     // const firstNameA = a.split(" ")[0];
    //     // const firstNameB = b.split(" ")[0];
    //     // const firstNameALength = firstNameA.length;
    //     // const firstNameBLength = firstNameB.length;
    //     // if (firstNameALength > firstNameBLength) {
    //     //   return 1;
    //     //   //compare function return -1 if a >b
    //     // } else if (firstNameALength < firstNameBLength) {
    //     //   return -1;
    //     //   //compare function return 0 if a ===b
    //     // } else if (firstNameALength === firstNameBLength) {
    //     //   return 0;
    //     // }
    //     // return firstNameALength - firstNameBLength;
    //     return a.split(" ")[0].length - b.split(" ")[0].length;
    //   })
    // );
    // // Mutate programmers such that it's sorted by length of last name characters, shortest to longest.
//     console.log(
//       programmers.sort((a, b) => {
//         const lastNameA = a.split(" ")[a.split(" ").length - 1];
//         const lastNameB = b.split(" ")[b.split(" ").length - 1];
//         return lastNameA.length - lastNameB.length;
//       })
//     );
  
//     // print out character number of lastName
//     console.log(
//       programmers.map((e) => e.split(" ")[e.split(" ").length - 1].length)
//     );
//   };
//   // usingSort();
  
//   // Use filter() to define a new variable betterProgrammers:
//   // Remember, filter() returns a new array where the callback produced a true value using the element.
//   const usingFilter = () => {
//     // Define a betterProgrammers using programmers whose first name starts with L.
//     const betterProgrammersL = programmers.filter((e) => e[0] === "L");
//     // console.log(betterProgrammersL);
//     // Define a betterProgrammers using programmers whose last name starts with T.
//     const betterProgrammersT = programmers.filter((e) => {
//       const lastName = e.split(" ")[e.split(" ").length - 1];
//       return lastName[0] === "T";
//     });
//     // console.log(betterProgrammersT);
    // // Define a betterProgrammers using programmers where the first name's length is less than 4 characters.
    // const betterProgrammers4FirstLess = programmers.filter(
    //   (e) => e.split(" ")[0].length < 4
    // );
    // // console.log(betterProgrammers4FirstLess);
    // // Define a betterProgrammers using programmers where the first name's length is greater than 4 characters.
    // const betterProgrammers4FirstMore = programmers.filter(
    //   (e) => e.split(" ")[0].length > 4
    // );
    // console.log(betterProgrammers4FirstMore);
    // // Define a betterProgrammers using programmers where the sum of the length of their name's characters is greater than 8.
    // const betterProgrammers8FullMore = programmers.filter(
    //   (e) => e.replace(" ", "").length > 8
    // );
    // console.log(betterProgrammers8FullMore);
    // // Define a betterProgrammers using programmers where the sum of the length of their name's characters is less than 8.
    // const betterProgrammers8FullLess = programmers.filter(
    //   (e) => e.replace(" ", "").length < 8
    // );
    // console.log(betterProgrammers8FullLess);
    // // Define a betterProgrammers using programmers where the last name begins with the letter K and ends with the letter n.
    // const betterProgrammersKn = programmers.filter((e) => {
    //   const lastName = e.split(" ")[e.split(" ").length - 1];
    //   const firstChar = lastName[0];
    //   const lastChar = lastName[lastName.length - 1];
  
    //   if (firstChar === "K" && lastChar === "n") {
    //     return true;
    //   } else {
    //     return false;
    //   }
  
    //   // return lastName[0] === "K" && lastName[lastName.length - 1] === "n";
    // });
    // // console.log(betterProgrammersKn);
    // // Define a betterProgrammers using programmers whose first name is exactly 3 characters long.
  
    // const betterProgrammersExactFirst = programmers.filter(
    //   (e) => e.split(" ")[0].length === 3
    // );
    // console.log(betterProgrammersExactFirst);
    // // Define a betterProgrammers using programmers whose first name starts with ‘A'.
    // const betterProgrammersWithA = programmers.filter((e) => e.startsWith("A")); //true ,false);
    // console.log(betterProgrammersWithA);
    // // // Define a betterProgrammers using programmers whose first & last name start with the same character, for example, Abhinav Asthana.
//     const betterProgrammersSameInnitials = programmers.filter((e) => {
//       const firstName = e.split(" ")[0];
//       const lastName = e.split(" ")[e.split(" ").length - 1];
//       return firstName[0] === lastName[0];
//     });
//     console.log(betterProgrammersSameInnitials);
//   };
  // usingFilter();
  
  // Use map() to define a new variable betterProgrammers:
  
  // Remember, map() returns a new array where the elements are the return values of the callback passed to map.
  
  // const betterProgrammers = [
  //   { fullName: 'Dennis Ritchie' }, { fullName: 'Brian Kernighan' }, ...
  // ]
  
  // Define a array of objects with a property fullName.
  
//   let myArr = programmers.map((element) => {
//     return { fullName: element };
//   });
  
//   // Define a array of objects with a property abbreviation.
  
//   let withAbv = myArr.map((el) => {
//     const arrNameParts = el.fullName.split(" ");
//     const abv = arrNameParts.reduce(
//       (final, oneNamePart) => final + oneNamePart[0],
//       ""
//     );
//     // let abv = "";
//     // for (let i = 0; i < arrNameParts.length; i++) {
//     //   abv += arrNameParts[i][0];
//     // }
//     return { ...el, abv };
//   });
//   // console.log(withAbv);
//   // Define a betterProgrammers array of objects with a property codeName which is their name's scrambled. For example, 'Loi Tran' => 'ioL narT', 'Elon Musk' => 'nolE ksuM'
//   const withScramble = programmers.map((el) => {
//     //identify parts of name
//     //turn full name string in to namePartArray
//     const nameParts = el.split(" ");
//     let scramble = "";
//     for (let index = 0; index < nameParts.length; index++) {
//       const element = nameParts[index];
//       //for each part, turn string to array
//       const elementArray = element.split("");
//       //for each part, reverse the array element
//       const elementArrayReverse = elementArray.reverse();
//       //for each part, turn array back to string
//       const scrambledPart = elementArrayReverse.join("");
//       //turn namePartArray back to fullNameString
//       scramble += scrambledPart + " ";
//     }
  
//     return { scramble: scramble.trim() };
//   });
//   // console.log(withScramble);
  
//   const withReduce = () => {
//     withAbv = withAbv.map((e) => {
//       const scrambled = e.fullName
//         .split(" ") // turn full name string in to namePartArray
//         .reduce((scrambleString, namePart) => {
//           return scrambleString + " " + namePart.split("").reverse().join("");
//         }, "");
  
//       return { ...e, scrambled: scrambled.trim() };
//     });
//     console.log(withAbv);
  
//     // Define a betterProgrammers array of objects with a property birthDate, which returns a date which places the programmer to be between 18-150 years old.
//   };
//   // withReduce();
  
//   // Use reduce() to define a new variable stew:
  
//   // Reduce the programmers to stew which is a string of all first names combined. ("Dennis, Brian, Ken, ...")
  
//   const stringFirstName = programmers.reduce((total, el) => {
//     return total + el.split(" ")[0];
//   }, "");
//   console.log(stringFirstName);
//   // Reduce the programmers to stew which is a number, the sum of all first names characters length.
//   const sumFirstCharLength = programmers.reduce((total, el) => {
//     return total + el.split(" ")[0].length;
//   }, 0);
//   console.log(sumFirstCharLength);
//   // Reduce the programmers to stew which is a number, the sum of all full names characters length.
//   const sumFullLength = programmers.reduce((total, el) => {
//     return total + el.replace(" ", "").length;
//   }, 0);
//   console.log(sumFullLength);
//   // Reduce the programmers to stew which is a number, the sum of all first names characters length where the first name starts with L.
//   const sumFirstCharLengthCond = programmers.reduce((total, el) => {
//     if (el[0] === "L") {
//       console.log(el.split(" ")[0]);
//       return total + el.split(" ")[0].length;
//     } else {
//       return total;
//     }
//   }, 0);
//   console.log(sumFirstCharLengthCond);
// ----------------------------------6. Exercise Array of Object: Monthly Balance
//   Define a function that returns the difference between deposits and withdrawals.
//   Define a function that returns a new balance for the next month.
//   Define a function that returns the sum of the groceries.
//   Define a function that returns the sum of the entertainment.
//   Define a function that returns the sum of the travel.
//   Define a function that given a conversion rate of 23000vnd to 1usd returns if the account spent more usd than vnd was deposited into the account for the month.
//   const usdToVND = 23000;
// Define a function that returns an array of new objects where currency is VND and the amount is it's converted amount.
// Use a for loop to print out the transaction history for the month in this format:
//   Balance: ₫100_000,000
//
// Transaction History:
//   - You withdrew ₫ 1,000,000. The new balance is ₫ 099,000,000.
// - You deposited ₫ 10,000,000. The new balance is ₫ 109,000,000.

const user = {
  currentBalance: 5000,
  transactionsMonthToDate: [{}],
};

user.transactionsMonthToDate = [
  {amount: 3000, type: 'deposit', category: 'Salary - Full Time'},
  {category: 'Dining', amount: 50, type: 'withdrawal'},
  {category: 'Dining', amount: 100, type: 'withdrawal'},
  {category: 'Rent', amount: 2000, type: 'withdrawal'},
  {category: 'Groceries', amount: 250, type: 'withdrawal'},
  {amount: 250, type: 'withdrawal', category: 'Transportation'},
  {amount: 250, type: 'withdrawal', category: 'Health'},
  {amount: 50, type: 'withdrawal', category: 'Travel - Fuel'},
  {category: 'Living', amount: 650, type: 'withdrawal'},
  {category: 'Groceries', amount: 500, type: 'withdrawal'},
  {category: 'Living', amount: 250, type: 'withdrawal'},
  {category: 'Living', amount: 250, type: 'withdrawal'},
  {amount: 5000, type: 'deposit', category: 'Salary - Part Time'},
  {category: 'Groceries', amount: 450, type: 'withdrawal'},
  {amount: 58, type: 'withdrawal', category: 'Transportation'},
  {amount: 50, type: 'withdrawal', category: 'Health'},
  {amount: 100, type: 'withdrawal', category: 'Transportation'},
  {amount: 150, type: 'withdrawal', category: 'Transportation'},
  {category: 'Groceries', amount: 100, type: 'withdrawal'},
  {amount: 100, type: 'withdrawal', category: 'Entertainment'},
  {amount: 500, type: 'withdrawal', category: 'Entertainment'},
  {category: 'Groceries', amount: 300, type: 'withdrawal'},
  {amount: 500, type: 'withdrawal', category: 'Travel - Airline'},
  {amount: 1500, type: 'withdrawal', category: 'Travel - Hotel'},
  {amount: 50, type: 'withdrawal', category: 'Travel - Fuel'},
  {category: 'Groceries', amount: 200, type: 'withdrawal'},
  {amount: 500, type: 'deposit', category: 'Portfolio Dividends'},
  {amount: 100, type: 'withdrawal', category: 'Entertainment'},
  {amount: 100, type: 'withdrawal', category: 'Travel - Fuel'},
  {category: 'Groceries', amount: 200, type: 'withdrawal'},
  {amount: 100, type: 'withdrawal', category: 'Entertainment'},
  {amount: 100, type: 'withdrawal', category: 'Health'},
];
// Use a for loop to print to the screen the transaction history for the month in this format:
const transactionHistory = () => {
  console.log('Balance:', `${user.currentBalance}`);
  console.log('Transaction History:');
  let amountOfMoney = user.currentBalance;
  user.transactionsMonthToDate.forEach(transaction => {
    if (transaction.type === 'deposit') {
      amountOfMoney += transaction.amount;
      console.log(`- You deposited \$${transaction.amount}. The new balance is \$${amountOfMoney}.`);
    } else {
      amountOfMoney -= transaction.amount;
      console.log(`- You withdrew \$${transaction.amount}. The new balance is \$${amountOfMoney}.`);
    }
  });
};
// transactionHistory();


// Define a function that returns the total number of deposits.
const numberOfDeposits = () => {
  const num = user.transactionsMonthToDate.reduce((acc, transaction) => acc + (transaction.type === 'deposit'), 0);
  console.log('Number of Deposits:', num);
};
// numberOfDeposits();


//   Define a function that returns the total number of withdrawals.
const numberOfWithdrawals = () => {
  const num = user.transactionsMonthToDate.reduce((acc, transaction) => acc + (transaction.type === 'withdrawal'), 0);
  console.log('Number of Withdrawals:', num);
};
// numberOfWithdrawals();


//   Define a function that returns the sum of deposits.
const sumOfDeposits = () => {
  const sum = user.transactionsMonthToDate.reduce((acc, transaction) => acc + transaction.amount * (transaction.type === 'deposit'), 0);
  console.log('Sum of Deposits:', sum);
};
// sumOfDeposits();


//   Define a function that returns the sum of withdrawals.
const sumOfWithdrawals = () => {
  const sum = user.transactionsMonthToDate.reduce((acc, transaction) => acc + transaction.amount * (transaction.type === 'withdrawal'), 0);
  console.log('Sum of Withdrawals:', sum);
};
// sumOfWithdrawals();



// -------------------------------------------------------------------Excercice 7
//   Define a function that returns the number of male items in the order.
//   Define a function that returns the number of female items in the order.
//   Define a function that returns the number of summer items in the order.
//   Define a function that returns the number of under garment items in the order.
//   Define a function that returns the number of female under garment items in the order.
//   Define a function that returns the sum of all the unique items summer in the order.
//   Define a function that returns the sum of all the summer items in the order.
//   Define a function that returns the sum of all the unique items male in the order.
//   Define a function that returns the sum of all the male items in the order.
//   Define a function that returns the sum of all the unique items female in the order.
//   Define a function that returns the sum of all the female items in the cart.
//   Define a function that mutates the object, adding an originalDate property as the current date.
//   Define a function that mutates the object, adding a delivered property as false.
//   Define a function that mutates the object, adding subtotal property, the sum of all the items in the order.
//   Define a function that mutates the object, adding a salesTax property calculated at .07 percent * subtotal.
//   Define a function that mutates the object, adding grandTotal property, the sum of all the items in the order & sales tax.



const order = {
  orderItems: [
    {
      id: 'M40',
      item: 'T-shirt',
      price: 29.9,
      quantity: 5,
      gender: 'm',
      category: 'Summer',
    },
    {
      id: 'M32',
      item: 'Hoodie',
      price: 99.9,
      quantity: 2,
      gender: 'm',
      category: 'Winter',
    },
    {
      id: 'M11',
      item: 'Sandals',
      price: 19.9,
      quantity: 1,
      gender: 'm',
      category: 'Summer',
    },
    {
      id: 'M12',
      item: 'Shorts',
      price: 29.9,
      quantity: 1,
      gender: 'm',
      category: 'Summer',
    },
    {
      id: 'M13',
      item: 'Exercise Shorts',
      price: 29.9,
      quantity: 5,
      gender: 'm',
      category: 'Exercise',
    },
    {
      id: 'M41',
      item: 'Shoes',
      price: 19.9,
      quantity: 1,
      gender: 'm',
      category: 'Summer',
    },
    {
      id: 'M49',
      item: 'Socks',
      price: 5.9,
      quantity: 10,
      gender: 'm',
      category: 'Undergarment',
    },
    {
      id: 'M01',
      item: 'Belt',
      price: 15.9,
      quantity: 1,
      gender: 'm',
      category: 'Accessory',
    },
    {
      id: 'M42',
      item: 'Underwear',
      price: 19.9,
      quantity: 10,
      gender: 'm',
      category: 'Undergarment',
    },
    {
      id: 'F71',
      item: 'T-shirt',
      price: 39.9,
      quantity: 5,
      gender: 'f',
      category: 'Summer',
    },
    {
      id: 'F81',
      item: 'Dress',
      price: 49.9,
      quantity: 5,
      gender: 'f',
      category: 'Summer',
    },
    {
      id: 'F91',
      item: 'Skirt',
      price: 39.9,
      quantity: 5,
      gender: 'f',
      category: 'Summer',
    },
    {
      id: 'F01',
      item: 'Shoes',
      price: 19.9,
      quantity: 10,
      gender: 'f',
      category: 'Summer',
    },
    {
      id: 'F32',
      item: 'Hoodie',
      price: 99.9,
      quantity: 2,
      gender: 'f',
      category: 'Winter',
    },
    {
      id: 'F34',
      item: 'Sandals',
      price: 19.9,
      quantity: 2,
      gender: 'f',
      category: 'Summer',
    },
    {
      id: 'F36',
      item: 'Shorts',
      price: 39.9,
      quantity: 3,
      gender: 'f',
      category: 'Summer',
    },
    {
      id: 'F12',
      item: 'Exercise Shorts',
      price: 29.9,
      quantity: 5,
      gender: 'f',
      category: 'Exercise',
    },
    {
      id: 'F19',
      item: 'Sleeping',
      price: 39.9,
      quantity: 3,
      gender: 'f',
      category: 'Undergarment',
    },
    {
      id: 'F42',
      item: 'Socks',
      price: 5.9,
      quantity: 10,
      gender: 'f',
      category: 'Undergarment',
    },
    {
      id: 'F43',
      item: 'Underwear',
      price: 39.9,
      quantity: 10,
      gender: 'f',
      category: 'Undergarment',
    },
    {
      id: 'F44',
      item: 'Bra',
      price: 29.9,
      quantity: 10,
      gender: 'f',
      category: 'Undergarment',
    },
    {
      id: 'F01',
      item: 'Belt',
      price: 15.9,
      quantity: 1,
      gender: 'f',
      category: 'Accessory',
    },
  ],
};

// Define a function that returns the sum number of items in the order.
//   Define a function that returns the total number of unique items in the order.
const sumNumberOfItems = () => {
  console.log('sum number of items:', order.orderItems.length);
  const allItems = [];
  order.orderItems.forEach(item => allItems.push(item.item));
  const allItemSet = new Set(allItems);
  console.log('total number of unique items:', allItemSet.size);
};
// sumNumberOfItems();


