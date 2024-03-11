console.log("Hello world");

const test = "Hello World";

let test2 = "Hello World";

let num = 5;
num = 45;
num = "Hello World";
let SomieBool = true;
let nullValue = null;
let SomeArray = [];
let SomeObject = {
    key: "value",
    key2: "value",
};
console.log(SomeObject.key);

if (SomeObject.key === "value") {
    console.log("key is value");
}

const fruits = ["pomme", "banane", "orange"];
fruits.push("raisin")
console.log(fruits)

const ben = {
    firstname: "Benjamin",
    lastname: "Seixeiro",
    age : 19,
    isStudent: true,
    hobbies: ["guitar", "programming", "gaming"],
};

console.log(ben.firstname);
console.log(ben.hobbies);

const { firstname, lastname, age} =ben;
console.log (firstname);

const someVariable = [...fruits, "kiwi" ];
console.log(someVariable);

const newStudent = {...ben, age: 20, lastname: "Franklin",}
console.log(newStudent)