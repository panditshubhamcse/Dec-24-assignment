//Take n from the user and print first n prime numbers.



var a = prompt("Enter number: ");

for(var i=2; i<=a ;i++){

        var isPrime = true;

        for(var j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
            console.log(i);
        }
    } 
