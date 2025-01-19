import { useState,useEffect } from "react"

const UseFetch = (url) => {

    const[data,setData] = useState(null);
    const[pending,setPending]=useState(true);
    const[isError,setIsError]=useState(false);

    const dltNote =(id) => {
        // console.log("delete button pressed")
       const newData=data.filter((dltitem)=>dltitem.id!==id)
        setData(newData)
    }



    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
        .then((response)=>{
            if(!response.ok){
                throw Error("can not fetch data.......")
            }
            return response.json()
        })
        .then((data)=>{
            setData(data)
            setPending(false)
            setIsError(null)
        })
        .catch((err)=>{
            console.log(err.message)
            setPending(false)
            setIsError(err.message)
        })}
        ,1000)
    },[url]) 
return {data,pending,isError,dltNote} ;
}
 
export default UseFetch;