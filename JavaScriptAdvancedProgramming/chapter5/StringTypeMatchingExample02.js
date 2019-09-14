var  text = "cat, bat, sat, fat";
var result = text.replace("at", "ond");
console.log(result);

result = text.replace(/at/g, "ond");
console.log(result);