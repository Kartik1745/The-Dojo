import { useEffect, useState } from "react";
import './Blog.css';
import BlogList from "./BlogList";

const Blog = () => {
    const [blogs, setBlogs] = useState(null);
    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id!==id);
        setBlogs(newBlogs);
    }
    
    useEffect(()=>{
        fetch('http://localhost:8000/blogs').then(
            res => {
               return res.json()
            }
        ).then(
            data =>{
                console.log(data);
                setBlogs(data);
            }
        )
    },[])

    return (
        <div className="blog">
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
        </div>    
    );
}

export default Blog;