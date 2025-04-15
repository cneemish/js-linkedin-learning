/* var animal ='cat';

if (animal === 'Dog'){
    console.log("You love cat")
} else
{
    console.log("You love Dog")
}
 */
/* function animal (){
    animal.type 
    animal.job
    animal.color 
}

animal.type="Cat";
animal.job="Breeder";
animal.color="black";

if (animal.color === "Yellow"){
    return true
} else {
    return false
} */

function buzzWord(n){
    for(let i = 0; i<=n; i ++){
        if (i === 3 && i === 5){
            console.log('FizzBuzz');
        } else if (i === 3 ){
            console.log('Fizz');
        } else if (i === 5){
            console.log('Buzz');
        }
        else{
            console.log ("Didn't find anything");
        }
    }
}
 
return buzzWord (10);