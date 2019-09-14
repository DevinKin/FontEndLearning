var text = "cat, bat, sat, fat";
var pattern = /.at/;

var matches = text.match(pattern);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);