student = {
    Fullname: "sama khaled",
    age: 20,
    id: 3535,
    gender: "Female",
    job: "developer",
    pet: {
        kind: "dog",
        age: 7,
        gender: "female",
        food: {
            type: "protein",
            amount: "twice"
        }
    },
    study: function (hours) {
        console.log(`studied ${hours}`);
    }

};
student.id = 9123;
student.hobby = "reading";

var addedinfo = {
    height: 168,
    city: "cairo"
}
Object.assign(student, addedinfo);
Object.entries(student).forEach(([key, value]) => { console.log(`${key},${value}`) })
console.log(document.getElementsByClassName('item'));
console.log(document.getElementById('main'));
console.log(document.querySelector('.item h2'));
console.log(document.querySelectorAll('.item h2 '))
function userclick() {
    alert('user clicked')
}

function getlog(item) {
    console.log(`User Click on div number: ${item}`);
}

let divElements = document.querySelectorAll(`.demo`);
for (let i = 0; i < divElements.length; i++) {
    divElements[i].addEventListener(`click`, function () {
        userclick();
        getlog(i);
    })
}
function greating(userName) {
    console.log(`Hello ${userName}`);
}
let button = document.querySelector(`.click`);
button.addEventListener(`click`, function () {
    greating(`user`);
})
let divelements = document.querySelectorAll('.demo');
for (let i = 0; i < divelements.length; i++) {
    divelements[i].addEventListener('click', function () { userclick(); })
}
document.addEventListener(`keypress`, function (e) {
    console.log(`User clicked on ${e.key}`);
})
let element = document.querySelector(`.demo`);

element.addEventListener(`mouseenter`, function () {
    console.log(`User entered  element`);
})

element.addEventListener(`mouseleave`, function () {
    console.log(`User left  element`);
})
element.addEventListener(`mousemove`, function (e) {
    console.log(`User clicked`);
    console.log(e.clientX);
    console.log(e.clientY);
})
element.addEventListener(`click`, function () {
    console.log(`User clicked`);
})
