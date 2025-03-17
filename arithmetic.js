var a = 21;

function even(){
    let b = 2;
    const c = (a % b);
    if (c===0) {
        console.log(a, "Is even number");
    } else {
        console.log(a, "Is an odd number and the remainder is:", c);
    }
}

return even();

let counter = 0;
//let counterUpdate = counter++;
console.log(counter++);

const sentance = "Hi I'm neemish!"
console.log(sentance.length);