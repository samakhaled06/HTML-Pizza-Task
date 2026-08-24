//Loops
for (i=0;i<=10;i++){
console.log(i)}
var i=0;
while(i<=10){
console.log(i);
i++;}
var i=0;
do{
console.log(i);
i++;
}while(i<=10);
//function
function getAvg(num1, num2) {
var result=(num1+num2)/2;
console. log(result);}
getAvg(20,30);
//Object
var student={
    Fullname:"sama khaled",
    age:20,
    id:3535,
    gender:"Female",
    job:"developer",
    pet:{
        kind:"dog",
        age:7,
        gender:"female",
        food:{
            type:"protein",
            amount:"twice"
        }
    },
    study:function(hours){
        console.log(`studied ${hours}`);
    }

};

console.log(`Student age is  ${student.age}`);
console.log(`She has a pet ${student.pet.kind}`);
student.study("3 hours");