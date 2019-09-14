var text = "cat, bat, sat, fat";
var pattern1 = /.at/;

var matches = pattern1.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern1.lastIndex);

matches = pattern1.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern1.lastIndex);

console.log();

var pattern2 = /.at/g;
var matches = pattern2.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern2.lastIndex);

matches = pattern2.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern2.lastIndex);