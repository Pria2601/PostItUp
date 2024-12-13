import { Link } from "react-router-dom";

const bloglist = ({blogs,title,handleDelete}) => {
    // const blogs = props.blogs;
    // console.log(props,blogs);
   
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
             {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id} >
                    <Link to = {`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <button className="btton" onClick={()=>handleDelete(blog.id)}>Delete</button>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default bloglist;