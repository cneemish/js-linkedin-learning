var sentance = "This is a string";
console.log(sentance);
var word =`this is also a string`;
console.log(word);
var wordD = 10;
if (wordD == String) {
    console.log(true,"This is a string");
} else {
    console.log(false,wordD);
}

var longString = "This string will have a lot of characters, that would conisit of double inverted commas \"\", single inverted comma '', and a tict`` ";
console.log(longString);
'<a href="https://www.contentstack.com/docs/developers/developer-hub/marketplace-app-boilerplate">;'


var newString ="This is a new String. And it is more charactes now";
console.log("Lenght of this string is, ",newString.length);
newString = newString.toUpperCase();
console.log(newString);
newString = `Adding new string to the ${word} sentance`;
console.log(newString);