// let a = 5;
// let b = 2;

// a += 4;
// console.log("a = ", a);

// console.log("a == b", a == b);
// console.log("5 != 2 ", a != b);
// console.log("a >= b", a >= b);
// console.log("a < b", a < b);

// let cond1 = a > b;
// let cond2 = a === b;
// console.log(" cond1 && cond2 = ", cond1 && cond2);
// console.log(" cond1 || cond2  = ", cond1 || cond2);

// let cos1 = !(a > b);
// console.log(!(5 > 2));

// // Loops and Strings
// for  ( let i=1; i <= 5; i++)
//  { console.log("i = ", i);

// caluculate sum 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log("Sum: ", sum);
// let i = 5;
// while (i <= 10);
// {
//   console.log("Apna collage");
//   i++;
// }
// }yaha pa agar condition false hain tou run nhi kara ga
// let i = 1;
// do {
//   console.log("i=", i);
//   i++;
// } while (i <= 5);
// for- of loop
// let str = "TaniaNaz";
// let size = 0;
// for (let i of str) {
//   console.log("i=", i);
//   size++;
// }
// console.log("string size=", size);
// let str = "tania naz";

// console.log(str[8]);
// template literally//strings mein be slice, trim, toLowerCase, charAt, length, etc. use kar sakte hain

//let string = ` this is a special string ${1 + 2 + 3} `;
//let str = `tania/nnaz`;
//let str = `tania/tnaz`; //lenght is equal to 8 but show 12//
// let str = "    tania naz   ";
// console.log(str.trim());
// let sin = "tania naz";
// sin=str.toLowerCase();//same upper case be ase he hain
// console.log(sin);
// let str = "500500";
// console.log(str.slice(0, 3));
// let snr = "tania naz";
// console.log(snr.charAt(3));
// let marks = {
//   stu1: 90,
//   stu2: 85,
//   stu3: 78,
// };
// console.log(marks);
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(array);
// console.log(array[0]);
// console.log(array[3]);
// console.log((array[6] = 10)); //updating value at index 6
// console.log(array[8]);
// console.log(array.length);
// console.log(array[9]); //undefined
//let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//for (let i = 2; i < array.length; i++) {
//console.log(array[i]);}

// console.log("hello");
// "abc".toUpperCase()[(1, 2, 3)].push(4);
//function myFunction() // permrter
// { console.log("welcome to apna collage");
//   console.log(" we are learning JS");
// }

//for input defined write in a paranshetsis
//function myFunction(msg) {
//   console.log(msg);//}

// myFunction("i love js", 100); //arugment

// //function
// function sum(x, y) {
//   s = x + y;
//   console.log("before return");
//   return s;
// }

// let val = sum(3, 4);
// console.log(val);
// // //function ka paremiters jo hota haun ha wo local apna block tak sirf work kar sakte han.

// function sum(a, b) {
//   return a + b;
// }
// function mul(a, b) {
//   return a * b;
// }
//arrowfunction
// const arrowSum = (a, b) => {
//   console.log(a + b);
//   return a + B;
// }; //we will use in return. i pratice on browser.and without input we also use a arrow function. its a new version which is mostly used.
// const printHello = () => {
//   console.log("hello");
// };
// let arr = ["tania , sufyan ,alishba,muneeb"];

// arr.forEach((Val, idx, arr) => {
//   console.log(Val.toUpperCase(), idx, arr);
// }); //interview mein poucha ja sakte higher order function function of permiter or function of return called higher oder function.

// //arrays example
// let items = [500, 1000, 1100, 1200, 555];

// let i = 0;
// for (let val of items) {
//   console.log(`index value ${i} = ${val}`);
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(items[i]);
//   i++;
// 76

