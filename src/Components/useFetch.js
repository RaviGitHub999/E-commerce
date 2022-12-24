import { useEffect } from "react";
import { useState } from "react";
function useFetch(request) 
{
    let [data , setData] = useState(null);
    let[pending,setPending]=useState(true)
    let[error,setError]=useState(null)
 useEffect(()=>
 {
   setTimeout(()=>
   {
     fetch(request)
     .then((response)=>
     {
       if(response.ok===true)
       {
         return(response.json())
       }
       else{
         throw Error("Data Not found")
       }
       
        })
     .then((data)=>{setData(data)
       setPending(false)})
     .catch((err)=>
     {
        setError(err.message)
        setPending(false)
     })
   },3000)
  
 },[])
 return{data,pending,error}
}

export default useFetch;