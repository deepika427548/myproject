let hours="01:20:24pm"
function convert(time24)
{

 let a=time24.split(":")
 let hour=a[0];
 let min=a[1];
 let sec=a[2].slice(0,2)
 let modifier=a[2].slice(2)
 console.log(sec)
 console.log(modifier)
  if(hour==="12") hours="00"
  if(modifier==="pm"){
    hour=parseInt(hour)+12
  }
  return(`${hour}:${min}:${sec}`)

}
 console.log(convert(hours))