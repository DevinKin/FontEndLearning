var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";

person.sayName = function () {
    console.log(this.name);
}

person.sayName();

var person1 = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName : function () {
        console.log(this.name);
    }
}


// 21:00 

person1.sayName();