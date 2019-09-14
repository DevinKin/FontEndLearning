var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(",");
var colors2 = colorText.split(",", 2);
var colors3 = colorText.split(/[^\,]+/);
console.log(colors1);
console.log(colors2);
console.log(colors3);