"use strict";
let divelement = document.createElement(`div`);
document.body.appendChild(divelement);
divelement.setAttribute(`class`, `demo`);
divelement.setAttribute(`id`, `demo`);

let text = document.createTextNode(`welcome`);
divelement.appendChild(text);
divelement.remove();


let newelement = document.createElement(`p`);
document.body.appendChild(newelement);
document.body.removeChild(newelement);


let test = document.createElement(`div`);
document.body.appendChild(test);
test.classList.add(`test`);
test.classList.remove(`test`);

const fname = `sama`;
let age = 20;
console.log(fname);
console.log(age);

function greet(username = `user`) {
    console.log(`welcome ${username}`);
}

greet(`sama`);


const sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 10));


const numbers = [1, 2, 3, 4];
numbers.forEach((num) => {
    console.log(num * 2);
});


const doubledNumbers = numbers.map((num) => {
    return num * 2;
});
console.log(doubledNumbers);


const nums = [10, 25, 5, 30, 15, 40];
const filteredNumbers = nums.filter((num) => {
    return num > 20;
});
console.log(filteredNumbers);

const users = [
    { name: `Ali`, age: 20 },
    { name: `Sara`, age: 28 },
    { name: `Omar`, age: 30 }
];
const user = users.find((item) => {
    return item.age > 25;
});
console.log(user);

const fruits = [`Apple`, `Banana`, `Orange`];

for (let fruit of fruits) {
    console.log(fruit);
}

for (let index in fruits) {
    console.log(index);
}


fruits.forEach((fruit, index) => {
    console.log(`${index} -> ${fruit}`);
});



const names = [`ali`, `mona`, `ahmed`];
const upperNames = names.map((name) => {
    return name.toUpperCase();
});
console.log(upperNames);


const user2 = {
    name: `Mostafa`,
    age: 25
};
const { name, age: userAge } = user2;
console.log(name);
console.log(userAge);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const allNumbers = [...arr1, ...arr2];
console.log(allNumbers);


const numbers2 = [5, 10, 15, 20];
const total = numbers2.reduce((sum, num) => {
    return sum + num;
}, 0);
console.log(total);