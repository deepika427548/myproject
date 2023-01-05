function findDigit(n)
{
let count=0;
let str=n.toString()
let a=str.split('')
for(let i=0;i<a.length;i++)
 {
if(n % Number(a[i]) === 0){
    count++
}

 }
 return(count)
}
let count=findDigit(1455)
console.log(count)