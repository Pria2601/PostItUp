import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
    const [title , setTitle]=useState('hello');
    const [body , setBody]=useState('hello');
    const [author , setAuthor]=useState('deva');
    const [isPending,setIsPending]=useState(false);
    const navigate = useNavigate();//ininitialise

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog ={title,body,author};
        // console.log(blog);

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers:{"content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            //navigate('/home'); // Navigate to the home page
            //navigate('/details', { state: { blogId: 1 } }); // Navigate to /details with state
            //navigate('/login', { replace: true }); // Replace the current entry with /login
            navigate(-1);
        })
    }

    return ( 
        <div className="create">
            <h2>add new blog </h2>
            <form >
                <label >Blog title</label>
                <input type="text" required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)} />

                <label >Blog body</label>
                <textarea required 
                     value={body}
                     onChange={(e)=>setBody(e.target.value)}
                     ></textarea>

                <label >Blog author</label>
                <select  value={author}
                     onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="deva">deva</option>
                    <option value="ishika">ishika</option>
                </select>
                {!isPending && <button onClick={handleSubmit}>add it</button> }
                {isPending && <button disabled >adding blog ...</button> }
                <p>{title}</p>
            </form>
        </div>
     );
}
 
export default Create;