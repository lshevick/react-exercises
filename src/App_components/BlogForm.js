import { FormComponent } from './BlogForm_components/FormComponent';
import { useState, useEffect } from "react";

const DATA = [
    { title: 'Blog One', body: 'Lorem ipsum dolor sit amet.' },
    { title: 'Blog Two', body: 'Lorem ipsum dolor sit amet.' },
]

export function BlogForm() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(DATA);
    }, []);

    const addBlog = (title, body) => {

        const newBlog = {
            title,
            body,
        }
        setBlogs([newBlog, ...blogs])
    }

    return (<div className="blog-form">

        <FormComponent addBlog={addBlog} />
        
        <div>
            <p>Blogs saved: <span>{blogs.length}</span></p>
        </div>
    </div>
    );
}
