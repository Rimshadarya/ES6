//   Global Scope

// var globalVar = "this is Var variable";
// console.log(globalVar);  // ANswer is this is VAr variable
// console.log(window.globalVar);  // ANswer is this is VAr variable
// let globalLet = "this is Let variable";
// console.log(globalLet);   // ANswer is this is Let variable
// console.log(window.globalLet);  // Undefined
// const globalConst = "This is Const variable";
// console.log(globalConst);  //This is Const Variable
// console.log(window.globalConst);   //Undefined

//    Function Scope

// function forTest(){
//     var testvar = "This is Var function";
//     let testLet = "This is Let function";
//     const testConst = "This is Const function";

    // console.log(testvar);  //Answer is this is Var function
    // console.log(testLet);  //Answer is this is Let function
    // console.log(testConst);  //Answer is this is Const function
// }
// forTest();
// console.log(testvar); //Reference Error:testVar is not defined
// console.log(testLet); //Reference Error:testLet is not defined
// console.log(testConst); //Reference Error:testConst is not defined

//    Block Scope

// if(true){
//     var blockvar = "This is Var block";
//     let blockLet = "This is Let block";
//     const blockConst = "This is Const block";

//     // console.log(blockvar);  //Answer is this is Var block
//     // console.log(blockLet);  //Answer is this is Let block
//     // console.log(blockConst);  //Answer is this is const block
// }
// console.log(blockvar);  // this is Var block
//     console.log(blockLet);  //Reference Error:blockLet is not defined
//     console.log(blockConst);  //Reference Error:blockConst is not defined

//    Hoisting with Var

// console.log(hoistVar); // undefined
// var hoistVar = "This is hoist var variable";
// console.log(hoistVar); // "This is a var variable"

//    Hoisting with Let and Const

// console.log(hoistLet); // ReferenceError: Cannot access 'hoistLet' before initialization
// let hoistLet = "This is hoist let variable";
// console.log(hoistConst); // ReferenceError: Cannot access 'hoistConst' before initialization
// const hoistConst = "This is hoist const variable";

//    Re-declaration

// var firstVar = "First declaration with var";
// var firstVar = "Second declaration with var";
// console.log(firstVar); // Output: "Second declaration with var"
// let firstLet = "First declaration with var";
// let firstLet = "Second declaration with var";
// console.log(firstLet); // SyntaxError: Identifier 'firsyLet' has already been declared
// const firstConst = "First declaration with var";
// const firstConst = "Second declaration with var";
// console.log(firstConst);  // SyntaxError: Identifier 'firstConst' has already been declared 

//    Re-assignment 

// var ReassignedVar = "Initial value with var";
// console.log(ReassignedVar); //"Initial value with var"
// ReassignedVar = "Reassigned value with var";
// console.log(ReassignedVar); //"Reassigned value with var"

// let ReassignedLet = "Initial value with let";
// console.log(ReassignedLet); //"Initial value with let"
// ReassignedLet = "Reassigned value with let";
// console.log(ReassignedLet); //"Reassigned value with let"

// const ReassignedConst = "Initial value with const";
// console.log(ReassignedConst); //"Initial value with const"
// ReassignedConst = "Reassigned value with const"; 
// console.log(ReassignedConst); // TypeError: Assignment to constant variable

//     Temporal Dead Zone (TDZ):

// {
//     console.log(temporalLet); // ReferenceError: Cannot access 'myLet' before initialization
//     let temporalLet = "This is a let variable";
// }
// {
//     console.log(temporalConst); // ReferenceError: Cannot access 'myConst' before initialization
//     const temporalConst = "This is a const variable";
// }
// WHY??
// let and const are block-scoped. They are not initialized until the declaration line is executed.

//    When to use var, let, and const:

// function numbers() {
//     for (var i = 0; i < 3; i++) {
//         console.log("loop of inside:", i);
//     }
//     console.log("loop of outside:", i); //"loop outside is : 3"
// }
// numbers();
// function sumNumbers(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log("Sum of number is", sum); // Output: "Sum of number is  6"
// }
// sumNumbers([1, 2, 3]);
// const pieValue = 3.14159; // A constant value
// const radiusValue = 5;
// function calc(radiusValue) {
//     return 2 * pieValue * radiusValue;
// }
// console.log("Circumference:", calc(radiusValue)); // Output: "Circumference: 31.4159"

//     String Interpolation:

// const firstName = "Rimsha";
// const lastName = "Qasim";
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName); // Output: "Rimsha Qasim"

//    Multi-line Strings:

// const homeAddress = `House no 223
// North-Karachi
// Karachi,Pakistan
// `;
// console.log(homeAddress);

//   Simple Expressions:

// const num1 = 16;
// const num2 = 26;
// const result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
// console.log(result);  //The sum of 16 and 26 is 42

//    Simple Expressions:

// function multiply(num1, num2) {
//     return num1 * num2;
// }  
// const result = `The product of 9 and 27 is ${multiply(9, 27)}.`;  
// console.log(result);   //The product of 9 and 27 is 243
  
//    Creating a Tagged Template

