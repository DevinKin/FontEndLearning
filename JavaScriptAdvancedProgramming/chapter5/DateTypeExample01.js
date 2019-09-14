var ms = Date.UTC('2019');
console.log(ms);

var someDate = new Date(Date.parse("May 25, 2004"));
console.log(someDate);

var y2k = new Date(Date.UTC(2000,0));
console.log(y2k);

var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
console.log(allFives);

var y2k2 = new Date(2000,0);
console.log(y2k2);

var allFives2 = new Date(2005, 4, 5, 17, 55, 55);
console.log(allFives2);

var start = Date.now();

var stop = Date.now();

var result = stop - start;
console.log(result);