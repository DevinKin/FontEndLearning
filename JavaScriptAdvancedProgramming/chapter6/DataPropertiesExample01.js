var person = {};

Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});

console.log(person.name)
person.name = "Greg"
console.log(person.name)


var person2 = {};

Object.defineProperty(person2, "name", {
    configurable: false,
    value: "Nico"
});

console.log(person2.name)
delete person2.name
console.log(person2.name)

// 抛出错误
Object.defineProperty(person, "name", {
    configurable: true,
    value: "lala"
})