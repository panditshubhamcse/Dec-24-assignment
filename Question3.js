
//Write a program to check the given number is a perfect square or not! (Don't use function)

alert("This program will check weather  number is perfect square are not ")

var a=prompt("Enter a number");
var flag=0;
for(var i=1; i<a;i=i+1){
   if(a%i==0 && a/i==i){
     flag=1;
     break;
   }
}
if(flag==1){
   alert("It is a Perfect Square Number");
}else{
    alert("It is not a Perfect Square Number");
}