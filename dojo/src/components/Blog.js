import { useEffect, useState } from "react";
import './Blog.css';
import BlogList from "./BlogList";
import { useFetch } from "./useFetch";

const Blog = () => {

    const {data:blogs,setData} = useFetch('http://localhost:8000/blogs')

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id!==id);
        setData(newBlogs);
    }

    return (
        <div className="blog">
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
        </div>    
    );

}

export default Blog;