var string1 = "This is a string";
var string2 = "New string added";
var string3 = "Another string added to add data";
var string4 = "everyday is new string day";

var regex = /this/i;

regex.test(string1); 
console.log(regex.test(string1)); 
console.log(regex.test(string2)); 
console.log(regex.test(string3)); 
console.log(regex.test(string4)); 