// function TaggedTemplates(strings, ...values) {
//     console.log("String:",strings);
//     console.log("Value:",values);

// }  
// const name = 'RImsha';
// const age = 18;  
// TaggedTemplates`Hello, my name is ${name} and I am ${age} years old.`;
  
//   Formatting:

// function uppercase(strings, ...values) {
//   let result = strings[0]; // Start with the first part of the string
//   values.forEach((value, index) => {
//     result += value.toUpperCase() + strings[index + 1]; // Convert the value to uppercase
//   });
//   return result;
// }
// const name = "Alice";
// const city = "paris";
// const formattedString = uppercase`Hello, my name is ${name} and I live in ${city}.`;
// console.log(formattedString);

//    Conditional Logic:

// const currentHour = new Date().getHours();
// const message = currentHour < 12 ? `Good morning! It's currently ${currentHour} AM.` : `Good afternoon! It's currently ${currentHour % 12 || 12} PM.`;
// console.log(message);

//    Loops within Template Literals:

// const shoppingList = ['Apples', 'Bananas', 'Carrots', 'Milk', 'Bread'];
// const htmlList = `
//   <ul>
//     ${shoppingList.map(item => `<li>${item}</li>`).join('')}
//   </ul>
// `;
// console.log(htmlList);

//     Escaping Backticks:

// const stringWithBacktick = `This is a template literal that includes a backtick character: \``;
// console.log(stringWithBacktick);

//     Nested Template Literals:

// const tableData = [
//   ['Name', 'Age', 'City'],
//   ['Alice', '25', 'New York'],
//   ['Bob', '30', 'Los Angeles'],
//   ['Charlie', '35', 'Chicago']
// ];
// const tableHTML = `
//   <table border="1">
//     <thead>
//       <tr>
//         ${tableData[0].map(header => `<th>${header}</th>`).join('')}
//       </tr>
//     </thead>
//     <tbody>
//       ${tableData.slice(1).map(row => `
//         <tr>
//           ${row.map(cell => `<td>${cell}</td>`).join('')}
//         </tr>
//       `).join('')}
//     </tbody>
//   </table>
// `;
// console.log(tableHTML);

//     Simple Condition:

// const age = 20; 
// const canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote);

//     Even or Odd:

// const number = 7;
// const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
// console.log(evenOrOdd);

//    Grade Evaluation:

// const score = 85; 
// const grade = score >= 90? "A": score >= 80? "B": score >= 70? "C": score >= 60? "D": "F";
// console.log(grade);

//    Login Status:

// const isLoggedIn = true;
// const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
// console.log(statusMessage);

//     Discount Eligibility:

// const isMember = true; 
// const purchaseAmount = 150; 
// const discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.10 : 0;
// console.log(`Discount: $${discount.toFixed(2)}`);

//     Determine Max Value:

// function maxValue(a, b) {
//   return a > b ? a : b;
// }
// const result = maxValue(10, 20);
// console.log(`The larger number is: ${result}`);

//      Greeting Message:

// function greet(name = '') {
//   return name ? `Hello, ${name}!` : 'Hello, guest!';
// }
// console.log(greet('Alice'));
// console.log(greet());

//      Mapping Values:

// const numbers = [1, 2, 3, 4, 5, 6];
// const modifiedNumbers = numbers.map(number => number % 2 === 0 ? number * 2 : number * 3);
// console.log(modifiedNumbers);

//    Filtering Values:

// const strings = ['cat', 'elephant', 'dog', 'fish', 'lion'];
// const filteredStrings = strings.filter(str => str.length > 3 ? true : false);
// console.log(filteredStrings);

//    Copying an Array:

// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = [...originalArray];
// console.log('Original Array:', originalArray);
// console.log('Copied Array:', copiedArray);
// console.log('Are the arrays the same reference?', originalArray === copiedArray); 
// console.log('Are the arrays equal?', JSON.stringify(originalArray) === JSON.stringify(copiedArray)); 

//    Merging Arrays:

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];
// console.log(mergedArray);

//    Adding Elements to an Array:

// const numbers = [2, 3, 4];
// const updatedNumbers = [1, ...numbers, 5];
// console.log(updatedNumbers);

//    Copying an Object:
   
// const originalObject = {
//   name: 'Alice',
//   age: 25,
//   city: 'New York'
// };
// const copiedObject = { ...originalObject };
// console.log('Original Object:', originalObject);
// console.log('Copied Object:', copiedObject);
// console.log('Are the objects the same reference?', originalObject === copiedObject); // Should be false
// console.log('Are the objects equal?', JSON.stringify(originalObject) === JSON.stringify(copiedObject)); // Should be true

//    Merging Objects:

// const object1 = { name: 'Alice', age: 25, city: 'New York' };
// const object2 = { age: 30, city: 'Los Angeles', country: 'USA' };
// const mergedObject = { ...object1, ...object2 };
// console.log('Merged Object:', mergedObject);

//    Updating Object Properties:

