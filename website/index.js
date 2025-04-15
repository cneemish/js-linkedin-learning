    /* console.log(`Hello world`);
    console.log(`Adding 1 + 2 =`, 1 + 2); */

   /*  window.alert(`this is an alert!`);
    window.alert(`Hi How are you?`); */

/* document.getElementById("testOne").textContent = `Hellow`;
document.getElementById("paragraphOne").textContent = `This is a paragraph`; */


//var answer = window.prompt("Type Yes, No, Maybe");
/* if (answer === "Yes") {
    console.log(`You typed Yes`);  
} else if(answer ==="No") {
    console.log(`You typed no`);
} else if (answer === "Maybe"){
    console.log('You Typed maybe');
} else{
    console.log('Something else?')
} */

/* witch (answer) {
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
} */

var pageName = [
    "Home",
    "About Us",
    "Contact Us",
    "Products",
    "Blogs",
    "My Website",
    "WorkPage",
    "SubmitPage"
];

/* for (i = 0; i< pageName.length; i ++){
    if (document.title === pageName[i]){
        console.log("We are here:" + pageName[i])
        break;
    } else {
        console.log("We are not here:" + pageName[i])
    }
}
 */
console.log(pageName)
for (var pa in pageName ){
    if (pageName.hasOwnProperty){
        console.log(pa, pageName[pa]);
    }
    
}