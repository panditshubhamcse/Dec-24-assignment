// 1 -> Take n from the user and alert the factorial of that number.

alert("To Get the Factorial of given number")

var n = prompt("Enter any number");
var fact = 1;
for( var i=1; i<=n; i++) {
   fact = fact*i;
}
  console.log(fact);