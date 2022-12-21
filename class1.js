class Rectangle{
    constructor(length,breadth){
        this.length=length
        this.breadth=breadth
    }
}
const myPlot1=new Rectangle(10,20)
console.log(myPlot1)
function Area()
{
    let a=myPlot1.length*myPlot1.breadth
    return(a)
}
let area=Area()
console.log(area)