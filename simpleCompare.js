var one = 1;
var two = 2;
console.log(one, two);
if (one === 1 ) {
    console.log(true);
} /* else if (one !== one) { 
    console.log(false);
}  */else {
    console.log(one + two);
}

var a = 3;
var b = 5;

function compare (){
    if (a > b){
        console.log(true);
    }
    else if (a < b){
        console.log(false);
    }
    else {
        console.log("Equal values");
    }
}

return compare(a, b);