import PostDetail from './BlogCMS/PostDetail';
import Form from './BlogCMS/Form';
import { useEffect, useState } from "react";

const DATA = [
    { id: 1, title: 'Blog One', body: 'Lorem ipsum dolor sit amet.' },
    { id: 2, title: 'Blog Two', body: 'Lorem ipsum dolor sit amet.' },
    { id: 3, title: 'Blog Three', body: 'Lorem ipsum dolor sit amet.' },
]

const INITIAL_STATE = [];

const BlogCMS = () => {
    const [blogs, setBlogs] = useState(INITIAL_STATE);
    const [uid, setUid] = useState(4);

    useEffect(() => {
        setBlogs(DATA);
    }, [])

    const addBlog = (title, body) => {
        const newBlog = {
            id: uid,
            title,
            body,
        }
        setBlogs([newBlog, ...blogs]);
        setUid(uid + 1);
    }

    const editBlog = (id, title, body) => {
        const updatedBlogs = [...blogs];
        const index = updatedBlogs.findIndex(blog => blog.id === id);
        updatedBlogs[index].title = title;
        updatedBlogs[index].body = body;
        setBlogs(updatedBlogs);

    }

    const removeBlog = (id) => {
        const updatedBlogs = [...blogs];
        const index = updatedBlogs.findIndex(blog => blog.id === id);
        updatedBlogs.splice(index, 1);
        setBlogs(updatedBlogs);
    }



    const postList = blogs.map(blog => <PostDetail
        key={blog.id} {...blog}
        editBlog={editBlog}
        removeBlog={removeBlog}
    />)

    return (
        <div className="blog-cms">

            <Form addBlog={addBlog} />

            <ul>
                {postList}
            </ul>

        </div>
    );
}

export default BlogCMS;