const num = parseInt(prompt("enter a positive number:"))
let isPrime=true;
if(num==1){
    console.log("the number neither a prime neither a composit number")

}
else if(num>1){
    for(let i=2;i<num;i++){
        if(num%i==0)
        isPrime=false
    }
}
if(isPrime)
{
    console.log("its a prime num")
}
else{
    console.log("its not a prime")
}