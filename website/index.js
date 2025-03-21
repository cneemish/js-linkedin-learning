    /* console.log(`Hello world`);
    console.log(`Adding 1 + 2 =`, 1 + 2); */

   /*  window.alert(`this is an alert!`);
    window.alert(`Hi How are you?`); */

/* document.getElementById("testOne").textContent = `Hellow`;
document.getElementById("paragraphOne").textContent = `This is a paragraph`; */


var answer = window.prompt("Type Yes, No, Maybe");
/* if (answer === "Yes") {
    console.log(`You typed Yes`);  
} else if(answer ==="No") {
    console.log(`You typed no`);
} else if (answer === "Maybe"){
    console.log('You Typed maybe');
} else{
    console.log('Something else?')
} */

switch (answer) {
    case "Yes":
        console.log(`You typed Yes`);
        break;
    case "No":
        console.log(`You typed no`);
        break;
    case "Maybe":
        console.log(`You typed Maybe`);
        break;
    default:
        console.log('Something else?')
        break;
}