// for (i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
//   console.log(items[i]);
// }
//push, pop, shift, unshift, splice, slice,humsha chota word sa shru hota hain ya methods array
//push mein element add kar lo array mein ;pop mein remove hota hain aur return be hota hain;
//slice mein arraty ka koi part nikal sakte hain
//splice mein kisi bhi index se koi bhi element nikal sakte hain aur uski jagah dusra element daal sakte hain;shift.
// aur unshift mein first element add hota hain
// let array = [1, 2, 3, 4, 5, 6];

// array.splice(2, 3, 10, 20); //2nd index se 3 element nikal do aur unki jagah 10 aur 20 daal do
// console.log(array); // [1, 2, 10, 20, 6]
//dom
// document.body.childNodes[5].innerText = "Hello this is a new text!";

// let heading = document.getElementById("heading");
// console.log("heading");
// let headings = document.getElementsByClassName("heading-class");
// console.log("headings");
// console.dir("headings");
// let pare = document.getElementsByTagName("p");
// console.log(pare);
// let element = querySelector(p).Childern;
// console.log(element);
// let all = document.querySelectorAll("p");
// //next nodes,commends , elements,first childern ,last childern// ka bara mein mdn s aparo
// innerText, innerHtml, textContent, tagName;
// let id = document.querySelector("div");
// console.log(div);
// let div = div.getAtrribute("id");
// console.log("id");
// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "new class"));

// let div = document.querySelector("div");
// div.style.background = "green";
// div.style.visibility ="hidden"
// let newbtn = document.createElement("button");
// newbtn.innerText = "Click me";
// console.log("newbtn");
// let p = document.querySelector("p");
// p.after(newbtn);
// //node.prepand(start to the node),node.append(end of the node inside ),node.after,node.before//node .remove;
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };
//addEventlistener mein hum multiplr kam karwa sakte hain.removeEventlistener sa kuch remove karwa sakte hain lakin bilkul same callback function will be same to remove
// let btn1 = document.querySelector("#btn1");
// btn1.addEventlistener("click", (evt) => {
//   console.log("button1 was clicked");
// });
//if i went to remove thids listener so i use
//btn1.removeEventListener("click", (evt) => {
//console.log("button 1 was clicked");

//comparison operator//
//ternary operators//
//assignment operators
//arthemitic
//bitwise

// fetch("https://www.google.com")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
//   .catch((error) => {
//     console.log(error);
//   });
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())

//   .then((data) => {
//     console.log(data);
//   });
// const Name = "tania";
// const Class = 11;
// console.log(`MY name is ${Name}. iI am a student of class ${Class}`);
// let userID = Symbol("id");
// let user = {
//   name: "tania",
//   [userID]: 12345,
// };
// console.log(typeof userID);
// //operators
// const a = 9;
// const b = 8;
// const sum = a + b;
// console.log("sum = ", sum);
// const diff = a - b;
// console.log("diff = ", diff);
// const mul = a * b;
// console.log("mul = ", mul);
// const mod = a % b;
// console.log("mod = ", mod);
// const exp = a ** b;
// console.log("exp = ", exp);
// const div = a / b;
// console.log("div = ", div);
// //assigment operators
// let d = 5;
// d += 4;
// console.log("d = ", d);
// let f = 7;
// f -= 2;
// console.log("f = ", f);
// f *= 3;
// console.log("f = ", f);
// f /= 2;
// console.log("f = ", f);
//camparison operators
// const s = "2";
// const t = 2;
// console.log(s == t);
// console.log(s === t);
// console.log(s != t);
// console.log(s !== t);
// console.log(s > t);
// console.log(s < t);
// console.log(s >= t);
// console.log(s <= t);
// //logically operators
// console.log(5 > 3 && 10 < 5);
// console.log(5 > 3 || 10 < 5);
// console.log(!(5 > 3));
// //if and else
// let age = 15;
// if (age <= 17) {
//   console.log("you are child");
// } else {
//   console.log("you are mature");
// }
// let Grade = 11;
// if (Grade == 11) {
//   console.log("you are in 11th class");
// } else if (Grade == 12) {
//   console.log("last year of inter");
// } else {
//   console.log("start study bcz its very important");
// }
// //loops
// for (let i = 7; i <= 11; i++) {
//   console.log(i);
// }
// //while loop
// let n = 1;
// while (n <= 4) {
//   console.log(n);
//   n++;
// }
// let int = 1;
// do {
//   console.log(int);
//   int++;
// } while (int <= 8);
// let array = ["tania", "sufyan", "muneeb"];
// for (let name of array) {
//   console.log(name);
// }