// const user = {
//   name: 'John Doe',
//   age: 30,
//   email: 'johndoe@example.com'
// };
// const updatedUser = {
//   ...user,             
//   email: 'john.doe@newdomain.com',  
//   address: '123 Main St, Springfield'};
// console.log(updatedUser);

//   Passing Array Elements as Arguments:

// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [5, 10, 15];
// const result = sum(...numbers);
// console.log(result);

//    Combining Multiple Arrays:

// function combineArrays(...arrays) {
//   return [].concat(...arrays);
// }
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];
// const combinedArray = combineArrays(array1, array2, array3);
// console.log(combinedArray);

//    Rest Parameter with Spread Operator:

// function multiply(factor, ...numbers) {
//   return numbers.map(number => number * factor);
// }
// const result = multiply(2, 1, 3, 5, 7);
// console.log(result);

//    Spread Operator with Nested Structures:

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const copiedArray = [...nestedArray];
// copiedArray[0][0] = 10;
// copiedArray[1][1] = 20;
// console.log('Original Nested Array:', nestedArray);
// console.log('Copied Nested Array:', copiedArray);

//    Sum Function:

// function sum(...numbers) {
//   return numbers.reduce((total, current) => total + current, 0);
// }
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(5, 10, 15, 20)); // 50
// console.log(sum(7)); // 7
// console.log(sum()); // 0

//    Average Function:

// function average(...numbers) {
//   if (numbers.length === 0) return 0; 
//   const sum = numbers.reduce((total, current) => total + current, 0);
//   return sum / numbers.length;
// }
// console.log(average(1, 2, 3)); // 2
// console.log(average(5, 10, 15, 20)); // 12.5
// console.log(average(7)); // 7
// console.log(average()); // 0

//     First and Rest:

// const numbers = [10, 20, 30, 40, 50];
// const [first, ...rest] = numbers;
// console.log('First:', first); // 10
// console.log('Rest:', rest);   // [20, 30, 40, 50]

//   Skip and Rest:

// const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
// const [, , ...remainingColors] = colors;
// console.log('Remaining Colors:', remainingColors);

//    Basic Destructing

// const person = {
//     name: "John Doe",
//     age: 30,
//     email: "johndoe@example.com",
//     address: "123 Main St, Anytown, USA"
//   };
//   const { name, email, ...rest } = person;
//   console.log("Name:", name);    //  Name: John Doe
//   console.log("Email:", email);  // Email: johndoe@example.com
//   console.log("Rest:", rest);    //  Rest: { age: 30, address: "123 Main St, Anytown, USA" }
  
//    Nested Destructing

// const student = {
//   id: 101,
//   names: "Alice Johnson",
//   grades: [85, 90, 78],
//   info: {
//     age: 20,
//     major: "Computer Science"
//   }
// };
// const {
//   id,
//   names,
//   info: { major },
//   ...rest
// } = student;
// console.log("ID:", id);          //  ID: 101
// console.log("Name:", names);     //  Name: Alice Johnson
// console.log("Major:", major);    //  Major: Computer Science
// console.log("Rest:", rest);      //  Rest: { grades: [85, 90, 78], info: { age: 20, major: "Computer Science" } }

//    Filter even Number

// function filterEven(...numbers) {
//     return numbers.filter(number => number % 2 === 0);
// }
// console.log(filterEven(1, 2, 3, 4, 5, 6));       // Logs: [2, 4, 6]
// console.log(filterEven(10, 15, 20, 25, 30));    // Logs: [10, 20, 30]
// console.log(filterEven(7, 11, 13));             // Logs: []
// console.log(filterEven(8, 22, 34, 55, 99));     // Logs: [8, 22, 34]
  
//   Combine and Sorts Array

// function combineAndSort(...arrays) {
//     const combinedArray = arrays.flat();
//     return combinedArray.sort((a, b) => a - b);
// }
// console.log(combineAndSort([5, 2, 9], [1, 6, 3], [8, 4])); //1,2,3,4,5,6,8,9
// console.log(combineAndSort([10, 50], [20, 40, 30])); //10,20,30,40,50
// console.log(combineAndSort([7, 2, 4], [], [9, 1, 3])); //1,2,3,4,7,9
  
//   Basic Destructing

// const fruits = ["apple", "banana", "cherry"];
// const [FirstFruit, SecondFruit, ThirdFruit] = fruits;
// console.log("First Fruit:", FirstFruit);  //  First Fruit: apple
// console.log("Second Fruit:", SecondFruit); // Second Fruit: banana
// console.log("Third Fruit:", ThirdFruit);  // Third Fruit: cherry

//   Skipping Elements

// const colors = ["red", "green", "blue", "yellow"];
// const [primaryColor, , tertiaryColor] = colors;
// console.log("Primary Color:", primaryColor);   // Primary Color: red
// console.log("Tertiary Color:", tertiaryColor); // Tertiary Color: blue

//    Rest Operator

// const numbers = [1, 2, 3, 4, 5];
// const [firstNumber, ...remainingNumbers] = numbers;
// console.log("First Number:", firstNumber);         //  First Number: 1
// console.log("Remaining Numbers:", remainingNumbers); // Remaining Numbers: [2, 3, 4, 5]

