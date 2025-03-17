var a  = 10;
var b = 100;
if (a > b ){
    console.log(true);
} else if (a == b) {
    console.log( "Equal values");
} else if (b>a){
    console.log(true, "B is greater than a ");
} 
else {
    console.log(false);
}

var c = 100;
var d = "This is a sentance "

try {
    if (typeof c === "number"){
        console.log(true);
    } else if (typeof d === "string"){
        console.log(true, " d is a string");
    } else {
        console.log(false); 
    }
} catch (error) {
    console.log(error);
}