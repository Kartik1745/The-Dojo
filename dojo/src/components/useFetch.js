import { useState, useEffect } from "react";

export const useFetch = (url) =>{
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch(url).then(
            res => {
               return res.json()
            }
        ).then(
            data =>{
                console.log(data);
                setData(data);
            }
        )
    },[url])
    return{data,setData}
}