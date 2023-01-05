function mulTable(num)
{
    let i
    let mul
    for(i=1;i<=10;i++){
        mul=i*num
        console.log(`${i} * ${num} = ${mul}`)
    }
}

mulTable(1)
mulTable(2)
console.log("multiplication table of 3:")
mulTable(3)