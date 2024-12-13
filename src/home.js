// import {useState} from 'react';

// const Home = () => {

//     const [name,setName]= useState('mario');
//     const [age,setAge]=useState(4);
//     const handleClick = ()=> {
//         console.log('hello');
//         setName('ligi');
//         setAge(30);
//     }
//     const clickagain=(name)=>{
//         console.log('again'+name)
//     }


//     return ( 
//         <div className="home">
//             <h2>APP HOMEPAGE</h2>
//             <p>{name} is {age} years old </p>
//             <button onClick={handleClick} >Click me </button>{/* two types of funtion  */}
//             <button onClick={()=>{clickagain('priya')}} >Click me again </button>
            
//         </div>
//      );
// }
 
// export default Home;
// import {useEffect, useState} from 'react';
import Bloglist from './blogList';
import useFetch from './usefetch';

const Home = () => {
    const { data: blogs, isPending, error, refetch } = useFetch("http://localhost:8000/blogs");
    // data is called as blogs here...


    // const [blogs,setBlogs]=useState(null);
    // const [isPending,setIsPending]=useState(true);
    // const [error , setError]=useState(null);

    // const handleDelete= (id)=>{
    //     const newBlogs = data.filter(blog=>blog.id !== id);
    //     setData(newBlogs);
    // // }
    // useEffect(()=> {
    //     fetch('http://localhost:8000/blogs')
    //     .then(res => {
    //         if(!res.ok){
    //             throw Error("can't fetch data ... ");
    //         }
    //         console.log(res);
    //         return res.json();
    //     })
    //     .then(data=>{
    //         console.log(data);
    //         setBlogs(data);
    //         setIsPending(false);
    //         setError(null)
    //     })
    //     .catch(err=>{
    //         console.log(err.message);
    //         // setIsPending(false);
    //         setTimeout(()=>{
    //             setIsPending(false);
    //         },2000);
            
    //         setError(err.message);
    //     })
    // },[]);


    return (
         <div className="home">
            <button onClick={()=>refetch()}>refresh data</button>
         {error && <div>{error}</div>}
         {/* {error && setIsPending(false)} doesnt work idk why */}


        {isPending && <div className="ispend">Loading... </div>}
        {/* {data && <Bloglist blogs={data} title="All blogs" handleDelete={handleDelete}/>} */}
        {blogs && <Bloglist blogs={blogs} title="All blogs" />}

        </div>);
}
 
export default Home;