var text = "this has been a short summer";
var pattern = /(.)hort/g;

if (pattern.test(text)) {
    console.log(RegExp.input);
    console.log(RegExp.leftContext);
    console.log(RegExp.rightContext);
    console.log(RegExp.lastMatch);
    console.log(RegExp.lastParen);
    console.log(RegExp.multiline);
    console.log();
    console.log(RegExp.$_);
    console.log(RegExp["$`"]);
    console.log(RegExp["$'"]);
    console.log(RegExp["$&"]);
    console.log(RegExp["$+"]);
    console.log(RegExp["$*"]);
}