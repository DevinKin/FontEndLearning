var pattern1 = /\[bc\]at/i;

console.log(pattern1.global);
console.log(pattern1.ignoreCase);
console.log(pattern1.multiline);
console.log(pattern1.lastIndex);
console.log(pattern1.source);

var pattern2 = new RegExp("\\[bc\\]at", "i");
console.log(pattern2.global);
console.log(pattern2.ignoreCase);
console.log(pattern2.multiline);
console.log(pattern2.lastIndex);
console.log(pattern2.source);