// let student = {
//   name: "Ali",
//   age: 16,
// };

// for (let key in student) {
//   console.log(key);
// }
// // let num = [1, 2, 3, 4];
// // num.forEach(function (num) {
//   console.log(num);
// }
// let num = [1, 2, 3, 4, 5];
// num.forEach((num) => {
//   console.log(num);
// });
// //nested loop
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 2; j++) {
//     console.log(i, j);
//   }
// }
// for (let i = 1; i <= 3; i++) {
//   let stars = "";
//   for (let j = 1; j <= 2; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }
// function greet(name) {
//   console.log(`MY name is ${name}`);
// }
// greet("tania");
// function add(c, e) {
//   console.log(c + e);
// }
// add(5, 10);
// function square(num) {
//   console.log(num ** 2);
// }
// square(4);
// let square;
// const square = (num) => {
//   console.log(num ** 2);
// };
// const add = (c, e) => {
//   console.log(c + e);
// };
// add(4, 3);
// const even = () => {
//   for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//       console.log("even number", i);
//     }
//   }
// };
// even();
// let array = ["tania", "muneeb", "alishba", "sufyan"];
// console.log(array[0]);
// //push end pa add karta hain , pop end se remove karta hain aur return be karta hain;
// array.push("javed");
// console.log(array);
// array.pop();
// console.log(array);
// //shift first element remove karta hain,unshift first element add karta hain
// array.shift();
// console.log(array);
// array.unshift("tania");
// console.log(array);
// let fruits = ["apple", "banana", "orange", "grape"];
// for (let fruit of fruits) {
//   console.log(fruit);

//map,filter,reduce,includes,indexOf,join,find,slice,splice,
// let numbers = [1, 2, 3, 4, 5];
// let mul = numbers.map((num) => num * 2);
// console.log(mul);
// let evenNum = [1, 2, 3, 4, 8];
// let find = evenNum.filter((num) => num % 2 === 0);
// console.log(find);
// let user = ["ahmed", "ali", "sara", "hassan"];
// let result = user.find((user) => user === "sara");
// console.log(result);
// let words = ["hello", "world", "javascript"];
// let sentence = words.join(" ");
// console.log(sentence);
// let arr = [1, 2, 3, 4, 5];
// let sliced = arr.slice(1, 4); //index 1 se 3 tak nikal do
// console.log(sliced);
// let spliced = arr.splice(2, 2, 10, 20); //index 2 se 2 element nikal do aur unki jagah 10 aur 20 daal do
// console.log(spliced);
// console.log(arr);
// object = {
//   name: "tania",
//   age: 16,
//   city: "karachi",
//   profession: "student",
// };
// console.log(object.name);
// console.log(object["age"]);
// object.age = 17;
// console.log(object["age"]);
// object.country = "Pakistan";
// console.log(object);
// let name = {
//   name: "tania",
//   age: 16,
//   city: "karachi",
// };
// for (const key in name) {
//   console.log(key, name);
// }
//dom manuplation
//let heading = document.getElementById("para");
//heading.textContent = "this is a new paragraph";
//heading.innerHTML = "<h1>this is a new heading</h1>";
//document.querySelector("#heading").style.color = "red";
//document.querySelector(".para").style.background = "yellow";
//document.querySelector("p").style.fontSize = "20px";
//let btn = document.querySelector("button");
//btn.addEventListener("click", () => {
//   console.log("button was clicked")
// });
// let para = document.querySelector("#para");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   para.textContent = "Welcome";
// });
// let form = document.querySelector("#form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("form submitted");
// });
// let div = document.querySelector("#div");
// div.addEventListener("mouseover", () => {
//   div.style.background = "blue";
// });
// div.addEventListener("mouseout", () => {
//   div.style.background = "green";
// });
// let input = document.querySelector("#input");
// input.addEventListener("change", () => {
//   console.log("input value: ", input.value);
// });
// let p = document.createElement("p");
// p.textContent = "hello";
// document.body.appendChild(p);
// let para = document.querySelector("#para");
// let btn = document.createElement("button");
// btn.addEventListener("click", () => {
//   para.remove();
// });
// let heading = document.querySelector("#heading");
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   heading.classList.add("active");
// });
// btn.addEventListener("click", () => {
//   heading.classList.remove("active");
// });
// btn.addEventListener("click", () => {
//   heading.classList.toggle("active");
// });/agar class active hai tou remove kar do aur agar nhi hai tou add kar do
//event objects
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", (event) => {
//   console.log(event);
// });

// btn.addEventListener("click", (event) => {
//   console.log(event.target);
// });
// let form = document.querySelector("#btn");
// btn.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("submitted");
// // });
// let item = document.querySelectorAll(".item");
// item.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(item.textContent);
//   });
// });
// let fruits = document.querySelector("#fruits");

// fruits.addEventListener("click", (event) => {
//   console.log(event.target.textContent);
// });
//template literals
// let nam = "tania";
// let age = 16;
// console.log(`My name is ${nam} and I am ${age} years old.`);
// //destructuring
// let user = {
//   name: "tania",
//   age: 16,
//   city: "karachi",
// };
// let { name, age, city } = user;
// function show(...numbers) {
//   console.log(numbers);
// }

// show(10, 20, 30, 40);

// function sum(...nums) {
//   let total = 0;
//   for (let num of nums) {
//     total += num;
//   }
//   console.log(total);
// }
// sum(10, 20, 30);
// // call back function
// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback();
// }
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }
// function userData(callback) {
//   callback("tania");
// }
// userData(greet);
// function sum(a, b) {
//   console.log(a + b);
// }
// function calculate(callback) {
//   callback(5, 10);
// }
// calculate(sum);
//set time out
// let greet = "hello";
// console.log(greet);
// setTimeout(() => {
//   console.log("this is a delayed message");
// }, 2000);
// console.log("this message is shown immediately");
// //set interval
// let name = "Tania";
// let id = setInterval(() => {
//   console.log(`Hello, ${name}!`);
// }, 1000);
// clearInterval(id);
// async function getData() {
//   setTimeout(() => {
//     console.log("hello this is a delayed message");
//   }, 2000);

// let output = getData();
// async function getData() {
//   let response = await fetch(
//     "https://jsonplaceholder.typicode.com/comments?postId=1",
//   );
//   let data = await response.json();
//   console.log(data);
// }
// let name = localStorage.getItem("name");
// console.log(name);
// localStorage.setItem("name", "tania");
// localStorage.clear();
// sessionStorage.setItem("name", "tania");
// sessionStorage.getItem("name");
// sessionStorage.clear();
// async function getData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   data.forEach((data) => {
//     console.log(data.name);
//   });

// async function getUsers() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUsers();
async function getPosts() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  console.log(data);
}
getPosts();
let promise = new Promise((resolve, reject) => {
  let sucess = true;
  if (sucess) {
    resolve("kam ho gaya");
  } else {
    reject("kam nhi ho paya");
  }
});
promise
  .then((message) => {
    console.log("success");
  })
  .catch((error) => {
    console.log("error");
  });
  
// let para = document.getElementById("#para");
// // para.addEventListener("click", (  ) => {
//   para.textContent = "my name is tania";
// });
