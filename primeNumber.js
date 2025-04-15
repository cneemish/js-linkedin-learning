
   function prime(n){
    for (let i = 1; i<=n ; i ++){
      if(isPrime(i)){
        console.log(i, "Is a prime Number")
      } else {
        console.log(i, "Is not a prime Number")
      }
    }
      
   }

   function isPrime(num){
    if(num<=1) return false;
    for(let j = 2; j <=Math.sqrt(num); j++){
      if (num % j === 0) return false;
    }
    return true;
   }

prime(30)