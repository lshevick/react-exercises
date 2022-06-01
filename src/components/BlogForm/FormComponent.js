import { useState } from "react";

 const FormComponent = ({ addBlog }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim().length === 0 || body.trim().length === 0) {
            return;
        }

        addBlog(title, body);

        setTitle('')
        setBody('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="blog-post-title">Title</label>
            <input id="blog-post-title" type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="blog-post-body">Body</label>
            <input id="blog-post-body" type="text" name='body' value={body} onChange={(e) => setBody(e.target.value)} />

            <button type='submit'>Submit</button>
        </form>
    );
}

export default FormComponent;