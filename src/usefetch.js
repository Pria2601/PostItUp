import { useState,useEffect,useCallback } from "react";
// import bloglist from "./blogList";
const useFetch = (url)=>{
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error , setError]=useState(null);

    const fetchData = useCallback(() => {

    // useEffect(()=> {
        // const abortControl= new AbortController();

        // fetch(url,{signal:abortControl.signal})
        fetch(url)
        .then(res => {
            if(!res.ok){
                console.log(res);
                throw Error("can't fetch data ... ");
            }
            console.log(res);
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setData(data);
            setTimeout(()=>{
            setIsPending(false);
            },2000);
            setError(null)
        })
        .catch(err=>{
            // idk what purpose this abort serves...
            if(err.name==='AbortError'){
                console.log("fething aborted");
            }
            else{
                console.log(err.message);
            // setIsPending(false);
            setTimeout(()=>{
                setIsPending(false);
            },2000);
            setError(err.message);
            }
            
        })
        // return () =>abortControl.abort();
    // },[url]);
    },[url]);

    useEffect(() => {
        fetchData();
      }, [fetchData]);
    
    return {data,isPending,error,refetch : fetchData};
}
export default useFetch;
// at this point just learn that u have to use refetch function 

